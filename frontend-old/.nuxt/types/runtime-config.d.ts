import { RuntimeConfig as UserRuntimeConfig } from 'nuxt/schema'
  interface SharedRuntimeConfig {
   appSecret: string,

   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   icon: {
      serverKnownCssClasses: Array<any>,
   },

   content: {
      databaseVersion: string,

      version: string,

      database: {
         type: string,

         filename: string,
      },

      localDatabase: {
         type: string,

         filename: string,
      },

      integrityCheck: boolean,
   },

   "nuxt-og-image": {
      version: string,

      satoriOptions: any,

      resvgOptions: any,

      sharpOptions: any,

      publicStoragePath: string,

      defaults: {
         emojis: string,

         extension: string,

         width: number,

         height: number,

         cacheMaxAgeSeconds: number,
      },

      debug: boolean,

      includeTwitter: boolean,

      baseCacheKey: string,

      buildCacheDir: any,

      publish: any,

      hasNuxtIcon: boolean,

      colorPreference: string,

      cssFramework: string,

      browserEnabled: boolean,

      browser: any,

      security: {
         strict: boolean,

         maxDimension: number,

         maxDpr: number,

         renderTimeout: number,

         imageFetchTimeout: number,

         maxQueryParamSize: any,

         restrictRuntimeImagesToOrigin: boolean,

         secret: string,
      },

      componentDirs: Array<string>,

      srcDir: string,

      rootDir: string,

      communityTemplatesDir: string,
   },

   "nuxt-site-config": {
      stack: Array<{

      }>,

      version: string,

      debug: boolean,

      multiTenancy: Array<any>,
   },
  }
  interface SharedPublicRuntimeConfig {
   colorMode: {
      cookieAttrs: any,
   },

   mdc: {
      components: {
         prose: boolean,

         map: {
            accordion: string,

            "accordion-item": string,

            badge: string,

            callout: string,

            card: string,

            "card-group": string,

            caution: string,

            "code-collapse": string,

            "code-group": string,

            "code-icon": string,

            "code-preview": string,

            "code-tree": string,

            collapsible: string,

            field: string,

            "field-group": string,

            icon: string,

            kbd: string,

            note: string,

            prompt: string,

            steps: string,

            tabs: string,

            "tabs-item": string,

            tip: string,

            warning: string,
         },

         customElements: Array<any>,
      },

      headings: {
         anchorLinks: {
            h1: boolean,

            h2: boolean,

            h3: boolean,

            h4: boolean,

            h5: boolean,

            h6: boolean,
         },
      },

      highlight: {
         noApiRoute: boolean,

         theme: {
            light: string,

            default: string,

            dark: string,
         },

         highlighter: string,

         shikiEngine: string,

         langs: Array<string>,
      },
   },

   content: {
      wsUrl: string,
   },

   "nuxt-og-image": {
      defaults: {
         emojis: string,

         extension: string,

         width: number,

         height: number,

         cacheMaxAgeSeconds: number,
      },

      includeTwitter: boolean,

      browserEnabled: boolean,

      hasServerRuntime: boolean,
   },
  }
declare module 'nuxt/schema' {
  interface RuntimeConfig extends SharedRuntimeConfig {}
  interface PublicRuntimeConfig extends SharedPublicRuntimeConfig {}
}
declare module '@nuxt/schema' {
  interface RuntimeConfig extends SharedRuntimeConfig {}
  interface PublicRuntimeConfig extends SharedPublicRuntimeConfig {}
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: UserRuntimeConfig
        }
      }