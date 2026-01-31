// ==UserScript==
// @name         AdBlocker
// @namespace    http://tampermonkey.net/
// @version      2026-01-27
// @description  None
// @author       None
// @match        http://*.skazanie.com/*
// @match        http://*.bbgam.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    // 1. ВСТАВЬТЕ СЮДА СОДЕРЖИМОЕ ФАЙЛА pkg/your_project.js
    // (Скопируйте всё из .js файла, сгенерированного wasm-pack --target no-modules)
    let wasm_bindgen = (function (exports) {
        let script_src;
        if (typeof document !== 'undefined' && document.currentScript !== null) {
            script_src = new URL(document.currentScript.src, location.href).toString();
        }

        /**
         * @param {string} name
         * @returns {string}
         */
        function greet(name) {
            let deferred2_0;
            let deferred2_1;
            try {
                const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len0 = WASM_VECTOR_LEN;
                const ret = wasm.greet(ptr0, len0);
                deferred2_0 = ret[0];
                deferred2_1 = ret[1];
                return getStringFromWasm0(ret[0], ret[1]);
            } finally {
                wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
            }
        }
        exports.greet = greet;

        /**
         * @param {Window} window
         */
        function run(window) {
            const ret = wasm.run(window);
            if (ret[1]) {
                throw takeFromExternrefTable0(ret[0]);
            }
        }
        exports.run = run;

        function __wbg_get_imports() {
            const import0 = {
                __proto__: null,
                __wbg___wbindgen_debug_string_0bc8482c6e3508ae: function (arg0, arg1) {
                    const ret = debugString(arg1);
                    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                    const len1 = WASM_VECTOR_LEN;
                    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
                },
                __wbg___wbindgen_throw_be289d5034ed271b: function (arg0, arg1) {
                    throw new Error(getStringFromWasm0(arg0, arg1));
                },
                __wbg_debug_46a93995fc6f8820: function (arg0, arg1, arg2, arg3) {
                    console.debug(arg0, arg1, arg2, arg3);
                },
                __wbg_document_ee35a3d3ae34ef6c: function (arg0) {
                    const ret = arg0.document;
                    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
                },
                __wbg_error_7534b8e9a36f1ab4: function (arg0, arg1) {
                    let deferred0_0;
                    let deferred0_1;
                    try {
                        deferred0_0 = arg0;
                        deferred0_1 = arg1;
                        console.error(getStringFromWasm0(arg0, arg1));
                    } finally {
                        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
                    }
                },
                __wbg_error_794d0ffc9d00d5c3: function (arg0, arg1, arg2, arg3) {
                    console.error(arg0, arg1, arg2, arg3);
                },
                __wbg_error_9a7fe3f932034cde: function (arg0) {
                    console.error(arg0);
                },
                __wbg_info_9e602cf10c5c690b: function (arg0, arg1, arg2, arg3) {
                    console.info(arg0, arg1, arg2, arg3);
                },
                __wbg_log_24aba2a6d8990b35: function (arg0, arg1, arg2, arg3) {
                    console.log(arg0, arg1, arg2, arg3);
                },
                __wbg_name_5a3d8f25b54c0c9b: function () {
                    return handleError(function (arg0, arg1) {
                        const ret = arg1.name;
                        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                        const len1 = WASM_VECTOR_LEN;
                        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
                    }, arguments);
                },
                __wbg_new_8a6f238a6ece86ea: function () {
                    const ret = new Error();
                    return ret;
                },
                __wbg_setInterval_ed3b5e3c3ebb8a6d: function () {
                    return handleError(function (arg0, arg1) {
                        const ret = setInterval(arg0, arg1);
                        return ret;
                    }, arguments);
                },
                __wbg_stack_0ed75d68575b0f3c: function (arg0, arg1) {
                    const ret = arg1.stack;
                    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                    const len1 = WASM_VECTOR_LEN;
                    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
                },
                __wbg_warn_a40b971467b219c7: function (arg0, arg1, arg2, arg3) {
                    console.warn(arg0, arg1, arg2, arg3);
                },
                __wbindgen_cast_0000000000000001: function (arg0, arg1) {
                    // Cast intrinsic for `Closure(Closure { dtor_idx: 1, function: Function { arguments: [], shim_idx: 2, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                    const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__h072fa5ffe53f05d2, wasm_bindgen__convert__closures_____invoke__h60e367c6a3ef5f91);
                    return ret;
                },
                __wbindgen_cast_0000000000000002: function (arg0, arg1) {
                    // Cast intrinsic for `Ref(String) -> Externref`.
                    const ret = getStringFromWasm0(arg0, arg1);
                    return ret;
                },
                __wbindgen_init_externref_table: function () {
                    const table = wasm.__wbindgen_externrefs;
                    const offset = table.grow(4);
                    table.set(0, undefined);
                    table.set(offset + 0, undefined);
                    table.set(offset + 1, null);
                    table.set(offset + 2, true);
                    table.set(offset + 3, false);
                },
            };
            return {
                __proto__: null,
                "./wasm_bg.js": import0,
            };
        }

        function wasm_bindgen__convert__closures_____invoke__h60e367c6a3ef5f91(arg0, arg1) {
            wasm.wasm_bindgen__convert__closures_____invoke__h60e367c6a3ef5f91(arg0, arg1);
        }

        function addToExternrefTable0(obj) {
            const idx = wasm.__externref_table_alloc();
            wasm.__wbindgen_externrefs.set(idx, obj);
            return idx;
        }

        const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
            ? { register: () => { }, unregister: () => { } }
            : new FinalizationRegistry(state => state.dtor(state.a, state.b));

        function debugString(val) {
            // primitive types
            const type = typeof val;
            if (type == 'number' || type == 'boolean' || val == null) {
                return `${val}`;
            }
            if (type == 'string') {
                return `"${val}"`;
            }
            if (type == 'symbol') {
                const description = val.description;
                if (description == null) {
                    return 'Symbol';
                } else {
                    return `Symbol(${description})`;
                }
            }
            if (type == 'function') {
                const name = val.name;
                if (typeof name == 'string' && name.length > 0) {
                    return `Function(${name})`;
                } else {
                    return 'Function';
                }
            }
            // objects
            if (Array.isArray(val)) {
                const length = val.length;
                let debug = '[';
                if (length > 0) {
                    debug += debugString(val[0]);
                }
                for (let i = 1; i < length; i++) {
                    debug += ', ' + debugString(val[i]);
                }
                debug += ']';
                return debug;
            }
            // Test for built-in
            const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
            let className;
            if (builtInMatches && builtInMatches.length > 1) {
                className = builtInMatches[1];
            } else {
                // Failed to match the standard '[object ClassName]'
                return toString.call(val);
            }
            if (className == 'Object') {
                // we're a user defined class or Object
                // JSON.stringify avoids problems with cycles, and is generally much
                // easier than looping through ownProperties of `val`.
                try {
                    return 'Object(' + JSON.stringify(val) + ')';
                } catch (_) {
                    return 'Object';
                }
            }
            // errors
            if (val instanceof Error) {
                return `${val.name}: ${val.message}\n${val.stack}`;
            }
            // TODO we could test for more things here, like `Set`s and `Map`s.
            return className;
        }

        let cachedDataViewMemory0 = null;
        function getDataViewMemory0() {
            if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
                cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
            }
            return cachedDataViewMemory0;
        }

        function getStringFromWasm0(ptr, len) {
            ptr = ptr >>> 0;
            return decodeText(ptr, len);
        }

        let cachedUint8ArrayMemory0 = null;
        function getUint8ArrayMemory0() {
            if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
                cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
            }
            return cachedUint8ArrayMemory0;
        }

        function handleError(f, args) {
            try {
                return f.apply(this, args);
            } catch (e) {
                const idx = addToExternrefTable0(e);
                wasm.__wbindgen_exn_store(idx);
            }
        }

        function isLikeNone(x) {
            return x === undefined || x === null;
        }

        function makeMutClosure(arg0, arg1, dtor, f) {
            const state = { a: arg0, b: arg1, cnt: 1, dtor };
            const real = (...args) => {

                // First up with a closure we increment the internal reference
                // count. This ensures that the Rust closure environment won't
                // be deallocated while we're invoking it.
                state.cnt++;
                const a = state.a;
                state.a = 0;
                try {
                    return f(a, state.b, ...args);
                } finally {
                    state.a = a;
                    real._wbg_cb_unref();
                }
            };
            real._wbg_cb_unref = () => {
                if (--state.cnt === 0) {
                    state.dtor(state.a, state.b);
                    state.a = 0;
                    CLOSURE_DTORS.unregister(state);
                }
            };
            CLOSURE_DTORS.register(real, state, state);
            return real;
        }

        function passStringToWasm0(arg, malloc, realloc) {
            if (realloc === undefined) {
                const buf = cachedTextEncoder.encode(arg);
                const ptr = malloc(buf.length, 1) >>> 0;
                getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
                WASM_VECTOR_LEN = buf.length;
                return ptr;
            }

            let len = arg.length;
            let ptr = malloc(len, 1) >>> 0;

            const mem = getUint8ArrayMemory0();

            let offset = 0;

            for (; offset < len; offset++) {
                const code = arg.charCodeAt(offset);
                if (code > 0x7F) break;
                mem[ptr + offset] = code;
            }
            if (offset !== len) {
                if (offset !== 0) {
                    arg = arg.slice(offset);
                }
                ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
                const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
                const ret = cachedTextEncoder.encodeInto(arg, view);

                offset += ret.written;
                ptr = realloc(ptr, len, offset, 1) >>> 0;
            }

            WASM_VECTOR_LEN = offset;
            return ptr;
        }

        function takeFromExternrefTable0(idx) {
            const value = wasm.__wbindgen_externrefs.get(idx);
            wasm.__externref_table_dealloc(idx);
            return value;
        }

        let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        function decodeText(ptr, len) {
            return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
        }

        const cachedTextEncoder = new TextEncoder();

        if (!('encodeInto' in cachedTextEncoder)) {
            cachedTextEncoder.encodeInto = function (arg, view) {
                const buf = cachedTextEncoder.encode(arg);
                view.set(buf);
                return {
                    read: arg.length,
                    written: buf.length
                };
            };
        }

        let WASM_VECTOR_LEN = 0;

        let wasmModule, wasm;
        function __wbg_finalize_init(instance, module) {
            wasm = instance.exports;
            wasmModule = module;
            cachedDataViewMemory0 = null;
            cachedUint8ArrayMemory0 = null;
            wasm.__wbindgen_start();
            return wasm;
        }

        async function __wbg_load(module, imports) {
            if (typeof Response === 'function' && module instanceof Response) {
                if (typeof WebAssembly.instantiateStreaming === 'function') {
                    try {
                        return await WebAssembly.instantiateStreaming(module, imports);
                    } catch (e) {
                        const validResponse = module.ok && expectedResponseType(module.type);

                        if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                        } else { throw e; }
                    }
                }

                const bytes = await module.arrayBuffer();
                return await WebAssembly.instantiate(bytes, imports);
            } else {
                const instance = await WebAssembly.instantiate(module, imports);

                if (instance instanceof WebAssembly.Instance) {
                    return { instance, module };
                } else {
                    return instance;
                }
            }

            function expectedResponseType(type) {
                switch (type) {
                    case 'basic': case 'cors': case 'default': return true;
                }
                return false;
            }
        }

        function initSync(module) {
            if (wasm !== undefined) return wasm;


            if (module !== undefined) {
                if (Object.getPrototypeOf(module) === Object.prototype) {
                    ({ module } = module)
                } else {
                    console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
                }
            }

            const imports = __wbg_get_imports();
            if (!(module instanceof WebAssembly.Module)) {
                module = new WebAssembly.Module(module);
            }
            const instance = new WebAssembly.Instance(module, imports);
            return __wbg_finalize_init(instance, module);
        }

        async function __wbg_init(module_or_path) {
            if (wasm !== undefined) return wasm;


            if (module_or_path !== undefined) {
                if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
                    ({ module_or_path } = module_or_path)
                } else {
                    console.warn('using deprecated parameters for the initialization function; pass a single object instead')
                }
            }

            if (module_or_path === undefined && script_src !== undefined) {
                module_or_path = script_src.replace(/\.js$/, "_bg.wasm");
            }
            const imports = __wbg_get_imports();

            if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
                module_or_path = fetch(module_or_path);
            }

            const { instance, module } = await __wbg_load(await module_or_path, imports);

            return __wbg_finalize_init(instance, module);
        }

        return Object.assign(__wbg_init, { initSync }, exports);
    })({ __proto__: null });

    // 2. ВАША BASE64 СТРОКА (из шага 2)
    const WASM_BASE64 = "AGFzbQEAAAABwAEeYAJ/fwF/YAJ/fwBgA39/fwF/YAF/AGADf39/AGAEb29vbwBgBX9/f39/AGAEf39/fwF/YAACf39gAn9vAGAFf39/f38Bf2ACf38Bb2AGf39/f39/AGAEf39/fwBgAAFvYAFvAX9gAW8AYAJvfwFvYAAAYAF/AX9gAAF/YAJ/fwJ/f2ABbwJ/f2AGf39/f39/AX9gBX9/fn9/AGAEf35/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fX9/AGAEf31/fwAClwYRDC4vd2FzbV9iZy5qcxpfX3diZ19uZXdfOGE2ZjIzOGE2ZWNlODZlYQAODC4vd2FzbV9iZy5qcxxfX3diZ19zdGFja18wZWQ3NWQ2ODU3NWIwZjNjAAkMLi93YXNtX2JnLmpzHF9fd2JnX2Vycm9yXzc1MzRiOGU5YTM2ZjFhYjQAAQwuL3dhc21fYmcuanMbX193YmdfbmFtZV81YTNkOGYyNWI1NGMwYzliAAkMLi93YXNtX2JnLmpzH19fd2JnX2RvY3VtZW50X2VlMzVhM2QzYWUzNGVmNmMADwwuL3dhc21fYmcuanMaX193YmdfbG9nXzI0YWJhMmE2ZDg5OTBiMzUABQwuL3dhc21fYmcuanMbX193YmdfaW5mb185ZTYwMmNmMTBjNWM2OTBiAAUMLi93YXNtX2JnLmpzG19fd2JnX3dhcm5fYTQwYjk3MTQ2N2IyMTljNwAFDC4vd2FzbV9iZy5qcxxfX3diZ19kZWJ1Z180NmE5Mzk5NWZjNmY4ODIwAAUMLi93YXNtX2JnLmpzHF9fd2JnX2Vycm9yXzlhN2ZlM2Y5MzIwMzRjZGUAEAwuL3dhc21fYmcuanMcX193YmdfZXJyb3JfNzk0ZDBmZmM5ZDAwZDVjMwAFDC4vd2FzbV9iZy5qcyJfX3diZ19zZXRJbnRlcnZhbF9lZDNiNWUzYzNlYmI4YTZkABEMLi93YXNtX2JnLmpzJ19fd2JnX19fd2JpbmRnZW5fdGhyb3dfYmUyODlkNTAzNGVkMjcxYgABDC4vd2FzbV9iZy5qcy5fX3diZ19fX3diaW5kZ2VuX2RlYnVnX3N0cmluZ18wYmM4NDgyYzZlMzUwOGFlAAkMLi93YXNtX2JnLmpzH19fd2JpbmRnZW5faW5pdF9leHRlcm5yZWZfdGFibGUA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AiAFOgABIAIgA0HAAXI6AAAMAgsgAUEMdiEHIANBP3FBgH9yIQMgAUH//wNNBEAgAiAFOgACIAIgAzoAASACIAdB4AFyOgAADAILIAIgBToAAyACIAM6AAIgAiAHQT9xQYB/cjoAASACIAFBEnZBcHI6AAAMAQsgAiABOgAACyAAIAQgBmo2AghBAAufAgIDfwF+IwBBQGoiAiQAIAEoAgBBgICAgHhGBEAgASgCDCEDIAJBJGoiBEEANgIAIAJCgICAgBA3AhwgAkEwaiADKAIAIgNBCGopAgA3AwAgAkE4aiADQRBqKQIANwMAIAIgAykCADcDKCACQRxqQZCQwAAgAkEoahAWGiACQRhqIAQoAgAiAzYCACACIAIpAhwiBTcDECABQQhqIAM2AgAgASAFNwIACyABKQIAIQUgAUKAgICAEDcCACACQQhqIgMgAUEIaiIBKAIANgIAIAFBADYCACACIAU3AwBBDEEEEGQiAUUEQEEEQQwQbwALIAEgAikDADcCACABQQhqIAMoAgA2AgAgAEHgksAANgIEIAAgATYCACACQUBrJAAL9gEBAn8jAEHgAGsiASQAIAEgACgCACICNgIIIAEgAUEIahAbAkAgASgCAEEBcUUNACABIAEoAgQiADYCDEGol8AAKAIABEAgASABQQxqrUKAgICAwACENwMQIAFCATcCUCABQQE2AkggAUGwh8AANgJEIAFBBDYCQCABQQE2AjggAULXhsCAoAE3AjAgAUEANgIsIAFBADYCICABQoGAgIDgAzcCGCABQZSHwAA2AjwgAUKUh8CAwAA3AiQgASABQRBqNgJMIAFBGGoQQiABKAIMIQALIABBhAFJDQAgABAxCyACQYQBTwRAIAIQMQsgAUHgAGokAAvaAQEBfyMAQeAAayIBJAAgASAAEBsCQCABKAIAQQFxRQ0AIAEgASgCBCIANgIMQaiXwAAoAgAEQCABIAFBDGqtQoCAgIDAAIQ3AxAgAUIBNwJQIAFBATYCSCABQbCHwAA2AkQgAUEENgJAIAFBATYCOCABQteGwICgATcCMCABQQA2AiwgAUEANgIgIAFCgYCAgOADNwIYIAFBlIfAADYCPCABQpSHwIDAADcCJCABIAFBEGo2AkwgAUEYahBCIAEoAgwhAAsgAEGEAUkNACAAEDELIAFB4ABqJAALlAIB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AggiA2sgAkkEQCAAIAMgAhArIAAoAgghAwsgAgRAIAAoAgQgA2ogASAC/AoAAAsgACACIANqNgIIQQALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwtHAQF/IAAoAgAgACgCCCIDayACSQRAIAAgAyACEC0gACgCCCEDCyACBEAgACgCBCADaiABIAL8CgAACyAAIAIgA2o2AghBAAtHAQF/IAAoAgAgACgCCCIDayACSQRAIAAgAyACEC4gACgCCCEDCyACBEAgACgCBCADaiABIAL8CgAACyAAIAIgA2o2AghBAAtPAQJ/IAAoAgQhAiAAKAIAIQMCQCAAKAIIIgAtAABFDQAgA0GAl8AAQQQgAigCDBECAEUNAEEBDwsgACABQQpGOgAAIAMgASACKAIQEQAAC0QBAn8gASgCBCECIAEoAgAhA0EIQQQQZCIBRQRAQQRBCBBvAAsgASACNgIEIAEgAzYCACAAQdCRwAA2AgQgACABNgIAC0EBAX8jAEEgayIDJAAgA0EANgIQIANBATYCBCADQgQ3AgggAyABNgIcIAMgADYCGCADIANBGGo2AgAgAyACEEEACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoIjAAEELIAJBDGpBkIjAABApIAJBEGokAAszAQF/IwBBEGsiAiQAIAIgACgCADYCDCABQeyHwABBBiACQQxqQdyHwAAQKSACQRBqJAALOAEBfyAAKAIEQYCAgIB4RgRAQQEPCyAAKAIMIgIgASgCCEsEQEEADwsgACgCCCABKAIEIAIQNEULOAACQCACQYCAxABGDQAgACACIAEoAhARAABFDQBBAQ8LIANFBEBBAA8LIAAgA0EAIAEoAgwRAgALMAEBfyMAQRBrIgIkACACIAA2AgwgAUGIiMAAQQYgAkEMakH4h8AAECkgAkEQaiQACzIBAX8CQCAARQ0AIAEoAgAiAgRAIAAgAhEDAAsgASgCBCICRQ0AIAAgAiABKAIIEGILCyIAAkAgACABEFVFDQAgAARAIAAgARBkIgFFDQELIAEPCwAL+gECAn8BfiMAQRBrIgIkACACQQE7AQwgAiABNgIIIAIgADYCBCMAQRBrIgEkACACQQRqIgApAgAhBCABIAA2AgwgASAENwIEIwBBEGsiACQAIAFBBGoiASgCACICKAIMIQMCQAJAAkACQCACKAIEDgIAAQILIAMNAUEBIQJBACEDDAILIAMNACACKAIAIgIoAgQhAyACKAIAIQIMAQsgAEGAgICAeDYCACAAIAE2AgwgAEHEkMAAIAEoAgQgASgCCCIALQAIIAAtAAkQJQALIAAgAzYCBCAAIAI2AgAgAEGokMAAIAEoAgQgASgCCCIALQAIIAAtAAkQJQALNwEBf0GEl8AAKAIAQYyOwABBrJfAACgCAEECRiIBGyAAQYiXwAAoAgBB9I3AACABGygCEBEBAAvjAQEEfyMAQRBrIgMkACMAQUBqIgIkACACIAE2AhwgAiAANgIYIAIgAkEYaq1CgICAgPAAhDcDICACQgE3AjQgAkECNgIsIAJBzIfAADYCKCACIAJBIGo2AjAgAkEMaiACQShqEBggAQRAIAAgAUEBEGILIAIoAhAhAAJAIAIoAgwiBSACKAIUIgRNBEAgACEBDAELIARFBEBBASEBIAAgBUEBEGIMAQsgACAFQQEgBBBdIgENAEEBIAQQVAALIAMgBDYCBCADIAE2AgAgAkFAayQAIAMoAgAgAygCBCADQRBqJAALHwACQCABIAMQVQRAIAAgASADIAIQXSIADQELAAsgAAuLEwIOfwF+IwBBEGsiCCQAEBwiBSAAJgEjAEEQayIJJAAgCUEIaiEKIwBB4ABrIgIkACACIAU2AgxBpJfAAC0AAEEDRwRAIAJBAToAGCACQRhqIQMjAEEgayIBJAACQAJAAkACQAJAAkACQEGkl8AALQAAQQFrDgMCBAEAC0Gkl8AAQQI6AAAgAy0AACADQQA6AABFDQIjAEEgayIDJAACQAJAQYibwAAoAgBB/////wdxBEBBgJvAACgCAA0BC0GMm8AAKAIARQRAQZSbwAAoAgAhBEGUm8AAQfiAwAA2AgBBkJvAACgCACEGQZCbwABBATYCAAJAIAZFDQAgBCgCACIHBEAgBiAHEQMACyAEKAIEIgdFDQAgBiAHIAQoAggQYgsgA0EgaiQADAILAAsgA0EANgIYIANBATYCDCADQZSRwAA2AgggA0IENwIQIANBCGpBnJHAABBBAAtBpJfAAEEDOgAACyABQSBqJAAMBAsgAUEANgIYIAFBATYCDCABQbyBwAA2AggMAgtBq5bAAEErQeSGwAAQOQALIAFBADYCGCABQQE2AgwgAUH8gcAANgIICyABQgQ3AhAgAUEIakH0hsAAEEEACwsgAkKEgICAgICAgIB/NwIYIAJBADoAKCMAQeABayIBJAAgAkEYaiIHKAIAIQsCQAJAAkACQAJAQSlBARBkIgMEQCADQShqQeyIwAAtAAA6AAAgA0EgakHkiMAAKQAANwAAIANBGGpB3IjAACkAADcAACADQRBqQdSIwAApAAA3AAAgA0EIakHMiMAAKQAANwAAIANBxIjAACkAADcAACABQSk2ApQBIAEgAzYCkAEgAUEpNgKMASABIAFBjAFqrUKAgICAkAKEIg83A9ABIAFCATcCXCABQQI2AlQgAUH0iMAANgJQIAEgAUHQAWoiAzYCWCABQZgBaiABQdAAaiIEEBggASAPNwPQASABQgE3AlwgAUECNgJUIAFBjInAADYCUCABIAM2AlggAUGkAWogBBAYIAEgDzcD0AEgAUIBNwJcIAFBAjYCVCABQaSJwAA2AlAgASADNgJYIAFBsAFqIAQQGCABIA83A9ABIAFCATcCXCABQQI2AlQgAUG8icAANgJQIAEgAzYCWCABQbwBaiAEEBggASAPNwPIASABQgE3AlwgAUECNgJUIAFB2InAADYCUCABIAFByAFqNgJYIAMgBBAYQSFBARBkIgRFDQEgBEEgakGIisAALQAAOgAAIARBGGpBgIrAACkAADcAACAEQRBqQfiJwAApAAA3AAAgBEEIakHwicAAKQAANwAAIARB6InAACkAADcAAEEjQQEQZCIGRQ0CIAZBH2pBqIrAACgAADYAACAGQRhqQaGKwAApAAA3AAAgBkEQakGZisAAKQAANwAAIAZBCGpBkYrAACkAADcAACAGQYmKwAApAAA3AAAgAUHYAGoiAyABQaABaigCADYCACABQeQAaiABQawBaigCADYCACABIAEpApgBNwNQIAEgASkCpAE3AlwgAUHwAGoiDCABQbgBaigCADYCACABQfwAaiABQcQBaigCADYCACABQYgBaiINIAFB2AFqKAIANgIAIAEgASkCsAE3A2ggASABKQK8ATcCdCABIAEpAtABNwOAASABKAKMASIOBEAgASgCkAEgDkEBEGILIAFBHGogAykDADcCACABQSRqIAFB4ABqKQMANwIAIAFBLGogAUHoAGopAwA3AgAgAUE0aiAMKQMANwIAIAFBPGogAUH4AGopAwA3AgAgAUHEAGogAUGAAWopAwA3AgAgAUHMAGogDSgCADYCACABQQhqIAdBCGopAgA3AwAgAUEQaiAHQRBqKAIANgIAIAEgASkDUDcCFCABIAcpAgA3AwBB6ABBBBBkIgNFDQMgAyABQdAA/AoAACADQSM2AmQgAyAGNgJgIANCoYCAgLAENwJYIAMgBDYCVCADQSE2AlBBrJfAAEGsl8AAKAIAIgRBASAEGzYCACAERSEGAkAgBARAIARBAUYEQEGsl8AAKAIAQQFGIQQDQCAEDQALC0GsiMAAKAIAIgQEQCADIAQRAwALQbCIwAAoAgAiBEUNASADIARBtIjAACgCABBiDAELQYiXwABBrIjAADYCAEGEl8AAIAM2AgBBrJfAAEECNgIACwJAIAZFBEAgAUEANgLYASABQoCAgIAQNwLQASABQayKwAA2AlQgAUKggICADjcCWCABIAFB0AFqNgJQIAFB0ABqQaiNwABBygAQWQ0GIAEoAtABIQMgASABKALUASIGIAEoAtgBEFciBDYCUCADBEAgBiADQQEQYgsgAUHQAGooAgAlARAJIARBhAFJDQEgBBAxDAELQaiXwAAgCzYCAAsgAUHgAWokAAwFC0EBQSkQVAALQQFBIRBUAAtBAUEjEFQAC0EEQegAEG8AC0HUisAAQTcgAUG8AWpBxIrAAEGMi8AAEDAAC0Gol8AAKAIAQQJLBEAgAkIANwJQIAJCgYCAgMAANwJIIAJBjIfAADYCRCACQQQ2AkAgAkEDNgI4IAJBADYCLCACQQA2AiAgAkKBgICAoAM3AhggAkLXhsCAoAE3AjAgAkGUh8AANgI8IAJClIfAgMAANwIkIAcQQgtBqJfAACgCAEEDSwRAIAIgAkEMaq1CgICAgOAAhDcDECACQgE3AlAgAkEBNgJIIAJBoIfAADYCRCACQQQ2AkAgAkEENgI4IAJC14bAgKABNwIwIAJBADYCLCACQQA2AiAgAkKBgICAsAM3AhggAkGUh8AANgI8IAJClIfAgMAANwIkIAIgAkEQajYCTCACQRhqEEIgAigCDCEFCwJAAkBBBEEEEGQiAQRAIAEgBTYCACABQYCAwAAQDyEAEBwiBSAAJgEgAiAFNgIQIAJBEGooAgAlAUHoBxALIQAQHCIBIAAmAUG0l8AAKAIAIQNBsJfAACgCACEEQbCXwABCADcCACACIAMgASAEQQFGIgEbNgIEIAIgATYCACACKAIAQQFxDQEgAigCBCEBIAIgBTYCJCACQQE2AiAgAkEBNgIYIAIgATYCHAJAIAJBGGoiBSgCAEEBRgRAIAUoAggNAUGMjsAAQTEQagALQYyOwABBMRBqAAsgBSgCBCIFQYQBTwRAIAUQMQsgCkEANgIAIAJB4ABqJAAMAgtBBEEEEG8AC0GUgMAAQTEQagALIAhCADcCACAJQRBqJAAgCCgCACAIKAIEIAhBEGokAAskACAARQRAQb2OwABBMhBqAAsgACACIAMgBCAFIAEoAhARCgALIgAgAEUEQEG9jsAAQTIQagALIAAgAiADIAQgASgCEBENAAsiACAARQRAQb2OwABBMhBqAAsgACACIAMgBCABKAIQERkACyIAIABFBEBBvY7AAEEyEGoACyAAIAIgAyAEIAEoAhARBwALIgAgAEUEQEG9jsAAQTIQagALIAAgAiADIAQgASgCEBEbAAsiACAARQRAQb2OwABBMhBqAAsgACACIAMgBCABKAIQER0ACycBAX8gACgCACIBQYCAgIB4ckGAgICAeEcEQCAAKAIEIAFBARBiCwsgACAARQRAQb2OwABBMhBqAAsgACACIAMgASgCEBEEAAseACAARQRAQb2OwABBMhBqAAsgACACIAEoAhARAAALHAAgAEUEQEHFgMAAQTIQagALIAAgASgCEBEDAAsZAQF/IAAoAgAiAQRAIAAoAgQgAUEBEGILCxwAIAEgACgCAEEDdCIAKAL4jEAgACgC/IxAEBQLHwAgAEEIakGwj8AAKQIANwIAIABBqI/AACkCADcCAAsfACAAQQhqQcCPwAApAgA3AgAgAEG4j8AAKQIANwIAC0MAIAAEQCAAIAEQbwALIwBBIGsiACQAIABBADYCGCAAQQE2AgwgAEGElMAANgIIIABCBDcCECAAQQhqQYyUwAAQQQALFQAgAWlBAUYgAEGAgICAeCABa01xCxQAIAAoAgAiAEGEAU8EQCAAEDELCxYBAW8gACABEBAhAhAcIgAgAiYBIAALDwAgAQRAIAAgASACEGILCxYAIAAoAgAgASACIAAoAgQoAgwRAgALFAAgACgCACABIAAoAgQoAgwRAAALEAAgACgCACAAKAIEIAEQcAsQACAAKAIEIAAoAgggARBwC+cGAQV/An8CQAJAAkACQAJAAkACQCAAQQRrIgcoAgAiCEF4cSIEQQRBCCAIQQNxIgUbIAFqTwRAIAVBACABQSdqIgYgBEkbDQECQCACQQlPBEAgAiADEBkiAg0BQQAMCgtBACECIANBzP97Sw0IQRAgA0ELakF4cSADQQtJGyEBIABBCGshBiAFRQRAIAZFIAFBgAJJciAEIAFrQYCACEsgASAET3JyDQcgAAwKCyAEIAZqIQUCQCABIARLBEAgBUHkmsAAKAIARg0BQeCawAAoAgAgBUcEQCAFKAIEIghBAnENCSAIQXhxIgggBGoiBCABSQ0JIAUgCBAaIAQgAWsiBUEQTwRAIAcgASAHKAIAQQFxckECcjYCACABIAZqIgEgBUEDcjYCBCAEIAZqIgQgBCgCBEEBcjYCBCABIAUQFwwJCyAHIAQgBygCAEEBcXJBAnI2AgAgBCAGaiIBIAEoAgRBAXI2AgQMCAtB2JrAACgCACAEaiIEIAFJDQgCQCAEIAFrIgVBD00EQCAHIAhBAXEgBHJBAnI2AgAgBCAGaiIBIAEoAgRBAXI2AgRBACEFQQAhAQwBCyAHIAEgCEEBcXJBAnI2AgAgASAGaiIBIAVBAXI2AgQgBCAGaiIEIAU2AgAgBCAEKAIEQX5xNgIEC0HgmsAAIAE2AgBB2JrAACAFNgIADAcLIAQgAWsiBEEPTQ0GIAcgASAIQQFxckECcjYCACABIAZqIgEgBEEDcjYCBCAFIAUoAgRBAXI2AgQgASAEEBcMBgtB3JrAACgCACAEaiIEIAFLDQQMBgsgAyABIAEgA0sbIgMEQCACIAAgA/wKAAALIAcoAgAiA0F4cSIHIAFBBEEIIANBA3EiAxtqSQ0CIANFIAYgB09yDQZBoJLAAEEuQdCSwAAQOQALQeCRwABBLkGQksAAEDkAC0GgksAAQS5B0JLAABA5AAtB4JHAAEEuQZCSwAAQOQALIAcgASAIQQFxckECcjYCACABIAZqIgUgBCABayIBQQFyNgIEQdyawAAgATYCAEHkmsAAIAU2AgALIAZFDQAgAAwDCyADEBEiAUUNASADQXxBeCAHKAIAIgJBA3EbIAJBeHFqIgIgAiADSxsiAgRAIAEgACAC/AoAAAsgASECCyAAEBMLIAILCxYAQbSXwAAgADYCAEGwl8AAQQE2AgALEAAgASAAKAIAIAAoAgQQWQsTACAAQdCRwAA2AgQgACABNgIACxAAIAEgACgCACAAKAIEEBQLXwEBfwJAAkAgAEEEaygCACICQXhxIgNBBEEIIAJBA3EiAhsgAWpPBEAgAkEAIAMgAUEnaksbDQEgABATDAILQeCRwABBLkGQksAAEDkAC0GgksAAQS5B0JLAABA5AAsLCwAgACgCACABECwLGQACfyABQQlPBEAgASAAEBkMAQsgABARCwsTACABKAIAIAEoAgQgACgCABAWCw0AIABBrIrAACABEBYLDQAgAUHYi8AAQQUQWQsNACAAQeiLwAAgARAWCw0AIAFB2IzAAEEFEFkLCQAgACABEAwACw0AIABBkJDAACABEBYLDAAgACABKQIANwMACw0AIABBnJTAACABEBYLDQAgAUHwksAAQQUQWQsZACAAIAFB/JrAACgCACIAQTQgABsRAQAACwoAIAIgACABEBQLDQAgAEGIlsAAIAEQFgsNACABQeiWwABBGBAUCwkAIABBADYCAAtMAQF/IwBBMGsiASQAIAFBATYCDCABQbSUwAA2AgggAUIBNwIUIAEgAUEvaq1CgICAgLAJhDcDICABIAFBIGo2AhAgAUEIaiAAEEEAC6YGAwZ/AX4BbwJAIwBBMGsiAiQAIAJBADYCHCACQoCAgIAQNwIUIAJB6IvAADYCJCACQqCAgIAONwIoIAIgAkEUajYCICMAQUBqIgMkAEEBIQYCQCACQSBqIgVBrJHAAEEMEFkNACAFKAIEIQcgBSgCACADIAEoAggiBCkCADcCGCADQQM2AgQgA0G4kcAANgIAIANCAzcCDCADIARBDGqtQoCAgIDQBoQ3AzAgAyAEQQhqrUKAgICA0AaENwMoIAMgA0EYaq1CgICAgOAGhDcDICADIANBIGoiBDYCCCAHIAMQFg0AIAQgASgCACIAIAEoAgQoAgwiBxEBACAAIQECQCADKQMgQu26rbbNhdT14wCFIAMpAyhC+IKZvZXuxsW5f4WEUAR/QQQFIAQgACAHEQEAIAMpAyBC/IfltOGt0cfPAIUgAykDKELjhKuEhqbG6MMAhYRCAFINASAAQQRqIQFBCAsgAGooAgAhByABKAIAIQAgBUGMkMAAQQIQWQ0BIAUgACAHEFkNAQtBACEGCyADQUBrJAACQCAGRQRAIAJBEGogAkEcaigCACIBNgIAIAIgAikCFCIINwMIIAinIgQgAWtBCU0EQCACQQhqIAFBChAtIAIoAgghBCACKAIQIQELIAIoAgwiBSABaiIAQd2LwAApAAA3AAAgAEEIakHli8AALwAAOwAAIAIgAUEKaiIBNgIQEAAhCRAcIgAgCSYBIAJBIGogACUBEAEgAigCICEHIAIoAiQiBiAEIAFrSwRAIAJBCGogASAGEC0gAigCCCEEIAIoAgwhBSACKAIQIQELIAYEQCABIAVqIAcgBvwKAAALIAIgASAGaiIBNgIQIAQgAWtBAU0EQCACQQhqIAFBAhAtIAIoAgwhBSACKAIQIQELIAEgBWpBihQ7AAAgAiABQQJqIgQ2AhAgBCACKAIIIgFJBEAgBSABQQEgBBBdIgVFDQILIAUgBBACIAYEQCAHIAZBARBiCyAAQYQBTwRAIAAQMQsgAkEwaiQADAILQZCMwABBNyACQQhqQYCMwABByIzAABAwAAtBASAEEFQACwsEAEEACwIACwIACwueFwgAQYCAwAALdwgAAAAEAAAABAAAAAkAAAAKAAAAY2FsbGVkIGBSZXN1bHQ6OnVud3JhcF90aHJvdygpYCBvbiBhbiBgRXJyYCB2YWx1ZWNsb3N1cmUgaW52b2tlZCByZWN1cnNpdmVseSBvciBhZnRlciBiZWluZyBkcm9wcGVkAEGAgcAAC8EJAQAAAAsAAAAMAAAADQAAAE9uY2UgaW5zdGFuY2UgaGFzIHByZXZpb3VzbHkgYmVlbiBwb2lzb25lZAAAkAAQACoAAABvbmUtdGltZSBpbml0aWFsaXphdGlvbiBtYXkgbm90IGJlIHBlcmZvcm1lZCByZWN1cnNpdmVsecQAEAA4AAAAbGlicmFyeS9hbGxvYy9zcmMvZm10LnJzAEM6XFVzZXJzXDlcLnJ1c3R1cFx0b29sY2hhaW5zXG5pZ2h0bHktMjAyNS0xMC0yOS14ODZfNjQtcGMtd2luZG93cy1tc3ZjXGxpYi9ydXN0bGliL3NyYy9ydXN0XGxpYnJhcnkvYWxsb2Mvc3JjL3N0cmluZy5ycwBsaWJyYXJ5L3N0ZC9zcmMvcGFuaWNraW5nLnJzAEM6XFVzZXJzXDlcLmNhcmdvXHJlZ2lzdHJ5XHNyY1xpbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3Zlx3YXNtLWJpbmRnZW4tMC4yLjEwOFxzcmNcZXh0ZXJucmVmLnJzAEM6XFVzZXJzXDlcLnJ1c3R1cFx0b29sY2hhaW5zXG5pZ2h0bHktMjAyNS0xMC0yOS14ODZfNjQtcGMtd2luZG93cy1tc3ZjXGxpYi9ydXN0bGliL3NyYy9ydXN0XGxpYnJhcnkvc3RkL3NyYy9zeW5jL29uY2UucnMAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy9tb2QucnMAL3J1c3QvZGVwcy9kbG1hbGxvYy0wLjIuMTAvc3JjL2RsbWFsbG9jLnJzAGxpYnJhcnkvc3RkL3NyYy9hbGxvYy5ycwBDOlxVc2Vyc1w5XC5jYXJnb1xyZWdpc3RyeVxzcmNcaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2ZcY29uc29sZV9lcnJvcl9wYW5pY19ob29rLTAuMS43XHNyY1xsaWIucnMAAAAZAhAAeQAAAJ4AAAAyAAAA+AIQAGkAAACVAAAADgAAAFJ1c3QgcnVuhAMQAAgAAAB3YXNtV2luZG93IACYAxAABwAAAEVycm9yIAAAqAMQAAYAAABPazoguAMQAAQAAABIZWxsbywgIcQDEAAHAAAAywMQAAEAAAAAAAAABAAAAAQAAAAOAAAAT2JqZWN0b2JqAAAAAAAAAAQAAAAEAAAADwAAAFdpbmRvdwAAAAAAAAQAAAAEAAAAEAAAAEV2ZW50VGFyZ2V0ABUAAABoAAAABAAAABYAAAAXAAAAGAAAAGNvbG9yOiB3aGl0ZTsgcGFkZGluZzogMCAzcHg7IGJhY2tncm91bmQ6IGdyYXk7AAEAAAAAAAAAbQQQAAYAAAAgYmx1ZTsAAAEAAAAAAAAAhAQQAAYAAAAgZ3JlZW47AAEAAAAAAAAAnAQQAAcAAAAgb3JhbmdlOwEAAAAAAAAAtAQQAAgAAAAgZGFya3JlZDsAAAABAAAAAAAAAMwEEAAJAAAAZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiBpbmhlcml0YmFja2dyb3VuZDogaW5oZXJpdDsgY29sb3I6IGluaGVyaXQZAAAADAAAAAQAAAAaAAAAGwAAABwA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";

    // 3. ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ (Base64 -> Uint8Array)
    function base64ToUint8Array(base64) {
        const binary_string = window.atob(base64);
        const len = binary_string.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes;
    }

    // 4. ЗАПУСК
    async function run() {
        // Декодируем байты
        const wasmBytes = base64ToUint8Array(WASM_BASE64);

        // Инициализируем wasm-bindgen, передавая байты напрямую
        // Обратите внимание: при target no-modules функция называется wasm_bindgen
        await wasm_bindgen(wasmBytes);

        console.log("Wasm loaded!");

        console.log("Start run");
        wasm_bindgen.run(unsafeWindow);
        console.log("End run");
    }

    run();
})();