import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { defineEventHandler as defineEventHandler$1, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent as fetchWithEvent$1, isEvent, eventHandler, setHeaders, createError as createError$1, sendRedirect, proxyRequest, getRequestProtocol as getRequestProtocol$1, getRequestHost as getRequestHost$1, getRequestURL as getRequestURL$2, readRawBody, getRequestHeader, isError, setResponseHeaders, setResponseStatus, send, setResponseHeader, appendResponseHeader, getResponseHeader, getRequestHeaders, removeResponseHeader, getRouterParam, setHeader, writeEarlyHints, getQuery as getQuery$1, getRequestWebStream, getResponseStatus, getHeader, readBody, lazyEventHandler, fromNodeMiddleware, createApp, createRouter as createRouter$1, toNodeListener, getRequestIP, toWebRequest, H3Error } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/h3/dist/index.mjs';
import { Server, request as request$1 } from 'node:http';
import { resolve as resolve$5, dirname, join as join$1 } from 'node:path';
import nodeCrypto from 'node:crypto';
import { isMainThread, parentPort, threadId, Worker } from 'node:worker_threads';
import { escapeHtml } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/@vue/shared/dist/shared.cjs.js';
import viteNodeEntry_mjs from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/@nuxt/vite-builder/dist/vite-node-entry.mjs';
import { viteNodeFetch } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/@nuxt/vite-builder/dist/vite-node.mjs';
import { stringify, parse, uneval } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/devalue/src/index.js';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, joinRelativeURL, hasProtocol, withHttps, withTrailingSlash, decodePath, withLeadingSlash, withoutTrailingSlash, parseQuery, parsePath, withBase, withoutLeadingSlash } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/ufo/dist/index.mjs';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import destr, { destr as destr$1 } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/destr/dist/index.mjs';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/unhead/dist/server.mjs';
import { readFile } from 'node:fs/promises';
import { join, dirname as dirname$1, resolve as resolve$6, isAbsolute } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/pathe/dist/index.mjs';
import defu, { defuFn, defu as defu$1 } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/defu/dist/defu.mjs';
import { createStorage, prefixStorage } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/unstorage/dist/index.mjs';
import consola, { consola as consola$1, createConsola } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/consola/dist/index.mjs';
import { createHooks } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1, $fetch as $fetch$1 } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/node-mock-http/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/unstorage/drivers/fs.mjs';
import lruCacheDriver from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/unstorage/drivers/lru-cache.mjs';
import { digest, hash as hash$1 } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/ohash/dist/index.mjs';
import { klona } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/klona/dist/index.mjs';
import { snakeCase } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/scule/dist/index.mjs';
import { getContext } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/nitropack/node_modules/unctx/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/radix3/dist/index.mjs';
import { ErrorParser } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/youch-core/build/index.js';
import { Youch } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/source-map/source-map.js';
import { defineDiagnostics, createConsoleReporter } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/nostics/dist/index.mjs';
import { ansiFormatter } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/nostics/dist/formatters/ansi.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { getContext as getContext$1 } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/unctx/dist/index.mjs';
import { captureRawStackTrace, parseRawStackTrace } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/errx/dist/index.mjs';
import { isRef, toValue as toValue$1, isVNode } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/vue/index.mjs';
import _b5LpT8OmefgtqGF_ccsNMriKZMOwHAEl8Iwg1QljjMQ from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/@nuxt/cli/runtime/dev-close-sockets.mjs';
import { existsSync, mkdirSync, readFileSync, writeFileSync, promises } from 'node:fs';
import devalue from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/@nuxt/devalue/dist/devalue.mjs';
import process$1 from 'node:process';
import { formatWithOptions } from 'node:util';
import _Z4Vm0BJMJeyU_KFYzGBgSOBoZ4JOQn4jYmko_KtDwU from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/@nuxt/vite-builder/dist/ssr-sourcemap.mjs';
import _LB91z6Ht2T49ncvhFWMKIA26eT4mdBc7tIFl06yLKKs from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/@nuxt/vite-builder/dist/vite-node-warmup.mjs';
import { fileURLToPath } from 'node:url';
import { getIcons } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/@iconify/utils/lib/index.js';
import { collections } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/.nuxt/nuxt-icon-server-bundle.mjs';
import { resolveTags, walkResolver } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/unhead/dist/utils.mjs';
import { PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin, SafeInputPlugin } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/unhead/dist/plugins.mjs';
import { renderToString } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/vue/server-renderer/index.mjs';
import { DeprecationsPlugin } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/unhead/dist/legacy.mjs';
import sqliteConnector from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/db0/dist/connectors/node-sqlite.mjs';
import { ipxFSStorage, ipxHttpStorage, createIPX, createIPXNodeHandler, parseIPXURL } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/ipx/dist/index.mjs';
import { lookup } from 'node:dns';
import { request } from 'node:https';
import { Readable } from 'node:stream';
import { fnv1a64Base36 } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/fnv1a-64/dist/index.mjs';
import { parse as parse$1, ELEMENT_NODE, TEXT_NODE } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/ultrahtml/dist/index.js';
import { querySelector } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/ultrahtml/dist/selector.js';
import { digest as digest$1 } from 'file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/ohash/dist/crypto/node/index.mjs';

const serverAssets = [{"baseName":"server","dir":"/Users/satej/Documents/neural-compressor-lab/frontend/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('cache/nuxt-og-image', lruCacheDriver({"driver":"lru-cache","max":0,"maxSize":67108864}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/satej/Documents/neural-compressor-lab/frontend","ignore":["**/node_modules","**/*.stories.js","**/*.stories.cts","**/*.stories.mts","**/*.stories.ts","**/*.stories.jsx","**/*.stories.tsx","**/*.spec.js","**/*.spec.cts","**/*.spec.mts","**/*.spec.ts","**/*.spec.jsx","**/*.spec.tsx","**/*.test.js","**/*.test.cts","**/*.test.mts","**/*.test.ts","**/*.test.jsx","**/*.test.tsx","**/*.d.cts","**/*.d.mts","**/*.d.ts","**/*.d.vue.cts","**/*.d.vue.mts","**/*.d.vue.ts","**/.pnpm-store","**/.vercel","**/.netlify","**/.wrangler","**/.output","**/.git","**/.cache","**/.data","**/.direnv","/Users/satej/Documents/neural-compressor-lab/frontend/vendor","**/node-compile-cache","**/test-results","**/*.sock","/Users/satej/Documents/neural-compressor-lab/frontend/.nuxt/analyze","**/.nuxt","**/-*.*","/Users/satej/Documents/neural-compressor-lab/frontend/content/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/satej/Documents/neural-compressor-lab/frontend/server","ignore":["**/node_modules","**/*.stories.js","**/*.stories.cts","**/*.stories.mts","**/*.stories.ts","**/*.stories.jsx","**/*.stories.tsx","**/*.spec.js","**/*.spec.cts","**/*.spec.mts","**/*.spec.ts","**/*.spec.jsx","**/*.spec.tsx","**/*.test.js","**/*.test.cts","**/*.test.mts","**/*.test.ts","**/*.test.jsx","**/*.test.tsx","**/*.d.cts","**/*.d.mts","**/*.d.ts","**/*.d.vue.cts","**/*.d.vue.mts","**/*.d.vue.ts","**/.pnpm-store","**/.vercel","**/.netlify","**/.wrangler","**/.output","**/.git","**/.cache","**/.data","**/.direnv","**/node-compile-cache","**/test-results","**/*.sock","**/-*.*"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/satej/Documents/neural-compressor-lab/frontend/.nuxt"}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/satej/Documents/neural-compressor-lab/frontend/.nuxt/cache"}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/satej/Documents/neural-compressor-lab/frontend/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event._path = incomingEvent._path;
      event.fetch = (url, fetchOptions) => fetchWithEvent$1(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent$1(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler$1(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/__nuxt_content/**": {
        "robots": false,
        "cache": false
      },
      "/__nuxt_content/index/sql_dump.txt": {
        "prerender": true
      },
      "/__nuxt_content/projects/sql_dump.txt": {
        "prerender": true
      },
      "/__nuxt_content/blog/sql_dump.txt": {
        "prerender": true
      },
      "/__nuxt_content/pages/sql_dump.txt": {
        "prerender": true
      },
      "/__nuxt_content/speaking/sql_dump.txt": {
        "prerender": true
      },
      "/__nuxt_content/about/sql_dump.txt": {
        "prerender": true
      },
      "/_fonts/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        },
        "cache": {
          "maxAge": 31536000
        }
      },
      "/": {
        "prerender": true
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/__nuxt_content/index/sql_dump.txt/_payload.json": {
        "ssr": true,
        "prerender": true
      },
      "/__nuxt_content/projects/sql_dump.txt/_payload.json": {
        "ssr": true,
        "prerender": true
      },
      "/__nuxt_content/blog/sql_dump.txt/_payload.json": {
        "ssr": true,
        "prerender": true
      },
      "/__nuxt_content/pages/sql_dump.txt/_payload.json": {
        "ssr": true,
        "prerender": true
      },
      "/__nuxt_content/speaking/sql_dump.txt/_payload.json": {
        "ssr": true,
        "prerender": true
      },
      "/__nuxt_content/about/sql_dump.txt/_payload.json": {
        "ssr": true,
        "prerender": true
      },
      "/_payload.json": {
        "ssr": true,
        "prerender": true
      }
    }
  },
  "appSecret": "c1c30aeeb58de3a0d8fa5b909a5172df5aac8d1a87ebf265d534cc1e47e82083",
  "public": {
    "colorMode": {
      "cookieAttrs": ""
    },
    "mdc": {
      "components": {
        "prose": true,
        "map": {
          "accordion": "ProseAccordion",
          "accordion-item": "ProseAccordionItem",
          "badge": "ProseBadge",
          "callout": "ProseCallout",
          "card": "ProseCard",
          "card-group": "ProseCardGroup",
          "caution": "ProseCaution",
          "code-collapse": "ProseCodeCollapse",
          "code-group": "ProseCodeGroup",
          "code-icon": "ProseCodeIcon",
          "code-preview": "ProseCodePreview",
          "code-tree": "ProseCodeTree",
          "collapsible": "ProseCollapsible",
          "field": "ProseField",
          "field-group": "ProseFieldGroup",
          "icon": "ProseIcon",
          "kbd": "ProseKbd",
          "note": "ProseNote",
          "prompt": "ProsePrompt",
          "steps": "ProseSteps",
          "tabs": "ProseTabs",
          "tabs-item": "ProseTabsItem",
          "tip": "ProseTip",
          "warning": "ProseWarning"
        },
        "customElements": []
      },
      "headings": {
        "anchorLinks": {
          "h1": false,
          "h2": true,
          "h3": true,
          "h4": true,
          "h5": false,
          "h6": false
        }
      },
      "highlight": {
        "noApiRoute": true,
        "theme": {
          "light": "material-theme-lighter",
          "default": "material-theme",
          "dark": "material-theme-palenight"
        },
        "highlighter": "shiki",
        "shikiEngine": "oniguruma",
        "langs": [
          "js",
          "jsx",
          "json",
          "ts",
          "tsx",
          "vue",
          "css",
          "html",
          "bash",
          "md",
          "mdc",
          "yaml"
        ]
      }
    },
    "content": {
      "wsUrl": ""
    },
    "nuxt-og-image": {
      "defaults": {
        "emojis": "noto",
        "extension": "png",
        "width": 1200,
        "height": 600,
        "cacheMaxAgeSeconds": 259200
      },
      "includeTwitter": true,
      "browserEnabled": false,
      "hasServerRuntime": true
    }
  },
  "icon": {
    "serverKnownCssClasses": []
  },
  "content": {
    "databaseVersion": "v3.5.0",
    "version": "3.16.2",
    "database": {
      "type": "sqlite",
      "filename": "./contents.sqlite"
    },
    "localDatabase": {
      "type": "sqlite",
      "filename": "/Users/satej/Documents/neural-compressor-lab/frontend/.data/content/contents.sqlite"
    },
    "integrityCheck": true
  },
  "nuxt-og-image": {
    "version": "7.0.7",
    "satoriOptions": {},
    "resvgOptions": {},
    "sharpOptions": {},
    "publicStoragePath": "root:public",
    "defaults": {
      "emojis": "noto",
      "extension": "png",
      "width": 1200,
      "height": 600,
      "cacheMaxAgeSeconds": 259200
    },
    "debug": false,
    "includeTwitter": true,
    "baseCacheKey": "/cache/nuxt-og-image/7.0.7",
    "buildCacheDir": "",
    "publish": "",
    "hasNuxtIcon": true,
    "colorPreference": "light",
    "cssFramework": "tailwind",
    "browserEnabled": false,
    "browser": "",
    "security": {
      "strict": false,
      "maxDimension": 2048,
      "maxDpr": 2,
      "renderTimeout": 15000,
      "imageFetchTimeout": 3000,
      "maxQueryParamSize": "",
      "restrictRuntimeImagesToOrigin": false,
      "secret": ""
    },
    "componentDirs": [
      "OgImageCommunity",
      "OgImageTemplate",
      "og-image",
      "OgImage"
    ],
    "srcDir": "/Users/satej/Documents/neural-compressor-lab/frontend/app",
    "rootDir": "/Users/satej/Documents/neural-compressor-lab/frontend",
    "communityTemplatesDir": "/Users/satej/Documents/neural-compressor-lab/frontend/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community"
  },
  "nuxt-site-config": {
    "stack": [
      {
        "_context": "system",
        "_priority": -15,
        "env": "development"
      }
    ],
    "version": "5.0.3",
    "debug": false,
    "multiTenancy": []
  },
  "ipx": {
    "baseURL": "/_ipx",
    "alias": {},
    "fs": {
      "dir": [
        "/Users/satej/Documents/neural-compressor-lab/frontend/public"
      ]
    },
    "http": {
      "domains": []
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig$1(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig$1();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

function isPathInScope(pathname, base) {
  let canonical;
  try {
    const pre = pathname.replace(/%2f/gi, "/").replace(/%5c/gi, "\\");
    canonical = new URL(pre, "http://_").pathname;
  } catch {
    return false;
  }
  return !base || canonical === base || canonical.startsWith(base + "/");
}

const config = useRuntimeConfig$1();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules$2(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          if (!isPathInScope(event.path.split("?")[0], strpBase)) {
            throw createError$1({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          if (!isPathInScope(event.path.split("?")[0], strpBase)) {
            throw createError$1({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules$2(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig$1().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

// src/runtime/utils/event.ts
const ENC_PIPE_RE = /%7C/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_ENC_SLASH_RE = /%252F/gi;
const HASH_RE = /#/g;
const QUESTION_MARK_RE = /\?/g;
const DOT_SEGMENT_RE = /(?:^|\/)\.{1,2}(?:\/|$)/;
function encodeEventPath(path) {
	const queryIndex = path.indexOf("?");
	if (queryIndex === -1) return encodeVueRouterPath(path);
	return encodeVueRouterPath(path.slice(0, queryIndex)) + path.slice(queryIndex);
}
function encodeVueRouterPath(path) {
	return encodeURI(path).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]").replace(HASH_RE, "%23").replace(QUESTION_MARK_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F");
}
/**
* The response headers of an h3 v1 event, in the shape the renderer writes them in.
*
* Backed by the node response rather than a copy of it, so a header the app sets through
* h3 and a header the renderer sets are the same header, and both are sent.
*/
var NodeResponseHeaders = class {
	res;
	constructor(res) {
		this.res = res;
	}
	get(name) {
		const value = this.res.getHeader(name);
		if (value === void 0) return null;
		return Array.isArray(value) ? value.join(", ") : String(value);
	}
	has(name) {
		return this.res.hasHeader(name);
	}
	set(name, value) {
		this.res.setHeader(name, value);
	}
	append(name, value) {
		const existing = this.res.getHeader(name);
		if (existing === void 0) {
			this.res.setHeader(name, value);
			return;
		}
		this.res.setHeader(name, Array.isArray(existing) ? [...existing, value] : [String(existing), value]);
	}
	delete(name) {
		this.res.removeHeader(name);
	}
	getSetCookie() {
		const value = this.res.getHeader("set-cookie");
		if (value === void 0) return [];
		return Array.isArray(value) ? value.map(String) : [String(value)];
	}
	*entries() {
		const headers = this.res.getHeaders();
		for (const name of Object.keys(headers).sort()) {
			const value = headers[name];
			if (value === void 0) continue;
			if (name === "set-cookie" && Array.isArray(value)) for (const entry of value) yield [name, entry];
			else yield [name, Array.isArray(value) ? value.join(", ") : String(value)];
		}
	}
	*keys() {
		for (const [name] of this.entries()) yield name;
	}
	*values() {
		for (const [, value] of this.entries()) yield value;
	}
	forEach(callback, thisArg) {
		for (const [name, value] of this.entries()) callback.call(thisArg, value, name, this);
	}
	[Symbol.iterator]() {
		return this.entries();
	}
};
const WEB_PROPERTIES = /* @__PURE__ */ new Set([
	"req",
	"res",
	"url",
	"~app"
]);
const PAYLOAD_METHODS = /* @__PURE__ */ new Set([
	"PATCH",
	"POST",
	"PUT",
	"DELETE"
]);
const BODY_READ_METHODS = /* @__PURE__ */ new Set([
	"arrayBuffer",
	"blob",
	"bytes",
	"formData",
	"json",
	"text"
]);
/**
* The request in the web-standard shape, with every read of its body served from the bytes
* h3 v1 caches on the node request.
*
* A body read here and a `readBody(event)` elsewhere in the same request therefore resolve
* to the same bytes whichever happens first, and reading the request twice - directly, from
* a clone, or as a stream - resolves the same bytes each time rather than the second read
* finding a stream the first has drained.
*/
function toWebRequest$1(event) {
	const existing = event.web?.request;
	if (existing) return existing;
	const method = event.method;
	if (!PAYLOAD_METHODS.has(method)) return new Request(getRequestURL$2(event), {
		method,
		headers: event.headers,
		signal: toRequestSignal(event)
	});
	const request = new Request(getRequestURL$2(event), {
		method,
		headers: event.headers,
		body: toBufferedBodyStream(event),
		signal: toRequestSignal(event),
		duplex: "half"
	});
	const read = () => readRawBody(event, false).then((body) => body ? new Uint8Array(body) : /* @__PURE__ */ new Uint8Array());
	const copy = () => read().then((body) => new Response(body, { headers: request.headers }));
	const buffered = new Proxy(request, { get(target, property) {
		if (property === "bodyUsed") return false;
		if (property === "body") return toBufferedBodyStream(event);
		if (property === "clone") return () => buffered;
		if (typeof property === "string" && BODY_READ_METHODS.has(property)) return () => copy().then((response) => response[property]());
		const value = Reflect.get(target, property, target);
		return typeof value === "function" ? value.bind(target) : value;
	} });
	return buffered;
}
/**
* Aborts when the client disconnects before the response is finished, the same moment an h3 v1
* handler would catch with `event.node.req.on('close')`.
*/
function toRequestSignal(event) {
	const controller = new AbortController();
	const res = event.node?.res;
	if (typeof res?.once === "function") res.once("close", () => {
		if (!res.writableFinished) controller.abort();
	});
	return controller.signal;
}
function toBufferedBodyStream(event) {
	return new ReadableStream({ async pull(controller) {
		const body = await readRawBody(event, false);
		if (body) controller.enqueue(new Uint8Array(body));
		controller.close();
	} });
}
const portableEvents = /* @__PURE__ */ new WeakMap();
/**
* The event a `nuxt/server` handler is given, in the web-standard shape.
*
* Both shapes are served from one object: `req`, `res`, `url` and `~app` resolve to the web
* view, everything else to the h3 v1 event, so h3's own helpers work on it too (they read
* `event.node`, not its deprecated `req`/`res` aliases). Cached per event, with the web view
* built on first access. `resolveURL` replaces how `url` is derived from the event's path.
*/
function toPortableEvent(event, resolveURL) {
	const cached = portableEvents.get(event);
	if (cached) return cached;
	let web;
	const portable = new Proxy(event, {
		get(target, property) {
			if (property === "~portable") return true;
			return WEB_PROPERTIES.has(property) ? (web ??= toWebView(event, resolveURL))[property] : Reflect.get(target, property, target);
		},
		set(target, property, value) {
			if (property === "url") {
				(web ??= toWebView(event, resolveURL)).url = value;
				return true;
			}
			return Reflect.set(target, property, value, target);
		},
		has(target, property) {
			return WEB_PROPERTIES.has(property) || Reflect.has(target, property);
		}
	});
	portableEvents.set(event, portable);
	return portable;
}
/**
* The Nuxt context a request nitro made to itself was fetched with: `node-mock-http` carries
* it on the mock request rather than in the h3 event's own context. A request that arrives
* over the network has none, whoever sent it.
*/
function getFetchedRequestContext(event) {
	return event.node.req.__unenv__?.nuxt;
}
/**
* The event the SSR renderer reads, which reaches the h3 v1 event itself through `~app`.
* Of the Nuxt context a request nitro made to itself was fetched with, only the error render
* flag carries over.
*
* Paths with `.` or `..` segments 404, as `url` would resolve them to a page other than the
* one `event.path` names.
*/
function toRequestEvent(event) {
	const queryIndex = event.path.indexOf("?");
	if (DOT_SEGMENT_RE.test(queryIndex === -1 ? event.path : event.path.slice(0, queryIndex))) throw createError$1({
		statusCode: 404,
		statusMessage: "Page Not Found"
	});
	const requestEvent = toWebView(event);
	if (getFetchedRequestContext(event)?.["~rendering-error"]) event.context.nuxt = {
		"~rendering-error": true,
		...event.context.nuxt
	};
	return requestEvent;
}
/**
* Describe an h3 v1 event in the web-standard shape, rather than adapting it in place:
* `event.req` and `event.res` already name the node request and response, and that is the
* shape `useRequestEvent()` and the render hooks must keep seeing.
*
* Everything is resolved on access, and the response is backed by the node response rather
* than a copy of it, so a header the application sets through h3 and a header the renderer
* sets are the same header.
*/
function toWebView(event, resolveURL = () => new URL(encodeEventPath(event.path), `${getRequestProtocol$1(event)}://${getRequestHost$1(event)}`)) {
	const node = event.node;
	let request;
	let url;
	const res = {
		get status() {
			return node.res.statusCode;
		},
		set status(status) {
			node.res.statusCode = status;
		},
		get statusText() {
			return node.res.statusMessage;
		},
		set statusText(statusText) {
			node.res.statusMessage = statusText;
		},
		headers: new NodeResponseHeaders(node.res)
	};
	const requestEvent = {
		context: event.context,
		res,
		get req() {
			return request ??= toWebRequest$1(event);
		},
		get url() {
			return url ??= resolveURL();
		},
		set url(value) {
			url = value;
			event._path = node.req.url = value.pathname + value.search;
		}
	};
	requestEvent["~app"] = event;
	return requestEvent;
}

// src/runtime/utils/error.ts
/**
* Nitro internal functions extracted from https://github.com/nitrojs/nitro/blob/v2/src/runtime/internal/utils.ts
*/
function isJsonRequest(event) {
	if (hasReqHeader(event, "accept", "text/html")) return false;
	return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
	const value = getRequestHeader(event, name);
	return !!(value && typeof value === "string" && value.toLowerCase().includes(includes));
}

const appId$1 = "nuxt-app";

const headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

const VueResolver = /* @__PURE__ */ Object.assign(
  (_, value) => isRef(value) ? toValue$1(value) : value,
  // identity for plain non-reactive values, so the SSR default init entry
  // keeps its precomputed fast path (see unhead/server createHead)
  { _static: true }
);

// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const legacyPlugins = [DeprecationsPlugin, PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin];

const unheadOptions = {
  disableDefaults: true,
  plugins: legacyPlugins,
};

const renderSSRHeadOptions = {"omitLineBreaks":true};

const NUXT_PRERENDER_NO_SSR_ROUTES = ["/index.html","/200.html","/404.html"];
const NUXT_NO_SCRIPTS_PATTERNS = [];
const NUXT_PAGE_PATTERNS = ["/blog/*","/about","/blog","/projects","/speaking","/"];
const NUXT_PAYLOAD_INLINE = false;
const NUXT_SSR_STREAMING = false;
const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[],"style":[],"script":[],"noscript":[]};
const appRootTag = "div";
const appRootAttrs = {"id":"__nuxt","class":"isolate"};
const appTeleportTag = "div";
const appTeleportAttrs = {"id":"teleports"};
const appSpaLoaderTag = "div";
const appSpaLoaderAttrs = {"id":"__nuxt-loader"};
const appId = "nuxt-app";

// src/runtime/handlers/error.ts
var error_default = async function errorhandler(error, event, { defaultHandler }) {
	if (event.handled) return;
	const isRenderingError = !!(event.context.nuxt?.["~rendering-error"] || getFetchedRequestContext(event)?.["~rendering-error"]);
	let devError;
	let errorCause;
	{
		const errorChannel = await Promise.resolve().then(function () { return errorChannel$1; });
		const isHTTPError = isError(error);
		const isExpected = !error.unhandled && isHTTPError && (error.statusCode || 500) < 500 && !(THROWN_VALUE in error);
		devError = await errorChannel.observeDevError(error, event, {
			expected: isExpected,
			publish: !isRenderingError && true,
			print: !isRenderingError && (error.unhandled ?? !isHTTPError)
		});
		errorCause = errorChannel.serializeErrorCause(error.cause);
	}
	const stacks = snapshotStacks(error) ;
	if (isJsonRequest(event)) {
		if (!devError && true) return;
		const { headers, status, statusText, body } = await defaultHandler(error, event, {
			json: true,
			silent: !!devError
		});
		stacks?.restore();
		setResponseHeaders(event, headers);
		appendVary(event, "accept, sec-fetch-mode");
		setResponseStatus(event, status, statusText);
		return send(event, typeof body === "string" ? body : JSON.stringify(body, null, 2));
	}
	const defaultRes = await defaultHandler(error, event, {
		json: true,
		silent: !!devError
	});
	stacks?.restore();
	if ((error.status || error.statusCode || 500) === 404 && defaultRes.status === 302) {
		setResponseHeaders(event, defaultRes.headers);
		appendVary(event, "accept, sec-fetch-mode");
		setResponseStatus(event, defaultRes.status, defaultRes.statusText);
		return send(event, JSON.stringify(defaultRes.body, null, 2));
	}
	if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) defaultRes.body.stack = defaultRes.body.stack.join("\n");
	const errorObject = defaultRes.body;
	const url = new URL(errorObject.url);
	errorObject.url = withoutBase(url.pathname, useRuntimeConfig$1(event).app.baseURL) + url.search + url.hash;
	errorObject.message = error.unhandled ? errorObject.message || "Server Error" : error.message || errorObject.message || "Server Error";
	if (!error.unhandled) errorObject.data ||= error.data;
	errorObject.statusText ||= error.statusText || error.statusMessage;
	delete defaultRes.headers["content-type"];
	delete defaultRes.headers["content-security-policy"];
	setResponseHeaders(event, defaultRes.headers);
	appendVary(event, "accept, sec-fetch-mode");
	if (!isRenderingError) event.context.nuxt = {
		...event.context.nuxt,
		"~rendering-error": true
	};
	const res = isRenderingError ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig$1(event).app.baseURL, "/__nuxt_error"), {
		...errorObject,
		...errorCause !== void 0 && { cause: JSON.stringify(errorCause) }
	}), {
		headers: event.headers,
		redirect: "manual",
		context: { nuxt: { "~rendering-error": true } }
	}).catch(() => null);
	if (event.handled) return;
	if (!res) {
		setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
		if (isRenderingError) setResponseHeader(event, ERROR_PAGE_HEADER, "1");
		else if (devError) {
			const body = await devError.page().catch(() => void 0);
			if (body) return send(event, body);
		}
		const { template } = await Promise.resolve().then(function () { return errorTemplate; });
		errorObject.description = errorObject.message;
		return send(event, template(errorObject));
	}
	let html = await res.text();
	for (const [header, value] of res.headers.entries()) {
		if (header === ERROR_PAGE_HEADER) continue;
		if (header === "set-cookie" || header === "x-nitro-prerender") {
			appendResponseHeader(event, header, value);
			continue;
		}
		setResponseHeader(event, header, value);
	}
	setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
	if (devError && typeof html === "string") try {
		html = res.headers.has(ERROR_PAGE_HEADER) ? await devError.page() : await devError.overlay(html);
	} catch {}
	return send(event, html);
};
/** The stacks of an error and its causes as raised, before Nitro rewrites them. */
function snapshotStacks(error) {
	const stacks = [];
	const seen = /* @__PURE__ */ new Set();
	for (let current = error; current instanceof Error && !seen.has(current); current = current.cause) {
		seen.add(current);
		stacks.push([current, current.stack]);
	}
	return { restore() {
		for (const [target, stack] of stacks) if (target.stack !== stack) try {
			Object.defineProperty(target, "stack", {
				value: stack,
				writable: true,
				configurable: true
			});
		} catch {}
	} };
}
/** Set on an error created from a thrown value that was not an `Error`. */
const THROWN_VALUE = Symbol.for("nuxt:dev:thrown");
/** Set when the app's own error page could not render. */
const ERROR_PAGE_HEADER = "x-nuxt-error-page";
/**
* Add `value`'s tokens to the response `vary` header, keeping any already
* present. `*` absorbs everything else, since it means the response varies on
* all headers.
*/
function appendVary(event, value) {
	const incoming = parseVary(value);
	if (!incoming.length) return;
	const existing = parseVary(getResponseHeader(event, "vary"));
	if (existing.includes("*")) return;
	if (incoming.includes("*")) {
		setResponseHeader(event, "vary", "*");
		return;
	}
	const merged = existing.slice();
	for (const token of incoming) if (!merged.includes(token)) merged.push(token);
	setResponseHeader(event, "vary", merged.join(", "));
}
function parseVary(value) {
	return (Array.isArray(value) ? value : typeof value === "string" ? value.split(",") : []).map((token) => token.trim().toLowerCase()).filter(Boolean);
}

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL$2(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json ?? !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const consumerCache = /* @__PURE__ */ new Map();
  let parsed;
  try {
    parsed = await new ErrorParser().defineSourceLoader((frame) => sourceLoader(frame, consumerCache)).parse(error);
  } finally {
    for (const consumer of consumerCache.values()) {
      await consumer.then((c) => c?.destroy()).catch(() => {
      });
    }
  }
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
function loadConsumer(fileName, cache) {
  const cached = cache.get(fileName);
  if (cached) {
    return cached;
  }
  const promise = (async () => {
    const rawSourceMap = await readFile(`${fileName}.map`, "utf8").catch(
      () => {
      }
    );
    if (!rawSourceMap) {
      return void 0;
    }
    return await new SourceMapConsumer(rawSourceMap);
  })().catch(() => void 0);
  cache.set(fileName, promise);
  return promise;
}
async function sourceLoader(frame, consumerCache) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const bundleFileName = frame.fileName;
    try {
      const consumer = await loadConsumer(bundleFileName, consumerCache);
      if (consumer) {
        const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
        if (originalPosition.source && originalPosition.line) {
          frame.fileName = resolve$5(dirname(bundleFileName), originalPosition.source);
          frame.lineNumber = originalPosition.line;
          frame.columnNumber = originalPosition.column || 0;
        }
      }
    } catch {
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [error_default, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const script$1 = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _LjeRslyybgDCTYhdlEaXQ60ocAAvnkkfZPsvWqDVE = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script$1}<\/script>`);
  });
});

const decodeRoutePath = function decodeRoutePath(path) {
	if (!path.includes("%")) return path;
	const queryIndex = path.indexOf("?");
	const pathname = queryIndex === -1 ? path : path.slice(0, queryIndex);
	try {
		return queryIndex === -1 ? decodeURI(pathname) : decodeURI(pathname) + path.slice(queryIndex);
	} catch {
		return path;
	}
};
const resolveRoutePathDotSegments = function resolveRoutePathDotSegments(path) {
	const queryIndex = path.indexOf("?");
	const pathname = queryIndex === -1 ? path : path.slice(0, queryIndex);
	if (!/(?:^|\/)(?:\.|%2e)/i.test(pathname)) return path;
	const input = pathname.split("/");
	const output = [];
	const root = pathname.startsWith("/") ? 1 : 0;
	for (const [i, segment] of input.entries()) {
		const dots = /^(?:\.|%2e)(\.|%2e)?$/i.exec(segment);
		if (!dots) {
			output.push(segment);
			continue;
		}
		if (dots[1] && output.length > root) output.pop();
		if (i === input.length - 1) output.push("");
	}
	const resolved = output.join("/");
	return queryIndex === -1 ? resolved : resolved + path.slice(queryIndex);
};
const foldRouteCase = function foldRouteCase(path) {
	return path.replace(/[A-Z]+|[^\0-\x7F]/g, (char) => {
		if (char.charCodeAt(0) < 128) return char.toLowerCase();
		const upper = char.toUpperCase();
		if (upper.length !== 1 || upper.charCodeAt(0) < 128) return char;
		const lower = upper.toLowerCase();
		return lower.length === 1 && lower.toUpperCase() === upper ? lower : upper;
	});
};
const normalizePath = (path, fold) => {
  if (typeof path !== 'string') { return path }
  const decoded = decodeRoutePath(resolveRoutePathDotSegments(path));
  return fold ? foldRouteCase(decoded) : decoded
};
const normalizeRouteRulePath = path => normalizePath(path, true);

// src/runtime/utils/route-rules.ts
let matcher;
function getMatcher() {
	if (!matcher) {
		const routes = {};
		for (const [route, rules] of Object.entries(useRuntimeConfig$1().nitro?.routeRules || {})) routes[normalizeRouteRulePath(route)] = rules;
		matcher = toRouteMatcher(createRouter({ routes }));
	}
	return matcher;
}
/**
* Resolve the route rules for a path without the base URL. Keys and path are decoded,
* and case-folded unless routing is `sensitive`.
*/
function matchRouteRules(path) {
	return defu$1({}, ...getMatcher().matchAll(normalizeRouteRulePath(path)).reverse());
}
/** Resolve the route rules for a request, as {@link matchRouteRules} does for its path. */
function resolveRequestRouteRules(event) {
	return matchRouteRules(withoutBase(event.path.split("?")[0], useRuntimeConfig$1().app.baseURL));
}
/** The route rules for a request, reusing those already resolved for it. */
function getRouteRules$1(event) {
	const context = event.context._nitro ||= {};
	return context.routeRules ||= resolveRequestRouteRules(event);
}

// src/runtime/plugins/route-rules.ts
var route_rules_default = (nitroApp) => {
	nitroApp.hooks.hook("request", (event) => {
		event.context._nitro ||= {};
		event.context._nitro.routeRules = resolveRequestRouteRules(event);
	});
};

const PROTOCOL_RE = /^https?:\/\//;
const TRAILING_SLASH_RE = /\/$/;
function isLocalhostHost(host) {
  if (!host || host.startsWith("localhost") || host.startsWith("127.") || host.startsWith("0.0.0.0"))
    return true;
  const hostname = host.startsWith("[") ? host.slice(0, host.indexOf("]") + 1) : host;
  return hostname === "[::1]" || hostname === "::1" || hostname === "[::]" || hostname === "::";
}
function extractHostname(host) {
  if (host.startsWith("[")) {
    const close = host.indexOf("]");
    return close !== -1 ? host.slice(0, close + 1) : host;
  }
  const colonCount = host.split(":").length - 1;
  return colonCount === 1 ? host.slice(0, host.indexOf(":")) : host;
}
function splitHostPort(host) {
  if (host.startsWith("[")) {
    const close = host.indexOf("]");
    const hostname = close !== -1 ? host.slice(0, close + 1) : host;
    const port = close !== -1 && host[close + 1] === ":" ? host.slice(close + 2) : "";
    const normalized = hostname === "[::1]" || hostname === "[::]" ? "localhost" : hostname;
    return { host: normalized, port };
  }
  if (host === "0.0.0.0" || host.startsWith("0.0.0.0:")) {
    const i = host.indexOf(":");
    return { host: "localhost", port: i !== -1 ? host.slice(i + 1) : "" };
  }
  const colonCount = host.split(":").length - 1;
  if (colonCount === 1) {
    const i = host.indexOf(":");
    return { host: host.slice(0, i), port: host.slice(i + 1) };
  }
  if (colonCount > 1) {
    const normalized = host === "::1" || host === "::" ? "localhost" : `[${host}]`;
    return { host: normalized, port: "" };
  }
  return { host, port: "" };
}
function getNitroOrigin$1(ctx = {}) {
  const isDev = ctx.isDev ?? ("development" === "development");
  const isPrerender = ctx.isPrerender ?? false;
  let host = "";
  let port = "";
  let protocol = process.env.NITRO_SSL_CERT && process.env.NITRO_SSL_KEY ? "https" : "http";
  if (isDev || isPrerender) {
    const devEnv = process.env.__NUXT_DEV__ || process.env.NUXT_VITE_NODE_OPTIONS;
    if (devEnv) {
      const parsed = JSON.parse(devEnv);
      const origin = parsed.proxy?.url || parsed.baseURL?.replace("/__nuxt_vite_node__", "");
      host = origin.replace(PROTOCOL_RE, "").replace(TRAILING_SLASH_RE, "");
      protocol = origin.startsWith("https") ? "https" : "http";
    }
  }
  if (isDev && isLocalhostHost(host) && ctx.requestHost) {
    const reqHost = extractHostname(ctx.requestHost);
    if (reqHost && !isLocalhostHost(reqHost)) {
      host = ctx.requestHost;
      protocol = ctx.requestProtocol || protocol;
    }
  }
  if (!host && ctx.requestHost) {
    host = ctx.requestHost;
    protocol = ctx.requestProtocol || protocol;
  }
  if (!host) {
    host = process.env.NITRO_HOST || process.env.HOST || "";
    if (isDev)
      port = process.env.NITRO_PORT || process.env.PORT || "3000";
  }
  const split = splitHostPort(host);
  host = split.host;
  if (split.port)
    port = split.port;
  host = process.env.NUXT_SITE_HOST_OVERRIDE || host;
  port = process.env.NUXT_SITE_PORT_OVERRIDE || port;
  if (host.startsWith("http://") || host.startsWith("https://")) {
    protocol = host.startsWith("https://") ? "https" : "http";
    host = host.replace(PROTOCOL_RE, "");
  } else if (!isDev && (!host || !isLocalhostHost(host))) {
    protocol = "https";
  }
  return `${protocol}://${host}${port ? `:${port}` : ""}/`;
}

// src/runtime/diagnostics.ts
const ansi$1 = (open, close) => (s) => `\x1B[${open}m${s}\x1B[${close}m`;
const colors$1 = {
	red: ansi$1(31, 39),
	yellow: ansi$1(33, 39),
	cyan: ansi$1(36, 39),
	gray: ansi$1(90, 39),
	bold: ansi$1(1, 22),
	dim: ansi$1(2, 22)
};
/**
* E8xxx
* Nitro server runtime (dev server) diagnostics, sharing the range with the
* SSR renderer.
*/
const docsBase$1 = (code) => `https://nuxt.com/docs/4.x/errors/${code.replace("NUXT_", "").toLowerCase()}`;
const serverDiagnostics = /* #__PURE__ */ defineDiagnostics({
	docsBase: docsBase$1,
	reporters: [/* @__PURE__ */ createConsoleReporter({ formatter: ansiFormatter(colors$1) } )],
	codes: {
		NUXT_E8003: {
			why: (p) => `Failed to stringify dev server logs.${p.error ? ` Received \`${p.error}\`.` : ""}`,
			fix: "You can define your own reducer/reviver for rich types following the instructions in `https://nuxt.com/docs/4.x/api/composables/use-nuxt-app#payload`.",
			docs: false
		},
		NUXT_E8005: {
			why: "Island props cannot contain a `template` key, which the Vue runtime compiler would compile and execute.",
			fix: "Rename the prop (e.g. `templateName`), or disable `vue.runtimeCompiler` if you do not need runtime template compilation.",
			docs: false
		},
		NUXT_E8012: {
			why: (p) => `\`${p.helper}\` from \`nuxt/server\` was called with an h3 event. The handler was defined with h3's \`defineEventHandler\` (auto-imported), which passes a different event.`,
			fix: "Import `defineEventHandler` from `nuxt/server` alongside the helpers. See `https://nuxt.com/docs/4.x/getting-started/upgrade#moving-to-nuxtserver`.",
			docs: false
		}
	}
});

// ../nuxt/src/app/error.ts
const NUXT_ERROR_SIGNATURE = "__nuxt_error";

function buildAssetsDir() {
	return useRuntimeConfig$1().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
	return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
	const app = useRuntimeConfig$1().app;
	const publicBase = app.cdnURL || app.baseURL;
	return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

// src/runtime/utils/config.ts
const defineAppConfig = (config) => config;

defineAppConfig({
  global: {
    picture: {
      dark: "https://lh3.googleusercontent.com/a/ACg8ocKd5fg68q6ZvjFL65NDyZPc8hEJdJzhJLVwNOPHjwQc7h22n0IU6g=s576-c-no",
      light: "https://lh3.googleusercontent.com/a/ACg8ocKd5fg68q6ZvjFL65NDyZPc8hEJdJzhJLVwNOPHjwQc7h22n0IU6g=s576-c-no",
      alt: "My profile picture"
    },
    meetingLink: "https://cal.com/",
    email: "ui-pro@nuxt.com",
    available: true
  },
  ui: {
    colors: {
      primary: "blue",
      neutral: "neutral"
    },
    pageHero: {
      slots: {
        container: "py-18 sm:py-24 lg:py-32",
        title: "mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl",
        description: "mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted"
      }
    }
  },
  footer: {
    credits: `Built with Nuxt UI \u2022 \xA9 ${(/* @__PURE__ */ new Date()).getFullYear()}`,
    colorMode: false,
    links: [{
      "icon": "i-simple-icons-discord",
      "to": "https://go.nuxt.com/discord",
      "target": "_blank",
      "aria-label": "Nuxt on Discord"
    }, {
      "icon": "i-simple-icons-x",
      "to": "https://go.nuxt.com/x",
      "target": "_blank",
      "aria-label": "Nuxt on X"
    }, {
      "icon": "i-simple-icons-github",
      "to": "https://github.com/nuxt/ui",
      "target": "_blank",
      "aria-label": "Nuxt UI on GitHub"
    }]
  }
});

/**
* The URL of the incoming request, as a new `URL` each call.
*
* @example
* ```ts
* const origin = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true }).origin
* ```
*
* @since 4.6.0
*/
function getRequestURL$1(event, options = {}) {
	const url = new URL(event.url ?? event.req.url);
	url.protocol = getRequestProtocol(event, options);
	if (options.xForwardedHost) {
		const host = getRequestHost(event, options);
		if (host) applyForwardedHost(url, host);
	}
	return url;
}
/**
* The `Host` of the request, or an empty string.
*
* @since 4.6.0
*/
function getRequestHost(event, options = {}) {
	if (options.xForwardedHost) {
		const forwarded = event.req.headers.get("x-forwarded-host")?.split(",")[0].trim();
		if (forwarded) return forwarded;
	}
	return event.req.headers.get("host") || "";
}
/**
* The protocol of the request, without the trailing colon.
*
* @since 4.6.0
*/
function getRequestProtocol(event, options = {}) {
	if (options.xForwardedProto) {
		const forwarded = event.req.headers.get("x-forwarded-proto")?.split(",")[0].trim();
		if (forwarded === "https" || forwarded === "http") return forwarded;
	}
	return (event.url ?? new URL(event.req.url)).protocol.slice(0, -1);
}
const PORT_RE = /^\d{1,5}$/;
function applyForwardedHost(url, host) {
	const separator = host.lastIndexOf(":");
	const hasPort = separator > host.lastIndexOf("]");
	const hostname = hasPort ? host.slice(0, separator) : host;
	const previous = url.hostname;
	url.hostname = hostname;
	if (url.hostname === previous && hostname.toLowerCase() !== previous) return;
	const port = hasPort ? host.slice(separator + 1) : "";
	url.port = PORT_RE.test(port) && +port < 65536 ? port : "";
}

/**
* @see {@link import('nuxt/server').defineEventHandler}
*
* The handler is given the event in the portable shape, so that it can read
* `event.req`/`event.url`/`event.res` as the surface promises.
*/
function defineEventHandler(handler) {
	return (event) => handler(toPortableEvent(event));
}
/**
* @see {@link import('nuxt/server').createError}
*
* h3 v1 recognises an error of its own by the marker its constructor carries, so the error
* has to be one it made; `status`/`statusText` are the names it knows as
* `statusCode`/`statusMessage`.
*/
function createError(input) {
	if (typeof input === "string") return withSignature(createError$1(input));
	const { status, statusText, ...rest } = input;
	return withSignature(createError$1({
		...rest,
		...status === void 0 ? {} : { statusCode: status },
		...statusText === void 0 ? {} : {
			statusMessage: statusText,
			message: input.message ?? statusText
		}
	}));
}
/** Mark an h3 error as Nuxt's, so `isNuxtError()` recognises it either side of the wire. */
function withSignature(error) {
	if (!("__nuxt_error" in error)) Object.defineProperty(error, NUXT_ERROR_SIGNATURE, {
		value: true,
		configurable: false,
		writable: false
	});
	return withPortableStatus(error);
}
/**
* Read the status of an h3 v1 error under the names the portable surface promises.
*
* h3 v1 carries it as `statusCode`/`statusMessage`, and `NuxtErrorLike` declares
* `status`/`statusText`, so without this a handler that branches on `error.status` reads
* `undefined` here and a number on a server runtime built against h3 v2.
*/
function withPortableStatus(error) {
	const target = error;
	if (target.status === void 0 && target.statusCode !== void 0) Object.defineProperty(target, "status", {
		get: () => target.statusCode,
		configurable: true
	});
	if (target.statusText === void 0 && target.statusMessage !== void 0) Object.defineProperty(target, "statusText", {
		get: () => target.statusMessage,
		configurable: true
	});
	return target;
}
/** @see {@link import('nuxt/server').getRequestURL} */
function getRequestURL(event, options = {}) {
	return getRequestURL$1(toForwardedEvent(event, options), options);
}
/** The URL h3 resolves for the request, with the headers to read forwarded values from. */
function toForwardedEvent(event, options) {
	return {
		req: { headers: event.headers },
		url: getRequestURL$2(event, { xForwardedProto: options.xForwardedProto })
	};
}
/** @see {@link import('nuxt/server').getRouteRules} */
function getRouteRules(event) {
	return getRouteRules$1(event);
}
/** @see {@link import('nuxt/server').useRuntimeConfig} */
function useRuntimeConfig(event) {
	return useRuntimeConfig$1(event);
}

function fetchWithEvent(event, request, options) {
  return event.$fetch(request, options)
}

const SiteConfigPriority = {
  nitro: -4,
  runtime: 0
};

function toValue(source) {
  if (typeof source === "function")
    return source();
  if (source && source.__v_isRef === true)
    return source.value;
  return source;
}
const NUXT_SITE_PREFIX = "NUXT_SITE_";
const NUXT_PUBLIC_SITE_PREFIX = "NUXT_PUBLIC_SITE_";
function envSiteConfig(env = {}) {
  const config = {};
  for (const key of Object.keys(env)) {
    const prefixLength = key.startsWith(NUXT_SITE_PREFIX) ? NUXT_SITE_PREFIX.length : key.startsWith(NUXT_PUBLIC_SITE_PREFIX) ? NUXT_PUBLIC_SITE_PREFIX.length : 0;
    if (!prefixLength)
      continue;
    const segments = key.slice(prefixLength).split("_");
    let configKey = segments[0].toLowerCase();
    for (let i = 1; i < segments.length; i++) {
      const segment = segments[i];
      configKey += segment[0]?.toUpperCase() + segment.slice(1).toLowerCase();
    }
    config[configKey] = env[key];
  }
  return config;
}

function copyPlainData(value) {
  if (Array.isArray(value))
    return value.map(copyPlainData);
  if (!value || typeof value !== "object" || value.__v_isRef || value.__v_isReactive)
    return value;
  const proto = Object.getPrototypeOf(value);
  if (proto !== Object.prototype && proto !== null)
    return value;
  const copy = {};
  for (const key in value)
    copy[key] = copyPlainData(value[key]);
  return copy;
}
function normalizeSiteConfig(config) {
  if (typeof config.indexable !== "undefined")
    config.indexable = String(config.indexable) !== "false";
  else if (typeof config.env !== "undefined")
    config.indexable = config.env === "production";
  if (typeof config.trailingSlash !== "undefined")
    config.trailingSlash = String(config.trailingSlash) !== "false";
  if (config.url && !hasProtocol(String(config.url), { acceptRelative: true, strict: false }))
    config.url = withHttps(String(config.url));
  const keys = Object.keys(config).sort((a, b) => a.localeCompare(b));
  const newConfig = {};
  for (const k of keys)
    newConfig[k] = config[k];
  return newConfig;
}
function createSiteConfigStack(options) {
  const debug = options?.debug || false;
  const stack = [];
  function push(input) {
    if (!input || typeof input !== "object" || Object.keys(input).length === 0) {
      return () => {
      };
    }
    const entry = {};
    for (const k in input) {
      const val = input[k];
      if (typeof val !== "undefined" && val !== "")
        entry[k] = copyPlainData(val);
    }
    if (!Object.keys(entry).some((k) => !k.startsWith("_"))) {
      return () => {
      };
    }
    if (!entry._context && debug) {
      let lastFunctionName = new Error("tmp").stack?.split("\n")[2]?.split(" ")[5];
      if (lastFunctionName?.includes("/"))
        lastFunctionName = "anonymous";
      entry._context = lastFunctionName;
    }
    stack.push(entry);
    return () => {
      const idx = stack.indexOf(entry);
      if (idx !== -1)
        stack.splice(idx, 1);
    };
  }
  function get(options2) {
    const siteConfig = {};
    if (options2?.debug)
      siteConfig._context = {};
    siteConfig._priority = {};
    for (const o in stack.sort((a, b) => (a._priority || 0) - (b._priority || 0))) {
      for (const k in stack[o]) {
        const key = k;
        const val = options2?.resolveRefs ? toValue(stack[o][k]) : stack[o][k];
        if (!k.startsWith("_") && typeof val !== "undefined" && val !== "") {
          siteConfig[k] = val;
          if (typeof stack[o]._priority !== "undefined" && stack[o]._priority !== -1) {
            siteConfig._priority[key] = stack[o]._priority;
          }
          if (options2?.debug)
            siteConfig._context[key] = stack[o]._context?.[key] || stack[o]._context || "anonymous";
        }
      }
    }
    return options2?.skipNormalize ? siteConfig : normalizeSiteConfig(siteConfig);
  }
  return {
    stack,
    push,
    get
  };
}

const PORT_SUFFIX_RE = /:\d+$/;
const serverEnvSiteConfig = envSiteConfig(globalThis._importMeta_.env || {});
async function initRequestSiteConfig(e, origin, routeRules) {
  if (e.context._initedSiteConfig)
    return;
  const runtimeConfig = useRuntimeConfig();
  const config = runtimeConfig["nuxt-site-config"];
  const nitroApp = useNitroApp();
  const siteConfig = e.context.siteConfig || createSiteConfigStack({
    debug: config.debug
  });
  const nitroOrigin = origin;
  e.context.siteConfigNitroOrigin = nitroOrigin;
  {
    siteConfig.push({
      _context: "nitro:init",
      _priority: SiteConfigPriority.nitro,
      url: nitroOrigin
    });
  }
  siteConfig.push({
    _context: "runtimeEnv",
    _priority: SiteConfigPriority.runtime,
    ...runtimeConfig.site || {},
    ...runtimeConfig.public.site || {},
    ...serverEnvSiteConfig
  });
  const buildStack = config.stack || [];
  buildStack.forEach((c) => siteConfig.push(c));
  if (routeRules.site) {
    siteConfig.push({
      _context: "route-rules",
      ...routeRules.site
    });
  }
  if (config.multiTenancy) {
    const host = parseURL(nitroOrigin).host?.replace(PORT_SUFFIX_RE, "") || "";
    const tenant = config.multiTenancy?.find((t) => t.hosts.includes(host));
    if (tenant) {
      siteConfig.push({
        _context: `multi-tenancy:${host}`,
        _priority: SiteConfigPriority.runtime,
        ...tenant.config
      });
    }
  }
  const ctx = { siteConfig, event: e };
  await nitroApp.hooks.callHook("site-config:init", ctx);
  e.context.siteConfig = ctx.siteConfig;
  e.context._initedSiteConfig = true;
}

const _tvEa5_orZIOQDy8H_xRiLLD_1efNqmL9DEZp3H1Ki7w = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("request", (event) => {
    const path = withoutBase(event.path.split("?")[0] || "/", useRuntimeConfig().app.baseURL);
    return initRequestSiteConfig(event, getNitroOrigin$1({
      isDev: true,
      isPrerender: false,
      requestHost: getRequestHost$1(event, { xForwardedHost: true }),
      requestProtocol: getRequestProtocol$1(event, { xForwardedProto: true })
    }), matchRouteRules(path, event.method));
  });
});

const rootDir$1 = "/Users/satej/Documents/neural-compressor-lab/frontend";
const srcDir = "/Users/satej/Documents/neural-compressor-lab/frontend/app";

// src/runtime/plugins/dev-server-logs.ts
const devReducers = {
	VNode: (data) => isVNode(data) ? {
		type: data.type,
		props: data.props
	} : void 0,
	URL: (data) => data instanceof URL ? data.toString() : void 0,
	Symbol: (data) => typeof data === "symbol" ? data.description ?? "" : void 0
};
const asyncContext = getContext$1("nuxt-dev", {
	asyncContext: true,
	AsyncLocalStorage
});
var dev_server_logs_default = (nitroApp) => {
	const handler = nitroApp.h3App.handler;
	nitroApp.h3App.handler = (event) => {
		return asyncContext.callAsync({
			logs: [],
			event
		}, () => handler(event));
	};
	onConsoleLog((_log) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) return;
		const rawStack = captureRawStackTrace();
		if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) return;
		const trace = [];
		let filename = "";
		for (const entry of parseRawStackTrace(rawStack)) {
			if (entry.source === globalThis._importMeta_.url) continue;
			if (EXCLUDE_TRACE_RE.test(entry.source)) continue;
			filename ||= entry.source.replace(withTrailingSlash(rootDir$1), "");
			trace.push({
				...entry,
				source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
			});
		}
		const log = {
			..._log,
			filename,
			stack: trace
		};
		ctx.logs.push(log);
	});
	nitroApp.hooks.hook("afterResponse", () => {
		const ctx = asyncContext.tryUse();
		if (!ctx) return;
		return nitroApp.hooks.callHook("dev:ssr-logs", {
			logs: ctx.logs,
			path: ctx.event.path
		});
	});
	nitroApp.hooks.hook("render:html", (htmlContext) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) return;
		try {
			const reducers = Object.assign(Object.create(null), devReducers, ctx.event.context["~payloadReducers"]);
			htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId$1}">${stringify(ctx.logs, reducers)}<\/script>`);
		} catch (e) {
			serverDiagnostics.NUXT_E8003({
				error: e instanceof Error ? e.toString() : void 0,
				cause: e
			});
		}
	});
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
	consola$1.addReporter({ log(logObj) {
		callback(logObj);
	} });
	consola$1.wrapConsole();
}

const componentNames = [{"hash":"6531pmllmjik","pascalName":"OgImagePortfolioTakumi","kebabName":"og-image-portfolio-takumi","path":"/Users/satej/Documents/neural-compressor-lab/frontend/app/components/OgImage/Portfolio.takumi.vue","category":"app","renderer":"takumi","propNames":["headline","title","description"]},{"hash":"1b3w0143c7dn","pascalName":"BlogPostTakumi","kebabName":"blog-post-takumi","path":"/Users/satej/Documents/neural-compressor-lab/frontend/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/BlogPost.takumi.vue","category":"community","renderer":"takumi","propNames":["colorMode","title","author","date","category","avatar","backgroundImage"]},{"hash":"1765qcthbznkz","pascalName":"DocsTakumi","kebabName":"docs-takumi","path":"/Users/satej/Documents/neural-compressor-lab/frontend/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Docs.takumi.vue","category":"community","renderer":"takumi","propNames":["colorMode","title","description","icon","primaryColor","primaryTextColor","site"]},{"hash":"2i9i80e3156m1","pascalName":"NuxtSeoTakumi","kebabName":"nuxt-seo-takumi","path":"/Users/satej/Documents/neural-compressor-lab/frontend/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/NuxtSeo.takumi.vue","category":"community","renderer":"takumi","propNames":["colorMode","title","description","isPro","width","height"]},{"hash":"2o2t5ovxyqb95","pascalName":"ProductCardTakumi","kebabName":"product-card-takumi","path":"/Users/satej/Documents/neural-compressor-lab/frontend/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/ProductCard.takumi.vue","category":"community","renderer":"takumi","propNames":["colorMode","productName","price","description","image","brand"]}];

const RE_SOCIAL_META_TAG = /<meta[^>]+(property|name)="(twitter|og):([^"]+)"[^>]*>/g;
const RE_SOCIAL_META_KEY = /(property|name)="(twitter|og):([^"]+)"/;
const RE_META_CONTENT$1 = /content="([^"]+)"/;
const RE_OG_KEY_PARAM = /[,/]k_([^,./]+)/;
function extractSocialPreviewTags(html) {
  const data = [];
  const rootData = {};
  const socialMetaTags = html.match(RE_SOCIAL_META_TAG) || [];
  let currentArrayIdx = -1;
  socialMetaTags.forEach((tag) => {
    const [, , type, key] = tag.match(RE_SOCIAL_META_KEY);
    const value = tag.match(RE_META_CONTENT$1)?.[1];
    if (!value) {
      return;
    }
    if (key === "title" || key === "description") {
      rootData[`${type}:${key}`] = value;
      return;
    }
    if (type === "og" && key === "image") {
      currentArrayIdx++;
    }
    if (!data[currentArrayIdx])
      data[currentArrayIdx] = {};
    if (!data[currentArrayIdx][type])
      data[currentArrayIdx][type] = {};
    data[currentArrayIdx][type][key] = value;
  });
  data.forEach((preview) => {
    if (preview.og?.image && preview.og?.image.includes("/_og/")) {
      const url = withoutQuery$1(preview.og.image);
      const keyMatch = url.match(RE_OG_KEY_PARAM);
      preview.key = keyMatch?.[1] || "og";
    }
  });
  return [rootData, data];
}
function detectBase64MimeType(data) {
  const signatures = {
    "R0lGODdh": "image/gif",
    "R0lGODlh": "image/gif",
    "iVBORw0KGgo": "image/png",
    "/9j/": "image/jpeg",
    "UklGR": "image/webp",
    "AAABAA": "image/x-icon",
    "PHN2Zy": "image/svg+xml",
    // <svg
    "PD94bW": "image/svg+xml",
    // <?xml
    "PCEt": "image/svg+xml"
    // <!--
  };
  for (const s in signatures) {
    if (data.startsWith(s)) {
      return signatures[s];
    }
  }
  return "image/svg+xml";
}
function toBase64Image(data) {
  const base64 = typeof data === "string" ? data : Buffer.from(data).toString("base64");
  const type = detectBase64MimeType(base64);
  return `data:${type};base64,${base64}`;
}
function withoutQuery$1(path) {
  return path.split("?")[0];
}

const RE_BASE64_URL_DASH = /-/g;
const RE_BASE64_URL_TILDE = /~/g;
const RE_DOUBLE_UNDERSCORE = /__/g;
const RE_PLUS = /\+/g;
const RE_ENCODED_COMMA = /%2c/gi;
const RE_ENCODED_PLUS = /%2b/gi;
const RE_SINGLE_UNDERSCORE = /(?<!_)_(?!_)/;
const RE_OG_ROUTE_PREFIX = /\/_og\/[ds]\//;
const RE_COMMA_PARAM_SEPARATOR = /,(?=\w+_)/;
const PARAM_ALIASES = {
  w: "width",
  h: "height",
  c: "component",
  em: "emojis",
  k: "key",
  a: "alt",
  u: "url",
  cache: "cacheMaxAgeSeconds",
  p: "_path",
  // page path - needs alias since _path starts with underscore
  q: "_query",
  // query params - needs alias since _query starts with underscore
  ch: "_componentHash"
  // component template hash for cache busting prerendered URLs
};
Object.fromEntries(
  Object.entries(PARAM_ALIASES).map(([alias, param]) => [param, alias])
);
const KNOWN_PARAMS = /* @__PURE__ */ new Set([
  "width",
  "height",
  "component",
  "renderer",
  "emojis",
  "key",
  "alt",
  "url",
  "cacheMaxAgeSeconds",
  "cacheKey",
  "extension",
  "satori",
  "resvg",
  "sharp",
  "screenshot",
  "takumi",
  "fonts",
  "_query",
  "_hash",
  "_componentHash",
  "socialPreview",
  "props",
  "_path"
]);
const COMPLEX_PARAMS = /* @__PURE__ */ new Set(["satori", "resvg", "sharp", "screenshot", "takumi", "fonts", "_query", "_path"]);
function b64Decode(str) {
  const standard = str.replace(RE_BASE64_URL_DASH, "+").replace(RE_BASE64_URL_TILDE, "/");
  const padded = standard + "=".repeat((4 - standard.length % 4) % 4);
  if (typeof atob === "function") {
    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  }
  return Buffer.from(padded, "base64").toString("utf8");
}
function canonicalJson(value) {
  if (value === null || typeof value !== "object")
    return JSON.stringify(value) ?? "null";
  if (Array.isArray(value))
    return `[${value.map((item) => canonicalJson(item)).join(",")}]`;
  const record = value;
  const entries = Object.keys(record).sort().filter((key) => record[key] !== void 0).map((key) => `${JSON.stringify(key)}:${canonicalJson(record[key])}`);
  return `{${entries.join(",")}}`;
}
const B64URL_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
function base64UrlToHex(input) {
  let hex = "";
  let buffer = 0;
  let bits = 0;
  for (const char of input) {
    buffer = buffer << 6 | B64URL_ALPHABET.indexOf(char);
    bits += 6;
    if (bits >= 8) {
      bits -= 8;
      hex += (buffer >> bits & 255).toString(16).padStart(2, "0");
    }
  }
  return hex;
}
function digestCanonical(value) {
  return base64UrlToHex(digest$1(canonicalJson(value)));
}
const RE_NUMERIC = /^-?(?:0|[1-9]\d*)(?:\.\d+)?$/;
function tryParseNumber(value) {
  if (RE_NUMERIC.test(value)) {
    const num = Number(value);
    if (!Number.isNaN(num))
      return num;
  }
  return value;
}
function decodeSimpleValue(raw) {
  if (raw.startsWith("~~")) {
    return decodeURIComponent(raw.slice(1).replace(RE_PLUS, "%20")).replace(RE_DOUBLE_UNDERSCORE, "_");
  }
  if (raw.startsWith("~")) {
    try {
      return b64Decode(raw.slice(1));
    } catch {
      return decodeURIComponent(raw.replace(RE_PLUS, "%20")).replace(RE_DOUBLE_UNDERSCORE, "_");
    }
  }
  return decodeURIComponent(raw.replace(RE_PLUS, "%20")).replace(RE_DOUBLE_UNDERSCORE, "_");
}
function decodeOgImageParams(encoded) {
  if (!encoded || encoded === "default")
    return {};
  const options = {};
  const parts = encoded.split(RE_COMMA_PARAM_SEPARATOR);
  for (const part of parts) {
    const idx = part.search(RE_SINGLE_UNDERSCORE);
    if (idx === -1)
      continue;
    const alias = part.slice(0, idx);
    let value = part.slice(idx + 1);
    const paramName = PARAM_ALIASES[alias] || alias;
    if (COMPLEX_PARAMS.has(paramName)) {
      try {
        const json = b64Decode(value);
        options[paramName] = JSON.parse(json);
      } catch {
        options[paramName] = value;
      }
    } else if (paramName === "props") {
      try {
        const json = b64Decode(value);
        options.props = { ...options.props, ...JSON.parse(json) };
      } catch {
      }
    } else if (KNOWN_PARAMS.has(paramName)) {
      value = decodeSimpleValue(value);
      if (value === "true") {
        options[paramName] = true;
      } else if (value === "false") {
        options[paramName] = false;
      } else if (value !== "") {
        options[paramName] = tryParseNumber(value);
      }
    } else {
      value = decodeSimpleValue(value);
      options.props = options.props || {};
      if (value === "true") {
        options.props[paramName] = true;
      } else if (value === "false") {
        options.props[paramName] = false;
      } else if (value !== "") {
        options.props[paramName] = tryParseNumber(value);
      }
    }
  }
  return options;
}
function normalizeUrlSegment(segment) {
  return segment.replace(RE_ENCODED_COMMA, ",").replace(RE_ENCODED_PLUS, "+");
}
function extractEncodedSegment(path, extension) {
  const match = path.match(RE_OG_ROUTE_PREFIX);
  if (match?.index != null) {
    return normalizeUrlSegment(path.slice(match.index + match[0].length).replace(new RegExp(`\\.${extension}$`), ""));
  }
  return normalizeUrlSegment(path.split("/").pop().replace(new RegExp(`\\.${extension}$`), ""));
}

const RE_KEBAB_CASE = /-([a-z])/g;
function isInternalRoute(path) {
  return path.startsWith("/_") || path.startsWith("@");
}
function filterIsOgImageOption(key) {
  const keys = [
    "url",
    "extension",
    "width",
    "height",
    "alt",
    "props",
    "renderer",
    "component",
    "emojis",
    "_query",
    "_hash",
    "fonts",
    "satori",
    "resvg",
    "sharp",
    "screenshot",
    "takumi",
    "cacheMaxAgeSeconds",
    "cacheKey",
    "key"
  ];
  return keys.includes(key);
}
function separateProps(options, ignoreKeys = []) {
  options = options || {};
  const _props = defu$1(options.props, Object.fromEntries(
    Object.entries({ ...options }).filter(([k]) => !filterIsOgImageOption(k) && !ignoreKeys.includes(k))
  ));
  const props = {};
  Object.entries(_props).forEach(([key, val]) => {
    props[key.replace(RE_KEBAB_CASE, (g) => String(g[1]).toUpperCase())] = val;
  });
  const result = Object.fromEntries(
    Object.entries({ ...options }).filter(([k]) => filterIsOgImageOption(k) || ignoreKeys.includes(k))
  );
  if (Object.keys(props).length > 0)
    result.props = props;
  return result;
}
const DANGEROUS_ATTRS = /* @__PURE__ */ new Set(["autofocus", "contenteditable", "tabindex", "accesskey"]);
function sanitizeProps(props) {
  const clean = {};
  for (const key of Object.keys(props)) {
    if (key.startsWith("on") || DANGEROUS_ATTRS.has(key.toLowerCase()))
      continue;
    clean[key] = props[key];
  }
  return clean;
}

function useOgImageRuntimeConfig(e) {
  const c = useRuntimeConfig();
  const moduleCfg = c["nuxt-og-image"];
  const secret = e?.context._ogImageSigningSecret;
  const security = secret ? { ...moduleCfg.security, secret } : moduleCfg.security;
  return {
    ...moduleCfg,
    security,
    app: {
      baseURL: c.app.baseURL
    }
  };
}

function createModuleLogger(tag, debug) {
  return createConsola({ level: 3, defaults: { tag } });
}

const logger$2 = createModuleLogger("Nuxt OG Image");

const RE_OG_IMAGE_PREFIX$1 = /^OgImage/;
const RE_RENDERER_SUFFIX = /(Satori|Browser|Takumi)$/;
const ejectedTemplates = /* @__PURE__ */ new Set();
function autoEjectCommunityTemplate(component, runtimeConfig) {
  const { srcDir, communityTemplatesDir } = runtimeConfig;
  if (!srcDir || !communityTemplatesDir)
    return;
  if (ejectedTemplates.has(component.pascalName))
    return;
  ejectedTemplates.add(component.pascalName);
  const baseName = component.pascalName.replace(RE_OG_IMAGE_PREFIX$1, "").replace(RE_RENDERER_SUFFIX, "");
  const filename = `${baseName}.${component.renderer}.vue`;
  const outputDir = join(srcDir, "components", "OgImage");
  const outputPath = join(outputDir, filename);
  if (existsSync(outputPath))
    return;
  const templatePath = join(communityTemplatesDir, filename);
  if (!existsSync(templatePath)) {
    logger$2.warn(`[nuxt-og-image] Community template not found: ${templatePath}`);
    return;
  }
  if (!existsSync(outputDir))
    mkdirSync(outputDir, { recursive: true });
  const content = readFileSync(templatePath, "utf-8");
  writeFileSync(outputPath, content, "utf-8");
  logger$2.info(`Auto-ejected community template "${baseName}" to ${outputPath}`);
}

const RENDERER_SUFFIXES = ["satori", "browser", "takumi"];
const RE_RENDERER_SUFFIX_DOT = /\.?(satori|browser|takumi)$/i;
const RE_RENDERER_SUFFIX_PASCAL = /(Satori|Browser|Takumi)$/;
const RE_OG_IMAGE_PREFIX = /^OgImage/;
function parseInputName(name) {
  for (const suffix of RENDERER_SUFFIXES) {
    if (name.endsWith(`.${suffix}`))
      return { baseName: name.slice(0, -(suffix.length + 1)), renderer: suffix };
  }
  for (const suffix of RENDERER_SUFFIXES) {
    const pascal = suffix.charAt(0).toUpperCase() + suffix.slice(1);
    if (name.endsWith(pascal))
      return { baseName: name.slice(0, -pascal.length), renderer: suffix };
  }
  return { baseName: name, renderer: null };
}
function stripRenderer(name) {
  return name.replace(RE_RENDERER_SUFFIX_DOT, "").replace(RE_RENDERER_SUFFIX_PASCAL, "");
}
const OGIMAGE_PREFIXES = [
  { prefix: "OgImageCommunity", overlapWord: "Community" },
  { prefix: "OgImageTemplate", overlapWord: "Template" },
  { prefix: "OgImage", overlapWord: "Image" }
];
function getComponentBaseNames(component) {
  const names = [];
  const stripped = stripRenderer(component.pascalName);
  for (const { prefix, overlapWord } of OGIMAGE_PREFIXES) {
    if (!stripped.startsWith(prefix))
      continue;
    const withoutPrefix = stripped.slice(prefix.length);
    if (withoutPrefix) {
      names.push(withoutPrefix);
      if (withoutPrefix !== overlapWord)
        names.push(overlapWord + withoutPrefix);
    } else {
      names.push(overlapWord);
    }
    break;
  }
  if (names.length === 0)
    names.push(stripped);
  return names;
}
function resolveComponent(name) {
  const exactMatch = componentNames.find((c) => c.pascalName === name);
  if (exactMatch)
    return { component: exactMatch, renderer: exactMatch.renderer };
  const { baseName, renderer } = parseInputName(name);
  const strippedBaseName = baseName.replace(RE_OG_IMAGE_PREFIX, "");
  const matches = componentNames.filter((c) => {
    const baseNames = getComponentBaseNames(c);
    return baseNames.some(
      (cBase) => cBase === baseName || cBase === strippedBaseName || cBase === `OgImage${baseName}` || cBase === `OgImage${strippedBaseName}`
    );
  });
  const filtered = renderer ? matches.filter((c) => c.renderer === renderer) : matches;
  if (filtered.length === 0) {
    if (renderer && matches.length > 0) {
      const available = matches.map((c) => `${getComponentBaseNames(c)[0]}.${c.renderer}`).join(", ");
      throw createError$1({
        statusCode: 500,
        message: `[Nuxt OG Image] Component "${name}" not found. Available variants: ${available}`
      });
    }
    throw createError$1({
      statusCode: 500,
      message: `[Nuxt OG Image] Component "${name}" not found. Create a component in components/OgImage/ with a renderer suffix (e.g., ${baseName}.satori.vue)`
    });
  }
  const appComponents = filtered.filter((c) => c.category !== "community");
  if (appComponents.length > 0) {
    const resolved2 = appComponents[0];
    return { component: resolved2, renderer: resolved2.renderer };
  }
  const resolved = filtered[0];
  return { component: resolved, renderer: resolved.renderer };
}
function normaliseOptions(_options) {
  const options = { ..._options };
  if (options.component === "PageScreenshot") {
    return {
      options,
      renderer: options.renderer || "browser",
      component: void 0
    };
  }
  if (!componentNames?.length) {
    throw createError$1({
      statusCode: 500,
      message: `[Nuxt OG Image] No OG Image components found. Create a component in components/OgImage/ with a renderer suffix (e.g., Default.satori.vue)`
    });
  }
  let resolved;
  let renderer;
  if (options.component) {
    const result = resolveComponent(options.component);
    resolved = result.component;
    renderer = result.renderer;
  } else {
    resolved = componentNames.find((c) => c.category !== "community") || componentNames[0];
    renderer = resolved.renderer;
  }
  options.component = resolved.pascalName;
  if (resolved.category === "community" && false) ;
  return {
    options,
    renderer,
    component: resolved
  };
}

const PAYLOAD_REGEX$1 = /<script.+id="nuxt-og-image-options"[^>]*>(.+?)<\/script>/;
function collectAutoEjectTemplates(html, event) {
  const payload = [...html.head, ...html.bodyAppend].join("\n").match(PAYLOAD_REGEX$1)?.[1];
  if (!payload)
    return;
  for (const options of parse(payload)) {
    if (!options?.component)
      continue;
    const normalised = (() => {
      try {
        return normaliseOptions({ ...options });
      } catch {
        return null;
      }
    })();
    if (normalised?.component?.category === "community")
      (event.context._ogImageAutoEject ||= []).push(normalised.component);
  }
}
function ejectCollectedTemplates(event) {
  const components = event.context._ogImageAutoEject;
  if (!components?.length)
    return;
  const runtimeConfig = useOgImageRuntimeConfig(event);
  for (const component of components)
    autoEjectCommunityTemplate(component, runtimeConfig);
}

const _kz8S8j__w3c8jifUWpX_q_keds6WSfRdh8MKQgG6cew = defineNitroPlugin((nitro) => {
  nitro.hooks.hook("render:html", (html, { event }) => collectAutoEjectTemplates(html, event));
  nitro.hooks.hook("afterResponse", ejectCollectedTemplates);
});

const script = "\"use strict\";(()=>{const o=window,e=document.documentElement,c=[\"dark\",\"light\"],s=getStorageValue(\"localStorage\",\"nuxt-color-mode\")||\"system\";let r=s===\"system\"?f():s;const l=e.getAttribute(\"data-color-mode-forced\");l&&(r=l),i(r),o[\"__NUXT_COLOR_MODE__\"]={preference:s,value:r,getColorScheme:f,addColorScheme:i,removeColorScheme:d};function i(t){const a=\"\"+t+\"\",n=\"\";e.classList?e.classList.add(a):e.className+=\" \"+a,n&&e.setAttribute(\"data-\"+n,t)}function d(t){const a=\"\"+t+\"\",n=\"\";e.classList?e.classList.remove(a):e.className=e.className.replace(new RegExp(a,\"g\"),\"\"),n&&e.removeAttribute(\"data-\"+n)}function u(t){return o.matchMedia(\"(prefers-color-scheme\"+t+\")\")}function f(){if(o.matchMedia&&u(\"\").media!==\"not all\"){for(const t of c)if(u(\":\"+t).matches)return t}return\"light\"}})();function getStorageValue(o,e){switch(o){case\"localStorage\":try{return window.localStorage.getItem(e)}catch{return null}case\"sessionStorage\":try{return window.sessionStorage.getItem(e)}catch{return null}case\"cookie\":try{return getCookie(e)}catch{return null}default:return null}}function getCookie(o){const c=(\"; \"+window.document.cookie).split(\"; \"+o+\"=\");if(c.length===2){const s=c.pop();return s?s.split(\";\").shift():null}}";

const _Vy_oZo2QGaTDxttMswiUZ003_vbE4OK3QyjvGwwn9A = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const NUXT_SITE_CONFIG_SSR_DEFAULT = true;

function getSiteRouteRules(event) {
  const routeRules = getRouteRules(event);
  return { site: routeRules.site, ssr: routeRules.ssr ?? NUXT_SITE_CONFIG_SSR_DEFAULT };
}

const logger$1 = /* @__PURE__ */ createConsola({
  defaults: {
    tag: "nuxt-site-config"
  }
});

function getSiteConfig(e, _options) {
  if (!e.context._initedSiteConfig) {
    logger$1.warn("Site config has not been initialized yet. If you're trying to access site config in a server middleware then this not yet supported. See https://github.com/harlan-zw/nuxt-seo/issues/397");
  }
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  const options = defu$1(_options, useRuntimeConfig()["nuxt-site-config"], { debug: false });
  return e.context.siteConfig.get(options);
}

const _ARyeZoq66ZcPuK3eUbF2_SDhWxcMp2lpl1YUPylF84g = defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook("render:html", async (ctx, { event }) => {
    const routeOptions = getSiteRouteRules(event);
    const isIsland = process.env.NUXT_COMPONENT_ISLANDS && event.path.startsWith("/__nuxt_island");
    event.path;
    const noSSR = !!process.env.NUXT_NO_SSR || event.context.nuxt?.noSSR || routeOptions.ssr === false && !isIsland || (false);
    if (noSSR) {
      const siteConfig = Object.fromEntries(
        Object.entries(getSiteConfig(event)).map(([k, v]) => [k, toValue(v)])
      );
      ctx.body.push(`<script>window.__NUXT_SITE_CONFIG__=${devalue(siteConfig)}<\/script>`);
    }
  });
});

// src/runtime/server/dev-error/index.ts
/** Base path the dev server owning the channel serves it at. */
const ERROR_CHANNEL_ENV$1 = "NUXT_DEV_ERROR_CHANNEL";
/** `BroadcastChannel` name reports are forwarded on. */
const ERROR_CHANNEL_BROADCAST$1 = "nuxt:dev:error";
const CHANNEL_KEY = Symbol.for("nuxt:dev:error-channel");
let isForwarding = () => false;
/**
* Whether reports are forwarded to a dev server in front rather than served from here.
* Read when the channel is first used, not when this module loads.
*/
function setErrorChannelForwarding(forward) {
	isForwarding = forward;
}
/** The live error channel, forwarding to the dev server in front when there is one. */
function useErrorChannel$1() {
	const store = globalThis;
	store[CHANNEL_KEY] ||= isForwarding() ? Promise.resolve(createForwardingChannel()) : import('file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/my-bad/dist/channel/index.mjs').then(({ createChannel }) => createOwnedChannel(createChannel({ open: true })));
	return store[CHANNEL_KEY];
}
/** The `BroadcastChannel` reports travel between threads on, which must not hold the process open. It drops every message where none can be opened. */
function openErrorBroadcast() {
	try {
		const broadcast = new BroadcastChannel(ERROR_CHANNEL_BROADCAST$1);
		broadcast.unref?.();
		return broadcast;
	} catch {
		return {
			onmessage: null,
			postMessage() {},
			close() {}
		};
	}
}
function openBroadcast() {
	const broadcast = openErrorBroadcast();
	return {
		broadcast,
		post: (message) => broadcast.postMessage(message)
	};
}
/** A channel of this process, which also relays reports to and from other threads. */
function createOwnedChannel(channel) {
	const { broadcast, post } = openBroadcast();
	broadcast.onmessage = (event) => {
		const message = event.data;
		switch (message?.type) {
			case "nuxt:dev:error:report": return channel.setError(message.report);
			case "nuxt:dev:error:clear": return channel.clearError(message.id);
			case "nuxt:dev:error:log": return channel.log(message.entry);
			case "nuxt:dev:error:warning": return channel.warn(message.report);
			case "nuxt:dev:error:progress": return channel.progress(message.progress);
		}
	};
	post({ type: "nuxt:dev:error:sync" });
	return {
		...channel,
		setError(report, requestId, request) {
			channel.setError(report, requestId, request);
			post({
				type: "nuxt:dev:error:report",
				report,
				requestId,
				request
			});
		},
		clearError(id) {
			channel.clearError(id);
			post({
				type: "nuxt:dev:error:clear",
				id
			});
		},
		get current() {
			return channel.current;
		},
		get clients() {
			return channel.clients;
		},
		get history() {
			return channel.history;
		}
	};
}
function createForwardingChannel() {
	const { broadcast, post } = openBroadcast();
	let current;
	return {
		handler: () => Promise.resolve(false),
		fetchHandler: () => Promise.resolve(void 0),
		setError(report, requestId, request) {
			current = report;
			post({
				type: "nuxt:dev:error:report",
				report,
				requestId,
				request
			});
		},
		clearError(id) {
			current = void 0;
			post({
				type: "nuxt:dev:error:clear",
				id
			});
		},
		warn(report) {
			post({
				type: "nuxt:dev:error:warning",
				report
			});
		},
		log(entry) {
			post({
				type: "nuxt:dev:error:log",
				entry: {
					timestamp: Date.now(),
					...entry
				}
			});
		},
		progress(progress) {
			post({
				type: "nuxt:dev:error:progress",
				progress
			});
		},
		get current() {
			return current;
		},
		history: [],
		getReport: () => void 0,
		clients: 0,
		close() {
			broadcast.close();
		}
	};
}
/** Publish a report as the current error, paired with the request it came from. */
async function publishErrorReport$1(report, request) {
	const channel = await useErrorChannel$1();
	const description = request && `${request.method} ${request.url.pathname}${request.url.search}`;
	channel.setError(report, requestIdOf(request), description);
}
/** The id a dev server in front gave the request. */
function requestIdOf(request) {
	return request?.headers.get("x-nuxt-dev-request-id") ?? void 0;
}
/** Retire the current report, dismissing overlays showing it. */
async function clearErrorReport() {
	const channel = await useErrorChannel$1();
	if (channel.current) channel.clearError();
}
/** Stream a log entry to connected error pages and overlays. */
async function publishDevLog(entry) {
	(await useErrorChannel$1()).log(entry);
}
/** Report build progress. A `percent` of 100 retires the progress bar. */
async function publishDevProgress(progress) {
	(await useErrorChannel$1()).progress(progress);
}
const THROWN_CONTEXT = Symbol.for("nuxt:dev:context");
/** The component instance and route the app recorded on `error` when it threw. */
function thrownContext(error) {
	return (typeof error === "object" && error !== null && THROWN_CONTEXT in error ? error[THROWN_CONTEXT] : void 0) ?? {};
}
/**
* Build a report for an error raised while rendering. Must run before anything rewrites
* `error.stack`, as frames are mapped by the loaders rather than read off the stack.
*/
async function createErrorReport$1(error, options) {
	const [{ createReport, fsLoader }, { nuxtPreset }] = await Promise.all([import('file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/my-bad/dist/index.mjs'), import('file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/my-bad/dist/presets/index.mjs')]);
	return withoutEchoingCauses(await createReport(error, {
		cwd: options.cwd,
		loaders: [...options.loaders ?? [], fsLoader()],
		presets: [nuxtPreset()],
		context: {
			...thrownContext(error),
			...options.context
		}
	}));
}
/** Add the error overlay to an already-rendered page. */
async function withErrorOverlay(html, report, options) {
	const [{ injectOverlay }, { nuxtTheme }] = await Promise.all([import('file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/my-bad/dist/index.mjs'), import('file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/my-bad/dist/presets/index.mjs')]);
	return injectOverlay(html, report, {
		cwd: options.cwd,
		channel: options.channel,
		requestId: options.requestId,
		theme: nuxtTheme,
		tag: "nuxt-error-overlay",
		startMinimized: options.startMinimized
	});
}
/** Render a standalone error page, for when the app itself cannot render one. */
async function renderErrorPage(report, options) {
	const [{ renderPage }, { nuxtTheme }] = await Promise.all([import('file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/my-bad/dist/index.mjs'), import('file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/my-bad/dist/presets/index.mjs')]);
	return renderPage(report, {
		cwd: options.cwd,
		channel: options.channel,
		requestId: options.requestId,
		theme: nuxtTheme
	});
}
/** Render a report for the terminal. It carries its own icon and colours. */
async function renderErrorAnsi(report, options) {
	const { renderAnsi } = await import('file:///Users/satej/Documents/neural-compressor-lab/frontend/node_modules/my-bad/dist/index.mjs');
	return renderAnsi(withoutEchoingCauses(report), { cwd: options.cwd });
}
/** Print a report to the terminal, falling back to the raw error when it cannot be rendered. */
async function printErrorReport(report, options) {
	const label = options.request ? ` [${options.request.method}] ${options.request.url.href}` : "";
	const rendered = await renderErrorAnsi(report, { cwd: options.cwd }).catch(() => void 0);
	if (rendered) console.log(`[request error]${label}\n\n${rendered}`);
	else console.error(`[request error]${label}\n\n`, options.error ?? report.message);
}
/**
* Build the reporter a builder hands the renderer as `onDevError`. The report is built on the
* stack as raised, so this must run before anything rewrites it.
*/
function createDevErrorReporter(options) {
	return async function observeDevError(error, event, observe = {}) {
		const request = event && options.requestInfo(event);
		const report = observe.expected ? void 0 : await options.createReport(error, event).catch(() => void 0);
		options.mapStack?.(error);
		if (!report) return;
		if (observe.publish !== false) await publishErrorReport$1(report, request).catch(() => {});
		if (observe.print !== false && !isForwarding()) await printErrorReport(report, {
			cwd: options.cwd,
			error,
			request
		});
		const requestId = requestIdOf(request);
		return {
			report,
			overlay: (html) => withErrorOverlay(html, report, {
				cwd: options.cwd,
				channel: options.channel(),
				requestId,
				startMinimized: true
			}),
			page: () => renderErrorPage(report, {
				cwd: options.cwd,
				channel: options.channel(),
				requestId
			})
		};
	};
}
/** A line of a code frame, as a compiler embeds one in a message. */
const FRAME_LINE_RE = /^[^\S\n]*(?:\d+[^\S\n]*[|:│]|[|│][^\S\n]*\^|\^)/m;
/**
* Drop causes that only repeat the report's own message, so the failure is read once. A
* wrapper is only dropped when all it adds is the code frame the report shows as a snippet.
*/
function withoutEchoingCauses(report) {
	const causes = report.causes.filter((cause) => !echoesMessage(cause.message, report.message)).map(withoutEchoingCauses);
	return causes.length === report.causes.length ? report : {
		...report,
		causes
	};
}
function echoesMessage(candidate, message) {
	if (candidate === message) return true;
	if (!candidate.startsWith(message)) return false;
	const remainder = candidate.slice(message.length);
	return remainder.trim() === "" || FRAME_LINE_RE.test(remainder);
}
/**
* Rewrite the module ids a transform failure names, and those of its causes, with
* `resolve`. A bundler names the module it was serving, which is not always a path.
*/
function resolveErrorPaths(error, resolve, seen = /* @__PURE__ */ new Set()) {
	if (typeof error !== "object" || error === null || seen.has(error)) return;
	seen.add(error);
	const candidate = error;
	if (typeof candidate.id === "string") candidate.id = resolve(candidate.id);
	if (candidate.loc && typeof candidate.loc.file === "string") candidate.loc.file = resolve(candidate.loc.file);
	resolveErrorPaths(candidate.cause, resolve, seen);
	if (Array.isArray(candidate.errors)) for (const nested of candidate.errors) resolveErrorPaths(nested, resolve, seen);
}
/** Flatten an error's `cause` chain into something the payload can carry. */
function serializeErrorCause(cause, depth = 0, seen = /* @__PURE__ */ new WeakSet()) {
	if (depth >= 10 || cause instanceof Error && seen.has(cause)) return;
	if (cause instanceof Error) {
		seen.add(cause);
		const nestedCause = serializeErrorCause(cause.cause, depth + 1, seen);
		return {
			name: cause.name,
			message: cause.message,
			...cause.stack && { stack: cause.stack },
			...nestedCause !== void 0 && { cause: nestedCause }
		};
	}
	if (cause === null || typeof cause === "string" || typeof cause === "number" || typeof cause === "boolean") return cause;
}

const NUXT_ERROR_CHANNEL = "/__nuxt_dev__/error";

// src/runtime/utils/error-channel.ts
const ERROR_CHANNEL_ENV = ERROR_CHANNEL_ENV$1;
const ERROR_CHANNEL_BROADCAST = ERROR_CHANNEL_BROADCAST$1;
/** Whether reports should be forwarded to the dev server that set {@link ERROR_CHANNEL_ENV}. */
function shouldForwardReports(env = process$1.env, mainThread = isMainThread) {
	return !!env[ERROR_CHANNEL_ENV] && !mainThread;
}
/** Base path pages should subscribe to. */
function getErrorChannelPath() {
	return process$1.env[ERROR_CHANNEL_ENV] || joinURL(useRuntimeConfig$1().app.baseURL, NUXT_ERROR_CHANNEL);
}
setErrorChannelForwarding(() => shouldForwardReports());
/** The live error channel, forwarding to the dev server in front when there is one. */
function useErrorChannel() {
	return useErrorChannel$1();
}
/** Publish a report as the current error, paired with the request it came from. */
function publishErrorReport(report, event) {
	return publishErrorReport$1(report, event && {
		method: event.method,
		url: getRequestURL$2(event),
		headers: event.headers
	});
}
/**
* Build a report for an error raised while rendering. Must run on the stack as it was
* raised, since frames are mapped through the SSR bundle's sourcemaps.
*/
function createErrorReport(error, event) {
	resolveErrorPaths(error, resolveTransformPath);
	const ssrSourceMaps = useNitroApp().ssrSourceMaps;
	return createErrorReport$1(error, {
		cwd: rootDir$1,
		loaders: ssrSourceMaps ? [compiledPositionLoader(ssrSourceMaps)] : [],
		context: { event }
	});
}
/**
* Resolve a bundler module id such as `/app.vue`, which reads as an absolute path but is
* relative to the environment root, to a file the developer can open.
*/
function resolveTransformPath(path) {
	const query = path.indexOf("?");
	const file = query === -1 ? path : path.slice(0, query);
	if (!file.startsWith("/") || existsSync(file)) return path;
	for (const root of [srcDir, rootDir$1]) {
		const resolved = join$1(root, file);
		if (existsSync(resolved)) return query === -1 ? resolved : resolved + path.slice(query);
	}
	return path;
}
/**
* Recover the generated position of frames the runner has already mapped. A frame mapped
* to its module but not to a line in it points at generated code, so counts as a vendor frame.
*/
function compiledPositionLoader(ssrSourceMaps) {
	return {
		name: "nuxt-compiled-position",
		map(frame) {
			if (!frame.file || frame.line === void 0 || frame.compiled) return;
			const compiled = ssrSourceMaps.getCompiledPosition?.(frame.file, frame.line, frame.column);
			if (compiled) return {
				...frame,
				compiled
			};
			return ssrSourceMaps.getCode(frame.file) !== void 0 && frame.line > lineCount(frame.file) ? {
				...frame,
				type: "vendor"
			} : void 0;
		},
		readCompiled: (file) => ssrSourceMaps.getCode(file)
	};
}
function lineCount(file) {
	try {
		return readFileSync(file, "utf8").split("\n").length;
	} catch {
		return Number.POSITIVE_INFINITY;
	}
}
/** Report an error raised while serving a request. */
const observeDevError = createDevErrorReporter({
	cwd: rootDir$1,
	channel: getErrorChannelPath,
	createReport: (error, event) => createErrorReport(error, event),
	requestInfo: (event) => ({
		method: event.method,
		url: getRequestURL$2(event),
		headers: event.headers
	})
});

// src/runtime/plugins/dev-errors.ts
/** Opens the error channel before anything requests a page. */
var dev_errors_default = (_nitroApp) => {
	useErrorChannel().catch(() => {});
	streamLogsToChannel();
};
/** Mirror what the server logs onto the error channel. */
function streamLogsToChannel() {
	let publishing = false;
	consola$1.addReporter({ log(logObject) {
		if (publishing) return;
		publishing = true;
		try {
			publishDevLog(toLogEntry(logObject)).catch(() => {});
		} finally {
			publishing = false;
		}
	} });
}
function toLogEntry(logObject) {
	const args = logObject.args ?? [];
	const message = formatWithOptions({
		colors: false,
		depth: 2
	}, ...args);
	return {
		level: toLogLevel(logObject),
		text: logObject.tag ? `[${logObject.tag}] ${message}` : message,
		timestamp: logObject.date ? new Date(logObject.date).getTime() : void 0
	};
}
const LOG_LEVELS = {
	trace: "trace",
	debug: "debug",
	verbose: "debug",
	info: "info",
	log: "log",
	warn: "warn",
	error: "error",
	fail: "error",
	fatal: "fatal"
};
/** Fallback for consola types whose names say nothing about severity. */
const LOG_LEVELS_BY_SEVERITY = [
	"error",
	"warn",
	"log",
	"info",
	"debug",
	"trace"
];
function toLogLevel(logObject) {
	if (LOG_LEVELS[logObject.type]) return LOG_LEVELS[logObject.type];
	const severity = Math.round(logObject.level);
	return LOG_LEVELS_BY_SEVERITY[Math.max(0, Math.min(severity, LOG_LEVELS_BY_SEVERITY.length - 1))] ?? "log";
}

const plugins = [
  _LjeRslyybgDCTYhdlEaXQ60ocAAvnkkfZPsvWqDVE,
route_rules_default,
_tvEa5_orZIOQDy8H_xRiLLD_1efNqmL9DEZp3H1Ki7w,
dev_server_logs_default,
_b5LpT8OmefgtqGF_ccsNMriKZMOwHAEl8Iwg1QljjMQ,
_kz8S8j__w3c8jifUWpX_q_keds6WSfRdh8MKQgG6cew,
_Vy_oZo2QGaTDxttMswiUZ003_vbE4OK3QyjvGwwn9A,
_ARyeZoq66ZcPuK3eUbF2_SDhWxcMp2lpl1YUPylF84g,
dev_errors_default,
_Z4Vm0BJMJeyU_KFYzGBgSOBoZ4JOQn4jYmko_KtDwU,
_LB91z6Ht2T49ncvhFWMKIA26eT4mdBc7tIFl06yLKKs
];

const assets = {
  "/index.mjs": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"53ffe-RvCLmZZt+tuCxt9k8XqQ/cU7ky0\"",
    "mtime": "2026-10-30T15:49:53.695Z",
    "size": 344062,
    "path": "index.mjs"
  },
  "/index.mjs.map": {
    "type": "application/json",
    "etag": "\"14bf6d-RrJe/sxEmM0sx33NjErwCTLxO+E\"",
    "mtime": "2026-10-30T15:49:53.702Z",
    "size": 1359725,
    "path": "index.mjs.map"
  }
};

function readAsset (id) {
  const serverDir = dirname$1(fileURLToPath(globalThis._importMeta_.url));
  // Public dirs might be pruned after the build (uploaded to a CDN, sourcemaps
  // stripped), so a manifest entry with no file behind it reads as absent, not broken.
  return promises.readFile(resolve$6(serverDir, assets[id].path)).catch((error) => {
    if (error?.code !== 'ENOENT') { throw error }
  })
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_fonts/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _LsfU6v = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError$1({ statusCode: 404 });
    }
    return;
  }
  if (asset.encoding !== void 0) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  const data = readAsset(id);
  return typeof data?.then === "function" ? data.then(
    (resolved) => assertAssetData(event, resolved)
  ) : assertAssetData(event, data);
});
function assertAssetData(event, data) {
  if (data === null || data === void 0) {
    removeResponseHeader(event, "Cache-Control");
    throw createError$1({ statusCode: 404 });
  }
  return data;
}

const options = {"iconifyApiEndpoint":"https://api.iconify.design"};

const warnOnceSet = /* @__PURE__ */ new Set();
const DEFAULT_ENDPOINT = "https://api.iconify.design";
function getInstallCommand(pkg) {
  const ua = process.env.npm_config_user_agent || "";
  if (ua.startsWith("pnpm")) return `pnpm add -D ${pkg}`;
  if (ua.startsWith("yarn")) return `yarn add -D ${pkg}`;
  if (ua.startsWith("bun")) return `bun add -D ${pkg}`;
  return `npm i -D ${pkg}`;
}
const _EJMPFj = defineCachedEventHandler(async (event) => {
  const collectionName = event.context.params?.collection?.replace(/\.json$/, "");
  const collection = collectionName && Object.hasOwn(collections, collectionName) ? await collections[collectionName]?.() : null;
  const apiEndPoint = options.iconifyApiEndpoint;
  const icons = String(parseQuery(parsePath(event.path).search).icons || "").split(",");
  if (!collectionName) return createError$1({ status: 400, message: "No collection specified" });
  if (!icons.length) return createError$1({ status: 400, message: "No icons specified" });
  if (!collection && true && !warnOnceSet.has(collectionName) && apiEndPoint === DEFAULT_ENDPOINT) {
    consola$1.warn([
      `[Icon] Collection \`${collectionName}\` is not found locally`,
      `We suggest to install it via \`${getInstallCommand(`@iconify-json/${collectionName}`)}\` to provide the best end-user experience.`
    ].join("\n"));
    warnOnceSet.add(collectionName);
  }
  if (collection) {
    const data = getIcons(
      collection,
      icons
    );
    consola$1.debug(`[Icon] serving ${icons.map((i) => "`" + collectionName + ":" + i + "`").join(",")} from bundled collection`);
    return data;
  }
  {
    const apiUrl = new URL(`./${collectionName}.json?icons=${icons.join(",")}`, apiEndPoint);
    consola$1.debug(`[Icon] fetching ${icons.map((i) => "`" + collectionName + ":" + i + "`").join(",")} from iconify api`);
    if (apiUrl.host !== new URL(apiEndPoint).host) {
      return createError$1({ status: 400, message: "Invalid icon request" });
    }
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        return response.status === 404 ? createError$1({ status: 404 }) : createError$1({ status: 500, message: "Failed to fetch fallback icon" });
      }
      return response.json();
    } catch (e) {
      consola$1.error(e);
      return createError$1({ status: 500, message: "Failed to fetch fallback icon" });
    }
  }
  return createError$1({ status: 404 });
}, {
  group: "nuxt",
  name: "icon",
  // @ts-expect-error Nitro 3 API
  allowQuery: ["icons"],
  getKey(event) {
    const collection = event.context.params?.collection?.replace(/\.json$/, "") || "unknown";
    const icons = String(parseQuery(parsePath(event.path).search).icons || "").split(",");
    return `${collection}_${icons[0]}_${icons.length}_${hash$1(icons.join(","))}`;
  },
  swr: true,
  maxAge: 60 * 60 * 24 * 7
  // 1 week
});

function getNitroOrigin(event) {
  if (event?.context.siteConfigNitroOrigin)
    return event.context.siteConfigNitroOrigin;
  const headers = event?.req?.headers;
  const forwardedHost = headers?.get("x-forwarded-host")?.split(",")[0]?.trim();
  const forwardedProtocol = headers?.get("x-forwarded-proto")?.split(",")[0]?.trim();
  const requestProtocol = event?.req ? new URL(event.req.url).protocol.slice(0, -1) : void 0;
  return getNitroOrigin$1({
    isDev: true,
    isPrerender: false,
    requestHost: forwardedHost || headers?.get("host") || void 0,
    requestProtocol: forwardedProtocol === "https" || forwardedProtocol === "http" ? forwardedProtocol : requestProtocol
  });
}

const _65ulKh = defineEventHandler((e) => initRequestSiteConfig(e, getNitroOrigin(e), getRouteRules(e)));

const _UI_5XN = defineEventHandler(async (e) => {
  const siteConfig = getSiteConfig(e);
  const nitroOrigin = getNitroOrigin(e);
  const runtimeConfig = useRuntimeConfig();
  const stack = e.context.siteConfig?.stack || [];
  e.res.headers.set("Content-Type", "application/json");
  return {
    config: siteConfig,
    stack,
    nitroOrigin,
    version: runtimeConfig["nuxt-site-config"].version
  };
});

const _Y4wZZl = eventHandler(async (event) => {
  const collection = getRouterParam(event, "collection") || event.path?.split("/")?.[2] || "";
  setHeader(event, "Content-Type", "text/plain");
  const data = await useStorage().getItem(`build:content:database.compressed.mjs`) || "";
  if (data) {
    const lineStart = `export const ${collection} = "`;
    const content = String(data).split("\n").find((line) => line.startsWith(lineStart));
    if (content) {
      return content.substring(lineStart.length, content.length - 1);
    }
  }
  return await import('file:///Users/satej/Documents/neural-compressor-lab/frontend/.nuxt/content/database.compressed.mjs').then((m) => m[collection]);
});

// ../nuxt/src/app/island-hash.ts
/**
* Strip Vue scoped-style attributes (`data-v-*`) from island props before hashing
* or rendering. Scoped-id markers leak in from parent components and are not part
* of the logical island input.
*
* Used before island props are serialized and sent to the island handler.
*
* @internal
*/
function filterIslandProps(props) {
	if (!props) return {};
	const out = {};
	for (const key in props) if (!key.startsWith("data-v-")) out[key] = props[key];
	return out;
}
/**
* Compute the `hashId` segment embedded in an island URL (`/__nuxt_island/<Name>_<hashId>.json`).
*
* The hash binds the response to the requested `(name, props, context, source)` tuple, so the
* server can reject requests whose URL hash does not match the supplied query/body. Use this
* from island clients if you need to ensure a hash stays in step with Nuxt's implementation.
*
* `props` may be passed either as the raw props object or as the JSON string that will be sent
* over the wire; the two produce the same hash when the round-trip is identity.
*
* @since 4.5.0
*/
function getIslandHash$1(input) {
	const props = typeof input.props === "string" ? parseSerializedProps$1(input.props) : input.props ?? {};
	return hash$1([
		input.name,
		props,
		input.context ?? {},
		input.source
	]).replace(/[-_]/g, "");
}
function parseSerializedProps$1(serializedProps) {
	try {
		return JSON.parse(serializedProps);
	} catch {
		return serializedProps;
	}
}

// src/runtime/utils/island-props.ts
/** @internal */
const MAX_ISLAND_BODY_BYTES = 65536;
/**
* Whether the bracket nesting of a JSON-ish string exceeds `maxDepth`, in a single linear
* pass. Brackets inside string values are ignored.
*
* @internal
*/
function exceedsMaxDepth(raw, maxDepth = 64) {
	let depth = 0;
	let inString = false;
	let escaped = false;
	for (let i = 0; i < raw.length; i++) {
		const ch = raw[i];
		if (inString) {
			if (escaped) escaped = false;
			else if (ch === "\\") escaped = true;
			else if (ch === "\"") inString = false;
			continue;
		}
		if (ch === "\"") inString = true;
		else if (ch === "{" || ch === "[") {
			if (++depth > maxDepth) return true;
		} else if (ch === "}" || ch === "]") {
			if (depth > 0) depth--;
		}
	}
	return false;
}
/** @internal */
function exceedsMaxBytes(raw, maxBytes = MAX_ISLAND_BODY_BYTES) {
	return Buffer.byteLength(raw, "utf8") > maxBytes;
}

// src/runtime/utils/island-head.ts
const TAG_CONFIG_KEYS = [
	"key",
	"tagPosition",
	"tagPriority"
];
/**
* Apply the `useHeadSafe` allowlist to resolved head input, returning input that renders
* the same tags when pushed without it.
*/
function toSafeHeadInput(input) {
	const { titleTemplate, ...rest } = input;
	const head = createHead({
		disableDefaults: true,
		plugins: [SafeInputPlugin]
	});
	head.push(rest, { _safe: true });
	const safe = {};
	if (typeof titleTemplate === "string" || titleTemplate === null) safe.titleTemplate = titleTemplate;
	for (const tag of resolveTags(head)) {
		if (tag.tag === "title") {
			safe.title = tag.textContent;
			continue;
		}
		const value = toInputValue(tag);
		if (tag.tag === "htmlAttrs" || tag.tag === "bodyAttrs" || tag.tag === "base") safe[tag.tag] = value;
		else (safe[tag.tag] ||= []).push(value);
	}
	return safe;
}
function toInputValue(tag) {
	const value = {};
	for (const [name, prop] of Object.entries(tag.props)) value[name] = prop instanceof Set ? [...prop].join(" ") : prop instanceof Map ? [...prop].map(([property, propertyValue]) => `${property}:${propertyValue}`).join(";") : prop;
	if (tag.textContent !== void 0) value.textContent = tag.textContent;
	for (const key of TAG_CONFIG_KEYS) if (tag[key] !== void 0) value[key] = tag[key];
	return value;
}

// src/runtime/utils/response.ts
/**
* The response the renderer builds, keeping its body as the renderer produced it.
*
* A real `Response` turns every body into a `ReadableStream`, which would send a rendered
* document as a chunked stream where nitro sends the string it was given. The renderer only
* reads the fields below back, so this describes just those.
*/
var NodeRenderResponse = class {
	body;
	status;
	statusText;
	headers;
	constructor(body, init) {
		this.body = body;
		this.status = init?.status || 200;
		this.statusText = init?.statusText || "";
		this.headers = init?.headers instanceof Headers ? init.headers : new Headers(init?.headers);
	}
};
/**
* The headers of a node response as the record nitro's `render:response` hook passes,
* read from and written to the node response itself. `set-cookie` is omitted, as it
* cannot be represented as one string. The proxy target is kept as a snapshot for
* `util.inspect`, which bypasses the traps.
*/
function createResponseHeaderRecord(res) {
	const read = (name) => {
		if (typeof name !== "string" || name.toLowerCase() === "set-cookie") return;
		const value = res.getHeader(name);
		if (value === void 0) return;
		return Array.isArray(value) ? value.join(", ") : String(value);
	};
	const snapshot = {};
	const sync = (name) => {
		const value = read(name);
		if (value === void 0) delete snapshot[name.toLowerCase()];
		else snapshot[name.toLowerCase()] = value;
	};
	for (const name of res.getHeaderNames()) sync(name);
	return new Proxy(snapshot, {
		get: (_, name) => read(name),
		has: (_, name) => read(name) !== void 0,
		set(_, name, value) {
			if (typeof name === "string") {
				if (value === void 0 || value === null) res.removeHeader(name);
				else res.setHeader(name, value);
				sync(name);
			}
			return true;
		},
		deleteProperty(_, name) {
			if (typeof name === "string") {
				res.removeHeader(name);
				sync(name);
			}
			return true;
		},
		ownKeys: () => res.getHeaderNames().filter((name) => name !== "set-cookie"),
		getOwnPropertyDescriptor(_, name) {
			const value = read(name);
			return value === void 0 ? void 0 : {
				value,
				writable: true,
				enumerable: true,
				configurable: true
			};
		}
	});
}

// src/runtime/server/renderer/cache.ts
function lazyCachedFunction(fn) {
	let res = null;
	return () => {
		if (res === null) res = fn().catch((err) => {
			res = null;
			throw err;
		});
		return res;
	};
}

// src/runtime/server/renderer/diagnostics.ts
const ansi = (open, close) => (s) => `\x1B[${open}m${s}\x1B[${close}m`;
const colors = {
	red: ansi(31, 39),
	yellow: ansi(33, 39),
	cyan: ansi(36, 39),
	gray: ansi(90, 39),
	bold: ansi(1, 22),
	dim: ansi(2, 22)
};
/**
* E8xxx
* SSR rendering diagnostics, sharing the range with the server runtime that
* hosts the renderer.
*/
const docsBase = (code) => `https://nuxt.com/docs/4.x/errors/${code.replace("NUXT_", "").toLowerCase()}`;
const rendererDiagnostics = /* #__PURE__ */ defineDiagnostics({
	docsBase,
	reporters: [/* @__PURE__ */ createConsoleReporter({ formatter: ansiFormatter(colors) } )],
	codes: {
		NUXT_E8001: {
			why: (p) => `\`render:html\` mutated \`body\`/\`bodyAppend\` while streaming (\`${p.path}\`). These fields are silently dropped because the body is about to stream.`,
			fix: "Use the `render:html:close` hook instead.",
			docs: false
		},
		NUXT_E8002: {
			why: (p) => `SSR streaming committed the response before render completed (\`${p.path}\`). The following mutations did not reach the client and were dropped:\n  - ${p.mutations}`,
			fix: (p) => `Move the mutation into a plugin (which runs before the shell is flushed), or opt this route out of streaming with \`routeRules: { '${p.path}': { streaming: false } }\` or the \`render:route\` hook.`,
			docs: false
		},
		NUXT_E8004: {
			why: "The server bundle is not available.",
			fix: "Ensure the Nuxt build completed successfully and the server entry was emitted by your builder.",
			docs: false
		},
		NUXT_E8006: {
			why: (p) => `The payload for \`${p.path}\` is ${p.size}, which will increase the page size and slow down hydration.${p.keys ? ` Largest payload keys:\n  - ${p.keys}` : ""}`,
			fix: "Use the `pick` or `transform` options of `useAsyncData`/`useFetch` to strip out data the client does not need.",
			docs: false
		},
		NUXT_E8007: {
			why: (p) => `\`${p.path}\` relies on client-side JavaScript, but \`features.noScripts: 'production'\` will strip scripts from this route in production:\n  - ${p.reasons}`,
			fix: "Remove the client-side dependency from this route, or scope script stripping with the `noScripts` route rule instead of enabling it globally."
		},
		NUXT_E8009: {
			why: (p) => `A page error interrupted the stream for \`${p.path}\`, and ${p.what} also failed while rendering the error response.\n  ${p.cause}`,
			fix: "Fix the page error first. If it keeps happening, report the failure below - the browser will show a blank or partial page instead of the error page."
		}
	}
});

// src/runtime/server/renderer/build-files.ts
const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const getServerEntry = () => Promise.resolve().then(function () { return entry; }).then((r) => r.default || r);
const getClientManifest = () => Promise.resolve().then(function () { return manifest$1; }).then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
/** Load the build artifacts for a set of renderer options, caching each of them on the returned object. */
function createBuildFiles(options) {
	const buildAssetsURL = (...path) => options.buildAssetsURL(...path);
	const getSSRRenderer = lazyCachedFunction(async () => {
		const createSSRApp = await getServerEntry();
		if (!createSSRApp) throw rendererDiagnostics.NUXT_E8004();
		const precomputed = void 0 ;
		const renderer = createRenderer(createSSRApp, {
			precomputed,
			manifest: await getClientManifest() ,
			renderToString: renderToString$1,
			buildAssetsURL
		});
		async function renderToString$1(input, context) {
			const html = await renderToString(input, context);
			if (process.env.NUXT_VITE_NODE_OPTIONS) renderer.rendererContext.updateManifest(await getClientManifest());
			return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
		}
		return renderer;
	});
	const getSPARenderer = lazyCachedFunction(async () => {
		const precomputed = void 0 ;
		const template = renderSPATemplate();
		const renderer = createRenderer(() => () => {}, {
			precomputed,
			manifest: await getClientManifest() ,
			renderToString: () => template,
			buildAssetsURL
		});
		const result = await renderer.renderToString({});
		const renderToString = (ssrContext) => {
			const config = ssrContext.runtimeConfig;
			ssrContext.modules ||= /* @__PURE__ */ new Set();
			ssrContext.payload.serverRendered = false;
			ssrContext.config = {
				public: config.public,
				app: config.app
			};
			return Promise.resolve(result);
		};
		return {
			rendererContext: renderer.rendererContext,
			renderToString
		};
	});
	return {
		getRenderer: (ssrContext) => ssrContext.noSSR ? getSPARenderer() : getSSRRenderer(),
		getSSRRenderer,
		getServerApp: lazyCachedFunction(getServerEntry)
	};
}
function renderSPATemplate() {
	{
		`<${appSpaLoaderTag}${propsToString(appSpaLoaderAttrs)}>`;
		return APP_ROOT_OPEN_TAG + APP_ROOT_CLOSE_TAG + ("");
	}
}
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));

// src/runtime/server/renderer/instance.ts
/**
* Create the renderer state for a set of options.
*
* Called by `createNuxtRenderer()`; call it directly only to render against the same
* artifacts as a renderer created elsewhere (an island handler sharing the server bundle
* loaded for page renders), and pass the result to `createNuxtRenderer()`.
*/
function createRendererInstance(options) {
	return {
		options,
		...createBuildFiles(options)
	};
}

// src/runtime/server/renderer/runtime.ts
/** The event to pass to application code and to the render hooks. */
function appEvent(event) {
	return event["~app"] ?? event;
}
function getRequestState(event) {
	return event.context.nuxt;
}

// src/runtime/utils/renderer/options.ts
globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
/** The capabilities a nitropack v2 host provides to the Nuxt renderer. */
const rendererOptions = {
	runtimeConfig: (event) => useRuntimeConfig$1(appEvent(event)),
	buildAssetsURL,
	publicAssetsURL,
	getRouteRules: (event) => getRouteRules$1(appEvent(event)),
	hooks: () => useNitroApp().hooks,
	createResponse: (body, init) => new NodeRenderResponse(body, init),
	createError: (init) => createError$1({
		statusCode: init.status,
		statusMessage: init.statusText,
		message: init.statusText,
		data: init.data
	}),
	writeEarlyHints: (event, hints) => writeEarlyHints(appEvent(event), hints.link),
	onRenderSuccess: () => {
		Promise.resolve().then(function () { return errorChannel$1; }).then(({ clearErrorReport }) => clearErrorReport()).catch(() => {});
	} ,
	prerender: void 0
};
rendererOptions.onDevError = (error, event, options) => Promise.resolve().then(function () { return errorChannel$1; }).then(({ observeDevError }) => observeDevError(error, appEvent(event), options));
/**
* The renderer the page and island handlers share, so that both render against a single
* load of the server bundle and its manifest.
*/
const rendererInstance = createRendererInstance(rendererOptions);

// src/runtime/server/renderer/url.ts
/**
* The fragment of a request URL, avoiding the lazy URL parse that reading `hash` triggers when
* there is none. A fragment is never sent over the wire, so it can only appear on a URL the
* server constructed itself.
*/
function urlHash(url) {
	return url.href.includes("#") ? url.hash : "";
}
const PAYLOAD_BUILD_ID_PARAM = "_b";
/** Parse a request path without treating a leading `//` as an authority. */
function parseRequestPath(path) {
	return new URL("http://localhost" + path);
}
/** The page route a `_payload.json` (or `_payload.js`) request renders, without the build id param. */
function payloadRequestToRoute(path, filename = "_payload.json") {
	const payloadURL = parseRequestPath(path);
	const url = payloadURL.pathname.slice(0, -`/${filename}`.length) || "/";
	payloadURL.searchParams.delete(PAYLOAD_BUILD_ID_PARAM);
	return url + payloadURL.search;
}
const LEADING_SLASHES_RE = /^\/+/;
const TRAILING_SLASHES_RE = /\/*$/;
/** The same-origin `_payload.json` (or `_payload.js`) URL for a page route, tagged with the build id. */
function routeToPayloadURL(baseURL, path, buildId, filename = "_payload.json") {
	const request = parseRequestPath(path);
	const base = new URL(baseURL.replace(TRAILING_SLASHES_RE, "/"), "http://localhost");
	const route = request.pathname.replace(LEADING_SLASHES_RE, "").replace(TRAILING_SLASHES_RE, "/");
	const url = new URL("./" + (route === "/" ? "" : route) + filename, base);
	url.search = request.search;
	url.searchParams.set(PAYLOAD_BUILD_ID_PARAM, buildId);
	return URL.canParse(baseURL) ? url.href : url.pathname + url.search;
}
/** `url` with its path and query replaced by those of the request path `path`, keeping its origin. */
function withRequestPath(url, path) {
	const request = parseRequestPath(path);
	const target = new URL(url);
	target.pathname = request.pathname;
	target.search = request.search;
	return target;
}

// src/runtime/server/renderer/app.ts
new Set(NUXT_PRERENDER_NO_SSR_ROUTES);
function createServerHead() {
	return createHead(unheadOptions);
}
function createSSRContext(options, event) {
	const url = event.url.pathname + event.url.search + urlHash(event.url);
	const ssrContext = {
		url,
		event: appEvent(event),
		runtimeConfig: options.runtimeConfig(event),
		noSSR: getRequestState(event)?.noSSR || (false),
		head: createServerHead(),
		error: false,
		nuxt: void 0,
		payload: {},
		["~payloadReducers"]: Object.create(null),
		modules: /* @__PURE__ */ new Set()
	};
	return ssrContext;
}
/**
* Turn the response the renderer assembled into a web-standard `Response`, carrying the
* headers queued on the event alongside the ones the response names for itself.
*/
function returnRenderResponse(options, event, response) {
	const headers = new Headers(event.res.headers);
	for (const name in response.headers) headers.set(name, response.headers[name]);
	return options.createResponse(response.body ?? null, {
		status: response.statusCode ?? event.res.status,
		statusText: response.statusMessage ?? event.res.statusText,
		headers
	});
}
function setSSRError(ssrContext, error) {
	ssrContext.error = true;
	ssrContext.payload = { error };
	ssrContext.url = error.url;
}

// src/runtime/server/renderer/inline-styles.ts
async function renderInlineStyles(usedModules) {
	const styleMap = await getSSRStyles();
	const inlinedStyles = /* @__PURE__ */ new Set();
	const promises = [];
	for (const mod of usedModules) if (mod in styleMap && styleMap[mod]) promises.push(styleMap[mod]());
	for (const styles of await Promise.all(promises)) for (const style of styles) inlinedStyles.add(style);
	return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

// src/runtime/server/renderer/islands.ts
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
/**
* remove the root node from the html body
*/
function getServerComponentHTML(body) {
	return body.match(ROOT_NODE_REGEX)?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) return;
	const response = {};
	for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) response[name] = {
		...slot,
		fallback: ssrContext.teleports?.[`island-fallback=${name}`]
	};
	return response;
}
function getClientIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) return;
	const response = {};
	for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
		let html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
		if (!html && ssrContext.teleports) for (const [key, value] of Object.entries(ssrContext.teleports)) {
			const [, , componentUid] = key.match(SSR_CLIENT_TELEPORT_MARKER) ?? [];
			if (componentUid === clientUid) {
				html = value.replaceAll("<!--teleport start anchor-->", "");
				break;
			}
		}
		response[clientUid] = {
			...component,
			html,
			slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
		};
	}
	return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
	const entries = Object.entries(teleports);
	const slots = {};
	for (const [key, value] of entries) {
		const match = key.match(SSR_CLIENT_SLOT_MARKER);
		if (match) {
			const [, id, slot] = match;
			if (!slot || clientUid !== id) continue;
			slots[slot] = value;
		}
	}
	return slots;
}
const ISLAND_TELEPORT_ANCHOR_RE = / data-island-uid="([^"]*)" data-island-(component|slot)="([^"]*)"[^>]*>/g;
function replaceIslandTeleports(ssrContext, html) {
	const { teleports, islandContext } = ssrContext;
	if (islandContext || !teleports) return html;
	const contentsByAnchor = /* @__PURE__ */ new Map();
	const uids = /* @__PURE__ */ new Set();
	for (const key in teleports) {
		const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
		if (matchClientComp) {
			const [, uid, clientId] = matchClientComp;
			if (!uid || !clientId) continue;
			contentsByAnchor.set(`${uid};component;${clientId}`, teleports[key]);
			uids.add(uid);
			continue;
		}
		const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
		if (matchSlot) {
			const [, uid, slot] = matchSlot;
			if (!uid || !slot) continue;
			contentsByAnchor.set(`${uid};slot;${slot}`, teleports[key]);
			uids.add(uid);
		}
	}
	if (!contentsByAnchor.size) return html;
	const stitch = (html) => {
		const anchorRE = new RegExp(ISLAND_TELEPORT_ANCHOR_RE);
		let out = "";
		let cursor = 0;
		let m;
		while (contentsByAnchor.size && (m = anchorRE.exec(html))) {
			if (!uids.has(m[1])) continue;
			const anchor = `${m[1]};${m[2]};${m[3]}`;
			const content = contentsByAnchor.get(anchor);
			if (content === void 0) continue;
			contentsByAnchor.delete(anchor);
			const end = m.index + m[0].length;
			out += html.slice(cursor, end) + stitch(content);
			cursor = end;
		}
		return cursor ? out + html.slice(cursor) : html;
	};
	return stitch(html);
}

// src/runtime/server/renderer/dev-css.ts
const QUERY_RE = /\?.*$/;
const LEADING_RELATIVE_RE = /^(?:\.\.?\/)+/;
/**
* Whether a dev stylesheet belongs to one of the modules a render actually used.
*
* The dev CSS set is the builder's whole module graph, not a per-request subset, so
* consumers that must not leak unrelated styles (islands) narrow it with the modules
* Vue registered during their own render.
*/
function isStyleOfModule(file, modules) {
	const path = file.replace(QUERY_RE, "");
	for (const mod of modules) {
		const normalized = mod.replace(LEADING_RELATIVE_RE, "");
		if (normalized && (path === normalized || path.endsWith("/" + normalized))) return true;
	}
	return false;
}

// src/runtime/handlers/island.ts
const ISLAND_SUFFIX_RE = /\.json(?:\?.*)?$/;
const handler$1 = defineEventHandler$1(async (event) => {
	setResponseHeaders(event, {
		"content-type": "application/json;charset=utf-8",
		"x-powered-by": "Nuxt"
	});
	return toResponse(event, await renderIsland(event));
});
function toResponse(event, result) {
	return "raw" in result ? returnIslandResponse(event, result.raw) : result;
}
async function renderIsland(event) {
	const nitroApp = useNitroApp();
	const islandContext = await getIslandContext(event);
	const ssrContext = {
		...createSSRContext(rendererInstance.options, toRequestEvent(event)),
		islandContext,
		noSSR: false,
		url: islandContext.url
	};
	const renderer = await rendererInstance.getSSRRenderer();
	const renderResult = await (renderer.renderToString(ssrContext)).catch(async (err) => {
		if (ssrContext["~renderResponse"] && err?.message === "skipping render") return {};
		await ssrContext.nuxt?.hooks.callHook("app:error", err);
		throw err;
	});
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult
	});
	if (ssrContext["~renderResponse"]) {
		const response = ssrContext["~renderResponse"];
		if (response.statusCode && response.statusCode >= 400) throw createError$1({
			statusCode: response.statusCode,
			statusMessage: response.statusMessage
		});
		return { raw: response };
	}
	if (ssrContext.payload?.error) throw ssrContext.payload.error;
	const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
	if (inlinedStyles.length) ssrContext.head.push({ style: inlinedStyles });
	{
		const { styles } = getRequestDependencies(ssrContext, renderer.rendererContext);
		const link = [];
		const modules = ssrContext.modules ?? [];
		for (const resource of Object.values(styles)) {
			if ("inline" in getQuery(resource.file)) continue;
			if (isStyleOfModule(resource.file, modules)) link.push({
				rel: "stylesheet",
				href: renderer.rendererContext.buildAssetsURL(resource.file),
				crossorigin: ""
			});
		}
		if (link.length) ssrContext.head.push({ link });
	}
	const islandHead = {};
	for (const entry of ssrContext.head.entries.values()) {
		const input = walkResolver(entry.input, VueResolver);
		for (const [key, value] of Object.entries(entry.options?._safe ? toSafeHeadInput(input) : input)) {
			const currentValue = islandHead[key];
			if (Array.isArray(currentValue)) currentValue.push(...value);
			else islandHead[key] = value;
		}
	}
	const islandResponse = {
		id: islandContext.id,
		head: islandHead,
		html: getServerComponentHTML(renderResult.html),
		components: getClientIslandResponse(ssrContext),
		slots: getSlotIslandResponse(ssrContext)
	};
	await nitroApp.hooks.callHook("render:island", islandResponse, {
		event,
		islandContext
	});
	return islandResponse;
}
function returnIslandResponse(event, response) {
	for (const header in response.headers || {}) setResponseHeader(event, header, response.headers[header]);
	if (response.statusCode) setResponseStatus(event, response.statusCode, response.statusMessage);
	return response.body;
}
const ISLAND_PATH_PREFIX = "/__nuxt_island/";
const VALID_COMPONENT_NAME_RE = /^[a-z][\w.-]*$/i;
async function drainBody(event) {
	const stream = getRequestWebStream(event);
	if (!stream) return;
	const reader = stream.getReader();
	try {
		for (;;) {
			const { done } = await reader.read();
			if (done) break;
		}
	} finally {
		reader.releaseLock();
	}
}
async function readGuardedIslandBody(event) {
	const contentLength = Number(getRequestHeader(event, "content-length"));
	if (contentLength > 65536) {
		if (contentLength <= 4194304) await drainBody(event);
		throw createError$1({
			statusCode: 413,
			statusMessage: "Island request body too large"
		});
	}
	let received = 0;
	let raw = "";
	let overflowed = false;
	const stream = getRequestWebStream(event);
	if (stream) {
		const decoder = new TextDecoder();
		const reader = stream.getReader();
		try {
			for (;;) {
				const { done, value } = await reader.read();
				if (done) break;
				received += value.byteLength;
				if (received > 65536) {
					overflowed = true;
					continue;
				}
				raw += decoder.decode(value, { stream: true });
			}
		} finally {
			reader.releaseLock();
		}
		raw += decoder.decode();
	}
	if (overflowed) throw createError$1({
		statusCode: 413,
		statusMessage: "Island request body too large"
	});
	if (!raw) return {};
	if (exceedsMaxDepth(raw)) throw createError$1({
		statusCode: 400,
		statusMessage: "Island request body too deeply nested"
	});
	return destr$1(raw) || {};
}
async function getIslandContext(event) {
	let url = event.path || "";
	url.replace(/\?.*$/, "");
	if (!url.startsWith(ISLAND_PATH_PREFIX)) throw createError$1({
		statusCode: 400,
		statusMessage: "Invalid island request path"
	});
	const componentParts = url.substring(15).replace(ISLAND_SUFFIX_RE, "").split("_");
	const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
	const componentName = componentParts.join("_");
	if (!componentName || !VALID_COMPONENT_NAME_RE.test(componentName)) throw createError$1({
		statusCode: 400,
		statusMessage: "Invalid island component name"
	});
	const rawContext = event.method === "GET" ? getQuery$1(event) : await readGuardedIslandBody(event);
	const serializedProps = typeof rawContext?.props === "string" ? rawContext.props : "{}";
	if (exceedsMaxBytes(serializedProps)) throw createError$1({
		statusCode: 413,
		statusMessage: "Island request props too large"
	});
	if (exceedsMaxDepth(serializedProps)) throw createError$1({
		statusCode: 400,
		statusMessage: "Island request props too deeply nested"
	});
	const clientContext = {};
	if (rawContext && typeof rawContext === "object") {
		for (const key in rawContext) if (key !== "props") clientContext[key] = rawContext[key];
	}
	const parsed = destr$1(serializedProps);
	if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) throw createError$1({
		statusCode: 400,
		statusMessage: "Invalid island request props"
	});
	const parsedProps = filterIslandProps(parsed);
	const expectedHash = getIslandHash$1({
		name: componentName,
		props: parsedProps,
		context: clientContext
	});
	if (!hashId || hashId !== expectedHash) throw createError$1({
		statusCode: 400,
		statusMessage: "Invalid island request hash"
	});
	return {
		url: typeof rawContext?.url === "string" ? rawContext.url : "/",
		id: hashId,
		name: componentName,
		props: parsedProps,
		slots: {},
		components: {}
	};
}

async function decompressSQLDump(base64Str, compressionType = "gzip") {
  let binaryData;
  if (typeof Buffer !== "undefined") {
    const buffer = Buffer.from(base64Str, "base64");
    binaryData = Uint8Array.from(buffer);
  } else if (typeof atob !== "undefined") {
    binaryData = Uint8Array.from(atob(base64Str), (c) => c.charCodeAt(0));
  } else {
    throw new TypeError("No base64 decoding method available");
  }
  const response = new Response(new Blob([binaryData]));
  const decompressedStream = response.body?.pipeThrough(new DecompressionStream(compressionType));
  const text = await new Response(decompressedStream).text();
  return JSON.parse(text);
}

const checksums = {
  "index": "v3.5.0--QNrrXt_CsRJsnvw3cBNicjH1mMPQgM-QekobSH7yJ5w",
  "projects": "v3.5.0--dbwXkGjBCJi-n19uC1fSTdyxBxx2iXOAKjmYIEAI9Nw",
  "blog": "v3.5.0--HNTObgF34dqyhKjGLXH24yNuu0MBve8upZuvO8Chqjc",
  "pages": "v3.5.0--irhHyanfCcLN5r3ddbAIedVGSqxKkpU7cDLW-kNy6IQ",
  "speaking": "v3.5.0--WpS-Q_0Pxqtdvdlr4SZj0zYiTZ9d2FVBp1G2lpcSyA8",
  "about": "v3.5.0--GwFJ6j8rhqvKjUn3m_00avP2iRlwcBAEJoRuKLDky0k"
};
const checksumsStructure = {
  "index": "OlB8K-FYQeiOmH_XYZUPmjxYW6W3oRCq3ruT1Br3SAE",
  "projects": "fPMREOruI1oepfApCB9vNqg8eQ42EjGDvAgUbFzMyDg",
  "blog": "PMMhvgGFocAPWVLx3gMtIzP4fDKba6Sbn_0u9hWJAMk",
  "pages": "3IjgIfEEf-jEHsY-RT_ootRkgk4JVF1_40-7S552Cfs",
  "speaking": "mx3wcXExXsrpiL3ywmz6_l1aKNy9k5ZmsvbIyKUasJQ",
  "about": "fNWjfi6QK17IkVo_GwVO6TE5eDF4m9P5PE52tFBRB8c"
};
const tables = {
  "index": "_content_index",
  "projects": "_content_projects",
  "blog": "_content_blog",
  "pages": "_content_pages",
  "speaking": "_content_speaking",
  "about": "_content_about",
  "info": "_content_info"
};
const contentManifest = {
  "index": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "about": "json",
      "blog": "json",
      "body": "json",
      "description": "string",
      "experience": "json",
      "extension": "string",
      "faq": "json",
      "hero": "json",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string",
      "testimonials": "json"
    }
  },
  "projects": {
    "type": "data",
    "fields": {
      "id": "string",
      "title": "string",
      "date": "date",
      "description": "string",
      "extension": "string",
      "image": "string",
      "meta": "json",
      "stem": "string",
      "tags": "json",
      "url": "string"
    }
  },
  "blog": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "author": "json",
      "body": "json",
      "date": "date",
      "description": "string",
      "extension": "string",
      "image": "string",
      "meta": "json",
      "minRead": "number",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string"
    }
  },
  "pages": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "description": "string",
      "extension": "string",
      "links": "json",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string"
    }
  },
  "speaking": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "description": "string",
      "events": "json",
      "extension": "string",
      "links": "json",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string"
    }
  },
  "about": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "content": "json",
      "description": "string",
      "extension": "string",
      "images": "json",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string"
    }
  },
  "info": {
    "type": "data",
    "fields": {}
  }
};

async function fetchContent(event, collection, path, options) {
  const headers = event ? getRequestHeaders(event) : {};
  headers["accept-encoding"] = void 0;
  for (const name of ["content-length", "transfer-encoding", "content-encoding", "expect"]) {
    headers[name] = void 0;
  }
  const url = `/__nuxt_content/${collection}/${path}`;
  const fetchOptions = {
    ...options,
    headers: {
      ...headers,
      ...options.headers
    },
    query: { v: checksums[String(collection)], t: Date.now()  }
  };
  return event ? await event.$fetch(url, fetchOptions) : await $fetch(url, fetchOptions);
}
async function fetchDatabase(event, collection) {
  return fetchContent(event, collection, "sql_dump.txt", {
    responseType: "text",
    headers: {
      "content-type": "text/plain"
    }
  });
}

function refineContentFields(sql, doc) {
  const fields = findCollectionFields(sql);
  const item = { ...doc };
  for (const key in item) {
    if (fields[key] === "json" && item[key] && item[key] !== "undefined") {
      item[key] = JSON.parse(item[key]);
    }
    if (fields[key] === "boolean" && item[key] !== "undefined") {
      item[key] = Boolean(item[key]);
    }
  }
  for (const key in item) {
    if (item[key] === "NULL") {
      item[key] = void 0;
    }
  }
  return item;
}
function findCollectionFields(sql) {
  const table = sql.match(/FROM\s+(\w+)/);
  if (!table) {
    return {};
  }
  const info = contentManifest[getCollectionName(table[1])];
  return info?.fields || {};
}
function getCollectionName(table) {
  return table.replace(/^_content_/, "");
}

const originalEmit = process.emit;
process.emit = function(...args) {
  const name = args[0];
  const data = args[1];
  if (name === `warning` && typeof data === `object` && data.name === `ExperimentalWarning` && data.message.includes(`SQLite is an experimental feature`)) {
    return false;
  }
  return originalEmit.apply(process, args);
};

let db;
let _databasePromise;
async function getDatabase(config) {
  if (db) {
    return db;
  }
  if (!_databasePromise) {
    _databasePromise = (async () => {
      const { database, localDatabase } = config;
      {
        return sqliteConnector(refineDatabaseConfig(localDatabase));
      }
    })().catch((error) => {
      _databasePromise = void 0;
      throw error;
    });
  }
  db = await _databasePromise;
  return db;
}
async function loadDatabaseAdapter(config) {
  await getDatabase(config);
  return {
    all: async (sql, params = []) => {
      return db.prepare(sql).all(...params).then((result) => (result || []).map((item) => refineContentFields(sql, item)));
    },
    first: async (sql, params = []) => {
      return db.prepare(sql).get(...params).then((item) => item ? refineContentFields(sql, item) : item);
    },
    exec: async (sql, params = []) => {
      return db.prepare(sql).run(...params);
    }
  };
}
const checkDatabaseIntegrity = /* @__PURE__ */ new Map();
const integrityCheckPromise = /* @__PURE__ */ new Map();
async function checkAndImportDatabaseIntegrity(event, collection, config) {
  if (checkDatabaseIntegrity.get(collection) !== false) {
    checkDatabaseIntegrity.set(collection, false);
    if (!integrityCheckPromise.has(collection)) {
      const _integrityCheck = _checkAndImportDatabaseIntegrity(event, collection, checksums[collection], checksumsStructure[collection], config).then((isValid) => {
        checkDatabaseIntegrity.set(collection, !isValid);
      }).catch((error) => {
        console.error("Database integrity check failed", error);
        checkDatabaseIntegrity.set(collection, true);
        integrityCheckPromise.delete(collection);
      });
      integrityCheckPromise.set(collection, _integrityCheck);
    }
  }
  if (integrityCheckPromise.has(collection)) {
    await integrityCheckPromise.get(collection);
  }
}
async function _checkAndImportDatabaseIntegrity(event, collection, integrityVersion, structureIntegrityVersion, config) {
  const db2 = await loadDatabaseAdapter(config);
  const before = await db2.first(`SELECT * FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]).catch(() => null);
  if (before?.version && !String(before.version)?.startsWith(`${config.databaseVersion}--`)) {
    await db2.exec(`DROP TABLE IF EXISTS ${tables.info}`);
    before.version = "";
  }
  const unchangedStructure = before?.structureVersion === structureIntegrityVersion;
  if (before?.version) {
    if (before.version === integrityVersion) {
      if (before.ready) {
        return true;
      }
      await waitUntilDatabaseIsReady(db2, collection);
      return true;
    }
    await db2.exec(`DELETE FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]);
    if (!unchangedStructure) {
      await db2.exec(`DROP TABLE IF EXISTS ${tables[collection]}`);
    }
  }
  const dump = await loadDatabaseDump(event, collection).then(decompressSQLDump);
  const dumpLinesHash = dump.map((row) => row.split(" -- ").pop());
  let hashesInDb = /* @__PURE__ */ new Set();
  if (unchangedStructure) {
    const hashListFromTheDump = new Set(dumpLinesHash);
    const hashesInDbRecords = await db2.all(`SELECT __hash__ FROM ${tables[collection]}`).catch(() => []);
    hashesInDb = new Set(hashesInDbRecords.map((r) => r.__hash__));
    const hashesToDelete = hashesInDb.difference(hashListFromTheDump);
    if (hashesToDelete.size) {
      await db2.exec(`DELETE FROM ${tables[collection]} WHERE __hash__ IN (${Array(hashesToDelete.size).fill("?").join(",")})`, Array.from(hashesToDelete));
    }
  }
  await dump.reduce(async (prev, sql, index) => {
    await prev;
    const hash = dumpLinesHash[index];
    const statement = sql.substring(0, sql.length - hash.length - 4);
    if (unchangedStructure) {
      if (hash === "structure") {
        return Promise.resolve();
      }
      if (hashesInDb.has(hash)) {
        return Promise.resolve();
      }
    }
    await db2.exec(statement).catch((err) => {
      const message = err.message || "Unknown error";
      console.error(`Failed to execute SQL ${sql}: ${message}`);
    });
  }, Promise.resolve());
  const after = await db2.first(`SELECT version FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]).catch(() => ({ version: "" }));
  return after?.version === integrityVersion;
}
const REQUEST_TIMEOUT = 90;
async function waitUntilDatabaseIsReady(db2, collection) {
  let iterationCount = 0;
  let interval;
  await new Promise((resolve, reject) => {
    interval = setInterval(async () => {
      const row = await db2.first(`SELECT ready FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]).catch(() => ({ ready: true }));
      if (row?.ready) {
        clearInterval(interval);
        resolve(0);
      }
      if (iterationCount++ > REQUEST_TIMEOUT) {
        clearInterval(interval);
        reject(new Error("Waiting for another database initialization timed out"));
      }
    }, 1e3);
  }).catch((e) => {
    throw e;
  }).finally(() => {
    if (interval) {
      clearInterval(interval);
    }
  });
}
async function loadDatabaseDump(event, collection) {
  return await fetchDatabase(event, collection).catch((e) => {
    console.error("Failed to fetch compressed dump", e);
    return "";
  });
}
function refineDatabaseConfig(config) {
  if (config.type === "d1") {
    return { ...config, bindingName: config.bindingName || config.binding };
  }
  if (config.type === "sqlite") {
    const _config = { ...config };
    if (config.filename === ":memory:") {
      return { name: ":memory:" };
    }
    if ("filename" in config) {
      const filename = isAbsolute(config?.filename || "") || config?.filename === ":memory:" ? config?.filename : new URL(config.filename, globalThis._importMeta_.url).pathname;
      _config.path = process.platform === "win32" && filename.startsWith("/") ? filename.slice(1) : filename;
    }
    return _config;
  }
  if (config.type === "pglite") {
    return {
      dataDir: config.dataDir,
      // Pass through any other PGlite-specific options
      ...config
    };
  }
  return config;
}

const SQL_COUNT_REGEX = /^COUNT\((DISTINCT )?([a-z_]\w+|\*)\) as count$/i;
const MAX_SQL_QUERY_LENGTH = 1e5;
function isWordChar(code) {
  return code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95;
}
function parseSelectQuery(sql) {
  if (!sql.startsWith("SELECT ")) {
    return null;
  }
  let rest = sql;
  let offset;
  let limit;
  let order;
  {
    const m = / OFFSET \d+$/.exec(rest);
    if (m) {
      offset = m[0];
      rest = rest.slice(0, -offset.length);
    }
  }
  {
    const m = / LIMIT \d+$/.exec(rest);
    if (m) {
      limit = m[0];
      rest = rest.slice(0, -limit.length);
    }
  }
  if (rest.endsWith(" ASC")) {
    order = "ASC";
    rest = rest.slice(0, -4);
  } else if (rest.endsWith(" DESC")) {
    order = "DESC";
    rest = rest.slice(0, -5);
  } else {
    return null;
  }
  const orderByMarker = " ORDER BY ";
  const orderByIdx = rest.lastIndexOf(orderByMarker);
  if (orderByIdx === -1) {
    return null;
  }
  const orderBy = rest.slice(orderByIdx + orderByMarker.length);
  if (!orderBy.length) {
    return null;
  }
  rest = rest.slice(0, orderByIdx);
  const afterSelect = rest.slice("SELECT ".length);
  const fromMarker = " FROM ";
  const fromIdx = afterSelect.indexOf(fromMarker);
  if (fromIdx === -1) {
    return null;
  }
  const select = afterSelect.slice(0, fromIdx);
  const afterFrom = afterSelect.slice(fromIdx + fromMarker.length);
  let tableEnd = 0;
  while (tableEnd < afterFrom.length && isWordChar(afterFrom.charCodeAt(tableEnd))) {
    tableEnd += 1;
  }
  if (tableEnd === 0) {
    return null;
  }
  const from = afterFrom.slice(0, tableEnd);
  const afterTable = afterFrom.slice(tableEnd);
  let where;
  if (afterTable.length) {
    if (!afterTable.startsWith(" WHERE ")) {
      return null;
    }
    where = afterTable;
  }
  return { select, from, where, orderBy, order, limit, offset };
}
function assertSafeQuery(sql, collection) {
  if (!sql) {
    throw new Error("Invalid query: Query cannot be empty");
  }
  if (sql.length > MAX_SQL_QUERY_LENGTH) {
    throw new Error("Invalid query: Query exceeds maximum allowed length");
  }
  const cleanedupQuery = cleanupQuery(sql);
  if (cleanedupQuery !== sql) {
    throw new Error("Invalid query: SQL comments are not allowed");
  }
  const parsed = parseSelectQuery(sql);
  if (!parsed) {
    throw new Error("Invalid query: Query must be a valid SELECT statement with proper syntax");
  }
  const { select, from, where, orderBy, order, limit, offset } = parsed;
  const columns = select?.trim().split(", ") || [];
  if (columns.length === 1) {
    if (columns[0] !== "*" && !columns[0]?.match(SQL_COUNT_REGEX) && !columns[0]?.match(/^"[a-z_]\w+"$/i)) {
      throw new Error(`Invalid query: Column '${columns[0]}' has invalid format. Expected *, COUNT(), or a quoted column name`);
    }
  } else if (!columns.every((column) => column.match(/^"[a-z_]\w+"$/i))) {
    throw new Error("Invalid query: Multiple columns must be properly quoted and alphanumeric");
  }
  if (from !== `_content_${collection}`) {
    const collection2 = String(from || "").replace(/^_content_/, "");
    throw new Error(`Invalid query: Collection '${collection2}' does not exist`);
  }
  if (where && !isBuilderWhere(where)) {
    throw new Error("Invalid query: WHERE clause must match the query builder syntax");
  }
  const _order = (orderBy + " " + order).split(", ");
  if (!_order.every((column) => column.match(/^("[a-zA-Z_]+"|[a-zA-Z_]+) (ASC|DESC)$/))) {
    throw new Error("Invalid query: ORDER BY clause must contain valid column names followed by ASC or DESC");
  }
  if (limit !== void 0 && !limit.match(/^ LIMIT \d+$/)) {
    throw new Error("Invalid query: LIMIT clause must be a positive number");
  }
  if (offset !== void 0 && !offset.match(/^ OFFSET \d+$/)) {
    throw new Error("Invalid query: OFFSET clause must be a positive number");
  }
  return true;
}
function isBuilderWhere(where) {
  if (!where.startsWith(" WHERE ")) {
    return false;
  }
  const end = parseWhereBody(where, " WHERE ".length);
  return end === where.length;
}
function parseWhereBody(sql, i) {
  let next = parseGroup(sql, i);
  if (next < 0) {
    return -1;
  }
  while (sql.startsWith(" AND ", next)) {
    next = parseGroup(sql, next + " AND ".length);
    if (next < 0) {
      return -1;
    }
  }
  return next;
}
function parseGroup(sql, i) {
  if (sql[i] !== "(") {
    return -1;
  }
  const end = parseExpr(sql, i + 1);
  if (end < 0 || sql[end] !== ")") {
    return -1;
  }
  return end + 1;
}
function parseExpr(sql, i) {
  let next = parseItem(sql, i);
  if (next < 0) {
    return -1;
  }
  let joiner = "";
  while (sql.startsWith(" AND ", next) || sql.startsWith(" OR ", next)) {
    const found = sql.startsWith(" AND ", next) ? " AND " : " OR ";
    if (joiner && joiner !== found) {
      return -1;
    }
    joiner = found;
    next = parseItem(sql, next + found.length);
    if (next < 0) {
      return -1;
    }
  }
  return next;
}
function parseItem(sql, i) {
  if (sql[i] === "(") {
    return parseGroup(sql, i);
  }
  return parseLeaf(sql, i);
}
const WHERE_OPS = [
  { op: "IS NOT NULL", kind: "none" },
  { op: "IS NULL", kind: "none" },
  { op: "NOT BETWEEN", kind: "between" },
  { op: "BETWEEN", kind: "between" },
  { op: "NOT LIKE", kind: "value" },
  { op: "NOT IN", kind: "list" },
  { op: "LIKE", kind: "value" },
  { op: "IN", kind: "list" },
  { op: "<>", kind: "value" },
  { op: ">=", kind: "value" },
  { op: "<=", kind: "value" },
  { op: ">", kind: "value" },
  { op: "<", kind: "value" },
  { op: "=", kind: "value" }
];
function parseLeaf(sql, i) {
  const identEnd = parseQuotedIdent(sql, i);
  if (identEnd < 0 || sql[identEnd] !== " ") {
    return -1;
  }
  const matched = WHERE_OPS.find((candidate) => sql.startsWith(candidate.op, identEnd + 1));
  if (!matched) {
    return -1;
  }
  let j = identEnd + 1 + matched.op.length;
  if (matched.kind === "none") {
    return j;
  }
  if (sql[j] !== " ") {
    return -1;
  }
  j += 1;
  if (matched.kind === "list") {
    return parseValueList(sql, j);
  }
  if (matched.kind === "between") {
    const left = parseBuilderString(sql, j);
    if (left < 0 || !sql.startsWith(" AND ", left)) {
      return -1;
    }
    return parseBuilderString(sql, left + " AND ".length);
  }
  return parseBuilderString(sql, j);
}
function parseQuotedIdent(sql, i) {
  if (sql[i] !== '"') {
    return -1;
  }
  let j = i + 1;
  if (j >= sql.length || sql[j] === '"') {
    return -1;
  }
  while (j < sql.length && sql[j] !== '"') {
    j += 1;
  }
  return sql[j] === '"' ? j + 1 : -1;
}
function parseBuilderString(sql, i) {
  if (sql[i] !== "'") {
    return -1;
  }
  let j = i + 1;
  while (j < sql.length) {
    if (sql[j] === "'") {
      if (sql[j + 1] === "'") {
        j += 2;
        continue;
      }
      return j + 1;
    }
    j += 1;
  }
  return -1;
}
function parseValueList(sql, i) {
  if (sql[i] !== "(") {
    return -1;
  }
  let j = i + 1;
  if (sql[j] === ")") {
    return j + 1;
  }
  while (j < sql.length) {
    const end = parseBuilderString(sql, j);
    if (end < 0) {
      return -1;
    }
    if (sql.startsWith(", ", end)) {
      j = end + 2;
      continue;
    }
    return sql[end] === ")" ? end + 1 : -1;
  }
  return -1;
}
function cleanupQuery(query, options = {}) {
  let fence = null;
  let result = "";
  const stripAll = Boolean(options.removeString);
  const stripSingle = Boolean(options.removeSingleQuoted) && !stripAll;
  const strippingFence = (active) => {
    if (stripAll) {
      return true;
    }
    return stripSingle && active === "'";
  };
  for (let i = 0; i < query.length; i++) {
    const char = query[i];
    const nextChar = query[i + 1];
    if (fence) {
      if (fence === "[") {
        if (char === "]") {
          if (!strippingFence(fence)) {
            result += char;
          }
          fence = null;
        } else if (!strippingFence(fence)) {
          result += char;
        }
        continue;
      }
      if (char === fence) {
        if (nextChar === fence) {
          if (!strippingFence(fence)) {
            result += char + nextChar;
          }
          i += 1;
          continue;
        }
        if (!strippingFence(fence)) {
          result += char;
        }
        fence = null;
        continue;
      }
      if (!strippingFence(fence)) {
        result += char;
      }
      continue;
    }
    if (char === "'" || char === '"' || !options.standardQuotesOnly && (char === "`" || char === "[")) {
      fence = char;
      if (!strippingFence(fence)) {
        result += char;
      }
      continue;
    }
    if (char === "-" && nextChar === "-") {
      return result;
    }
    if (char === "/" && nextChar === "*") {
      i += 2;
      while (i < query.length && !(query[i] === "*" && query[i + 1] === "/")) {
        i += 1;
      }
      i += 2;
      continue;
    }
    result += char;
  }
  return result;
}

function defineNitroPlugin(def) {
  return def;
}

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig$1();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError$1({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError$1({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

const FILE_EXT_RE = /\.[0-9a-z]+$/i;
function resolveSitePath(pathOrUrl, options) {
  let path = pathOrUrl;
  if (hasProtocol(pathOrUrl, { strict: false, acceptRelative: true })) {
    const parsed = parseURL(pathOrUrl);
    path = parsed.pathname;
  }
  const base = withLeadingSlash(options.base || "/");
  if (base !== "/" && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  let origin = withoutTrailingSlash(options.absolute ? options.siteUrl : "");
  if (base !== "/" && origin.endsWith(base)) {
    origin = origin.slice(0, origin.indexOf(base));
  }
  const baseWithOrigin = options.withBase ? withBase(base, origin || "/") : origin;
  const resolvedUrl = withBase(path, baseWithOrigin);
  return path === "/" && !options.withBase ? withTrailingSlash(resolvedUrl) : fixSlashes(options.trailingSlash, resolvedUrl);
}
const fileExtensions = [
  // Images
  "jpg",
  "jpeg",
  "png",
  "gif",
  "bmp",
  "webp",
  "svg",
  "ico",
  // Documents
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx",
  "txt",
  "md",
  "markdown",
  // Archives
  "zip",
  "rar",
  "7z",
  "tar",
  "gz",
  // Audio
  "mp3",
  "wav",
  "flac",
  "ogg",
  "opus",
  "m4a",
  "aac",
  "midi",
  "mid",
  // Video
  "mp4",
  "avi",
  "mkv",
  "mov",
  "wmv",
  "flv",
  "webm",
  // Web
  "html",
  "css",
  "js",
  "json",
  "xml",
  "tsx",
  "jsx",
  "ts",
  "vue",
  "svelte",
  "xsl",
  "rss",
  "atom",
  // Programming
  "php",
  "py",
  "rb",
  "java",
  "c",
  "cpp",
  "h",
  "go",
  // Data formats
  "csv",
  "tsv",
  "sql",
  "yaml",
  "yml",
  // Fonts
  "woff",
  "woff2",
  "ttf",
  "otf",
  "eot",
  // Executables/Binaries
  "exe",
  "msi",
  "apk",
  "ipa",
  "dmg",
  "iso",
  "bin",
  // Scripts/Config
  "bat",
  "cmd",
  "sh",
  "env",
  "htaccess",
  "conf",
  "toml",
  "ini",
  // Package formats
  "deb",
  "rpm",
  "jar",
  "war",
  // E-books
  "epub",
  "mobi",
  // Common temporary/backup files
  "log",
  "tmp",
  "bak",
  "old",
  "sav"
];
function isPathFile(path) {
  const lastSegment = path.split("/").pop();
  const ext = (lastSegment || path).match(FILE_EXT_RE)?.[0];
  return !!(ext && fileExtensions.includes(ext.replace(".", "")));
}
function fixSlashes(trailingSlash, pathOrUrl) {
  const $url = parseURL(pathOrUrl);
  if (isPathFile($url.pathname))
    return pathOrUrl;
  const fixedPath = trailingSlash ? withTrailingSlash($url.pathname) : withoutTrailingSlash($url.pathname);
  return `${$url.protocol ? `${$url.protocol}//` : ""}${$url.host || ""}${fixedPath}${$url.search || ""}${$url.hash || ""}`;
}

function createSitePathResolver(e, options = {}) {
  const siteConfig = getSiteConfig(e);
  const nitroOrigin = getNitroOrigin(e);
  const nuxtBase = useRuntimeConfig().app.baseURL || "/";
  return (path) => {
    return resolveSitePath(path, {
      ...options,
      siteUrl: options.canonical !== false || false ? siteConfig.url || nitroOrigin : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base: nuxtBase
    });
  };
}

const JSON_WRAPPER_OVERHEAD = 16;
const MAX_BODY_BYTES = MAX_SQL_QUERY_LENGTH * 6 + JSON_WRAPPER_OVERHEAD;
const _1IXLD4 = eventHandler(async (event) => {
  const contentLength = Number(getHeader(event, "content-length") || 0);
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    throw createError$1({
      statusCode: 413,
      statusMessage: "Request body too large"
    });
  }
  const { sql } = await readBody(event);
  const collection = getRouterParam(event, "collection") || event.path?.split("/")?.[2] || "";
  assertSafeQuery(sql, collection);
  const conf = useRuntimeConfig$1().content;
  if (conf.integrityCheck) {
    await checkAndImportDatabaseIntegrity(event, collection, conf);
  }
  return (await loadDatabaseAdapter(conf)).all(sql);
});

const _vR3S_I = lazyEventHandler(() => {
  const opts = useRuntimeConfig$1().ipx || {};
  const fsDir = opts?.fs?.dir ? (Array.isArray(opts.fs.dir) ? opts.fs.dir : [opts.fs.dir]).map((dir) => isAbsolute(dir) ? dir : fileURLToPath(new URL(dir, globalThis._importMeta_.url))) : void 0;
  const fsStorage = opts.fs?.dir ? ipxFSStorage({ ...opts.fs, dir: fsDir }) : void 0;
  const httpStorage = opts.http?.domains ? ipxHttpStorage({ ...opts.http }) : void 0;
  if (!fsStorage && !httpStorage) {
    throw new Error("IPX storage is not configured!");
  }
  const ipxOptions = {
    ...opts,
    storage: fsStorage || httpStorage,
    httpStorage
  };
  const baseURL = (opts.baseURL || "/_ipx").replace(/\/+$/, "");
  const ipx = createIPX(ipxOptions);
  const nodeHandler = createIPXNodeHandler(ipx, {
    parseURL(url) {
      const parsedURL = new URL(url);
      let pathname = parsedURL.pathname;
      if (baseURL && (pathname === baseURL || pathname.startsWith(`${baseURL}/`))) {
        pathname = pathname.slice(baseURL.length) || "/";
      }
      return parseIPXURL(parsedURL.origin + pathname + parsedURL.search);
    }
  });
  return fromNodeMiddleware(nodeHandler);
});

const _lazy_4hB_wE = () => Promise.resolve().then(function () { return renderer$2; });
const _lazy_r6g9yv = () => Promise.resolve().then(function () { return errorChannel; });
const _lazy_pi2HkO = () => Promise.resolve().then(function () { return debug_json$1; });
const _lazy_G9nFEk = () => Promise.resolve().then(function () { return staticFont$1; });
const _lazy_x6etaE = () => Promise.resolve().then(function () { return image$1; });
const _lazy_yeMUn5 = () => Promise.resolve().then(function () { return resolve$4; });

const handlers = [
  { route: '', handler: _LsfU6v, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_4hB_wE, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_dev__/error/**', handler: _lazy_r6g9yv, lazy: true, middleware: false, method: undefined },
  { route: '/_og/debug.json', handler: _lazy_pi2HkO, lazy: true, middleware: false, method: undefined },
  { route: '/_og-static-fonts/**', handler: _lazy_G9nFEk, lazy: true, middleware: false, method: undefined },
  { route: '/_og-static-fonts', handler: _lazy_G9nFEk, lazy: true, middleware: false, method: undefined },
  { route: '/_og/d/**', handler: _lazy_x6etaE, lazy: true, middleware: false, method: undefined },
  { route: '/_og/d', handler: _lazy_x6etaE, lazy: true, middleware: false, method: undefined },
  { route: '/_og/s/**', handler: _lazy_x6etaE, lazy: true, middleware: false, method: undefined },
  { route: '/_og/s', handler: _lazy_x6etaE, lazy: true, middleware: false, method: undefined },
  { route: '/_og/r/**', handler: _lazy_yeMUn5, lazy: true, middleware: false, method: undefined },
  { route: '/_og/r', handler: _lazy_yeMUn5, lazy: true, middleware: false, method: undefined },
  { route: '/api/_nuxt_icon/:collection', handler: _EJMPFj, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _65ulKh, lazy: false, middleware: true, method: undefined },
  { route: '/__site-config__/debug.json', handler: _UI_5XN, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/index/sql_dump.txt', handler: _Y4wZZl, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/projects/sql_dump.txt', handler: _Y4wZZl, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/blog/sql_dump.txt', handler: _Y4wZZl, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/pages/sql_dump.txt', handler: _Y4wZZl, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/speaking/sql_dump.txt', handler: _Y4wZZl, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/about/sql_dump.txt', handler: _Y4wZZl, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/info/sql_dump.txt', handler: _Y4wZZl, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: handler$1, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/index/query', handler: _1IXLD4, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/projects/query', handler: _1IXLD4, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/blog/query', handler: _1IXLD4, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/pages/query', handler: _1IXLD4, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/speaking/query', handler: _1IXLD4, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/about/query', handler: _1IXLD4, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/info/query', handler: _1IXLD4, lazy: false, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _vR3S_I, lazy: false, middleware: false, method: undefined },
  { route: '/_fonts/**', handler: _lazy_4hB_wE, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_4hB_wE, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig$1();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent$1(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent$1(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto.webcrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
let listener;
const upgradedSockets = /* @__PURE__ */ new Set();
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler$1(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler$1(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join$1(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join$1(tmpdir(), socketName);
}
async function shutdown() {
  server.closeAllConnections?.();
  for (const socket of upgradedSockets) {
    socket.destroy();
  }
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const errorChannel$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ERROR_CHANNEL_BROADCAST: ERROR_CHANNEL_BROADCAST,
  ERROR_CHANNEL_ENV: ERROR_CHANNEL_ENV,
  clearErrorReport: clearErrorReport,
  createErrorReport: createErrorReport,
  getErrorChannelPath: getErrorChannelPath,
  observeDevError: observeDevError,
  publishDevLog: publishDevLog,
  publishDevProgress: publishDevProgress,
  publishErrorReport: publishErrorReport,
  serializeErrorCause: serializeErrorCause,
  shouldForwardReports: shouldForwardReports,
  useErrorChannel: useErrorChannel
}, Symbol.toStringTag, { value: 'Module' }));

// src/runtime/server/renderer/error-template.ts
const _messages = {
	"appName": "Nuxt",
	"status": 500,
	"statusText": "Internal server error",
	"description": "This page is temporarily unavailable.",
	"refresh": "Refresh this page"
};
const template = (messages) => {
	messages = {
		..._messages,
		...messages
	};
	return "<!DOCTYPE html><html lang=\"en\"><head><title>" + escapeHtml(messages.status) + " - " + escapeHtml(messages.statusText) + " | " + escapeHtml(messages.appName) + "</title><meta charset=\"utf-8\"><meta content=\"width=device-width,initial-scale=1,minimum-scale=1\" name=\"viewport\"><style>*,:after,:before{box-sizing:border-box;border-style:solid;border-width:0;border-color:var(--un-default-border-color,#e5e7eb);--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 #0000;--un-ring-shadow:0 0 #0000;--un-shadow-inset: ;--un-shadow:0 0 #0000;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:#93c5fd80;--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }:after,:before{--un-content:\"\"}html{-webkit-text-size-adjust:100%;tab-size:4;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}body{line-height:inherit;margin:0}h1,h2{font-size:inherit;font-weight:inherit}h1,h2,p{margin:0}.grid{display:grid}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-2{padding-left:.5rem;padding-right:.5rem}.text-center{text-align:center}.text-\\[56px\\]{font-size:56px}.text-2xl{font-size:1.5rem;line-height:2rem}.text-neutral-500{--un-text-opacity:1;color:rgb(115 115 115/var(--un-text-opacity))}.text-neutral-950{--un-text-opacity:1;color:rgb(10 10 10/var(--un-text-opacity))}.font-medium{font-weight:500}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-wide{letter-spacing:.025em}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media(prefers-color-scheme:dark){.dark\\:bg-neutral-950{--un-bg-opacity:1;background-color:rgb(10 10 10/var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media(width>=640px){.sm\\:text-\\[72px\\]{font-size:72px}.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}</style></head><body class=\"antialiased bg-white dark:bg-neutral-950 dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-neutral-950 tracking-wide\"><div class=\"max-w-520px text-center\"><h1 class=\"font-medium leading-none mb-4 sm:text-[72px] tabular-nums text-[56px]\">" + escapeHtml(messages.status) + "</h1><h2 class=\"font-semibold mb-2 sm:text-3xl text-2xl\">" + escapeHtml(messages.statusText) + "</h2><p class=\"mb-4 px-2 text-md text-neutral-500\">" + escapeHtml(messages.description) + "</p></div></body></html>";
};

const errorTemplate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template
}, Symbol.toStringTag, { value: 'Module' }));

const entry = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: viteNodeEntry_mjs
}, Symbol.toStringTag, { value: 'Module' }));

const manifest = () => viteNodeFetch.getManifest();

const manifest$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: manifest
}, Symbol.toStringTag, { value: 'Module' }));

const styles = {};
const inlinedCSS = {};

const styles$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: styles,
  inlinedCSS: inlinedCSS
}, Symbol.toStringTag, { value: 'Module' }));

// src/runtime/server/renderer/payload.ts
function renderPayloadResponse(ssrContext, event) {
	return {
		body: encodeForwardSlashes(stringify(splitPayload(ssrContext).payload, ssrContext["~payloadReducers"])) ,
		statusCode: event.res.status,
		statusMessage: event.res.statusText,
		headers: {
			"content-type": "application/json;charset=utf-8" ,
			"x-powered-by": "Nuxt"
		}
	};
}
function renderPayloadJsonScript(opts) {
	const contents = opts.data ? encodeForwardSlashes(stringify(opts.data, opts.ssrContext["~payloadReducers"])) : "";
	warnOnLargePayload(opts.ssrContext, opts.data, contents.length);
	const payload = {
		"type": "application/json",
		"innerHTML": contents,
		"data-nuxt-data": appId,
		"data-ssr": !(opts.ssrContext.noSSR)
	};
	payload.id = "__NUXT_DATA__";
	if (opts.src) payload["data-src"] = opts.src;
	const config = uneval(opts.ssrContext.config);
	return [payload, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}` }];
}
/**
* Encode forward slashes as unicode escape sequences to prevent
* Google from treating them as internal links and trying to crawl them.
* @see https://github.com/nuxt/nuxt/issues/24175
*/
function encodeForwardSlashes(str) {
	return str.replaceAll("/", "\\u002F");
}
const PAYLOAD_SIZE_WARNING_BYTES = 102400;
const warnedPayloadURLs = /* @__PURE__ */ new Set();
function formatPayloadSize(bytes) {
	return `${(bytes / 1024).toFixed(1)} kB`;
}
function getPayloadKeySizes(data, reducers) {
	const sizes = [];
	for (const key in data) try {
		sizes.push([key, stringify(data[key], reducers).length]);
	} catch {}
	return sizes.sort((a, b) => b[1] - a[1]);
}
function warnOnLargePayload(ssrContext, data, size) {
	if (size <= PAYLOAD_SIZE_WARNING_BYTES || warnedPayloadURLs.has(ssrContext.url)) return;
	warnedPayloadURLs.add(ssrContext.url);
	const keys = getPayloadKeySizes(data?.data, ssrContext["~payloadReducers"]).slice(0, 5).map(([key, keySize]) => `\`${key}\` (${formatPayloadSize(keySize)})`).join("\n  - ");
	rendererDiagnostics.NUXT_E8006({
		path: ssrContext.url,
		size: formatPayloadSize(size),
		keys: keys || void 0
	});
}
function splitPayload(ssrContext) {
	const { data, prerenderedAt, prefetchLinks, ...initial } = ssrContext.payload;
	const payload = {
		data,
		prerenderedAt
	};
	if (prefetchLinks?.length) payload.prefetchLinks = prefetchLinks;
	return {
		initial: {
			...initial,
			prerenderedAt
		},
		payload
	};
}

// src/runtime/server/renderer/index.ts
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const PAYLOAD_FILENAME = "_payload.json" ;
/**
* Create a Nuxt SSR renderer, returning a web-standard handler for the requests a Nuxt
* app serves from its pages.
*
* Everything the renderer reads belongs to the renderer it was created for, so a bundle
* may create as many as it needs. Pass an instance from `createRendererInstance()` to
* render against the artifacts already loaded for another renderer.
*/
function createNuxtRenderer(optionsOrInstance) {
	const instance = "getRenderer" in optionsOrInstance ? optionsOrInstance : createRendererInstance(optionsOrInstance);
	return { fetch: (event) => fetch$1(instance, event) };
}
function fetch$1(instance, event) {
	const runtime = instance.options;
	if (runtime.renderIsland && event.url.pathname.startsWith("/__nuxt_island/")) return Promise.resolve(runtime.renderIsland(event));
	const isErrorRoute = event.url.pathname.startsWith("/__nuxt_error");
	if (isErrorRoute && !getRequestState(event)?.["~rendering-error"]) {
		return Promise.reject(runtime.createError({
			status: 404,
			statusText: "Page Not Found: /__nuxt_error"
		}));
	}
	const ssrError = isErrorRoute ? getQuery(event.url.href) : null;
	const render = () => renderRoute(instance, event, ssrError).then((response) => returnRenderResponse(runtime, event, response));
	const rendering = render();
	return rendering;
}
async function renderRoute(instance, event, ssrError) {
	const runtime = instance.options;
	const hooks = runtime.hooks();
	const hookEvent = appEvent(event);
	runtime.prerender?.payloadCache;
	const ssrContext = createSSRContext(runtime, event);
	ssrContext.head.push(appHead);
	if (ssrError) {
		const status = ssrError.status || ssrError.statusCode;
		if (status) ssrError.status = ssrError.statusCode = Number.parseInt(status);
		if (typeof ssrError.data === "string") try {
			ssrError.data = destr(ssrError.data);
		} catch {}
		if (typeof ssrError.cause === "string") ssrError.cause = destr(ssrError.cause);
		setSSRError(ssrContext, ssrError);
	}
	const routeOptions = runtime.getRouteRules(event);
	const NO_SCRIPTS = !!routeOptions.noScripts;
	if (routeOptions.ssr === false && true) ssrContext.noSSR = true;
	const _PAYLOAD_EXTRACTION = !ssrContext.noSSR && !ssrError && !!((routeOptions.isr || routeOptions.cache));
	const _PAYLOAD_INLINE = !_PAYLOAD_EXTRACTION || NUXT_PAYLOAD_INLINE;
	const isRenderingPayload = (_PAYLOAD_EXTRACTION || routeOptions.prerender) && PAYLOAD_URL_RE.test(ssrContext.url);
	if (isRenderingPayload) {
		ssrContext.url = payloadRequestToRoute(ssrContext.url, PAYLOAD_FILENAME);
		event.url = withRequestPath(event.url, ssrContext.url);
		getPayloadCacheKey(ssrContext.url);
	}
	const payloadURL = _PAYLOAD_EXTRACTION ? buildPayloadURL(ssrContext) : void 0;
	const renderer = await instance.getRenderer(ssrContext);
	const canStream = NUXT_SSR_STREAMING;
	const renderRouteContext = {
		canStream,
		prefersStream: false
	};
	await hooks.callHook("render:route", renderRouteContext, { event: hookEvent });
	const _rendered = await (renderer.renderToString(ssrContext)).catch(async (error) => {
		if ((ssrContext["~renderResponse"] || ssrContext._renderResponse) && error.message === "skipping render") return {};
		const _err = !ssrError && ssrContext.payload?.error || error;
		await ssrContext.nuxt?.hooks.callHook("app:error", _err);
		throw _err;
	});
	const inlinedStyles = [];
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult: _rendered
	});
	if (ssrContext["~renderResponse"] || ssrContext._renderResponse) return ssrContext["~renderResponse"] || ssrContext._renderResponse;
	if (ssrContext.payload?.error && !ssrError) throw ssrContext.payload.error;
	if (isRenderingPayload) {
		const response = renderPayloadResponse(ssrContext, event);
		return response;
	}
	if (!ssrError && !ssrContext.error) runtime.onRenderSuccess?.(event);
	const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
	pushNoScriptsHints(ssrContext, NO_SCRIPTS);
	if (_PAYLOAD_EXTRACTION && !_PAYLOAD_INLINE && !NO_SCRIPTS) ssrContext.head.push({ link: [{
		rel: "preload",
		as: "fetch",
		crossorigin: "anonymous",
		href: payloadURL
	} ] });
	if (inlinedStyles.length) ssrContext.head.push({ style: inlinedStyles });
	const link = [];
	const inlinedHrefs = [];
	for (const resource of Object.values(styles)) {
		if ("inline" in getQuery(resource.file)) continue;
		link.push({
			rel: "stylesheet",
			href: renderer.rendererContext.buildAssetsURL(resource.file),
			crossorigin: ""
		});
	}
	if (link.length) ssrContext.head.push({ link });
	const dependencyOptions = {
		exclude: ssrContext["~lazyHydratedModules"]?.size ? ssrContext["~lazyHydratedModules"] : void 0,
		scripts: !NO_SCRIPTS
	};
	const excludeHrefs = new Set(link.map((l) => l.href));
	for (const href of inlinedHrefs) excludeHrefs.add(href);
	for (const id of ssrContext["~neverHydratedModules"] ?? []) {
		const file = renderer.rendererContext.manifest?.[id]?.file;
		if (file) excludeHrefs.add(renderer.rendererContext.buildAssetsURL(file));
	}
	const hints = [];
	for (const l of getPreloadLinks(ssrContext, renderer.rendererContext, dependencyOptions)) if (!excludeHrefs.has(l.href)) hints.push(l);
	for (const l of getPrefetchLinks(ssrContext, renderer.rendererContext, dependencyOptions)) if (!excludeHrefs.has(l.href)) hints.push(l);
	if (hints.length) ssrContext.head.push({ link: hints });
	if (!NO_SCRIPTS) ssrContext.head.push({ script: _PAYLOAD_INLINE ? renderPayloadJsonScript({
		ssrContext,
		data: stripInlineOnlyPayloadFields(ssrContext.payload)
	})  : renderPayloadJsonScript({
		ssrContext,
		data: splitPayload(ssrContext).initial,
		src: payloadURL
	})  }, {
		tagPosition: "bodyClose",
		tagPriority: "high"
	});
	if (!routeOptions.noScripts) {
		const tagPosition = "head";
		ssrContext.head.push({ script: Object.values(scripts).map((resource) => ({
			type: resource.module ? "module" : null,
			src: renderer.rendererContext.buildAssetsURL(resource.file),
			defer: resource.module ? null : true,
			tagPosition,
			crossorigin: ""
		})) });
	}
	const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = renderSSRHead(ssrContext.head, renderSSRHeadOptions);
	const htmlContext = {
		htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
		head: normalizeChunks([headTags]),
		bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
		bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
		body: [replaceIslandTeleports(ssrContext, _rendered.html) , APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG],
		bodyAppend: [bodyTags]
	};
	await hooks.callHook("render:html", htmlContext, { event: hookEvent });
	return {
		body: renderHTMLDocument(htmlContext),
		statusCode: event.res.status,
		statusMessage: event.res.statusText,
		headers: {
			"content-type": "text/html;charset=utf-8",
			"x-powered-by": "Nuxt"
		}
	};
}
function getPayloadCacheKey(url) {
	const { pathname, search } = new URL(url, "http://localhost");
	return (pathname === "/" ? "/" : pathname.replace(/\/$/, "")) + (search ? encodeURIComponent(search) : "") + ".json";
}
/**
* Routes served without scripts navigate with full-page loads. This emits the
* declarative navigation hints that speed those up, on both the pages served
* without scripts (a blanket rule over same-origin links) and scripted pages
* that may link to them (rules scoped to the `noScripts` route patterns):
*
* - speculation rules, so supporting browsers prefetch and prerender the
*   target ahead of the navigation;
* - when view transitions are enabled, an opt-in to same-origin cross-document
*   view transitions, animating the navigation without a client runtime (the
*   client-side `startViewTransition` plugin is not shipped).
*
* Both tags are declarative and execute no JavaScript.
*/
function pushNoScriptsHints(ssrContext, noScripts) {
	if (noScripts) pushSpeculationRulesScript(ssrContext, NUXT_PAGE_PATTERNS.length ? NUXT_PAGE_PATTERNS : ["/*"]);
	else if (NUXT_NO_SCRIPTS_PATTERNS.length) pushSpeculationRulesScript(ssrContext, NUXT_NO_SCRIPTS_PATTERNS);
	else return;
}
function pushSpeculationRulesScript(ssrContext, patterns) {
	const rules = patterns.map((href_matches) => ({
		where: { href_matches },
		eagerness: "moderate"
	}));
	ssrContext.head.push({ script: [{
		tagPosition: "head",
		type: "speculationrules",
		innerHTML: {
			prefetch: rules,
			prerender: rules
		}
	}] });
}
function buildPayloadURL(ssrContext) {
	const baseURL = ssrContext.runtimeConfig.app.cdnURL || ssrContext.runtimeConfig.app.baseURL;
	return routeToPayloadURL(baseURL, ssrContext.url, ssrContext.runtimeConfig.app.buildId, PAYLOAD_FILENAME);
}
function normalizeChunks(chunks) {
	const result = [];
	for (const _chunk of chunks) {
		const chunk = _chunk?.trim();
		if (chunk) result.push(chunk);
	}
	return result;
}
function joinTags(tags) {
	return tags.join("");
}
function joinAttrs(chunks) {
	if (chunks.length === 0) return "";
	return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
	return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}
function stripInlineOnlyPayloadFields(payload) {
	if (!payload.prefetchLinks) return payload;
	const { prefetchLinks: _, ...rest } = payload;
	return rest;
}

const renderer$1 = createNuxtRenderer(rendererInstance);
const handler = defineRenderHandler(async (event) => {
	const response = await renderer$1.fetch(toRequestEvent(event));
	for (const [name, value] of response.headers) {
		if (name === "set-cookie") continue;
		setResponseHeader(event, name, value);
	}
	return {
		body: response.body,
		statusCode: response.status,
		statusMessage: response.statusText || void 0,
		headers: createResponseHeaderRecord(event.node.res)
	};
});

const renderer$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: handler
}, Symbol.toStringTag, { value: 'Module' }));

// src/runtime/server/dev/peer.ts
/**
* Peer checks shared by the dev-only endpoints that disclose local state.
*
* @module nuxt/internal/dev/peer
*/
/**
* Whether the connected peer is a loopback address.
*
* This inspects the TCP peer address rather than request metadata, so a
* non-browser client cannot make itself look local by choosing its `Host`,
* `Origin`, `Referer` or `Sec-Fetch-*` headers. `x-forwarded-for` is ignored on
* purpose: only the address of the socket we are actually talking to counts.
*/
function isLoopbackAddress(address) {
	if (!address) return false;
	let normalized = address.trim().toLowerCase().replace(/^\[/, "").replace(/\]$/, "");
	const zoneIndex = normalized.indexOf("%");
	if (zoneIndex !== -1) normalized = normalized.slice(0, zoneIndex);
	if (normalized.startsWith("::ffff:")) normalized = normalized.slice(7);
	if (normalized === "::1") return true;
	return /^127\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(normalized);
}

// src/runtime/handlers/error-channel.ts
/**
* Serves the live error channel: the SSE stream, report lookups and "open in editor".
*
* Trust follows the socket, since a request's origin headers are forgeable over a direct
* connection.
*/
var error_channel_default = defineEventHandler$1(async (event) => {
	const channel = await useErrorChannel();
	const trusted = isLoopbackAddress(getRequestIP(event));
	return await channel.fetchHandler(toWebRequest(event), { trusted }) ?? new Response("Not Found", { status: 404 });
});

const errorChannel = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: error_channel_default
}, Symbol.toStringTag, { value: 'Module' }));

const compatibility = {"browser":false,"satori":false,"takumi":"node-dev","resvg":"node-dev","sharp":"node"};

const fontRequirements = {"weights":[400,500,600,700,800,900],"styles":["normal"],"families":[],"hasDynamicBindings":false};
const _mapPath = "/Users/satej/Documents/neural-compressor-lab/frontend/.nuxt/cache/og-image/component-font-map.json";
function getComponentFontMap() {
  try { return JSON.parse(readFileSync(_mapPath, 'utf-8')) }
  catch { return {} }
}

const resolvedFonts = [{"family":"Inter","src":"/_og-static-fonts/inter-400-latin.ttf","weight":400,"style":"normal","satoriSrc":"/_og-static-fonts/inter-400-latin.ttf","absolutePath":"/Users/satej/Documents/neural-compressor-lab/frontend/node_modules/nuxt-og-image/dist/runtime/public/_og-fonts/inter-400-latin.ttf","fallback":true},{"family":"Inter","src":"/_og-static-fonts/inter-700-latin.ttf","weight":700,"style":"normal","satoriSrc":"/_og-static-fonts/inter-700-latin.ttf","absolutePath":"/Users/satej/Documents/neural-compressor-lab/frontend/node_modules/nuxt-og-image/dist/runtime/public/_og-fonts/inter-700-latin.ttf","fallback":true}];

const availableFonts = [];

function getOgImageOrigin(event) {
  return getNitroOrigin({ context: event.context });
}

const debug_json = defineEventHandler(async (e) => {
  e.res.headers.set("Content-Type", "application/json");
  const runtimeConfig = useOgImageRuntimeConfig(e);
  return {
    siteConfigUrl: getSiteConfig(e).url,
    origin: getOgImageOrigin(e),
    componentNames,
    runtimeConfig,
    compatibility,
    resolvedFonts,
    availableFonts,
    fontRequirements
  };
});

const debug_json$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: debug_json
}, Symbol.toStringTag, { value: 'Module' }));

const rootDir = "/Users/satej/Documents/neural-compressor-lab/frontend";
const resolvedFontPaths = {};
const staticFontCacheDir = "/Users/satej/Documents/neural-compressor-lab/frontend/.nuxt/cache/og-image/static-fonts";

const staticFont = defineEventHandler(async (event) => {
  const path = withoutBase(getRequestURL(event).pathname, useRuntimeConfig().app.baseURL);
  const font = [...resolvedFonts, ...availableFonts].find((face) => face.src === path || face.satoriSrc === path);
  if (!font)
    throw createError({ status: 404, statusText: "Not Found" });
  const file = path === font.src && font.absolutePath ? font.absolutePath : join(staticFontCacheDir, path.slice("/_og-static-fonts/".length));
  const data = await readFile(file);
  return new Response(new Uint8Array(data), {
    headers: {
      "Content-Type": "application/octet-stream",
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*"
    }
  });
});

const staticFont$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: staticFont
}, Symbol.toStringTag, { value: 'Module' }));

const logger = createModuleLogger("@nuxtjs/og-image");

function withTimeout(promise, ms, label) {
  let timer;
  return Promise.race([
    Promise.resolve(promise),
    new Promise((_, reject) => {
      timer = setTimeout(
        () => reject(new Error(`${label} timed out after ${ms}ms`)),
        ms
      );
    })
  ]).finally(() => clearTimeout(timer));
}

const htmlPayloadCache = createStorage({
  // short cache time so we don't need many entries at runtime
  driver: lruCacheDriver({ max: 50 })
});
const emojiCache = createStorage({
  driver: lruCacheDriver({ max: 1e3 })
});
class BoundedMap {
  constructor(max) {
    this.max = max;
  }
  map = /* @__PURE__ */ new Map();
  get(key) {
    return this.map.get(key);
  }
  set(key, value) {
    if (this.map.size >= this.max)
      this.map.delete(this.map.keys().next().value);
    this.map.set(key, value);
  }
}
const fontCache = new BoundedMap(100);
const fontArrayCache = new BoundedMap(20);

function withoutQuery(path) {
  const queryIndex = path.indexOf("?");
  return queryIndex === -1 ? path : path.slice(0, queryIndex);
}
function createNitroRouteRuleMatcher$1(runtimeConfig) {
  const { nitro, app } = runtimeConfig;
  const baseURL = app?.baseURL || "/";
  const _routeRulesMatcher = toRouteMatcher(
    createRouter({
      routes: Object.fromEntries(
        Object.entries(nitro?.routeRules || {}).map(([path, rules]) => [withoutTrailingSlash(path), rules])
      )
    })
  );
  return (pathOrUrl) => {
    const path = pathOrUrl[0] === "/" ? pathOrUrl : parseURL(pathOrUrl, baseURL).pathname;
    return defu$1({}, ..._routeRulesMatcher.matchAll(
      withoutBase(withoutTrailingSlash(withoutQuery(path)), baseURL)
    ).reverse());
  };
}

/**
* Compute the `hashId` segment embedded in an island URL (`/__nuxt_island/<Name>_<hashId>.json`).
*
* The hash binds the response to the requested `(name, props, context, source)` tuple, so the
* server can reject requests whose URL hash does not match the supplied query/body. Use this
* from island clients if you need to ensure a hash stays in step with Nuxt's implementation.
*
* `props` may be passed either as the raw props object or as the JSON string that will be sent
* over the wire; the two produce the same hash when the round-trip is identity.
*
* @since 4.5.0
*/
function getIslandHash(input) {
	const props = typeof input.props === "string" ? parseSerializedProps(input.props) : input.props ?? {};
	return hash$1([
		input.name,
		props,
		input.context ?? {},
		input.source
	]).replace(/[-_]/g, "");
}
function parseSerializedProps(serializedProps) {
	try {
		return JSON.parse(serializedProps);
	} catch {
		return serializedProps;
	}
}

function fetchIsland(e, component, props, timeout) {
  const hashId = getIslandHash({ name: component, props });
  const signal = timeout ? AbortSignal.timeout(timeout) : void 0;
  return fetchWithEvent(e, `/__nuxt_island/${component}_${hashId}.json`, {
    params: {
      props: JSON.stringify(props)
    },
    timeout,
    signal
  });
}
function createNitroRouteRuleMatcher() {
  return createNitroRouteRuleMatcher$1(useRuntimeConfig$1());
}

function getEventQuery(event) {
  return getQuery(event.path);
}

function guardedLookup(isBlocked) {
  return (hostname, options, callback) => {
    lookup(hostname, { ...options, all: true }, (err, addresses) => {
      if (err)
        return callback(err, "", 0);
      const blocked = addresses.find((a) => isBlocked(a.address));
      if (blocked)
        return callback(new Error(`[Nuxt OG Image] ${hostname} resolves to blocked address ${blocked.address}.`), "", 0);
      if (options.all)
        return callback(null, addresses);
      callback(null, addresses[0].address, addresses[0].family);
    });
  };
}
function guardedFetch(url, { headers, signal, isBlockedAddress }) {
  const request$2 = url.startsWith("https:") ? request : request$1;
  return new Promise((resolve, reject) => {
    const req = request$2(url, {
      // Match the defaults that `fetch` sent before this transport existed.
      headers: { "accept": "*/*", "user-agent": "node", ...headers },
      signal,
      lookup: guardedLookup(isBlockedAddress ?? (() => false)),
      // A fresh socket per hop: never reuse a connection nobody checked.
      agent: false
    }, (res) => {
      const status = res.statusCode ?? 0;
      const responseHeaders = new Headers();
      for (const [name, value] of Object.entries(res.headers)) {
        for (const v of [value ?? []].flat())
          responseHeaders.append(name, v);
      }
      const body = status === 204 || status === 304 ? null : Readable.toWeb(res);
      resolve(new Response(body, { status, headers: responseHeaders }));
    });
    req.on("error", reject);
    req.end();
  });
}

const RE_IPV6_BRACKETS = /^\[|\]$/g;
const RE_TRAILING_DOTS = /\.+$/;
const RE_DIGIT_ONLY = /^\d+$/;
const RE_INT_IP = /^(?:0x[\da-f]+|\d+)$/i;
const RE_HEX_GROUP = /^[0-9a-f]{1,4}$/i;
const RE_IPV6_CHARS = /^[0-9a-f:.]+$/i;
const RE_TRAILING_V4 = /(\d+\.\d+\.\d+\.\d+)$/;
const MAX_REDIRECTS = 5;
function isPrivateIPv4(a, b) {
  if (a === 127)
    return true;
  if (a === 10)
    return true;
  if (a === 172 && b >= 16 && b <= 31)
    return true;
  if (a === 192 && b === 168)
    return true;
  if (a === 169 && b === 254)
    return true;
  if (a === 0)
    return true;
  if (a === 100 && b >= 64 && b <= 127)
    return true;
  if (a === 198 && (b === 18 || b === 19))
    return true;
  if (a >= 224)
    return true;
  return false;
}
function expandIPv6(addr) {
  const noZone = addr.split("%")[0];
  if (!noZone || !RE_IPV6_CHARS.test(noZone))
    return null;
  let work = noZone;
  const v4Match = work.match(RE_TRAILING_V4);
  if (v4Match) {
    const octets = v4Match[1].split(".").map(Number);
    if (octets.some((o) => !Number.isFinite(o) || o < 0 || o > 255))
      return null;
    const hi = (octets[0] << 8 | octets[1]).toString(16);
    const lo = (octets[2] << 8 | octets[3]).toString(16);
    work = `${work.slice(0, -v4Match[1].length) + hi}:${lo}`;
  }
  const parts = work.split("::");
  if (parts.length > 2)
    return null;
  const head = parts[0] ? parts[0].split(":") : [];
  const tail = parts[1] !== void 0 && parts[1] ? parts[1].split(":") : [];
  if (parts.length === 1) {
    if (head.length !== 8)
      return null;
  } else if (head.length + tail.length > 7) {
    return null;
  }
  const fillCount = parts.length === 2 ? 8 - head.length - tail.length : 0;
  const allGroups = [...head, ...Array.from({ length: fillCount }).fill("0"), ...tail];
  const result = [];
  for (const g of allGroups) {
    if (!RE_HEX_GROUP.test(g))
      return null;
    result.push(Number.parseInt(g, 16));
  }
  return result;
}
function isPrivateIPv6(groups) {
  const [g0, g1, g2, g3, g4, g5, g6, g7] = groups;
  if (g0 === 0 && g1 === 0 && g2 === 0 && g3 === 0 && g4 === 0 && g5 === 0 && g6 === 0 && g7 === 1)
    return true;
  if (g0 === 0 && g1 === 0 && g2 === 0 && g3 === 0 && g4 === 0 && g5 === 0 && g6 === 0 && g7 === 0)
    return true;
  if (g0 === 0 && g1 === 0 && g2 === 0 && g3 === 0 && g4 === 0 && g5 === 65535) {
    const a = g6 >> 8 & 255;
    const b = g6 & 255;
    return isPrivateIPv4(a, b);
  }
  if (g0 === 0 && g1 === 0 && g2 === 0 && g3 === 0 && g4 === 0 && g5 === 0) {
    const a = g6 >> 8 & 255;
    const b = g6 & 255;
    return isPrivateIPv4(a, b);
  }
  if (g0 === 0 && g1 === 0 && g2 === 0 && g3 === 0 && g4 === 65535 && g5 === 0) {
    const a = g6 >> 8 & 255;
    const b = g6 & 255;
    return isPrivateIPv4(a, b);
  }
  if (g0 === 100 && g1 === 65435 && g2 === 0 && g3 === 0 && g4 === 0 && g5 === 0) {
    const a = g6 >> 8 & 255;
    const b = g6 & 255;
    return isPrivateIPv4(a, b);
  }
  if (g0 === 8194) {
    const a = g1 >> 8 & 255;
    const b = g1 & 255;
    return isPrivateIPv4(a, b);
  }
  if (g0 === 100 && g1 === 65435 && g2 === 1)
    return true;
  if (g0 === 256 && g1 === 0 && g2 === 0 && g3 === 0)
    return true;
  if (g0 === 8193 && g1 === 0)
    return true;
  if ((g0 & 65024) === 64512)
    return true;
  if ((g0 & 65472) === 65152)
    return true;
  if ((g0 & 65472) === 65216)
    return true;
  if (g0 === 8193 && g1 === 3512)
    return true;
  if ((g0 & 65520) === 16368)
    return true;
  if (g0 === 24320)
    return true;
  if ((g0 & 65280) === 65280)
    return true;
  return false;
}
function isBlockedUrl(url) {
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return true;
  }
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:")
    return true;
  const hostname = parsed.hostname.toLowerCase();
  const bare = hostname.replace(RE_IPV6_BRACKETS, "").replace(RE_TRAILING_DOTS, "");
  if (bare === "localhost" || bare.endsWith(".localhost"))
    return true;
  const dottedParts = bare.split(".");
  if (dottedParts.length === 4 && dottedParts.every((p) => RE_DIGIT_ONLY.test(p))) {
    const octets = dottedParts.map(Number);
    if (octets.some((o) => o > 255))
      return true;
    return isPrivateIPv4(octets[0], octets[1]);
  }
  if (RE_INT_IP.test(bare)) {
    const num = Number(bare);
    if (Number.isFinite(num) && num >= 0 && num <= 4294967295)
      return isPrivateIPv4(num >>> 24 & 255, num >>> 16 & 255);
  }
  if (bare.includes(":")) {
    const groups = expandIPv6(bare);
    if (groups)
      return isPrivateIPv6(groups);
    return true;
  }
  return false;
}
function isBlockedAddress(address) {
  return isBlockedUrl(`http://${address.includes(":") ? `[${address}]` : address}/`);
}
const PROBE_ORIGIN = "http://og-image.invalid";
const RE_PERCENT_ESCAPE = /%[\da-f]{2}/i;
const RE_ENCODED_SEPARATOR = /%(?:2f|5c)/i;
function hasReservedPathChar(input) {
  for (let i = 0; i < input.length; i++) {
    const code = input.charCodeAt(i);
    if (code <= 31 || code === 127 || code === 92 || code === 63 || code === 35)
      return true;
  }
  return false;
}
function err(reason) {
  return { _tag: "Err", reason };
}
function parseSameOriginPath(input) {
  if (typeof input !== "string" || input[0] !== "/" || input[1] === "/")
    return err("The path must start with a single /.");
  if (RE_ENCODED_SEPARATOR.test(input))
    return err("The path must not encode a / or \\.");
  let decoded;
  try {
    decoded = decodeURIComponent(input);
  } catch {
    return err("The path has an invalid percent-encoding.");
  }
  if (RE_PERCENT_ESCAPE.test(decoded))
    return err("The path must be percent-encoded once.");
  if (hasReservedPathChar(decoded))
    return err("The path must not contain ?, #, \\ or control characters.");
  if (decoded.split("/").some((segment) => segment === "." || segment === ".."))
    return err("The path must not contain . or .. segments.");
  let resolved;
  try {
    resolved = new URL(input, PROBE_ORIGIN);
  } catch {
    return err("The path is not a valid URL path.");
  }
  if (resolved.origin !== PROBE_ORIGIN || resolved.search || resolved.hash)
    return err("The path must stay on the same origin.");
  return { _tag: "Ok", value: resolved.pathname };
}
function resolveSameOriginUrl(path, origin) {
  if (!origin)
    return null;
  let base;
  try {
    base = new URL(origin).origin;
  } catch {
    return null;
  }
  let target;
  try {
    target = new URL(path, base);
  } catch {
    return null;
  }
  return target.origin === base ? target.href : null;
}
async function fetchWithRedirectValidation(initialUrl, opts) {
  const controller = new AbortController();
  const externalAbort = opts.signal;
  const onExternalAbort = () => controller.abort(externalAbort?.reason);
  if (externalAbort) {
    if (externalAbort.aborted)
      controller.abort(externalAbort.reason);
    else
      externalAbort.addEventListener("abort", onExternalAbort, { once: true });
  }
  const timer = setTimeout(() => controller.abort(new Error("timeout")), opts.timeout);
  try {
    let url = initialUrl;
    for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
      let isTrusted = false;
      if (opts.trustedHost) {
        try {
          isTrusted = new URL(url).host === opts.trustedHost;
        } catch {
          return null;
        }
      }
      if (!isTrusted && isBlockedUrl(url))
        return null;
      const res = await guardedFetch(url, {
        signal: controller.signal,
        headers: opts.headers,
        isBlockedAddress: isTrusted ? void 0 : isBlockedAddress
      });
      if (res.status >= 300 && res.status < 400) {
        await res.body?.cancel();
        const loc = res.headers.get("location");
        if (!loc)
          return null;
        url = new URL(loc, url).toString();
        continue;
      }
      if (!res.ok) {
        await res.body?.cancel();
        return null;
      }
      return await res.arrayBuffer();
    }
    return null;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
    if (externalAbort)
      externalAbort.removeEventListener("abort", onExternalAbort);
  }
}

function toStorageKey(namespace, identity) {
  return `${namespace}:${digestCanonical(identity)}`;
}

const RE_TOKEN = /[^\w-]/g;
function sanitizeName(name) {
  return name.replace(RE_TOKEN, "_");
}
function createTimings() {
  const totals = /* @__PURE__ */ new Map();
  const spans = /* @__PURE__ */ new Map();
  const record = (name, ms) => {
    const key = sanitizeName(name);
    const existing = totals.get(key);
    if (existing) {
      existing.dur += ms;
      existing.count += 1;
    } else {
      totals.set(key, { dur: ms, count: 1 });
    }
  };
  const start = (name) => {
    const key = sanitizeName(name);
    const t0 = performance.now();
    const span = spans.get(key) ?? { open: 0, windowStart: 0, wall: 0 };
    if (span.open === 0)
      span.windowStart = t0;
    span.open += 1;
    spans.set(key, span);
    let ended = false;
    return () => {
      if (ended)
        return 0;
      ended = true;
      const t1 = performance.now();
      const ms = t1 - t0;
      span.open -= 1;
      if (span.open === 0) {
        span.wall += t1 - span.windowStart;
        const existing = totals.get(key);
        if (existing) {
          existing.dur = span.wall;
          existing.count += 1;
        } else {
          totals.set(key, { dur: span.wall, count: 1 });
        }
      } else {
        const existing = totals.get(key);
        if (existing)
          existing.count += 1;
        else
          totals.set(key, { dur: 0, count: 1 });
      }
      return ms;
    };
  };
  const measure = async (name, fn) => {
    const end = start(name);
    try {
      return await fn();
    } finally {
      end();
    }
  };
  const entries = () => Array.from(totals.entries()).map(([name, v]) => ({
    name,
    dur: Math.round(v.dur * 1e3) / 1e3,
    count: v.count > 1 ? v.count : void 0
  }));
  const header = () => entries().map(({ name, dur, count }) => {
    const desc = count ? `;desc="n=${count}"` : "";
    return `${name}${desc};dur=${dur}`;
  }).join(", ");
  return { start, record, measure, entries, header };
}
const TIMING_CTX_KEY = "_ogImageTimings";

const satoriRendererInstance = { instance: void 0 };
const browserRendererInstance = { instance: void 0 };
const takumiRendererInstance = { instance: void 0 };
async function getSatoriRenderer() {
  satoriRendererInstance.instance = satoriRendererInstance.instance || await Promise.resolve().then(function () { return empty; }).then((m) => m.default);
  return satoriRendererInstance.instance;
}
async function getBrowserRenderer() {
  browserRendererInstance.instance = browserRendererInstance.instance || await Promise.resolve().then(function () { return empty; }).then((m) => m.default);
  return browserRendererInstance.instance;
}
async function getTakumiRenderer() {
  takumiRendererInstance.instance = takumiRendererInstance.instance || await Promise.resolve().then(function () { return renderer; }).then((m) => m.default);
  return takumiRendererInstance.instance;
}

const RE_HASH_MODE = /^o_([a-z0-9]+)$/i;
const RE_SIGNATURE_SUFFIX = /,s_([^,]+)$/;
async function resolveContext(e) {
  const runtimeConfig = useOgImageRuntimeConfig(e);
  const resolvePathWithBase = createSitePathResolver(e, {
    absolute: false,
    withBase: true
  });
  const path = resolvePathWithBase(parseURL(e.path).pathname);
  let extension = path.split(".").pop();
  if (!extension || !path.includes(".") || extension.includes("/") || !["png", "jpeg", "jpg", "webp", "svg", "html", "json"].includes(extension)) {
    extension = "png";
  }
  const encodedSegment = extractEncodedSegment(path, extension);
  const secret = runtimeConfig.security?.secret;
  let paramsSegment = encodedSegment;
  if (secret && RE_SIGNATURE_SUFFIX.test(encodedSegment)) {
    paramsSegment = encodedSegment.replace(RE_SIGNATURE_SUFFIX, "");
  }
  const hashMatch = paramsSegment.match(RE_HASH_MODE);
  let urlOptions = {};
  if (hashMatch) {
    const optionsHash = hashMatch[1];
    {
      return createError$1({
        statusCode: 400,
        statusMessage: `[Nuxt OG Image] Hash-based URLs (o_${optionsHash}) are only supported during prerendering. Use encoded params or query params for runtime.`
      });
    }
  } else {
    urlOptions = decodeOgImageParams(paramsSegment);
  }
  const maxQueryParamSize = runtimeConfig.security?.maxQueryParamSize;
  if (maxQueryParamSize && true) {
    const queryString = parseURL(e.path).search || "";
    if (queryString.length > maxQueryParamSize) {
      return createError$1({
        statusCode: 400,
        statusMessage: `[Nuxt OG Image] Query string exceeds maximum allowed length of ${maxQueryParamSize} characters.`
      });
    }
  }
  let queryParams = {};
  {
    const query = getEventQuery(e);
    for (const k in query) {
      const v = String(query[k]);
      if (!v)
        continue;
      if (v.startsWith("{")) {
        try {
          queryParams[k] = JSON.parse(v);
        } catch {
        }
      } else {
        queryParams[k] = v;
      }
    }
    delete queryParams.html;
    queryParams = separateProps(queryParams);
  }
  const rawPath = urlOptions._path ?? "/";
  const parsedPath = parseSameOriginPath(typeof rawPath === "string" ? withoutTrailingSlash(rawPath) : rawPath);
  if (parsedPath._tag === "Err") {
    return createError$1({
      statusCode: 400,
      statusMessage: `[Nuxt OG Image] The _path option must be a same-origin path. ${parsedPath.reason}`
    });
  }
  const basePath = parsedPath.value;
  const componentHash = urlOptions._componentHash || "";
  delete urlOptions._path;
  delete urlOptions._hash;
  delete urlOptions._componentHash;
  if (runtimeConfig.security?.strict) {
    delete urlOptions.html;
  }
  const basePathWithQuery = queryParams._query && typeof queryParams._query === "object" ? withQuery(basePath, queryParams._query) : basePath;
  const isDebugJsonPayload = extension === "json" && (true);
  const routeRuleMatcher = createNitroRouteRuleMatcher();
  const routeRules = routeRuleMatcher(basePath);
  const ogImageRouteRules = separateProps(routeRules.ogImage);
  const options = defu$1(queryParams, urlOptions, ogImageRouteRules, runtimeConfig.defaults);
  const maxDim = runtimeConfig.security?.maxDimension || 2048;
  if (options.width != null) {
    const w = Number(options.width);
    options.width = Number.isFinite(w) ? Math.min(Math.max(1, w), maxDim) : void 0;
  }
  if (options.height != null) {
    const h = Number(options.height);
    options.height = Number.isFinite(h) ? Math.min(Math.max(1, h), maxDim) : void 0;
  }
  if (options.props && typeof options.props === "object")
    options.props = sanitizeProps(options.props);
  if (!options) {
    return createError$1({
      statusCode: 404,
      statusMessage: "[Nuxt OG Image] OG Image not found."
    });
  }
  const normalised = normaliseOptions(options);
  if (normalised.component && normalised.options.props && typeof normalised.options.props === "object") {
    const builtinProps = /* @__PURE__ */ new Set(["colorMode", "timestamp"]);
    const allowedProps = normalised.component.propNames || [];
    const allowedSet = new Set(allowedProps);
    const raw = normalised.options.props;
    const filtered = {};
    for (const key2 of Object.keys(raw)) {
      if (allowedSet.has(key2) || builtinProps.has(key2))
        filtered[key2] = raw[key2];
      else logger.warn(`[Nuxt OG Image] Prop "${key2}" is not declared by component "${normalised.component.pascalName}". Declared props: ${allowedProps.join(", ")}`);
    }
    normalised.options.props = filtered;
  }
  const rendererType = normalised.renderer;
  const identity = normalised.options.cacheKey ? ["cacheKey", String(normalised.options.cacheKey)] : hashMatch ? ["hash", hashMatch[1]] : ["page", basePathWithQuery, getSiteConfig(e, { resolveRefs: true }).url, normalised.options];
  const key = digestCanonical([...identity, componentHash]);
  let renderer;
  switch (rendererType) {
    case "satori":
      renderer = await getSatoriRenderer();
      break;
    case "browser":
      renderer = await getBrowserRenderer();
      break;
    case "takumi":
      renderer = await getTakumiRenderer();
      break;
  }
  if (!renderer || renderer.__mock__) {
    throw createError$1({
      statusCode: 400,
      statusMessage: `[Nuxt OG Image] Renderer "${rendererType}" is not available. Component "${normalised.component?.pascalName}" requires the ${rendererType} renderer but it's not bundled for this preset.`
    });
  }
  const timings = e.context[TIMING_CTX_KEY] || createTimings();
  e.context[TIMING_CTX_KEY] = timings;
  const ctx = {
    e,
    key,
    renderer,
    isDevToolsContextRequest: isDebugJsonPayload,
    runtimeConfig,
    publicStoragePath: runtimeConfig.publicStoragePath,
    extension,
    basePath,
    options: normalised.options,
    timings,
    _nitro: useNitroApp()
  };
  const hookTimeout = runtimeConfig.security?.renderTimeout ?? 15e3;
  await withTimeout(
    ctx._nitro.hooks.callHook("nuxt-og-image:context", ctx),
    hookTimeout,
    "nuxt-og-image:context hook"
  );
  return ctx;
}

const PAYLOAD_REGEX = /<script.+id="nuxt-og-image-options"[^>]*>(.+?)<\/script>/;
function extractOptionsFromHtml(html) {
  const match = String(html).match(PAYLOAD_REGEX);
  if (!match?.[1])
    return [];
  return parse(match[1]);
}
async function doFetchWithErrorHandling(fetch, path) {
  const res = await fetch(path, {
    redirect: "follow",
    headers: {
      accept: "text/html"
    }
  }).catch((err) => {
    return err;
  });
  let errorDescription;
  if (res.status >= 300 && res.status < 400) {
    if (res.headers.has("location")) {
      return await doFetchWithErrorHandling(fetch, res.headers.get("location") || "");
    }
    errorDescription = `${res.status} redirected to ${res.headers.get("location") || "unknown"}`;
  } else if (res.status >= 400) {
    errorDescription = `${res.status} error: ${res.statusText}`;
  }
  if (errorDescription) {
    return [null, createError$1({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] Failed to parse \`${path}\` for og-image extraction. ${errorDescription}`
    })];
  }
  return [res._data || await res.text(), null];
}
async function fetchPathHtmlAndExtractOptions(e, path, key) {
  const cacheKey = toStorageKey("devtools", key);
  await htmlPayloadCache.getItem(cacheKey);
  let [html, err] = await doFetchWithErrorHandling(e.fetch, path);
  if (err) {
    logger$2.warn(err);
  }
  if (!html) {
    const [fallbackHtml, err2] = await doFetchWithErrorHandling(globalThis.$fetch.raw, path);
    if (err2) {
      return err2;
    }
    html = fallbackHtml;
  }
  if (!html) {
    return createError$1({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] Failed to read the path ${path} for og-image extraction, returning no HTML.`
    });
  }
  const [root, images] = extractSocialPreviewTags(html);
  const options = extractOptionsFromHtml(html);
  const payload = {
    options,
    socialPreview: { root, images }
  };
  return payload;
}

const MIN_TIMEOUT_MS = 100;
function getFetchTimeout(runtimeConfig) {
  const value = runtimeConfig.security?.imageFetchTimeout ?? 3e3;
  if (!Number.isFinite(value) || value < MIN_TIMEOUT_MS)
    return MIN_TIMEOUT_MS;
  return value;
}

const EMOJI_CODEPOINT_TO_NAME = {
  // Faces - most popular
  "1f600": "grinning-face",
  "1f603": "grinning-face-with-big-eyes",
  "1f604": "grinning-face-with-smiling-eyes",
  "1f601": "beaming-face-with-smiling-eyes",
  "1f606": "grinning-squinting-face",
  "1f605": "grinning-face-with-sweat",
  "1f602": "face-with-tears-of-joy",
  "1f923": "rolling-on-the-floor-laughing",
  "1f60a": "smiling-face-with-smiling-eyes",
  "1f607": "smiling-face-with-halo",
  "1f970": "smiling-face-with-hearts",
  "1f60d": "smiling-face-with-heart-eyes",
  "1f929": "star-struck",
  "1f618": "face-blowing-a-kiss",
  "1f617": "kissing-face",
  "1f619": "kissing-face-with-smiling-eyes",
  "1f61a": "kissing-face-with-closed-eyes",
  "1f60b": "face-savoring-food",
  "1f61b": "face-with-tongue",
  "1f61c": "winking-face-with-tongue",
  "1f92a": "zany-face",
  "1f61d": "squinting-face-with-tongue",
  "1f911": "money-mouth-face",
  "1f917": "smiling-face-with-open-hands",
  "1f92d": "face-with-hand-over-mouth",
  "1f92b": "shushing-face",
  "1f914": "thinking-face",
  "1f910": "zipper-mouth-face",
  "1f928": "face-with-raised-eyebrow",
  "1f610": "neutral-face",
  "1f611": "expressionless-face",
  "1f636": "face-without-mouth",
  "1f60f": "smirking-face",
  "1f612": "unamused-face",
  "1f644": "face-with-rolling-eyes",
  "1f62c": "grimacing-face",
  "1f925": "lying-face",
  "1f60c": "relieved-face",
  "1f614": "pensive-face",
  "1f62a": "sleepy-face",
  "1f924": "drooling-face",
  "1f634": "sleeping-face",
  "1f637": "face-with-medical-mask",
  "1f912": "face-with-thermometer",
  "1f915": "face-with-head-bandage",
  "1f922": "nauseated-face",
  "1f92e": "face-vomiting",
  "1f927": "sneezing-face",
  "1f975": "hot-face",
  "1f976": "cold-face",
  "1f974": "woozy-face",
  "1f635": "knocked-out-face",
  "1f92f": "exploding-head",
  "1f920": "cowboy-hat-face",
  "1f973": "partying-face",
  "1f60e": "smiling-face-with-sunglasses",
  "1f913": "nerd-face",
  "1f9d0": "face-with-monocle",
  // Gestures
  "1f44b": "waving-hand",
  "1f44d": "thumbs-up",
  "1f44e": "thumbs-down",
  "1f44f": "clapping-hands",
  "1f64c": "raising-hands",
  "1f64f": "folded-hands",
  "1f4aa": "flexed-biceps",
  "270c": "victory-hand",
  "1f91e": "crossed-fingers",
  "1f918": "sign-of-the-horns",
  "1f919": "call-me-hand",
  "1f448": "backhand-index-pointing-left",
  "1f449": "backhand-index-pointing-right",
  "1f446": "backhand-index-pointing-up",
  "1f447": "backhand-index-pointing-down",
  "261d": "index-pointing-up",
  "270b": "raised-hand",
  "1f91a": "raised-back-of-hand",
  "1f590": "hand-with-fingers-splayed",
  "1f596": "vulcan-salute",
  "1f44c": "ok-hand",
  // Hearts & Symbols
  "2764": "red-heart",
  "1f9e1": "orange-heart",
  "1f49b": "yellow-heart",
  "1f49a": "green-heart",
  "1f499": "blue-heart",
  "1f49c": "purple-heart",
  "1f5a4": "black-heart",
  "1f90d": "white-heart",
  "1f90e": "brown-heart",
  "1f494": "broken-heart",
  "1f495": "two-hearts",
  "1f496": "sparkling-heart",
  "1f497": "growing-heart",
  "1f498": "heart-with-arrow",
  "1f49d": "heart-with-ribbon",
  "1f49e": "revolving-hearts",
  "1f49f": "heart-decoration",
  // Popular Objects & Symbols
  "1f680": "rocket",
  "26a1": "high-voltage",
  "1f525": "fire",
  "2728": "sparkles",
  "1f31f": "glowing-star",
  "2b50": "star",
  "1f4a5": "collision",
  "1f4a1": "light-bulb",
  "1f389": "party-popper",
  "1f38a": "confetti-ball",
  "1f381": "wrapped-gift",
  "1f3c6": "trophy",
  "1f3c5": "1st-place-medal",
  "1f947": "1st-place-medal",
  "1f4af": "hundred-points",
  "2705": "check-mark-button",
  "274c": "cross-mark",
  "2714": "check-mark",
  "2795": "plus",
  "2796": "minus",
  "2716": "multiply",
  "27a1": "right-arrow",
  "2b05": "left-arrow",
  "2b06": "up-arrow",
  "2b07": "down-arrow",
  // Tech & Work
  "1f4bb": "laptop",
  "1f4f1": "mobile-phone",
  "2699": "gear",
  "1f527": "wrench",
  "1f528": "hammer",
  "1f529": "nut-and-bolt",
  "1f6e0": "hammer-and-wrench",
  "1f4e6": "package",
  "1f4dd": "memo",
  "1f4c8": "chart-increasing",
  "1f4c9": "chart-decreasing",
  "1f4ca": "bar-chart",
  "1f4cb": "clipboard",
  "1f4cc": "pushpin",
  "1f4cd": "round-pushpin",
  "1f4ce": "paperclip",
  "1f4cf": "straight-ruler",
  "1f4d0": "triangular-ruler",
  "1f50d": "magnifying-glass-tilted-left",
  "1f50e": "magnifying-glass-tilted-right",
  "1f512": "locked",
  "1f513": "unlocked",
  // Nature & Weather
  "2600": "sun",
  "1f31e": "sun-with-face",
  "1f319": "crescent-moon",
  "1f308": "rainbow",
  "2601": "cloud",
  "26c5": "sun-behind-cloud",
  "1f327": "cloud-with-rain",
  "26c8": "cloud-with-lightning-and-rain",
  "1f329": "cloud-with-lightning",
  "2744": "snowflake",
  "1f4a7": "droplet",
  "1f30a": "water-wave",
  // Animals
  "1f436": "dog-face",
  "1f431": "cat-face",
  "1f42d": "mouse-face",
  "1f430": "rabbit-face",
  "1f43b": "bear",
  "1f43c": "panda",
  "1f428": "koala",
  "1f42f": "tiger-face",
  "1f981": "lion",
  "1f984": "unicorn",
  "1f98b": "butterfly",
  "1f41d": "honeybee",
  "1f577": "spider",
  "1f427": "penguin",
  "1f426": "bird",
  "1f985": "eagle",
  "1f419": "octopus",
  "1f422": "turtle",
  "1f40d": "snake",
  "1f409": "dragon",
  "1f432": "dragon-face",
  // Food
  "1f34e": "red-apple",
  "1f34a": "tangerine",
  "1f34b": "lemon",
  "1f34c": "banana",
  "1f34d": "pineapple",
  "1f347": "grapes",
  "1f353": "strawberry",
  "1f352": "cherries",
  "1f351": "peach",
  "1f349": "watermelon",
  "1f96d": "mango",
  "1f951": "avocado",
  "1f955": "carrot",
  "1f33d": "ear-of-corn",
  "1f336": "hot-pepper",
  "1f355": "pizza",
  "1f354": "hamburger",
  "1f35f": "french-fries",
  "1f32d": "hot-dog",
  "1f32e": "taco",
  "1f32f": "burrito",
  "1f37f": "popcorn",
  "1f36a": "cookie",
  "1f382": "birthday-cake",
  "1f370": "shortcake",
  "1f36b": "chocolate-bar",
  "1f36c": "candy",
  "1f36d": "lollipop",
  "1f369": "doughnut",
  "1f366": "soft-ice-cream",
  "1f36f": "honey-pot",
  "2615": "hot-beverage",
  "1f375": "teacup-without-handle",
  "1f37a": "beer-mug",
  "1f37b": "clinking-beer-mugs",
  "1f377": "wine-glass",
  "1f378": "cocktail-glass"
};

const RE_VARIATION_SELECTOR = /-fe0f$/i;
const RE_MATCH_EMOJIS = /(?:\p{Extended_Pictographic}|[\d#*]\uFE0F\u20E3|\p{Regional_Indicator}{2})(?:\p{Emoji_Modifier}|\uFE0F|\u200D[\p{Extended_Pictographic}\p{Emoji}])*/gu;
function getEmojiIconNames(codePoint, _emojiSet) {
  const baseCodePoint = codePoint.replace(RE_VARIATION_SELECTOR, "");
  const knownName = EMOJI_CODEPOINT_TO_NAME[codePoint] || EMOJI_CODEPOINT_TO_NAME[baseCodePoint];
  if (knownName) {
    return [knownName];
  }
  return [codePoint, baseCodePoint, `u${baseCodePoint}`].filter((v, i, a) => a.indexOf(v) === i);
}
function getEmojiCodePoint(emoji) {
  return Array.from(emoji, (char) => char.codePointAt(0).toString(16)).join("-");
}

async function getEmojiSvg(ctx, emojiChar) {
  const emojiSet = ctx.options.emojis;
  const codePoint = getEmojiCodePoint(emojiChar);
  const possibleNames = getEmojiIconNames(codePoint);
  let svg = null;
  for (const iconName of possibleNames) {
    const key = toStorageKey("emoji", [emojiSet, iconName]);
    if (await emojiCache.hasItem(key)) {
      svg = await emojiCache.getItem(key);
      if (svg)
        break;
    }
  }
  if (!svg) {
    const timeout = getFetchTimeout(ctx.runtimeConfig);
    const deadline = AbortSignal.timeout(timeout);
    const endTiming = ctx.timings.start("emoji-fetch");
    try {
      for (const iconName of possibleNames) {
        if (deadline.aborted)
          break;
        try {
          svg = await $fetch$1(`https://api.iconify.design/${encodeURIComponent(emojiSet)}/${encodeURIComponent(iconName)}.svg`, {
            responseType: "text",
            retry: 0,
            signal: deadline,
            timeout
          });
          if (svg && svg !== "404") {
            await emojiCache.setItem(toStorageKey("emoji", [emojiSet, iconName]), svg);
            break;
          }
        } catch {
          svg = null;
        }
      }
    } finally {
      endTiming();
    }
  }
  if (svg) {
    return svg.replace("<svg ", '<svg data-emoji style="margin: 0 .05em 0 .15em; vertical-align: -0.1em;" ');
  }
  return null;
}

const RE_SVG_ID_ATTR = /\bid="([^"]+)"/g;
const RE_HTML_TEXT_CONTENT = />([^<]*)</g;
const RE_REGEX_SPECIAL_CHARS = /[.*+?^${}()|[\]\\]/g;
let emojiCounter = 0;
function wrapDefsElements(svg) {
  const defsElements = ["linearGradient", "radialGradient", "filter", "clipPath", "mask", "pattern"];
  const defsRegex = new RegExp(`<(${defsElements.join("|")})[\\s\\S]*?<\\/\\1>`, "g");
  if (svg.includes("<defs>") || svg.includes("<defs ")) {
    return svg;
  }
  const foundDefs = [];
  let result = svg.replace(defsRegex, (match) => {
    foundDefs.push(match);
    return "";
  });
  if (foundDefs.length > 0) {
    const svgTagEnd = result.indexOf(">") + 1;
    result = `${result.slice(0, svgTagEnd)}<defs>${foundDefs.join("")}</defs>${result.slice(svgTagEnd)}`;
  }
  return result;
}
function makeIdsUnique(svg) {
  const prefix = `e${emojiCounter++}_`;
  const ids = /* @__PURE__ */ new Set();
  svg.replace(RE_SVG_ID_ATTR, (_, id) => {
    ids.add(id);
    return "";
  });
  let result = svg;
  for (const id of ids) {
    result = result.replace(new RegExp(`id="${id}"`, "g"), `id="${prefix}${id}"`).replace(new RegExp(`url\\(#${id}\\)`, "g"), `url(#${prefix}${id})`).replace(new RegExp(`href="#${id}"`, "g"), `href="#${prefix}${id}"`);
  }
  return result;
}
async function applyEmojis(ctx, island) {
  if (!island.html || !ctx.options.emojis)
    return;
  const matches = [...island.html.matchAll(RE_MATCH_EMOJIS)];
  if (!matches.length)
    return;
  const emojiToSvg = /* @__PURE__ */ new Map();
  const uniqueEmojis = [...new Set(matches.map((m) => m[0]))];
  await Promise.all(uniqueEmojis.map(async (emoji) => {
    let svg = await getEmojiSvg(ctx, emoji);
    if (svg) {
      svg = makeIdsUnique(svg);
      svg = wrapDefsElements(svg);
    }
    emojiToSvg.set(emoji, svg ?? null);
  }));
  let html = island.html;
  html = html.replace(RE_HTML_TEXT_CONTENT, (fullMatch, textContent) => {
    if (!textContent)
      return fullMatch;
    let newTextContent = textContent;
    for (const [emoji, svg] of emojiToSvg) {
      if (svg) {
        const escaped = emoji.replace(RE_REGEX_SPECIAL_CHARS, "\\$&");
        newTextContent = newTextContent.replace(new RegExp(escaped, "g"), svg);
      }
    }
    return `>${newTextContent}<`;
  });
  island.html = html;
}

const RE_SCRIPT_TAG = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
async function html(ctx) {
  const { options } = ctx;
  const fonts = resolvedFonts;
  if (!options.component) {
    throw createError$1({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] Rendering an invalid component. Received options: ${JSON.stringify(options)}.`
    });
  }
  const islandTimeout = ctx.runtimeConfig.security?.renderTimeout ?? 15e3;
  const island = await fetchIsland(ctx.e, ctx.options.component, typeof ctx.options.props !== "undefined" ? ctx.options.props : ctx.options, islandTimeout);
  const head = createHead();
  head.push(island.head);
  let defaultFontFamily = "sans-serif";
  const firstFont = fonts[0];
  if (firstFont)
    defaultFontFamily = firstFont.family.replaceAll("+", " ");
  await applyEmojis(ctx, island);
  let html2 = island.html;
  const scale = options.props?.scale || 1;
  const scaledWidth = Math.round(Number(options.width) * scale);
  const scaledHeight = Math.round(Number(options.height) * scale);
  const fontFaces = fonts.map((font) => {
    const ext = font.src.split(".").pop()?.toLowerCase();
    const format = ext === "woff2" ? "woff2" : ext === "woff" ? "woff" : "truetype";
    return `@font-face {
  font-family: '${font.family.replaceAll("+", " ")}';
  font-style: ${font.style};
  font-weight: ${font.weight};
  src: url('${font.src}') format('${format}');
}`;
  }).join("\n");
  const bgColor = options.props?.colorMode === "dark" ? "#1b1b1b" : "#fff";
  head.push({
    style: [
      {
        innerHTML: `/* reset */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
img, svg { display: block; max-width: 100%; }

/* viewport */
html, body {
  width: ${scaledWidth}px;
  height: ${scaledHeight}px;
  overflow: hidden;
  font-family: '${defaultFontFamily}', sans-serif;
  background-color: ${bgColor};
}

/* scale wrapper */
.og-scale-wrapper {
  transform: scale(${scale});
  transform-origin: top left;
  width: ${options.width}px;
  height: ${options.height}px;
}
.og-scale-wrapper > :first-child {
  width: 100%;
  height: 100%;
}

/* match satori flex defaults for divs */
div { display: flex; }
div:has(div, p, ul, ol, li, blockquote, pre, hr, table, dl) {
  flex-direction: column;
}
div:not(:has(div, p, ul, ol, li, blockquote, pre, hr, table, dl)) {
  flex-wrap: wrap;
  gap: 12px;
}

svg[data-emoji] { display: inline-block; }

/* fonts */
${fontFaces}`
      }
    ],
    meta: [
      { charset: "utf-8" }
    ]
  });
  RE_SCRIPT_TAG.lastIndex = 0;
  html2 = html2.replaceAll(RE_SCRIPT_TAG, "");
  const headChunk = await renderSSRHead(head);
  return `<!DOCTYPE html>
<html ${headChunk.htmlAttrs}>
<head>${headChunk.headTags}</head>
<body ${headChunk.bodyAttrs}>${headChunk.bodyTagsOpen}<div class="og-scale-wrapper" data-v-inspector-ignore="true">${html2}</div>${headChunk.bodyTags}</body>
</html>`;
}

async function useOgImageBufferCache(ctx, options) {
  const intentionallyEnabled = options.baseCacheKey !== false && false;
  let enabled = intentionallyEnabled;
  options.baseCacheKey === false ? void 0 : prefixStorage(useStorage(), withTrailingSlash(options.baseCacheKey));
  toStorageKey("image", ctx.key);
  let cachedItem = false;
  let cacheExpiresAt = 0;
  {
    setHeader(ctx.e, "Cache-Control", "no-cache, no-store, must-revalidate");
    setHeader(ctx.e, "Pragma", "no-cache");
    setHeader(ctx.e, "Expires", "0");
  }
  return {
    enabled,
    cachedItem,
    get expiresAt() {
      return cacheExpiresAt;
    },
    async update(item) {
      setHeader(ctx.e, "X-OG-Cache", "DISABLED");
      return;
    }
  };
}

async function imageEventHandler(e) {
  const reqStart = performance.now();
  const ctx = await resolveContext(e).catch((err) => {
    logger.error(`resolveContext error for ${e.path}:`, err?.message || err);
    throw err;
  });
  if (ctx instanceof H3Error)
    return ctx;
  const timings = ctx.timings;
  timings.record("resolve-context", performance.now() - reqStart);
  try {
    return await renderOgImage(e, ctx);
  } finally {
    timings.record("total", performance.now() - reqStart);
    const header = timings.header();
    if (header && !e.node?.res?.headersSent)
      appendResponseHeader(e, "Server-Timing", header);
  }
}
async function renderOgImage(e, ctx) {
  const timings = ctx.timings;
  const { isDevToolsContextRequest, extension, renderer } = ctx;
  const config = useOgImageRuntimeConfig(e);
  const { debug, baseCacheKey, security, publish } = config;
  const purgeRequest = { _tag: "None" } ;
  if (purgeRequest._tag === "Denied") {
    return createError$1({
      statusCode: 403,
      statusMessage: "[Nuxt OG Image] Invalid purge token. Provide the signing secret as ?purge=<secret>."
    });
  }
  purgeRequest._tag === "Authorized";
  if (isDevToolsContextRequest) {
    setHeader(e, "Content-Type", "application/json");
    const [extract, rendererDebug] = await Promise.all([
      fetchPathHtmlAndExtractOptions(e, ctx.basePath, ctx.key),
      renderer.debug ? renderer.debug(ctx).catch((err) => {
        logger.debug(`renderer.debug failed for ${ctx.options.component}: ${err?.message || err}`);
        return {};
      }) : {}
    ]);
    return {
      extract,
      siteUrl: getSiteConfig(e).url,
      ...rendererDebug
    };
  }
  switch (extension) {
    case "html":
      setHeader(e, "Content-Type", `text/html`);
      return html(ctx);
    case "svg": {
      if (ctx.renderer.name !== "satori") {
        return createError$1({
          statusCode: 400,
          statusMessage: `[Nuxt OG Image] Generating ${extension}'s with ${renderer.name} is not supported.`
        });
      }
      setHeader(e, "Content-Type", `image/svg+xml`);
      const debugResult = await ctx.renderer.debug(ctx);
      return debugResult.svg;
    }
    case "png":
    case "jpeg":
    case "jpg":
    case "webp":
      if (!renderer.supportedFormats.includes(extension)) {
        return createError$1({
          statusCode: 400,
          statusMessage: `[Nuxt OG Image] Generating ${extension}'s with ${renderer.name} is not supported.`
        });
      }
      setHeader(e, "Content-Type", `image/${extension === "jpg" ? "jpeg" : extension}`);
      break;
    default:
      return createError$1({
        statusCode: 400,
        statusMessage: `[Nuxt OG Image] Invalid request for og.${extension}.`
      });
  }
  const endCacheLookup = timings.start("cache-lookup");
  const cacheApi = await useOgImageBufferCache(ctx, {
    cacheMaxAgeSeconds: ctx.options.cacheMaxAgeSeconds,
    baseCacheKey}).finally(endCacheLookup);
  if (typeof cacheApi === "undefined") {
    return;
  }
  let image = cacheApi.cachedItem;
  if (image) {
    timings.record("cache-hit", 0);
  }
  if (!image) {
    const timeout = security?.renderTimeout ?? 15e3;
    let timer;
    const endRender = timings.start("render-total");
    image = await Promise.race([
      renderer.createImage(ctx),
      new Promise((_, reject) => {
        timer = setTimeout(() => reject(new Error(`OG image render timed out after ${timeout}ms`)), timeout);
      })
    ]).catch((err) => {
      if (err?.message?.includes("timed out")) {
        logger.error(`renderer.createImage timeout for ${e.path}`);
        return createError$1({ statusCode: 408, statusMessage: `[Nuxt OG Image] Request timed out while waiting for OG image render.` });
      }
      logger.error(`renderer.createImage error for ${e.path}:`, err?.stack || err?.message || err);
      throw err;
    }).finally(() => {
      clearTimeout(timer);
      endRender();
    });
    if (image instanceof H3Error) {
      return image;
    }
    if (!image) {
      return createError$1({
        statusCode: 500,
        statusMessage: `Failed to generate og.${extension}.`
      });
    }
    await cacheApi.update(image);
  }
  return image;
}

const image = defineEventHandler$1(async (e) => {
  {
    return await imageEventHandler(e);
  }
});

const image$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: image
}, Symbol.toStringTag, { value: 'Module' }));

const RE_META_TAG = /<meta\b[^>]*>/gi;
const RE_META_KEY = /\b(?:property|name)\s*=\s*(?:"([^"]+)"|'([^']+)')/i;
const RE_META_CONTENT = /\bcontent\s*=\s*(?:"([^"]*)"|'([^']*)')/i;
const MAX_RESOLVE_PATH_LENGTH = 2048;
const RE_STRIP_PREFIX = /^.*?\/_og\/r/;
const RE_IMAGE_EXT = /\.(?:png|jpe?g|webp|svg)$/i;
function extractMeta(html, key) {
  for (const tagMatch of html.matchAll(RE_META_TAG)) {
    const tag = tagMatch[0];
    const keyMatch = tag.match(RE_META_KEY);
    const keyValue = keyMatch?.[1] ?? keyMatch?.[2];
    if (keyValue?.toLowerCase() !== key)
      continue;
    const contentMatch = tag.match(RE_META_CONTENT);
    const content = contentMatch?.[1] ?? contentMatch?.[2];
    if (content)
      return content;
  }
  return void 0;
}
function resolveTargetPath(event) {
  const pathname = parseURL(event.path).pathname;
  const stripped = pathname.replace(RE_STRIP_PREFIX, "") || "/";
  return stripped.replace(RE_IMAGE_EXT, "") || "/";
}
const resolve$3 = defineEventHandler$1(async (event) => {
  const runtimeConfig = useOgImageRuntimeConfig(event);
  const security = runtimeConfig.security;
  if (security?.maxQueryParamSize && true) {
    const queryString = parseURL(event.path).search || "";
    if (queryString.length > security.maxQueryParamSize) {
      throw createError$1({
        statusCode: 400,
        statusMessage: `[Nuxt OG Image] Query string exceeds maximum allowed length of ${security.maxQueryParamSize} characters.`
      });
    }
  }
  const targetPath = resolveTargetPath(event);
  if (targetPath.length > MAX_RESOLVE_PATH_LENGTH) {
    throw createError$1({
      statusCode: 400,
      statusMessage: `[Nuxt OG Image] Target path exceeds ${MAX_RESOLVE_PATH_LENGTH} characters.`
    });
  }
  const parsedPath = parseSameOriginPath(targetPath);
  if (targetPath.includes("://") || parsedPath._tag === "Err") {
    throw createError$1({
      statusCode: 400,
      statusMessage: "[Nuxt OG Image] Target path must be a same-origin path."
    });
  }
  const pagePath = parsedPath.value;
  if (isInternalRoute(pagePath)) {
    throw createError$1({
      statusCode: 400,
      statusMessage: "[Nuxt OG Image] Cannot resolve og:image for internal route."
    });
  }
  const query = getEventQuery(event);
  const ogKey = typeof query._og_key === "string" ? query._og_key.toLowerCase() : "";
  const metaKey = ogKey === "twitter" ? "twitter:image" : "og:image";
  const forwardQuery = {};
  for (const [k, v] of Object.entries(query)) {
    if (!k.startsWith("_og_"))
      forwardQuery[k] = v;
  }
  const fetchPath = withQuery(pagePath, forwardQuery);
  const html = await fetchWithEvent(event, fetchPath, {
    headers: { accept: "text/html" },
    responseType: "text"
  }).catch((err) => {
    throw createError$1({
      statusCode: err.statusCode === 404 ? 404 : 502,
      statusMessage: `[Nuxt OG Image] Failed to fetch ${fetchPath}: ${err.message || "unknown error"}`
    });
  });
  const resolved = extractMeta(String(html), metaKey);
  if (!resolved) {
    throw createError$1({
      statusCode: 404,
      statusMessage: `[Nuxt OG Image] No <meta property="${metaKey}"> found on ${fetchPath}.`
    });
  }
  return sendRedirect(event, resolved, 302);
});

const resolve$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: resolve$3
}, Symbol.toStringTag, { value: 'Module' }));

const empty$1 = Object.freeze(
  Object.create(null, {
    __mock__: { get: () => true },
  }),
);

const empty = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: empty$1
}, Symbol.toStringTag, { value: 'Module' }));

function toRecord(value) {
  return typeof value === "object" && value !== null ? value : void 0;
}
function getCloudflareEnv(event) {
  const runtime = event && "runtime" in event ? toRecord(event.runtime) : void 0;
  const runtimeCloudflare = toRecord(runtime?.cloudflare);
  const runtimeEnv = toRecord(runtimeCloudflare?.env);
  if (runtimeEnv)
    return runtimeEnv;
  const contextCloudflare = toRecord(event?.context?.cloudflare);
  const contextEnv = toRecord(contextCloudflare?.env);
  if (contextEnv)
    return contextEnv;
  const platform = toRecord(event?.context?._platform);
  const platformCloudflare = toRecord(platform?.cloudflare);
  return toRecord(platformCloudflare?.env);
}

function getCloudflareAssets(event) {
  const assets = getCloudflareEnv(event)?.ASSETS || event.context.ASSETS;
  return typeof assets === "object" && assets !== null && "fetch" in assets && typeof assets.fetch === "function" ? assets : void 0;
}
async function tryCloudflareAssetsFetch(event, path, signal) {
  const assets = getCloudflareAssets(event);
  if (!assets)
    return;
  const origin = getRequestURL$2(event).origin;
  const url = new URL(path, origin).href;
  const res = await assets.fetch(url, { signal, redirect: "manual" }).catch(() => {
    return null;
  });
  if (!res || !res.ok)
    return;
  return res.arrayBuffer();
}

async function fetchLocalAsset(event, path, options) {
  const absolute = resolveSameOriginUrl(path, getOgImageOrigin(event));
  if (!path.startsWith("/") || !absolute)
    return;
  const url = new URL(absolute);
  path = `${url.pathname}${url.search}`;
  const { fetchTimeout, headers, includeExternalFallback = false, onStepFailure } = options;
  const deadline = AbortSignal.timeout(fetchTimeout);
  let expired = false;
  const timer = new Promise((resolve) => {
    setTimeout(() => {
      expired = true;
      resolve(void 0);
    }, fetchTimeout);
  });
  const race = (p) => Promise.race([p, timer]);
  let result = await race(tryCloudflareAssetsFetch(event, path, deadline).catch((err) => {
    onStepFailure?.(path, err);
    return void 0;
  }));
  if (result || expired)
    return result;
  result = await race(fetchWithEvent(event, path, {
    responseType: "arrayBuffer",
    redirect: "manual",
    signal: deadline,
    timeout: fetchTimeout,
    headers,
    onResponse({ response }) {
      if (!response.ok)
        throw new Error(response.statusText || String(response.status));
    }
  }).catch((err) => {
    onStepFailure?.(path, err);
    return void 0;
  }));
  if (result || expired || !includeExternalFallback)
    return result;
  return await race(fetchWithRedirectValidation(absolute, {
    signal: deadline,
    timeout: fetchTimeout,
    headers,
    trustedHost: url.host
  }).then((buffer) => buffer ?? void 0));
}

const TAKUMI_FORMATS = /* @__PURE__ */ new Set(["ttf", "otf", "woff", "woff2"]);
function fontFormat(src) {
  if (src.endsWith(".woff2"))
    return "woff2";
  if (src.endsWith(".woff"))
    return "woff";
  if (src.endsWith(".otf"))
    return "otf";
  return "ttf";
}
function selectFontSource(f, supportedFormats) {
  const primarySupported = supportedFormats.has(fontFormat(f.src));
  const satoriSupported = !!(f.satoriSrc && supportedFormats.has(fontFormat(f.satoriSrc)));
  if (primarySupported)
    return { src: f.src, isStaticFallback: false };
  if (satoriSupported)
    return { src: f.satoriSrc, isStaticFallback: true };
  return null;
}

const SENTINEL_ORIGIN = "http://font-asset.invalid/";
const SENTINEL_HOST = "font-asset.invalid";
function isDataFontUrl(path) {
  return path.trimStart().toLowerCase().startsWith("data:");
}
function isExternalFontUrl(path) {
  let resolved;
  try {
    resolved = new URL(path, SENTINEL_ORIGIN);
  } catch {
    return true;
  }
  return resolved.protocol !== "http:" || resolved.host !== SENTINEL_HOST;
}
async function fetchSpecialFontUrl(path, siteUrl, timeout) {
  if (isDataFontUrl(path)) {
    const res = await fetch(path.trimStart(), { signal: AbortSignal.timeout(timeout) }).catch(() => {
      return null;
    });
    if (res?.ok)
      return Buffer.from(await res.arrayBuffer());
    throw new Error("[Nuxt OG Image] Invalid data: font URL.");
  }
  const href = resolveSameOriginUrl(path, siteUrl);
  if (!href)
    throw new Error("[Nuxt OG Image] External font URLs are not supported. Load custom fonts via @nuxt/fonts.");
  const ab = await fetchWithRedirectValidation(href, { timeout });
  if (!ab)
    throw new Error("[Nuxt OG Image] Font URL blocked or unreachable.");
  return Buffer.from(ab);
}

async function readOptionalFile(path) {
  return readFile(path).catch((error) => {
    if (error.code === "ENOENT")
      return null;
    throw error;
  });
}
async function resolve$2(event, font) {
  const path = font.src || font.localPath;
  const runtimeConfig = useOgImageRuntimeConfig();
  const timeout = getFetchTimeout(runtimeConfig);
  if (font.absolutePath) {
    const data = await readOptionalFile(font.absolutePath);
    if (data?.length)
      return data;
  }
  if (path && (isDataFontUrl(path) || isExternalFontUrl(path)))
    return fetchSpecialFontUrl(path, getSiteConfig(event).url, timeout);
  if (resolvedFontPaths[path])
    return readFile(resolvedFontPaths[path]);
  if (path.startsWith("/_og-static-fonts/")) {
    const filename = path.slice("/_og-static-fonts/".length);
    const cached = await readOptionalFile(join(staticFontCacheDir, filename));
    if (cached?.length)
      return cached;
  }
  {
    const filename = path.slice(1);
    const data = await readOptionalFile(join(rootDir, "public", filename));
    if (data?.length)
      return data;
  }
  const { app } = useRuntimeConfig$1();
  {
    const reqUrl = getRequestURL$2(event);
    const origin = `${reqUrl.protocol}//${reqUrl.host}`;
    const target = new URL(withBase(path, app.baseURL), origin);
    const ab = await fetchWithRedirectValidation(target.href, { timeout, trustedHost: target.host }).catch(() => {
      return null;
    });
    if (ab) {
      return Buffer.from(ab);
    }
  }
  const fullPath = withBase(path, app.baseURL);
  const arrayBuffer = await fetchWithEvent(event, fullPath, {
    responseType: "arrayBuffer",
    timeout
  });
  return Buffer.from(arrayBuffer);
}

async function resolve$1(event, font) {
  const path = font.src || font.localPath;
  const runtimeConfig = useOgImageRuntimeConfig();
  const timeout = getFetchTimeout(runtimeConfig);
  const { app } = useRuntimeConfig$1();
  const origin = getOgImageOrigin(event);
  const fullPath = withBase(path, app.baseURL);
  if (path && (isDataFontUrl(path) || isExternalFontUrl(path)))
    return fetchSpecialFontUrl(path, getSiteConfig(event).url, timeout);
  const target = new URL(fullPath, origin);
  const ab = await fetchWithRedirectValidation(target.href, { timeout, trustedHost: target.host }).catch(() => {
    return null;
  });
  if (ab) {
    return Buffer.from(ab);
  }
  const arrayBuffer = await fetchWithEvent(event, fullPath, {
    responseType: "arrayBuffer",
    timeout
  });
  return Buffer.from(arrayBuffer);
}

const resolve = (true || false) ? resolve$2 : resolve$1;

const WOFF_HEADER_SIZE = 44;
const WOFF_TABLE_ENTRY_SIZE = 20;
const SFNT_TABLE_RECORD_SIZE = 16;
const MAX_SFNT_SIZE = 64 * 1024 * 1024;
function alignTableSize(size) {
  return Math.ceil(size / 4) * 4;
}
const SIGNATURES = {
  truetype: 65536,
  appleTrueType: 1953658213,
  // 'true'
  openType: 1330926671,
  // 'OTTO'
  collection: 1953784678,
  // 'ttcf'
  woff: 2001684038,
  // 'wOFF'
  woff2: 2001684018
  // 'wOF2'
};
function toBytes(source) {
  if (ArrayBuffer.isView(source))
    return new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
  return new Uint8Array(source);
}
function readSignature(data) {
  if (data.byteLength < 4)
    return void 0;
  return new DataView(data.buffer, data.byteOffset, data.byteLength).getUint32(0);
}
function sfntError(data, offset = 0) {
  if (offset + 12 > data.byteLength)
    return "the SFNT header is truncated";
  const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
  const signature = view.getUint32(offset);
  if (signature !== SIGNATURES.truetype && signature !== SIGNATURES.appleTrueType && signature !== SIGNATURES.openType)
    return "the SFNT signature is invalid";
  const numTables = view.getUint16(offset + 4);
  if (numTables === 0)
    return "the SFNT file has no tables";
  if (offset + 12 + numTables * SFNT_TABLE_RECORD_SIZE > data.byteLength)
    return "the SFNT table directory is truncated";
  for (let index = 0; index < numTables; index++) {
    const record = offset + 12 + index * SFNT_TABLE_RECORD_SIZE;
    if (view.getUint32(record + 8) + view.getUint32(record + 12) > data.byteLength)
      return "an SFNT table runs past the end of the file";
  }
}
function collectionError(data) {
  if (data.byteLength < 12)
    return "the font collection header is truncated";
  const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
  const version = view.getUint32(4);
  if (version !== 65536 && version !== 131072)
    return "the font collection version is invalid";
  const numFonts = view.getUint32(8);
  if (numFonts === 0)
    return "the font collection has no fonts";
  const headerSize = 12 + numFonts * 4 + (version === 131072 ? 12 : 0);
  if (headerSize > data.byteLength)
    return "the font collection directory is truncated";
  for (let index = 0; index < numFonts; index++) {
    const offset = view.getUint32(12 + index * 4);
    if (offset < headerSize)
      return "a font collection offset overlaps its header";
    const error = sfntError(data, offset);
    if (error)
      return error;
  }
}
function woff2Error(data) {
  if (data.byteLength < 48)
    return "the WOFF2 header is truncated";
  const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
  if (view.getUint32(8) !== data.byteLength)
    return "the WOFF2 length does not match the file";
  if (view.getUint16(12) === 0)
    return "the WOFF2 file has no tables";
  const compressedSize = view.getUint32(20);
  if (compressedSize === 0 || compressedSize > data.byteLength - 48)
    return "the WOFF2 compressed data is missing or truncated";
}
function checked(data, error) {
  return error ? { _tag: "Err", reason: error } : { _tag: "Ok", data };
}
async function inflate(data, size) {
  const output = new Uint8Array(size);
  const reader = new Blob([data]).stream().pipeThrough(new DecompressionStream("deflate")).getReader();
  let written = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done)
      break;
    if (written + value.byteLength > size) {
      await reader.cancel();
      throw new Error("a table inflates past its declared size");
    }
    output.set(value, written);
    written += value.byteLength;
  }
  if (written !== size)
    throw new Error("a table inflates short of its declared size");
  return output;
}
async function decodeWoff(woff) {
  if (woff.byteLength < WOFF_HEADER_SIZE)
    throw new Error("the WOFF header is truncated");
  const view = new DataView(woff.buffer, woff.byteOffset, woff.byteLength);
  const flavor = view.getUint32(4);
  const numTables = view.getUint16(12);
  if (numTables === 0)
    throw new Error("the WOFF file has no tables");
  if (WOFF_HEADER_SIZE + numTables * WOFF_TABLE_ENTRY_SIZE > woff.byteLength)
    throw new Error("the WOFF table directory is truncated");
  const tables = Array.from({ length: numTables }, (_, index) => {
    const entry = WOFF_HEADER_SIZE + index * WOFF_TABLE_ENTRY_SIZE;
    return {
      tag: view.getUint32(entry),
      offset: view.getUint32(entry + 4),
      compLength: view.getUint32(entry + 8),
      origLength: view.getUint32(entry + 12),
      checksum: view.getUint32(entry + 16)
    };
  });
  const headerSize = 12 + numTables * SFNT_TABLE_RECORD_SIZE;
  let sfntSize = headerSize;
  for (const table of tables) {
    if (table.offset + table.compLength > woff.byteLength)
      throw new Error("a WOFF table runs past the end of the file");
    if (table.compLength > table.origLength)
      throw new Error("a WOFF table is larger than its decoded size");
    sfntSize += alignTableSize(table.origLength);
    if (sfntSize > MAX_SFNT_SIZE)
      throw new Error(`the decoded font exceeds ${MAX_SFNT_SIZE} bytes`);
  }
  const tableData = await Promise.all(tables.map((table) => {
    const stored = woff.subarray(table.offset, table.offset + table.compLength);
    return table.compLength < table.origLength ? inflate(stored, table.origLength) : stored;
  }));
  const sfnt = new Uint8Array(sfntSize);
  const out = new DataView(sfnt.buffer);
  const entrySelector = Math.floor(Math.log2(numTables));
  const searchRange = 2 ** entrySelector * SFNT_TABLE_RECORD_SIZE;
  out.setUint32(0, flavor);
  out.setUint16(4, numTables);
  out.setUint16(6, searchRange);
  out.setUint16(8, entrySelector);
  out.setUint16(10, numTables * SFNT_TABLE_RECORD_SIZE - searchRange);
  let offset = headerSize;
  tables.forEach((table, index) => {
    const record = 12 + index * SFNT_TABLE_RECORD_SIZE;
    out.setUint32(record, table.tag);
    out.setUint32(record + 4, table.checksum);
    out.setUint32(record + 8, offset);
    out.setUint32(record + 12, table.origLength);
    sfnt.set(tableData[index], offset);
    offset += alignTableSize(table.origLength);
  });
  return sfnt;
}
function isWoff2Binary(source) {
  return readSignature(toBytes(source)) === SIGNATURES.woff2;
}
async function parseFontBinary(source) {
  const data = toBytes(source);
  switch (readSignature(data)) {
    case SIGNATURES.truetype:
    case SIGNATURES.appleTrueType:
    case SIGNATURES.openType:
      return checked(data, sfntError(data));
    case SIGNATURES.collection:
      return checked(data, collectionError(data));
    case SIGNATURES.woff2:
      return checked(data, woff2Error(data));
    case SIGNATURES.woff:
      return decodeWoff(data).then(
        (sfnt) => checked(sfnt, sfntError(sfnt)),
        (error) => ({ _tag: "Err", reason: `it is a WOFF file that could not be decoded: ${error.message}` })
      );
    default:
      return { _tag: "Err", reason: "it is not a TTF, OTF, WOFF or WOFF2 file" };
  }
}

function renameSubsetFonts(fonts) {
  const groups = /* @__PURE__ */ new Map();
  for (const font of fonts) {
    const members = groups.get(font.family);
    if (members)
      members.push(font);
    else
      groups.set(font.family, [font]);
  }
  const aliases = /* @__PURE__ */ new Map();
  for (const members of groups.values()) {
    const faces = /* @__PURE__ */ new Map();
    for (const font of members) {
      const face = `${font.weight}\0${font.style}`;
      const subsets = faces.get(face);
      if (subsets)
        subsets.push(font);
      else
        faces.set(face, [font]);
    }
    const needsRename = members.some((font) => font.unicodeRange) || [...faces.values()].some((subsets) => new Set(subsets.map((font) => font.cacheKey)).size > 1);
    if (!needsRename)
      continue;
    const slots = [];
    for (const subsets of faces.values()) {
      const binaries = /* @__PURE__ */ new Map();
      for (const font of subsets) {
        const source = font.src || font.localPath || font.cacheKey;
        const entries = binaries.get(source);
        if (entries)
          entries.push(font);
        else
          binaries.set(source, [font]);
      }
      const ordered = [...binaries.values()].sort((a, b) => {
        const left = `${a[0].unicodeRange || ""}\0${a[0].src || a[0].localPath || a[0].cacheKey}`;
        const right = `${b[0].unicodeRange || ""}\0${b[0].src || b[0].localPath || b[0].cacheKey}`;
        return left < right ? -1 : left > right ? 1 : 0;
      });
      for (const [index, entries] of ordered.entries())
        (slots[index] ||= []).push(...entries);
    }
    for (const slot of slots) {
      const identities = [...new Set(slot.map((font) => JSON.stringify([
        font.weight,
        font.style,
        font.src || font.localPath || font.cacheKey
      ])))].sort();
      const alias = `${slot[0].family}__${fnv1a64Base36(JSON.stringify(identities))}`;
      for (const font of slot)
        aliases.set(font, alias);
    }
  }
  return aliases.size ? fonts.map((font) => aliases.has(font) ? { ...font, originalFamily: font.originalFamily || font.family, family: aliases.get(font) } : font) : fonts;
}
function buildSubsetFamilyChain(fonts) {
  const chains = /* @__PURE__ */ new Map();
  for (const f of fonts) {
    if (f.originalFamily)
      chains.set(f.originalFamily, []);
  }
  for (const f of fonts)
    chains.get(f.originalFamily || f.family)?.push(f.family);
  return chains;
}
function resolveSubsetChain(family, chains) {
  const direct = chains.get(family);
  if (direct)
    return direct;
  const lower = family.toLowerCase();
  for (const [key, value] of chains) {
    if (key.toLowerCase() === lower)
      return value;
  }
}

const RE_UNICODE_RANGE_PART = /^U\+([0-9A-Fa-f]+)(?:-([0-9A-Fa-f]+))?$/;
function parseUnicodeRange(range) {
  const parts = range.split(",").map((s) => s.trim()).filter(Boolean);
  const result = [];
  for (const part of parts) {
    const match = part.match(RE_UNICODE_RANGE_PART);
    if (!match)
      return null;
    const start = Number.parseInt(match[1], 16);
    const end = match[2] ? Number.parseInt(match[2], 16) : start;
    result.push([start, end]);
  }
  return result.length > 0 ? result : null;
}
function codepointsIntersectRanges(codepoints, ranges) {
  for (const cp of codepoints) {
    for (const [start, end] of ranges) {
      if (cp >= start && cp <= end)
        return true;
    }
  }
  return false;
}
function addCodepointsFromString(str, codepoints) {
  for (const ch of str)
    codepoints.add(ch.codePointAt(0));
}
function extractCodepoints(node) {
  const codepoints = /* @__PURE__ */ new Set();
  const walk = (n) => {
    if (typeof n.text === "string")
      addCodepointsFromString(n.text, codepoints);
    const children = n.props?.children ?? n.children;
    if (typeof children === "string") {
      addCodepointsFromString(children, codepoints);
    } else if (Array.isArray(children)) {
      for (const child of children) {
        if (child == null)
          continue;
        if (typeof child === "string")
          addCodepointsFromString(child, codepoints);
        else
          walk(child);
      }
    }
  };
  walk(node);
  return codepoints;
}

const _warnedFontKeys = /* @__PURE__ */ new Set();
function warnOnce(key, message) {
  if (_warnedFontKeys.has(key))
    return;
  if (_warnedFontKeys.size >= 100)
    _warnedFontKeys.clear();
  _warnedFontKeys.add(key);
  logger.warn(message);
}
async function loadFont(event, font, src) {
  const cacheKey = `${font.family}-${font.weight}-${font.style}-${src}`;
  const cached = fontCache.get(cacheKey);
  if (cached)
    return cached;
  const data = await resolve(event, { ...font, src, absolutePath: src === font.src ? font.absolutePath : void 0 }).catch((err) => {
    logger.warn(`Failed to load font ${font.family}: ${err.message}`);
    return null;
  });
  if (!data)
    return null;
  const binary = await parseFontBinary(data);
  if (binary._tag === "Err") {
    warnOnce(`binary-${src}`, `OG images skip font "${font.family}" (${src}) because ${binary.reason}. Serve it as TTF, OTF, WOFF or WOFF2.`);
    return null;
  }
  fontCache.set(cacheKey, binary.data);
  return binary.data;
}
function findClosestWeight(target, available) {
  return available.reduce(
    (closest, w) => Math.abs(w - target) < Math.abs(closest - target) ? w : closest
  );
}
function selectFontsForRequirements(allFonts, requirements) {
  if (requirements.hasDynamicBindings)
    return [...allFonts];
  const fallbackFonts = [];
  const byFamily = /* @__PURE__ */ new Map();
  const requiredFamilies = requirements.families.length > 0 ? new Set(requirements.families) : null;
  for (const f of allFonts) {
    if (f.fallback) {
      fallbackFonts.push(f);
      continue;
    }
    if (!requirements.styles.includes(f.style))
      continue;
    if (requiredFamilies && !requiredFamilies.has(f.family))
      continue;
    const arr = byFamily.get(f.family) || [];
    arr.push(f);
    byFamily.set(f.family, arr);
  }
  const selected = [];
  for (const [, familyFonts] of byFamily) {
    const availableWeights = [...new Set(familyFonts.map((f) => f.weight))].toSorted((a, b) => a - b);
    if (availableWeights.length === 0)
      continue;
    const selectedWeights = /* @__PURE__ */ new Set();
    for (const w of requirements.weights) {
      if (availableWeights.includes(w)) {
        selectedWeights.add(w);
      } else {
        selectedWeights.add(findClosestWeight(w, availableWeights));
      }
    }
    selected.push(...familyFonts.filter((f) => selectedWeights.has(f.weight)));
  }
  selected.push(...fallbackFonts);
  return selected;
}
async function loadAllFonts(event, options) {
  const map = getComponentFontMap();
  const componentReqs = options.component ? map[options.component] : null;
  const usingGlobalFallback = !!(componentReqs && componentReqs.hasDynamicBindings);
  const reqs = componentReqs && !componentReqs.hasDynamicBindings ? componentReqs : fontRequirements;
  const fonts = selectFontsForRequirements(resolvedFonts, reqs);
  if (options.fontFamilyOverride) {
    const loadedFamilies = new Set(fonts.map((f) => f.family));
    if (!loadedFamilies.has(options.fontFamilyOverride)) {
      const overrideFonts = availableFonts.filter((f) => f.family === options.fontFamilyOverride);
      if (overrideFonts.length > 0) {
        fonts.push(...overrideFonts);
      } else {
        const resolvedOverride = resolvedFonts.filter((f) => f.family === options.fontFamilyOverride);
        fonts.push(...resolvedOverride);
      }
    }
  }
  const resolved = [];
  for (const f of fonts) {
    const selection = selectFontSource(f, options.supportedFormats);
    if (selection)
      resolved.push({ font: f, ...selection });
  }
  const filtered = options.codepoints && options.codepoints.size > 0 ? resolved.filter(({ font: f, isStaticFallback }) => {
    if (isStaticFallback || !f.unicodeRange)
      return true;
    const ranges = parseUnicodeRange(f.unicodeRange);
    if (!ranges)
      return true;
    return codepointsIntersectRanges(options.codepoints, ranges);
  }) : resolved;
  const results = await Promise.all(
    filtered.map(async ({ font: f, src: initialSrc, isStaticFallback }) => {
      let src = initialSrc;
      let data = await loadFont(event, f, src);
      if (!data && src !== f.src && options.supportedFormats.has(fontFormat(f.src))) {
        data = await loadFont(event, f, f.src);
        if (data) {
          src = f.src;
          isStaticFallback = false;
        }
      }
      if (!data)
        return null;
      if (!options.supportedFormats.has("woff2") && isWoff2Binary(data)) {
        warnOnce(`woff2-${src}`, `OG images skip font "${f.family}" (${src}) for this renderer because it is a WOFF2 file. Satori reads TTF, OTF and WOFF.`);
        return null;
      }
      return {
        ...f,
        src,
        ...isStaticFallback ? { unicodeRange: void 0 } : {},
        cacheKey: `${f.family}-${f.weight}-${f.style}-${src}`,
        data
      };
    })
  );
  const loaded = results.filter((f) => f !== null);
  const fingerprint = loaded.map((f) => f.cacheKey).sort().join("|");
  const cachedArray = fontArrayCache.get(fingerprint);
  if (cachedArray)
    return cachedArray;
  fontArrayCache.set(fingerprint, loaded);
  const isCommunity = options.component && map[options.component]?.category === "community";
  if (!options.supportedFormats.has("woff2") && loaded.length === 0 && fonts.length > 0 && !isCommunity) {
    const variableFamilies = [...new Set(fonts.map((f) => f.family))];
    const warnKey = `variable-fonts-${variableFamilies.join(",")}`;
    if (!_warnedFontKeys.has(warnKey)) {
      if (_warnedFontKeys.size >= 100)
        _warnedFontKeys.clear();
      _warnedFontKeys.add(warnKey);
      logger.warn(`All fonts are variable fonts (${variableFamilies.join(", ")}). Variable fonts are not supported by Satori renderer. Falling back to bundled Inter font. Consider using the 'takumi' renderer for variable font support.`);
    }
  }
  if (reqs.weights.length > 0 && !isCommunity) {
    const families = reqs.families.length > 0 ? reqs.families : [...new Set(loaded.map((f) => f.family))];
    const component = options.component ? ` (${options.component})` : "";
    const fallbackNote = usingGlobalFallback ? " Note: using global font requirements because this component has dynamic font bindings." : "";
    for (const family of families) {
      const loadedWeights = [...new Set(loaded.filter((f) => f.family === family).map((f) => f.weight))].toSorted((a, b) => a - b);
      if (loadedWeights.length === 0)
        continue;
      for (const reqWeight of reqs.weights) {
        if (loadedWeights.includes(reqWeight))
          continue;
        const closest = findClosestWeight(reqWeight, loadedWeights);
        const warnKey = `${family}-${reqWeight}-${closest}-${options.component || ""}`;
        if (_warnedFontKeys.has(warnKey))
          continue;
        if (_warnedFontKeys.size >= 100)
          _warnedFontKeys.clear();
        _warnedFontKeys.add(warnKey);
        logger.warn(`Font "${family}" weight ${reqWeight} not configured${component}, using ${closest} instead.${fallbackNote}`);
      }
    }
  }
  return loaded;
}
const MAX_DEFINED_FONTS = 10;
const MAX_FONT_PATH_LENGTH = 2048;
function isDataUri(path) {
  return path.trimStart().toLowerCase().startsWith("data:");
}
function normalizeFontWeight(weight) {
  const n = typeof weight === "number" ? weight : typeof weight === "string" ? Number(weight) : Number.NaN;
  if (!Number.isFinite(n))
    return 400;
  return Math.min(Math.max(Math.round(n), 1), 1e3);
}
async function loadDefinedFonts(event, fontDefs, supportedFormats) {
  const results = [];
  const defs = Array.isArray(fontDefs) ? fontDefs : [];
  if (defs.length > MAX_DEFINED_FONTS)
    logger.warn(`defineOgImage fonts capped at ${MAX_DEFINED_FONTS}; ${defs.length - MAX_DEFINED_FONTS} ignored.`);
  for (const def of defs.slice(0, MAX_DEFINED_FONTS)) {
    if (!def || typeof def !== "object")
      continue;
    const name = typeof def.name === "string" ? def.name.trim() : "";
    const path = typeof def.path === "string" ? def.path : "";
    if (!name || !path || path.length > MAX_FONT_PATH_LENGTH && !isDataUri(path))
      continue;
    const weight = normalizeFontWeight(def.weight);
    const style = def.style === "italic" ? "italic" : "normal";
    const fontConfig = { family: name, weight, style, src: path, localPath: path };
    const data = await resolve(event.e, fontConfig).catch(() => {
      return null;
    });
    if (!data)
      continue;
    const binary = await parseFontBinary(data);
    if (binary._tag === "Err") {
      warnOnce(`binary-${path}`, `defineOgImage() font "${name}" is skipped because ${binary.reason}. Use a TTF, OTF, WOFF or WOFF2 file.`);
      continue;
    }
    if (!supportedFormats.has("woff2") && isWoff2Binary(binary.data)) {
      warnOnce(`woff2-${path}`, `defineOgImage() font "${name}" is skipped because Satori cannot read WOFF2. Use a TTF, OTF or WOFF file.`);
      continue;
    }
    results.push({
      ...fontConfig,
      cacheKey: `custom-${name}-${weight}-${style}-${path}`,
      data: binary.data
    });
  }
  return results;
}
async function loadFontsForRenderer(event, options) {
  const baseFonts = await loadAllFonts(event.e, options);
  const customFonts = Array.isArray(options.fontDefs) && options.fontDefs.length > 0 ? await loadDefinedFonts(event, options.fontDefs, options.supportedFormats) : [];
  const allFonts = customFonts.length > 0 ? [...baseFonts, ...customFonts] : baseFonts;
  return renameSubsetFonts(allFonts);
}
function getDefaultFontFamily(options) {
  const fontFamilyOverride = options.props?.fontFamily;
  const defaultFont = resolvedFonts[0]?.family;
  return { fontFamilyOverride, defaultFont };
}

const takumiInstance = { instance: void 0 };
async function ensureInstance() {
  takumiInstance.instance = takumiInstance.instance || await Promise.resolve().then(function () { return nodeDev$1; }).then((m) => m.default);
  await takumiInstance.instance.initWasmPromise;
  return takumiInstance.instance;
}
async function getTakumi() {
  return (await ensureInstance()).Renderer;
}
async function getExtractResourceUrls() {
  return (await ensureInstance()).extractResourceUrls;
}

const RE_QUOT = /&quot;/g;
const RE_APOS_DEC = /&#39;/g;
const RE_APOS_HEX = /&#x27;/g;
const RE_LT$1 = /&lt;/g;
const RE_GT$1 = /&gt;/g;
const RE_CENT = /&cent;/g;
const RE_POUND = /&pound;/g;
const RE_YEN = /&yen;/g;
const RE_EURO = /&euro;/g;
const RE_COPY = /&copy;/g;
const RE_REG = /&reg;/g;
const RE_SLASH_HEX = /&#x2F;/g;
const RE_DEC_ENTITY = /&#(\d+);/g;
const RE_AMP$1 = /&amp;/g;
function decodeHtml(html) {
  return html.replace(RE_LT$1, "<").replace(RE_GT$1, ">").replace(RE_CENT, "\xA2").replace(RE_POUND, "\xA3").replace(RE_YEN, "\xA5").replace(RE_EURO, "\u20AC").replace(RE_COPY, "\xA9").replace(RE_REG, "\xAE").replace(RE_QUOT, '"').replace(RE_APOS_DEC, "'").replace(RE_APOS_HEX, "'").replace(RE_SLASH_HEX, "/").replace(RE_DEC_ENTITY, (full, int) => {
    return String.fromCharCode(Number.parseInt(int));
  }).replace(RE_AMP$1, "&");
}

function walkTree(e, node, plugins) {
  const promises = [];
  for (const plugin of plugins.flat()) {
    if (plugin.filter(node)) {
      promises.push(plugin.transform(node, e));
    }
  }
  if (!node.props?.children || !Array.isArray(node.props.children))
    return promises;
  if (node.props.children.length === 0) {
    delete node.props.children;
    return promises;
  }
  for (const child of node.props.children || []) {
    if (child && typeof child === "object") {
      promises.push(
        ...walkTree(e, child, plugins)
      );
    }
  }
  return promises;
}
function defineTransformer(transformer) {
  return transformer;
}

const encoding = defineTransformer([
  // clean up vue inspector data attributes
  {
    filter: (node) => node.props?.["data-v-inspector"],
    transform: (node) => {
      delete node.props["data-v-inspector"];
    }
  },
  // decode HTML entities in string children
  {
    filter: (node) => typeof node.props?.children === "string",
    transform: (node) => {
      node.props.children = decodeHtml(node.props.children);
    }
  },
  // decode HTML entities in array children (text nodes with siblings)
  {
    filter: (node) => Array.isArray(node.props?.children),
    transform: (node) => {
      node.props.children = node.props.children.map(
        (child) => typeof child === "string" ? decodeHtml(child) : child
      );
    }
  }
]);

function getImageDimensions(data) {
  if (data[0] === 137 && data[1] === 80 && data.length >= 24) {
    const width = new DataView(data.buffer, data.byteOffset + 16).getUint32(0, false);
    const height = new DataView(data.buffer, data.byteOffset + 20).getUint32(0, false);
    return { width, height };
  }
  if (data[0] === 255 && data[1] === 216) {
    let i = 2;
    while (i < data.length - 8) {
      if (data[i] === 255) {
        const marker = data[i + 1];
        if (marker >= 192 && marker <= 195 || marker === 201) {
          const height = data[i + 5] << 8 | data[i + 6];
          const width = data[i + 7] << 8 | data[i + 8];
          return { width, height };
        }
        const len = data[i + 2] << 8 | data[i + 3];
        i += len + 2;
      } else {
        i++;
      }
    }
  }
  if (data[0] === 71 && data[1] === 73 && data[2] === 70 && data.length >= 10) {
    const width = data[6] | data[7] << 8;
    const height = data[8] | data[9] << 8;
    return { width, height };
  }
  return {};
}

const RE_URL_LEADING = /^url\(['"]?/;
const RE_URL_TRAILING = /['"]?\)$/;
const SUBREQUEST_HEADERS = { "x-nuxt-og-image": "1" };
async function resolveLocalFilePathImage(publicStoragePath, src) {
  const path = parseSameOriginPath(parseURL(src).pathname);
  if (path._tag === "Err")
    return;
  const normalizedSrc = withoutLeadingSlash(
    decodeURIComponent(path.value).replace("_nuxt/@fs/", "").replace("_nuxt/", "").replace("./", "")
  ).replaceAll("/", ":");
  const key = `${publicStoragePath}:${normalizedSrc}`;
  if (await useStorage().hasItem(key))
    return await useStorage().getItemRaw(key);
}
function toBufferSourceAsBase64(buf) {
  const ab = buf instanceof ArrayBuffer ? buf : ArrayBuffer.isView(buf) ? buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) : buf;
  return toBase64Image(ab);
}
const renderCaches = /* @__PURE__ */ new WeakMap();
function getRenderCache(e) {
  let cache = renderCaches.get(e);
  if (!cache) {
    cache = /* @__PURE__ */ new Map();
    renderCaches.set(e, cache);
  }
  return cache;
}
function resolveSrcToBuffer(src, kind, ctx) {
  const cache = getRenderCache(ctx.e);
  const existing = cache.get(src);
  if (existing)
    return existing;
  const promise = doResolveSrcToBuffer(src, kind, ctx);
  cache.set(src, promise);
  return promise;
}
async function doResolveSrcToBuffer(src, kind, { e, publicStoragePath, runtimeConfig, timings }) {
  const fetchTimeout = getFetchTimeout(runtimeConfig);
  const logFailure = (url, err) => {
    logger$2.debug(`[og-image] ${kind} fetch failed (${url}): ${err?.message || err}`);
  };
  if (src.startsWith("/")) {
    if (!resolveSameOriginUrl(src, getOgImageOrigin(e)))
      return { blocked: true };
    let buffer2;
    {
      const srcWithoutBase = src.replace(runtimeConfig.app.baseURL, "/");
      buffer2 = await resolveLocalFilePathImage(publicStoragePath, srcWithoutBase);
    }
    if (!buffer2 && true) {
      const ab = await timings.measure("image-fetch", () => fetchLocalAsset(e, src, {
        fetchTimeout,
        headers: SUBREQUEST_HEADERS,
        includeExternalFallback: true,
        onStepFailure: logFailure
      }));
      if (ab)
        buffer2 = new Uint8Array(ab);
    }
    return buffer2 ? { buffer: buffer2 } : {};
  }
  const decodedSrc = decodeHtml(src);
  const end = timings.start("image-fetch");
  let buffer;
  {
    buffer = await $fetch(decodedSrc, {
      responseType: "arrayBuffer",
      timeout: fetchTimeout
    }).catch((err) => {
      logFailure(decodedSrc, err);
    }).finally(end);
  }
  return buffer ? { buffer } : {};
}
function applyImageDimensions(node, buffer) {
  if (typeof node.props.width === "string")
    node.props.width = Number(node.props.width) || void 0;
  if (typeof node.props.height === "string")
    node.props.height = Number(node.props.height) || void 0;
  if (node.props.width && node.props.height)
    return;
  const view = buffer instanceof Uint8Array ? buffer : ArrayBuffer.isView(buffer) ? new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) : new Uint8Array(buffer);
  const dimensions = getImageDimensions(view);
  if (!dimensions?.width || !dimensions?.height)
    return;
  const naturalAspectRatio = dimensions.width / dimensions.height;
  if (node.props.width && !node.props.height) {
    node.props.height = Math.round(node.props.width / naturalAspectRatio);
  } else if (node.props.height && !node.props.width) {
    node.props.width = Math.round(node.props.height * naturalAspectRatio);
  } else {
    node.props.width = dimensions.width;
    node.props.height = dimensions.height;
  }
}
const imageSrc = defineTransformer([
  // fix <img src="">
  {
    filter: (node) => node.type === "img" && node.props?.src,
    transform: async (node, ctx) => {
      let src = node.props.src;
      if (src.startsWith("data:"))
        return;
      const isRelative = src.startsWith("/");
      if (!isRelative)
        src = node.props.src = decodeHtml(src);
      const result = await resolveSrcToBuffer(src, "image", ctx);
      if (result.blocked) {
        delete node.props.src;
        return;
      }
      if (result.buffer) {
        node.props.src = toBufferSourceAsBase64(result.buffer);
        applyImageDimensions(node, result.buffer);
        return;
      }
      if (isRelative && true) {
        node.props.src = withBase(src, `${getOgImageOrigin(ctx.e)}`);
        return;
      }
    }
  },
  // fix style="background-image: url('')"
  {
    filter: (node) => node.props?.style?.backgroundImage?.includes("url("),
    transform: async (node, ctx) => {
      const backgroundImage = node.props.style.backgroundImage;
      const src = backgroundImage.replace(RE_URL_LEADING, "").replace(RE_URL_TRAILING, "");
      if (src.startsWith("data:"))
        return;
      const result = await resolveSrcToBuffer(src, "background-image", ctx);
      if (result.blocked) {
        delete node.props.style.backgroundImage;
        return;
      }
      if (result.buffer) {
        node.props.style.backgroundImage = `url(${toBufferSourceAsBase64(result.buffer)})`;
        return;
      }
    }
  }
]);

const tw4Breakpoints = {};

const DEFAULT_BREAKPOINTS = {
  "sm": 640,
  "md": 768,
  "lg": 1024,
  "xl": 1280,
  "2xl": 1536
};
const BREAKPOINTS = { ...DEFAULT_BREAKPOINTS, ...tw4Breakpoints };
const RESPONSIVE_PREFIX_RE = /^(sm|md|lg|xl|2xl):(.+)$/;
const DARK_MODE_PREFIX_RE = /^dark:(.+)$/;
const GAP_CLASS_RE = /^gap(?:-(x|y))?-(\d+(?:\.\d+)?)$/;
const GAP_ARBITRARY_RE = /^gap(?:-(x|y))?-\[(.+)\]$/;
const TEXT_SIZE_RE = /^(?:xs|sm|base|lg|xl|\d+xl)$/;
const BORDER_WIDTH_RE = /^\d+$/;
const BORDER_SIDE_RE = /^[trblxy](?:-\d+)?$/;
const RING_WIDTH_RE = /^\d+$/;
const DIVIDE_SIDE_RE = /^[xy](?:-\d+)?$/;
const DIVIDE_NUMERIC_RE = /^\d+$/;
const OUTLINE_NUMERIC_RE = /^\d+$/;
const OUTLINE_STYLE_RE = /^(?:none|dashed|dotted|double)$/;
function resolveGapToStyle(cls, style) {
  const match = cls.match(GAP_CLASS_RE);
  if (match) {
    const axis = match[1];
    const value = Number(match[2]);
    if (axis === "x")
      style.columnGap = value;
    else if (axis === "y")
      style.rowGap = value;
    else style.gap = value;
    return true;
  }
  const arbMatch = cls.match(GAP_ARBITRARY_RE);
  if (arbMatch) {
    const axis = arbMatch[1];
    const value = arbMatch[2];
    if (axis === "x")
      style.columnGap = value;
    else if (axis === "y")
      style.rowGap = value;
    else style.gap = value;
    return true;
  }
  return false;
}
const DISPLAY_CLASSES = /* @__PURE__ */ new Set([
  "hidden",
  "block",
  "flex",
  "grid",
  "inline",
  "inline-flex",
  "inline-block",
  "inline-grid",
  "contents",
  "table",
  "flow-root",
  "list-item"
]);
const OVERLOADED_GROUPS = [
  ["text-", (v) => TEXT_SIZE_RE.test(v) ? "text-size" : "text-color"],
  ["border-", (v) => BORDER_WIDTH_RE.test(v) || BORDER_SIDE_RE.test(v) ? "border-width" : "border-color"],
  ["ring-", (v) => RING_WIDTH_RE.test(v) ? "ring-width" : "ring-color"],
  ["divide-", (v) => DIVIDE_SIDE_RE.test(v) || DIVIDE_NUMERIC_RE.test(v) || v === "reverse" ? "divide-width" : "divide-color"],
  ["outline-", (v) => OUTLINE_NUMERIC_RE.test(v) || OUTLINE_STYLE_RE.test(v) ? "outline-style" : "outline-color"]
];
function getUtilityGroup(cls) {
  if (DISPLAY_CLASSES.has(cls))
    return "display";
  if (cls.includes("["))
    return `${cls.slice(0, cls.indexOf("["))}-arbitrary`;
  for (const [prefix, resolver] of OVERLOADED_GROUPS) {
    if (cls === prefix.slice(0, -1) || cls.startsWith(prefix)) {
      return resolver(cls.slice(prefix.length));
    }
  }
  const dashIdx = cls.indexOf("-");
  return dashIdx === -1 ? cls : cls.slice(0, dashIdx);
}
function resolveDarkToken(baseClass, renderWidth) {
  const respMatch = baseClass.match(RESPONSIVE_PREFIX_RE);
  if (respMatch) {
    const bp = respMatch[1];
    const finalClass = respMatch[2];
    const breakpointWidth = BREAKPOINTS[bp];
    return breakpointWidth && renderWidth >= breakpointWidth ? finalClass : null;
  }
  return baseClass;
}
const styleDirectives = defineTransformer({
  filter: (node) => !!node.props?.class,
  transform: (node, ctx) => {
    const classes = node.props.class || "";
    const renderWidth = Number(ctx.options.width) || 1200;
    const isDarkMode = ctx.options.props?.colorMode === "dark";
    const tokens = classes.split(" ").filter((c) => c.trim());
    const darkOverrideGroups = /* @__PURE__ */ new Set();
    const responsiveOverrideGroups = /* @__PURE__ */ new Set();
    for (const token of tokens) {
      if (isDarkMode) {
        const darkMatch = token.match(DARK_MODE_PREFIX_RE);
        if (darkMatch) {
          const resolved = resolveDarkToken(darkMatch[1], renderWidth);
          if (resolved)
            darkOverrideGroups.add(getUtilityGroup(resolved));
          continue;
        }
      }
      const respMatch = token.match(RESPONSIVE_PREFIX_RE);
      if (respMatch) {
        const bp = respMatch[1];
        const baseClass = respMatch[2];
        const breakpointWidth = BREAKPOINTS[bp];
        if (breakpointWidth && renderWidth >= breakpointWidth)
          responsiveOverrideGroups.add(getUtilityGroup(baseClass));
      }
    }
    const processedClasses = [];
    const gapStyles = {};
    for (const token of tokens) {
      const darkMatch = token.match(DARK_MODE_PREFIX_RE);
      if (darkMatch) {
        if (isDarkMode) {
          const resolved = resolveDarkToken(darkMatch[1], renderWidth);
          if (resolved) {
            if (!resolveGapToStyle(resolved, gapStyles))
              processedClasses.push(resolved);
          }
        }
        continue;
      }
      const respMatch = token.match(RESPONSIVE_PREFIX_RE);
      if (respMatch) {
        const bp = respMatch[1];
        const baseClass = respMatch[2];
        const breakpointWidth = BREAKPOINTS[bp];
        if (breakpointWidth && renderWidth >= breakpointWidth) {
          if (isDarkMode && darkOverrideGroups.has(getUtilityGroup(baseClass)))
            continue;
          if (!resolveGapToStyle(baseClass, gapStyles))
            processedClasses.push(baseClass);
        }
      } else {
        const group = getUtilityGroup(token);
        if (isDarkMode && darkOverrideGroups.has(group) || responsiveOverrideGroups.has(group))
          continue;
        if (!resolveGapToStyle(token, gapStyles))
          processedClasses.push(token);
      }
    }
    if (Object.keys(gapStyles).length > 0) {
      node.props.style = { ...node.props.style, ...gapStyles };
    }
    node.props.class = processedClasses.join(" ");
  }
});

function splitCssDeclarations(style) {
  const declarations = [];
  let current = "";
  let parenDepth = 0;
  let inSingleQuote = false;
  let inDoubleQuote = false;
  for (let i = 0; i < style.length; i++) {
    const char = style[i];
    if (char === "'" && !inDoubleQuote) {
      inSingleQuote = !inSingleQuote;
    } else if (char === '"' && !inSingleQuote) {
      inDoubleQuote = !inDoubleQuote;
    } else if (!inSingleQuote && !inDoubleQuote) {
      if (char === "(") {
        parenDepth++;
      } else if (char === ")") {
        parenDepth = Math.max(0, parenDepth - 1);
      } else if (char === ";" && parenDepth === 0) {
        if (current.trim())
          declarations.push(current);
        current = "";
        continue;
      }
    }
    current += char;
  }
  if (current.trim())
    declarations.push(current);
  return declarations;
}

const RE_KEBAB_SEGMENT = /-([a-z])/g;
const RE_CSS_QUOTES = /^['"](.+)['"]$/;
const RE_IMPORTANT = /\s*!important\s*$/;
const RE_HTML_ENTITY = /&(?:amp|quot|#39|#x27);/g;
const HTML_ENTITY_MAP = {
  "&amp;": "&",
  "&quot;": '"',
  "&#39;": "'",
  "&#x27;": "'"
};
function camelCase(str) {
  return str.replace(RE_KEBAB_SEGMENT, (_, c) => c.toUpperCase());
}
function decodeHtmlEntities(value) {
  return value.replace(RE_HTML_ENTITY, (m) => HTML_ENTITY_MAP[m] ?? m);
}
function parseStyleAttr(style) {
  if (!style)
    return void 0;
  const result = {};
  for (const decl of splitCssDeclarations(decodeHtmlEntities(style))) {
    const colonIdx = decl.indexOf(":");
    if (colonIdx === -1)
      continue;
    const prop = decl.slice(0, colonIdx).trim();
    const val = decl.slice(colonIdx + 1).trim();
    if (prop && val) {
      const cleanVal = val.replace(RE_IMPORTANT, "");
      result[camelCase(prop)] = prop === "font-family" ? cleanVal.replace(RE_CSS_QUOTES, "$1") : cleanVal;
    }
  }
  return Object.keys(result).length ? result : void 0;
}

const RE_BODY_CONTENT = /<body>([\s\S]*)<\/body>/;
const SVG_CAMEL_ATTRS = {
  viewbox: "viewBox",
  preserveaspectratio: "preserveAspectRatio",
  basefrequency: "baseFrequency",
  baseprofile: "baseProfile",
  clippathunits: "clipPathUnits",
  diffuseconstant: "diffuseConstant",
  edgemode: "edgeMode",
  filterunits: "filterUnits",
  glyphref: "glyphRef",
  gradienttransform: "gradientTransform",
  gradientunits: "gradientUnits",
  kernelmatrix: "kernelMatrix",
  kernelunitlength: "kernelUnitLength",
  keypoints: "keyPoints",
  keysplines: "keySplines",
  keytimes: "keyTimes",
  lengthadjust: "lengthAdjust",
  limitingconeangle: "limitingConeAngle",
  markerheight: "markerHeight",
  markerunits: "markerUnits",
  markerwidth: "markerWidth",
  maskcontentunits: "maskContentUnits",
  maskunits: "maskUnits",
  numoctaves: "numOctaves",
  pathlength: "pathLength",
  patterncontentunits: "patternContentUnits",
  patterntransform: "patternTransform",
  patternunits: "patternUnits",
  pointsatx: "pointsAtX",
  pointsaty: "pointsAtY",
  pointsatz: "pointsAtZ",
  repeatcount: "repeatCount",
  repeatdur: "repeatDur",
  requiredextensions: "requiredExtensions",
  specularconstant: "specularConstant",
  specularexponent: "specularExponent",
  spreadmethod: "spreadMethod",
  startoffset: "startOffset",
  stddeviation: "stdDeviation",
  stitchtiles: "stitchTiles",
  surfacescale: "surfaceScale",
  systemlanguage: "systemLanguage",
  tablevalues: "tableValues",
  targetx: "targetX",
  targety: "targetY",
  textlength: "textLength",
  xchannelselector: "xChannelSelector",
  ychannelselector: "yChannelSelector",
  zoomandpan: "zoomAndPan"
};
const SVG_CAMEL_ATTR_VALUES = new Set(Object.values(SVG_CAMEL_ATTRS));
const RE_PERCENT = /^\d+%$/;
const RE_VIEWBOX_SEP = /[\s,]+/;
function resolveSvgDimension(props, style, key) {
  const attr = props[key];
  if (attr != null && !RE_PERCENT.test(String(attr))) {
    const n = Number(attr);
    if (!Number.isNaN(n))
      return n;
  }
  const sv = style?.[key];
  if (sv != null) {
    const n = typeof sv === "number" ? sv : Number.parseInt(String(sv));
    if (!Number.isNaN(n))
      return n;
  }
  const vb = props.viewBox || props.viewbox;
  if (typeof vb === "string") {
    const parts = vb.split(RE_VIEWBOX_SEP);
    if (parts.length === 4) {
      const n = Number(parts[key === "width" ? 2 : 3]);
      if (!Number.isNaN(n))
        return n;
    }
  }
}
function elementToVNode(el) {
  const props = {};
  const { style, ...attrs } = el.attributes;
  const parsedStyle = parseStyleAttr(style);
  if (parsedStyle)
    props.style = parsedStyle;
  for (const [name, value] of Object.entries(attrs)) {
    const key = SVG_CAMEL_ATTRS[name] || name;
    props[key] = typeof value === "string" ? decodeHtml(value) : value;
  }
  const children = [];
  for (const child of el.children) {
    if (child.type === ELEMENT_NODE) {
      children.push(elementToVNode(child));
    } else if (child.type === TEXT_NODE) {
      const text = child.value;
      if (text.trim())
        children.push(text);
    }
  }
  if (children.length)
    props.children = children;
  return { type: el.name, props };
}
function htmlToVNode(html) {
  const doc = parse$1(html);
  const root = querySelector(doc, "div");
  if (!root)
    throw new Error("Failed to parse HTML - no root div found");
  return elementToVNode(root);
}
function omitImagesWithoutSource(node) {
  const children = node.props.children;
  if (!Array.isArray(children))
    return;
  node.props.children = children.filter((child) => {
    if (!child || typeof child !== "object")
      return true;
    if (child.type === "img" && !child.props.src)
      return false;
    omitImagesWithoutSource(child);
    return true;
  });
  if (node.props.children.length === 0)
    delete node.props.children;
}
const UNSUPPORTED_SVG_ELEMENTS = /* @__PURE__ */ new Set(["text", "tspan", "textPath", "foreignObject", "switch", "a"]);
function warnUnsupportedSvgElements(vnode, component) {
  const unsupported = /* @__PURE__ */ new Set();
  const collectUnsupported = (node) => {
    if (UNSUPPORTED_SVG_ELEMENTS.has(node.type))
      unsupported.add(`<${node.type}>`);
    if (Array.isArray(node.props?.children)) {
      for (const child of node.props.children) {
        if (child && typeof child === "object")
          collectUnsupported(child);
      }
    }
  };
  const walk = (node) => {
    if (node.type === "svg") {
      collectUnsupported(node);
    } else if (Array.isArray(node.props?.children)) {
      for (const child of node.props.children) {
        if (child && typeof child === "object")
          walk(child);
      }
    }
  };
  walk(vnode);
  if (unsupported.size) {
    const elements = [...unsupported].join(", ");
    const source = component ? ` in "${component}"` : "";
    logger$2.warn(`SVG ${elements} elements${source} are not supported by image renderers and will not be displayed. Convert text to <path> elements instead.`);
  }
}
async function createVNodes(ctx, options) {
  let html = ctx.options.html;
  if (html) {
    logger$2.warn("The `html` option is deprecated and will be removed in the next major version. Use a Vue component instead.");
  }
  if (!html) {
    const islandTimeout = ctx.runtimeConfig.security?.renderTimeout ?? 15e3;
    const island = await ctx.timings.measure("island-fetch", () => fetchIsland(ctx.e, ctx.options.component, typeof ctx.options.props !== "undefined" ? ctx.options.props : ctx.options, islandTimeout));
    html = island.html;
    if (html?.includes("<body>")) {
      html = html.match(RE_BODY_CONTENT)?.[1] || "";
    }
  }
  const content = { html };
  await applyEmojis(ctx, content);
  html = content.html;
  const baseStyle = `position: relative; display: flex; margin: 0 auto; width: ${ctx.options.width}px; height: ${ctx.options.height}px; overflow: hidden;`;
  const fullStyle = baseStyle;
  const template = `<div style="${fullStyle}">${html}</div>`;
  const vnodeTree = htmlToVNode(template);
  const rootChild = vnodeTree.props.children?.[0];
  if (rootChild && typeof rootChild === "object") {
    rootChild.props.style = { width: "100%", height: "100%", ...rootChild.props.style };
  }
  warnUnsupportedSvgElements(vnodeTree, ctx.options.component);
  await ctx.timings.measure("vnode-walk", () => Promise.all(walkTree(ctx, vnodeTree, [encoding, styleDirectives, imageSrc])));
  omitImagesWithoutSource(vnodeTree);
  return vnodeTree;
}

const RE_RELATIVE_UNIT = /^[\d.]+r?em$/;
const RE_LEADING_SPACE = /^\s/;
const RE_TRAILING_SPACE = /\s$/;
const RE_UPPERCASE = /[A-Z]/g;
const RE_DQUOTE = /"/g;
const RE_AMP = /&/g;
const RE_LT = /</g;
const RE_GT = />/g;
async function createTakumiNodes(ctx) {
  const vnodeTree = await createVNodes(ctx);
  return await ctx.timings.measure("takumi-nodes", () => vnodeToTakumiNode(vnodeTree));
}
function pickNumericDimension(props, key) {
  const v = props[key];
  if (v == null)
    return void 0;
  const n = Number(v);
  return Number.isNaN(n) ? void 0 : n;
}
function extractColor(style) {
  const color = style?.color;
  return typeof color === "string" && color ? color : void 0;
}
async function vnodeToTakumiNode(vnode, inheritedColor) {
  const { style, children, class: cls, tw, src, ...rest } = vnode.props;
  const nodeColor = extractColor(style) ?? inheritedColor;
  const baseMetadata = {
    tw: tw || cls || void 0,
    style
  };
  if (vnode.type === "svg") {
    const relativeW = RE_RELATIVE_UNIT.test(String(rest.width ?? "")) ? String(rest.width) : void 0;
    const relativeH = RE_RELATIVE_UNIT.test(String(rest.height ?? "")) ? String(rest.height) : void 0;
    const imageStyle = relativeW || relativeH ? { ...style, ...relativeW && style?.width == null ? { width: relativeW } : {}, ...relativeH && style?.height == null ? { height: relativeH } : {} } : style;
    return {
      ...baseMetadata,
      style: imageStyle,
      type: "image",
      src: vnodeToHtmlString(vnode, nodeColor),
      width: relativeW ? void 0 : resolveSvgDimension(rest, style, "width"),
      height: relativeH ? void 0 : resolveSvgDimension(rest, style, "height")
    };
  }
  if (vnode.type === "img") {
    return {
      ...baseMetadata,
      type: "image",
      src: src || rest.href || "",
      width: pickNumericDimension(rest, "width"),
      height: pickNumericDimension(rest, "height")
    };
  }
  const containerStyle = { ...style };
  const w = pickNumericDimension(rest, "width");
  const h = pickNumericDimension(rest, "height");
  if (w != null && !containerStyle.width)
    containerStyle.width = w;
  if (h != null && !containerStyle.height)
    containerStyle.height = h;
  const hasStyle = Object.keys(containerStyle).length > 0;
  const containerMetadata = {
    tw: baseMetadata.tw,
    style: hasStyle ? containerStyle : void 0
  };
  const textContent = typeof children === "string" ? children : Array.isArray(children) && children.length >= 1 && children.every((c) => typeof c === "string") ? children.join("") : void 0;
  if (textContent !== void 0) {
    return {
      ...containerMetadata,
      type: "text",
      text: textContent
    };
  }
  if (Array.isArray(children)) {
    const takumiChildren = [];
    const isInlineImage = (c) => !!c && typeof c === "object" && ["svg", "img"].includes(c.type);
    for (const [i, child] of children.entries()) {
      if (child && typeof child === "object") {
        takumiChildren.push(await vnodeToTakumiNode(child, nodeColor));
      } else if (typeof child === "string" && child.trim()) {
        const start = isInlineImage(children[i - 1]) && RE_LEADING_SPACE.test(child) ? " " : "";
        const end = isInlineImage(children[i + 1]) && RE_TRAILING_SPACE.test(child) ? " " : "";
        takumiChildren.push({ type: "text", text: `${start}${child.trim()}${end}` });
      }
    }
    return {
      ...containerMetadata,
      type: "container",
      children: takumiChildren.length ? takumiChildren : void 0
    };
  }
  return {
    ...containerMetadata,
    type: "container"
  };
}
function resolveCurrentColor(value, color) {
  return color && typeof value === "string" && value.toLowerCase() === "currentcolor" ? color : value;
}
function vnodeToHtmlString(vnode, inheritedColor) {
  const { style, children, ...attrs } = vnode.props;
  const attrParts = [];
  const nodeColor = extractColor(style) ?? inheritedColor;
  const kebabCase = (str) => str.replace(RE_UPPERCASE, (m) => `-${m.toLowerCase()}`);
  if (vnode.type === "svg") {
    if (!attrs.xmlns)
      attrParts.push('xmlns="http://www.w3.org/2000/svg"');
    if (!attrs.width && vnode.props.width)
      attrParts.push(`width="${vnode.props.width}"`);
    if (!attrs.height && vnode.props.height)
      attrParts.push(`height="${vnode.props.height}"`);
  }
  const resolveValue = (val) => {
    if (typeof val === "string") {
      if (val.includes("calc("))
        return val;
      if (val.endsWith("em") || val.endsWith("rem")) {
        const num = Number.parseFloat(val);
        return !Number.isNaN(num) ? `${num * 16}px` : val;
      }
    }
    return val;
  };
  if (style && typeof style === "object") {
    const styleStr = Object.entries(style).filter(([_, v]) => v !== void 0 && v !== null && v !== "").map(([k, v]) => `${kebabCase(k)}:${resolveValue(resolveCurrentColor(v, nodeColor))}`).join(";");
    if (styleStr)
      attrParts.push(`style="${styleStr.replace(RE_DQUOTE, "&quot;")}"`);
  } else if (typeof style === "string") {
    attrParts.push(`style="${style.replace(RE_DQUOTE, "&quot;")}"`);
  }
  for (const [key, val] of Object.entries(attrs)) {
    if (key === "tw" || key === "class" || val == null)
      continue;
    const finalKey = SVG_CAMEL_ATTR_VALUES.has(key) ? key : kebabCase(key);
    attrParts.push(`${finalKey}="${String(resolveValue(resolveCurrentColor(val, nodeColor))).replace(RE_DQUOTE, "&quot;")}"`);
  }
  const open = attrParts.length ? `<${vnode.type} ${attrParts.join(" ")}>` : `<${vnode.type}>`;
  const inner = Array.isArray(children) ? children.map((c) => {
    if (typeof c === "string")
      return c.replace(RE_AMP, "&amp;").replace(RE_LT, "&lt;").replace(RE_GT, "&gt;");
    if (c && typeof c === "object")
      return vnodeToHtmlString(c, nodeColor);
    return "";
  }).join("") : typeof children === "string" ? children.replace(RE_AMP, "&amp;").replace(RE_LT, "&lt;").replace(RE_GT, "&gt;") : "";
  return `${open}${inner}</${vnode.type}>`;
}

const RE_QUOTES = /['"]/g;
async function getTakumiState(event) {
  const nitro = event._nitro;
  if (nitro._takumiState)
    return nitro._takumiState;
  const Renderer = await getTakumi();
  nitro._takumiState = {
    renderer: new Renderer(),
    lock: Promise.resolve()
  };
  return nitro._takumiState;
}
function withTakumiLock(state, timeoutMs, fn, onLockTimeout) {
  const guarded = async () => {
    let timer;
    try {
      return await Promise.race([
        fn(),
        new Promise((_, reject) => {
          timer = setTimeout(
            () => reject(new Error(`takumi render timed out after ${timeoutMs}ms (lock-held)`)),
            timeoutMs
          );
        })
      ]);
    } catch (err) {
      try {
        const Renderer = await getTakumi();
        state.renderer = new Renderer();
      } catch (resetErr) {
        logger.warn(`failed to reset takumi renderer after lock timeout: ${resetErr?.message || resetErr}`);
      }
      throw err;
    } finally {
      clearTimeout(timer);
    }
  };
  const work = state.lock.then(guarded, guarded);
  state.lock = work.catch((err) => {
  });
  let acquireTimer;
  return Promise.race([
    work,
    new Promise((_, reject) => {
      acquireTimer = setTimeout(() => {
        onLockTimeout?.();
        reject(new Error(`takumi lock acquire timed out after ${timeoutMs}ms`));
      }, timeoutMs);
    })
  ]).finally(() => clearTimeout(acquireTimer));
}
function dedupeFontsByBinary(fonts) {
  const byBinary = /* @__PURE__ */ new Map();
  for (const font of fonts) {
    if (!font.data)
      continue;
    const binaryKey = `${font.family}|${font.style || "normal"}|${font.src || ""}`;
    const existing = byBinary.get(binaryKey);
    if (existing) {
      existing.weights.add(font.weight);
      if (font.weightRange)
        existing.hasRange = true;
    } else {
      byBinary.set(binaryKey, {
        family: font.family,
        style: font.style,
        data: font.data,
        weights: /* @__PURE__ */ new Set([font.weight]),
        hasRange: !!font.weightRange
      });
    }
  }
  const result = [];
  for (const [binaryKey, entry] of byBinary) {
    const isVariable = entry.weights.size > 1 || entry.hasRange;
    result.push({
      binaryKey,
      family: entry.family,
      style: entry.style,
      data: entry.data,
      weight: isVariable ? void 0 : [...entry.weights][0]
    });
  }
  return result;
}
function toUint8Array(data) {
  if (data instanceof Uint8Array)
    return data;
  if (data instanceof ArrayBuffer)
    return new Uint8Array(data);
  return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
}
function createFontDescriptor(entry) {
  return {
    key: entry.binaryKey,
    name: entry.family,
    data: toUint8Array(entry.data),
    ...entry.weight !== void 0 ? { weight: entry.weight } : {},
    ...entry.style ? { style: entry.style } : {}
  };
}
function normalizeImageSources(images) {
  return (images || []).map((image) => ({
    src: image.src,
    data: image.data instanceof Uint8Array ? image.data : new Uint8Array(image.data)
  }));
}
function lookupFontFamily(family, loadedFamilies) {
  if (loadedFamilies.has(family))
    return family;
  for (const loaded of loadedFamilies) {
    if (loaded.toLowerCase() === family.toLowerCase())
      return loaded;
  }
}
function rewriteFontFamilies(node, loadedFamilies, subsetChains) {
  if (node.style?.fontFamily) {
    const families = node.style.fontFamily.split(",").map((f) => f.trim().replace(RE_QUOTES, ""));
    const resolved = [];
    const seen = /* @__PURE__ */ new Set();
    const addUnique = (name) => {
      if (!seen.has(name.toLowerCase())) {
        resolved.push(name);
        seen.add(name.toLowerCase());
      }
    };
    for (const f of families) {
      const chain = resolveSubsetChain(f, subsetChains);
      if (chain) {
        chain.forEach(addUnique);
        continue;
      }
      addUnique(lookupFontFamily(f, loadedFamilies) || f);
    }
    for (const family of loadedFamilies)
      addUnique(family);
    node.style.fontFamily = resolved.map((f) => `"${f}"`).join(", ");
  }
  if ("children" in node && node.children) {
    for (const child of node.children)
      rewriteFontFamilies(child, loadedFamilies, subsetChains);
  }
}
async function createImage(event, format) {
  const { options, timings } = event;
  const { fontFamilyOverride, defaultFont } = getDefaultFontFamily(options);
  const nodes = await createTakumiNodes(event);
  const codepoints = extractCodepoints(nodes);
  const fonts = await timings.measure("font-load", () => loadFontsForRenderer(event, { supportedFormats: TAKUMI_FORMATS, component: options.component, fontFamilyOverride: fontFamilyOverride || defaultFont, codepoints }));
  const fontEntries = dedupeFontsByBinary(fonts);
  const hookTimeout = event.runtimeConfig.security?.renderTimeout ?? 15e3;
  await withTimeout(
    event._nitro.hooks.callHook("nuxt-og-image:takumi:nodes", nodes, event),
    hookTimeout,
    "nuxt-og-image:takumi:nodes hook"
  );
  const subsetChains = buildSubsetFamilyChain(fonts);
  const state = await timings.measure("takumi-init", () => getTakumiState(event));
  const extractResourceUrls = await timings.measure("takumi-extract-init", () => getExtractResourceUrls());
  const resourceUrls = await extractResourceUrls(nodes);
  const baseURL = event.runtimeConfig.app.baseURL;
  const { images: optionImages, ...takumiOptions } = options.takumi || {};
  const images = [
    ...normalizeImageSources(optionImages)
  ];
  if (resourceUrls.length) {
    const fetchTimeout = getFetchTimeout(event.runtimeConfig);
    const headers = { "x-nuxt-og-image": "1" };
    await timings.measure("resource-fetch", () => Promise.all(resourceUrls.map(async (src) => {
      let data;
      if (src.startsWith("/")) {
        const path = withBase(src, baseURL);
        data = await fetchLocalAsset(event.e, path, {
          fetchTimeout,
          headers,
          includeExternalFallback: true
        });
      } else {
        data = await $fetch(src, {
          responseType: "arrayBuffer",
          signal: AbortSignal.timeout(fetchTimeout),
          timeout: fetchTimeout,
          headers
        }).catch((err) => {
          return void 0;
        });
      }
      if (data)
        images.push({ src, data: new Uint8Array(data) });
    })));
  }
  const maxDpr = event.runtimeConfig.security?.maxDpr || 2;
  const maxDim = event.runtimeConfig.security?.maxDimension || 2048;
  const dpr = Math.min(Math.max(1, options.takumi?.devicePixelRatio ?? 1), maxDpr);
  const renderOptions = defu$1(takumiOptions, {
    width: Math.min(Number(options.width) * dpr, maxDim),
    height: Math.min(Number(options.height) * dpr, maxDim),
    format,
    images,
    devicePixelRatio: dpr
  });
  const lockTimeout = event.runtimeConfig.security?.renderTimeout ?? 15e3;
  const endLockWait = timings.start("lock-wait");
  return await withTakumiLock(state, lockTimeout, () => {
    endLockWait();
    return timings.measure("render-takumi", async () => {
      const loadedFamilies = new Set(fontEntries.map((entry) => entry.family));
      renderOptions.fonts = fontEntries.map((entry) => createFontDescriptor(entry));
      renderOptions.fontFamilies = [...loadedFamilies];
      const rootStyle = nodes.style ?? {};
      if (fontFamilyOverride) {
        const chain = subsetChains.get(fontFamilyOverride);
        if (chain) {
          rootStyle.fontFamily = chain.map((f) => `"${f}"`).join(", ");
        } else if (loadedFamilies.has(fontFamilyOverride)) {
          rootStyle.fontFamily = fontFamilyOverride;
        }
      }
      nodes.style = rootStyle;
      rewriteFontFamilies(nodes, loadedFamilies, subsetChains);
      return await state.renderer.render(nodes, renderOptions);
    });
  }, endLockWait);
}
const TakumiRenderer = {
  name: "takumi",
  supportedFormats: ["png", "jpeg", "jpg", "webp", "json"],
  async createImage(e) {
    switch (e.extension) {
      case "png":
        return createImage(e, "png");
      case "jpeg":
      case "jpg":
        return createImage(e, "jpeg");
      case "webp":
        return createImage(e, "webp");
    }
  },
  async debug(e) {
    const [vnodes, fonts] = await Promise.all([
      createTakumiNodes(e),
      loadFontsForRenderer(e, { supportedFormats: TAKUMI_FORMATS, component: e.options.component })
    ]);
    return {
      vnodes,
      fonts: fonts.map(({ data, ...f }) => ({
        ...f,
        size: data.byteLength
      }))
    };
  }
};

const renderer = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: TakumiRenderer
}, Symbol.toStringTag, { value: 'Module' }));

function toError(reason) {
  return reason instanceof Error ? reason : new Error(String(reason));
}
function parseWorkerEvent(message) {
  if (!message || typeof message !== "object" || !("_tag" in message))
    return;
  if (message._tag === "ready")
    return { _tag: "ready" };
  if (message._tag !== "response" || !("id" in message) || typeof message.id !== "number" || !("payload" in message))
    return;
  return { _tag: "response", id: message.id, payload: message.payload };
}
function parseWorkerTimeout(value, fallback = 3e4) {
  const timeout = Number(value);
  return Number.isSafeInteger(timeout) && timeout > 0 ? timeout : fallback;
}
function createWorkerQueue(options) {
  const maxAttempts = options.maxAttempts ?? 2;
  const queue = [];
  let active = { _tag: "idle" };
  let workerState = { _tag: "stopped" };
  let requestId = 0;
  let workerGeneration = 0;
  let stopped = false;
  function stopWorker() {
    if (workerState._tag === "stopped")
      return;
    const state = workerState;
    workerState = { _tag: "stopped" };
    if (state._tag === "starting")
      clearTimeout(state.timer);
    state.worker.removeAllListeners();
    void state.worker.terminate().catch(() => {
    });
  }
  function takeActive() {
    if (active._tag === "idle")
      return;
    const state = active;
    active = { _tag: "idle" };
    if (state._tag === "running")
      clearTimeout(state.timer);
    return state.job;
  }
  function continueQueue() {
    queueMicrotask(processQueue);
  }
  function failWorker(reason, failedWorker) {
    if (failedWorker && (workerState._tag === "stopped" || workerState.worker !== failedWorker))
      return;
    stopWorker();
    const job = takeActive();
    if (job) {
      if (job.attempts < maxAttempts) {
        job.attempts++;
        queue.unshift(job);
      } else {
        job.reject(toError(reason));
      }
    }
    continueQueue();
  }
  function startWorker() {
    let newWorker;
    try {
      newWorker = options.createWorker();
    } catch (error) {
      failWorker(error);
      return;
    }
    const generation = ++workerGeneration;
    const timer = setTimeout(() => {
      failWorker(new Error(`${options.label} worker startup timed out after ${options.startupTimeout}ms`), newWorker);
    }, options.startupTimeout);
    workerState = { _tag: "starting", generation, timer, worker: newWorker };
    newWorker.on("message", (value) => {
      if (workerState._tag === "stopped" || workerState.worker !== newWorker)
        return;
      const message = parseWorkerEvent(value);
      if (!message)
        return;
      if (message._tag === "ready") {
        if (workerState._tag !== "starting")
          return;
        clearTimeout(workerState.timer);
        workerState = { _tag: "ready", generation, worker: newWorker };
        dispatchActive();
        return;
      }
      if (active._tag !== "running" || active.job.id !== message.id)
        return;
      const job = takeActive();
      job.resolve(message.payload);
      processQueue();
    });
    newWorker.on("error", (error) => failWorker(error, newWorker));
    newWorker.on("exit", (code) => failWorker(new Error(`${options.label} worker exited with code ${code}`), newWorker));
    newWorker.unref();
  }
  function dispatchActive() {
    if (active._tag !== "waiting" || workerState._tag !== "ready")
      return;
    const job = active.job;
    const state = workerState;
    const timer = setTimeout(() => {
      if (active._tag !== "running" || active.job !== job)
        return;
      stopWorker();
      takeActive().reject(new Error(`${options.label} render timed out after ${options.executionTimeout}ms`));
      continueQueue();
    }, options.executionTimeout);
    active = { _tag: "running", job, timer };
    try {
      state.worker.postMessage(job.buildMessage({ id: job.id, generation: state.generation }));
    } catch (error) {
      stopWorker();
      takeActive().reject(toError(error));
      continueQueue();
    }
  }
  function processQueue() {
    if (stopped || active._tag !== "idle")
      return;
    const job = queue.shift();
    if (!job)
      return;
    active = { _tag: "waiting", job };
    if (workerState._tag === "stopped")
      startWorker();
    else if (workerState._tag === "ready")
      dispatchActive();
  }
  function enqueue(buildMessage) {
    if (stopped)
      return Promise.reject(new Error(`${options.label} worker queue is shut down`));
    return new Promise((resolve, reject) => {
      queue.push({ id: ++requestId, buildMessage, resolve, reject, attempts: 1 });
      processQueue();
    });
  }
  function shutdown() {
    stopped = true;
    stopWorker();
    const error = new Error(`${options.label} worker terminated`);
    takeActive()?.reject(error);
    for (const job of queue.splice(0))
      job.reject(error);
  }
  return { enqueue, shutdown };
}

function isWhitespace(char) {
  return char === " " || char === "\n" || char === "	" || char === "\r" || char === "\f";
}
function findUrlFunction(value, start) {
  for (let i = start; i <= value.length - 4; i++) {
    if ((value[i] === "u" || value[i] === "U") && (value[i + 1] === "r" || value[i + 1] === "R") && (value[i + 2] === "l" || value[i + 2] === "L") && value[i + 3] === "(") {
      return i;
    }
  }
  return -1;
}
function readQuotedUrl(value, start, quote) {
  let i = start + 1;
  while (i < value.length) {
    const char = value[i];
    if (char === "\\") {
      i += 2;
      continue;
    }
    if (char === quote) {
      const url = value.slice(start + 1, i);
      i++;
      while (isWhitespace(value[i]))
        i++;
      return value[i] === ")" ? { end: i + 1, url } : null;
    }
    i++;
  }
  return null;
}
function readUnquotedUrl(value, start) {
  const end = value.indexOf(")", start);
  return end === -1 ? null : { end: end + 1, url: value.slice(start, end) };
}
function collectCssUrls(value, urls) {
  let index = 0;
  while (index < value.length) {
    const start = findUrlFunction(value, index);
    if (start === -1)
      return;
    let urlStart = start + 4;
    while (isWhitespace(value[urlStart]))
      urlStart++;
    const quote = value[urlStart];
    const result = quote === "'" || quote === '"' ? readQuotedUrl(value, urlStart, quote) : readUnquotedUrl(value, urlStart);
    if (!result) {
      index = start + 4;
      continue;
    }
    const url = result.url.trim();
    if (isFetchableResourceUrl(url))
      urls.add(url);
    index = result.end;
  }
}
function isFetchableResourceUrl(value) {
  return typeof value === "string" && (value.startsWith("/") || /^https?:\/\//i.test(value));
}
function collectUrlsFromValue(value, urls) {
  if (typeof value !== "string") {
    if (Array.isArray(value)) {
      for (const item of value)
        collectUrlsFromValue(item, urls);
    }
    return;
  }
  collectCssUrls(value, urls);
}
function collectStyleUrls(style, urls) {
  if (!style || typeof style !== "object")
    return;
  for (const value of Object.values(style))
    collectUrlsFromValue(value, urls);
}
function collectNodeUrls(node, urls) {
  collectStyleUrls(node.style, urls);
  collectStyleUrls(node.preset, urls);
  collectUrlsFromValue(node.tw, urls);
  if (node.type === "image" && isFetchableResourceUrl(node.src))
    urls.add(node.src);
  if (node.type === "container") {
    for (const child of node.children || [])
      collectNodeUrls(child, urls);
  }
}
function extractResourceUrls$1(nodes) {
  const urls = /* @__PURE__ */ new Set();
  for (const node of Array.isArray(nodes) ? nodes : [nodes])
    collectNodeUrls(node, urls);
  return [...urls];
}

const workerCode = `
const { createRequire } = require('node:module')
const _require = createRequire(process.cwd() + '/')
const { parentPort } = require('node:worker_threads')
const { Renderer } = _require('@takumi-rs/core')

let renderer = new Renderer()

parentPort.on('message', async ({ id, type, newFonts, nodes, options }) => {
  try {
    const fontWarnings = []
    for (const font of (newFonts || [])) {
      try {
        const registerFont = renderer.registerFont || renderer.loadFont
        if (typeof registerFont !== 'function')
          throw new Error('renderer does not expose loadFont/registerFont')
        await registerFont.call(renderer, {
          name: font.name,
          data: font.data,
          weight: font.weight,
          style: font.style,
        })
      } catch (e) {
        fontWarnings.push({ name: font.name, weight: font.weight, error: e?.message || String(e) })
      }
    }
    const image = await renderer.render(nodes, options)
    // Always slice to create a standard ArrayBuffer \u2014 native addon buffers
    // use external memory that can't be transferred via postMessage
    const ab = image.buffer.slice(image.byteOffset, image.byteOffset + image.byteLength)
    parentPort.postMessage({ _tag: 'response', id, payload: { _tag: 'success', image: ab, fontWarnings } }, [ab])
  } catch (err) {
    parentPort.postMessage({ _tag: 'response', id, payload: { _tag: 'failure', error: err?.message || String(err) } })
  }
})
parentPort.postMessage({ _tag: 'ready' })
`;
const workerTimeout = parseWorkerTimeout(process.env.NUXT_OG_IMAGE_WORKER_TIMEOUT);
const workerQueue = createWorkerQueue({
  createWorker: () => new Worker(workerCode, { eval: true }),
  executionTimeout: workerTimeout,
  startupTimeout: workerTimeout,
  label: "takumi"
});
const signalKey = Symbol.for("og-image:takumi-worker-cleanup");
if (!globalThis[signalKey]) {
  globalThis[signalKey] = true;
  process.on("exit", workerQueue.shutdown);
}
function extractResourceUrls(nodes) {
  return Promise.resolve(extractResourceUrls$1(nodes));
}
class RendererWorkerProxy {
  allFonts = [];
  allFontKeys = /* @__PURE__ */ new Set();
  pendingFonts = [];
  syncedGeneration = -1;
  loadFont(font) {
    const key = `${font.name}|${font.weight || 400}|${font.style || "normal"}`;
    if (this.allFontKeys.has(key))
      return;
    this.allFontKeys.add(key);
    this.allFonts.push(font);
    this.pendingFonts.push(font);
  }
  registerFont(font) {
    this.loadFont(font);
  }
  render(nodes, options) {
    return workerQueue.enqueue(({ id, generation }) => {
      let fontsToSend;
      if (this.syncedGeneration !== generation) {
        fontsToSend = [...this.allFonts];
        this.pendingFonts = [];
      } else {
        fontsToSend = this.pendingFonts.splice(0);
      }
      this.syncedGeneration = generation;
      return { id, type: "render", newFonts: fontsToSend, nodes, options };
    }).then((result) => {
      if (result._tag === "failure")
        throw new Error(result.error);
      if (result.fontWarnings?.length) {
        for (const w of result.fontWarnings)
          console.warn(`[nuxt-og-image] Failed to load font "${w.name}" (weight: ${w.weight}) into takumi renderer: ${w.error}`);
      }
      return Buffer.from(result.image);
    });
  }
}
const nodeDev = {
  initWasmPromise: Promise.resolve(),
  Renderer: RendererWorkerProxy,
  extractResourceUrls
};

const nodeDev$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: nodeDev
}, Symbol.toStringTag, { value: 'Module' }));
//# sourceMappingURL=index.mjs.map
