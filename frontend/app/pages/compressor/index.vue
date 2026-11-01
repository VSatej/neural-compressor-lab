<script setup lang="ts">

const config = useRuntimeConfig()

const file = ref<File | null>(null)
const threshold = ref(18 * -1)
const ratio = ref(4)
const attack = ref(10)
const release = ref(100)

const originalUrl = ref('')
const compressedUrl = ref('')
const loading = ref(false)
const error = ref('')

const metrics = ref<{
  originalPeak: string
  compressedPeak: string
  originalRms: string
  compressedRms: string
} | null>(null)

function selectFile(event: Event) {
  const input = event.target as HTMLInputElement
  const selected = input.files?.[0]

  if (!selected) return

  error.value = ''

  if (!selected.name.toLowerCase().endsWith('.wav')) {
    error.value = 'Please select a WAV file.'
    input.value = ''
    return
  }

  if (selected.size > 25 * 1024 * 1024) {
    error.value = 'Maximum file size is 25 MB.'
    input.value = ''
    return
  }

  file.value = selected

  if (originalUrl.value) URL.revokeObjectURL(originalUrl.value)
  if (compressedUrl.value) URL.revokeObjectURL(compressedUrl.value)

  originalUrl.value = URL.createObjectURL(selected)
  compressedUrl.value = ''
  metrics.value = null
}

async function runCompressor() {
  if (!file.value) return

  loading.value = true
  error.value = ''

  try {
    const formData = new FormData()

    formData.append('file', file.value)
    formData.append('threshold', String(threshold.value))
    formData.append('ratio', String(ratio.value))
    formData.append('attack', String(attack.value))
    formData.append('release', String(release.value))

    const response = await fetch(
      `${config.public.apiBase}/api/compress`,
      {
        method: 'POST',
        body: formData
      }
    )

    if (!response.ok) {
      const result = await response.json()
      throw new Error(result.error || 'Compression failed.')
    }

    const audioBlob = await response.blob()

    if (compressedUrl.value) {
      URL.revokeObjectURL(compressedUrl.value)
    }

    compressedUrl.value = URL.createObjectURL(audioBlob)

    metrics.value = {
      originalPeak: response.headers.get('X-Original-Peak') || '-',
      compressedPeak: response.headers.get('X-Compressed-Peak') || '-',
      originalRms: response.headers.get('X-Original-RMS') || '-',
      compressedRms: response.headers.get('X-Compressed-RMS') || '-'
    }
  } catch (err) {
    error.value = err instanceof Error
      ? err.message
      : 'Something went wrong.'
  } finally {
    loading.value = false
  }
}

onUnmounted(() => {
  if (originalUrl.value) URL.revokeObjectURL(originalUrl.value)
  if (compressedUrl.value) URL.revokeObjectURL(compressedUrl.value)
})
</script>


<template>
  <main class="min-h-screen bg-gray-50 text-gray-900">
    <UContainer class="max-w-[1400px] py-10 md:py-14">

      <div class="grid grid-cols-1 gap-5 lg:grid-cols-[410px_1fr]">

        <!-- Input and settings -->
        <UCard class="rounded-2xl border border-gray-200 bg-white shadow-sm">
          <p class="text-xs font-bold tracking-[0.2em] text-green-700">
            01 / INPUT
          </p>

          <h2 class="mt-2 text-xl font-bold tracking-tight">
            Audio & settings
          </h2>

          <!-- File upload -->
          <div class="mt-6 flex min-h-32 flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 p-5 text-center">
            <UIcon name="i-lucide-upload" class="mb-2 size-7 text-gray-500" />

            <label class="cursor-pointer font-semibold hover:text-green-700">
              {{ file?.name || '+ Choose a WAV file' }}

              <input
                type="file"
                accept=".wav,audio/wav"
                class="hidden"
                @change="selectFile"
              >
            </label>

            <p class="mt-2 text-sm text-gray-500">
              WAV format · Maximum 25 MB
            </p>
          </div>

          <p v-if="error" class="mt-3 text-sm text-red-500">
            {{ error }}
          </p>

          <!-- Threshold -->
          <div class="mt-7">
            <div class="mb-3 flex justify-between text-sm">
              <label class="font-medium">Threshold</label>
              <strong>{{ threshold }} dB</strong>
            </div>

            <USlider
              v-model="threshold"
              :min="-40"
              :max="0"
              :step="1"
            />
          </div>

          <!-- Ratio -->
          <div class="mt-7">
            <div class="mb-3 flex justify-between text-sm">
              <label class="font-medium">Ratio</label>
              <strong>{{ ratio }}:1</strong>
            </div>

            <USlider
              v-model="ratio"
              :min="1"
              :max="20"
              :step="1"
            />
          </div>

          <!-- Attack -->
          <div class="mt-7">
            <div class="mb-3 flex justify-between text-sm">
              <label class="font-medium">Attack</label>
              <strong>{{ attack }} ms</strong>
            </div>

            <USlider
              v-model="attack"
              :min="1"
              :max="100"
              :step="1"
            />
          </div>

          <!-- Release -->
          <div class="mt-7">
            <div class="mb-3 flex justify-between text-sm">
              <label class="font-medium">Release</label>
              <strong>{{ release }} ms</strong>
            </div>

            <USlider
              v-model="release"
              :min="10"
              :max="1000"
              :step="10"
            />
          </div>

          <!-- Process button -->
          <UButton
            block
            size="xl"
            color="success"
            :disabled="!file || loading"
            :loading="loading"
            class="mt-8 font-bold"
            @click="runCompressor"
          >
            Run compressor
            <UIcon name="i-lucide-arrow-right" />
          </UButton>
        </UCard>

        <!-- Results -->
        <div class="flex flex-col gap-5">

          <!-- Audio comparison -->
          <UCard class="rounded-2xl border border-gray-200 bg-white shadow-sm">
            <p class="text-xs font-bold tracking-[0.2em] text-green-700">
              02 / LISTEN
            </p>

            <h2 class="mt-2 text-xl font-bold tracking-tight">
              Audio comparison
            </h2>

            <!-- Original -->
            <div class="grid grid-cols-1 items-center gap-4 border-b border-gray-100 py-6 md:grid-cols-[140px_1fr]">
              <div>
                <h3 class="font-bold">Original</h3>
                <p class="mt-1 text-sm text-gray-500">Uploaded input</p>
              </div>

              <div>
                <audio
                  v-if="originalUrl"
                  :src="originalUrl"
                  controls
                  class="h-10 w-full"
                />

                <p v-else class="text-sm text-gray-400">
                  Choose a WAV file to listen.
                </p>
              </div>
            </div>

            <!-- Compressed -->
            <div class="grid grid-cols-1 items-center gap-4 border-b border-gray-100 py-6 md:grid-cols-[140px_1fr]">
              <div>
                <h3 class="font-bold">Compressed</h3>
                <p class="mt-1 text-sm text-gray-500">Reference DSP output</p>
              </div>

              <div>
                <audio
                  v-if="compressedUrl"
                  :src="compressedUrl"
                  controls
                  class="h-10 w-full"
                />

                <p v-else class="text-sm text-gray-400">
                  Run the compressor to generate output.
                </p>
              </div>
            </div>

            <a
              v-if="compressedUrl"
              :href="compressedUrl"
              download="compressed.wav"
              class="mt-5 inline-flex items-center gap-2 text-sm font-bold text-green-700 transition-colors hover:text-green-800"
            >
              <UIcon name="i-lucide-download" />
              Download compressed WAV
            </a>
          </UCard>

          <!-- Metrics -->
          <UCard class="rounded-2xl border border-gray-200 bg-white shadow-sm">
            <p class="text-xs font-bold tracking-[0.2em] text-green-700">
              03 / MEASURE
            </p>

            <h2 class="mt-2 text-xl font-bold tracking-tight">
              Signal metrics
            </h2>

            <div
              v-if="metrics"
              class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              <div class="rounded-xl bg-gray-50 p-5">
                <p class="text-sm text-gray-500">Original peak</p>
                <strong class="mt-2 block text-2xl font-bold">
                  {{ metrics.originalPeak }}
                </strong>
              </div>

              <div class="rounded-xl bg-gray-50 p-5">
                <p class="text-sm text-gray-500">Compressed peak</p>
                <strong class="mt-2 block text-2xl font-bold">
                  {{ metrics.compressedPeak }}
                </strong>
              </div>

              <div class="rounded-xl bg-gray-50 p-5">
                <p class="text-sm text-gray-500">Original RMS</p>
                <strong class="mt-2 block text-2xl font-bold">
                  {{ metrics.originalRms }}
                </strong>
              </div>

              <div class="rounded-xl bg-gray-50 p-5">
                <p class="text-sm text-gray-500">Compressed RMS</p>
                <strong class="mt-2 block text-2xl font-bold">
                  {{ metrics.compressedRms }}
                </strong>
              </div>
            </div>

            <p v-else class="mt-6 text-sm text-gray-400">
              Metrics will appear after processing.
            </p>

            <div class="my-5 border-t border-gray-100" />

            <p class="text-xs leading-relaxed text-gray-500">
              Neural inference comes after training and validating a PyTorch model.
            </p>
          </UCard>
        </div>
      </div>

    </UContainer>
  </main>
</template>

