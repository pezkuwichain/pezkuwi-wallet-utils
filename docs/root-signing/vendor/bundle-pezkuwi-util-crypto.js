(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@pezkuwi/util')) :
    typeof define === 'function' && define.amd ? define(['exports', '@pezkuwi/util'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.pezkuwiUtilCrypto = {}, global.pezkuwiUtil));
})(this, (function (exports, util) { 'use strict';

    const global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : window;

    var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
    const packageInfo$2 = { name: '@pezkuwi/x-global', path: (({ url: (typeof document === 'undefined' && typeof location === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : typeof document === 'undefined' ? location.href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('bundle-pezkuwi-util-crypto.js', document.baseURI).href)) }) && (typeof document === 'undefined' && typeof location === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : typeof document === 'undefined' ? location.href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('bundle-pezkuwi-util-crypto.js', document.baseURI).href))) ? new URL((typeof document === 'undefined' && typeof location === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : typeof document === 'undefined' ? location.href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('bundle-pezkuwi-util-crypto.js', document.baseURI).href))).pathname.substring(0, new URL((typeof document === 'undefined' && typeof location === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : typeof document === 'undefined' ? location.href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('bundle-pezkuwi-util-crypto.js', document.baseURI).href))).pathname.lastIndexOf('/') + 1) : 'auto', type: 'esm', version: '14.0.26' };

    function evaluateThis(fn) {
        return fn('return this');
    }
    const xglobal =  (typeof globalThis !== 'undefined'
        ? globalThis
        : typeof global !== 'undefined'
            ? global
            : typeof self !== 'undefined'
                ? self
                : typeof window !== 'undefined'
                    ? window
                    : evaluateThis(Function));
    function extractGlobal(name, fallback) {
        return typeof xglobal[name] === 'undefined'
            ? fallback
            : xglobal[name];
    }
    function exposeGlobal(name, fallback) {
        if (typeof xglobal[name] === 'undefined') {
            xglobal[name] = fallback;
        }
    }

    const build = /*#__PURE__*/Object.freeze({
        __proto__: null,
        exposeGlobal: exposeGlobal,
        extractGlobal: extractGlobal,
        packageInfo: packageInfo$2,
        xglobal: xglobal
    });

    function invalidFallback() {
        return Number.NaN;
    }
    const BigInt$1 =  extractGlobal('BigInt', invalidFallback);

    exposeGlobal('BigInt', BigInt$1);

    function getDefaultExportFromCjs (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function getAugmentedNamespace(n) {
      if (n.__esModule) return n;
      var f = n.default;
    	if (typeof f == "function") {
    		var a = function a () {
    			if (this instanceof a) {
            return Reflect.construct(f, arguments, this.constructor);
    			}
    			return f.apply(this, arguments);
    		};
    		a.prototype = f.prototype;
      } else a = {};
      Object.defineProperty(a, '__esModule', {value: true});
    	Object.keys(n).forEach(function (k) {
    		var d = Object.getOwnPropertyDescriptor(n, k);
    		Object.defineProperty(a, k, d.get ? d : {
    			enumerable: true,
    			get: function () {
    				return n[k];
    			}
    		});
    	});
    	return a;
    }

    var browser = {};

    const require$$0 = /*@__PURE__*/getAugmentedNamespace(build);

    var packageInfo$1 = {};

    Object.defineProperty(packageInfo$1, "__esModule", { value: true });
    packageInfo$1.packageInfo = void 0;
    packageInfo$1.packageInfo = { name: '@pezkuwi/x-randomvalues', path: typeof __dirname === 'string' ? __dirname : 'auto', type: 'cjs', version: '14.0.26' };

    (function (exports$1) {
    	Object.defineProperty(exports$1, "__esModule", { value: true });
    	exports$1.crypto = exports$1.packageInfo = void 0;
    	exports$1.getRandomValues = getRandomValues;
    	const x_global_1 = require$$0;
    	var packageInfo_js_1 = packageInfo$1;
    	Object.defineProperty(exports$1, "packageInfo", { enumerable: true, get: function () { return packageInfo_js_1.packageInfo; } });
    	exports$1.crypto = x_global_1.xglobal.crypto;
    	function getRandomValues(arr) {
    	    return exports$1.crypto.getRandomValues(arr);
    	}
    } (browser));
    getDefaultExportFromCjs(browser);

    const DEFAULT_CRYPTO = { getRandomValues: browser.getRandomValues };
    const DEFAULT_SELF = { crypto: DEFAULT_CRYPTO };
    class Wbg {
        #bridge;
        constructor(bridge) {
            this.#bridge = bridge;
        }
        abort = () => {
            throw new Error('abort');
        };
        __wbg___wbindgen_is_undefined_9e4d92534c42d778 = (idx) => {
            return this.#bridge.getObject(idx) === undefined;
        };
        __wbindgen_is_undefined = (idx) => {
            return this.#bridge.getObject(idx) === undefined;
        };
        __wbg___wbindgen_throw_be289d5034ed271b = (ptr, len) => {
            throw new Error(this.#bridge.getString(ptr, len));
        };
        __wbindgen_throw = (ptr, len) => {
            throw new Error(this.#bridge.getString(ptr, len));
        };
        __wbg_self_25aabeb5a7b41685 = () => {
            return this.#bridge.addObject(DEFAULT_SELF);
        };
        __wbg_self_7eede1f4488bf346 = () => {
            return this.#bridge.addObject(DEFAULT_SELF);
        };
        __wbg_self_1b7a39e3a92c949c = () => {
            return this.#bridge.addObject(DEFAULT_SELF);
        };
        __wbg_require_0d6aeaec3c042c88 = (ptr, len, _extra) => {
            throw new Error(`Unable to require ${this.#bridge.getString(ptr, len)}`);
        };
        __wbg_require_900d5c3984fe7703 = (ptr, len, _extra) => {
            throw new Error(`Unable to require ${this.#bridge.getString(ptr, len)}`);
        };
        __wbg_require_604837428532a733 = (ptr, len) => {
            throw new Error(`Unable to require ${this.#bridge.getString(ptr, len)}`);
        };
        __wbg_crypto_038798f665f985e2 = (_idx) => {
            return this.#bridge.addObject(DEFAULT_CRYPTO);
        };
        __wbg_crypto_c909fb428dcbddb6 = (_idx) => {
            return this.#bridge.addObject(DEFAULT_CRYPTO);
        };
        __wbg_crypto_968f1772287e2df0 = (_idx) => {
            return this.#bridge.addObject(DEFAULT_CRYPTO);
        };
        __wbg_msCrypto_ff35fce085fab2a3 = (_idx) => {
            return this.#bridge.addObject(undefined);
        };
        __wbg_msCrypto_511eefefbfc70ae4 = (_idx) => {
            return this.#bridge.addObject(undefined);
        };
        __wbg_getRandomValues_7dfe5bd1b67c9ca1 = (_idx) => {
            return this.#bridge.addObject(DEFAULT_CRYPTO.getRandomValues);
        };
        __wbg_getRandomValues_307049345d0bd88c = (_idx) => {
            return this.#bridge.addObject(DEFAULT_CRYPTO.getRandomValues);
        };
        __wbg_getRandomValues_a3d34b4fee3c2869 = (_idx) => {
            return this.#bridge.addObject(DEFAULT_CRYPTO.getRandomValues);
        };
        __wbg_getRandomValues_371e7ade8bd92088 = (_arg0, ptr, len) => {
            DEFAULT_CRYPTO.getRandomValues(this.#bridge.getU8a(ptr, len));
        };
        __wbg_getRandomValues_cd175915511f705e = (cryptoIdx, arrIdx) => {
            this.#bridge.getObject(cryptoIdx).getRandomValues(this.#bridge.getObject(arrIdx));
        };
        __wbg_getRandomValues_f5e14ab7ac8e995d = (_arg0, ptr, len) => {
            DEFAULT_CRYPTO.getRandomValues(this.#bridge.getU8a(ptr, len));
        };
        __wbg_randomFillSync_994ac6d9ade7a695 = (_idx, _ptr, _len) => {
            throw new Error('randomFillSync is not available');
        };
        __wbg_randomFillSync_85b3f4c52c56c313 = (_idx, _ptr, _len) => {
            throw new Error('randomFillSync is not available');
        };
        __wbg_randomFillSync_d5bd2d655fdf256a = (_idx, _ptr, _len) => {
            throw new Error('randomFillSync is not available');
        };
        __wbindgen_object_drop_ref = (idx) => {
            this.#bridge.takeObject(idx);
        };
        __wbg_static_accessor_MODULE_ef3aa2eb251158a5 = () => {
            return this.#bridge.addObject(undefined);
        };
        __wbg_new_with_length_a2c39cbe88fd8ff1 = (len) => {
            return this.#bridge.addObject(new Uint8Array(len));
        };
        __wbg_newwithlength_728575f3bba9959b = (len) => {
            return this.#bridge.addObject(new Uint8Array(len));
        };
        __wbg_subarray_a96e1fef17ed23cb = (idx, start, end) => {
            const arr = this.#bridge.getObject(idx);
            return this.#bridge.addObject(arr.subarray(start, end));
        };
        __wbg_subarray_7f7a652672800851 = (idx, start, end) => {
            const arr = this.#bridge.getObject(idx);
            return this.#bridge.addObject(arr.subarray(start, end));
        };
        __wbg_length_32ed9a279acd054c = (idx) => {
            const arr = this.#bridge.getObject(idx);
            return arr.length;
        };
        __wbg_length_f0764416ba5bb237 = (idx) => {
            const arr = this.#bridge.getObject(idx);
            return arr.length;
        };
        __wbg_prototypesetcall_bdcdcc5842e4d77d = (destIdx, srcIdx, offset) => {
            const dest = this.#bridge.getObject(destIdx);
            const src = this.#bridge.getObject(srcIdx);
            dest.set(src, offset);
        };
        __wbindgen_init_externref_table = () => {
        };
        __wbindgen_memory = () => {
            return this.#bridge.addObject(this.#bridge.wasm?.memory);
        };
        __wbg_buffer_5d1b598a01b41a42 = (memIdx) => {
            const mem = this.#bridge.getObject(memIdx);
            return this.#bridge.addObject(mem.buffer);
        };
        __wbg_new_ace717933ad7117f = (bufferIdx) => {
            const buffer = this.#bridge.getObject(bufferIdx);
            return this.#bridge.addObject(new Uint8Array(buffer));
        };
        __wbg_set_74906aa30864df5a = (destIdx, srcIdx, offset) => {
            const dest = this.#bridge.getObject(destIdx);
            const src = this.#bridge.getObject(srcIdx);
            dest.set(src, offset);
        };
    }

    class Bridge {
        #createWasm;
        #heap;
        #wbg;
        #cachegetInt32;
        #cachegetUint8;
        #heapNext;
        #wasm;
        #wasmError;
        #wasmPromise;
        #type;
        constructor(createWasm) {
            this.#createWasm = createWasm;
            this.#cachegetInt32 = null;
            this.#cachegetUint8 = null;
            this.#heap = new Array(32)
                .fill(undefined)
                .concat(undefined, null, true, false);
            this.#heapNext = this.#heap.length;
            this.#type = 'none';
            this.#wasm = null;
            this.#wasmError = null;
            this.#wasmPromise = null;
            this.#wbg = { ...new Wbg(this) };
        }
        get error() {
            return this.#wasmError;
        }
        get type() {
            return this.#type;
        }
        get wasm() {
            return this.#wasm;
        }
        async init(createWasm) {
            if (!this.#wasmPromise || createWasm) {
                this.#wasmPromise = (createWasm || this.#createWasm)(this.#wbg);
            }
            const { error, type, wasm } = await this.#wasmPromise;
            this.#type = type;
            this.#wasm = wasm;
            this.#wasmError = error;
            return this.#wasm;
        }
        getObject(idx) {
            return this.#heap[idx];
        }
        dropObject(idx) {
            if (idx < 36) {
                return;
            }
            this.#heap[idx] = this.#heapNext;
            this.#heapNext = idx;
        }
        takeObject(idx) {
            const ret = this.getObject(idx);
            this.dropObject(idx);
            return ret;
        }
        addObject(obj) {
            if (this.#heapNext === this.#heap.length) {
                this.#heap.push(this.#heap.length + 1);
            }
            const idx = this.#heapNext;
            this.#heapNext = this.#heap[idx];
            this.#heap[idx] = obj;
            return idx;
        }
        getInt32() {
            if (this.#cachegetInt32 === null || this.#cachegetInt32.buffer !== this.#wasm.memory.buffer) {
                this.#cachegetInt32 = new Int32Array(this.#wasm.memory.buffer);
            }
            return this.#cachegetInt32;
        }
        getUint8() {
            if (this.#cachegetUint8 === null || this.#cachegetUint8.buffer !== this.#wasm.memory.buffer) {
                this.#cachegetUint8 = new Uint8Array(this.#wasm.memory.buffer);
            }
            return this.#cachegetUint8;
        }
        getU8a(ptr, len) {
            return this.getUint8().subarray(ptr / 1, ptr / 1 + len);
        }
        getString(ptr, len) {
            return util.u8aToString(this.getU8a(ptr, len));
        }
        allocU8a(arg) {
            const ptr = this.#wasm.__wbindgen_malloc(arg.length * 1, 1);
            this.getUint8().set(arg, ptr / 1);
            return [ptr, arg.length];
        }
        allocString(arg) {
            return this.allocU8a(util.stringToU8a(arg));
        }
        resultU8a() {
            const r0 = this.getInt32()[8 / 4 + 0];
            const r1 = this.getInt32()[8 / 4 + 1];
            const ret = this.getU8a(r0, r1).slice();
            this.#wasm.__wbindgen_free(r0, r1 * 1, 1);
            return ret;
        }
        resultString() {
            return util.u8aToString(this.resultU8a());
        }
    }

    function createWasmFn(root, wasmBytes, asmFn) {
        return async (wbg) => {
            const result = {
                error: null,
                type: 'none',
                wasm: null
            };
            try {
                if (!wasmBytes?.length) {
                    throw new Error('No WebAssembly provided for initialization');
                }
                else if (typeof WebAssembly !== 'object' || typeof WebAssembly.instantiate !== 'function') {
                    throw new Error('WebAssembly is not available in your environment');
                }
                const source = await WebAssembly.instantiate(wasmBytes, { wbg });
                result.wasm = source.instance.exports;
                result.type = 'wasm';
            }
            catch (error) {
                {
                    result.error = `FATAL: Unable to initialize @pezkuwi/wasm-${root}:: ${error.message}`;
                    console.error(result.error);
                }
            }
            return result;
        };
    }

    const CHR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    const map = new Array(256);
    for (let i = 0, count = CHR.length; i < count; i++) {
        map[CHR.charCodeAt(i)] = i;
    }
    function base64Decode$1(data, out) {
        let byte = 0;
        let bits = 0;
        let pos = -1;
        for (let i = 0, last = out.length - 1; pos !== last; i++) {
            byte = (byte << 6) | map[data.charCodeAt(i)];
            if ((bits += 6) >= 8) {
                out[++pos] = (byte >>> (bits -= 8)) & 0xff;
            }
        }
        return out;
    }

    const u8 = Uint8Array, u16 = Uint16Array, u32$1 = Uint32Array;
    const clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    const fleb = new u8([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0,  0, 0,  0]);
    const fdeb = new u8([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13,  0, 0]);
    const freb = (eb, start) => {
        const b = new u16(31);
        for (let i = 0; i < 31; ++i) {
            b[i] = start += 1 << eb[i - 1];
        }
        const r = new u32$1(b[30]);
        for (let i = 1; i < 30; ++i) {
            for (let j = b[i]; j < b[i + 1]; ++j) {
                r[j] = ((j - b[i]) << 5) | i;
            }
        }
        return [b, r];
    };
    const [fl, revfl] = freb(fleb, 2);
    fl[28] = 258, revfl[258] = 28;
    const [fd] = freb(fdeb, 0);
    const rev = new u16(32768);
    for (let i = 0; i < 32768; ++i) {
        let x = ((i & 0xAAAA) >>> 1) | ((i & 0x5555) << 1);
        x = ((x & 0xCCCC) >>> 2) | ((x & 0x3333) << 2);
        x = ((x & 0xF0F0) >>> 4) | ((x & 0x0F0F) << 4);
        rev[i] = (((x & 0xFF00) >>> 8) | ((x & 0x00FF) << 8)) >>> 1;
    }
    const hMap = ((cd, mb, r) => {
        const s = cd.length;
        let i = 0;
        const l = new u16(mb);
        for (; i < s; ++i) {
            if (cd[i])
                ++l[cd[i] - 1];
        }
        const le = new u16(mb);
        for (i = 1; i < mb; ++i) {
            le[i] = (le[i - 1] + l[i - 1]) << 1;
        }
        let co;
        {
            co = new u16(1 << mb);
            const rvb = 15 - mb;
            for (i = 0; i < s; ++i) {
                if (cd[i]) {
                    const sv = (i << 4) | cd[i];
                    const r = mb - cd[i];
                    let v = le[cd[i] - 1]++ << r;
                    for (const m = v | ((1 << r) - 1); v <= m; ++v) {
                        co[rev[v] >> rvb] = sv;
                    }
                }
            }
        }
        return co;
    });
    const flt = new u8(288);
    for (let i = 0; i < 144; ++i)
        flt[i] = 8;
    for (let i = 144; i < 256; ++i)
        flt[i] = 9;
    for (let i = 256; i < 280; ++i)
        flt[i] = 7;
    for (let i = 280; i < 288; ++i)
        flt[i] = 8;
    const fdt = new u8(32);
    for (let i = 0; i < 32; ++i)
        fdt[i] = 5;
    const flrm = hMap(flt, 9);
    const fdrm = hMap(fdt, 5);
    const bits = (d, p, m) => {
        const o = p >>> 3;
        return ((d[o] | (d[o + 1] << 8)) >>> (p & 7)) & m;
    };
    const bits16 = (d, p) => {
        const o = p >>> 3;
        return ((d[o] | (d[o + 1] << 8) | (d[o + 2] << 16)) >>> (p & 7));
    };
    const shft = (p) => (p >>> 3) + (p & 7 && 1);
    const slc = (v, s, e) => {
        if (e == null || e > v.length)
            e = v.length;
        const n = new (v instanceof u16 ? u16 : v instanceof u32$1 ? u32$1 : u8)(e - s);
        n.set(v.subarray(s, e));
        return n;
    };
    const max = (a) => {
        let m = a[0];
        for (let i = 1, count = a.length; i < count; ++i) {
            if (a[i] > m)
                m = a[i];
        }
        return m;
    };
    const inflt = (dat, buf, st) => {
        const noSt = !st || st.i;
        if (!st)
            st = {};
        const sl = dat.length;
        const noBuf = !buf || !noSt;
        if (!buf)
            buf = new u8(sl * 3);
        const cbuf = (l) => {
            let bl = buf.length;
            if (l > bl) {
                const nbuf = new u8(Math.max(bl << 1, l));
                nbuf.set(buf);
                buf = nbuf;
            }
        };
        let final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
        if (final && !lm)
            return buf;
        const tbts = sl << 3;
        do {
            if (!lm) {
                st.f = final = bits(dat, pos, 1);
                const type = bits(dat, pos + 1, 3);
                pos += 3;
                if (!type) {
                    const s = shft(pos) + 4, l = dat[s - 4] | (dat[s - 3] << 8), t = s + l;
                    if (t > sl) {
                        if (noSt)
                            throw 'unexpected EOF';
                        break;
                    }
                    if (noBuf)
                        cbuf(bt + l);
                    buf.set(dat.subarray(s, t), bt);
                    st.b = bt += l, st.p = pos = t << 3;
                    continue;
                }
                else if (type == 1)
                    lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
                else if (type == 2) {
                    const hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
                    const tl = hLit + bits(dat, pos + 5, 31) + 1;
                    pos += 14;
                    const ldt = new u8(tl);
                    const clt = new u8(19);
                    for (let i = 0; i < hcLen; ++i) {
                        clt[clim[i]] = bits(dat, pos + i * 3, 7);
                    }
                    pos += hcLen * 3;
                    const clb = max(clt), clbmsk = (1 << clb) - 1;
                    if (!noSt && pos + tl * (clb + 7) > tbts)
                        break;
                    const clm = hMap(clt, clb);
                    for (let i = 0; i < tl;) {
                        const r = clm[bits(dat, pos, clbmsk)];
                        pos += r & 15;
                        const s = r >>> 4;
                        if (s < 16) {
                            ldt[i++] = s;
                        }
                        else {
                            let c = 0, n = 0;
                            if (s == 16)
                                n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
                            else if (s == 17)
                                n = 3 + bits(dat, pos, 7), pos += 3;
                            else if (s == 18)
                                n = 11 + bits(dat, pos, 127), pos += 7;
                            while (n--)
                                ldt[i++] = c;
                        }
                    }
                    const lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
                    lbt = max(lt);
                    dbt = max(dt);
                    lm = hMap(lt, lbt);
                    dm = hMap(dt, dbt);
                }
                else
                    throw 'invalid block type';
                if (pos > tbts)
                    throw 'unexpected EOF';
            }
            if (noBuf)
                cbuf(bt + 131072);
            const lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
            const mxa = lbt + dbt + 18;
            while (noSt || pos + mxa < tbts) {
                const c = lm[bits16(dat, pos) & lms], sym = c >>> 4;
                pos += c & 15;
                if (pos > tbts)
                    throw 'unexpected EOF';
                if (!c)
                    throw 'invalid length/literal';
                if (sym < 256)
                    buf[bt++] = sym;
                else if (sym == 256) {
                    lm = undefined;
                    break;
                }
                else {
                    let add = sym - 254;
                    if (sym > 264) {
                        const i = sym - 257, b = fleb[i];
                        add = bits(dat, pos, (1 << b) - 1) + fl[i];
                        pos += b;
                    }
                    const d = dm[bits16(dat, pos) & dms], dsym = d >>> 4;
                    if (!d)
                        throw 'invalid distance';
                    pos += d & 15;
                    let dt = fd[dsym];
                    if (dsym > 3) {
                        const b = fdeb[dsym];
                        dt += bits16(dat, pos) & ((1 << b) - 1), pos += b;
                    }
                    if (pos > tbts)
                        throw 'unexpected EOF';
                    if (noBuf)
                        cbuf(bt + 131072);
                    const end = bt + add;
                    for (; bt < end; bt += 4) {
                        buf[bt] = buf[bt - dt];
                        buf[bt + 1] = buf[bt + 1 - dt];
                        buf[bt + 2] = buf[bt + 2 - dt];
                        buf[bt + 3] = buf[bt + 3 - dt];
                    }
                    bt = end;
                }
            }
            st.l = lm, st.p = pos, st.b = bt;
            if (lm)
                final = 1, st.m = lbt, st.d = dm, st.n = dbt;
        } while (!final);
        return bt == buf.length ? buf : slc(buf, 0, bt);
    };
    const zlv = (d) => {
        if ((d[0] & 15) != 8 || (d[0] >>> 4) > 7 || ((d[0] << 8 | d[1]) % 31))
            throw 'invalid zlib data';
        if (d[1] & 32)
            throw 'invalid zlib data: preset dictionaries not supported';
    };
    function unzlibSync(data, out) {
        return inflt((zlv(data), data.subarray(2, -4)), out);
    }

    var lenIn = 182731;
    var lenOut = 356003;
    var bytes_1 = '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';

    const wasmBytes =  unzlibSync(base64Decode$1(bytes_1, new Uint8Array(lenIn)), new Uint8Array(lenOut));

    const createWasm =  createWasmFn('crypto', wasmBytes);

    const bridge = new Bridge(createWasm);
    async function initBridge(createWasm) {
        return bridge.init(createWasm);
    }

    function withWasm(fn) {
        return (...params) => {
            if (!bridge.wasm) {
                throw new Error('The WASM interface has not been initialized. Ensure that you wait for the initialization Promise with waitReady() from @pezkuwi/wasm-crypto (or cryptoWaitReady() from @pezkuwi/util-crypto) before attempting to use WASM-only interfaces.');
            }
            return fn(bridge.wasm, ...params);
        };
    }
    const bip39Generate =  withWasm((wasm, words) => {
        wasm.ext_bip39_generate(8, words);
        return bridge.resultString();
    });
    const bip39ToEntropy =  withWasm((wasm, phrase) => {
        wasm.ext_bip39_to_entropy(8, ...bridge.allocString(phrase));
        return bridge.resultU8a();
    });
    const bip39ToMiniSecret =  withWasm((wasm, phrase, password) => {
        wasm.ext_bip39_to_mini_secret(8, ...bridge.allocString(phrase), ...bridge.allocString(password));
        return bridge.resultU8a();
    });
    const bip39ToSeed =  withWasm((wasm, phrase, password) => {
        wasm.ext_bip39_to_seed(8, ...bridge.allocString(phrase), ...bridge.allocString(password));
        return bridge.resultU8a();
    });
    const bip39Validate =  withWasm((wasm, phrase) => {
        const ret = wasm.ext_bip39_validate(...bridge.allocString(phrase));
        return ret !== 0;
    });
    const ed25519KeypairFromSeed =  withWasm((wasm, seed) => {
        wasm.ext_ed_from_seed(8, ...bridge.allocU8a(seed));
        return bridge.resultU8a();
    });
    const ed25519Sign$1 =  withWasm((wasm, pubkey, seckey, message) => {
        wasm.ext_ed_sign(8, ...bridge.allocU8a(pubkey), ...bridge.allocU8a(seckey), ...bridge.allocU8a(message));
        return bridge.resultU8a();
    });
    const ed25519Verify$1 =  withWasm((wasm, signature, message, pubkey) => {
        const ret = wasm.ext_ed_verify(...bridge.allocU8a(signature), ...bridge.allocU8a(message), ...bridge.allocU8a(pubkey));
        return ret !== 0;
    });
    const secp256k1FromSeed =  withWasm((wasm, seckey) => {
        wasm.ext_secp_from_seed(8, ...bridge.allocU8a(seckey));
        return bridge.resultU8a();
    });
    const secp256k1Compress$1 =  withWasm((wasm, pubkey) => {
        wasm.ext_secp_pub_compress(8, ...bridge.allocU8a(pubkey));
        return bridge.resultU8a();
    });
    const secp256k1Expand$1 =  withWasm((wasm, pubkey) => {
        wasm.ext_secp_pub_expand(8, ...bridge.allocU8a(pubkey));
        return bridge.resultU8a();
    });
    const secp256k1Recover$1 =  withWasm((wasm, msgHash, sig, recovery) => {
        wasm.ext_secp_recover(8, ...bridge.allocU8a(msgHash), ...bridge.allocU8a(sig), recovery);
        return bridge.resultU8a();
    });
    const secp256k1Sign$1 =  withWasm((wasm, msgHash, seckey) => {
        wasm.ext_secp_sign(8, ...bridge.allocU8a(msgHash), ...bridge.allocU8a(seckey));
        return bridge.resultU8a();
    });
    const blake2b$1 =  withWasm((wasm, data, key, size) => {
        wasm.ext_blake2b(8, ...bridge.allocU8a(data), ...bridge.allocU8a(key), size);
        return bridge.resultU8a();
    });
    const hmacSha256 =  withWasm((wasm, key, data) => {
        wasm.ext_hmac_sha256(8, ...bridge.allocU8a(key), ...bridge.allocU8a(data));
        return bridge.resultU8a();
    });
    const hmacSha512 =  withWasm((wasm, key, data) => {
        wasm.ext_hmac_sha512(8, ...bridge.allocU8a(key), ...bridge.allocU8a(data));
        return bridge.resultU8a();
    });
    const keccak256 =  withWasm((wasm, data) => {
        wasm.ext_keccak256(8, ...bridge.allocU8a(data));
        return bridge.resultU8a();
    });
    const keccak512 =  withWasm((wasm, data) => {
        wasm.ext_keccak512(8, ...bridge.allocU8a(data));
        return bridge.resultU8a();
    });
    const pbkdf2$1 =  withWasm((wasm, data, salt, rounds) => {
        wasm.ext_pbkdf2(8, ...bridge.allocU8a(data), ...bridge.allocU8a(salt), rounds);
        return bridge.resultU8a();
    });
    const scrypt$1 =  withWasm((wasm, password, salt, log2n, r, p) => {
        wasm.ext_scrypt(8, ...bridge.allocU8a(password), ...bridge.allocU8a(salt), log2n, r, p);
        return bridge.resultU8a();
    });
    const sha256$1 =  withWasm((wasm, data) => {
        wasm.ext_sha256(8, ...bridge.allocU8a(data));
        return bridge.resultU8a();
    });
    const sha512$2 =  withWasm((wasm, data) => {
        wasm.ext_sha512(8, ...bridge.allocU8a(data));
        return bridge.resultU8a();
    });
    const twox =  withWasm((wasm, data, rounds) => {
        wasm.ext_twox(8, ...bridge.allocU8a(data), rounds);
        return bridge.resultU8a();
    });
    function isReady() {
        return !!bridge.wasm;
    }
    async function waitReady() {
        try {
            const wasm = await initBridge();
            return !!wasm;
        }
        catch {
            return false;
        }
    }

    const cryptoIsReady = isReady;
    function cryptoWaitReady() {
        return waitReady()
            .then(() => {
            if (!isReady()) {
                throw new Error('Unable to initialize @pezkuwi/util-crypto');
            }
            return true;
        })
            .catch(() => false);
    }

    cryptoWaitReady().catch(() => {
    });

    const packageInfo = { name: '@pezkuwi/util-crypto', path: (({ url: (typeof document === 'undefined' && typeof location === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : typeof document === 'undefined' ? location.href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('bundle-pezkuwi-util-crypto.js', document.baseURI).href)) }) && (typeof document === 'undefined' && typeof location === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : typeof document === 'undefined' ? location.href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('bundle-pezkuwi-util-crypto.js', document.baseURI).href))) ? new URL((typeof document === 'undefined' && typeof location === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : typeof document === 'undefined' ? location.href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('bundle-pezkuwi-util-crypto.js', document.baseURI).href))).pathname.substring(0, new URL((typeof document === 'undefined' && typeof location === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : typeof document === 'undefined' ? location.href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('bundle-pezkuwi-util-crypto.js', document.baseURI).href))).pathname.lastIndexOf('/') + 1) : 'auto', type: 'esm', version: '14.0.26' };

    /*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */
    function isBytes$2(a) {
        return a instanceof Uint8Array || (ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array');
    }
    function abytes$2(b, ...lengths) {
        if (!isBytes$2(b))
            throw new Error('Uint8Array expected');
        if (lengths.length > 0 && !lengths.includes(b.length))
            throw new Error('Uint8Array expected of length ' + lengths + ', got length=' + b.length);
    }
    function isArrayOf(isString, arr) {
        if (!Array.isArray(arr))
            return false;
        if (arr.length === 0)
            return true;
        if (isString) {
            return arr.every((item) => typeof item === 'string');
        }
        else {
            return arr.every((item) => Number.isSafeInteger(item));
        }
    }
    function afn(input) {
        if (typeof input !== 'function')
            throw new Error('function expected');
        return true;
    }
    function astr(label, input) {
        if (typeof input !== 'string')
            throw new Error(`${label}: string expected`);
        return true;
    }
    function anumber$1(n) {
        if (!Number.isSafeInteger(n))
            throw new Error(`invalid integer: ${n}`);
    }
    function aArr(input) {
        if (!Array.isArray(input))
            throw new Error('array expected');
    }
    function astrArr(label, input) {
        if (!isArrayOf(true, input))
            throw new Error(`${label}: array of strings expected`);
    }
    function anumArr(label, input) {
        if (!isArrayOf(false, input))
            throw new Error(`${label}: array of numbers expected`);
    }
    function chain(...args) {
        const id = (a) => a;
        const wrap = (a, b) => (c) => a(b(c));
        const encode = args.map((x) => x.encode).reduceRight(wrap, id);
        const decode = args.map((x) => x.decode).reduce(wrap, id);
        return { encode, decode };
    }
    function alphabet(letters) {
        const lettersA = typeof letters === 'string' ? letters.split('') : letters;
        const len = lettersA.length;
        astrArr('alphabet', lettersA);
        const indexes = new Map(lettersA.map((l, i) => [l, i]));
        return {
            encode: (digits) => {
                aArr(digits);
                return digits.map((i) => {
                    if (!Number.isSafeInteger(i) || i < 0 || i >= len)
                        throw new Error(`alphabet.encode: digit index outside alphabet "${i}". Allowed: ${letters}`);
                    return lettersA[i];
                });
            },
            decode: (input) => {
                aArr(input);
                return input.map((letter) => {
                    astr('alphabet.decode', letter);
                    const i = indexes.get(letter);
                    if (i === undefined)
                        throw new Error(`Unknown letter: "${letter}". Allowed: ${letters}`);
                    return i;
                });
            },
        };
    }
    function join(separator = '') {
        astr('join', separator);
        return {
            encode: (from) => {
                astrArr('join.decode', from);
                return from.join(separator);
            },
            decode: (to) => {
                astr('join.decode', to);
                return to.split(separator);
            },
        };
    }
    function padding(bits, chr = '=') {
        anumber$1(bits);
        astr('padding', chr);
        return {
            encode(data) {
                astrArr('padding.encode', data);
                while ((data.length * bits) % 8)
                    data.push(chr);
                return data;
            },
            decode(input) {
                astrArr('padding.decode', input);
                let end = input.length;
                if ((end * bits) % 8)
                    throw new Error('padding: invalid, string should have whole number of bytes');
                for (; end > 0 && input[end - 1] === chr; end--) {
                    const last = end - 1;
                    const byte = last * bits;
                    if (byte % 8 === 0)
                        throw new Error('padding: invalid, string has too much padding');
                }
                return input.slice(0, end);
            },
        };
    }
    function normalize$1(fn) {
        afn(fn);
        return { encode: (from) => from, decode: (to) => fn(to) };
    }
    function convertRadix(data, from, to) {
        if (from < 2)
            throw new Error(`convertRadix: invalid from=${from}, base cannot be less than 2`);
        if (to < 2)
            throw new Error(`convertRadix: invalid to=${to}, base cannot be less than 2`);
        aArr(data);
        if (!data.length)
            return [];
        let pos = 0;
        const res = [];
        const digits = Array.from(data, (d) => {
            anumber$1(d);
            if (d < 0 || d >= from)
                throw new Error(`invalid integer: ${d}`);
            return d;
        });
        const dlen = digits.length;
        while (true) {
            let carry = 0;
            let done = true;
            for (let i = pos; i < dlen; i++) {
                const digit = digits[i];
                const fromCarry = from * carry;
                const digitBase = fromCarry + digit;
                if (!Number.isSafeInteger(digitBase) ||
                    fromCarry / from !== carry ||
                    digitBase - digit !== fromCarry) {
                    throw new Error('convertRadix: carry overflow');
                }
                const div = digitBase / to;
                carry = digitBase % to;
                const rounded = Math.floor(div);
                digits[i] = rounded;
                if (!Number.isSafeInteger(rounded) || rounded * to + carry !== digitBase)
                    throw new Error('convertRadix: carry overflow');
                if (!done)
                    continue;
                else if (!rounded)
                    pos = i;
                else
                    done = false;
            }
            res.push(carry);
            if (done)
                break;
        }
        for (let i = 0; i < data.length - 1 && data[i] === 0; i++)
            res.push(0);
        return res.reverse();
    }
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const radix2carry =  (from, to) => from + (to - gcd(from, to));
    const powers =  (() => {
        let res = [];
        for (let i = 0; i < 40; i++)
            res.push(2 ** i);
        return res;
    })();
    function convertRadix2(data, from, to, padding) {
        aArr(data);
        if (from <= 0 || from > 32)
            throw new Error(`convertRadix2: wrong from=${from}`);
        if (to <= 0 || to > 32)
            throw new Error(`convertRadix2: wrong to=${to}`);
        if (radix2carry(from, to) > 32) {
            throw new Error(`convertRadix2: carry overflow from=${from} to=${to} carryBits=${radix2carry(from, to)}`);
        }
        let carry = 0;
        let pos = 0;
        const max = powers[from];
        const mask = powers[to] - 1;
        const res = [];
        for (const n of data) {
            anumber$1(n);
            if (n >= max)
                throw new Error(`convertRadix2: invalid data word=${n} from=${from}`);
            carry = (carry << from) | n;
            if (pos + from > 32)
                throw new Error(`convertRadix2: carry overflow pos=${pos} from=${from}`);
            pos += from;
            for (; pos >= to; pos -= to)
                res.push(((carry >> (pos - to)) & mask) >>> 0);
            const pow = powers[pos];
            if (pow === undefined)
                throw new Error('invalid carry');
            carry &= pow - 1;
        }
        carry = (carry << (to - pos)) & mask;
        if (!padding && pos >= from)
            throw new Error('Excess padding');
        if (!padding && carry > 0)
            throw new Error(`Non-zero padding: ${carry}`);
        if (padding && pos > 0)
            res.push(carry >>> 0);
        return res;
    }
    function radix(num) {
        anumber$1(num);
        const _256 = 2 ** 8;
        return {
            encode: (bytes) => {
                if (!isBytes$2(bytes))
                    throw new Error('radix.encode input should be Uint8Array');
                return convertRadix(Array.from(bytes), _256, num);
            },
            decode: (digits) => {
                anumArr('radix.decode', digits);
                return Uint8Array.from(convertRadix(digits, num, _256));
            },
        };
    }
    function radix2(bits, revPadding = false) {
        anumber$1(bits);
        if (bits <= 0 || bits > 32)
            throw new Error('radix2: bits should be in (0..32]');
        if (radix2carry(8, bits) > 32 || radix2carry(bits, 8) > 32)
            throw new Error('radix2: carry overflow');
        return {
            encode: (bytes) => {
                if (!isBytes$2(bytes))
                    throw new Error('radix2.encode input should be Uint8Array');
                return convertRadix2(Array.from(bytes), 8, bits, !revPadding);
            },
            decode: (digits) => {
                anumArr('radix2.decode', digits);
                return Uint8Array.from(convertRadix2(digits, bits, 8, revPadding));
            },
        };
    }
    function unsafeWrapper(fn) {
        afn(fn);
        return function (...args) {
            try {
                return fn.apply(null, args);
            }
            catch (e) { }
        };
    }
    function checksum(len, fn) {
        anumber$1(len);
        afn(fn);
        return {
            encode(data) {
                if (!isBytes$2(data))
                    throw new Error('checksum.encode: input should be Uint8Array');
                const sum = fn(data).slice(0, len);
                const res = new Uint8Array(data.length + len);
                res.set(data);
                res.set(sum, data.length);
                return res;
            },
            decode(data) {
                if (!isBytes$2(data))
                    throw new Error('checksum.decode: input should be Uint8Array');
                const payload = data.slice(0, -len);
                const oldChecksum = data.slice(-len);
                const newChecksum = fn(payload).slice(0, len);
                for (let i = 0; i < len; i++)
                    if (newChecksum[i] !== oldChecksum[i])
                        throw new Error('Invalid checksum');
                return payload;
            },
        };
    }
    const utils = {
        alphabet, chain, checksum, convertRadix, convertRadix2, radix, radix2, join, padding,
    };
    chain(radix2(4), alphabet('0123456789ABCDEF'), join(''));
    chain(radix2(5), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'), padding(5), join(''));
    chain(radix2(5), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'), join(''));
    chain(radix2(5), alphabet('0123456789ABCDEFGHIJKLMNOPQRSTUV'), padding(5), join(''));
    chain(radix2(5), alphabet('0123456789ABCDEFGHIJKLMNOPQRSTUV'), join(''));
    chain(radix2(5), alphabet('0123456789ABCDEFGHJKMNPQRSTVWXYZ'), join(''), normalize$1((s) => s.toUpperCase().replace(/O/g, '0').replace(/[IL]/g, '1')));
    const hasBase64Builtin =  (() => typeof Uint8Array.from([]).toBase64 === 'function' &&
        typeof Uint8Array.fromBase64 === 'function')();
    const decodeBase64Builtin = (s, isUrl) => {
        astr('base64', s);
        const re = /^[A-Za-z0-9=+/]+$/;
        const alphabet = 'base64';
        if (s.length > 0 && !re.test(s))
            throw new Error('invalid base64');
        return Uint8Array.fromBase64(s, { alphabet, lastChunkHandling: 'strict' });
    };
    const base64 = hasBase64Builtin ? {
        encode(b) { abytes$2(b); return b.toBase64(); },
        decode(s) { return decodeBase64Builtin(s); },
    } : chain(radix2(6), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'), padding(6), join(''));
    chain(radix2(6), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'), join(''));
    hasBase64Builtin ? {
        } : chain(radix2(6), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'), padding(6), join(''));
    chain(radix2(6), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'), join(''));
    const genBase58 =  (abc) => chain(radix(58), alphabet(abc), join(''));
    const base58 = genBase58('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
    genBase58('123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ');
    genBase58('rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz');
    const BECH_ALPHABET = chain(alphabet('qpzry9x8gf2tvdw0s3jn54khce6mua7l'), join(''));
    const POLYMOD_GENERATORS = [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3];
    function bech32Polymod(pre) {
        const b = pre >> 25;
        let chk = (pre & 0x1ffffff) << 5;
        for (let i = 0; i < POLYMOD_GENERATORS.length; i++) {
            if (((b >> i) & 1) === 1)
                chk ^= POLYMOD_GENERATORS[i];
        }
        return chk;
    }
    function bechChecksum(prefix, words, encodingConst = 1) {
        const len = prefix.length;
        let chk = 1;
        for (let i = 0; i < len; i++) {
            const c = prefix.charCodeAt(i);
            if (c < 33 || c > 126)
                throw new Error(`Invalid prefix (${prefix})`);
            chk = bech32Polymod(chk) ^ (c >> 5);
        }
        chk = bech32Polymod(chk);
        for (let i = 0; i < len; i++)
            chk = bech32Polymod(chk) ^ (prefix.charCodeAt(i) & 0x1f);
        for (let v of words)
            chk = bech32Polymod(chk) ^ v;
        for (let i = 0; i < 6; i++)
            chk = bech32Polymod(chk);
        chk ^= encodingConst;
        return BECH_ALPHABET.encode(convertRadix2([chk % powers[30]], 30, 5, false));
    }
    function genBech32(encoding) {
        const ENCODING_CONST = encoding === 'bech32' ? 1 : 0x2bc830a3;
        const _words = radix2(5);
        const fromWords = _words.decode;
        const toWords = _words.encode;
        const fromWordsUnsafe = unsafeWrapper(fromWords);
        function encode(prefix, words, limit = 90) {
            astr('bech32.encode prefix', prefix);
            if (isBytes$2(words))
                words = Array.from(words);
            anumArr('bech32.encode', words);
            const plen = prefix.length;
            if (plen === 0)
                throw new TypeError(`Invalid prefix length ${plen}`);
            const actualLength = plen + 7 + words.length;
            if (limit !== false && actualLength > limit)
                throw new TypeError(`Length ${actualLength} exceeds limit ${limit}`);
            const lowered = prefix.toLowerCase();
            const sum = bechChecksum(lowered, words, ENCODING_CONST);
            return `${lowered}1${BECH_ALPHABET.encode(words)}${sum}`;
        }
        function decode(str, limit = 90) {
            astr('bech32.decode input', str);
            const slen = str.length;
            if (slen < 8 || (limit !== false && slen > limit))
                throw new TypeError(`invalid string length: ${slen} (${str}). Expected (8..${limit})`);
            const lowered = str.toLowerCase();
            if (str !== lowered && str !== str.toUpperCase())
                throw new Error(`String must be lowercase or uppercase`);
            const sepIndex = lowered.lastIndexOf('1');
            if (sepIndex === 0 || sepIndex === -1)
                throw new Error(`Letter "1" must be present between prefix and data only`);
            const prefix = lowered.slice(0, sepIndex);
            const data = lowered.slice(sepIndex + 1);
            if (data.length < 6)
                throw new Error('Data must be at least 6 characters long');
            const words = BECH_ALPHABET.decode(data).slice(0, -6);
            const sum = bechChecksum(prefix, words, ENCODING_CONST);
            if (!data.endsWith(sum))
                throw new Error(`Invalid checksum in ${str}: expected "${sum}"`);
            return { prefix, words };
        }
        const decodeUnsafe = unsafeWrapper(decode);
        function decodeToBytes(str) {
            const { prefix, words } = decode(str, false);
            return { prefix, words, bytes: fromWords(words) };
        }
        function encodeFromBytes(prefix, bytes) {
            return encode(prefix, toWords(bytes));
        }
        return {
            encode,
            decode,
            encodeFromBytes,
            decodeToBytes,
            decodeUnsafe,
            fromWords,
            fromWordsUnsafe,
            toWords,
        };
    }
    genBech32('bech32');
    genBech32('bech32m');
    const hasHexBuiltin$1 =  (() => typeof Uint8Array.from([]).toHex === 'function' &&
        typeof Uint8Array.fromHex === 'function')();
    const hexBuiltin = {
        };
    hasHexBuiltin$1
        ? hexBuiltin
        : chain(radix2(4), alphabet('0123456789abcdef'), join(''), normalize$1((s) => {
            if (typeof s !== 'string' || s.length % 2 !== 0)
                throw new TypeError(`hex.decode: expected string, got ${typeof s} with length ${s.length}`);
            return s.toLowerCase();
        }));

    function createDecode({ coder, ipfs }, validate) {
        return (value, ipfsCompat) => {
            validate(value, ipfsCompat);
            return coder.decode(ipfs && ipfsCompat
                ? value.substring(1)
                : value);
        };
    }
    function createEncode({ coder, ipfs }) {
        return (value, ipfsCompat) => {
            const out = coder.encode(util.u8aToU8a(value));
            return ipfs && ipfsCompat
                ? `${ipfs}${out}`
                : out;
        };
    }
    function createIs(validate) {
        return (value, ipfsCompat) => {
            try {
                return validate(value, ipfsCompat);
            }
            catch {
                return false;
            }
        };
    }
    function createValidate({ chars, ipfs, type, withPadding }) {
        return (value, ipfsCompat) => {
            if (typeof value !== 'string') {
                throw new Error(`Expected ${type} string input`);
            }
            else if (ipfs && ipfsCompat && !value.startsWith(ipfs)) {
                throw new Error(`Expected ipfs-compatible ${type} to start with '${ipfs}'`);
            }
            for (let i = (ipfsCompat ? 1 : 0), count = value.length; i < count; i++) {
                if (chars.includes(value[i])) ;
                else if (withPadding && value[i] === '=') {
                    if (i === count - 1) ;
                    else if (value[i + 1] === '=') ;
                    else {
                        throw new Error(`Invalid ${type} padding sequence "${value[i]}${value[i + 1]}" at index ${i}`);
                    }
                }
                else {
                    throw new Error(`Invalid ${type} character "${value[i]}" (0x${value.charCodeAt(i).toString(16)}) at index ${i}`);
                }
            }
            return true;
        };
    }

    const config$2 = {
        chars: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
        coder: base58,
        ipfs: 'z',
        type: 'base58'
    };
    const base58Validate =  createValidate(config$2);
    const base58Decode =  createDecode(config$2, base58Validate);
    const base58Encode =  createEncode(config$2);
    const isBase58 =  createIs(base58Validate);

    const crypto = typeof globalThis === 'object' && 'crypto' in globalThis ? globalThis.crypto : undefined;

    /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
    function isBytes$1(a) {
        return a instanceof Uint8Array || (ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array');
    }
    function anumber(n) {
        if (!Number.isSafeInteger(n) || n < 0)
            throw new Error('positive integer expected, got ' + n);
    }
    function abytes$1(b, ...lengths) {
        if (!isBytes$1(b))
            throw new Error('Uint8Array expected');
        if (lengths.length > 0 && !lengths.includes(b.length))
            throw new Error('Uint8Array expected of length ' + lengths + ', got length=' + b.length);
    }
    function ahash(h) {
        if (typeof h !== 'function' || typeof h.create !== 'function')
            throw new Error('Hash should be wrapped by utils.createHasher');
        anumber(h.outputLen);
        anumber(h.blockLen);
    }
    function aexists(instance, checkFinished = true) {
        if (instance.destroyed)
            throw new Error('Hash instance has been destroyed');
        if (checkFinished && instance.finished)
            throw new Error('Hash#digest() has already been called');
    }
    function aoutput(out, instance) {
        abytes$1(out);
        const min = instance.outputLen;
        if (out.length < min) {
            throw new Error('digestInto() expects output buffer of length at least ' + min);
        }
    }
    function u32(arr) {
        return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
    }
    function clean(...arrays) {
        for (let i = 0; i < arrays.length; i++) {
            arrays[i].fill(0);
        }
    }
    function createView(arr) {
        return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
    }
    function rotr(word, shift) {
        return (word << (32 - shift)) | (word >>> shift);
    }
    function rotl$1(word, shift) {
        return (word << shift) | ((word >>> (32 - shift)) >>> 0);
    }
    const isLE =  (() => new Uint8Array(new Uint32Array([0x11223344]).buffer)[0] === 0x44)();
    function byteSwap(word) {
        return (((word << 24) & 0xff000000) |
            ((word << 8) & 0xff0000) |
            ((word >>> 8) & 0xff00) |
            ((word >>> 24) & 0xff));
    }
    const swap8IfBE = isLE
        ? (n) => n
        : (n) => byteSwap(n);
    function byteSwap32(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = byteSwap(arr[i]);
        }
        return arr;
    }
    const swap32IfBE = isLE
        ? (u) => u
        : byteSwap32;
    const hasHexBuiltin =  (() =>
    typeof Uint8Array.from([]).toHex === 'function' && typeof Uint8Array.fromHex === 'function')();
    const hexes =  Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, '0'));
    function bytesToHex(bytes) {
        abytes$1(bytes);
        if (hasHexBuiltin)
            return bytes.toHex();
        let hex = '';
        for (let i = 0; i < bytes.length; i++) {
            hex += hexes[bytes[i]];
        }
        return hex;
    }
    const asciis = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
    function asciiToBase16(ch) {
        if (ch >= asciis._0 && ch <= asciis._9)
            return ch - asciis._0;
        if (ch >= asciis.A && ch <= asciis.F)
            return ch - (asciis.A - 10);
        if (ch >= asciis.a && ch <= asciis.f)
            return ch - (asciis.a - 10);
        return;
    }
    function hexToBytes(hex) {
        if (typeof hex !== 'string')
            throw new Error('hex string expected, got ' + typeof hex);
        if (hasHexBuiltin)
            return Uint8Array.fromHex(hex);
        const hl = hex.length;
        const al = hl / 2;
        if (hl % 2)
            throw new Error('hex string expected, got unpadded hex of length ' + hl);
        const array = new Uint8Array(al);
        for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
            const n1 = asciiToBase16(hex.charCodeAt(hi));
            const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
            if (n1 === undefined || n2 === undefined) {
                const char = hex[hi] + hex[hi + 1];
                throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
            }
            array[ai] = n1 * 16 + n2;
        }
        return array;
    }
    function utf8ToBytes(str) {
        if (typeof str !== 'string')
            throw new Error('string expected');
        return new Uint8Array(new TextEncoder().encode(str));
    }
    function toBytes(data) {
        if (typeof data === 'string')
            data = utf8ToBytes(data);
        abytes$1(data);
        return data;
    }
    function kdfInputToBytes(data) {
        if (typeof data === 'string')
            data = utf8ToBytes(data);
        abytes$1(data);
        return data;
    }
    function concatBytes(...arrays) {
        let sum = 0;
        for (let i = 0; i < arrays.length; i++) {
            const a = arrays[i];
            abytes$1(a);
            sum += a.length;
        }
        const res = new Uint8Array(sum);
        for (let i = 0, pad = 0; i < arrays.length; i++) {
            const a = arrays[i];
            res.set(a, pad);
            pad += a.length;
        }
        return res;
    }
    function checkOpts(defaults, opts) {
        if (opts !== undefined && {}.toString.call(opts) !== '[object Object]')
            throw new Error('options should be object or undefined');
        const merged = Object.assign(defaults, opts);
        return merged;
    }
    class Hash {
    }
    function createHasher$1(hashCons) {
        const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
        const tmp = hashCons();
        hashC.outputLen = tmp.outputLen;
        hashC.blockLen = tmp.blockLen;
        hashC.create = () => hashCons();
        return hashC;
    }
    function createOptHasher(hashCons) {
        const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
        const tmp = hashCons({});
        hashC.outputLen = tmp.outputLen;
        hashC.blockLen = tmp.blockLen;
        hashC.create = (opts) => hashCons(opts);
        return hashC;
    }
    function createXOFer(hashCons) {
        const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
        const tmp = hashCons({});
        hashC.outputLen = tmp.outputLen;
        hashC.blockLen = tmp.blockLen;
        hashC.create = (opts) => hashCons(opts);
        return hashC;
    }
    function randomBytes(bytesLength = 32) {
        if (crypto && typeof crypto.getRandomValues === 'function') {
            return crypto.getRandomValues(new Uint8Array(bytesLength));
        }
        if (crypto && typeof crypto.randomBytes === 'function') {
            return Uint8Array.from(crypto.randomBytes(bytesLength));
        }
        throw new Error('crypto.getRandomValues must be defined');
    }

    const BSIGMA =  Uint8Array.from([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3,
        11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4,
        7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8,
        9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13,
        2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9,
        12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11,
        13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10,
        6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5,
        10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0,
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3,
        11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4,
        7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8,
        9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13,
        2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9,
    ]);
    function G1s(a, b, c, d, x) {
        a = (a + b + x) | 0;
        d = rotr(d ^ a, 16);
        c = (c + d) | 0;
        b = rotr(b ^ c, 12);
        return { a, b, c, d };
    }
    function G2s(a, b, c, d, x) {
        a = (a + b + x) | 0;
        d = rotr(d ^ a, 8);
        c = (c + d) | 0;
        b = rotr(b ^ c, 7);
        return { a, b, c, d };
    }

    function setBigUint64(view, byteOffset, value, isLE) {
        if (typeof view.setBigUint64 === 'function')
            return view.setBigUint64(byteOffset, value, isLE);
        const _32n = BigInt(32);
        const _u32_max = BigInt(0xffffffff);
        const wh = Number((value >> _32n) & _u32_max);
        const wl = Number(value & _u32_max);
        const h = isLE ? 4 : 0;
        const l = isLE ? 0 : 4;
        view.setUint32(byteOffset + h, wh, isLE);
        view.setUint32(byteOffset + l, wl, isLE);
    }
    function Chi(a, b, c) {
        return (a & b) ^ (~a & c);
    }
    function Maj(a, b, c) {
        return (a & b) ^ (a & c) ^ (b & c);
    }
    class HashMD extends Hash {
        constructor(blockLen, outputLen, padOffset, isLE) {
            super();
            this.finished = false;
            this.length = 0;
            this.pos = 0;
            this.destroyed = false;
            this.blockLen = blockLen;
            this.outputLen = outputLen;
            this.padOffset = padOffset;
            this.isLE = isLE;
            this.buffer = new Uint8Array(blockLen);
            this.view = createView(this.buffer);
        }
        update(data) {
            aexists(this);
            data = toBytes(data);
            abytes$1(data);
            const { view, buffer, blockLen } = this;
            const len = data.length;
            for (let pos = 0; pos < len;) {
                const take = Math.min(blockLen - this.pos, len - pos);
                if (take === blockLen) {
                    const dataView = createView(data);
                    for (; blockLen <= len - pos; pos += blockLen)
                        this.process(dataView, pos);
                    continue;
                }
                buffer.set(data.subarray(pos, pos + take), this.pos);
                this.pos += take;
                pos += take;
                if (this.pos === blockLen) {
                    this.process(view, 0);
                    this.pos = 0;
                }
            }
            this.length += data.length;
            this.roundClean();
            return this;
        }
        digestInto(out) {
            aexists(this);
            aoutput(out, this);
            this.finished = true;
            const { buffer, view, blockLen, isLE } = this;
            let { pos } = this;
            buffer[pos++] = 0b10000000;
            clean(this.buffer.subarray(pos));
            if (this.padOffset > blockLen - pos) {
                this.process(view, 0);
                pos = 0;
            }
            for (let i = pos; i < blockLen; i++)
                buffer[i] = 0;
            setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
            this.process(view, 0);
            const oview = createView(out);
            const len = this.outputLen;
            if (len % 4)
                throw new Error('_sha2: outputLen should be aligned to 32bit');
            const outLen = len / 4;
            const state = this.get();
            if (outLen > state.length)
                throw new Error('_sha2: outputLen bigger than state');
            for (let i = 0; i < outLen; i++)
                oview.setUint32(4 * i, state[i], isLE);
        }
        digest() {
            const { buffer, outputLen } = this;
            this.digestInto(buffer);
            const res = buffer.slice(0, outputLen);
            this.destroy();
            return res;
        }
        _cloneInto(to) {
            to || (to = new this.constructor());
            to.set(...this.get());
            const { blockLen, buffer, length, finished, destroyed, pos } = this;
            to.destroyed = destroyed;
            to.finished = finished;
            to.length = length;
            to.pos = pos;
            if (length % blockLen)
                to.buffer.set(buffer);
            return to;
        }
        clone() {
            return this._cloneInto();
        }
    }
    const SHA256_IV =  Uint32Array.from([
        0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
    ]);
    const SHA224_IV =  Uint32Array.from([
        0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4,
    ]);
    const SHA384_IV =  Uint32Array.from([
        0xcbbb9d5d, 0xc1059ed8, 0x629a292a, 0x367cd507, 0x9159015a, 0x3070dd17, 0x152fecd8, 0xf70e5939,
        0x67332667, 0xffc00b31, 0x8eb44a87, 0x68581511, 0xdb0c2e0d, 0x64f98fa7, 0x47b5481d, 0xbefa4fa4,
    ]);
    const SHA512_IV =  Uint32Array.from([
        0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372, 0xfe94f82b, 0xa54ff53a, 0x5f1d36f1,
        0x510e527f, 0xade682d1, 0x9b05688c, 0x2b3e6c1f, 0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19, 0x137e2179,
    ]);

    const U32_MASK64 =  BigInt(2 ** 32 - 1);
    const _32n$1 =  BigInt(32);
    function fromBig(n, le = false) {
        if (le)
            return { h: Number(n & U32_MASK64), l: Number((n >> _32n$1) & U32_MASK64) };
        return { h: Number((n >> _32n$1) & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
    }
    function split(lst, le = false) {
        const len = lst.length;
        let Ah = new Uint32Array(len);
        let Al = new Uint32Array(len);
        for (let i = 0; i < len; i++) {
            const { h, l } = fromBig(lst[i], le);
            [Ah[i], Al[i]] = [h, l];
        }
        return [Ah, Al];
    }
    const shrSH = (h, _l, s) => h >>> s;
    const shrSL = (h, l, s) => (h << (32 - s)) | (l >>> s);
    const rotrSH = (h, l, s) => (h >>> s) | (l << (32 - s));
    const rotrSL = (h, l, s) => (h << (32 - s)) | (l >>> s);
    const rotrBH = (h, l, s) => (h << (64 - s)) | (l >>> (s - 32));
    const rotrBL = (h, l, s) => (h >>> (s - 32)) | (l << (64 - s));
    const rotr32H = (_h, l) => l;
    const rotr32L = (h, _l) => h;
    const rotlSH = (h, l, s) => (h << s) | (l >>> (32 - s));
    const rotlSL = (h, l, s) => (l << s) | (h >>> (32 - s));
    const rotlBH = (h, l, s) => (l << (s - 32)) | (h >>> (64 - s));
    const rotlBL = (h, l, s) => (h << (s - 32)) | (l >>> (64 - s));
    function add(Ah, Al, Bh, Bl) {
        const l = (Al >>> 0) + (Bl >>> 0);
        return { h: (Ah + Bh + ((l / 2 ** 32) | 0)) | 0, l: l | 0 };
    }
    const add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
    const add3H = (low, Ah, Bh, Ch) => (Ah + Bh + Ch + ((low / 2 ** 32) | 0)) | 0;
    const add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
    const add4H = (low, Ah, Bh, Ch, Dh) => (Ah + Bh + Ch + Dh + ((low / 2 ** 32) | 0)) | 0;
    const add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
    const add5H = (low, Ah, Bh, Ch, Dh, Eh) => (Ah + Bh + Ch + Dh + Eh + ((low / 2 ** 32) | 0)) | 0;

    const B2B_IV =  Uint32Array.from([
        0xf3bcc908, 0x6a09e667, 0x84caa73b, 0xbb67ae85, 0xfe94f82b, 0x3c6ef372, 0x5f1d36f1, 0xa54ff53a,
        0xade682d1, 0x510e527f, 0x2b3e6c1f, 0x9b05688c, 0xfb41bd6b, 0x1f83d9ab, 0x137e2179, 0x5be0cd19,
    ]);
    const BBUF =  new Uint32Array(32);
    function G1b(a, b, c, d, msg, x) {
        const Xl = msg[x], Xh = msg[x + 1];
        let Al = BBUF[2 * a], Ah = BBUF[2 * a + 1];
        let Bl = BBUF[2 * b], Bh = BBUF[2 * b + 1];
        let Cl = BBUF[2 * c], Ch = BBUF[2 * c + 1];
        let Dl = BBUF[2 * d], Dh = BBUF[2 * d + 1];
        let ll = add3L(Al, Bl, Xl);
        Ah = add3H(ll, Ah, Bh, Xh);
        Al = ll | 0;
        ({ Dh, Dl } = { Dh: Dh ^ Ah, Dl: Dl ^ Al });
        ({ Dh, Dl } = { Dh: rotr32H(Dh, Dl), Dl: rotr32L(Dh) });
        ({ h: Ch, l: Cl } = add(Ch, Cl, Dh, Dl));
        ({ Bh, Bl } = { Bh: Bh ^ Ch, Bl: Bl ^ Cl });
        ({ Bh, Bl } = { Bh: rotrSH(Bh, Bl, 24), Bl: rotrSL(Bh, Bl, 24) });
        (BBUF[2 * a] = Al), (BBUF[2 * a + 1] = Ah);
        (BBUF[2 * b] = Bl), (BBUF[2 * b + 1] = Bh);
        (BBUF[2 * c] = Cl), (BBUF[2 * c + 1] = Ch);
        (BBUF[2 * d] = Dl), (BBUF[2 * d + 1] = Dh);
    }
    function G2b(a, b, c, d, msg, x) {
        const Xl = msg[x], Xh = msg[x + 1];
        let Al = BBUF[2 * a], Ah = BBUF[2 * a + 1];
        let Bl = BBUF[2 * b], Bh = BBUF[2 * b + 1];
        let Cl = BBUF[2 * c], Ch = BBUF[2 * c + 1];
        let Dl = BBUF[2 * d], Dh = BBUF[2 * d + 1];
        let ll = add3L(Al, Bl, Xl);
        Ah = add3H(ll, Ah, Bh, Xh);
        Al = ll | 0;
        ({ Dh, Dl } = { Dh: Dh ^ Ah, Dl: Dl ^ Al });
        ({ Dh, Dl } = { Dh: rotrSH(Dh, Dl, 16), Dl: rotrSL(Dh, Dl, 16) });
        ({ h: Ch, l: Cl } = add(Ch, Cl, Dh, Dl));
        ({ Bh, Bl } = { Bh: Bh ^ Ch, Bl: Bl ^ Cl });
        ({ Bh, Bl } = { Bh: rotrBH(Bh, Bl, 63), Bl: rotrBL(Bh, Bl, 63) });
        (BBUF[2 * a] = Al), (BBUF[2 * a + 1] = Ah);
        (BBUF[2 * b] = Bl), (BBUF[2 * b + 1] = Bh);
        (BBUF[2 * c] = Cl), (BBUF[2 * c + 1] = Ch);
        (BBUF[2 * d] = Dl), (BBUF[2 * d + 1] = Dh);
    }
    function checkBlake2Opts(outputLen, opts = {}, keyLen, saltLen, persLen) {
        anumber(keyLen);
        if (outputLen < 0 || outputLen > keyLen)
            throw new Error('outputLen bigger than keyLen');
        const { key, salt, personalization } = opts;
        if (key !== undefined && (key.length < 1 || key.length > keyLen))
            throw new Error('key length must be undefined or 1..' + keyLen);
        if (salt !== undefined && salt.length !== saltLen)
            throw new Error('salt must be undefined or ' + saltLen);
        if (personalization !== undefined && personalization.length !== persLen)
            throw new Error('personalization must be undefined or ' + persLen);
    }
    class BLAKE2 extends Hash {
        constructor(blockLen, outputLen) {
            super();
            this.finished = false;
            this.destroyed = false;
            this.length = 0;
            this.pos = 0;
            anumber(blockLen);
            anumber(outputLen);
            this.blockLen = blockLen;
            this.outputLen = outputLen;
            this.buffer = new Uint8Array(blockLen);
            this.buffer32 = u32(this.buffer);
        }
        update(data) {
            aexists(this);
            data = toBytes(data);
            abytes$1(data);
            const { blockLen, buffer, buffer32 } = this;
            const len = data.length;
            const offset = data.byteOffset;
            const buf = data.buffer;
            for (let pos = 0; pos < len;) {
                if (this.pos === blockLen) {
                    swap32IfBE(buffer32);
                    this.compress(buffer32, 0, false);
                    swap32IfBE(buffer32);
                    this.pos = 0;
                }
                const take = Math.min(blockLen - this.pos, len - pos);
                const dataOffset = offset + pos;
                if (take === blockLen && !(dataOffset % 4) && pos + take < len) {
                    const data32 = new Uint32Array(buf, dataOffset, Math.floor((len - pos) / 4));
                    swap32IfBE(data32);
                    for (let pos32 = 0; pos + blockLen < len; pos32 += buffer32.length, pos += blockLen) {
                        this.length += blockLen;
                        this.compress(data32, pos32, false);
                    }
                    swap32IfBE(data32);
                    continue;
                }
                buffer.set(data.subarray(pos, pos + take), this.pos);
                this.pos += take;
                this.length += take;
                pos += take;
            }
            return this;
        }
        digestInto(out) {
            aexists(this);
            aoutput(out, this);
            const { pos, buffer32 } = this;
            this.finished = true;
            clean(this.buffer.subarray(pos));
            swap32IfBE(buffer32);
            this.compress(buffer32, 0, true);
            swap32IfBE(buffer32);
            const out32 = u32(out);
            this.get().forEach((v, i) => (out32[i] = swap8IfBE(v)));
        }
        digest() {
            const { buffer, outputLen } = this;
            this.digestInto(buffer);
            const res = buffer.slice(0, outputLen);
            this.destroy();
            return res;
        }
        _cloneInto(to) {
            const { buffer, length, finished, destroyed, outputLen, pos } = this;
            to || (to = new this.constructor({ dkLen: outputLen }));
            to.set(...this.get());
            to.buffer.set(buffer);
            to.destroyed = destroyed;
            to.finished = finished;
            to.length = length;
            to.pos = pos;
            to.outputLen = outputLen;
            return to;
        }
        clone() {
            return this._cloneInto();
        }
    }
    class BLAKE2b extends BLAKE2 {
        constructor(opts = {}) {
            const olen = opts.dkLen === undefined ? 64 : opts.dkLen;
            super(128, olen);
            this.v0l = B2B_IV[0] | 0;
            this.v0h = B2B_IV[1] | 0;
            this.v1l = B2B_IV[2] | 0;
            this.v1h = B2B_IV[3] | 0;
            this.v2l = B2B_IV[4] | 0;
            this.v2h = B2B_IV[5] | 0;
            this.v3l = B2B_IV[6] | 0;
            this.v3h = B2B_IV[7] | 0;
            this.v4l = B2B_IV[8] | 0;
            this.v4h = B2B_IV[9] | 0;
            this.v5l = B2B_IV[10] | 0;
            this.v5h = B2B_IV[11] | 0;
            this.v6l = B2B_IV[12] | 0;
            this.v6h = B2B_IV[13] | 0;
            this.v7l = B2B_IV[14] | 0;
            this.v7h = B2B_IV[15] | 0;
            checkBlake2Opts(olen, opts, 64, 16, 16);
            let { key, personalization, salt } = opts;
            let keyLength = 0;
            if (key !== undefined) {
                key = toBytes(key);
                keyLength = key.length;
            }
            this.v0l ^= this.outputLen | (keyLength << 8) | (0x01 << 16) | (0x01 << 24);
            if (salt !== undefined) {
                salt = toBytes(salt);
                const slt = u32(salt);
                this.v4l ^= swap8IfBE(slt[0]);
                this.v4h ^= swap8IfBE(slt[1]);
                this.v5l ^= swap8IfBE(slt[2]);
                this.v5h ^= swap8IfBE(slt[3]);
            }
            if (personalization !== undefined) {
                personalization = toBytes(personalization);
                const pers = u32(personalization);
                this.v6l ^= swap8IfBE(pers[0]);
                this.v6h ^= swap8IfBE(pers[1]);
                this.v7l ^= swap8IfBE(pers[2]);
                this.v7h ^= swap8IfBE(pers[3]);
            }
            if (key !== undefined) {
                const tmp = new Uint8Array(this.blockLen);
                tmp.set(key);
                this.update(tmp);
            }
        }
        get() {
            let { v0l, v0h, v1l, v1h, v2l, v2h, v3l, v3h, v4l, v4h, v5l, v5h, v6l, v6h, v7l, v7h } = this;
            return [v0l, v0h, v1l, v1h, v2l, v2h, v3l, v3h, v4l, v4h, v5l, v5h, v6l, v6h, v7l, v7h];
        }
        set(v0l, v0h, v1l, v1h, v2l, v2h, v3l, v3h, v4l, v4h, v5l, v5h, v6l, v6h, v7l, v7h) {
            this.v0l = v0l | 0;
            this.v0h = v0h | 0;
            this.v1l = v1l | 0;
            this.v1h = v1h | 0;
            this.v2l = v2l | 0;
            this.v2h = v2h | 0;
            this.v3l = v3l | 0;
            this.v3h = v3h | 0;
            this.v4l = v4l | 0;
            this.v4h = v4h | 0;
            this.v5l = v5l | 0;
            this.v5h = v5h | 0;
            this.v6l = v6l | 0;
            this.v6h = v6h | 0;
            this.v7l = v7l | 0;
            this.v7h = v7h | 0;
        }
        compress(msg, offset, isLast) {
            this.get().forEach((v, i) => (BBUF[i] = v));
            BBUF.set(B2B_IV, 16);
            let { h, l } = fromBig(BigInt(this.length));
            BBUF[24] = B2B_IV[8] ^ l;
            BBUF[25] = B2B_IV[9] ^ h;
            if (isLast) {
                BBUF[28] = ~BBUF[28];
                BBUF[29] = ~BBUF[29];
            }
            let j = 0;
            const s = BSIGMA;
            for (let i = 0; i < 12; i++) {
                G1b(0, 4, 8, 12, msg, offset + 2 * s[j++]);
                G2b(0, 4, 8, 12, msg, offset + 2 * s[j++]);
                G1b(1, 5, 9, 13, msg, offset + 2 * s[j++]);
                G2b(1, 5, 9, 13, msg, offset + 2 * s[j++]);
                G1b(2, 6, 10, 14, msg, offset + 2 * s[j++]);
                G2b(2, 6, 10, 14, msg, offset + 2 * s[j++]);
                G1b(3, 7, 11, 15, msg, offset + 2 * s[j++]);
                G2b(3, 7, 11, 15, msg, offset + 2 * s[j++]);
                G1b(0, 5, 10, 15, msg, offset + 2 * s[j++]);
                G2b(0, 5, 10, 15, msg, offset + 2 * s[j++]);
                G1b(1, 6, 11, 12, msg, offset + 2 * s[j++]);
                G2b(1, 6, 11, 12, msg, offset + 2 * s[j++]);
                G1b(2, 7, 8, 13, msg, offset + 2 * s[j++]);
                G2b(2, 7, 8, 13, msg, offset + 2 * s[j++]);
                G1b(3, 4, 9, 14, msg, offset + 2 * s[j++]);
                G2b(3, 4, 9, 14, msg, offset + 2 * s[j++]);
            }
            this.v0l ^= BBUF[0] ^ BBUF[16];
            this.v0h ^= BBUF[1] ^ BBUF[17];
            this.v1l ^= BBUF[2] ^ BBUF[18];
            this.v1h ^= BBUF[3] ^ BBUF[19];
            this.v2l ^= BBUF[4] ^ BBUF[20];
            this.v2h ^= BBUF[5] ^ BBUF[21];
            this.v3l ^= BBUF[6] ^ BBUF[22];
            this.v3h ^= BBUF[7] ^ BBUF[23];
            this.v4l ^= BBUF[8] ^ BBUF[24];
            this.v4h ^= BBUF[9] ^ BBUF[25];
            this.v5l ^= BBUF[10] ^ BBUF[26];
            this.v5h ^= BBUF[11] ^ BBUF[27];
            this.v6l ^= BBUF[12] ^ BBUF[28];
            this.v6h ^= BBUF[13] ^ BBUF[29];
            this.v7l ^= BBUF[14] ^ BBUF[30];
            this.v7h ^= BBUF[15] ^ BBUF[31];
            clean(BBUF);
        }
        destroy() {
            this.destroyed = true;
            clean(this.buffer32);
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
    }
    const blake2b =  createOptHasher((opts) => new BLAKE2b(opts));
    function compress(s, offset, msg, rounds, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15) {
        let j = 0;
        for (let i = 0; i < rounds; i++) {
            ({ a: v0, b: v4, c: v8, d: v12 } = G1s(v0, v4, v8, v12, msg[offset + s[j++]]));
            ({ a: v0, b: v4, c: v8, d: v12 } = G2s(v0, v4, v8, v12, msg[offset + s[j++]]));
            ({ a: v1, b: v5, c: v9, d: v13 } = G1s(v1, v5, v9, v13, msg[offset + s[j++]]));
            ({ a: v1, b: v5, c: v9, d: v13 } = G2s(v1, v5, v9, v13, msg[offset + s[j++]]));
            ({ a: v2, b: v6, c: v10, d: v14 } = G1s(v2, v6, v10, v14, msg[offset + s[j++]]));
            ({ a: v2, b: v6, c: v10, d: v14 } = G2s(v2, v6, v10, v14, msg[offset + s[j++]]));
            ({ a: v3, b: v7, c: v11, d: v15 } = G1s(v3, v7, v11, v15, msg[offset + s[j++]]));
            ({ a: v3, b: v7, c: v11, d: v15 } = G2s(v3, v7, v11, v15, msg[offset + s[j++]]));
            ({ a: v0, b: v5, c: v10, d: v15 } = G1s(v0, v5, v10, v15, msg[offset + s[j++]]));
            ({ a: v0, b: v5, c: v10, d: v15 } = G2s(v0, v5, v10, v15, msg[offset + s[j++]]));
            ({ a: v1, b: v6, c: v11, d: v12 } = G1s(v1, v6, v11, v12, msg[offset + s[j++]]));
            ({ a: v1, b: v6, c: v11, d: v12 } = G2s(v1, v6, v11, v12, msg[offset + s[j++]]));
            ({ a: v2, b: v7, c: v8, d: v13 } = G1s(v2, v7, v8, v13, msg[offset + s[j++]]));
            ({ a: v2, b: v7, c: v8, d: v13 } = G2s(v2, v7, v8, v13, msg[offset + s[j++]]));
            ({ a: v3, b: v4, c: v9, d: v14 } = G1s(v3, v4, v9, v14, msg[offset + s[j++]]));
            ({ a: v3, b: v4, c: v9, d: v14 } = G2s(v3, v4, v9, v14, msg[offset + s[j++]]));
        }
        return { v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15 };
    }
    const B2S_IV = SHA256_IV;
    class BLAKE2s extends BLAKE2 {
        constructor(opts = {}) {
            const olen = opts.dkLen === undefined ? 32 : opts.dkLen;
            super(64, olen);
            this.v0 = B2S_IV[0] | 0;
            this.v1 = B2S_IV[1] | 0;
            this.v2 = B2S_IV[2] | 0;
            this.v3 = B2S_IV[3] | 0;
            this.v4 = B2S_IV[4] | 0;
            this.v5 = B2S_IV[5] | 0;
            this.v6 = B2S_IV[6] | 0;
            this.v7 = B2S_IV[7] | 0;
            checkBlake2Opts(olen, opts, 32, 8, 8);
            let { key, personalization, salt } = opts;
            let keyLength = 0;
            if (key !== undefined) {
                key = toBytes(key);
                keyLength = key.length;
            }
            this.v0 ^= this.outputLen | (keyLength << 8) | (0x01 << 16) | (0x01 << 24);
            if (salt !== undefined) {
                salt = toBytes(salt);
                const slt = u32(salt);
                this.v4 ^= swap8IfBE(slt[0]);
                this.v5 ^= swap8IfBE(slt[1]);
            }
            if (personalization !== undefined) {
                personalization = toBytes(personalization);
                const pers = u32(personalization);
                this.v6 ^= swap8IfBE(pers[0]);
                this.v7 ^= swap8IfBE(pers[1]);
            }
            if (key !== undefined) {
                abytes$1(key);
                const tmp = new Uint8Array(this.blockLen);
                tmp.set(key);
                this.update(tmp);
            }
        }
        get() {
            const { v0, v1, v2, v3, v4, v5, v6, v7 } = this;
            return [v0, v1, v2, v3, v4, v5, v6, v7];
        }
        set(v0, v1, v2, v3, v4, v5, v6, v7) {
            this.v0 = v0 | 0;
            this.v1 = v1 | 0;
            this.v2 = v2 | 0;
            this.v3 = v3 | 0;
            this.v4 = v4 | 0;
            this.v5 = v5 | 0;
            this.v6 = v6 | 0;
            this.v7 = v7 | 0;
        }
        compress(msg, offset, isLast) {
            const { h, l } = fromBig(BigInt(this.length));
            const { v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15 } = compress(BSIGMA, offset, msg, 10, this.v0, this.v1, this.v2, this.v3, this.v4, this.v5, this.v6, this.v7, B2S_IV[0], B2S_IV[1], B2S_IV[2], B2S_IV[3], l ^ B2S_IV[4], h ^ B2S_IV[5], isLast ? ~B2S_IV[6] : B2S_IV[6], B2S_IV[7]);
            this.v0 ^= v0 ^ v8;
            this.v1 ^= v1 ^ v9;
            this.v2 ^= v2 ^ v10;
            this.v3 ^= v3 ^ v11;
            this.v4 ^= v4 ^ v12;
            this.v5 ^= v5 ^ v13;
            this.v6 ^= v6 ^ v14;
            this.v7 ^= v7 ^ v15;
        }
        destroy() {
            this.destroyed = true;
            clean(this.buffer32);
            this.set(0, 0, 0, 0, 0, 0, 0, 0);
        }
    }
    createOptHasher((opts) => new BLAKE2s(opts));

    function createAsHex(fn) {
        return (...args) => util.u8aToHex(fn(...args));
    }
    function createBitHasher(bitLength, fn) {
        return (data, onlyJs) => fn(data, bitLength, onlyJs);
    }
    function createDualHasher(wa, js) {
        return (value, bitLength = 256, onlyJs) => {
            const u8a = util.u8aToU8a(value);
            return !util.hasBigInt || (!onlyJs && isReady())
                ? wa[bitLength](u8a)
                : js[bitLength](u8a);
        };
    }

    function blake2AsU8a(data, bitLength = 256, key, onlyJs) {
        const byteLength = Math.ceil(bitLength / 8);
        const u8a = util.u8aToU8a(data);
        return !util.hasBigInt || (!onlyJs && isReady())
            ? blake2b$1(u8a, util.u8aToU8a(key), byteLength)
            : key
                ? blake2b(u8a, { dkLen: byteLength, key })
                : blake2b(u8a, { dkLen: byteLength });
    }
    const blake2AsHex =  createAsHex(blake2AsU8a);

    const SS58_PREFIX = util.stringToU8a('SS58PRE');
    function sshash(key) {
        return blake2AsU8a(util.u8aConcat(SS58_PREFIX, key), 512);
    }

    function checkAddressChecksum(decoded) {
        const ss58Length = (decoded[0] & 0b0100_0000) ? 2 : 1;
        const ss58Decoded = ss58Length === 1
            ? decoded[0]
            : ((decoded[0] & 0b0011_1111) << 2) | (decoded[1] >> 6) | ((decoded[1] & 0b0011_1111) << 8);
        const isPublicKey = [34 + ss58Length, 35 + ss58Length].includes(decoded.length);
        const length = decoded.length - (isPublicKey ? 2 : 1);
        const hash = sshash(decoded.subarray(0, length));
        const isValid = (decoded[0] & 0b1000_0000) === 0 && ![46, 47].includes(decoded[0]) && (isPublicKey
            ? decoded[decoded.length - 2] === hash[0] && decoded[decoded.length - 1] === hash[1]
            : decoded[decoded.length - 1] === hash[0]);
        return [isValid, length, ss58Length, ss58Decoded];
    }

    const knownGenesis = {
        acala: [
            '0xfc41b9bd8ef8fe53d58c7ea67c794c7ec9a73daf05e6d54b14ff6342c99ba64c'
        ],
        ajuna: [
            '0xe358eb1d11b31255a286c12e44fe6780b7edb171d657905a97e39f71d9c6c3ee'
        ],
        'aleph-node': [
            '0x70255b4d28de0fc4e1a193d7e175ad1ccef431598211c55538f1018651a0344e'
        ],
        astar: [
            '0x9eb76c5184c4ab8679d2d5d819fdf90b9c001403e9e17da2e14b6d8aec4029c6'
        ],
        basilisk: [
            '0xa85cfb9b9fd4d622a5b28289a02347af987d8f73fa3108450e2b4a11c1ce5755'
        ],
        bifrost: [
            '0x262e1b2ad728475fd6fe88e62d34c200abe6fd693931ddad144059b1eb884e5b'
        ],
        'bifrost-kusama': [
            '0x9f28c6a68e0fc9646eff64935684f6eeeece527e37bbe1f213d22caa1d9d6bed'
        ],
        bittensor: [
            '0x2f0555cc76fc2840a25a6ea3b9637146806f1f44b090c175ffde2a7e5ab36c03'
        ],
        centrifuge: [
            '0xb3db41421702df9a7fcac62b53ffeac85f7853cc4e689e0b93aeb3db18c09d82',
            '0x67dddf2673b69e5f875f6f25277495834398eafd67f492e09f3f3345e003d1b5'
        ],
        cere: [
            '0x81443836a9a24caaa23f1241897d1235717535711d1d3fe24eae4fdc942c092c'
        ],
        composable: [
            '0xdaab8df776eb52ec604a5df5d388bb62a050a0aaec4556a64265b9d42755552d'
        ],
        creditcoin3: [
            '0x4436a7d64e363df85e065a894721002a86643283f9707338bf195d360ba2ee71',
            '0xfc4ec97a1c1f119c4353aecb4a17c7c0cf7b40d5d660143d8bad9117e9866572',
            '0xfc9df99a665f964aed6649f275055e54df5e3420489538ed31d7788f53d11ef6'
        ],
        darwinia: [
            '0xe71578b37a7c799b0ab4ee87ffa6f059a6b98f71f06fb8c84a8d88013a548ad6'
        ],
        dentnet: [
            '0x0313f6a011d128d22f996703cbab05162e2fdc9e031493314fe6db79979c5ca7'
        ],
        'dock-mainnet': [
            '0x6bfe24dca2a3be10f22212678ac13a6446ec764103c0f3471c71609eac384aae',
            '0xf73467c6544aa68df2ee546b135f955c46b90fa627e9b5d7935f41061bb8a5a9'
        ],
        edgeware: [
            '0x742a2ca70c2fda6cee4f8df98d64c4c670a052d9568058982dad9d5a7a135c5b'
        ],
        encointer: [
            '0x7dd99936c1e9e6d1ce7d90eb6f33bea8393b4bf87677d675aa63c9cb3e8c5b5b'
        ],
        enjin: [
            '0xd8761d3c88f26dc12875c00d3165f7d67243d56fc85b4cf19937601a7916e5a9'
        ],
        equilibrium: [
            '0x6f1a800de3daff7f5e037ddf66ab22ce03ab91874debeddb1086f5f7dbd48925'
        ],
        frequency: [
            '0x4a587bf17a404e3572747add7aab7bbe56e805a5479c6c436f07f36fcc8d3ae1'
        ],
        genshiro: [
            '0x9b8cefc0eb5c568b527998bdd76c184e2b76ae561be76e4667072230217ea243'
        ],
        hydradx: [
            '0xafdc188f45c71dacbaa0b62e16a91f726c7b8699a9748cdf715459de6b7f366d',
            '0xd2a620c27ec5cbc5621ff9a522689895074f7cca0d08e7134a7804e1a3ba86fc',
            '0x10af6e84234477d84dc572bac0789813b254aa490767ed06fb9591191d1073f9',
            '0x3d75507dd46301767e601265791da1d9cb47b6ebc94e87347b635e5bf58bd047',
            '0x0ed32bfcab4a83517fac88f2aa7cbc2f88d3ab93be9a12b6188a036bf8a943c2'
        ],
        integritee: [
            '0xcdedc8eadbfa209d3f207bba541e57c3c58a667b05a2e1d1e86353c9000758da',
            '0xe13e7af377c64e83f95e0d70d5e5c3c01d697a84538776c5b9bbe0e7d7b6034c'
        ],
        'interlay-parachain': [
            '0xbf88efe70e9e0e916416e8bed61f2b45717f517d7f3523e33c7b001e5ffcbc72'
        ],
        karura: [
            '0xbaf5aabe40646d11f0ee8abbdc64f4a4b7674925cba08e4a05ff9ebed6e2126b'
        ],
        khala: [
            '0xd43540ba6d3eb4897c28a77d48cb5b729fea37603cbbfc7a86a73b72adb3be8d'
        ],
        kulupu: [
            '0xf7a99d3cb92853d00d5275c971c132c074636256583fee53b3bbe60d7b8769ba'
        ],
        kusama: [
            '0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe',
            '0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636',
            '0x3fd7b9eb6a00376e5be61f01abb429ffb0b104be05eaff4d458da48fcd425baf'
        ],
        liberland: [
            '0x6bd89e052d67a45bb60a9a23e8581053d5e0d619f15cb9865946937e690c42d6'
        ],
        matrixchain: [
            '0x3af4ff48ec76d2efc8476730f423ac07e25ad48f5f4c9dc39c778b164d808615'
        ],
        mythos: [
            '0xf6ee56e9c5277df5b4ce6ae9983ee88f3cbed27d31beeb98f9f84f997a1ab0b9'
        ],
        nodle: [
            '0x97da7ede98d7bad4e36b4d734b6055425a3be036da2a332ea5a7037656427a21'
        ],
        origintrail: [
            '0xe7e0962324a3b86c83404dbea483f25fb5dab4c224791c81b756cfc948006174'
        ],
        p3d: [
            '0x6c5894837ad89b6d92b114a2fb3eafa8fe3d26a54848e3447015442cd6ef4e66'
        ],
        parallel: [
            '0xe61a41c53f5dcd0beb09df93b34402aada44cb05117b71059cce40a2723a4e97'
        ],
        peaq: [
            '0xd2a5d385932d1f650dae03ef8e2748983779ee342c614f80854d32b8cd8fa48c'
        ],
        pendulum: [
            '0x5d3c298622d5634ed019bf61ea4b71655030015bde9beb0d6a24743714462c86'
        ],
        phala: [
            '0x1bb969d85965e4bb5a651abbedf21a54b6b31a21f66b5401cc3f1e286268d736'
        ],
        picasso: [
            '0x6811a339673c9daa897944dcdac99c6e2939cc88245ed21951a0a3c9a2be75bc',
            '0xe8e7f0f4c4f5a00720b4821dbfddefea7490bcf0b19009961cc46957984e2c1c'
        ],
        polimec: [
            '0x7eb9354488318e7549c722669dcbdcdc526f1fef1420e7944667212f3601fdbd'
        ],
        polkadex: [
            '0x3920bcb4960a1eef5580cd5367ff3f430eef052774f78468852f7b9cb39f8a3c'
        ],
        polkadot: [
            '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3'
        ],
        polymesh: [
            '0x6fbd74e5e1d0a61d52ccfe9d4adaed16dd3a7caa37c6bc4d0c2fa12e8b2f4063'
        ],
        quartz: [
            '0xcd4d732201ebe5d6b014edda071c4203e16867305332301dc8d092044b28e554'
        ],
        rococo: [
            '0x6408de7737c59c238890533af25896a2c20608d8b380bb01029acb392781063e',
            '0xaaf2cd1b74b5f726895921259421b534124726263982522174147046b8827897',
            '0x037f5f3c8e67b314062025fc886fcd6238ea25a4a9b45dce8d246815c9ebe770',
            '0xc196f81260cf1686172b47a79cf002120735d7cb0eb1474e8adce56618456fff',
            '0xf6e9983c37baf68846fedafe21e56718790e39fb1c582abc408b81bc7b208f9a',
            '0x5fce687da39305dfe682b117f0820b319348e8bb37eb16cf34acbf6a202de9d9',
            '0xe7c3d5edde7db964317cd9b51a3a059d7cd99f81bdbce14990047354334c9779',
            '0x1611e1dbf0405379b861e2e27daa90f480b2e6d3682414a80835a52e8cb8a215',
            '0x343442f12fa715489a8714e79a7b264ea88c0d5b8c66b684a7788a516032f6b9',
            '0x78bcd530c6b3a068bc17473cf5d2aff9c287102bed9af3ae3c41c33b9d6c6147',
            '0x47381ee0697153d64404fc578392c8fd5cba9073391908f46c888498415647bd',
            '0x19c0e4fa8ab75f5ac7865e0b8f74ff91eb9a100d336f423cd013a8befba40299'
        ],
        sora: [
            '0x7e4e32d0feafd4f9c9414b0be86373f9a1efa904809b683453a9af6856d38ad5'
        ],
        stafi: [
            '0x290a4149f09ea0e402c74c1c7e96ae4239588577fe78932f94f5404c68243d80'
        ],
        statemine: [
            '0x48239ef607d7928874027a43a67689209727dfb3d3dc5e5b03a39bdc2eda771a'
        ],
        statemint: [
            '0x68d56f15f85d3136970ec16946040bc1752654e906147f7e43e9d539d7c3de2f'
        ],
        subsocial: [
            '0x0bd72c1c305172e1275278aaeb3f161e02eccb7a819e63f62d47bd53a28189f8'
        ],
        ternoa: [
            '0x6859c81ca95ef624c9dfe4dc6e3381c33e5d6509e35e147092bfbc780f777c4e'
        ],
        unique: [
            '0x84322d9cddbf35088f1e54e9a85c967a41a56a4f43445768125e61af166c7d31'
        ],
        vara: [
            '0xfe1b4c55fd4d668101126434206571a7838a8b6b93a6d1b95d607e78e6c53763'
        ],
        vtb: [
            '0x286bc8414c7000ce1d6ee6a834e29a54c1784814b76243eb77ed0b2c5573c60f',
            '0x7483b89572fb2bd687c7b9a93b242d0b237f9aba463aba07ec24503931038aaa'
        ],
        westend: [
            '0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e'
        ],
        xxnetwork: [
            '0x50dd5d206917bf10502c68fb4d18a59fc8aa31586f4e8856b493e43544aa82aa'
        ],
        zagros: [
            '0x1b0b4727bbb5e44ed587d1056b4ad537ffb330034509a58866a088d77e792cd5'
        ],
        zeitgeist: [
            '0x1bf2a2ecb4a868de66ea8610f2ce7c8c43706561b6476031315f6640fe38e060'
        ]
    };

    const knownIcon = {
        centrifuge: 'polkadot',
        kusama: 'polkadot',
        polkadot: 'polkadot',
        sora: 'polkadot',
        statemine: 'polkadot',
        statemint: 'polkadot',
        westmint: 'polkadot'
    };

    const knownLedger = {
        acala: 0x00000313,
        ajuna: 0x00000162,
        'aleph-node': 0x00000283,
        astar: 0x0000032a,
        bifrost: 0x00000314,
        'bifrost-kusama': 0x00000314,
        bittensor: 0x00000162,
        centrifuge: 0x000002eb,
        composable: 0x00000162,
        creditcoin3: 0x00000162,
        darwinia: 0x00000162,
        dentnet: 0x000002de,
        'dock-mainnet': 0x00000252,
        edgeware: 0x0000020b,
        encointer: 0x000001b2,
        enjin: 0x00000483,
        equilibrium: 0x05f5e0fd,
        frequency: 0x0000082b,
        genshiro: 0x05f5e0fc,
        hydradx: 0x00000162,
        integritee: 0x000007df,
        'interlay-parachain': 0x00000162,
        karura: 0x000002ae,
        khala: 0x000001b2,
        kusama: 0x000001b2,
        liberland: 0x000002ff,
        matrixchain: 0x00000483,
        mythos: 0x0000003c,
        nodle: 0x000003eb,
        origintrail: 0x00000162,
        parallel: 0x00000162,
        peaq: 0x00000d0a,
        pendulum: 0x00000162,
        phala: 0x00000162,
        picasso: 0x000001b2,
        polimec: 0x00000d10,
        polkadex: 0x0000031f,
        polkadot: 0x00000162,
        polymesh: 0x00000253,
        quartz: 0x00000277,
        sora: 0x00000269,
        stafi: 0x0000038b,
        statemine: 0x000001b2,
        statemint: 0x00000162,
        ternoa: 0x00003e3,
        unique: 0x00000295,
        vara: 0x00001370,
        vtb: 0x000002b6,
        xxnetwork: 0x000007a3,
        zeitgeist: 0x00000162
    };

    const knownTestnet = {
        '': true,
        'cess-testnet': true,
        'dock-testnet': true,
        jupiter: true,
        'mathchain-testnet': true,
        p3dt: true,
        subspace_testnet: true,
        'zero-alphaville': true
    };

    const UNSORTED = [42];
    const TESTNETS = ['testnet'];
    const customNetworks = [
        {
            decimals: [12],
            displayName: 'Pezkuwi Relay Chain',
            network: 'pezkuwi',
            prefix: 42,
            standardAccount: '*25519',
            symbols: ['HEZ'],
            website: 'https://pezkuwichain.io'
        },
        {
            decimals: [12],
            displayName: 'Zagros Relay Chain',
            network: 'zagros',
            prefix: 42,
            standardAccount: '*25519',
            symbols: ['HEZ'],
            website: 'https://zagros.pezkuwichain.io'
        },
        {
            decimals: [12],
            displayName: 'Bizinikiwi',
            network: 'bizinikiwi',
            prefix: 42,
            standardAccount: '*25519',
            symbols: ['BZN'],
            website: 'https://bizinikiwi.pezkuwichain.io'
        }
    ];
    function toExpanded(o) {
        const network = o.network || '';
        const nameParts = network.replace(/_/g, '-').split('-');
        const n = o;
        n.slip44 = knownLedger[network];
        n.hasLedgerSupport = !!n.slip44;
        n.genesisHash = knownGenesis[network] || [];
        n.icon = knownIcon[network] || 'substrate';
        n.isTestnet = !!knownTestnet[network] || TESTNETS.includes(nameParts[nameParts.length - 1]);
        n.isIgnored = n.isTestnet || (!(o.standardAccount &&
            o.decimals?.length &&
            o.symbols?.length) &&
            o.prefix !== 42);
        return n;
    }
    function filterSelectable({ genesisHash, prefix }) {
        return !!genesisHash.length || prefix === 42;
    }
    function filterAvailable(n) {
        return !n.isIgnored && !!n.network;
    }
    function sortNetworks(a, b) {
        const isUnSortedA = UNSORTED.includes(a.prefix);
        const isUnSortedB = UNSORTED.includes(b.prefix);
        return isUnSortedA === isUnSortedB
            ? isUnSortedA
                ? 0
                : a.displayName.localeCompare(b.displayName)
            : isUnSortedA
                ? -1
                : 1;
    }
    const allNetworks = customNetworks.map(toExpanded);
    const availableNetworks = allNetworks.filter(filterAvailable).sort(sortNetworks);
    const selectableNetworks = availableNetworks.filter(filterSelectable);

    const defaults = {
        allowedDecodedLengths: [1, 2, 4, 8, 32, 33],
        allowedEncodedLengths: [3, 4, 6, 10, 35, 36, 37, 38],
        allowedPrefix: availableNetworks.map(({ prefix }) => prefix),
        prefix: 42
    };

    function decodeAddress(encoded, ignoreChecksum, ss58Format = -1) {
        if (!encoded) {
            throw new Error('Invalid empty address passed');
        }
        if (util.isU8a(encoded) || util.isHex(encoded)) {
            return util.u8aToU8a(encoded);
        }
        try {
            const decoded = base58Decode(encoded);
            if (!defaults.allowedEncodedLengths.includes(decoded.length)) {
                throw new Error('Invalid decoded address length');
            }
            const [isValid, endPos, ss58Length, ss58Decoded] = checkAddressChecksum(decoded);
            if (!isValid && !ignoreChecksum) {
                throw new Error('Invalid decoded address checksum');
            }
            else if (ss58Format !== -1 && ss58Format !== ss58Decoded) {
                throw new Error(`Expected ss58Format ${ss58Format}, received ${ss58Decoded}`);
            }
            return decoded.slice(ss58Length, endPos);
        }
        catch (error) {
            throw new Error(`Decoding ${encoded}: ${error.message}`);
        }
    }

    function addressToEvm(address, ignoreChecksum) {
        return decodeAddress(address, ignoreChecksum).subarray(0, 20);
    }

    function checkAddress(address, prefix) {
        let decoded;
        try {
            decoded = base58Decode(address);
        }
        catch (error) {
            return [false, error.message];
        }
        const [isValid, , , ss58Decoded] = checkAddressChecksum(decoded);
        if (ss58Decoded !== prefix) {
            return [false, `Prefix mismatch, expected ${prefix}, found ${ss58Decoded}`];
        }
        else if (!defaults.allowedEncodedLengths.includes(decoded.length)) {
            return [false, 'Invalid decoded address length'];
        }
        return [isValid, isValid ? null : 'Invalid decoded address checksum'];
    }

    const BN_BE_OPTS = { isLe: false };
    const BN_LE_OPTS = { isLe: true };
    const BN_LE_16_OPTS = { bitLength: 16, isLe: true };
    const BN_BE_32_OPTS = { bitLength: 32, isLe: false };
    const BN_LE_32_OPTS = { bitLength: 32, isLe: true };
    const BN_BE_256_OPTS = { bitLength: 256, isLe: false };
    const BN_LE_256_OPTS = { bitLength: 256, isLe: true };
    const BN_LE_512_OPTS = { bitLength: 512, isLe: true };

    const RE_NUMBER = /^\d+$/;
    const JUNCTION_ID_LEN = 32;
    class DeriveJunction {
        #chainCode = new Uint8Array(32);
        #isHard = false;
        static from(value) {
            const result = new DeriveJunction();
            const [code, isHard] = value.startsWith('/')
                ? [value.substring(1), true]
                : [value, false];
            result.soft(RE_NUMBER.test(code)
                ? new util.BN(code, 10)
                : code);
            return isHard
                ? result.harden()
                : result;
        }
        get chainCode() {
            return this.#chainCode;
        }
        get isHard() {
            return this.#isHard;
        }
        get isSoft() {
            return !this.#isHard;
        }
        hard(value) {
            return this.soft(value).harden();
        }
        harden() {
            this.#isHard = true;
            return this;
        }
        soft(value) {
            if (util.isNumber(value) || util.isBn(value) || util.isBigInt(value)) {
                return this.soft(util.bnToU8a(value, BN_LE_256_OPTS));
            }
            else if (util.isHex(value)) {
                return this.soft(util.hexToU8a(value));
            }
            else if (util.isString(value)) {
                return this.soft(util.compactAddLength(util.stringToU8a(value)));
            }
            else if (value.length > JUNCTION_ID_LEN) {
                return this.soft(blake2AsU8a(value));
            }
            this.#chainCode.fill(0);
            this.#chainCode.set(value, 0);
            return this;
        }
        soften() {
            this.#isHard = false;
            return this;
        }
    }

    const RE_JUNCTION = /\/(\/?)([^/]+)/g;
    function keyExtractPath(derivePath) {
        const parts = derivePath.match(RE_JUNCTION);
        const path = [];
        let constructed = '';
        if (parts) {
            constructed = parts.join('');
            for (const p of parts) {
                path.push(DeriveJunction.from(p.substring(1)));
            }
        }
        if (constructed !== derivePath) {
            throw new Error(`Re-constructed path "${constructed}" does not match input`);
        }
        return {
            parts,
            path
        };
    }

    const RE_CAPTURE = /^((0x[a-fA-F0-9]+|[\p{L}\d]+(?: [\p{L}\d]+)*))((\/\/?[^/]+)*)(\/\/\/(.*))?$/u;
    function keyExtractSuri(suri) {
        const normalizedSuri = suri.normalize('NFC');
        const matches = normalizedSuri.match(RE_CAPTURE);
        if (matches === null) {
            throw new Error('Unable to match provided value to a secret URI');
        }
        const [, phrase, , derivePath, , , password] = matches;
        const { path } = keyExtractPath(derivePath);
        return {
            derivePath,
            password,
            path,
            phrase
        };
    }

    const HDKD$2 = util.compactAddLength(util.stringToU8a('Secp256k1HDKD'));
    function secp256k1DeriveHard(seed, chainCode) {
        if (!util.isU8a(chainCode) || chainCode.length !== 32) {
            throw new Error('Invalid chainCode passed to derive');
        }
        return blake2AsU8a(util.u8aConcat(HDKD$2, seed, chainCode), 256);
    }

    const SHA256_K =  Uint32Array.from([
        0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
        0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
        0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
        0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
        0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
        0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
        0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
        0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
    ]);
    const SHA256_W =  new Uint32Array(64);
    class SHA256 extends HashMD {
        constructor(outputLen = 32) {
            super(64, outputLen, 8, false);
            this.A = SHA256_IV[0] | 0;
            this.B = SHA256_IV[1] | 0;
            this.C = SHA256_IV[2] | 0;
            this.D = SHA256_IV[3] | 0;
            this.E = SHA256_IV[4] | 0;
            this.F = SHA256_IV[5] | 0;
            this.G = SHA256_IV[6] | 0;
            this.H = SHA256_IV[7] | 0;
        }
        get() {
            const { A, B, C, D, E, F, G, H } = this;
            return [A, B, C, D, E, F, G, H];
        }
        set(A, B, C, D, E, F, G, H) {
            this.A = A | 0;
            this.B = B | 0;
            this.C = C | 0;
            this.D = D | 0;
            this.E = E | 0;
            this.F = F | 0;
            this.G = G | 0;
            this.H = H | 0;
        }
        process(view, offset) {
            for (let i = 0; i < 16; i++, offset += 4)
                SHA256_W[i] = view.getUint32(offset, false);
            for (let i = 16; i < 64; i++) {
                const W15 = SHA256_W[i - 15];
                const W2 = SHA256_W[i - 2];
                const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ (W15 >>> 3);
                const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ (W2 >>> 10);
                SHA256_W[i] = (s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16]) | 0;
            }
            let { A, B, C, D, E, F, G, H } = this;
            for (let i = 0; i < 64; i++) {
                const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
                const T1 = (H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i]) | 0;
                const sigma0 = rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22);
                const T2 = (sigma0 + Maj(A, B, C)) | 0;
                H = G;
                G = F;
                F = E;
                E = (D + T1) | 0;
                D = C;
                C = B;
                B = A;
                A = (T1 + T2) | 0;
            }
            A = (A + this.A) | 0;
            B = (B + this.B) | 0;
            C = (C + this.C) | 0;
            D = (D + this.D) | 0;
            E = (E + this.E) | 0;
            F = (F + this.F) | 0;
            G = (G + this.G) | 0;
            H = (H + this.H) | 0;
            this.set(A, B, C, D, E, F, G, H);
        }
        roundClean() {
            clean(SHA256_W);
        }
        destroy() {
            this.set(0, 0, 0, 0, 0, 0, 0, 0);
            clean(this.buffer);
        }
    }
    class SHA224 extends SHA256 {
        constructor() {
            super(28);
            this.A = SHA224_IV[0] | 0;
            this.B = SHA224_IV[1] | 0;
            this.C = SHA224_IV[2] | 0;
            this.D = SHA224_IV[3] | 0;
            this.E = SHA224_IV[4] | 0;
            this.F = SHA224_IV[5] | 0;
            this.G = SHA224_IV[6] | 0;
            this.H = SHA224_IV[7] | 0;
        }
    }
    const K512 =  (() => split([
        '0x428a2f98d728ae22', '0x7137449123ef65cd', '0xb5c0fbcfec4d3b2f', '0xe9b5dba58189dbbc',
        '0x3956c25bf348b538', '0x59f111f1b605d019', '0x923f82a4af194f9b', '0xab1c5ed5da6d8118',
        '0xd807aa98a3030242', '0x12835b0145706fbe', '0x243185be4ee4b28c', '0x550c7dc3d5ffb4e2',
        '0x72be5d74f27b896f', '0x80deb1fe3b1696b1', '0x9bdc06a725c71235', '0xc19bf174cf692694',
        '0xe49b69c19ef14ad2', '0xefbe4786384f25e3', '0x0fc19dc68b8cd5b5', '0x240ca1cc77ac9c65',
        '0x2de92c6f592b0275', '0x4a7484aa6ea6e483', '0x5cb0a9dcbd41fbd4', '0x76f988da831153b5',
        '0x983e5152ee66dfab', '0xa831c66d2db43210', '0xb00327c898fb213f', '0xbf597fc7beef0ee4',
        '0xc6e00bf33da88fc2', '0xd5a79147930aa725', '0x06ca6351e003826f', '0x142929670a0e6e70',
        '0x27b70a8546d22ffc', '0x2e1b21385c26c926', '0x4d2c6dfc5ac42aed', '0x53380d139d95b3df',
        '0x650a73548baf63de', '0x766a0abb3c77b2a8', '0x81c2c92e47edaee6', '0x92722c851482353b',
        '0xa2bfe8a14cf10364', '0xa81a664bbc423001', '0xc24b8b70d0f89791', '0xc76c51a30654be30',
        '0xd192e819d6ef5218', '0xd69906245565a910', '0xf40e35855771202a', '0x106aa07032bbd1b8',
        '0x19a4c116b8d2d0c8', '0x1e376c085141ab53', '0x2748774cdf8eeb99', '0x34b0bcb5e19b48a8',
        '0x391c0cb3c5c95a63', '0x4ed8aa4ae3418acb', '0x5b9cca4f7763e373', '0x682e6ff3d6b2b8a3',
        '0x748f82ee5defb2fc', '0x78a5636f43172f60', '0x84c87814a1f0ab72', '0x8cc702081a6439ec',
        '0x90befffa23631e28', '0xa4506cebde82bde9', '0xbef9a3f7b2c67915', '0xc67178f2e372532b',
        '0xca273eceea26619c', '0xd186b8c721c0c207', '0xeada7dd6cde0eb1e', '0xf57d4f7fee6ed178',
        '0x06f067aa72176fba', '0x0a637dc5a2c898a6', '0x113f9804bef90dae', '0x1b710b35131c471b',
        '0x28db77f523047d84', '0x32caab7b40c72493', '0x3c9ebe0a15c9bebc', '0x431d67c49c100d4c',
        '0x4cc5d4becb3e42b6', '0x597f299cfc657e2a', '0x5fcb6fab3ad6faec', '0x6c44198c4a475817'
    ].map(n => BigInt(n))))();
    const SHA512_Kh =  (() => K512[0])();
    const SHA512_Kl =  (() => K512[1])();
    const SHA512_W_H =  new Uint32Array(80);
    const SHA512_W_L =  new Uint32Array(80);
    class SHA512 extends HashMD {
        constructor(outputLen = 64) {
            super(128, outputLen, 16, false);
            this.Ah = SHA512_IV[0] | 0;
            this.Al = SHA512_IV[1] | 0;
            this.Bh = SHA512_IV[2] | 0;
            this.Bl = SHA512_IV[3] | 0;
            this.Ch = SHA512_IV[4] | 0;
            this.Cl = SHA512_IV[5] | 0;
            this.Dh = SHA512_IV[6] | 0;
            this.Dl = SHA512_IV[7] | 0;
            this.Eh = SHA512_IV[8] | 0;
            this.El = SHA512_IV[9] | 0;
            this.Fh = SHA512_IV[10] | 0;
            this.Fl = SHA512_IV[11] | 0;
            this.Gh = SHA512_IV[12] | 0;
            this.Gl = SHA512_IV[13] | 0;
            this.Hh = SHA512_IV[14] | 0;
            this.Hl = SHA512_IV[15] | 0;
        }
        get() {
            const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
            return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
        }
        set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
            this.Ah = Ah | 0;
            this.Al = Al | 0;
            this.Bh = Bh | 0;
            this.Bl = Bl | 0;
            this.Ch = Ch | 0;
            this.Cl = Cl | 0;
            this.Dh = Dh | 0;
            this.Dl = Dl | 0;
            this.Eh = Eh | 0;
            this.El = El | 0;
            this.Fh = Fh | 0;
            this.Fl = Fl | 0;
            this.Gh = Gh | 0;
            this.Gl = Gl | 0;
            this.Hh = Hh | 0;
            this.Hl = Hl | 0;
        }
        process(view, offset) {
            for (let i = 0; i < 16; i++, offset += 4) {
                SHA512_W_H[i] = view.getUint32(offset);
                SHA512_W_L[i] = view.getUint32((offset += 4));
            }
            for (let i = 16; i < 80; i++) {
                const W15h = SHA512_W_H[i - 15] | 0;
                const W15l = SHA512_W_L[i - 15] | 0;
                const s0h = rotrSH(W15h, W15l, 1) ^ rotrSH(W15h, W15l, 8) ^ shrSH(W15h, W15l, 7);
                const s0l = rotrSL(W15h, W15l, 1) ^ rotrSL(W15h, W15l, 8) ^ shrSL(W15h, W15l, 7);
                const W2h = SHA512_W_H[i - 2] | 0;
                const W2l = SHA512_W_L[i - 2] | 0;
                const s1h = rotrSH(W2h, W2l, 19) ^ rotrBH(W2h, W2l, 61) ^ shrSH(W2h, W2l, 6);
                const s1l = rotrSL(W2h, W2l, 19) ^ rotrBL(W2h, W2l, 61) ^ shrSL(W2h, W2l, 6);
                const SUMl = add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
                const SUMh = add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
                SHA512_W_H[i] = SUMh | 0;
                SHA512_W_L[i] = SUMl | 0;
            }
            let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
            for (let i = 0; i < 80; i++) {
                const sigma1h = rotrSH(Eh, El, 14) ^ rotrSH(Eh, El, 18) ^ rotrBH(Eh, El, 41);
                const sigma1l = rotrSL(Eh, El, 14) ^ rotrSL(Eh, El, 18) ^ rotrBL(Eh, El, 41);
                const CHIh = (Eh & Fh) ^ (~Eh & Gh);
                const CHIl = (El & Fl) ^ (~El & Gl);
                const T1ll = add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
                const T1h = add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
                const T1l = T1ll | 0;
                const sigma0h = rotrSH(Ah, Al, 28) ^ rotrBH(Ah, Al, 34) ^ rotrBH(Ah, Al, 39);
                const sigma0l = rotrSL(Ah, Al, 28) ^ rotrBL(Ah, Al, 34) ^ rotrBL(Ah, Al, 39);
                const MAJh = (Ah & Bh) ^ (Ah & Ch) ^ (Bh & Ch);
                const MAJl = (Al & Bl) ^ (Al & Cl) ^ (Bl & Cl);
                Hh = Gh | 0;
                Hl = Gl | 0;
                Gh = Fh | 0;
                Gl = Fl | 0;
                Fh = Eh | 0;
                Fl = El | 0;
                ({ h: Eh, l: El } = add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
                Dh = Ch | 0;
                Dl = Cl | 0;
                Ch = Bh | 0;
                Cl = Bl | 0;
                Bh = Ah | 0;
                Bl = Al | 0;
                const All = add3L(T1l, sigma0l, MAJl);
                Ah = add3H(All, T1h, sigma0h, MAJh);
                Al = All | 0;
            }
            ({ h: Ah, l: Al } = add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
            ({ h: Bh, l: Bl } = add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
            ({ h: Ch, l: Cl } = add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
            ({ h: Dh, l: Dl } = add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
            ({ h: Eh, l: El } = add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
            ({ h: Fh, l: Fl } = add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
            ({ h: Gh, l: Gl } = add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
            ({ h: Hh, l: Hl } = add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
            this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
        }
        roundClean() {
            clean(SHA512_W_H, SHA512_W_L);
        }
        destroy() {
            clean(this.buffer);
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
    }
    class SHA384 extends SHA512 {
        constructor() {
            super(48);
            this.Ah = SHA384_IV[0] | 0;
            this.Al = SHA384_IV[1] | 0;
            this.Bh = SHA384_IV[2] | 0;
            this.Bl = SHA384_IV[3] | 0;
            this.Ch = SHA384_IV[4] | 0;
            this.Cl = SHA384_IV[5] | 0;
            this.Dh = SHA384_IV[6] | 0;
            this.Dl = SHA384_IV[7] | 0;
            this.Eh = SHA384_IV[8] | 0;
            this.El = SHA384_IV[9] | 0;
            this.Fh = SHA384_IV[10] | 0;
            this.Fl = SHA384_IV[11] | 0;
            this.Gh = SHA384_IV[12] | 0;
            this.Gl = SHA384_IV[13] | 0;
            this.Hh = SHA384_IV[14] | 0;
            this.Hl = SHA384_IV[15] | 0;
        }
    }
    const T224_IV =  Uint32Array.from([
        0x8c3d37c8, 0x19544da2, 0x73e19966, 0x89dcd4d6, 0x1dfab7ae, 0x32ff9c82, 0x679dd514, 0x582f9fcf,
        0x0f6d2b69, 0x7bd44da8, 0x77e36f73, 0x04c48942, 0x3f9d85a8, 0x6a1d36c8, 0x1112e6ad, 0x91d692a1,
    ]);
    const T256_IV =  Uint32Array.from([
        0x22312194, 0xfc2bf72c, 0x9f555fa3, 0xc84c64c2, 0x2393b86b, 0x6f53b151, 0x96387719, 0x5940eabd,
        0x96283ee2, 0xa88effe3, 0xbe5e1e25, 0x53863992, 0x2b0199fc, 0x2c85b8aa, 0x0eb72ddc, 0x81c52ca2,
    ]);
    class SHA512_224 extends SHA512 {
        constructor() {
            super(28);
            this.Ah = T224_IV[0] | 0;
            this.Al = T224_IV[1] | 0;
            this.Bh = T224_IV[2] | 0;
            this.Bl = T224_IV[3] | 0;
            this.Ch = T224_IV[4] | 0;
            this.Cl = T224_IV[5] | 0;
            this.Dh = T224_IV[6] | 0;
            this.Dl = T224_IV[7] | 0;
            this.Eh = T224_IV[8] | 0;
            this.El = T224_IV[9] | 0;
            this.Fh = T224_IV[10] | 0;
            this.Fl = T224_IV[11] | 0;
            this.Gh = T224_IV[12] | 0;
            this.Gl = T224_IV[13] | 0;
            this.Hh = T224_IV[14] | 0;
            this.Hl = T224_IV[15] | 0;
        }
    }
    class SHA512_256 extends SHA512 {
        constructor() {
            super(32);
            this.Ah = T256_IV[0] | 0;
            this.Al = T256_IV[1] | 0;
            this.Bh = T256_IV[2] | 0;
            this.Bl = T256_IV[3] | 0;
            this.Ch = T256_IV[4] | 0;
            this.Cl = T256_IV[5] | 0;
            this.Dh = T256_IV[6] | 0;
            this.Dl = T256_IV[7] | 0;
            this.Eh = T256_IV[8] | 0;
            this.El = T256_IV[9] | 0;
            this.Fh = T256_IV[10] | 0;
            this.Fl = T256_IV[11] | 0;
            this.Gh = T256_IV[12] | 0;
            this.Gl = T256_IV[13] | 0;
            this.Hh = T256_IV[14] | 0;
            this.Hl = T256_IV[15] | 0;
        }
    }
    const sha256 =  createHasher$1(() => new SHA256());
    createHasher$1(() => new SHA224());
    const sha512$1 =  createHasher$1(() => new SHA512());
    createHasher$1(() => new SHA384());
    createHasher$1(() => new SHA512_256());
    createHasher$1(() => new SHA512_224());

    class HMAC extends Hash {
        constructor(hash, _key) {
            super();
            this.finished = false;
            this.destroyed = false;
            ahash(hash);
            const key = toBytes(_key);
            this.iHash = hash.create();
            if (typeof this.iHash.update !== 'function')
                throw new Error('Expected instance of class which extends utils.Hash');
            this.blockLen = this.iHash.blockLen;
            this.outputLen = this.iHash.outputLen;
            const blockLen = this.blockLen;
            const pad = new Uint8Array(blockLen);
            pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
            for (let i = 0; i < pad.length; i++)
                pad[i] ^= 0x36;
            this.iHash.update(pad);
            this.oHash = hash.create();
            for (let i = 0; i < pad.length; i++)
                pad[i] ^= 0x36 ^ 0x5c;
            this.oHash.update(pad);
            clean(pad);
        }
        update(buf) {
            aexists(this);
            this.iHash.update(buf);
            return this;
        }
        digestInto(out) {
            aexists(this);
            abytes$1(out, this.outputLen);
            this.finished = true;
            this.iHash.digestInto(out);
            this.oHash.update(out);
            this.oHash.digestInto(out);
            this.destroy();
        }
        digest() {
            const out = new Uint8Array(this.oHash.outputLen);
            this.digestInto(out);
            return out;
        }
        _cloneInto(to) {
            to || (to = Object.create(Object.getPrototypeOf(this), {}));
            const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
            to = to;
            to.finished = finished;
            to.destroyed = destroyed;
            to.blockLen = blockLen;
            to.outputLen = outputLen;
            to.oHash = oHash._cloneInto(to.oHash);
            to.iHash = iHash._cloneInto(to.iHash);
            return to;
        }
        clone() {
            return this._cloneInto();
        }
        destroy() {
            this.destroyed = true;
            this.oHash.destroy();
            this.iHash.destroy();
        }
    }
    const hmac = (hash, key, message) => new HMAC(hash, key).update(message).digest();
    hmac.create = (hash, key) => new HMAC(hash, key);

    /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
    const _0n$9 =  BigInt(0);
    const _1n$8 =  BigInt(1);
    function _abool2(value, title = '') {
        if (typeof value !== 'boolean') {
            const prefix = title && `"${title}"`;
            throw new Error(prefix + 'expected boolean, got type=' + typeof value);
        }
        return value;
    }
    function _abytes2(value, length, title = '') {
        const bytes = isBytes$1(value);
        const len = value?.length;
        const needsLen = length !== undefined;
        if (!bytes || (needsLen && len !== length)) {
            const prefix = title && `"${title}" `;
            const ofLen = needsLen ? ` of length ${length}` : '';
            const got = bytes ? `length=${len}` : `type=${typeof value}`;
            throw new Error(prefix + 'expected Uint8Array' + ofLen + ', got ' + got);
        }
        return value;
    }
    function numberToHexUnpadded(num) {
        const hex = num.toString(16);
        return hex.length & 1 ? '0' + hex : hex;
    }
    function hexToNumber(hex) {
        if (typeof hex !== 'string')
            throw new Error('hex string expected, got ' + typeof hex);
        return hex === '' ? _0n$9 : BigInt('0x' + hex);
    }
    function bytesToNumberBE(bytes) {
        return hexToNumber(bytesToHex(bytes));
    }
    function bytesToNumberLE$1(bytes) {
        abytes$1(bytes);
        return hexToNumber(bytesToHex(Uint8Array.from(bytes).reverse()));
    }
    function numberToBytesBE(n, len) {
        return hexToBytes(n.toString(16).padStart(len * 2, '0'));
    }
    function numberToBytesLE$1(n, len) {
        return numberToBytesBE(n, len).reverse();
    }
    function ensureBytes(title, hex, expectedLength) {
        let res;
        if (typeof hex === 'string') {
            try {
                res = hexToBytes(hex);
            }
            catch (e) {
                throw new Error(title + ' must be hex string or Uint8Array, cause: ' + e);
            }
        }
        else if (isBytes$1(hex)) {
            res = Uint8Array.from(hex);
        }
        else {
            throw new Error(title + ' must be hex string or Uint8Array');
        }
        const len = res.length;
        if (typeof expectedLength === 'number' && len !== expectedLength)
            throw new Error(title + ' of length ' + expectedLength + ' expected, got ' + len);
        return res;
    }
    function equalBytes(a, b) {
        if (a.length !== b.length)
            return false;
        let diff = 0;
        for (let i = 0; i < a.length; i++)
            diff |= a[i] ^ b[i];
        return diff === 0;
    }
    function copyBytes(bytes) {
        return Uint8Array.from(bytes);
    }
    const isPosBig = (n) => typeof n === 'bigint' && _0n$9 <= n;
    function inRange(n, min, max) {
        return isPosBig(n) && isPosBig(min) && isPosBig(max) && min <= n && n < max;
    }
    function aInRange$1(title, n, min, max) {
        if (!inRange(n, min, max))
            throw new Error('expected valid ' + title + ': ' + min + ' <= n < ' + max + ', got ' + n);
    }
    function bitLen(n) {
        let len;
        for (len = 0; n > _0n$9; n >>= _1n$8, len += 1)
            ;
        return len;
    }
    const bitMask$1 = (n) => (_1n$8 << BigInt(n)) - _1n$8;
    function createHmacDrbg(hashLen, qByteLen, hmacFn) {
        if (typeof hashLen !== 'number' || hashLen < 2)
            throw new Error('hashLen must be a number');
        if (typeof qByteLen !== 'number' || qByteLen < 2)
            throw new Error('qByteLen must be a number');
        if (typeof hmacFn !== 'function')
            throw new Error('hmacFn must be a function');
        const u8n = (len) => new Uint8Array(len);
        const u8of = (byte) => Uint8Array.of(byte);
        let v = u8n(hashLen);
        let k = u8n(hashLen);
        let i = 0;
        const reset = () => {
            v.fill(1);
            k.fill(0);
            i = 0;
        };
        const h = (...b) => hmacFn(k, v, ...b);
        const reseed = (seed = u8n(0)) => {
            k = h(u8of(0x00), seed);
            v = h();
            if (seed.length === 0)
                return;
            k = h(u8of(0x01), seed);
            v = h();
        };
        const gen = () => {
            if (i++ >= 1000)
                throw new Error('drbg: tried 1000 values');
            let len = 0;
            const out = [];
            while (len < qByteLen) {
                v = h();
                const sl = v.slice();
                out.push(sl);
                len += v.length;
            }
            return concatBytes(...out);
        };
        const genUntil = (seed, pred) => {
            reset();
            reseed(seed);
            let res = undefined;
            while (!(res = pred(gen())))
                reseed();
            reset();
            return res;
        };
        return genUntil;
    }
    function isHash(val) {
        return typeof val === 'function' && Number.isSafeInteger(val.outputLen);
    }
    function _validateObject(object, fields, optFields = {}) {
        if (!object || typeof object !== 'object')
            throw new Error('expected valid options object');
        function checkField(fieldName, expectedType, isOpt) {
            const val = object[fieldName];
            if (isOpt && val === undefined)
                return;
            const current = typeof val;
            if (current !== expectedType || val === null)
                throw new Error(`param "${fieldName}" is invalid: expected ${expectedType}, got ${current}`);
        }
        Object.entries(fields).forEach(([k, v]) => checkField(k, v, false));
        Object.entries(optFields).forEach(([k, v]) => checkField(k, v, true));
    }
    const notImplemented = () => {
        throw new Error('not implemented');
    };
    function memoized(fn) {
        const map = new WeakMap();
        return (arg, ...args) => {
            const val = map.get(arg);
            if (val !== undefined)
                return val;
            const computed = fn(arg, ...args);
            map.set(arg, computed);
            return computed;
        };
    }

    /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
    const _0n$8 = BigInt(0), _1n$7 = BigInt(1), _2n$6 =  BigInt(2), _3n$3 =  BigInt(3);
    const _4n$1 =  BigInt(4), _5n$1 =  BigInt(5), _7n$2 =  BigInt(7);
    const _8n$2 =  BigInt(8), _9n =  BigInt(9), _16n$1 =  BigInt(16);
    function mod(a, b) {
        const result = a % b;
        return result >= _0n$8 ? result : b + result;
    }
    function pow2(x, power, modulo) {
        let res = x;
        while (power-- > _0n$8) {
            res *= res;
            res %= modulo;
        }
        return res;
    }
    function invert(number, modulo) {
        if (number === _0n$8)
            throw new Error('invert: expected non-zero number');
        if (modulo <= _0n$8)
            throw new Error('invert: expected positive modulus, got ' + modulo);
        let a = mod(number, modulo);
        let b = modulo;
        let x = _0n$8, u = _1n$7;
        while (a !== _0n$8) {
            const q = b / a;
            const r = b % a;
            const m = x - u * q;
            b = a, a = r, x = u, u = m;
        }
        const gcd = b;
        if (gcd !== _1n$7)
            throw new Error('invert: does not exist');
        return mod(x, modulo);
    }
    function assertIsSquare(Fp, root, n) {
        if (!Fp.eql(Fp.sqr(root), n))
            throw new Error('Cannot find square root');
    }
    function sqrt3mod4(Fp, n) {
        const p1div4 = (Fp.ORDER + _1n$7) / _4n$1;
        const root = Fp.pow(n, p1div4);
        assertIsSquare(Fp, root, n);
        return root;
    }
    function sqrt5mod8(Fp, n) {
        const p5div8 = (Fp.ORDER - _5n$1) / _8n$2;
        const n2 = Fp.mul(n, _2n$6);
        const v = Fp.pow(n2, p5div8);
        const nv = Fp.mul(n, v);
        const i = Fp.mul(Fp.mul(nv, _2n$6), v);
        const root = Fp.mul(nv, Fp.sub(i, Fp.ONE));
        assertIsSquare(Fp, root, n);
        return root;
    }
    function sqrt9mod16(P) {
        const Fp_ = Field(P);
        const tn = tonelliShanks(P);
        const c1 = tn(Fp_, Fp_.neg(Fp_.ONE));
        const c2 = tn(Fp_, c1);
        const c3 = tn(Fp_, Fp_.neg(c1));
        const c4 = (P + _7n$2) / _16n$1;
        return (Fp, n) => {
            let tv1 = Fp.pow(n, c4);
            let tv2 = Fp.mul(tv1, c1);
            const tv3 = Fp.mul(tv1, c2);
            const tv4 = Fp.mul(tv1, c3);
            const e1 = Fp.eql(Fp.sqr(tv2), n);
            const e2 = Fp.eql(Fp.sqr(tv3), n);
            tv1 = Fp.cmov(tv1, tv2, e1);
            tv2 = Fp.cmov(tv4, tv3, e2);
            const e3 = Fp.eql(Fp.sqr(tv2), n);
            const root = Fp.cmov(tv1, tv2, e3);
            assertIsSquare(Fp, root, n);
            return root;
        };
    }
    function tonelliShanks(P) {
        if (P < _3n$3)
            throw new Error('sqrt is not defined for small field');
        let Q = P - _1n$7;
        let S = 0;
        while (Q % _2n$6 === _0n$8) {
            Q /= _2n$6;
            S++;
        }
        let Z = _2n$6;
        const _Fp = Field(P);
        while (FpLegendre(_Fp, Z) === 1) {
            if (Z++ > 1000)
                throw new Error('Cannot find square root: probably non-prime P');
        }
        if (S === 1)
            return sqrt3mod4;
        let cc = _Fp.pow(Z, Q);
        const Q1div2 = (Q + _1n$7) / _2n$6;
        return function tonelliSlow(Fp, n) {
            if (Fp.is0(n))
                return n;
            if (FpLegendre(Fp, n) !== 1)
                throw new Error('Cannot find square root');
            let M = S;
            let c = Fp.mul(Fp.ONE, cc);
            let t = Fp.pow(n, Q);
            let R = Fp.pow(n, Q1div2);
            while (!Fp.eql(t, Fp.ONE)) {
                if (Fp.is0(t))
                    return Fp.ZERO;
                let i = 1;
                let t_tmp = Fp.sqr(t);
                while (!Fp.eql(t_tmp, Fp.ONE)) {
                    i++;
                    t_tmp = Fp.sqr(t_tmp);
                    if (i === M)
                        throw new Error('Cannot find square root');
                }
                const exponent = _1n$7 << BigInt(M - i - 1);
                const b = Fp.pow(c, exponent);
                M = i;
                c = Fp.sqr(b);
                t = Fp.mul(t, c);
                R = Fp.mul(R, b);
            }
            return R;
        };
    }
    function FpSqrt(P) {
        if (P % _4n$1 === _3n$3)
            return sqrt3mod4;
        if (P % _8n$2 === _5n$1)
            return sqrt5mod8;
        if (P % _16n$1 === _9n)
            return sqrt9mod16(P);
        return tonelliShanks(P);
    }
    const isNegativeLE = (num, modulo) => (mod(num, modulo) & _1n$7) === _1n$7;
    const FIELD_FIELDS = [
        'create', 'isValid', 'is0', 'neg', 'inv', 'sqrt', 'sqr',
        'eql', 'add', 'sub', 'mul', 'pow', 'div',
        'addN', 'subN', 'mulN', 'sqrN'
    ];
    function validateField(field) {
        const initial = {
            ORDER: 'bigint',
            MASK: 'bigint',
            BYTES: 'number',
            BITS: 'number',
        };
        const opts = FIELD_FIELDS.reduce((map, val) => {
            map[val] = 'function';
            return map;
        }, initial);
        _validateObject(field, opts);
        return field;
    }
    function FpPow(Fp, num, power) {
        if (power < _0n$8)
            throw new Error('invalid exponent, negatives unsupported');
        if (power === _0n$8)
            return Fp.ONE;
        if (power === _1n$7)
            return num;
        let p = Fp.ONE;
        let d = num;
        while (power > _0n$8) {
            if (power & _1n$7)
                p = Fp.mul(p, d);
            d = Fp.sqr(d);
            power >>= _1n$7;
        }
        return p;
    }
    function FpInvertBatch(Fp, nums, passZero = false) {
        const inverted = new Array(nums.length).fill(passZero ? Fp.ZERO : undefined);
        const multipliedAcc = nums.reduce((acc, num, i) => {
            if (Fp.is0(num))
                return acc;
            inverted[i] = acc;
            return Fp.mul(acc, num);
        }, Fp.ONE);
        const invertedAcc = Fp.inv(multipliedAcc);
        nums.reduceRight((acc, num, i) => {
            if (Fp.is0(num))
                return acc;
            inverted[i] = Fp.mul(acc, inverted[i]);
            return Fp.mul(acc, num);
        }, invertedAcc);
        return inverted;
    }
    function FpLegendre(Fp, n) {
        const p1mod2 = (Fp.ORDER - _1n$7) / _2n$6;
        const powered = Fp.pow(n, p1mod2);
        const yes = Fp.eql(powered, Fp.ONE);
        const zero = Fp.eql(powered, Fp.ZERO);
        const no = Fp.eql(powered, Fp.neg(Fp.ONE));
        if (!yes && !zero && !no)
            throw new Error('invalid Legendre symbol result');
        return yes ? 1 : zero ? 0 : -1;
    }
    function nLength(n, nBitLength) {
        if (nBitLength !== undefined)
            anumber(nBitLength);
        const _nBitLength = nBitLength !== undefined ? nBitLength : n.toString(2).length;
        const nByteLength = Math.ceil(_nBitLength / 8);
        return { nBitLength: _nBitLength, nByteLength };
    }
    function Field(ORDER, bitLenOrOpts,
    isLE = false, opts = {}) {
        if (ORDER <= _0n$8)
            throw new Error('invalid field: expected ORDER > 0, got ' + ORDER);
        let _nbitLength = undefined;
        let _sqrt = undefined;
        let modFromBytes = false;
        let allowedLengths = undefined;
        if (typeof bitLenOrOpts === 'object' && bitLenOrOpts != null) {
            if (opts.sqrt || isLE)
                throw new Error('cannot specify opts in two arguments');
            const _opts = bitLenOrOpts;
            if (_opts.BITS)
                _nbitLength = _opts.BITS;
            if (_opts.sqrt)
                _sqrt = _opts.sqrt;
            if (typeof _opts.isLE === 'boolean')
                isLE = _opts.isLE;
            if (typeof _opts.modFromBytes === 'boolean')
                modFromBytes = _opts.modFromBytes;
            allowedLengths = _opts.allowedLengths;
        }
        else {
            if (typeof bitLenOrOpts === 'number')
                _nbitLength = bitLenOrOpts;
            if (opts.sqrt)
                _sqrt = opts.sqrt;
        }
        const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, _nbitLength);
        if (BYTES > 2048)
            throw new Error('invalid field: expected ORDER of <= 2048 bytes');
        let sqrtP;
        const f = Object.freeze({
            ORDER,
            isLE,
            BITS,
            BYTES,
            MASK: bitMask$1(BITS),
            ZERO: _0n$8,
            ONE: _1n$7,
            allowedLengths: allowedLengths,
            create: (num) => mod(num, ORDER),
            isValid: (num) => {
                if (typeof num !== 'bigint')
                    throw new Error('invalid field element: expected bigint, got ' + typeof num);
                return _0n$8 <= num && num < ORDER;
            },
            is0: (num) => num === _0n$8,
            isValidNot0: (num) => !f.is0(num) && f.isValid(num),
            isOdd: (num) => (num & _1n$7) === _1n$7,
            neg: (num) => mod(-num, ORDER),
            eql: (lhs, rhs) => lhs === rhs,
            sqr: (num) => mod(num * num, ORDER),
            add: (lhs, rhs) => mod(lhs + rhs, ORDER),
            sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
            mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
            pow: (num, power) => FpPow(f, num, power),
            div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
            sqrN: (num) => num * num,
            addN: (lhs, rhs) => lhs + rhs,
            subN: (lhs, rhs) => lhs - rhs,
            mulN: (lhs, rhs) => lhs * rhs,
            inv: (num) => invert(num, ORDER),
            sqrt: _sqrt ||
                ((n) => {
                    if (!sqrtP)
                        sqrtP = FpSqrt(ORDER);
                    return sqrtP(f, n);
                }),
            toBytes: (num) => (isLE ? numberToBytesLE$1(num, BYTES) : numberToBytesBE(num, BYTES)),
            fromBytes: (bytes, skipValidation = true) => {
                if (allowedLengths) {
                    if (!allowedLengths.includes(bytes.length) || bytes.length > BYTES) {
                        throw new Error('Field.fromBytes: expected ' + allowedLengths + ' bytes, got ' + bytes.length);
                    }
                    const padded = new Uint8Array(BYTES);
                    padded.set(bytes, isLE ? 0 : padded.length - bytes.length);
                    bytes = padded;
                }
                if (bytes.length !== BYTES)
                    throw new Error('Field.fromBytes: expected ' + BYTES + ' bytes, got ' + bytes.length);
                let scalar = isLE ? bytesToNumberLE$1(bytes) : bytesToNumberBE(bytes);
                if (modFromBytes)
                    scalar = mod(scalar, ORDER);
                if (!skipValidation)
                    if (!f.isValid(scalar))
                        throw new Error('invalid field element: outside of range 0..ORDER');
                return scalar;
            },
            invertBatch: (lst) => FpInvertBatch(f, lst),
            cmov: (a, b, c) => (c ? b : a),
        });
        return Object.freeze(f);
    }
    function FpSqrtEven(Fp, elm) {
        if (!Fp.isOdd)
            throw new Error("Field doesn't have isOdd");
        const root = Fp.sqrt(elm);
        return Fp.isOdd(root) ? Fp.neg(root) : root;
    }
    function getFieldBytesLength(fieldOrder) {
        if (typeof fieldOrder !== 'bigint')
            throw new Error('field order must be bigint');
        const bitLength = fieldOrder.toString(2).length;
        return Math.ceil(bitLength / 8);
    }
    function getMinHashLength(fieldOrder) {
        const length = getFieldBytesLength(fieldOrder);
        return length + Math.ceil(length / 2);
    }
    function mapHashToField(key, fieldOrder, isLE = false) {
        const len = key.length;
        const fieldLen = getFieldBytesLength(fieldOrder);
        const minLen = getMinHashLength(fieldOrder);
        if (len < 16 || len < minLen || len > 1024)
            throw new Error('expected ' + minLen + '-1024 bytes of input, got ' + len);
        const num = isLE ? bytesToNumberLE$1(key) : bytesToNumberBE(key);
        const reduced = mod(num, fieldOrder - _1n$7) + _1n$7;
        return isLE ? numberToBytesLE$1(reduced, fieldLen) : numberToBytesBE(reduced, fieldLen);
    }

    /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
    const _0n$7 = BigInt(0);
    const _1n$6 = BigInt(1);
    function negateCt(condition, item) {
        const neg = item.negate();
        return condition ? neg : item;
    }
    function normalizeZ(c, points) {
        const invertedZs = FpInvertBatch(c.Fp, points.map((p) => p.Z));
        return points.map((p, i) => c.fromAffine(p.toAffine(invertedZs[i])));
    }
    function validateW(W, bits) {
        if (!Number.isSafeInteger(W) || W <= 0 || W > bits)
            throw new Error('invalid window size, expected [1..' + bits + '], got W=' + W);
    }
    function calcWOpts(W, scalarBits) {
        validateW(W, scalarBits);
        const windows = Math.ceil(scalarBits / W) + 1;
        const windowSize = 2 ** (W - 1);
        const maxNumber = 2 ** W;
        const mask = bitMask$1(W);
        const shiftBy = BigInt(W);
        return { windows, windowSize, mask, maxNumber, shiftBy };
    }
    function calcOffsets(n, window, wOpts) {
        const { windowSize, mask, maxNumber, shiftBy } = wOpts;
        let wbits = Number(n & mask);
        let nextN = n >> shiftBy;
        if (wbits > windowSize) {
            wbits -= maxNumber;
            nextN += _1n$6;
        }
        const offsetStart = window * windowSize;
        const offset = offsetStart + Math.abs(wbits) - 1;
        const isZero = wbits === 0;
        const isNeg = wbits < 0;
        const isNegF = window % 2 !== 0;
        const offsetF = offsetStart;
        return { nextN, offset, isZero, isNeg, isNegF, offsetF };
    }
    function validateMSMPoints(points, c) {
        if (!Array.isArray(points))
            throw new Error('array expected');
        points.forEach((p, i) => {
            if (!(p instanceof c))
                throw new Error('invalid point at index ' + i);
        });
    }
    function validateMSMScalars(scalars, field) {
        if (!Array.isArray(scalars))
            throw new Error('array of scalars expected');
        scalars.forEach((s, i) => {
            if (!field.isValid(s))
                throw new Error('invalid scalar at index ' + i);
        });
    }
    const pointPrecomputes = new WeakMap();
    const pointWindowSizes = new WeakMap();
    function getW(P) {
        return pointWindowSizes.get(P) || 1;
    }
    function assert0(n) {
        if (n !== _0n$7)
            throw new Error('invalid wNAF');
    }
    class wNAF {
        constructor(Point, bits) {
            this.BASE = Point.BASE;
            this.ZERO = Point.ZERO;
            this.Fn = Point.Fn;
            this.bits = bits;
        }
        _unsafeLadder(elm, n, p = this.ZERO) {
            let d = elm;
            while (n > _0n$7) {
                if (n & _1n$6)
                    p = p.add(d);
                d = d.double();
                n >>= _1n$6;
            }
            return p;
        }
        precomputeWindow(point, W) {
            const { windows, windowSize } = calcWOpts(W, this.bits);
            const points = [];
            let p = point;
            let base = p;
            for (let window = 0; window < windows; window++) {
                base = p;
                points.push(base);
                for (let i = 1; i < windowSize; i++) {
                    base = base.add(p);
                    points.push(base);
                }
                p = base.double();
            }
            return points;
        }
        wNAF(W, precomputes, n) {
            if (!this.Fn.isValid(n))
                throw new Error('invalid scalar');
            let p = this.ZERO;
            let f = this.BASE;
            const wo = calcWOpts(W, this.bits);
            for (let window = 0; window < wo.windows; window++) {
                const { nextN, offset, isZero, isNeg, isNegF, offsetF } = calcOffsets(n, window, wo);
                n = nextN;
                if (isZero) {
                    f = f.add(negateCt(isNegF, precomputes[offsetF]));
                }
                else {
                    p = p.add(negateCt(isNeg, precomputes[offset]));
                }
            }
            assert0(n);
            return { p, f };
        }
        wNAFUnsafe(W, precomputes, n, acc = this.ZERO) {
            const wo = calcWOpts(W, this.bits);
            for (let window = 0; window < wo.windows; window++) {
                if (n === _0n$7)
                    break;
                const { nextN, offset, isZero, isNeg } = calcOffsets(n, window, wo);
                n = nextN;
                if (isZero) {
                    continue;
                }
                else {
                    const item = precomputes[offset];
                    acc = acc.add(isNeg ? item.negate() : item);
                }
            }
            assert0(n);
            return acc;
        }
        getPrecomputes(W, point, transform) {
            let comp = pointPrecomputes.get(point);
            if (!comp) {
                comp = this.precomputeWindow(point, W);
                if (W !== 1) {
                    if (typeof transform === 'function')
                        comp = transform(comp);
                    pointPrecomputes.set(point, comp);
                }
            }
            return comp;
        }
        cached(point, scalar, transform) {
            const W = getW(point);
            return this.wNAF(W, this.getPrecomputes(W, point, transform), scalar);
        }
        unsafe(point, scalar, transform, prev) {
            const W = getW(point);
            if (W === 1)
                return this._unsafeLadder(point, scalar, prev);
            return this.wNAFUnsafe(W, this.getPrecomputes(W, point, transform), scalar, prev);
        }
        createCache(P, W) {
            validateW(W, this.bits);
            pointWindowSizes.set(P, W);
            pointPrecomputes.delete(P);
        }
        hasCache(elm) {
            return getW(elm) !== 1;
        }
    }
    function mulEndoUnsafe(Point, point, k1, k2) {
        let acc = point;
        let p1 = Point.ZERO;
        let p2 = Point.ZERO;
        while (k1 > _0n$7 || k2 > _0n$7) {
            if (k1 & _1n$6)
                p1 = p1.add(acc);
            if (k2 & _1n$6)
                p2 = p2.add(acc);
            acc = acc.double();
            k1 >>= _1n$6;
            k2 >>= _1n$6;
        }
        return { p1, p2 };
    }
    function pippenger(c, fieldN, points, scalars) {
        validateMSMPoints(points, c);
        validateMSMScalars(scalars, fieldN);
        const plength = points.length;
        const slength = scalars.length;
        if (plength !== slength)
            throw new Error('arrays of points and scalars must have equal length');
        const zero = c.ZERO;
        const wbits = bitLen(BigInt(plength));
        let windowSize = 1;
        if (wbits > 12)
            windowSize = wbits - 3;
        else if (wbits > 4)
            windowSize = wbits - 2;
        else if (wbits > 0)
            windowSize = 2;
        const MASK = bitMask$1(windowSize);
        const buckets = new Array(Number(MASK) + 1).fill(zero);
        const lastBits = Math.floor((fieldN.BITS - 1) / windowSize) * windowSize;
        let sum = zero;
        for (let i = lastBits; i >= 0; i -= windowSize) {
            buckets.fill(zero);
            for (let j = 0; j < slength; j++) {
                const scalar = scalars[j];
                const wbits = Number((scalar >> BigInt(i)) & MASK);
                buckets[wbits] = buckets[wbits].add(points[j]);
            }
            let resI = zero;
            for (let j = buckets.length - 1, sumI = zero; j > 0; j--) {
                sumI = sumI.add(buckets[j]);
                resI = resI.add(sumI);
            }
            sum = sum.add(resI);
            if (i !== 0)
                for (let j = 0; j < windowSize; j++)
                    sum = sum.double();
        }
        return sum;
    }
    function createField(order, field, isLE) {
        if (field) {
            if (field.ORDER !== order)
                throw new Error('Field.ORDER must match order: Fp == p, Fn == n');
            validateField(field);
            return field;
        }
        else {
            return Field(order, { isLE });
        }
    }
    function _createCurveFields(type, CURVE, curveOpts = {}, FpFnLE) {
        if (FpFnLE === undefined)
            FpFnLE = type === 'edwards';
        if (!CURVE || typeof CURVE !== 'object')
            throw new Error(`expected valid ${type} CURVE object`);
        for (const p of ['p', 'n', 'h']) {
            const val = CURVE[p];
            if (!(typeof val === 'bigint' && val > _0n$7))
                throw new Error(`CURVE.${p} must be positive bigint`);
        }
        const Fp = createField(CURVE.p, curveOpts.Fp, FpFnLE);
        const Fn = createField(CURVE.n, curveOpts.Fn, FpFnLE);
        const _b = type === 'weierstrass' ? 'b' : 'd';
        const params = ['Gx', 'Gy', 'a', _b];
        for (const p of params) {
            if (!Fp.isValid(CURVE[p]))
                throw new Error(`CURVE.${p} must be valid field element of CURVE.Fp`);
        }
        CURVE = Object.freeze(Object.assign({}, CURVE));
        return { CURVE, Fp, Fn };
    }

    /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
    const divNearest = (num, den) => (num + (num >= 0 ? den : -den) / _2n$5) / den;
    function _splitEndoScalar(k, basis, n) {
        const [[a1, b1], [a2, b2]] = basis;
        const c1 = divNearest(b2 * k, n);
        const c2 = divNearest(-b1 * k, n);
        let k1 = k - c1 * a1 - c2 * a2;
        let k2 = -c1 * b1 - c2 * b2;
        const k1neg = k1 < _0n$6;
        const k2neg = k2 < _0n$6;
        if (k1neg)
            k1 = -k1;
        if (k2neg)
            k2 = -k2;
        const MAX_NUM = bitMask$1(Math.ceil(bitLen(n) / 2)) + _1n$5;
        if (k1 < _0n$6 || k1 >= MAX_NUM || k2 < _0n$6 || k2 >= MAX_NUM) {
            throw new Error('splitScalar (endomorphism): failed, k=' + k);
        }
        return { k1neg, k1, k2neg, k2 };
    }
    function validateSigFormat(format) {
        if (!['compact', 'recovered', 'der'].includes(format))
            throw new Error('Signature format must be "compact", "recovered", or "der"');
        return format;
    }
    function validateSigOpts(opts, def) {
        const optsn = {};
        for (let optName of Object.keys(def)) {
            optsn[optName] = opts[optName] === undefined ? def[optName] : opts[optName];
        }
        _abool2(optsn.lowS, 'lowS');
        _abool2(optsn.prehash, 'prehash');
        if (optsn.format !== undefined)
            validateSigFormat(optsn.format);
        return optsn;
    }
    class DERErr extends Error {
        constructor(m = '') {
            super(m);
        }
    }
    const DER = {
        Err: DERErr,
        _tlv: {
            encode: (tag, data) => {
                const { Err: E } = DER;
                if (tag < 0 || tag > 256)
                    throw new E('tlv.encode: wrong tag');
                if (data.length & 1)
                    throw new E('tlv.encode: unpadded data');
                const dataLen = data.length / 2;
                const len = numberToHexUnpadded(dataLen);
                if ((len.length / 2) & 128)
                    throw new E('tlv.encode: long form length too big');
                const lenLen = dataLen > 127 ? numberToHexUnpadded((len.length / 2) | 128) : '';
                const t = numberToHexUnpadded(tag);
                return t + lenLen + len + data;
            },
            decode(tag, data) {
                const { Err: E } = DER;
                let pos = 0;
                if (tag < 0 || tag > 256)
                    throw new E('tlv.encode: wrong tag');
                if (data.length < 2 || data[pos++] !== tag)
                    throw new E('tlv.decode: wrong tlv');
                const first = data[pos++];
                const isLong = !!(first & 128);
                let length = 0;
                if (!isLong)
                    length = first;
                else {
                    const lenLen = first & 127;
                    if (!lenLen)
                        throw new E('tlv.decode(long): indefinite length not supported');
                    if (lenLen > 4)
                        throw new E('tlv.decode(long): byte length is too big');
                    const lengthBytes = data.subarray(pos, pos + lenLen);
                    if (lengthBytes.length !== lenLen)
                        throw new E('tlv.decode: length bytes not complete');
                    if (lengthBytes[0] === 0)
                        throw new E('tlv.decode(long): zero leftmost byte');
                    for (const b of lengthBytes)
                        length = (length << 8) | b;
                    pos += lenLen;
                    if (length < 128)
                        throw new E('tlv.decode(long): not minimal encoding');
                }
                const v = data.subarray(pos, pos + length);
                if (v.length !== length)
                    throw new E('tlv.decode: wrong value length');
                return { v, l: data.subarray(pos + length) };
            },
        },
        _int: {
            encode(num) {
                const { Err: E } = DER;
                if (num < _0n$6)
                    throw new E('integer: negative integers are not allowed');
                let hex = numberToHexUnpadded(num);
                if (Number.parseInt(hex[0], 16) & 0b1000)
                    hex = '00' + hex;
                if (hex.length & 1)
                    throw new E('unexpected DER parsing assertion: unpadded hex');
                return hex;
            },
            decode(data) {
                const { Err: E } = DER;
                if (data[0] & 128)
                    throw new E('invalid signature integer: negative');
                if (data[0] === 0x00 && !(data[1] & 128))
                    throw new E('invalid signature integer: unnecessary leading zero');
                return bytesToNumberBE(data);
            },
        },
        toSig(hex) {
            const { Err: E, _int: int, _tlv: tlv } = DER;
            const data = ensureBytes('signature', hex);
            const { v: seqBytes, l: seqLeftBytes } = tlv.decode(0x30, data);
            if (seqLeftBytes.length)
                throw new E('invalid signature: left bytes after parsing');
            const { v: rBytes, l: rLeftBytes } = tlv.decode(0x02, seqBytes);
            const { v: sBytes, l: sLeftBytes } = tlv.decode(0x02, rLeftBytes);
            if (sLeftBytes.length)
                throw new E('invalid signature: left bytes after parsing');
            return { r: int.decode(rBytes), s: int.decode(sBytes) };
        },
        hexFromSig(sig) {
            const { _tlv: tlv, _int: int } = DER;
            const rs = tlv.encode(0x02, int.encode(sig.r));
            const ss = tlv.encode(0x02, int.encode(sig.s));
            const seq = rs + ss;
            return tlv.encode(0x30, seq);
        },
    };
    const _0n$6 = BigInt(0), _1n$5 = BigInt(1), _2n$5 = BigInt(2), _3n$2 = BigInt(3), _4n = BigInt(4);
    function _normFnElement(Fn, key) {
        const { BYTES: expected } = Fn;
        let num;
        if (typeof key === 'bigint') {
            num = key;
        }
        else {
            let bytes = ensureBytes('private key', key);
            try {
                num = Fn.fromBytes(bytes);
            }
            catch (error) {
                throw new Error(`invalid private key: expected ui8a of size ${expected}, got ${typeof key}`);
            }
        }
        if (!Fn.isValidNot0(num))
            throw new Error('invalid private key: out of range [1..N-1]');
        return num;
    }
    function weierstrassN(params, extraOpts = {}) {
        const validated = _createCurveFields('weierstrass', params, extraOpts);
        const { Fp, Fn } = validated;
        let CURVE = validated.CURVE;
        const { h: cofactor, n: CURVE_ORDER } = CURVE;
        _validateObject(extraOpts, {}, {
            allowInfinityPoint: 'boolean',
            clearCofactor: 'function',
            isTorsionFree: 'function',
            fromBytes: 'function',
            toBytes: 'function',
            endo: 'object',
            wrapPrivateKey: 'boolean',
        });
        const { endo } = extraOpts;
        if (endo) {
            if (!Fp.is0(CURVE.a) || typeof endo.beta !== 'bigint' || !Array.isArray(endo.basises)) {
                throw new Error('invalid endo: expected "beta": bigint and "basises": array');
            }
        }
        const lengths = getWLengths(Fp, Fn);
        function assertCompressionIsSupported() {
            if (!Fp.isOdd)
                throw new Error('compression is not supported: Field does not have .isOdd()');
        }
        function pointToBytes(_c, point, isCompressed) {
            const { x, y } = point.toAffine();
            const bx = Fp.toBytes(x);
            _abool2(isCompressed, 'isCompressed');
            if (isCompressed) {
                assertCompressionIsSupported();
                const hasEvenY = !Fp.isOdd(y);
                return concatBytes(pprefix(hasEvenY), bx);
            }
            else {
                return concatBytes(Uint8Array.of(0x04), bx, Fp.toBytes(y));
            }
        }
        function pointFromBytes(bytes) {
            _abytes2(bytes, undefined, 'Point');
            const { publicKey: comp, publicKeyUncompressed: uncomp } = lengths;
            const length = bytes.length;
            const head = bytes[0];
            const tail = bytes.subarray(1);
            if (length === comp && (head === 0x02 || head === 0x03)) {
                const x = Fp.fromBytes(tail);
                if (!Fp.isValid(x))
                    throw new Error('bad point: is not on curve, wrong x');
                const y2 = weierstrassEquation(x);
                let y;
                try {
                    y = Fp.sqrt(y2);
                }
                catch (sqrtError) {
                    const err = sqrtError instanceof Error ? ': ' + sqrtError.message : '';
                    throw new Error('bad point: is not on curve, sqrt error' + err);
                }
                assertCompressionIsSupported();
                const isYOdd = Fp.isOdd(y);
                const isHeadOdd = (head & 1) === 1;
                if (isHeadOdd !== isYOdd)
                    y = Fp.neg(y);
                return { x, y };
            }
            else if (length === uncomp && head === 0x04) {
                const L = Fp.BYTES;
                const x = Fp.fromBytes(tail.subarray(0, L));
                const y = Fp.fromBytes(tail.subarray(L, L * 2));
                if (!isValidXY(x, y))
                    throw new Error('bad point: is not on curve');
                return { x, y };
            }
            else {
                throw new Error(`bad point: got length ${length}, expected compressed=${comp} or uncompressed=${uncomp}`);
            }
        }
        const encodePoint = extraOpts.toBytes || pointToBytes;
        const decodePoint = extraOpts.fromBytes || pointFromBytes;
        function weierstrassEquation(x) {
            const x2 = Fp.sqr(x);
            const x3 = Fp.mul(x2, x);
            return Fp.add(Fp.add(x3, Fp.mul(x, CURVE.a)), CURVE.b);
        }
        function isValidXY(x, y) {
            const left = Fp.sqr(y);
            const right = weierstrassEquation(x);
            return Fp.eql(left, right);
        }
        if (!isValidXY(CURVE.Gx, CURVE.Gy))
            throw new Error('bad curve params: generator point');
        const _4a3 = Fp.mul(Fp.pow(CURVE.a, _3n$2), _4n);
        const _27b2 = Fp.mul(Fp.sqr(CURVE.b), BigInt(27));
        if (Fp.is0(Fp.add(_4a3, _27b2)))
            throw new Error('bad curve params: a or b');
        function acoord(title, n, banZero = false) {
            if (!Fp.isValid(n) || (banZero && Fp.is0(n)))
                throw new Error(`bad point coordinate ${title}`);
            return n;
        }
        function aprjpoint(other) {
            if (!(other instanceof Point))
                throw new Error('ProjectivePoint expected');
        }
        function splitEndoScalarN(k) {
            if (!endo || !endo.basises)
                throw new Error('no endo');
            return _splitEndoScalar(k, endo.basises, Fn.ORDER);
        }
        const toAffineMemo = memoized((p, iz) => {
            const { X, Y, Z } = p;
            if (Fp.eql(Z, Fp.ONE))
                return { x: X, y: Y };
            const is0 = p.is0();
            if (iz == null)
                iz = is0 ? Fp.ONE : Fp.inv(Z);
            const x = Fp.mul(X, iz);
            const y = Fp.mul(Y, iz);
            const zz = Fp.mul(Z, iz);
            if (is0)
                return { x: Fp.ZERO, y: Fp.ZERO };
            if (!Fp.eql(zz, Fp.ONE))
                throw new Error('invZ was invalid');
            return { x, y };
        });
        const assertValidMemo = memoized((p) => {
            if (p.is0()) {
                if (extraOpts.allowInfinityPoint && !Fp.is0(p.Y))
                    return;
                throw new Error('bad point: ZERO');
            }
            const { x, y } = p.toAffine();
            if (!Fp.isValid(x) || !Fp.isValid(y))
                throw new Error('bad point: x or y not field elements');
            if (!isValidXY(x, y))
                throw new Error('bad point: equation left != right');
            if (!p.isTorsionFree())
                throw new Error('bad point: not in prime-order subgroup');
            return true;
        });
        function finishEndo(endoBeta, k1p, k2p, k1neg, k2neg) {
            k2p = new Point(Fp.mul(k2p.X, endoBeta), k2p.Y, k2p.Z);
            k1p = negateCt(k1neg, k1p);
            k2p = negateCt(k2neg, k2p);
            return k1p.add(k2p);
        }
        class Point {
            constructor(X, Y, Z) {
                this.X = acoord('x', X);
                this.Y = acoord('y', Y, true);
                this.Z = acoord('z', Z);
                Object.freeze(this);
            }
            static CURVE() {
                return CURVE;
            }
            static fromAffine(p) {
                const { x, y } = p || {};
                if (!p || !Fp.isValid(x) || !Fp.isValid(y))
                    throw new Error('invalid affine point');
                if (p instanceof Point)
                    throw new Error('projective point not allowed');
                if (Fp.is0(x) && Fp.is0(y))
                    return Point.ZERO;
                return new Point(x, y, Fp.ONE);
            }
            static fromBytes(bytes) {
                const P = Point.fromAffine(decodePoint(_abytes2(bytes, undefined, 'point')));
                P.assertValidity();
                return P;
            }
            static fromHex(hex) {
                return Point.fromBytes(ensureBytes('pointHex', hex));
            }
            get x() {
                return this.toAffine().x;
            }
            get y() {
                return this.toAffine().y;
            }
            precompute(windowSize = 8, isLazy = true) {
                wnaf.createCache(this, windowSize);
                if (!isLazy)
                    this.multiply(_3n$2);
                return this;
            }
            assertValidity() {
                assertValidMemo(this);
            }
            hasEvenY() {
                const { y } = this.toAffine();
                if (!Fp.isOdd)
                    throw new Error("Field doesn't support isOdd");
                return !Fp.isOdd(y);
            }
            equals(other) {
                aprjpoint(other);
                const { X: X1, Y: Y1, Z: Z1 } = this;
                const { X: X2, Y: Y2, Z: Z2 } = other;
                const U1 = Fp.eql(Fp.mul(X1, Z2), Fp.mul(X2, Z1));
                const U2 = Fp.eql(Fp.mul(Y1, Z2), Fp.mul(Y2, Z1));
                return U1 && U2;
            }
            negate() {
                return new Point(this.X, Fp.neg(this.Y), this.Z);
            }
            double() {
                const { a, b } = CURVE;
                const b3 = Fp.mul(b, _3n$2);
                const { X: X1, Y: Y1, Z: Z1 } = this;
                let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
                let t0 = Fp.mul(X1, X1);
                let t1 = Fp.mul(Y1, Y1);
                let t2 = Fp.mul(Z1, Z1);
                let t3 = Fp.mul(X1, Y1);
                t3 = Fp.add(t3, t3);
                Z3 = Fp.mul(X1, Z1);
                Z3 = Fp.add(Z3, Z3);
                X3 = Fp.mul(a, Z3);
                Y3 = Fp.mul(b3, t2);
                Y3 = Fp.add(X3, Y3);
                X3 = Fp.sub(t1, Y3);
                Y3 = Fp.add(t1, Y3);
                Y3 = Fp.mul(X3, Y3);
                X3 = Fp.mul(t3, X3);
                Z3 = Fp.mul(b3, Z3);
                t2 = Fp.mul(a, t2);
                t3 = Fp.sub(t0, t2);
                t3 = Fp.mul(a, t3);
                t3 = Fp.add(t3, Z3);
                Z3 = Fp.add(t0, t0);
                t0 = Fp.add(Z3, t0);
                t0 = Fp.add(t0, t2);
                t0 = Fp.mul(t0, t3);
                Y3 = Fp.add(Y3, t0);
                t2 = Fp.mul(Y1, Z1);
                t2 = Fp.add(t2, t2);
                t0 = Fp.mul(t2, t3);
                X3 = Fp.sub(X3, t0);
                Z3 = Fp.mul(t2, t1);
                Z3 = Fp.add(Z3, Z3);
                Z3 = Fp.add(Z3, Z3);
                return new Point(X3, Y3, Z3);
            }
            add(other) {
                aprjpoint(other);
                const { X: X1, Y: Y1, Z: Z1 } = this;
                const { X: X2, Y: Y2, Z: Z2 } = other;
                let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
                const a = CURVE.a;
                const b3 = Fp.mul(CURVE.b, _3n$2);
                let t0 = Fp.mul(X1, X2);
                let t1 = Fp.mul(Y1, Y2);
                let t2 = Fp.mul(Z1, Z2);
                let t3 = Fp.add(X1, Y1);
                let t4 = Fp.add(X2, Y2);
                t3 = Fp.mul(t3, t4);
                t4 = Fp.add(t0, t1);
                t3 = Fp.sub(t3, t4);
                t4 = Fp.add(X1, Z1);
                let t5 = Fp.add(X2, Z2);
                t4 = Fp.mul(t4, t5);
                t5 = Fp.add(t0, t2);
                t4 = Fp.sub(t4, t5);
                t5 = Fp.add(Y1, Z1);
                X3 = Fp.add(Y2, Z2);
                t5 = Fp.mul(t5, X3);
                X3 = Fp.add(t1, t2);
                t5 = Fp.sub(t5, X3);
                Z3 = Fp.mul(a, t4);
                X3 = Fp.mul(b3, t2);
                Z3 = Fp.add(X3, Z3);
                X3 = Fp.sub(t1, Z3);
                Z3 = Fp.add(t1, Z3);
                Y3 = Fp.mul(X3, Z3);
                t1 = Fp.add(t0, t0);
                t1 = Fp.add(t1, t0);
                t2 = Fp.mul(a, t2);
                t4 = Fp.mul(b3, t4);
                t1 = Fp.add(t1, t2);
                t2 = Fp.sub(t0, t2);
                t2 = Fp.mul(a, t2);
                t4 = Fp.add(t4, t2);
                t0 = Fp.mul(t1, t4);
                Y3 = Fp.add(Y3, t0);
                t0 = Fp.mul(t5, t4);
                X3 = Fp.mul(t3, X3);
                X3 = Fp.sub(X3, t0);
                t0 = Fp.mul(t3, t1);
                Z3 = Fp.mul(t5, Z3);
                Z3 = Fp.add(Z3, t0);
                return new Point(X3, Y3, Z3);
            }
            subtract(other) {
                return this.add(other.negate());
            }
            is0() {
                return this.equals(Point.ZERO);
            }
            multiply(scalar) {
                const { endo } = extraOpts;
                if (!Fn.isValidNot0(scalar))
                    throw new Error('invalid scalar: out of range');
                let point, fake;
                const mul = (n) => wnaf.cached(this, n, (p) => normalizeZ(Point, p));
                if (endo) {
                    const { k1neg, k1, k2neg, k2 } = splitEndoScalarN(scalar);
                    const { p: k1p, f: k1f } = mul(k1);
                    const { p: k2p, f: k2f } = mul(k2);
                    fake = k1f.add(k2f);
                    point = finishEndo(endo.beta, k1p, k2p, k1neg, k2neg);
                }
                else {
                    const { p, f } = mul(scalar);
                    point = p;
                    fake = f;
                }
                return normalizeZ(Point, [point, fake])[0];
            }
            multiplyUnsafe(sc) {
                const { endo } = extraOpts;
                const p = this;
                if (!Fn.isValid(sc))
                    throw new Error('invalid scalar: out of range');
                if (sc === _0n$6 || p.is0())
                    return Point.ZERO;
                if (sc === _1n$5)
                    return p;
                if (wnaf.hasCache(this))
                    return this.multiply(sc);
                if (endo) {
                    const { k1neg, k1, k2neg, k2 } = splitEndoScalarN(sc);
                    const { p1, p2 } = mulEndoUnsafe(Point, p, k1, k2);
                    return finishEndo(endo.beta, p1, p2, k1neg, k2neg);
                }
                else {
                    return wnaf.unsafe(p, sc);
                }
            }
            multiplyAndAddUnsafe(Q, a, b) {
                const sum = this.multiplyUnsafe(a).add(Q.multiplyUnsafe(b));
                return sum.is0() ? undefined : sum;
            }
            toAffine(invertedZ) {
                return toAffineMemo(this, invertedZ);
            }
            isTorsionFree() {
                const { isTorsionFree } = extraOpts;
                if (cofactor === _1n$5)
                    return true;
                if (isTorsionFree)
                    return isTorsionFree(Point, this);
                return wnaf.unsafe(this, CURVE_ORDER).is0();
            }
            clearCofactor() {
                const { clearCofactor } = extraOpts;
                if (cofactor === _1n$5)
                    return this;
                if (clearCofactor)
                    return clearCofactor(Point, this);
                return this.multiplyUnsafe(cofactor);
            }
            isSmallOrder() {
                return this.multiplyUnsafe(cofactor).is0();
            }
            toBytes(isCompressed = true) {
                _abool2(isCompressed, 'isCompressed');
                this.assertValidity();
                return encodePoint(Point, this, isCompressed);
            }
            toHex(isCompressed = true) {
                return bytesToHex(this.toBytes(isCompressed));
            }
            toString() {
                return `<Point ${this.is0() ? 'ZERO' : this.toHex()}>`;
            }
            get px() {
                return this.X;
            }
            get py() {
                return this.X;
            }
            get pz() {
                return this.Z;
            }
            toRawBytes(isCompressed = true) {
                return this.toBytes(isCompressed);
            }
            _setWindowSize(windowSize) {
                this.precompute(windowSize);
            }
            static normalizeZ(points) {
                return normalizeZ(Point, points);
            }
            static msm(points, scalars) {
                return pippenger(Point, Fn, points, scalars);
            }
            static fromPrivateKey(privateKey) {
                return Point.BASE.multiply(_normFnElement(Fn, privateKey));
            }
        }
        Point.BASE = new Point(CURVE.Gx, CURVE.Gy, Fp.ONE);
        Point.ZERO = new Point(Fp.ZERO, Fp.ONE, Fp.ZERO);
        Point.Fp = Fp;
        Point.Fn = Fn;
        const bits = Fn.BITS;
        const wnaf = new wNAF(Point, extraOpts.endo ? Math.ceil(bits / 2) : bits);
        Point.BASE.precompute(8);
        return Point;
    }
    function pprefix(hasEvenY) {
        return Uint8Array.of(hasEvenY ? 0x02 : 0x03);
    }
    function SWUFpSqrtRatio(Fp, Z) {
        const q = Fp.ORDER;
        let l = _0n$6;
        for (let o = q - _1n$5; o % _2n$5 === _0n$6; o /= _2n$5)
            l += _1n$5;
        const c1 = l;
        const _2n_pow_c1_1 = _2n$5 << (c1 - _1n$5 - _1n$5);
        const _2n_pow_c1 = _2n_pow_c1_1 * _2n$5;
        const c2 = (q - _1n$5) / _2n_pow_c1;
        const c3 = (c2 - _1n$5) / _2n$5;
        const c4 = _2n_pow_c1 - _1n$5;
        const c5 = _2n_pow_c1_1;
        const c6 = Fp.pow(Z, c2);
        const c7 = Fp.pow(Z, (c2 + _1n$5) / _2n$5);
        let sqrtRatio = (u, v) => {
            let tv1 = c6;
            let tv2 = Fp.pow(v, c4);
            let tv3 = Fp.sqr(tv2);
            tv3 = Fp.mul(tv3, v);
            let tv5 = Fp.mul(u, tv3);
            tv5 = Fp.pow(tv5, c3);
            tv5 = Fp.mul(tv5, tv2);
            tv2 = Fp.mul(tv5, v);
            tv3 = Fp.mul(tv5, u);
            let tv4 = Fp.mul(tv3, tv2);
            tv5 = Fp.pow(tv4, c5);
            let isQR = Fp.eql(tv5, Fp.ONE);
            tv2 = Fp.mul(tv3, c7);
            tv5 = Fp.mul(tv4, tv1);
            tv3 = Fp.cmov(tv2, tv3, isQR);
            tv4 = Fp.cmov(tv5, tv4, isQR);
            for (let i = c1; i > _1n$5; i--) {
                let tv5 = i - _2n$5;
                tv5 = _2n$5 << (tv5 - _1n$5);
                let tvv5 = Fp.pow(tv4, tv5);
                const e1 = Fp.eql(tvv5, Fp.ONE);
                tv2 = Fp.mul(tv3, tv1);
                tv1 = Fp.mul(tv1, tv1);
                tvv5 = Fp.mul(tv4, tv1);
                tv3 = Fp.cmov(tv2, tv3, e1);
                tv4 = Fp.cmov(tvv5, tv4, e1);
            }
            return { isValid: isQR, value: tv3 };
        };
        if (Fp.ORDER % _4n === _3n$2) {
            const c1 = (Fp.ORDER - _3n$2) / _4n;
            const c2 = Fp.sqrt(Fp.neg(Z));
            sqrtRatio = (u, v) => {
                let tv1 = Fp.sqr(v);
                const tv2 = Fp.mul(u, v);
                tv1 = Fp.mul(tv1, tv2);
                let y1 = Fp.pow(tv1, c1);
                y1 = Fp.mul(y1, tv2);
                const y2 = Fp.mul(y1, c2);
                const tv3 = Fp.mul(Fp.sqr(y1), v);
                const isQR = Fp.eql(tv3, u);
                let y = Fp.cmov(y2, y1, isQR);
                return { isValid: isQR, value: y };
            };
        }
        return sqrtRatio;
    }
    function mapToCurveSimpleSWU(Fp, opts) {
        validateField(Fp);
        const { A, B, Z } = opts;
        if (!Fp.isValid(A) || !Fp.isValid(B) || !Fp.isValid(Z))
            throw new Error('mapToCurveSimpleSWU: invalid opts');
        const sqrtRatio = SWUFpSqrtRatio(Fp, Z);
        if (!Fp.isOdd)
            throw new Error('Field does not have .isOdd()');
        return (u) => {
            let tv1, tv2, tv3, tv4, tv5, tv6, x, y;
            tv1 = Fp.sqr(u);
            tv1 = Fp.mul(tv1, Z);
            tv2 = Fp.sqr(tv1);
            tv2 = Fp.add(tv2, tv1);
            tv3 = Fp.add(tv2, Fp.ONE);
            tv3 = Fp.mul(tv3, B);
            tv4 = Fp.cmov(Z, Fp.neg(tv2), !Fp.eql(tv2, Fp.ZERO));
            tv4 = Fp.mul(tv4, A);
            tv2 = Fp.sqr(tv3);
            tv6 = Fp.sqr(tv4);
            tv5 = Fp.mul(tv6, A);
            tv2 = Fp.add(tv2, tv5);
            tv2 = Fp.mul(tv2, tv3);
            tv6 = Fp.mul(tv6, tv4);
            tv5 = Fp.mul(tv6, B);
            tv2 = Fp.add(tv2, tv5);
            x = Fp.mul(tv1, tv3);
            const { isValid, value } = sqrtRatio(tv2, tv6);
            y = Fp.mul(tv1, u);
            y = Fp.mul(y, value);
            x = Fp.cmov(x, tv3, isValid);
            y = Fp.cmov(y, value, isValid);
            const e1 = Fp.isOdd(u) === Fp.isOdd(y);
            y = Fp.cmov(Fp.neg(y), y, e1);
            const tv4_inv = FpInvertBatch(Fp, [tv4], true)[0];
            x = Fp.mul(x, tv4_inv);
            return { x, y };
        };
    }
    function getWLengths(Fp, Fn) {
        return {
            secretKey: Fn.BYTES,
            publicKey: 1 + Fp.BYTES,
            publicKeyUncompressed: 1 + 2 * Fp.BYTES,
            publicKeyHasPrefix: true,
            signature: 2 * Fn.BYTES,
        };
    }
    function ecdh(Point, ecdhOpts = {}) {
        const { Fn } = Point;
        const randomBytes_ = ecdhOpts.randomBytes || randomBytes;
        const lengths = Object.assign(getWLengths(Point.Fp, Fn), { seed: getMinHashLength(Fn.ORDER) });
        function isValidSecretKey(secretKey) {
            try {
                return !!_normFnElement(Fn, secretKey);
            }
            catch (error) {
                return false;
            }
        }
        function isValidPublicKey(publicKey, isCompressed) {
            const { publicKey: comp, publicKeyUncompressed } = lengths;
            try {
                const l = publicKey.length;
                if (isCompressed === true && l !== comp)
                    return false;
                if (isCompressed === false && l !== publicKeyUncompressed)
                    return false;
                return !!Point.fromBytes(publicKey);
            }
            catch (error) {
                return false;
            }
        }
        function randomSecretKey(seed = randomBytes_(lengths.seed)) {
            return mapHashToField(_abytes2(seed, lengths.seed, 'seed'), Fn.ORDER);
        }
        function getPublicKey(secretKey, isCompressed = true) {
            return Point.BASE.multiply(_normFnElement(Fn, secretKey)).toBytes(isCompressed);
        }
        function keygen(seed) {
            const secretKey = randomSecretKey(seed);
            return { secretKey, publicKey: getPublicKey(secretKey) };
        }
        function isProbPub(item) {
            if (typeof item === 'bigint')
                return false;
            if (item instanceof Point)
                return true;
            const { secretKey, publicKey, publicKeyUncompressed } = lengths;
            if (Fn.allowedLengths || secretKey === publicKey)
                return undefined;
            const l = ensureBytes('key', item).length;
            return l === publicKey || l === publicKeyUncompressed;
        }
        function getSharedSecret(secretKeyA, publicKeyB, isCompressed = true) {
            if (isProbPub(secretKeyA) === true)
                throw new Error('first arg must be private key');
            if (isProbPub(publicKeyB) === false)
                throw new Error('second arg must be public key');
            const s = _normFnElement(Fn, secretKeyA);
            const b = Point.fromHex(publicKeyB);
            return b.multiply(s).toBytes(isCompressed);
        }
        const utils = {
            isValidSecretKey,
            isValidPublicKey,
            randomSecretKey,
            isValidPrivateKey: isValidSecretKey,
            randomPrivateKey: randomSecretKey,
            normPrivateKeyToScalar: (key) => _normFnElement(Fn, key),
            precompute(windowSize = 8, point = Point.BASE) {
                return point.precompute(windowSize, false);
            },
        };
        return Object.freeze({ getPublicKey, getSharedSecret, keygen, Point, utils, lengths });
    }
    function ecdsa(Point, hash, ecdsaOpts = {}) {
        ahash(hash);
        _validateObject(ecdsaOpts, {}, {
            hmac: 'function',
            lowS: 'boolean',
            randomBytes: 'function',
            bits2int: 'function',
            bits2int_modN: 'function',
        });
        const randomBytes$1 = ecdsaOpts.randomBytes || randomBytes;
        const hmac$1 = ecdsaOpts.hmac ||
            ((key, ...msgs) => hmac(hash, key, concatBytes(...msgs)));
        const { Fp, Fn } = Point;
        const { ORDER: CURVE_ORDER, BITS: fnBits } = Fn;
        const { keygen, getPublicKey, getSharedSecret, utils, lengths } = ecdh(Point, ecdsaOpts);
        const defaultSigOpts = {
            prehash: false,
            lowS: typeof ecdsaOpts.lowS === 'boolean' ? ecdsaOpts.lowS : false,
            format: undefined,
            extraEntropy: false,
        };
        const defaultSigOpts_format = 'compact';
        function isBiggerThanHalfOrder(number) {
            const HALF = CURVE_ORDER >> _1n$5;
            return number > HALF;
        }
        function validateRS(title, num) {
            if (!Fn.isValidNot0(num))
                throw new Error(`invalid signature ${title}: out of range 1..Point.Fn.ORDER`);
            return num;
        }
        function validateSigLength(bytes, format) {
            validateSigFormat(format);
            const size = lengths.signature;
            const sizer = format === 'compact' ? size : format === 'recovered' ? size + 1 : undefined;
            return _abytes2(bytes, sizer, `${format} signature`);
        }
        class Signature {
            constructor(r, s, recovery) {
                this.r = validateRS('r', r);
                this.s = validateRS('s', s);
                if (recovery != null)
                    this.recovery = recovery;
                Object.freeze(this);
            }
            static fromBytes(bytes, format = defaultSigOpts_format) {
                validateSigLength(bytes, format);
                let recid;
                if (format === 'der') {
                    const { r, s } = DER.toSig(_abytes2(bytes));
                    return new Signature(r, s);
                }
                if (format === 'recovered') {
                    recid = bytes[0];
                    format = 'compact';
                    bytes = bytes.subarray(1);
                }
                const L = Fn.BYTES;
                const r = bytes.subarray(0, L);
                const s = bytes.subarray(L, L * 2);
                return new Signature(Fn.fromBytes(r), Fn.fromBytes(s), recid);
            }
            static fromHex(hex, format) {
                return this.fromBytes(hexToBytes(hex), format);
            }
            addRecoveryBit(recovery) {
                return new Signature(this.r, this.s, recovery);
            }
            recoverPublicKey(messageHash) {
                const FIELD_ORDER = Fp.ORDER;
                const { r, s, recovery: rec } = this;
                if (rec == null || ![0, 1, 2, 3].includes(rec))
                    throw new Error('recovery id invalid');
                const hasCofactor = CURVE_ORDER * _2n$5 < FIELD_ORDER;
                if (hasCofactor && rec > 1)
                    throw new Error('recovery id is ambiguous for h>1 curve');
                const radj = rec === 2 || rec === 3 ? r + CURVE_ORDER : r;
                if (!Fp.isValid(radj))
                    throw new Error('recovery id 2 or 3 invalid');
                const x = Fp.toBytes(radj);
                const R = Point.fromBytes(concatBytes(pprefix((rec & 1) === 0), x));
                const ir = Fn.inv(radj);
                const h = bits2int_modN(ensureBytes('msgHash', messageHash));
                const u1 = Fn.create(-h * ir);
                const u2 = Fn.create(s * ir);
                const Q = Point.BASE.multiplyUnsafe(u1).add(R.multiplyUnsafe(u2));
                if (Q.is0())
                    throw new Error('point at infinify');
                Q.assertValidity();
                return Q;
            }
            hasHighS() {
                return isBiggerThanHalfOrder(this.s);
            }
            toBytes(format = defaultSigOpts_format) {
                validateSigFormat(format);
                if (format === 'der')
                    return hexToBytes(DER.hexFromSig(this));
                const r = Fn.toBytes(this.r);
                const s = Fn.toBytes(this.s);
                if (format === 'recovered') {
                    if (this.recovery == null)
                        throw new Error('recovery bit must be present');
                    return concatBytes(Uint8Array.of(this.recovery), r, s);
                }
                return concatBytes(r, s);
            }
            toHex(format) {
                return bytesToHex(this.toBytes(format));
            }
            assertValidity() { }
            static fromCompact(hex) {
                return Signature.fromBytes(ensureBytes('sig', hex), 'compact');
            }
            static fromDER(hex) {
                return Signature.fromBytes(ensureBytes('sig', hex), 'der');
            }
            normalizeS() {
                return this.hasHighS() ? new Signature(this.r, Fn.neg(this.s), this.recovery) : this;
            }
            toDERRawBytes() {
                return this.toBytes('der');
            }
            toDERHex() {
                return bytesToHex(this.toBytes('der'));
            }
            toCompactRawBytes() {
                return this.toBytes('compact');
            }
            toCompactHex() {
                return bytesToHex(this.toBytes('compact'));
            }
        }
        const bits2int = ecdsaOpts.bits2int ||
            function bits2int_def(bytes) {
                if (bytes.length > 8192)
                    throw new Error('input is too large');
                const num = bytesToNumberBE(bytes);
                const delta = bytes.length * 8 - fnBits;
                return delta > 0 ? num >> BigInt(delta) : num;
            };
        const bits2int_modN = ecdsaOpts.bits2int_modN ||
            function bits2int_modN_def(bytes) {
                return Fn.create(bits2int(bytes));
            };
        const ORDER_MASK = bitMask$1(fnBits);
        function int2octets(num) {
            aInRange$1('num < 2^' + fnBits, num, _0n$6, ORDER_MASK);
            return Fn.toBytes(num);
        }
        function validateMsgAndHash(message, prehash) {
            _abytes2(message, undefined, 'message');
            return prehash ? _abytes2(hash(message), undefined, 'prehashed message') : message;
        }
        function prepSig(message, privateKey, opts) {
            if (['recovered', 'canonical'].some((k) => k in opts))
                throw new Error('sign() legacy options not supported');
            const { lowS, prehash, extraEntropy } = validateSigOpts(opts, defaultSigOpts);
            message = validateMsgAndHash(message, prehash);
            const h1int = bits2int_modN(message);
            const d = _normFnElement(Fn, privateKey);
            const seedArgs = [int2octets(d), int2octets(h1int)];
            if (extraEntropy != null && extraEntropy !== false) {
                const e = extraEntropy === true ? randomBytes$1(lengths.secretKey) : extraEntropy;
                seedArgs.push(ensureBytes('extraEntropy', e));
            }
            const seed = concatBytes(...seedArgs);
            const m = h1int;
            function k2sig(kBytes) {
                const k = bits2int(kBytes);
                if (!Fn.isValidNot0(k))
                    return;
                const ik = Fn.inv(k);
                const q = Point.BASE.multiply(k).toAffine();
                const r = Fn.create(q.x);
                if (r === _0n$6)
                    return;
                const s = Fn.create(ik * Fn.create(m + r * d));
                if (s === _0n$6)
                    return;
                let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n$5);
                let normS = s;
                if (lowS && isBiggerThanHalfOrder(s)) {
                    normS = Fn.neg(s);
                    recovery ^= 1;
                }
                return new Signature(r, normS, recovery);
            }
            return { seed, k2sig };
        }
        function sign(message, secretKey, opts = {}) {
            message = ensureBytes('message', message);
            const { seed, k2sig } = prepSig(message, secretKey, opts);
            const drbg = createHmacDrbg(hash.outputLen, Fn.BYTES, hmac$1);
            const sig = drbg(seed, k2sig);
            return sig;
        }
        function tryParsingSig(sg) {
            let sig = undefined;
            const isHex = typeof sg === 'string' || isBytes$1(sg);
            const isObj = !isHex &&
                sg !== null &&
                typeof sg === 'object' &&
                typeof sg.r === 'bigint' &&
                typeof sg.s === 'bigint';
            if (!isHex && !isObj)
                throw new Error('invalid signature, expected Uint8Array, hex string or Signature instance');
            if (isObj) {
                sig = new Signature(sg.r, sg.s);
            }
            else if (isHex) {
                try {
                    sig = Signature.fromBytes(ensureBytes('sig', sg), 'der');
                }
                catch (derError) {
                    if (!(derError instanceof DER.Err))
                        throw derError;
                }
                if (!sig) {
                    try {
                        sig = Signature.fromBytes(ensureBytes('sig', sg), 'compact');
                    }
                    catch (error) {
                        return false;
                    }
                }
            }
            if (!sig)
                return false;
            return sig;
        }
        function verify(signature, message, publicKey, opts = {}) {
            const { lowS, prehash, format } = validateSigOpts(opts, defaultSigOpts);
            publicKey = ensureBytes('publicKey', publicKey);
            message = validateMsgAndHash(ensureBytes('message', message), prehash);
            if ('strict' in opts)
                throw new Error('options.strict was renamed to lowS');
            const sig = format === undefined
                ? tryParsingSig(signature)
                : Signature.fromBytes(ensureBytes('sig', signature), format);
            if (sig === false)
                return false;
            try {
                const P = Point.fromBytes(publicKey);
                if (lowS && sig.hasHighS())
                    return false;
                const { r, s } = sig;
                const h = bits2int_modN(message);
                const is = Fn.inv(s);
                const u1 = Fn.create(h * is);
                const u2 = Fn.create(r * is);
                const R = Point.BASE.multiplyUnsafe(u1).add(P.multiplyUnsafe(u2));
                if (R.is0())
                    return false;
                const v = Fn.create(R.x);
                return v === r;
            }
            catch (e) {
                return false;
            }
        }
        function recoverPublicKey(signature, message, opts = {}) {
            const { prehash } = validateSigOpts(opts, defaultSigOpts);
            message = validateMsgAndHash(message, prehash);
            return Signature.fromBytes(signature, 'recovered').recoverPublicKey(message).toBytes();
        }
        return Object.freeze({
            keygen,
            getPublicKey,
            getSharedSecret,
            utils,
            lengths,
            Point,
            sign,
            verify,
            recoverPublicKey,
            Signature,
            hash,
        });
    }
    function _weierstrass_legacy_opts_to_new(c) {
        const CURVE = {
            a: c.a,
            b: c.b,
            p: c.Fp.ORDER,
            n: c.n,
            h: c.h,
            Gx: c.Gx,
            Gy: c.Gy,
        };
        const Fp = c.Fp;
        let allowedLengths = c.allowedPrivateKeyLengths
            ? Array.from(new Set(c.allowedPrivateKeyLengths.map((l) => Math.ceil(l / 2))))
            : undefined;
        const Fn = Field(CURVE.n, {
            BITS: c.nBitLength,
            allowedLengths: allowedLengths,
            modFromBytes: c.wrapPrivateKey,
        });
        const curveOpts = {
            Fp,
            Fn,
            allowInfinityPoint: c.allowInfinityPoint,
            endo: c.endo,
            isTorsionFree: c.isTorsionFree,
            clearCofactor: c.clearCofactor,
            fromBytes: c.fromBytes,
            toBytes: c.toBytes,
        };
        return { CURVE, curveOpts };
    }
    function _ecdsa_legacy_opts_to_new(c) {
        const { CURVE, curveOpts } = _weierstrass_legacy_opts_to_new(c);
        const ecdsaOpts = {
            hmac: c.hmac,
            randomBytes: c.randomBytes,
            lowS: c.lowS,
            bits2int: c.bits2int,
            bits2int_modN: c.bits2int_modN,
        };
        return { CURVE, curveOpts, hash: c.hash, ecdsaOpts };
    }
    function _ecdsa_new_output_to_legacy(c, _ecdsa) {
        const Point = _ecdsa.Point;
        return Object.assign({}, _ecdsa, {
            ProjectivePoint: Point,
            CURVE: Object.assign({}, c, nLength(Point.Fn.ORDER, Point.Fn.BITS)),
        });
    }
    function weierstrass(c) {
        const { CURVE, curveOpts, hash, ecdsaOpts } = _ecdsa_legacy_opts_to_new(c);
        const Point = weierstrassN(CURVE, curveOpts);
        const signs = ecdsa(Point, hash, ecdsaOpts);
        return _ecdsa_new_output_to_legacy(c, signs);
    }

    /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
    function createCurve(curveDef, defHash) {
        const create = (hash) => weierstrass({ ...curveDef, hash: hash });
        return { ...create(defHash), create };
    }

    const os2ip = bytesToNumberBE;
    function i2osp(value, length) {
        anum(value);
        anum(length);
        if (value < 0 || value >= 1 << (8 * length))
            throw new Error('invalid I2OSP input: ' + value);
        const res = Array.from({ length }).fill(0);
        for (let i = length - 1; i >= 0; i--) {
            res[i] = value & 0xff;
            value >>>= 8;
        }
        return new Uint8Array(res);
    }
    function strxor(a, b) {
        const arr = new Uint8Array(a.length);
        for (let i = 0; i < a.length; i++) {
            arr[i] = a[i] ^ b[i];
        }
        return arr;
    }
    function anum(item) {
        if (!Number.isSafeInteger(item))
            throw new Error('number expected');
    }
    function normDST(DST) {
        if (!isBytes$1(DST) && typeof DST !== 'string')
            throw new Error('DST must be Uint8Array or string');
        return typeof DST === 'string' ? utf8ToBytes(DST) : DST;
    }
    function expand_message_xmd(msg, DST, lenInBytes, H) {
        abytes$1(msg);
        anum(lenInBytes);
        DST = normDST(DST);
        if (DST.length > 255)
            DST = H(concatBytes(utf8ToBytes('H2C-OVERSIZE-DST-'), DST));
        const { outputLen: b_in_bytes, blockLen: r_in_bytes } = H;
        const ell = Math.ceil(lenInBytes / b_in_bytes);
        if (lenInBytes > 65535 || ell > 255)
            throw new Error('expand_message_xmd: invalid lenInBytes');
        const DST_prime = concatBytes(DST, i2osp(DST.length, 1));
        const Z_pad = i2osp(0, r_in_bytes);
        const l_i_b_str = i2osp(lenInBytes, 2);
        const b = new Array(ell);
        const b_0 = H(concatBytes(Z_pad, msg, l_i_b_str, i2osp(0, 1), DST_prime));
        b[0] = H(concatBytes(b_0, i2osp(1, 1), DST_prime));
        for (let i = 1; i <= ell; i++) {
            const args = [strxor(b_0, b[i - 1]), i2osp(i + 1, 1), DST_prime];
            b[i] = H(concatBytes(...args));
        }
        const pseudo_random_bytes = concatBytes(...b);
        return pseudo_random_bytes.slice(0, lenInBytes);
    }
    function expand_message_xof(msg, DST, lenInBytes, k, H) {
        abytes$1(msg);
        anum(lenInBytes);
        DST = normDST(DST);
        if (DST.length > 255) {
            const dkLen = Math.ceil((2 * k) / 8);
            DST = H.create({ dkLen }).update(utf8ToBytes('H2C-OVERSIZE-DST-')).update(DST).digest();
        }
        if (lenInBytes > 65535 || DST.length > 255)
            throw new Error('expand_message_xof: invalid lenInBytes');
        return (H.create({ dkLen: lenInBytes })
            .update(msg)
            .update(i2osp(lenInBytes, 2))
            .update(DST)
            .update(i2osp(DST.length, 1))
            .digest());
    }
    function hash_to_field(msg, count, options) {
        _validateObject(options, {
            p: 'bigint',
            m: 'number',
            k: 'number',
            hash: 'function',
        });
        const { p, k, m, hash, expand, DST } = options;
        if (!isHash(options.hash))
            throw new Error('expected valid hash');
        abytes$1(msg);
        anum(count);
        const log2p = p.toString(2).length;
        const L = Math.ceil((log2p + k) / 8);
        const len_in_bytes = count * m * L;
        let prb;
        if (expand === 'xmd') {
            prb = expand_message_xmd(msg, DST, len_in_bytes, hash);
        }
        else if (expand === 'xof') {
            prb = expand_message_xof(msg, DST, len_in_bytes, k, hash);
        }
        else if (expand === '_internal_pass') {
            prb = msg;
        }
        else {
            throw new Error('expand must be "xmd" or "xof"');
        }
        const u = new Array(count);
        for (let i = 0; i < count; i++) {
            const e = new Array(m);
            for (let j = 0; j < m; j++) {
                const elm_offset = L * (j + i * m);
                const tv = prb.subarray(elm_offset, elm_offset + L);
                e[j] = mod(os2ip(tv), p);
            }
            u[i] = e;
        }
        return u;
    }
    function isogenyMap(field, map) {
        const coeff = map.map((i) => Array.from(i).reverse());
        return (x, y) => {
            const [xn, xd, yn, yd] = coeff.map((val) => val.reduce((acc, i) => field.add(field.mul(acc, x), i)));
            const [xd_inv, yd_inv] = FpInvertBatch(field, [xd, yd], true);
            x = field.mul(xn, xd_inv);
            y = field.mul(y, field.mul(yn, yd_inv));
            return { x, y };
        };
    }
    const _DST_scalar = utf8ToBytes('HashToScalar-');
    function createHasher(Point, mapToCurve, defaults) {
        if (typeof mapToCurve !== 'function')
            throw new Error('mapToCurve() must be defined');
        function map(num) {
            return Point.fromAffine(mapToCurve(num));
        }
        function clear(initial) {
            const P = initial.clearCofactor();
            if (P.equals(Point.ZERO))
                return Point.ZERO;
            P.assertValidity();
            return P;
        }
        return {
            defaults,
            hashToCurve(msg, options) {
                const opts = Object.assign({}, defaults, options);
                const u = hash_to_field(msg, 2, opts);
                const u0 = map(u[0]);
                const u1 = map(u[1]);
                return clear(u0.add(u1));
            },
            encodeToCurve(msg, options) {
                const optsDst = defaults.encodeDST ? { DST: defaults.encodeDST } : {};
                const opts = Object.assign({}, defaults, optsDst, options);
                const u = hash_to_field(msg, 1, opts);
                const u0 = map(u[0]);
                return clear(u0);
            },
            mapToCurve(scalars) {
                if (!Array.isArray(scalars))
                    throw new Error('expected array of bigints');
                for (const i of scalars)
                    if (typeof i !== 'bigint')
                        throw new Error('expected array of bigints');
                return clear(map(scalars));
            },
            hashToScalar(msg, options) {
                const N = Point.Fn.ORDER;
                const opts = Object.assign({}, defaults, { p: N, m: 1, DST: _DST_scalar }, options);
                return hash_to_field(msg, 1, opts)[0][0];
            },
        };
    }

    /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
    const secp256k1_CURVE = {
        p: BigInt('0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f'),
        n: BigInt('0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141'),
        h: BigInt(1),
        a: BigInt(0),
        b: BigInt(7),
        Gx: BigInt('0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798'),
        Gy: BigInt('0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8'),
    };
    const secp256k1_ENDO = {
        beta: BigInt('0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee'),
        basises: [
            [BigInt('0x3086d221a7d46bcde86c90e49284eb15'), -BigInt('0xe4437ed6010e88286f547fa90abfe4c3')],
            [BigInt('0x114ca50f7a8e2f3f657c1108d9d44cfd8'), BigInt('0x3086d221a7d46bcde86c90e49284eb15')],
        ],
    };
    const _0n$5 =  BigInt(0);
    const _1n$4 =  BigInt(1);
    const _2n$4 =  BigInt(2);
    function sqrtMod(y) {
        const P = secp256k1_CURVE.p;
        const _3n = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
        const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
        const b2 = (y * y * y) % P;
        const b3 = (b2 * b2 * y) % P;
        const b6 = (pow2(b3, _3n, P) * b3) % P;
        const b9 = (pow2(b6, _3n, P) * b3) % P;
        const b11 = (pow2(b9, _2n$4, P) * b2) % P;
        const b22 = (pow2(b11, _11n, P) * b11) % P;
        const b44 = (pow2(b22, _22n, P) * b22) % P;
        const b88 = (pow2(b44, _44n, P) * b44) % P;
        const b176 = (pow2(b88, _88n, P) * b88) % P;
        const b220 = (pow2(b176, _44n, P) * b44) % P;
        const b223 = (pow2(b220, _3n, P) * b3) % P;
        const t1 = (pow2(b223, _23n, P) * b22) % P;
        const t2 = (pow2(t1, _6n, P) * b2) % P;
        const root = pow2(t2, _2n$4, P);
        if (!Fpk1.eql(Fpk1.sqr(root), y))
            throw new Error('Cannot find square root');
        return root;
    }
    const Fpk1 = Field(secp256k1_CURVE.p, { sqrt: sqrtMod });
    const secp256k1 = createCurve({ ...secp256k1_CURVE, Fp: Fpk1, lowS: true, endo: secp256k1_ENDO }, sha256);
    const TAGGED_HASH_PREFIXES = {};
    function taggedHash(tag, ...messages) {
        let tagP = TAGGED_HASH_PREFIXES[tag];
        if (tagP === undefined) {
            const tagH = sha256(utf8ToBytes(tag));
            tagP = concatBytes(tagH, tagH);
            TAGGED_HASH_PREFIXES[tag] = tagP;
        }
        return sha256(concatBytes(tagP, ...messages));
    }
    const pointToBytes = (point) => point.toBytes(true).slice(1);
    const Pointk1 =  (() => secp256k1.Point)();
    const hasEven = (y) => y % _2n$4 === _0n$5;
    function schnorrGetExtPubKey(priv) {
        const { Fn, BASE } = Pointk1;
        const d_ = _normFnElement(Fn, priv);
        const p = BASE.multiply(d_);
        const scalar = hasEven(p.y) ? d_ : Fn.neg(d_);
        return { scalar, bytes: pointToBytes(p) };
    }
    function lift_x(x) {
        const Fp = Fpk1;
        if (!Fp.isValidNot0(x))
            throw new Error('invalid x: Fail if x ≥ p');
        const xx = Fp.create(x * x);
        const c = Fp.create(xx * x + BigInt(7));
        let y = Fp.sqrt(c);
        if (!hasEven(y))
            y = Fp.neg(y);
        const p = Pointk1.fromAffine({ x, y });
        p.assertValidity();
        return p;
    }
    const num = bytesToNumberBE;
    function challenge(...args) {
        return Pointk1.Fn.create(num(taggedHash('BIP0340/challenge', ...args)));
    }
    function schnorrGetPublicKey(secretKey) {
        return schnorrGetExtPubKey(secretKey).bytes;
    }
    function schnorrSign(message, secretKey, auxRand = randomBytes(32)) {
        const { Fn } = Pointk1;
        const m = ensureBytes('message', message);
        const { bytes: px, scalar: d } = schnorrGetExtPubKey(secretKey);
        const a = ensureBytes('auxRand', auxRand, 32);
        const t = Fn.toBytes(d ^ num(taggedHash('BIP0340/aux', a)));
        const rand = taggedHash('BIP0340/nonce', t, px, m);
        const { bytes: rx, scalar: k } = schnorrGetExtPubKey(rand);
        const e = challenge(rx, px, m);
        const sig = new Uint8Array(64);
        sig.set(rx, 0);
        sig.set(Fn.toBytes(Fn.create(k + e * d)), 32);
        if (!schnorrVerify(sig, m, px))
            throw new Error('sign: Invalid signature produced');
        return sig;
    }
    function schnorrVerify(signature, message, publicKey) {
        const { Fn, BASE } = Pointk1;
        const sig = ensureBytes('signature', signature, 64);
        const m = ensureBytes('message', message);
        const pub = ensureBytes('publicKey', publicKey, 32);
        try {
            const P = lift_x(num(pub));
            const r = num(sig.subarray(0, 32));
            if (!inRange(r, _1n$4, secp256k1_CURVE.p))
                return false;
            const s = num(sig.subarray(32, 64));
            if (!inRange(s, _1n$4, secp256k1_CURVE.n))
                return false;
            const e = challenge(Fn.toBytes(r), pointToBytes(P), m);
            const R = BASE.multiplyUnsafe(s).add(P.multiplyUnsafe(Fn.neg(e)));
            const { x, y } = R.toAffine();
            if (R.is0() || !hasEven(y) || x !== r)
                return false;
            return true;
        }
        catch (error) {
            return false;
        }
    }
    (() => {
        const size = 32;
        const seedLength = 48;
        const randomSecretKey = (seed = randomBytes(seedLength)) => {
            return mapHashToField(seed, secp256k1_CURVE.n);
        };
        secp256k1.utils.randomSecretKey;
        function keygen(seed) {
            const secretKey = randomSecretKey(seed);
            return { secretKey, publicKey: schnorrGetPublicKey(secretKey) };
        }
        return {
            keygen,
            getPublicKey: schnorrGetPublicKey,
            sign: schnorrSign,
            verify: schnorrVerify,
            Point: Pointk1,
            utils: {
                randomSecretKey: randomSecretKey,
                randomPrivateKey: randomSecretKey,
                taggedHash,
                lift_x,
                pointToBytes,
                numberToBytesBE,
                bytesToNumberBE,
                mod,
            },
            lengths: {
                secretKey: size,
                publicKey: size,
                publicKeyHasPrefix: false,
                signature: size * 2,
                seed: seedLength,
            },
        };
    })();
    const isoMap =  (() => isogenyMap(Fpk1, [
        [
            '0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7',
            '0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581',
            '0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262',
            '0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c',
        ],
        [
            '0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b',
            '0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14',
            '0x0000000000000000000000000000000000000000000000000000000000000001',
        ],
        [
            '0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c',
            '0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3',
            '0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931',
            '0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84',
        ],
        [
            '0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b',
            '0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573',
            '0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f',
            '0x0000000000000000000000000000000000000000000000000000000000000001',
        ],
    ].map((i) => i.map((j) => BigInt(j)))))();
    const mapSWU =  (() => mapToCurveSimpleSWU(Fpk1, {
        A: BigInt('0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533'),
        B: BigInt('1771'),
        Z: Fpk1.create(BigInt('-11')),
    }))();
    (() => createHasher(secp256k1.Point, (scalars) => {
        const { x, y } = mapSWU(Fpk1.create(scalars[0]));
        return isoMap(x, y);
    }, {
        DST: 'secp256k1_XMD:SHA-256_SSWU_RO_',
        encodeDST: 'secp256k1_XMD:SHA-256_SSWU_NU_',
        p: Fpk1.ORDER,
        m: 1,
        k: 128,
        expand: 'xmd',
        hash: sha256,
    }))();

    function secp256k1PairFromSeed(seed, onlyJs) {
        if (seed.length !== 32) {
            throw new Error('Expected valid 32-byte private key as a seed');
        }
        if (!util.hasBigInt || (!onlyJs && isReady())) {
            const full = secp256k1FromSeed(seed);
            const publicKey = full.slice(32);
            if (util.u8aEmpty(publicKey)) {
                throw new Error('Invalid publicKey generated from WASM interface');
            }
            return {
                publicKey,
                secretKey: full.slice(0, 32)
            };
        }
        return {
            publicKey: secp256k1.getPublicKey(seed, true),
            secretKey: seed
        };
    }

    function createSeedDeriveFn(fromSeed, derive) {
        return (keypair, { chainCode, isHard }) => {
            if (!isHard) {
                throw new Error('A soft key was found in the path and is not supported');
            }
            return fromSeed(derive(keypair.secretKey.subarray(0, 32), chainCode));
        };
    }

    const keyHdkdEcdsa =  createSeedDeriveFn(secp256k1PairFromSeed, secp256k1DeriveHard);

    const HDKD$1 = util.compactAddLength(util.stringToU8a('Ed25519HDKD'));
    function ed25519DeriveHard(seed, chainCode) {
        if (!util.isU8a(chainCode) || chainCode.length !== 32) {
            throw new Error('Invalid chainCode passed to derive');
        }
        return blake2AsU8a(util.u8aConcat(HDKD$1, seed, chainCode));
    }

    function randomAsU8a(length = 32) {
        return browser.getRandomValues(new Uint8Array(length));
    }
    const randomAsHex =  createAsHex(randomAsU8a);

    const BN_53 = new util.BN(0b11111111111111111111111111111111111111111111111111111);
    function randomAsNumber() {
        return util.hexToBn(randomAsHex(8)).and(BN_53).toNumber();
    }

    /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
    const _0n$4 = BigInt(0), _1n$3 = BigInt(1), _2n$3 = BigInt(2), _8n$1 = BigInt(8);
    function isEdValidXY(Fp, CURVE, x, y) {
        const x2 = Fp.sqr(x);
        const y2 = Fp.sqr(y);
        const left = Fp.add(Fp.mul(CURVE.a, x2), y2);
        const right = Fp.add(Fp.ONE, Fp.mul(CURVE.d, Fp.mul(x2, y2)));
        return Fp.eql(left, right);
    }
    function edwards(params, extraOpts = {}) {
        const validated = _createCurveFields('edwards', params, extraOpts, extraOpts.FpFnLE);
        const { Fp, Fn } = validated;
        let CURVE = validated.CURVE;
        const { h: cofactor } = CURVE;
        _validateObject(extraOpts, {}, { uvRatio: 'function' });
        const MASK = _2n$3 << (BigInt(Fn.BYTES * 8) - _1n$3);
        const modP = (n) => Fp.create(n);
        const uvRatio = extraOpts.uvRatio ||
            ((u, v) => {
                try {
                    return { isValid: true, value: Fp.sqrt(Fp.div(u, v)) };
                }
                catch (e) {
                    return { isValid: false, value: _0n$4 };
                }
            });
        if (!isEdValidXY(Fp, CURVE, CURVE.Gx, CURVE.Gy))
            throw new Error('bad curve params: generator point');
        function acoord(title, n, banZero = false) {
            const min = banZero ? _1n$3 : _0n$4;
            aInRange$1('coordinate ' + title, n, min, MASK);
            return n;
        }
        function aextpoint(other) {
            if (!(other instanceof Point))
                throw new Error('ExtendedPoint expected');
        }
        const toAffineMemo = memoized((p, iz) => {
            const { X, Y, Z } = p;
            const is0 = p.is0();
            if (iz == null)
                iz = is0 ? _8n$1 : Fp.inv(Z);
            const x = modP(X * iz);
            const y = modP(Y * iz);
            const zz = Fp.mul(Z, iz);
            if (is0)
                return { x: _0n$4, y: _1n$3 };
            if (zz !== _1n$3)
                throw new Error('invZ was invalid');
            return { x, y };
        });
        const assertValidMemo = memoized((p) => {
            const { a, d } = CURVE;
            if (p.is0())
                throw new Error('bad point: ZERO');
            const { X, Y, Z, T } = p;
            const X2 = modP(X * X);
            const Y2 = modP(Y * Y);
            const Z2 = modP(Z * Z);
            const Z4 = modP(Z2 * Z2);
            const aX2 = modP(X2 * a);
            const left = modP(Z2 * modP(aX2 + Y2));
            const right = modP(Z4 + modP(d * modP(X2 * Y2)));
            if (left !== right)
                throw new Error('bad point: equation left != right (1)');
            const XY = modP(X * Y);
            const ZT = modP(Z * T);
            if (XY !== ZT)
                throw new Error('bad point: equation left != right (2)');
            return true;
        });
        class Point {
            constructor(X, Y, Z, T) {
                this.X = acoord('x', X);
                this.Y = acoord('y', Y);
                this.Z = acoord('z', Z, true);
                this.T = acoord('t', T);
                Object.freeze(this);
            }
            static CURVE() {
                return CURVE;
            }
            static fromAffine(p) {
                if (p instanceof Point)
                    throw new Error('extended point not allowed');
                const { x, y } = p || {};
                acoord('x', x);
                acoord('y', y);
                return new Point(x, y, _1n$3, modP(x * y));
            }
            static fromBytes(bytes, zip215 = false) {
                const len = Fp.BYTES;
                const { a, d } = CURVE;
                bytes = copyBytes(_abytes2(bytes, len, 'point'));
                _abool2(zip215, 'zip215');
                const normed = copyBytes(bytes);
                const lastByte = bytes[len - 1];
                normed[len - 1] = lastByte & -129;
                const y = bytesToNumberLE$1(normed);
                const max = zip215 ? MASK : Fp.ORDER;
                aInRange$1('point.y', y, _0n$4, max);
                const y2 = modP(y * y);
                const u = modP(y2 - _1n$3);
                const v = modP(d * y2 - a);
                let { isValid, value: x } = uvRatio(u, v);
                if (!isValid)
                    throw new Error('bad point: invalid y coordinate');
                const isXOdd = (x & _1n$3) === _1n$3;
                const isLastByteOdd = (lastByte & 0x80) !== 0;
                if (!zip215 && x === _0n$4 && isLastByteOdd)
                    throw new Error('bad point: x=0 and x_0=1');
                if (isLastByteOdd !== isXOdd)
                    x = modP(-x);
                return Point.fromAffine({ x, y });
            }
            static fromHex(bytes, zip215 = false) {
                return Point.fromBytes(ensureBytes('point', bytes), zip215);
            }
            get x() {
                return this.toAffine().x;
            }
            get y() {
                return this.toAffine().y;
            }
            precompute(windowSize = 8, isLazy = true) {
                wnaf.createCache(this, windowSize);
                if (!isLazy)
                    this.multiply(_2n$3);
                return this;
            }
            assertValidity() {
                assertValidMemo(this);
            }
            equals(other) {
                aextpoint(other);
                const { X: X1, Y: Y1, Z: Z1 } = this;
                const { X: X2, Y: Y2, Z: Z2 } = other;
                const X1Z2 = modP(X1 * Z2);
                const X2Z1 = modP(X2 * Z1);
                const Y1Z2 = modP(Y1 * Z2);
                const Y2Z1 = modP(Y2 * Z1);
                return X1Z2 === X2Z1 && Y1Z2 === Y2Z1;
            }
            is0() {
                return this.equals(Point.ZERO);
            }
            negate() {
                return new Point(modP(-this.X), this.Y, this.Z, modP(-this.T));
            }
            double() {
                const { a } = CURVE;
                const { X: X1, Y: Y1, Z: Z1 } = this;
                const A = modP(X1 * X1);
                const B = modP(Y1 * Y1);
                const C = modP(_2n$3 * modP(Z1 * Z1));
                const D = modP(a * A);
                const x1y1 = X1 + Y1;
                const E = modP(modP(x1y1 * x1y1) - A - B);
                const G = D + B;
                const F = G - C;
                const H = D - B;
                const X3 = modP(E * F);
                const Y3 = modP(G * H);
                const T3 = modP(E * H);
                const Z3 = modP(F * G);
                return new Point(X3, Y3, Z3, T3);
            }
            add(other) {
                aextpoint(other);
                const { a, d } = CURVE;
                const { X: X1, Y: Y1, Z: Z1, T: T1 } = this;
                const { X: X2, Y: Y2, Z: Z2, T: T2 } = other;
                const A = modP(X1 * X2);
                const B = modP(Y1 * Y2);
                const C = modP(T1 * d * T2);
                const D = modP(Z1 * Z2);
                const E = modP((X1 + Y1) * (X2 + Y2) - A - B);
                const F = D - C;
                const G = D + C;
                const H = modP(B - a * A);
                const X3 = modP(E * F);
                const Y3 = modP(G * H);
                const T3 = modP(E * H);
                const Z3 = modP(F * G);
                return new Point(X3, Y3, Z3, T3);
            }
            subtract(other) {
                return this.add(other.negate());
            }
            multiply(scalar) {
                if (!Fn.isValidNot0(scalar))
                    throw new Error('invalid scalar: expected 1 <= sc < curve.n');
                const { p, f } = wnaf.cached(this, scalar, (p) => normalizeZ(Point, p));
                return normalizeZ(Point, [p, f])[0];
            }
            multiplyUnsafe(scalar, acc = Point.ZERO) {
                if (!Fn.isValid(scalar))
                    throw new Error('invalid scalar: expected 0 <= sc < curve.n');
                if (scalar === _0n$4)
                    return Point.ZERO;
                if (this.is0() || scalar === _1n$3)
                    return this;
                return wnaf.unsafe(this, scalar, (p) => normalizeZ(Point, p), acc);
            }
            isSmallOrder() {
                return this.multiplyUnsafe(cofactor).is0();
            }
            isTorsionFree() {
                return wnaf.unsafe(this, CURVE.n).is0();
            }
            toAffine(invertedZ) {
                return toAffineMemo(this, invertedZ);
            }
            clearCofactor() {
                if (cofactor === _1n$3)
                    return this;
                return this.multiplyUnsafe(cofactor);
            }
            toBytes() {
                const { x, y } = this.toAffine();
                const bytes = Fp.toBytes(y);
                bytes[bytes.length - 1] |= x & _1n$3 ? 0x80 : 0;
                return bytes;
            }
            toHex() {
                return bytesToHex(this.toBytes());
            }
            toString() {
                return `<Point ${this.is0() ? 'ZERO' : this.toHex()}>`;
            }
            get ex() {
                return this.X;
            }
            get ey() {
                return this.Y;
            }
            get ez() {
                return this.Z;
            }
            get et() {
                return this.T;
            }
            static normalizeZ(points) {
                return normalizeZ(Point, points);
            }
            static msm(points, scalars) {
                return pippenger(Point, Fn, points, scalars);
            }
            _setWindowSize(windowSize) {
                this.precompute(windowSize);
            }
            toRawBytes() {
                return this.toBytes();
            }
        }
        Point.BASE = new Point(CURVE.Gx, CURVE.Gy, _1n$3, modP(CURVE.Gx * CURVE.Gy));
        Point.ZERO = new Point(_0n$4, _1n$3, _1n$3, _0n$4);
        Point.Fp = Fp;
        Point.Fn = Fn;
        const wnaf = new wNAF(Point, Fn.BITS);
        Point.BASE.precompute(8);
        return Point;
    }
    class PrimeEdwardsPoint {
        constructor(ep) {
            this.ep = ep;
        }
        static fromBytes(_bytes) {
            notImplemented();
        }
        static fromHex(_hex) {
            notImplemented();
        }
        get x() {
            return this.toAffine().x;
        }
        get y() {
            return this.toAffine().y;
        }
        clearCofactor() {
            return this;
        }
        assertValidity() {
            this.ep.assertValidity();
        }
        toAffine(invertedZ) {
            return this.ep.toAffine(invertedZ);
        }
        toHex() {
            return bytesToHex(this.toBytes());
        }
        toString() {
            return this.toHex();
        }
        isTorsionFree() {
            return true;
        }
        isSmallOrder() {
            return false;
        }
        add(other) {
            this.assertSame(other);
            return this.init(this.ep.add(other.ep));
        }
        subtract(other) {
            this.assertSame(other);
            return this.init(this.ep.subtract(other.ep));
        }
        multiply(scalar) {
            return this.init(this.ep.multiply(scalar));
        }
        multiplyUnsafe(scalar) {
            return this.init(this.ep.multiplyUnsafe(scalar));
        }
        double() {
            return this.init(this.ep.double());
        }
        negate() {
            return this.init(this.ep.negate());
        }
        precompute(windowSize, isLazy) {
            return this.init(this.ep.precompute(windowSize, isLazy));
        }
        toRawBytes() {
            return this.toBytes();
        }
    }
    function eddsa(Point, cHash, eddsaOpts = {}) {
        if (typeof cHash !== 'function')
            throw new Error('"hash" function param is required');
        _validateObject(eddsaOpts, {}, {
            adjustScalarBytes: 'function',
            randomBytes: 'function',
            domain: 'function',
            prehash: 'function',
            mapToCurve: 'function',
        });
        const { prehash } = eddsaOpts;
        const { BASE, Fp, Fn } = Point;
        const randomBytes$1 = eddsaOpts.randomBytes || randomBytes;
        const adjustScalarBytes = eddsaOpts.adjustScalarBytes || ((bytes) => bytes);
        const domain = eddsaOpts.domain ||
            ((data, ctx, phflag) => {
                _abool2(phflag, 'phflag');
                if (ctx.length || phflag)
                    throw new Error('Contexts/pre-hash are not supported');
                return data;
            });
        function modN_LE(hash) {
            return Fn.create(bytesToNumberLE$1(hash));
        }
        function getPrivateScalar(key) {
            const len = lengths.secretKey;
            key = ensureBytes('private key', key, len);
            const hashed = ensureBytes('hashed private key', cHash(key), 2 * len);
            const head = adjustScalarBytes(hashed.slice(0, len));
            const prefix = hashed.slice(len, 2 * len);
            const scalar = modN_LE(head);
            return { head, prefix, scalar };
        }
        function getExtendedPublicKey(secretKey) {
            const { head, prefix, scalar } = getPrivateScalar(secretKey);
            const point = BASE.multiply(scalar);
            const pointBytes = point.toBytes();
            return { head, prefix, scalar, point, pointBytes };
        }
        function getPublicKey(secretKey) {
            return getExtendedPublicKey(secretKey).pointBytes;
        }
        function hashDomainToScalar(context = Uint8Array.of(), ...msgs) {
            const msg = concatBytes(...msgs);
            return modN_LE(cHash(domain(msg, ensureBytes('context', context), !!prehash)));
        }
        function sign(msg, secretKey, options = {}) {
            msg = ensureBytes('message', msg);
            if (prehash)
                msg = prehash(msg);
            const { prefix, scalar, pointBytes } = getExtendedPublicKey(secretKey);
            const r = hashDomainToScalar(options.context, prefix, msg);
            const R = BASE.multiply(r).toBytes();
            const k = hashDomainToScalar(options.context, R, pointBytes, msg);
            const s = Fn.create(r + k * scalar);
            if (!Fn.isValid(s))
                throw new Error('sign failed: invalid s');
            const rs = concatBytes(R, Fn.toBytes(s));
            return _abytes2(rs, lengths.signature, 'result');
        }
        const verifyOpts = { zip215: true };
        function verify(sig, msg, publicKey, options = verifyOpts) {
            const { context, zip215 } = options;
            const len = lengths.signature;
            sig = ensureBytes('signature', sig, len);
            msg = ensureBytes('message', msg);
            publicKey = ensureBytes('publicKey', publicKey, lengths.publicKey);
            if (zip215 !== undefined)
                _abool2(zip215, 'zip215');
            if (prehash)
                msg = prehash(msg);
            const mid = len / 2;
            const r = sig.subarray(0, mid);
            const s = bytesToNumberLE$1(sig.subarray(mid, len));
            let A, R, SB;
            try {
                A = Point.fromBytes(publicKey, zip215);
                R = Point.fromBytes(r, zip215);
                SB = BASE.multiplyUnsafe(s);
            }
            catch (error) {
                return false;
            }
            if (!zip215 && A.isSmallOrder())
                return false;
            const k = hashDomainToScalar(context, R.toBytes(), A.toBytes(), msg);
            const RkA = R.add(A.multiplyUnsafe(k));
            return RkA.subtract(SB).clearCofactor().is0();
        }
        const _size = Fp.BYTES;
        const lengths = {
            secretKey: _size,
            publicKey: _size,
            signature: 2 * _size,
            seed: _size,
        };
        function randomSecretKey(seed = randomBytes$1(lengths.seed)) {
            return _abytes2(seed, lengths.seed, 'seed');
        }
        function keygen(seed) {
            const secretKey = utils.randomSecretKey(seed);
            return { secretKey, publicKey: getPublicKey(secretKey) };
        }
        function isValidSecretKey(key) {
            return isBytes$1(key) && key.length === Fn.BYTES;
        }
        function isValidPublicKey(key, zip215) {
            try {
                return !!Point.fromBytes(key, zip215);
            }
            catch (error) {
                return false;
            }
        }
        const utils = {
            getExtendedPublicKey,
            randomSecretKey,
            isValidSecretKey,
            isValidPublicKey,
            toMontgomery(publicKey) {
                const { y } = Point.fromBytes(publicKey);
                const size = lengths.publicKey;
                const is25519 = size === 32;
                if (!is25519 && size !== 57)
                    throw new Error('only defined for 25519 and 448');
                const u = is25519 ? Fp.div(_1n$3 + y, _1n$3 - y) : Fp.div(y - _1n$3, y + _1n$3);
                return Fp.toBytes(u);
            },
            toMontgomerySecret(secretKey) {
                const size = lengths.secretKey;
                _abytes2(secretKey, size);
                const hashed = cHash(secretKey.subarray(0, size));
                return adjustScalarBytes(hashed).subarray(0, size);
            },
            randomPrivateKey: randomSecretKey,
            precompute(windowSize = 8, point = Point.BASE) {
                return point.precompute(windowSize, false);
            },
        };
        return Object.freeze({
            keygen,
            getPublicKey,
            sign,
            verify,
            utils,
            Point,
            lengths,
        });
    }
    function _eddsa_legacy_opts_to_new(c) {
        const CURVE = {
            a: c.a,
            d: c.d,
            p: c.Fp.ORDER,
            n: c.n,
            h: c.h,
            Gx: c.Gx,
            Gy: c.Gy,
        };
        const Fp = c.Fp;
        const Fn = Field(CURVE.n, c.nBitLength, true);
        const curveOpts = { Fp, Fn, uvRatio: c.uvRatio };
        const eddsaOpts = {
            randomBytes: c.randomBytes,
            adjustScalarBytes: c.adjustScalarBytes,
            domain: c.domain,
            prehash: c.prehash,
            mapToCurve: c.mapToCurve,
        };
        return { CURVE, curveOpts, hash: c.hash, eddsaOpts };
    }
    function _eddsa_new_output_to_legacy(c, eddsa) {
        const Point = eddsa.Point;
        const legacy = Object.assign({}, eddsa, {
            ExtendedPoint: Point,
            CURVE: c,
            nBitLength: Point.Fn.BITS,
            nByteLength: Point.Fn.BYTES,
        });
        return legacy;
    }
    function twistedEdwards(c) {
        const { CURVE, curveOpts, hash, eddsaOpts } = _eddsa_legacy_opts_to_new(c);
        const Point = edwards(CURVE, curveOpts);
        const EDDSA = eddsa(Point, hash, eddsaOpts);
        return _eddsa_new_output_to_legacy(c, EDDSA);
    }

    /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
    const _0n$3 = BigInt(0);
    const _1n$2 = BigInt(1);
    const _2n$2 = BigInt(2);
    function validateOpts(curve) {
        _validateObject(curve, {
            adjustScalarBytes: 'function',
            powPminus2: 'function',
        });
        return Object.freeze({ ...curve });
    }
    function montgomery(curveDef) {
        const CURVE = validateOpts(curveDef);
        const { P, type, adjustScalarBytes, powPminus2, randomBytes: rand } = CURVE;
        const is25519 = type === 'x25519';
        if (!is25519 && type !== 'x448')
            throw new Error('invalid type');
        const randomBytes_ = rand || randomBytes;
        const montgomeryBits = is25519 ? 255 : 448;
        const fieldLen = is25519 ? 32 : 56;
        const Gu = is25519 ? BigInt(9) : BigInt(5);
        const a24 = is25519 ? BigInt(121665) : BigInt(39081);
        const minScalar = is25519 ? _2n$2 ** BigInt(254) : _2n$2 ** BigInt(447);
        const maxAdded = is25519
            ? BigInt(8) * _2n$2 ** BigInt(251) - _1n$2
            : BigInt(4) * _2n$2 ** BigInt(445) - _1n$2;
        const maxScalar = minScalar + maxAdded + _1n$2;
        const modP = (n) => mod(n, P);
        const GuBytes = encodeU(Gu);
        function encodeU(u) {
            return numberToBytesLE$1(modP(u), fieldLen);
        }
        function decodeU(u) {
            const _u = ensureBytes('u coordinate', u, fieldLen);
            if (is25519)
                _u[31] &= 127;
            return modP(bytesToNumberLE$1(_u));
        }
        function decodeScalar(scalar) {
            return bytesToNumberLE$1(adjustScalarBytes(ensureBytes('scalar', scalar, fieldLen)));
        }
        function scalarMult(scalar, u) {
            const pu = montgomeryLadder(decodeU(u), decodeScalar(scalar));
            if (pu === _0n$3)
                throw new Error('invalid private or public key received');
            return encodeU(pu);
        }
        function scalarMultBase(scalar) {
            return scalarMult(scalar, GuBytes);
        }
        function cswap(swap, x_2, x_3) {
            const dummy = modP(swap * (x_2 - x_3));
            x_2 = modP(x_2 - dummy);
            x_3 = modP(x_3 + dummy);
            return { x_2, x_3 };
        }
        function montgomeryLadder(u, scalar) {
            aInRange$1('u', u, _0n$3, P);
            aInRange$1('scalar', scalar, minScalar, maxScalar);
            const k = scalar;
            const x_1 = u;
            let x_2 = _1n$2;
            let z_2 = _0n$3;
            let x_3 = u;
            let z_3 = _1n$2;
            let swap = _0n$3;
            for (let t = BigInt(montgomeryBits - 1); t >= _0n$3; t--) {
                const k_t = (k >> t) & _1n$2;
                swap ^= k_t;
                ({ x_2, x_3 } = cswap(swap, x_2, x_3));
                ({ x_2: z_2, x_3: z_3 } = cswap(swap, z_2, z_3));
                swap = k_t;
                const A = x_2 + z_2;
                const AA = modP(A * A);
                const B = x_2 - z_2;
                const BB = modP(B * B);
                const E = AA - BB;
                const C = x_3 + z_3;
                const D = x_3 - z_3;
                const DA = modP(D * A);
                const CB = modP(C * B);
                const dacb = DA + CB;
                const da_cb = DA - CB;
                x_3 = modP(dacb * dacb);
                z_3 = modP(x_1 * modP(da_cb * da_cb));
                x_2 = modP(AA * BB);
                z_2 = modP(E * (AA + modP(a24 * E)));
            }
            ({ x_2, x_3 } = cswap(swap, x_2, x_3));
            ({ x_2: z_2, x_3: z_3 } = cswap(swap, z_2, z_3));
            const z2 = powPminus2(z_2);
            return modP(x_2 * z2);
        }
        const lengths = {
            secretKey: fieldLen,
            publicKey: fieldLen,
            seed: fieldLen,
        };
        const randomSecretKey = (seed = randomBytes_(fieldLen)) => {
            abytes$1(seed, lengths.seed);
            return seed;
        };
        function keygen(seed) {
            const secretKey = randomSecretKey(seed);
            return { secretKey, publicKey: scalarMultBase(secretKey) };
        }
        const utils = {
            randomSecretKey,
            randomPrivateKey: randomSecretKey,
        };
        return {
            keygen,
            getSharedSecret: (secretKey, publicKey) => scalarMult(secretKey, publicKey),
            getPublicKey: (secretKey) => scalarMultBase(secretKey),
            scalarMult,
            scalarMultBase,
            utils,
            GuBytes: GuBytes.slice(),
            lengths,
        };
    }

    /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
    const _0n$2 =  BigInt(0), _1n$1 = BigInt(1), _2n$1 = BigInt(2), _3n$1 = BigInt(3);
    const _5n = BigInt(5), _8n = BigInt(8);
    const ed25519_CURVE_p = BigInt('0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed');
    const ed25519_CURVE =  (() => ({
        p: ed25519_CURVE_p,
        n: BigInt('0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed'),
        h: _8n,
        a: BigInt('0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec'),
        d: BigInt('0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3'),
        Gx: BigInt('0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a'),
        Gy: BigInt('0x6666666666666666666666666666666666666666666666666666666666666658'),
    }))();
    function ed25519_pow_2_252_3(x) {
        const _10n = BigInt(10), _20n = BigInt(20), _40n = BigInt(40), _80n = BigInt(80);
        const P = ed25519_CURVE_p;
        const x2 = (x * x) % P;
        const b2 = (x2 * x) % P;
        const b4 = (pow2(b2, _2n$1, P) * b2) % P;
        const b5 = (pow2(b4, _1n$1, P) * x) % P;
        const b10 = (pow2(b5, _5n, P) * b5) % P;
        const b20 = (pow2(b10, _10n, P) * b10) % P;
        const b40 = (pow2(b20, _20n, P) * b20) % P;
        const b80 = (pow2(b40, _40n, P) * b40) % P;
        const b160 = (pow2(b80, _80n, P) * b80) % P;
        const b240 = (pow2(b160, _80n, P) * b80) % P;
        const b250 = (pow2(b240, _10n, P) * b10) % P;
        const pow_p_5_8 = (pow2(b250, _2n$1, P) * x) % P;
        return { pow_p_5_8, b2 };
    }
    function adjustScalarBytes(bytes) {
        bytes[0] &= 248;
        bytes[31] &= 127;
        bytes[31] |= 64;
        return bytes;
    }
    const ED25519_SQRT_M1 =  BigInt('19681161376707505956807079304988542015446066515923890162744021073123829784752');
    function uvRatio(u, v) {
        const P = ed25519_CURVE_p;
        const v3 = mod(v * v * v, P);
        const v7 = mod(v3 * v3 * v, P);
        const pow = ed25519_pow_2_252_3(u * v7).pow_p_5_8;
        let x = mod(u * v3 * pow, P);
        const vx2 = mod(v * x * x, P);
        const root1 = x;
        const root2 = mod(x * ED25519_SQRT_M1, P);
        const useRoot1 = vx2 === u;
        const useRoot2 = vx2 === mod(-u, P);
        const noRoot = vx2 === mod(-u * ED25519_SQRT_M1, P);
        if (useRoot1)
            x = root1;
        if (useRoot2 || noRoot)
            x = root2;
        if (isNegativeLE(x, P))
            x = mod(-x, P);
        return { isValid: useRoot1 || useRoot2, value: x };
    }
    const Fp =  (() => Field(ed25519_CURVE.p, { isLE: true }))();
    const Fn =  (() => Field(ed25519_CURVE.n, { isLE: true }))();
    const ed25519Defaults =  (() => ({
        ...ed25519_CURVE,
        Fp,
        hash: sha512$1,
        adjustScalarBytes,
        uvRatio,
    }))();
    const ed25519 =  (() => twistedEdwards(ed25519Defaults))();
    function ed25519_domain(data, ctx, phflag) {
        if (ctx.length > 255)
            throw new Error('Context is too big');
        return concatBytes(utf8ToBytes('SigEd25519 no Ed25519 collisions'), new Uint8Array([phflag ? 1 : 0, ctx.length]), ctx, data);
    }
    (() => twistedEdwards({
        ...ed25519Defaults,
        domain: ed25519_domain,
    }))();
    (() => twistedEdwards(Object.assign({}, ed25519Defaults, {
        domain: ed25519_domain,
        prehash: sha512$1,
    })))();
    (() => {
        const P = Fp.ORDER;
        return montgomery({
            P,
            type: 'x25519',
            powPminus2: (x) => {
                const { pow_p_5_8, b2 } = ed25519_pow_2_252_3(x);
                return mod(pow2(pow_p_5_8, _3n$1, P) * b2, P);
            },
            adjustScalarBytes,
        });
    })();
    const ELL2_C1 =  (() => (ed25519_CURVE_p + _3n$1) / _8n)();
    const ELL2_C2 =  (() => Fp.pow(_2n$1, ELL2_C1))();
    const ELL2_C3 =  (() => Fp.sqrt(Fp.neg(Fp.ONE)))();
    function map_to_curve_elligator2_curve25519(u) {
        const ELL2_C4 = (ed25519_CURVE_p - _5n) / _8n;
        const ELL2_J = BigInt(486662);
        let tv1 = Fp.sqr(u);
        tv1 = Fp.mul(tv1, _2n$1);
        let xd = Fp.add(tv1, Fp.ONE);
        let x1n = Fp.neg(ELL2_J);
        let tv2 = Fp.sqr(xd);
        let gxd = Fp.mul(tv2, xd);
        let gx1 = Fp.mul(tv1, ELL2_J);
        gx1 = Fp.mul(gx1, x1n);
        gx1 = Fp.add(gx1, tv2);
        gx1 = Fp.mul(gx1, x1n);
        let tv3 = Fp.sqr(gxd);
        tv2 = Fp.sqr(tv3);
        tv3 = Fp.mul(tv3, gxd);
        tv3 = Fp.mul(tv3, gx1);
        tv2 = Fp.mul(tv2, tv3);
        let y11 = Fp.pow(tv2, ELL2_C4);
        y11 = Fp.mul(y11, tv3);
        let y12 = Fp.mul(y11, ELL2_C3);
        tv2 = Fp.sqr(y11);
        tv2 = Fp.mul(tv2, gxd);
        let e1 = Fp.eql(tv2, gx1);
        let y1 = Fp.cmov(y12, y11, e1);
        let x2n = Fp.mul(x1n, tv1);
        let y21 = Fp.mul(y11, u);
        y21 = Fp.mul(y21, ELL2_C2);
        let y22 = Fp.mul(y21, ELL2_C3);
        let gx2 = Fp.mul(gx1, tv1);
        tv2 = Fp.sqr(y21);
        tv2 = Fp.mul(tv2, gxd);
        let e2 = Fp.eql(tv2, gx2);
        let y2 = Fp.cmov(y22, y21, e2);
        tv2 = Fp.sqr(y1);
        tv2 = Fp.mul(tv2, gxd);
        let e3 = Fp.eql(tv2, gx1);
        let xn = Fp.cmov(x2n, x1n, e3);
        let y = Fp.cmov(y2, y1, e3);
        let e4 = Fp.isOdd(y);
        y = Fp.cmov(y, Fp.neg(y), e3 !== e4);
        return { xMn: xn, xMd: xd, yMn: y, yMd: _1n$1 };
    }
    const ELL2_C1_EDWARDS =  (() => FpSqrtEven(Fp, Fp.neg(BigInt(486664))))();
    function map_to_curve_elligator2_edwards25519(u) {
        const { xMn, xMd, yMn, yMd } = map_to_curve_elligator2_curve25519(u);
        let xn = Fp.mul(xMn, yMd);
        xn = Fp.mul(xn, ELL2_C1_EDWARDS);
        let xd = Fp.mul(xMd, yMn);
        let yn = Fp.sub(xMn, xMd);
        let yd = Fp.add(xMn, xMd);
        let tv1 = Fp.mul(xd, yd);
        let e = Fp.eql(tv1, Fp.ZERO);
        xn = Fp.cmov(xn, Fp.ZERO, e);
        xd = Fp.cmov(xd, Fp.ONE, e);
        yn = Fp.cmov(yn, Fp.ONE, e);
        yd = Fp.cmov(yd, Fp.ONE, e);
        const [xd_inv, yd_inv] = FpInvertBatch(Fp, [xd, yd], true);
        return { x: Fp.mul(xn, xd_inv), y: Fp.mul(yn, yd_inv) };
    }
    (() => createHasher(ed25519.Point, (scalars) => map_to_curve_elligator2_edwards25519(scalars[0]), {
        DST: 'edwards25519_XMD:SHA-512_ELL2_RO_',
        encodeDST: 'edwards25519_XMD:SHA-512_ELL2_NU_',
        p: ed25519_CURVE_p,
        m: 1,
        k: 128,
        expand: 'xmd',
        hash: sha512$1,
    }))();
    const SQRT_M1 = ED25519_SQRT_M1;
    const SQRT_AD_MINUS_ONE =  BigInt('25063068953384623474111414158702152701244531502492656460079210482610430750235');
    const INVSQRT_A_MINUS_D =  BigInt('54469307008909316920995813868745141605393597292927456921205312896311721017578');
    const ONE_MINUS_D_SQ =  BigInt('1159843021668779879193775521855586647937357759715417654439879720876111806838');
    const D_MINUS_ONE_SQ =  BigInt('40440834346308536858101042469323190826248399146238708352240133220865137265952');
    const invertSqrt = (number) => uvRatio(_1n$1, number);
    const MAX_255B =  BigInt('0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
    const bytes255ToNumberLE = (bytes) => ed25519.Point.Fp.create(bytesToNumberLE$1(bytes) & MAX_255B);
    function calcElligatorRistrettoMap(r0) {
        const { d } = ed25519_CURVE;
        const P = ed25519_CURVE_p;
        const mod = (n) => Fp.create(n);
        const r = mod(SQRT_M1 * r0 * r0);
        const Ns = mod((r + _1n$1) * ONE_MINUS_D_SQ);
        let c = BigInt(-1);
        const D = mod((c - d * r) * mod(r + d));
        let { isValid: Ns_D_is_sq, value: s } = uvRatio(Ns, D);
        let s_ = mod(s * r0);
        if (!isNegativeLE(s_, P))
            s_ = mod(-s_);
        if (!Ns_D_is_sq)
            s = s_;
        if (!Ns_D_is_sq)
            c = r;
        const Nt = mod(c * (r - _1n$1) * D_MINUS_ONE_SQ - D);
        const s2 = s * s;
        const W0 = mod((s + s) * D);
        const W1 = mod(Nt * SQRT_AD_MINUS_ONE);
        const W2 = mod(_1n$1 - s2);
        const W3 = mod(_1n$1 + s2);
        return new ed25519.Point(mod(W0 * W3), mod(W2 * W1), mod(W1 * W3), mod(W0 * W2));
    }
    function ristretto255_map(bytes) {
        abytes$1(bytes, 64);
        const r1 = bytes255ToNumberLE(bytes.subarray(0, 32));
        const R1 = calcElligatorRistrettoMap(r1);
        const r2 = bytes255ToNumberLE(bytes.subarray(32, 64));
        const R2 = calcElligatorRistrettoMap(r2);
        return new _RistrettoPoint(R1.add(R2));
    }
    class _RistrettoPoint extends PrimeEdwardsPoint {
        constructor(ep) {
            super(ep);
        }
        static fromAffine(ap) {
            return new _RistrettoPoint(ed25519.Point.fromAffine(ap));
        }
        assertSame(other) {
            if (!(other instanceof _RistrettoPoint))
                throw new Error('RistrettoPoint expected');
        }
        init(ep) {
            return new _RistrettoPoint(ep);
        }
        static hashToCurve(hex) {
            return ristretto255_map(ensureBytes('ristrettoHash', hex, 64));
        }
        static fromBytes(bytes) {
            abytes$1(bytes, 32);
            const { a, d } = ed25519_CURVE;
            const P = ed25519_CURVE_p;
            const mod = (n) => Fp.create(n);
            const s = bytes255ToNumberLE(bytes);
            if (!equalBytes(Fp.toBytes(s), bytes) || isNegativeLE(s, P))
                throw new Error('invalid ristretto255 encoding 1');
            const s2 = mod(s * s);
            const u1 = mod(_1n$1 + a * s2);
            const u2 = mod(_1n$1 - a * s2);
            const u1_2 = mod(u1 * u1);
            const u2_2 = mod(u2 * u2);
            const v = mod(a * d * u1_2 - u2_2);
            const { isValid, value: I } = invertSqrt(mod(v * u2_2));
            const Dx = mod(I * u2);
            const Dy = mod(I * Dx * v);
            let x = mod((s + s) * Dx);
            if (isNegativeLE(x, P))
                x = mod(-x);
            const y = mod(u1 * Dy);
            const t = mod(x * y);
            if (!isValid || isNegativeLE(t, P) || y === _0n$2)
                throw new Error('invalid ristretto255 encoding 2');
            return new _RistrettoPoint(new ed25519.Point(x, y, _1n$1, t));
        }
        static fromHex(hex) {
            return _RistrettoPoint.fromBytes(ensureBytes('ristrettoHex', hex, 32));
        }
        static msm(points, scalars) {
            return pippenger(_RistrettoPoint, ed25519.Point.Fn, points, scalars);
        }
        toBytes() {
            let { X, Y, Z, T } = this.ep;
            const P = ed25519_CURVE_p;
            const mod = (n) => Fp.create(n);
            const u1 = mod(mod(Z + Y) * mod(Z - Y));
            const u2 = mod(X * Y);
            const u2sq = mod(u2 * u2);
            const { value: invsqrt } = invertSqrt(mod(u1 * u2sq));
            const D1 = mod(invsqrt * u1);
            const D2 = mod(invsqrt * u2);
            const zInv = mod(D1 * D2 * T);
            let D;
            if (isNegativeLE(T * zInv, P)) {
                let _x = mod(Y * SQRT_M1);
                let _y = mod(X * SQRT_M1);
                X = _x;
                Y = _y;
                D = mod(D1 * INVSQRT_A_MINUS_D);
            }
            else {
                D = D2;
            }
            if (isNegativeLE(X * zInv, P))
                Y = mod(-Y);
            let s = mod((Z - Y) * D);
            if (isNegativeLE(s, P))
                s = mod(-s);
            return Fp.toBytes(s);
        }
        equals(other) {
            this.assertSame(other);
            const { X: X1, Y: Y1 } = this.ep;
            const { X: X2, Y: Y2 } = other.ep;
            const mod = (n) => Fp.create(n);
            const one = mod(X1 * Y2) === mod(Y1 * X2);
            const two = mod(Y1 * Y2) === mod(X1 * X2);
            return one || two;
        }
        is0() {
            return this.equals(_RistrettoPoint.ZERO);
        }
    }
    _RistrettoPoint.BASE =
     (() => new _RistrettoPoint(ed25519.Point.BASE))();
    _RistrettoPoint.ZERO =
     (() => new _RistrettoPoint(ed25519.Point.ZERO))();
    _RistrettoPoint.Fp =
     (() => Fp)();
    _RistrettoPoint.Fn =
     (() => Fn)();
    const RistrettoPoint = _RistrettoPoint;

    function ed25519PairFromSeed(seed, onlyJs) {
        if (!util.hasBigInt || (!onlyJs && isReady())) {
            const full = ed25519KeypairFromSeed(seed);
            return {
                publicKey: full.slice(32),
                secretKey: full.slice(0, 64)
            };
        }
        const publicKey = ed25519.getPublicKey(seed);
        return {
            publicKey,
            secretKey: util.u8aConcatStrict([seed, publicKey])
        };
    }

    function ed25519PairFromRandom() {
        return ed25519PairFromSeed(randomAsU8a());
    }

    function ed25519PairFromSecret(secretKey) {
        if (secretKey.length !== 64) {
            throw new Error('Invalid secretKey provided');
        }
        return {
            publicKey: secretKey.slice(32),
            secretKey
        };
    }

    function ed25519PairFromString(value) {
        return ed25519PairFromSeed(blake2AsU8a(util.stringToU8a(value)));
    }

    function ed25519Sign(message, { publicKey, secretKey }, onlyJs) {
        if (!secretKey) {
            throw new Error('Expected a valid secretKey');
        }
        else if (!publicKey) {
            throw new Error('Expected a valid publicKey');
        }
        const messageU8a = util.u8aToU8a(message);
        const privateU8a = secretKey.subarray(0, 32);
        return !util.hasBigInt || (!onlyJs && isReady())
            ? ed25519Sign$1(publicKey, privateU8a, messageU8a)
            : ed25519.sign(messageU8a, privateU8a);
    }

    function ed25519Verify(message, signature, publicKey, onlyJs) {
        const messageU8a = util.u8aToU8a(message);
        const publicKeyU8a = util.u8aToU8a(publicKey);
        const signatureU8a = util.u8aToU8a(signature);
        if (publicKeyU8a.length !== 32) {
            throw new Error(`Invalid publicKey, received ${publicKeyU8a.length}, expected 32`);
        }
        else if (signatureU8a.length !== 64) {
            throw new Error(`Invalid signature, received ${signatureU8a.length} bytes, expected 64`);
        }
        try {
            return !util.hasBigInt || (!onlyJs && isReady())
                ? ed25519Verify$1(signatureU8a, messageU8a, publicKeyU8a)
                : ed25519.verify(signatureU8a, messageU8a, publicKeyU8a);
        }
        catch {
            return false;
        }
    }

    const keyHdkdEd25519 =  createSeedDeriveFn(ed25519PairFromSeed, ed25519DeriveHard);

    const isBytes = isBytes$1;
    const bytesToNumberLE = bytesToNumberLE$1;
    const numberToBytesLE = numberToBytesLE$1;
    const aInRange = aInRange$1;
    const bitMask = bitMask$1;

    const _0n$1 = BigInt(0);
    const _1n = BigInt(1);
    const _2n = BigInt(2);
    const _7n$1 = BigInt(7);
    const _256n$1 = BigInt(256);
    const _0x71n = BigInt(0x71);
    const SHA3_PI = [];
    const SHA3_ROTL = [];
    const _SHA3_IOTA = [];
    for (let round = 0, R = _1n, x = 1, y = 0; round < 24; round++) {
        [x, y] = [y, (2 * x + 3 * y) % 5];
        SHA3_PI.push(2 * (5 * y + x));
        SHA3_ROTL.push((((round + 1) * (round + 2)) / 2) % 64);
        let t = _0n$1;
        for (let j = 0; j < 7; j++) {
            R = ((R << _1n) ^ ((R >> _7n$1) * _0x71n)) % _256n$1;
            if (R & _2n)
                t ^= _1n << ((_1n <<  BigInt(j)) - _1n);
        }
        _SHA3_IOTA.push(t);
    }
    const IOTAS = split(_SHA3_IOTA, true);
    const SHA3_IOTA_H = IOTAS[0];
    const SHA3_IOTA_L = IOTAS[1];
    const rotlH = (h, l, s) => (s > 32 ? rotlBH(h, l, s) : rotlSH(h, l, s));
    const rotlL = (h, l, s) => (s > 32 ? rotlBL(h, l, s) : rotlSL(h, l, s));
    function keccakP(s, rounds = 24) {
        const B = new Uint32Array(5 * 2);
        for (let round = 24 - rounds; round < 24; round++) {
            for (let x = 0; x < 10; x++)
                B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
            for (let x = 0; x < 10; x += 2) {
                const idx1 = (x + 8) % 10;
                const idx0 = (x + 2) % 10;
                const B0 = B[idx0];
                const B1 = B[idx0 + 1];
                const Th = rotlH(B0, B1, 1) ^ B[idx1];
                const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
                for (let y = 0; y < 50; y += 10) {
                    s[x + y] ^= Th;
                    s[x + y + 1] ^= Tl;
                }
            }
            let curH = s[2];
            let curL = s[3];
            for (let t = 0; t < 24; t++) {
                const shift = SHA3_ROTL[t];
                const Th = rotlH(curH, curL, shift);
                const Tl = rotlL(curH, curL, shift);
                const PI = SHA3_PI[t];
                curH = s[PI];
                curL = s[PI + 1];
                s[PI] = Th;
                s[PI + 1] = Tl;
            }
            for (let y = 0; y < 50; y += 10) {
                for (let x = 0; x < 10; x++)
                    B[x] = s[y + x];
                for (let x = 0; x < 10; x++)
                    s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
            }
            s[0] ^= SHA3_IOTA_H[round];
            s[1] ^= SHA3_IOTA_L[round];
        }
        clean(B);
    }
    class Keccak extends Hash {
        constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
            super();
            this.pos = 0;
            this.posOut = 0;
            this.finished = false;
            this.destroyed = false;
            this.enableXOF = false;
            this.blockLen = blockLen;
            this.suffix = suffix;
            this.outputLen = outputLen;
            this.enableXOF = enableXOF;
            this.rounds = rounds;
            anumber(outputLen);
            if (!(0 < blockLen && blockLen < 200))
                throw new Error('only keccak-f1600 function is supported');
            this.state = new Uint8Array(200);
            this.state32 = u32(this.state);
        }
        clone() {
            return this._cloneInto();
        }
        keccak() {
            swap32IfBE(this.state32);
            keccakP(this.state32, this.rounds);
            swap32IfBE(this.state32);
            this.posOut = 0;
            this.pos = 0;
        }
        update(data) {
            aexists(this);
            data = toBytes(data);
            abytes$1(data);
            const { blockLen, state } = this;
            const len = data.length;
            for (let pos = 0; pos < len;) {
                const take = Math.min(blockLen - this.pos, len - pos);
                for (let i = 0; i < take; i++)
                    state[this.pos++] ^= data[pos++];
                if (this.pos === blockLen)
                    this.keccak();
            }
            return this;
        }
        finish() {
            if (this.finished)
                return;
            this.finished = true;
            const { state, suffix, pos, blockLen } = this;
            state[pos] ^= suffix;
            if ((suffix & 0x80) !== 0 && pos === blockLen - 1)
                this.keccak();
            state[blockLen - 1] ^= 0x80;
            this.keccak();
        }
        writeInto(out) {
            aexists(this, false);
            abytes$1(out);
            this.finish();
            const bufferOut = this.state;
            const { blockLen } = this;
            for (let pos = 0, len = out.length; pos < len;) {
                if (this.posOut >= blockLen)
                    this.keccak();
                const take = Math.min(blockLen - this.posOut, len - pos);
                out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
                this.posOut += take;
                pos += take;
            }
            return out;
        }
        xofInto(out) {
            if (!this.enableXOF)
                throw new Error('XOF is not possible for this instance');
            return this.writeInto(out);
        }
        xof(bytes) {
            anumber(bytes);
            return this.xofInto(new Uint8Array(bytes));
        }
        digestInto(out) {
            aoutput(out, this);
            if (this.finished)
                throw new Error('digest() was already called');
            this.writeInto(out);
            this.destroy();
            return out;
        }
        digest() {
            return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
            this.destroyed = true;
            clean(this.state);
        }
        _cloneInto(to) {
            const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
            to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
            to.state32.set(this.state32);
            to.pos = this.pos;
            to.posOut = this.posOut;
            to.finished = this.finished;
            to.rounds = rounds;
            to.suffix = suffix;
            to.outputLen = outputLen;
            to.enableXOF = enableXOF;
            to.destroyed = this.destroyed;
            return to;
        }
    }
    const gen = (suffix, blockLen, outputLen) => createHasher$1(() => new Keccak(blockLen, suffix, outputLen));
    (() => gen(0x06, 144, 224 / 8))();
    (() => gen(0x06, 136, 256 / 8))();
    (() => gen(0x06, 104, 384 / 8))();
    (() => gen(0x06, 72, 512 / 8))();
    (() => gen(0x01, 144, 224 / 8))();
    const keccak_256 =  (() => gen(0x01, 136, 256 / 8))();
    (() => gen(0x01, 104, 384 / 8))();
    const keccak_512 =  (() => gen(0x01, 72, 512 / 8))();
    const genShake = (suffix, blockLen, outputLen) => createXOFer((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === undefined ? outputLen : opts.dkLen, true));
    (() => genShake(0x1f, 168, 128 / 8))();
    (() => genShake(0x1f, 136, 256 / 8))();

    const sha512 = sha512$1;

    const _0n = BigInt(0), _3n = BigInt(3);
    function toData(d) {
        if (typeof d === 'string')
            return utf8ToBytes(d);
        if (isBytes(d))
            return d;
        throw new Error('Wrong data');
    }
    function abytes(title, b, ...lengths) {
        if (!isBytes(b))
            throw new Error(`${title}: Uint8Array expected`);
        if (lengths.length && !lengths.includes(b.length))
            throw new Error(`${title}: Uint8Array expected of length ${lengths}, not of length=${b.length}`);
    }
    function checkU32(title, n) {
        if (!Number.isSafeInteger(n) || n < 0 || n > 4294967295)
            throw new Error(`${title}: wrong u32 integer: ${n}`);
        return n;
    }
    function cleanBytes(...list) {
        for (const t of list)
            t.fill(0);
    }
    const EMPTY = Uint8Array.of();
    const CURVE_ORDER = ed25519.CURVE.n;
    function parseScalar(title, bytes) {
        abytes(title, bytes, 32);
        const n = bytesToNumberLE(bytes);
        aInRange(title, n, _0n, CURVE_ORDER);
        return n;
    }
    const modN = (n) => mod(n, CURVE_ORDER);
    const STROBE_R = 166;
    const Flags = {
        I: 1,
        A: 1 << 1,
        C: 1 << 2,
        T: 1 << 3,
        M: 1 << 4,
        K: 1 << 5,
    };
    class Strobe128 {
        constructor(protocolLabel) {
            this.state = new Uint8Array(200);
            this.pos = 0;
            this.posBegin = 0;
            this.curFlags = 0;
            this.state.set([1, STROBE_R + 2, 1, 0, 1, 96], 0);
            this.state.set(utf8ToBytes('STROBEv1.0.2'), 6);
            this.state32 = u32(this.state);
            this.keccakF1600();
            this.metaAD(protocolLabel, false);
        }
        keccakF1600() {
            keccakP(this.state32);
        }
        runF() {
            this.state[this.pos] ^= this.posBegin;
            this.state[this.pos + 1] ^= 0x04;
            this.state[STROBE_R + 1] ^= 0x80;
            this.keccakF1600();
            this.pos = 0;
            this.posBegin = 0;
        }
        absorb(data) {
            for (let i = 0; i < data.length; i++) {
                this.state[this.pos++] ^= data[i];
                if (this.pos === STROBE_R)
                    this.runF();
            }
        }
        squeeze(len) {
            const data = new Uint8Array(len);
            for (let i = 0; i < data.length; i++) {
                data[i] = this.state[this.pos];
                this.state[this.pos++] = 0;
                if (this.pos === STROBE_R)
                    this.runF();
            }
            return data;
        }
        overwrite(data) {
            for (let i = 0; i < data.length; i++) {
                this.state[this.pos++] = data[i];
                if (this.pos === STROBE_R)
                    this.runF();
            }
        }
        beginOp(flags, more) {
            if (more) {
                if (this.curFlags !== flags) {
                    throw new Error(`Continued op with changed flags from ${this.curFlags.toString(2)} to ${flags.toString(2)}`);
                }
                return;
            }
            if ((flags & Flags.T) !== 0)
                throw new Error('T flag is not supported');
            const oldBegin = this.posBegin;
            this.posBegin = this.pos + 1;
            this.curFlags = flags;
            this.absorb(new Uint8Array([oldBegin, flags]));
            const forceF = (flags & (Flags.C | Flags.K)) !== 0;
            if (forceF && this.pos !== 0)
                this.runF();
        }
        metaAD(data, more) {
            this.beginOp(Flags.M | Flags.A, more);
            this.absorb(toData(data));
        }
        AD(data, more) {
            this.beginOp(Flags.A, more);
            this.absorb(toData(data));
        }
        PRF(len, more) {
            this.beginOp(Flags.I | Flags.A | Flags.C, more);
            return this.squeeze(len);
        }
        KEY(data, more) {
            this.beginOp(Flags.A | Flags.C, more);
            this.overwrite(toData(data));
        }
        clone() {
            const n = new Strobe128('0');
            n.pos = this.pos;
            n.posBegin = this.posBegin;
            n.state.set(this.state);
            n.curFlags = this.curFlags;
            return n;
        }
        clean() {
            this.state.fill(0);
            this.pos = 0;
            this.curFlags = 0;
            this.posBegin = 0;
        }
    }
    class Merlin {
        constructor(label) {
            this.strobe = new Strobe128('Merlin v1.0');
            this.appendMessage('dom-sep', label);
        }
        appendMessage(label, message) {
            this.strobe.metaAD(label, false);
            checkU32('Merlin.appendMessage', message.length);
            this.strobe.metaAD(numberToBytesLE(message.length, 4), true);
            this.strobe.AD(message, false);
        }
        challengeBytes(label, len) {
            this.strobe.metaAD(label, false);
            checkU32('Merlin.challengeBytes', len);
            this.strobe.metaAD(numberToBytesLE(len, 4), true);
            return this.strobe.PRF(len, false);
        }
        clean() {
            this.strobe.clean();
        }
    }
    class SigningContext extends Merlin {
        constructor(name, rng = randomBytes) {
            super(name);
            this.rng = rng;
        }
        label(label) {
            this.appendMessage('', label);
        }
        bytes(bytes) {
            this.appendMessage('sign-bytes', bytes);
            return this;
        }
        protoName(label) {
            this.appendMessage('proto-name', label);
        }
        commitPoint(label, point) {
            this.appendMessage(label, point.toRawBytes());
        }
        challengeScalar(label) {
            return modN(bytesToNumberLE(this.challengeBytes(label, 64)));
        }
        witnessScalar(label, nonceSeeds = []) {
            return modN(bytesToNumberLE(this.witnessBytes(label, 64, nonceSeeds)));
        }
        witnessBytes(label, len, nonceSeeds = []) {
            checkU32('SigningContext.witnessBytes', len);
            const strobeRng = this.strobe.clone();
            for (const ns of nonceSeeds) {
                strobeRng.metaAD(label, false);
                checkU32('SigningContext.witnessBytes nonce length', ns.length);
                strobeRng.metaAD(numberToBytesLE(ns.length, 4), true);
                strobeRng.KEY(ns, false);
            }
            const random = this.rng(32);
            strobeRng.metaAD('rng', false);
            strobeRng.KEY(random, false);
            strobeRng.metaAD(numberToBytesLE(len, 4), false);
            return strobeRng.PRF(len, false);
        }
    }
    const MASK = bitMask(256);
    const encodeScalar = (n) => numberToBytesLE((n << _3n) & MASK, 32);
    const decodeScalar = (n) => bytesToNumberLE(n) >> _3n;
    function getPublicKey(secretKey) {
        abytes('secretKey', secretKey, 64);
        const scalar = decodeScalar(secretKey.subarray(0, 32));
        return RistrettoPoint.BASE.multiply(scalar).toRawBytes();
    }
    function secretFromSeed(seed) {
        abytes('seed', seed, 32);
        const r = sha512(seed);
        r[0] &= 248;
        r[31] &= 63;
        r[31] |= 64;
        const key = encodeScalar(decodeScalar(r.subarray(0, 32)));
        const nonce = r.subarray(32, 64);
        const res = concatBytes(key, nonce);
        cleanBytes(key, nonce, r);
        return res;
    }
    const BIZINIKIWI_CONTEXT = utf8ToBytes('bizinikiwi');
    function sign(secretKey, message, rng = randomBytes) {
        abytes('message', message);
        abytes('secretKey', secretKey, 64);
        const t = new SigningContext('SigningContext', rng);
        t.label(BIZINIKIWI_CONTEXT);
        t.bytes(message);
        const keyScalar = decodeScalar(secretKey.subarray(0, 32));
        const nonce = secretKey.subarray(32, 64);
        const pubPoint = RistrettoPoint.fromHex(getPublicKey(secretKey));
        t.protoName('Schnorr-sig');
        t.commitPoint('sign:pk', pubPoint);
        const r = t.witnessScalar('signing', [nonce]);
        const R = RistrettoPoint.BASE.multiply(r);
        t.commitPoint('sign:R', R);
        const k = t.challengeScalar('sign:c');
        const s = modN(k * keyScalar + r);
        const res = concatBytes(R.toRawBytes(), numberToBytesLE(s, 32));
        res[63] |= 128;
        t.clean();
        return res;
    }
    function verify(message, signature, publicKey) {
        abytes('message', message);
        abytes('signature', signature, 64);
        abytes('publicKey', publicKey, 32);
        if ((signature[63] & 128) === 0)
            throw new Error('Schnorrkel marker missing');
        const sBytes = Uint8Array.from(signature.subarray(32, 64));
        sBytes[31] &= 127;
        const R = RistrettoPoint.fromHex(signature.subarray(0, 32));
        const s = bytesToNumberLE(sBytes);
        aInRange('s', s, _0n, CURVE_ORDER);
        const t = new SigningContext('SigningContext');
        t.label(BIZINIKIWI_CONTEXT);
        t.bytes(message);
        const pubPoint = RistrettoPoint.fromHex(publicKey);
        if (pubPoint.equals(RistrettoPoint.ZERO))
            return false;
        t.protoName('Schnorr-sig');
        t.commitPoint('sign:pk', pubPoint);
        t.commitPoint('sign:R', R);
        const k = t.challengeScalar('sign:c');
        const sP = RistrettoPoint.BASE.multiply(s);
        const RR = pubPoint.negate().multiply(k).add(sP);
        t.clean();
        cleanBytes(sBytes);
        return RR.equals(R);
    }
    function getSharedSecret(secretKey, publicKey) {
        abytes('secretKey', secretKey, 64);
        abytes('publicKey', publicKey, 32);
        const keyScalar = decodeScalar(secretKey.subarray(0, 32));
        const pubPoint = RistrettoPoint.fromHex(publicKey);
        if (pubPoint.equals(RistrettoPoint.ZERO))
            throw new Error('wrong public key (infinity)');
        return pubPoint.multiply(keyScalar).toRawBytes();
    }
    const HDKD = {
        secretSoft(secretKey, chainCode, rng = randomBytes) {
            abytes('secretKey', secretKey, 64);
            abytes('chainCode', chainCode, 32);
            const masterScalar = decodeScalar(secretKey.subarray(0, 32));
            const masterNonce = secretKey.subarray(32, 64);
            const pubPoint = RistrettoPoint.fromHex(getPublicKey(secretKey));
            const t = new SigningContext('SchnorrRistrettoHDKD', rng);
            t.bytes(EMPTY);
            t.appendMessage('chain-code', chainCode);
            t.commitPoint('public-key', pubPoint);
            const scalar = t.challengeScalar('HDKD-scalar');
            const hdkdChainCode = t.challengeBytes('HDKD-chaincode', 32);
            const nonceSeed = concatBytes(numberToBytesLE(masterScalar, 32), masterNonce);
            const nonce = t.witnessBytes('HDKD-nonce', 32, [masterNonce, nonceSeed]);
            const key = encodeScalar(modN(masterScalar + scalar));
            const res = concatBytes(key, nonce);
            cleanBytes(key, nonce, nonceSeed, hdkdChainCode);
            t.clean();
            return res;
        },
        publicSoft(publicKey, chainCode) {
            abytes('publicKey', publicKey, 32);
            abytes('chainCode', chainCode, 32);
            const pubPoint = RistrettoPoint.fromHex(publicKey);
            const t = new SigningContext('SchnorrRistrettoHDKD');
            t.bytes(EMPTY);
            t.appendMessage('chain-code', chainCode);
            t.commitPoint('public-key', pubPoint);
            const scalar = t.challengeScalar('HDKD-scalar');
            t.challengeBytes('HDKD-chaincode', 32);
            t.clean();
            return pubPoint.add(RistrettoPoint.BASE.multiply(scalar)).toRawBytes();
        },
        secretHard(secretKey, chainCode) {
            abytes('secretKey', secretKey, 64);
            abytes('chainCode', chainCode, 32);
            const key = numberToBytesLE(decodeScalar(secretKey.subarray(0, 32)), 32);
            const t = new SigningContext('SchnorrRistrettoHDKD');
            t.bytes(EMPTY);
            t.appendMessage('chain-code', chainCode);
            t.appendMessage('secret-key', key);
            const msk = t.challengeBytes('HDKD-hard', 32);
            const hdkdChainCode = t.challengeBytes('HDKD-chaincode', 32);
            t.clean();
            const res = secretFromSeed(msk);
            cleanBytes(key, msk, hdkdChainCode);
            t.clean();
            return res;
        },
    };
    const dleq = {
        proove(keyScalar, nonce, pubPoint, t, input, output) {
            t.protoName('DLEQProof');
            t.commitPoint('vrf:h', input);
            const r = t.witnessScalar(`proving${'\0'}0`, [nonce]);
            const R = RistrettoPoint.BASE.multiply(r);
            t.commitPoint('vrf:R=g^r', R);
            const Hr = input.multiply(r);
            t.commitPoint('vrf:h^r', Hr);
            t.commitPoint('vrf:pk', pubPoint);
            t.commitPoint('vrf:h^sk', output);
            const c = t.challengeScalar('prove');
            const s = modN(r - c * keyScalar);
            return { proof: { c, s }, proofBatchable: { R, Hr, s } };
        },
        verify(pubPoint, t, input, output, proof) {
            if (pubPoint.equals(RistrettoPoint.ZERO))
                return false;
            t.protoName('DLEQProof');
            t.commitPoint('vrf:h', input);
            const R = pubPoint.multiply(proof.c).add(RistrettoPoint.BASE.multiply(proof.s));
            t.commitPoint('vrf:R=g^r', R);
            const Hr = output.multiply(proof.c).add(input.multiply(proof.s));
            t.commitPoint('vrf:h^r', Hr);
            t.commitPoint('vrf:pk', pubPoint);
            t.commitPoint('vrf:h^sk', output);
            const realC = t.challengeScalar('prove');
            if (proof.c === realC)
                return { R, Hr, s: proof.s };
            return false;
        },
    };
    function initVRF(ctx, msg, extra, pubPoint, rng = randomBytes) {
        const t = new SigningContext('SigningContext', rng);
        t.label(ctx);
        t.bytes(msg);
        t.commitPoint('vrf-nm-pk', pubPoint);
        const hash = t.challengeBytes('VRFHash', 64);
        const input = RistrettoPoint.hashToCurve(hash);
        const transcript = new SigningContext('VRF', rng);
        if (extra.length)
            transcript.label(extra);
        t.clean();
        cleanBytes(hash);
        return { input, t: transcript };
    }
    const vrf = {
        sign(msg, secretKey, ctx = EMPTY, extra = EMPTY, rng = randomBytes) {
            abytes('msg', msg);
            abytes('secretKey', secretKey, 64);
            abytes('ctx', ctx);
            abytes('extra', extra);
            const keyScalar = decodeScalar(secretKey.subarray(0, 32));
            const nonce = secretKey.subarray(32, 64);
            const pubPoint = RistrettoPoint.fromHex(getPublicKey(secretKey));
            const { input, t } = initVRF(ctx, msg, extra, pubPoint, rng);
            const output = input.multiply(keyScalar);
            const p = { output };
            const { proof } = dleq.proove(keyScalar, nonce, pubPoint, t, input, output);
            const cBytes = numberToBytesLE(proof.c, 32);
            const sBytes = numberToBytesLE(proof.s, 32);
            const res = concatBytes(p.output.toRawBytes(), cBytes, sBytes);
            cleanBytes(nonce, cBytes, sBytes);
            return res;
        },
        verify(msg, signature, publicKey, ctx = EMPTY, extra = EMPTY, rng = randomBytes) {
            abytes('msg', msg);
            abytes('signature', signature, 96);
            abytes('pubkey', publicKey, 32);
            abytes('ctx', ctx);
            abytes('extra', extra);
            const pubPoint = RistrettoPoint.fromHex(publicKey);
            if (pubPoint.equals(RistrettoPoint.ZERO))
                return false;
            const proof = {
                c: parseScalar('signature.c', signature.subarray(32, 64)),
                s: parseScalar('signature.s', signature.subarray(64, 96)),
            };
            const { input, t } = initVRF(ctx, msg, extra, pubPoint, rng);
            const output = RistrettoPoint.fromHex(signature.subarray(0, 32));
            if (output.equals(RistrettoPoint.ZERO))
                throw new Error('vrf.verify: wrong output point (identity)');
            const proofBatchable = dleq.verify(pubPoint, t, input, output, proof);
            return proofBatchable === false ? false : true;
        },
    };

    function createDeriveFn(derive) {
        return (keypair, chainCode) => {
            if (!util.isU8a(chainCode) || chainCode.length !== 32) {
                throw new Error('Invalid chainCode passed to derive');
            }
            const secretKey = derive(keypair.secretKey, chainCode);
            const publicKey = getPublicKey(secretKey);
            return { publicKey, secretKey };
        };
    }

    const sr25519DeriveHard =  createDeriveFn(HDKD.secretHard);

    const sr25519DeriveSoft =  createDeriveFn(HDKD.secretSoft);

    function keyHdkdSr25519(keypair, { chainCode, isSoft }) {
        return isSoft
            ? sr25519DeriveSoft(keypair, chainCode)
            : sr25519DeriveHard(keypair, chainCode);
    }

    const generators = {
        ecdsa: keyHdkdEcdsa,
        ed25519: keyHdkdEd25519,
        ethereum: keyHdkdEcdsa,
        sr25519: keyHdkdSr25519
    };
    function keyFromPath(pair, path, type) {
        const keyHdkd = generators[type];
        let result = pair;
        for (const junction of path) {
            result = keyHdkd(result, junction);
        }
        return result;
    }

    function sr25519Agreement(secretKey, publicKey) {
        const secretKeyU8a = util.u8aToU8a(secretKey);
        const publicKeyU8a = util.u8aToU8a(publicKey);
        if (publicKeyU8a.length !== 32) {
            throw new Error(`Invalid publicKey, received ${publicKeyU8a.length} bytes, expected 32`);
        }
        else if (secretKeyU8a.length !== 64) {
            throw new Error(`Invalid secretKey, received ${secretKeyU8a.length} bytes, expected 64`);
        }
        return getSharedSecret(secretKeyU8a, publicKeyU8a);
    }

    function sr25519DerivePublic(publicKey, chainCode) {
        const publicKeyU8a = util.u8aToU8a(publicKey);
        if (!util.isU8a(chainCode) || chainCode.length !== 32) {
            throw new Error('Invalid chainCode passed to derive');
        }
        else if (publicKeyU8a.length !== 32) {
            throw new Error(`Invalid publicKey, received ${publicKeyU8a.length} bytes, expected 32`);
        }
        return HDKD.publicSoft(publicKeyU8a, chainCode);
    }

    function sr25519PairFromSeed(seed) {
        const seedU8a = util.u8aToU8a(seed);
        if (seedU8a.length !== 32) {
            throw new Error(`Expected a seed matching 32 bytes, found ${seedU8a.length}`);
        }
        const sec = secretFromSeed(seedU8a);
        const pub = getPublicKey(sec);
        return {
            publicKey: pub,
            secretKey: sec
        };
    }

    function sr25519Sign(message, { publicKey, secretKey }) {
        if (publicKey?.length !== 32) {
            throw new Error('Expected a valid publicKey, 32-bytes');
        }
        else if (secretKey?.length !== 64) {
            throw new Error('Expected a valid secretKey, 64-bytes');
        }
        return sign(secretKey, util.u8aToU8a(message));
    }

    function sr25519Verify(message, signature, publicKey) {
        const publicKeyU8a = util.u8aToU8a(publicKey);
        const signatureU8a = util.u8aToU8a(signature);
        if (publicKeyU8a.length !== 32) {
            throw new Error(`Invalid publicKey, received ${publicKeyU8a.length} bytes, expected 32`);
        }
        else if (signatureU8a.length !== 64) {
            throw new Error(`Invalid signature, received ${signatureU8a.length} bytes, expected 64`);
        }
        return verify(util.u8aToU8a(message), signatureU8a, publicKeyU8a);
    }

    const EMPTY_U8A$1 = new Uint8Array();
    function sr25519VrfSign(message, { secretKey }, context = EMPTY_U8A$1, extra = EMPTY_U8A$1) {
        if (secretKey?.length !== 64) {
            throw new Error('Invalid secretKey, expected 64-bytes');
        }
        return vrf.sign(util.u8aToU8a(message), secretKey, util.u8aToU8a(context), util.u8aToU8a(extra), randomBytes);
    }

    const EMPTY_U8A = new Uint8Array();
    function sr25519VrfVerify(message, signOutput, publicKey, context = EMPTY_U8A, extra = EMPTY_U8A) {
        const publicKeyU8a = util.u8aToU8a(publicKey);
        const proofU8a = util.u8aToU8a(signOutput);
        if (publicKeyU8a.length !== 32) {
            throw new Error('Invalid publicKey, expected 32-bytes');
        }
        else if (proofU8a.length !== 96) {
            throw new Error('Invalid vrfSign output, expected 96 bytes');
        }
        return vrf.verify(util.u8aToU8a(message), proofU8a, publicKeyU8a, util.u8aToU8a(context), util.u8aToU8a(extra));
    }

    function encodeAddress(key, ss58Format = defaults.prefix) {
        const u8a = decodeAddress(key);
        if ((ss58Format < 0) || (ss58Format > 16383 && !ss58Exceptions.includes(ss58Format)) || [46, 47].includes(ss58Format)) {
            throw new Error('Out of range ss58Format specified');
        }
        else if (!defaults.allowedDecodedLengths.includes(u8a.length)) {
            throw new Error(`Expected a valid key to convert, with length ${defaults.allowedDecodedLengths.join(', ')}`);
        }
        const input = util.u8aConcat(ss58Format < 64
            ? [ss58Format]
            : [
                ((ss58Format & 0b0000_0000_1111_1100) >> 2) | 0b0100_0000,
                (ss58Format >> 8) | ((ss58Format & 0b0000_0000_0000_0011) << 6)
            ], u8a);
        return base58Encode(util.u8aConcat(input, sshash(input).subarray(0, [32, 33].includes(u8a.length) ? 2 : 1)));
    }
    const ss58Exceptions = [29972];

    function filterHard({ isHard }) {
        return isHard;
    }
    function deriveAddress(who, suri, ss58Format) {
        const { path } = keyExtractPath(suri);
        if (!path.length || path.every(filterHard)) {
            throw new Error('Expected suri to contain a combination of non-hard paths');
        }
        let publicKey = decodeAddress(who);
        for (const { chainCode } of path) {
            publicKey = sr25519DerivePublic(publicKey, chainCode);
        }
        return encodeAddress(publicKey, ss58Format);
    }

    const PREFIX$1 = util.stringToU8a('modlpy/utilisuba');
    function createKeyDerived(who, index) {
        return blake2AsU8a(util.u8aConcat(PREFIX$1, decodeAddress(who), util.bnToU8a(index, BN_LE_16_OPTS)));
    }

    function encodeDerivedAddress(who, index, ss58Format) {
        return encodeAddress(createKeyDerived(decodeAddress(who), index), ss58Format);
    }

    function addressToU8a(who) {
        return decodeAddress(who);
    }

    const PREFIX = util.stringToU8a('modlpy/utilisuba');
    function createKeyMulti(who, threshold) {
        return blake2AsU8a(util.u8aConcat(PREFIX, util.compactToU8a(who.length), ...util.u8aSorted(who.map(addressToU8a)), util.bnToU8a(threshold, BN_LE_16_OPTS)));
    }

    function encodeMultiAddress(who, threshold, ss58Format) {
        return encodeAddress(createKeyMulti(who, threshold), ss58Format);
    }

    function addressEq(a, b) {
        return util.u8aEq(decodeAddress(a), decodeAddress(b));
    }

    const keccakAsU8a =  createDualHasher({ 256: keccak256, 512: keccak512 }, { 256: keccak_256, 512: keccak_512 });
    const keccak256AsU8a =  createBitHasher(256, keccakAsU8a);
    const keccak512AsU8a =  createBitHasher(512, keccakAsU8a);
    const keccakAsHex =  createAsHex(keccakAsU8a);

    function hasher(hashType, data, onlyJs) {
        return hashType === 'keccak'
            ? keccakAsU8a(data, undefined, onlyJs)
            : blake2AsU8a(data, undefined, undefined, onlyJs);
    }

    function evmToAddress(evmAddress, ss58Format, hashType = 'blake2') {
        const message = util.u8aConcat('evm:', evmAddress);
        if (message.length !== 24) {
            throw new Error(`Converting ${evmAddress}: Invalid evm address length`);
        }
        return encodeAddress(hasher(hashType, message), ss58Format);
    }

    function validateAddress(encoded, ignoreChecksum, ss58Format) {
        return !!decodeAddress(encoded, ignoreChecksum, ss58Format);
    }

    function isAddress(address, ignoreChecksum, ss58Format) {
        try {
            return validateAddress(address, ignoreChecksum, ss58Format);
        }
        catch {
            return false;
        }
    }

    function sortAddresses(addresses, ss58Format) {
        const u8aToAddress = (u8a) => encodeAddress(u8a, ss58Format);
        return util.u8aSorted(addresses.map(addressToU8a)).map(u8aToAddress);
    }

    const l = util.logger('setSS58Format');
    function setSS58Format(prefix) {
        l.warn('Global setting of the ss58Format is deprecated and not recommended. Set format on the keyring (if used) or as part of the address encode function');
        defaults.prefix = prefix;
    }

    const chars = 'abcdefghijklmnopqrstuvwxyz234567';
    const config$1 = {
        chars,
        coder: utils.chain(
        utils.radix2(5), utils.alphabet(chars), {
            decode: (input) => input.split(''),
            encode: (input) => input.join('')
        }),
        ipfs: 'b',
        type: 'base32'
    };
    const base32Validate =  createValidate(config$1);
    const isBase32 =  createIs(base32Validate);
    const base32Decode =  createDecode(config$1, base32Validate);
    const base32Encode =  createEncode(config$1);

    const config = {
        chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        coder: base64,
        type: 'base64',
        withPadding: true
    };
    const base64Validate =  createValidate(config);
    const isBase64 =  createIs(base64Validate);
    const base64Decode =  createDecode(config, base64Validate);
    const base64Encode =  createEncode(config);

    function base64Pad(value) {
        return value.padEnd(value.length + (value.length % 4), '=');
    }

    function base64Trim(value) {
        while (value.length && value.endsWith('=')) {
            value = value.slice(0, -1);
        }
        return value;
    }

    function secp256k1Compress(publicKey, onlyJs) {
        if (![33, 65].includes(publicKey.length)) {
            throw new Error(`Invalid publicKey provided, received ${publicKey.length} bytes input`);
        }
        if (publicKey.length === 33) {
            return publicKey;
        }
        return !util.hasBigInt || (!onlyJs && isReady())
            ? secp256k1Compress$1(publicKey)
            : secp256k1.Point.fromHex(publicKey).toBytes(true);
    }

    function secp256k1Expand(publicKey, onlyJs) {
        if (![33, 65].includes(publicKey.length)) {
            throw new Error(`Invalid publicKey provided, received ${publicKey.length} bytes input`);
        }
        if (publicKey.length === 65) {
            return publicKey.subarray(1);
        }
        if (!util.hasBigInt || (!onlyJs && isReady())) {
            return secp256k1Expand$1(publicKey).subarray(1);
        }
        const { x: px, y: py } = secp256k1.Point.fromHex(publicKey).toAffine();
        return util.u8aConcat(util.bnToU8a(px, BN_BE_256_OPTS), util.bnToU8a(py, BN_BE_256_OPTS));
    }

    function secp256k1Recover(msgHash, signature, recovery, hashType = 'blake2', onlyJs) {
        const sig = util.u8aToU8a(signature).subarray(0, 64);
        const msg = util.u8aToU8a(msgHash);
        const publicKey = !util.hasBigInt || (!onlyJs && isReady())
            ? secp256k1Recover$1(msg, sig, recovery)
            : secp256k1.Signature
                .fromBytes(sig, 'compact')
                .addRecoveryBit(recovery)
                .recoverPublicKey(msg)
                .toBytes();
        if (!publicKey) {
            throw new Error('Unable to recover publicKey from signature');
        }
        return hashType === 'keccak'
            ? secp256k1Expand(publicKey, onlyJs)
            : secp256k1Compress(publicKey, onlyJs);
    }

    function secp256k1Sign(message, { secretKey }, hashType = 'blake2', onlyJs) {
        if (secretKey?.length !== 32) {
            throw new Error('Expected valid secp256k1 secretKey, 32-bytes');
        }
        const data = hasher(hashType, message, onlyJs);
        if (!util.hasBigInt || (!onlyJs && isReady())) {
            return secp256k1Sign$1(data, secretKey);
        }
        const signature = secp256k1.sign(data, secretKey, { lowS: true });
        return util.u8aConcat(util.bnToU8a(signature.r, BN_BE_256_OPTS), util.bnToU8a(signature.s, BN_BE_256_OPTS), new Uint8Array([signature.recovery || 0]));
    }

    const N = 'ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141'.replace(/ /g, '');
    const N_BI = BigInt$1(`0x${N}`);
    const N_BN = new util.BN(N, 'hex');
    function addBi(seckey, tweak) {
        let res = util.u8aToBigInt(tweak, BN_BE_OPTS);
        if (res >= N_BI) {
            throw new Error('Tweak parameter is out of range');
        }
        res += util.u8aToBigInt(seckey, BN_BE_OPTS);
        if (res >= N_BI) {
            res -= N_BI;
        }
        if (res === util._0n) {
            throw new Error('Invalid resulting private key');
        }
        return util.nToU8a(res, BN_BE_256_OPTS);
    }
    function addBn(seckey, tweak) {
        const res = new util.BN(tweak);
        if (res.cmp(N_BN) >= 0) {
            throw new Error('Tweak parameter is out of range');
        }
        res.iadd(new util.BN(seckey));
        if (res.cmp(N_BN) >= 0) {
            res.isub(N_BN);
        }
        if (res.isZero()) {
            throw new Error('Invalid resulting private key');
        }
        return util.bnToU8a(res, BN_BE_256_OPTS);
    }
    function secp256k1PrivateKeyTweakAdd(seckey, tweak, onlyBn) {
        if (!util.isU8a(seckey) || seckey.length !== 32) {
            throw new Error('Expected seckey to be an Uint8Array with length 32');
        }
        else if (!util.isU8a(tweak) || tweak.length !== 32) {
            throw new Error('Expected tweak to be an Uint8Array with length 32');
        }
        return !util.hasBigInt || onlyBn
            ? addBn(seckey, tweak)
            : addBi(seckey, tweak);
    }

    function secp256k1Verify(msgHash, signature, address, hashType = 'blake2', onlyJs) {
        const sig = util.u8aToU8a(signature);
        if (sig.length !== 65) {
            throw new Error(`Expected signature with 65 bytes, ${sig.length} found instead`);
        }
        const publicKey = secp256k1Recover(hasher(hashType, msgHash), sig, sig[64], hashType, onlyJs);
        const signerAddr = hasher(hashType, publicKey, onlyJs);
        const inputAddr = util.u8aToU8a(address);
        return util.u8aEq(publicKey, inputAddr) || (hashType === 'keccak'
            ? util.u8aEq(signerAddr.slice(-20), inputAddr.slice(-20))
            : util.u8aEq(signerAddr, inputAddr));
    }

    function getH160(u8a) {
        if ([33, 65].includes(u8a.length)) {
            u8a = keccakAsU8a(secp256k1Expand(u8a));
        }
        return u8a.slice(-20);
    }
    function ethereumEncode(addressOrPublic) {
        if (!addressOrPublic) {
            return '0x';
        }
        const u8aAddress = util.u8aToU8a(addressOrPublic);
        if (![20, 32, 33, 65].includes(u8aAddress.length)) {
            throw new Error(`Invalid address or publicKey provided, received ${u8aAddress.length} bytes input`);
        }
        const address = util.u8aToHex(getH160(u8aAddress), -1, false);
        const hash = util.u8aToHex(keccakAsU8a(address), -1, false);
        let result = '';
        for (let i = 0; i < 40; i++) {
            result = `${result}${parseInt(hash[i], 16) > 7 ? address[i].toUpperCase() : address[i]}`;
        }
        return `0x${result}`;
    }

    function isInvalidChar(char, byte) {
        return char !== (byte > 7
            ? char.toUpperCase()
            : char.toLowerCase());
    }
    function isEthereumChecksum(_address) {
        const address = _address.replace('0x', '');
        const hash = util.u8aToHex(keccakAsU8a(address.toLowerCase()), -1, false);
        for (let i = 0; i < 40; i++) {
            if (isInvalidChar(address[i], parseInt(hash[i], 16))) {
                return false;
            }
        }
        return true;
    }

    function isEthereumAddress(address) {
        if (!address || address.length !== 42 || !util.isHex(address)) {
            return false;
        }
        else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
            return true;
        }
        return isEthereumChecksum(address);
    }

    const JS_HASH = {
        256: sha256,
        512: sha512$1
    };
    const WA_MHAC = {
        256: hmacSha256,
        512: hmacSha512
    };
    function createSha(bitLength) {
        return (key, data, onlyJs) => hmacShaAsU8a(key, data, bitLength, onlyJs);
    }
    function hmacShaAsU8a(key, data, bitLength = 256, onlyJs) {
        const u8aKey = util.u8aToU8a(key);
        return !util.hasBigInt || (!onlyJs && isReady())
            ? WA_MHAC[bitLength](u8aKey, data)
            : hmac(JS_HASH[bitLength], u8aKey, data);
    }
    const hmacSha256AsU8a =  createSha(256);
    const hmacSha512AsU8a =  createSha(512);

    const HARDENED = 0x80000000;
    function hdValidatePath(path) {
        if (!path.startsWith('m/')) {
            return false;
        }
        const parts = path.split('/').slice(1);
        for (const p of parts) {
            const n = /^\d+'?$/.test(p)
                ? parseInt(p.replace(/'$/, ''), 10)
                : Number.NaN;
            if (isNaN(n) || (n >= HARDENED) || (n < 0)) {
                return false;
            }
        }
        return true;
    }

    const MASTER_SECRET = util.stringToU8a('Bitcoin seed');
    function createCoded(secretKey, chainCode) {
        return {
            chainCode,
            publicKey: secp256k1PairFromSeed(secretKey).publicKey,
            secretKey
        };
    }
    function deriveChild(hd, index) {
        const indexBuffer = util.bnToU8a(index, BN_BE_32_OPTS);
        const data = index >= HARDENED
            ? util.u8aConcat(new Uint8Array(1), hd.secretKey, indexBuffer)
            : util.u8aConcat(hd.publicKey, indexBuffer);
        try {
            const I = hmacShaAsU8a(hd.chainCode, data, 512);
            return createCoded(secp256k1PrivateKeyTweakAdd(hd.secretKey, I.slice(0, 32)), I.slice(32));
        }
        catch {
            return deriveChild(hd, index + 1);
        }
    }
    function hdEthereum(seed, path = '') {
        const I = hmacShaAsU8a(MASTER_SECRET, seed, 512);
        let hd = createCoded(I.slice(0, 32), I.slice(32));
        if (!path || path === 'm' || path === 'M' || path === "m'" || path === "M'") {
            return hd;
        }
        if (!hdValidatePath(path)) {
            throw new Error('Invalid derivation path');
        }
        const parts = path.split('/').slice(1);
        for (const p of parts) {
            hd = deriveChild(hd, parseInt(p, 10) + ((p.length > 1) && p.endsWith("'")
                ? HARDENED
                : 0));
        }
        return hd;
    }

    function pbkdf2Init(hash, _password, _salt, _opts) {
        ahash(hash);
        const opts = checkOpts({ dkLen: 32, asyncTick: 10 }, _opts);
        const { c, dkLen, asyncTick } = opts;
        anumber(c);
        anumber(dkLen);
        anumber(asyncTick);
        if (c < 1)
            throw new Error('iterations (c) should be >= 1');
        const password = kdfInputToBytes(_password);
        const salt = kdfInputToBytes(_salt);
        const DK = new Uint8Array(dkLen);
        const PRF = hmac.create(hash, password);
        const PRFSalt = PRF._cloneInto().update(salt);
        return { c, dkLen, asyncTick, DK, PRF, PRFSalt };
    }
    function pbkdf2Output(PRF, PRFSalt, DK, prfW, u) {
        PRF.destroy();
        PRFSalt.destroy();
        if (prfW)
            prfW.destroy();
        clean(u);
        return DK;
    }
    function pbkdf2(hash, password, salt, opts) {
        const { c, dkLen, DK, PRF, PRFSalt } = pbkdf2Init(hash, password, salt, opts);
        let prfW;
        const arr = new Uint8Array(4);
        const view = createView(arr);
        const u = new Uint8Array(PRF.outputLen);
        for (let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen) {
            const Ti = DK.subarray(pos, pos + PRF.outputLen);
            view.setInt32(0, ti, false);
            (prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u);
            Ti.set(u.subarray(0, Ti.length));
            for (let ui = 1; ui < c; ui++) {
                PRF._cloneInto(prfW).update(u).digestInto(u);
                for (let i = 0; i < Ti.length; i++)
                    Ti[i] ^= u[i];
            }
        }
        return pbkdf2Output(PRF, PRFSalt, DK, prfW, u);
    }

    function pbkdf2Encode(passphrase, salt = randomAsU8a(), rounds = 2048, onlyJs) {
        const u8aPass = util.u8aToU8a(passphrase);
        const u8aSalt = util.u8aToU8a(salt);
        return {
            password: !util.hasBigInt || (!onlyJs && isReady())
                ? pbkdf2$1(u8aPass, u8aSalt, rounds)
                : pbkdf2(sha512$1, u8aPass, u8aSalt, { c: rounds, dkLen: 64 }),
            rounds,
            salt
        };
    }

    const shaAsU8a =  createDualHasher({ 256: sha256$1, 512: sha512$2 }, { 256: sha256, 512: sha512$1 });
    const sha256AsU8a =  createBitHasher(256, shaAsU8a);
    const sha512AsU8a =  createBitHasher(512, shaAsU8a);

    const DEFAULT_WORDLIST = 'abandon|ability|able|about|above|absent|absorb|abstract|absurd|abuse|access|accident|account|accuse|achieve|acid|acoustic|acquire|across|act|action|actor|actress|actual|adapt|add|addict|address|adjust|admit|adult|advance|advice|aerobic|affair|afford|afraid|again|age|agent|agree|ahead|aim|air|airport|aisle|alarm|album|alcohol|alert|alien|all|alley|allow|almost|alone|alpha|already|also|alter|always|amateur|amazing|among|amount|amused|analyst|anchor|ancient|anger|angle|angry|animal|ankle|announce|annual|another|answer|antenna|antique|anxiety|any|apart|apology|appear|apple|approve|april|arch|arctic|area|arena|argue|arm|armed|armor|army|around|arrange|arrest|arrive|arrow|art|artefact|artist|artwork|ask|aspect|assault|asset|assist|assume|asthma|athlete|atom|attack|attend|attitude|attract|auction|audit|august|aunt|author|auto|autumn|average|avocado|avoid|awake|aware|away|awesome|awful|awkward|axis|baby|bachelor|bacon|badge|bag|balance|balcony|ball|bamboo|banana|banner|bar|barely|bargain|barrel|base|basic|basket|battle|beach|bean|beauty|because|become|beef|before|begin|behave|behind|believe|below|belt|bench|benefit|best|betray|better|between|beyond|bicycle|bid|bike|bind|biology|bird|birth|bitter|black|blade|blame|blanket|blast|bleak|bless|blind|blood|blossom|blouse|blue|blur|blush|board|boat|body|boil|bomb|bone|bonus|book|boost|border|boring|borrow|boss|bottom|bounce|box|boy|bracket|brain|brand|brass|brave|bread|breeze|brick|bridge|brief|bright|bring|brisk|broccoli|broken|bronze|broom|brother|brown|brush|bubble|buddy|budget|buffalo|build|bulb|bulk|bullet|bundle|bunker|burden|burger|burst|bus|business|busy|butter|buyer|buzz|cabbage|cabin|cable|cactus|cage|cake|call|calm|camera|camp|can|canal|cancel|candy|cannon|canoe|canvas|canyon|capable|capital|captain|car|carbon|card|cargo|carpet|carry|cart|case|cash|casino|castle|casual|cat|catalog|catch|category|cattle|caught|cause|caution|cave|ceiling|celery|cement|census|century|cereal|certain|chair|chalk|champion|change|chaos|chapter|charge|chase|chat|cheap|check|cheese|chef|cherry|chest|chicken|chief|child|chimney|choice|choose|chronic|chuckle|chunk|churn|cigar|cinnamon|circle|citizen|city|civil|claim|clap|clarify|claw|clay|clean|clerk|clever|click|client|cliff|climb|clinic|clip|clock|clog|close|cloth|cloud|clown|club|clump|cluster|clutch|coach|coast|coconut|code|coffee|coil|coin|collect|color|column|combine|come|comfort|comic|common|company|concert|conduct|confirm|congress|connect|consider|control|convince|cook|cool|copper|copy|coral|core|corn|correct|cost|cotton|couch|country|couple|course|cousin|cover|coyote|crack|cradle|craft|cram|crane|crash|crater|crawl|crazy|cream|credit|creek|crew|cricket|crime|crisp|critic|crop|cross|crouch|crowd|crucial|cruel|cruise|crumble|crunch|crush|cry|crystal|cube|culture|cup|cupboard|curious|current|curtain|curve|cushion|custom|cute|cycle|dad|damage|damp|dance|danger|daring|dash|daughter|dawn|day|deal|debate|debris|decade|december|decide|decline|decorate|decrease|deer|defense|define|defy|degree|delay|deliver|demand|demise|denial|dentist|deny|depart|depend|deposit|depth|deputy|derive|describe|desert|design|desk|despair|destroy|detail|detect|develop|device|devote|diagram|dial|diamond|diary|dice|diesel|diet|differ|digital|dignity|dilemma|dinner|dinosaur|direct|dirt|disagree|discover|disease|dish|dismiss|disorder|display|distance|divert|divide|divorce|dizzy|doctor|document|dog|doll|dolphin|domain|donate|donkey|donor|door|dose|double|dove|draft|dragon|drama|drastic|draw|dream|dress|drift|drill|drink|drip|drive|drop|drum|dry|duck|dumb|dune|during|dust|dutch|duty|dwarf|dynamic|eager|eagle|early|earn|earth|easily|east|easy|echo|ecology|economy|edge|edit|educate|effort|egg|eight|either|elbow|elder|electric|elegant|element|elephant|elevator|elite|else|embark|embody|embrace|emerge|emotion|employ|empower|empty|enable|enact|end|endless|endorse|enemy|energy|enforce|engage|engine|enhance|enjoy|enlist|enough|enrich|enroll|ensure|enter|entire|entry|envelope|episode|equal|equip|era|erase|erode|erosion|error|erupt|escape|essay|essence|estate|eternal|ethics|evidence|evil|evoke|evolve|exact|example|excess|exchange|excite|exclude|excuse|execute|exercise|exhaust|exhibit|exile|exist|exit|exotic|expand|expect|expire|explain|expose|express|extend|extra|eye|eyebrow|fabric|face|faculty|fade|faint|faith|fall|false|fame|family|famous|fan|fancy|fantasy|farm|fashion|fat|fatal|father|fatigue|fault|favorite|feature|february|federal|fee|feed|feel|female|fence|festival|fetch|fever|few|fiber|fiction|field|figure|file|film|filter|final|find|fine|finger|finish|fire|firm|first|fiscal|fish|fit|fitness|fix|flag|flame|flash|flat|flavor|flee|flight|flip|float|flock|floor|flower|fluid|flush|fly|foam|focus|fog|foil|fold|follow|food|foot|force|forest|forget|fork|fortune|forum|forward|fossil|foster|found|fox|fragile|frame|frequent|fresh|friend|fringe|frog|front|frost|frown|frozen|fruit|fuel|fun|funny|furnace|fury|future|gadget|gain|galaxy|gallery|game|gap|garage|garbage|garden|garlic|garment|gas|gasp|gate|gather|gauge|gaze|general|genius|genre|gentle|genuine|gesture|ghost|giant|gift|giggle|ginger|giraffe|girl|give|glad|glance|glare|glass|glide|glimpse|globe|gloom|glory|glove|glow|glue|goat|goddess|gold|good|goose|gorilla|gospel|gossip|govern|gown|grab|grace|grain|grant|grape|grass|gravity|great|green|grid|grief|grit|grocery|group|grow|grunt|guard|guess|guide|guilt|guitar|gun|gym|habit|hair|half|hammer|hamster|hand|happy|harbor|hard|harsh|harvest|hat|have|hawk|hazard|head|health|heart|heavy|hedgehog|height|hello|helmet|help|hen|hero|hidden|high|hill|hint|hip|hire|history|hobby|hockey|hold|hole|holiday|hollow|home|honey|hood|hope|horn|horror|horse|hospital|host|hotel|hour|hover|hub|huge|human|humble|humor|hundred|hungry|hunt|hurdle|hurry|hurt|husband|hybrid|ice|icon|idea|identify|idle|ignore|ill|illegal|illness|image|imitate|immense|immune|impact|impose|improve|impulse|inch|include|income|increase|index|indicate|indoor|industry|infant|inflict|inform|inhale|inherit|initial|inject|injury|inmate|inner|innocent|input|inquiry|insane|insect|inside|inspire|install|intact|interest|into|invest|invite|involve|iron|island|isolate|issue|item|ivory|jacket|jaguar|jar|jazz|jealous|jeans|jelly|jewel|job|join|joke|journey|joy|judge|juice|jump|jungle|junior|junk|just|kangaroo|keen|keep|ketchup|key|kick|kid|kidney|kind|kingdom|kiss|kit|kitchen|kite|kitten|kiwi|knee|knife|knock|know|lab|label|labor|ladder|lady|lake|lamp|language|laptop|large|later|latin|laugh|laundry|lava|law|lawn|lawsuit|layer|lazy|leader|leaf|learn|leave|lecture|left|leg|legal|legend|leisure|lemon|lend|length|lens|leopard|lesson|letter|level|liar|liberty|library|license|life|lift|light|like|limb|limit|link|lion|liquid|list|little|live|lizard|load|loan|lobster|local|lock|logic|lonely|long|loop|lottery|loud|lounge|love|loyal|lucky|luggage|lumber|lunar|lunch|luxury|lyrics|machine|mad|magic|magnet|maid|mail|main|major|make|mammal|man|manage|mandate|mango|mansion|manual|maple|marble|march|margin|marine|market|marriage|mask|mass|master|match|material|math|matrix|matter|maximum|maze|meadow|mean|measure|meat|mechanic|medal|media|melody|melt|member|memory|mention|menu|mercy|merge|merit|merry|mesh|message|metal|method|middle|midnight|milk|million|mimic|mind|minimum|minor|minute|miracle|mirror|misery|miss|mistake|mix|mixed|mixture|mobile|model|modify|mom|moment|monitor|monkey|monster|month|moon|moral|more|morning|mosquito|mother|motion|motor|mountain|mouse|move|movie|much|muffin|mule|multiply|muscle|museum|mushroom|music|must|mutual|myself|mystery|myth|naive|name|napkin|narrow|nasty|nation|nature|near|neck|need|negative|neglect|neither|nephew|nerve|nest|net|network|neutral|never|news|next|nice|night|noble|noise|nominee|noodle|normal|north|nose|notable|note|nothing|notice|novel|now|nuclear|number|nurse|nut|oak|obey|object|oblige|obscure|observe|obtain|obvious|occur|ocean|october|odor|off|offer|office|often|oil|okay|old|olive|olympic|omit|once|one|onion|online|only|open|opera|opinion|oppose|option|orange|orbit|orchard|order|ordinary|organ|orient|original|orphan|ostrich|other|outdoor|outer|output|outside|oval|oven|over|own|owner|oxygen|oyster|ozone|pact|paddle|page|pair|palace|palm|panda|panel|panic|panther|paper|parade|parent|park|parrot|party|pass|patch|path|patient|patrol|pattern|pause|pave|payment|peace|peanut|pear|peasant|pelican|pen|penalty|pencil|people|pepper|perfect|permit|person|pet|phone|photo|phrase|physical|piano|picnic|picture|piece|pig|pigeon|pill|pilot|pink|pioneer|pipe|pistol|pitch|pizza|place|planet|plastic|plate|play|please|pledge|pluck|plug|plunge|poem|poet|point|polar|pole|police|pond|pony|pool|popular|portion|position|possible|post|potato|pottery|poverty|powder|power|practice|praise|predict|prefer|prepare|present|pretty|prevent|price|pride|primary|print|priority|prison|private|prize|problem|process|produce|profit|program|project|promote|proof|property|prosper|protect|proud|provide|public|pudding|pull|pulp|pulse|pumpkin|punch|pupil|puppy|purchase|purity|purpose|purse|push|put|puzzle|pyramid|quality|quantum|quarter|question|quick|quit|quiz|quote|rabbit|raccoon|race|rack|radar|radio|rail|rain|raise|rally|ramp|ranch|random|range|rapid|rare|rate|rather|raven|raw|razor|ready|real|reason|rebel|rebuild|recall|receive|recipe|record|recycle|reduce|reflect|reform|refuse|region|regret|regular|reject|relax|release|relief|rely|remain|remember|remind|remove|render|renew|rent|reopen|repair|repeat|replace|report|require|rescue|resemble|resist|resource|response|result|retire|retreat|return|reunion|reveal|review|reward|rhythm|rib|ribbon|rice|rich|ride|ridge|rifle|right|rigid|ring|riot|ripple|risk|ritual|rival|river|road|roast|robot|robust|rocket|romance|roof|rookie|room|rose|rotate|rough|round|route|royal|rubber|rude|rug|rule|run|runway|rural|sad|saddle|sadness|safe|sail|salad|salmon|salon|salt|salute|same|sample|sand|satisfy|satoshi|sauce|sausage|save|say|scale|scan|scare|scatter|scene|scheme|school|science|scissors|scorpion|scout|scrap|screen|script|scrub|sea|search|season|seat|second|secret|section|security|seed|seek|segment|select|sell|seminar|senior|sense|sentence|series|service|session|settle|setup|seven|shadow|shaft|shallow|share|shed|shell|sheriff|shield|shift|shine|ship|shiver|shock|shoe|shoot|shop|short|shoulder|shove|shrimp|shrug|shuffle|shy|sibling|sick|side|siege|sight|sign|silent|silk|silly|silver|similar|simple|since|sing|siren|sister|situate|six|size|skate|sketch|ski|skill|skin|skirt|skull|slab|slam|sleep|slender|slice|slide|slight|slim|slogan|slot|slow|slush|small|smart|smile|smoke|smooth|snack|snake|snap|sniff|snow|soap|soccer|social|sock|soda|soft|solar|soldier|solid|solution|solve|someone|song|soon|sorry|sort|soul|sound|soup|source|south|space|spare|spatial|spawn|speak|special|speed|spell|spend|sphere|spice|spider|spike|spin|spirit|split|spoil|sponsor|spoon|sport|spot|spray|spread|spring|spy|square|squeeze|squirrel|stable|stadium|staff|stage|stairs|stamp|stand|start|state|stay|steak|steel|stem|step|stereo|stick|still|sting|stock|stomach|stone|stool|story|stove|strategy|street|strike|strong|struggle|student|stuff|stumble|style|subject|submit|subway|success|such|sudden|suffer|sugar|suggest|suit|summer|sun|sunny|sunset|super|supply|supreme|sure|surface|surge|surprise|surround|survey|suspect|sustain|swallow|swamp|swap|swarm|swear|sweet|swift|swim|swing|switch|sword|symbol|symptom|syrup|system|table|tackle|tag|tail|talent|talk|tank|tape|target|task|taste|tattoo|taxi|teach|team|tell|ten|tenant|tennis|tent|term|test|text|thank|that|theme|then|theory|there|they|thing|this|thought|three|thrive|throw|thumb|thunder|ticket|tide|tiger|tilt|timber|time|tiny|tip|tired|tissue|title|toast|tobacco|today|toddler|toe|together|toilet|token|tomato|tomorrow|tone|tongue|tonight|tool|tooth|top|topic|topple|torch|tornado|tortoise|toss|total|tourist|toward|tower|town|toy|track|trade|traffic|tragic|train|transfer|trap|trash|travel|tray|treat|tree|trend|trial|tribe|trick|trigger|trim|trip|trophy|trouble|truck|true|truly|trumpet|trust|truth|try|tube|tuition|tumble|tuna|tunnel|turkey|turn|turtle|twelve|twenty|twice|twin|twist|two|type|typical|ugly|umbrella|unable|unaware|uncle|uncover|under|undo|unfair|unfold|unhappy|uniform|unique|unit|universe|unknown|unlock|until|unusual|unveil|update|upgrade|uphold|upon|upper|upset|urban|urge|usage|use|used|useful|useless|usual|utility|vacant|vacuum|vague|valid|valley|valve|van|vanish|vapor|various|vast|vault|vehicle|velvet|vendor|venture|venue|verb|verify|version|very|vessel|veteran|viable|vibrant|vicious|victory|video|view|village|vintage|violin|virtual|virus|visa|visit|visual|vital|vivid|vocal|voice|void|volcano|volume|vote|voyage|wage|wagon|wait|walk|wall|walnut|want|warfare|warm|warrior|wash|wasp|waste|water|wave|way|wealth|weapon|wear|weasel|weather|web|wedding|weekend|weird|welcome|west|wet|whale|what|wheat|wheel|when|where|whip|whisper|wide|width|wife|wild|will|win|window|wine|wing|wink|winner|winter|wire|wisdom|wise|wish|witness|wolf|woman|wonder|wood|wool|word|work|world|worry|worth|wrap|wreck|wrestle|wrist|write|wrong|yard|year|yellow|you|young|youth|zebra|zero|zone|zoo'.split('|');

    const INVALID_MNEMONIC = 'Invalid mnemonic';
    const INVALID_ENTROPY = 'Invalid entropy';
    const INVALID_CHECKSUM = 'Invalid mnemonic checksum';
    function normalize(str) {
        return (str || '').normalize('NFKD');
    }
    function binaryToByte(bin) {
        return parseInt(bin, 2);
    }
    function bytesToBinary(bytes) {
        return bytes.map((x) => x.toString(2).padStart(8, '0')).join('');
    }
    function deriveChecksumBits(entropyBuffer) {
        return bytesToBinary(Array.from(sha256AsU8a(entropyBuffer))).slice(0, (entropyBuffer.length * 8) / 32);
    }
    function mnemonicToSeedSync(mnemonic, password) {
        return pbkdf2Encode(util.stringToU8a(normalize(mnemonic)), util.stringToU8a(`mnemonic${normalize(password)}`)).password;
    }
    function mnemonicToEntropy$1(mnemonic, wordlist = DEFAULT_WORDLIST) {
        const words = normalize(mnemonic).split(' ');
        if (words.length % 3 !== 0) {
            throw new Error(INVALID_MNEMONIC);
        }
        const bits = words
            .map((word) => {
            const index = wordlist.indexOf(word);
            if (index === -1) {
                throw new Error(INVALID_MNEMONIC);
            }
            return index.toString(2).padStart(11, '0');
        })
            .join('');
        const dividerIndex = Math.floor(bits.length / 33) * 32;
        const entropyBits = bits.slice(0, dividerIndex);
        const checksumBits = bits.slice(dividerIndex);
        const matched = entropyBits.match(/(.{1,8})/g);
        const entropyBytes = matched?.map(binaryToByte);
        if (!entropyBytes || (entropyBytes.length % 4 !== 0) || (entropyBytes.length < 16) || (entropyBytes.length > 32)) {
            throw new Error(INVALID_ENTROPY);
        }
        const entropy = util.u8aToU8a(entropyBytes);
        if (deriveChecksumBits(entropy) !== checksumBits) {
            throw new Error(INVALID_CHECKSUM);
        }
        return entropy;
    }
    function entropyToMnemonic(entropy, wordlist = DEFAULT_WORDLIST) {
        if ((entropy.length % 4 !== 0) || (entropy.length < 16) || (entropy.length > 32)) {
            throw new Error(INVALID_ENTROPY);
        }
        const matched = `${bytesToBinary(Array.from(entropy))}${deriveChecksumBits(entropy)}`.match(/(.{1,11})/g);
        const mapped = matched?.map((b) => wordlist[binaryToByte(b)]);
        if (!mapped || (mapped.length < 12)) {
            throw new Error('Unable to map entropy to mnemonic');
        }
        return mapped.join(' ');
    }
    function generateMnemonic(numWords, wordlist) {
        return entropyToMnemonic(randomAsU8a((numWords / 3) * 4), wordlist);
    }
    function validateMnemonic(mnemonic, wordlist) {
        try {
            mnemonicToEntropy$1(mnemonic, wordlist);
        }
        catch {
            return false;
        }
        return true;
    }

    function mnemonicGenerate(numWords = 12, wordlist, onlyJs) {
        return !util.hasBigInt || (!wordlist && !onlyJs && isReady())
            ? bip39Generate(numWords)
            : generateMnemonic(numWords, wordlist);
    }

    function mnemonicToEntropy(mnemonic, wordlist, onlyJs) {
        return !util.hasBigInt || (!wordlist && !onlyJs && isReady())
            ? bip39ToEntropy(mnemonic)
            : mnemonicToEntropy$1(mnemonic, wordlist);
    }

    function mnemonicValidate(mnemonic, wordlist, onlyJs) {
        return !util.hasBigInt || (!wordlist && !onlyJs && isReady())
            ? bip39Validate(mnemonic)
            : validateMnemonic(mnemonic, wordlist);
    }

    function mnemonicToLegacySeed(mnemonic, password = '', onlyJs, byteLength = 32) {
        if (!mnemonicValidate(mnemonic)) {
            throw new Error('Invalid bip39 mnemonic specified');
        }
        else if (![32, 64].includes(byteLength)) {
            throw new Error(`Invalid seed length ${byteLength}, expected 32 or 64`);
        }
        return byteLength === 32
            ? !util.hasBigInt || (!onlyJs && isReady())
                ? bip39ToSeed(mnemonic, password)
                : mnemonicToSeedSync(mnemonic, password).subarray(0, 32)
            : mnemonicToSeedSync(mnemonic, password);
    }

    function mnemonicToMiniSecret(mnemonic, password = '', wordlist, onlyJs) {
        if (!mnemonicValidate(mnemonic, wordlist, onlyJs)) {
            throw new Error('Invalid bip39 mnemonic specified');
        }
        else if (!wordlist && !onlyJs && isReady()) {
            return bip39ToMiniSecret(mnemonic, password);
        }
        const entropy = mnemonicToEntropy(mnemonic, wordlist);
        const salt = util.stringToU8a(`mnemonic${password}`);
        return pbkdf2Encode(entropy, salt).password.slice(0, 32);
    }

    function ledgerDerivePrivate(xprv, index) {
        const kl = xprv.subarray(0, 32);
        const kr = xprv.subarray(32, 64);
        const cc = xprv.subarray(64, 96);
        const data = util.u8aConcat([0], kl, kr, util.bnToU8a(index, BN_LE_32_OPTS));
        const z = hmacShaAsU8a(cc, data, 512);
        data[0] = 0x01;
        return util.u8aConcat(util.bnToU8a(util.u8aToBn(kl, BN_LE_OPTS).iadd(util.u8aToBn(z.subarray(0, 28), BN_LE_OPTS).imul(util.BN_EIGHT)), BN_LE_512_OPTS).subarray(0, 32), util.bnToU8a(util.u8aToBn(kr, BN_LE_OPTS).iadd(util.u8aToBn(z.subarray(32, 64), BN_LE_OPTS)), BN_LE_512_OPTS).subarray(0, 32), hmacShaAsU8a(cc, data, 512).subarray(32, 64));
    }

    const ED25519_CRYPTO = 'ed25519 seed';
    function ledgerMaster(mnemonic, password) {
        const seed = mnemonicToSeedSync(mnemonic, password);
        const chainCode = hmacShaAsU8a(ED25519_CRYPTO, new Uint8Array([1, ...seed]), 256);
        let priv;
        while (!priv || (priv[31] & 0b0010_0000)) {
            priv = hmacShaAsU8a(ED25519_CRYPTO, priv || seed, 512);
        }
        priv[0] &= 0b1111_1000;
        priv[31] &= 0b0111_1111;
        priv[31] |= 0b0100_0000;
        return util.u8aConcat(priv, chainCode);
    }

    function hdLedger(_mnemonic, path) {
        const words = _mnemonic
            .split(' ')
            .map((s) => s.trim())
            .filter((s) => s);
        if (![12, 24, 25].includes(words.length)) {
            throw new Error('Expected a mnemonic with 24 words (or 25 including a password)');
        }
        const [mnemonic, password] = words.length === 25
            ? [words.slice(0, 24).join(' '), words[24]]
            : [words.join(' '), ''];
        if (!mnemonicValidate(mnemonic)) {
            throw new Error('Invalid mnemonic passed to ledger derivation');
        }
        else if (!hdValidatePath(path)) {
            throw new Error('Invalid derivation path');
        }
        const parts = path.split('/').slice(1);
        let seed = ledgerMaster(mnemonic, password);
        for (const p of parts) {
            const n = parseInt(p.replace(/'$/, ''), 10);
            seed = ledgerDerivePrivate(seed, (n < HARDENED) ? (n + HARDENED) : n);
        }
        return ed25519PairFromSeed(seed.slice(0, 32));
    }

    function L32(x, c) { return (x << c) | (x >>> (32 - c)); }
    function ld32(x, i) {
        let u = x[i + 3] & 0xff;
        u = (u << 8) | (x[i + 2] & 0xff);
        u = (u << 8) | (x[i + 1] & 0xff);
        return (u << 8) | (x[i + 0] & 0xff);
    }
    function st32(x, j, u) {
        for (let i = 0; i < 4; i++) {
            x[j + i] = u & 255;
            u >>>= 8;
        }
    }
    function vn(x, xi, y, yi, n) {
        let d = 0;
        for (let i = 0; i < n; i++)
            d |= x[xi + i] ^ y[yi + i];
        return (1 & ((d - 1) >>> 8)) - 1;
    }
    function core(out, inp, k, c, h) {
        const w = new Uint32Array(16), x = new Uint32Array(16), y = new Uint32Array(16), t = new Uint32Array(4);
        let i, j, m;
        for (i = 0; i < 4; i++) {
            x[5 * i] = ld32(c, 4 * i);
            x[1 + i] = ld32(k, 4 * i);
            x[6 + i] = ld32(inp, 4 * i);
            x[11 + i] = ld32(k, 16 + 4 * i);
        }
        for (i = 0; i < 16; i++)
            y[i] = x[i];
        for (i = 0; i < 20; i++) {
            for (j = 0; j < 4; j++) {
                for (m = 0; m < 4; m++)
                    t[m] = x[(5 * j + 4 * m) % 16];
                t[1] ^= L32((t[0] + t[3]) | 0, 7);
                t[2] ^= L32((t[1] + t[0]) | 0, 9);
                t[3] ^= L32((t[2] + t[1]) | 0, 13);
                t[0] ^= L32((t[3] + t[2]) | 0, 18);
                for (m = 0; m < 4; m++)
                    w[4 * j + (j + m) % 4] = t[m];
            }
            for (m = 0; m < 16; m++)
                x[m] = w[m];
        }
        if (h) {
            for (i = 0; i < 16; i++)
                x[i] = (x[i] + y[i]) | 0;
            for (i = 0; i < 4; i++) {
                x[5 * i] = (x[5 * i] - ld32(c, 4 * i)) | 0;
                x[6 + i] = (x[6 + i] - ld32(inp, 4 * i)) | 0;
            }
            for (i = 0; i < 4; i++) {
                st32(out, 4 * i, x[5 * i]);
                st32(out, 16 + 4 * i, x[6 + i]);
            }
        }
        else {
            for (i = 0; i < 16; i++)
                st32(out, 4 * i, (x[i] + y[i]) | 0);
        }
    }
    const sigma = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
    function crypto_stream_salsa20_xor(c, cpos, m, mpos, b, n, k) {
        const z = new Uint8Array(16), x = new Uint8Array(64);
        let u, i;
        if (!b)
            return 0;
        for (i = 0; i < 16; i++)
            z[i] = 0;
        for (i = 0; i < 8; i++)
            z[i] = n[i];
        while (b >= 64) {
            core(x, z, k, sigma, false);
            for (i = 0; i < 64; i++)
                c[cpos + i] = (m ? m[mpos + i] : 0) ^ x[i];
            u = 1;
            for (i = 8; i < 16; i++) {
                u = u + (z[i] & 0xff) | 0;
                z[i] = u & 0xff;
                u >>>= 8;
            }
            b -= 64;
            cpos += 64;
            if (m)
                mpos += 64;
        }
        if (b > 0) {
            core(x, z, k, sigma, false);
            for (i = 0; i < b; i++)
                c[cpos + i] = (m ? m[mpos + i] : 0) ^ x[i];
        }
        return 0;
    }
    function crypto_stream_xor(c, cpos, m, mpos, d, n, k) {
        const s = new Uint8Array(32);
        core(s, n, k, sigma, true);
        return crypto_stream_salsa20_xor(c, cpos, m, mpos, d, n.subarray(16), s);
    }
    function add1305(h, c) {
        let u = 0;
        for (let j = 0; j < 17; j++) {
            u = (u + ((h[j] + c[j]) | 0)) | 0;
            h[j] = u & 255;
            u >>>= 8;
        }
    }
    const minusp = new Uint32Array([5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 252]);
    function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
        let i, j, u;
        const x = new Uint32Array(17), r = new Uint32Array(17), h = new Uint32Array(17), c = new Uint32Array(17), g = new Uint32Array(17);
        for (j = 0; j < 17; j++)
            r[j] = h[j] = 0;
        for (j = 0; j < 16; j++)
            r[j] = k[j];
        r[3] &= 15;
        r[4] &= 252;
        r[7] &= 15;
        r[8] &= 252;
        r[11] &= 15;
        r[12] &= 252;
        r[15] &= 15;
        while (n > 0) {
            for (j = 0; j < 17; j++)
                c[j] = 0;
            for (j = 0; (j < 16) && (j < n); ++j)
                c[j] = m[mpos + j];
            c[j] = 1;
            mpos += j;
            n -= j;
            add1305(h, c);
            for (i = 0; i < 17; i++) {
                x[i] = 0;
                for (j = 0; j < 17; j++)
                    x[i] = (x[i] + (h[j] * ((j <= i) ? r[i - j] : ((320 * r[i + 17 - j]) | 0))) | 0) | 0;
            }
            for (i = 0; i < 17; i++)
                h[i] = x[i];
            u = 0;
            for (j = 0; j < 16; j++) {
                u = (u + h[j]) | 0;
                h[j] = u & 255;
                u >>>= 8;
            }
            u = (u + h[16]) | 0;
            h[16] = u & 3;
            u = (5 * (u >>> 2)) | 0;
            for (j = 0; j < 16; j++) {
                u = (u + h[j]) | 0;
                h[j] = u & 255;
                u >>>= 8;
            }
            u = (u + h[16]) | 0;
            h[16] = u;
        }
        for (j = 0; j < 17; j++)
            g[j] = h[j];
        add1305(h, minusp);
        const s = (-(h[16] >>> 7) | 0);
        for (j = 0; j < 17; j++)
            h[j] ^= s & (g[j] ^ h[j]);
        for (j = 0; j < 16; j++)
            c[j] = k[j + 16];
        c[16] = 0;
        add1305(h, c);
        for (j = 0; j < 16; j++)
            out[outpos + j] = h[j];
        return 0;
    }
    function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
        const x = new Uint8Array(16);
        crypto_onetimeauth(x, 0, m, mpos, n, k);
        return vn(h, hpos, x, 0, 16);
    }
    function crypto_secretbox(c, m, d, n, k) {
        if (d < 32)
            return -1;
        crypto_stream_xor(c, 0, m, 0, d, n, k);
        crypto_onetimeauth(c, 16, c, 32, d - 32, c);
        for (let i = 0; i < 16; i++)
            c[i] = 0;
        return 0;
    }
    function crypto_secretbox_open(m, c, d, n, k) {
        const x = new Uint8Array(32);
        if (d < 32)
            return -1;
        crypto_stream_xor(x, 0, null, 0, 32, n, k);
        if (crypto_onetimeauth_verify(c, 16, c, 32, d - 32, x) !== 0)
            return -1;
        crypto_stream_xor(m, 0, c, 0, d, n, k);
        for (let i = 0; i < 32; i++)
            m[i] = 0;
        return 0;
    }
    const crypto_secretbox_KEYBYTES = 32;
    const crypto_secretbox_NONCEBYTES = 24;
    const crypto_secretbox_ZEROBYTES = 32;
    const crypto_secretbox_BOXZEROBYTES = 16;
    function checkLengths(k, n) {
        if (k.length !== crypto_secretbox_KEYBYTES)
            throw new Error('bad key size');
        if (n.length !== crypto_secretbox_NONCEBYTES)
            throw new Error('bad nonce size');
    }
    function checkArrayTypes(...args) {
        for (let i = 0, count = args.length; i < count; i++) {
            if (!(args[i] instanceof Uint8Array))
                throw new TypeError('unexpected type, use Uint8Array');
        }
    }
    function naclSecretbox(msg, nonce, key) {
        checkArrayTypes(msg, nonce, key);
        checkLengths(key, nonce);
        const m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
        const c = new Uint8Array(m.length);
        for (let i = 0; i < msg.length; i++)
            m[i + crypto_secretbox_ZEROBYTES] = msg[i];
        crypto_secretbox(c, m, m.length, nonce, key);
        return c.subarray(crypto_secretbox_BOXZEROBYTES);
    }
    function naclSecretboxOpen(box, nonce, key) {
        checkArrayTypes(box, nonce, key);
        checkLengths(key, nonce);
        const c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
        const m = new Uint8Array(c.length);
        for (let i = 0; i < box.length; i++)
            c[i + crypto_secretbox_BOXZEROBYTES] = box[i];
        if (c.length < 32)
            return null;
        if (crypto_secretbox_open(m, c, c.length, nonce, key) !== 0)
            return null;
        return m.subarray(crypto_secretbox_ZEROBYTES);
    }

    function naclDecrypt(encrypted, nonce, secret) {
        return naclSecretboxOpen(encrypted, nonce, secret);
    }

    function naclEncrypt(message, secret, nonce = randomAsU8a(24)) {
        return {
            encrypted: naclSecretbox(message, nonce, secret),
            nonce
        };
    }

    function XorAndSalsa(prev, pi, input, ii, out, oi) {
        let y00 = prev[pi++] ^ input[ii++], y01 = prev[pi++] ^ input[ii++];
        let y02 = prev[pi++] ^ input[ii++], y03 = prev[pi++] ^ input[ii++];
        let y04 = prev[pi++] ^ input[ii++], y05 = prev[pi++] ^ input[ii++];
        let y06 = prev[pi++] ^ input[ii++], y07 = prev[pi++] ^ input[ii++];
        let y08 = prev[pi++] ^ input[ii++], y09 = prev[pi++] ^ input[ii++];
        let y10 = prev[pi++] ^ input[ii++], y11 = prev[pi++] ^ input[ii++];
        let y12 = prev[pi++] ^ input[ii++], y13 = prev[pi++] ^ input[ii++];
        let y14 = prev[pi++] ^ input[ii++], y15 = prev[pi++] ^ input[ii++];
        let x00 = y00, x01 = y01, x02 = y02, x03 = y03, x04 = y04, x05 = y05, x06 = y06, x07 = y07, x08 = y08, x09 = y09, x10 = y10, x11 = y11, x12 = y12, x13 = y13, x14 = y14, x15 = y15;
        for (let i = 0; i < 8; i += 2) {
            x04 ^= rotl$1(x00 + x12 | 0, 7);
            x08 ^= rotl$1(x04 + x00 | 0, 9);
            x12 ^= rotl$1(x08 + x04 | 0, 13);
            x00 ^= rotl$1(x12 + x08 | 0, 18);
            x09 ^= rotl$1(x05 + x01 | 0, 7);
            x13 ^= rotl$1(x09 + x05 | 0, 9);
            x01 ^= rotl$1(x13 + x09 | 0, 13);
            x05 ^= rotl$1(x01 + x13 | 0, 18);
            x14 ^= rotl$1(x10 + x06 | 0, 7);
            x02 ^= rotl$1(x14 + x10 | 0, 9);
            x06 ^= rotl$1(x02 + x14 | 0, 13);
            x10 ^= rotl$1(x06 + x02 | 0, 18);
            x03 ^= rotl$1(x15 + x11 | 0, 7);
            x07 ^= rotl$1(x03 + x15 | 0, 9);
            x11 ^= rotl$1(x07 + x03 | 0, 13);
            x15 ^= rotl$1(x11 + x07 | 0, 18);
            x01 ^= rotl$1(x00 + x03 | 0, 7);
            x02 ^= rotl$1(x01 + x00 | 0, 9);
            x03 ^= rotl$1(x02 + x01 | 0, 13);
            x00 ^= rotl$1(x03 + x02 | 0, 18);
            x06 ^= rotl$1(x05 + x04 | 0, 7);
            x07 ^= rotl$1(x06 + x05 | 0, 9);
            x04 ^= rotl$1(x07 + x06 | 0, 13);
            x05 ^= rotl$1(x04 + x07 | 0, 18);
            x11 ^= rotl$1(x10 + x09 | 0, 7);
            x08 ^= rotl$1(x11 + x10 | 0, 9);
            x09 ^= rotl$1(x08 + x11 | 0, 13);
            x10 ^= rotl$1(x09 + x08 | 0, 18);
            x12 ^= rotl$1(x15 + x14 | 0, 7);
            x13 ^= rotl$1(x12 + x15 | 0, 9);
            x14 ^= rotl$1(x13 + x12 | 0, 13);
            x15 ^= rotl$1(x14 + x13 | 0, 18);
        }
        out[oi++] = (y00 + x00) | 0;
        out[oi++] = (y01 + x01) | 0;
        out[oi++] = (y02 + x02) | 0;
        out[oi++] = (y03 + x03) | 0;
        out[oi++] = (y04 + x04) | 0;
        out[oi++] = (y05 + x05) | 0;
        out[oi++] = (y06 + x06) | 0;
        out[oi++] = (y07 + x07) | 0;
        out[oi++] = (y08 + x08) | 0;
        out[oi++] = (y09 + x09) | 0;
        out[oi++] = (y10 + x10) | 0;
        out[oi++] = (y11 + x11) | 0;
        out[oi++] = (y12 + x12) | 0;
        out[oi++] = (y13 + x13) | 0;
        out[oi++] = (y14 + x14) | 0;
        out[oi++] = (y15 + x15) | 0;
    }
    function BlockMix(input, ii, out, oi, r) {
        let head = oi + 0;
        let tail = oi + 16 * r;
        for (let i = 0; i < 16; i++)
            out[tail + i] = input[ii + (2 * r - 1) * 16 + i];
        for (let i = 0; i < r; i++, head += 16, ii += 16) {
            XorAndSalsa(out, tail, input, ii, out, head);
            if (i > 0)
                tail += 16;
            XorAndSalsa(out, head, input, (ii += 16), out, tail);
        }
    }
    function scryptInit(password, salt, _opts) {
        const opts = checkOpts({
            dkLen: 32,
            asyncTick: 10,
            maxmem: 1024 ** 3 + 1024,
        }, _opts);
        const { N, r, p, dkLen, asyncTick, maxmem, onProgress } = opts;
        anumber(N);
        anumber(r);
        anumber(p);
        anumber(dkLen);
        anumber(asyncTick);
        anumber(maxmem);
        if (onProgress !== undefined && typeof onProgress !== 'function')
            throw new Error('progressCb should be function');
        const blockSize = 128 * r;
        const blockSize32 = blockSize / 4;
        const pow32 = Math.pow(2, 32);
        if (N <= 1 || (N & (N - 1)) !== 0 || N > pow32) {
            throw new Error('Scrypt: N must be larger than 1, a power of 2, and less than 2^32');
        }
        if (p < 0 || p > ((pow32 - 1) * 32) / blockSize) {
            throw new Error('Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)');
        }
        if (dkLen < 0 || dkLen > (pow32 - 1) * 32) {
            throw new Error('Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32');
        }
        const memUsed = blockSize * (N + p);
        if (memUsed > maxmem) {
            throw new Error('Scrypt: memused is bigger than maxMem. Expected 128 * r * (N + p) > maxmem of ' + maxmem);
        }
        const B = pbkdf2(sha256, password, salt, { c: 1, dkLen: blockSize * p });
        const B32 = u32(B);
        const V = u32(new Uint8Array(blockSize * N));
        const tmp = u32(new Uint8Array(blockSize));
        let blockMixCb = () => { };
        if (onProgress) {
            const totalBlockMix = 2 * N * p;
            const callbackPer = Math.max(Math.floor(totalBlockMix / 10000), 1);
            let blockMixCnt = 0;
            blockMixCb = () => {
                blockMixCnt++;
                if (onProgress && (!(blockMixCnt % callbackPer) || blockMixCnt === totalBlockMix))
                    onProgress(blockMixCnt / totalBlockMix);
            };
        }
        return { N, r, p, dkLen, blockSize32, V, B32, B, tmp, blockMixCb, asyncTick };
    }
    function scryptOutput(password, dkLen, B, V, tmp) {
        const res = pbkdf2(sha256, password, B, { c: 1, dkLen });
        clean(B, V, tmp);
        return res;
    }
    function scrypt(password, salt, opts) {
        const { N, r, p, dkLen, blockSize32, V, B32, B, tmp, blockMixCb } = scryptInit(password, salt, opts);
        swap32IfBE(B32);
        for (let pi = 0; pi < p; pi++) {
            const Pi = blockSize32 * pi;
            for (let i = 0; i < blockSize32; i++)
                V[i] = B32[Pi + i];
            for (let i = 0, pos = 0; i < N - 1; i++) {
                BlockMix(V, pos, V, (pos += blockSize32), r);
                blockMixCb();
            }
            BlockMix(V, (N - 1) * blockSize32, B32, Pi, r);
            blockMixCb();
            for (let i = 0; i < N; i++) {
                const j = B32[Pi + blockSize32 - 16] % N;
                for (let k = 0; k < blockSize32; k++)
                    tmp[k] = B32[Pi + k] ^ V[j * blockSize32 + k];
                BlockMix(tmp, 0, B32, Pi, r);
                blockMixCb();
            }
        }
        swap32IfBE(B32);
        return scryptOutput(password, dkLen, B, V, tmp);
    }

    const ALLOWED_PARAMS = [
        { N: 1 << 13, p: 10, r: 8 },
        { N: 1 << 14, p: 5, r: 8 },
        { N: 1 << 15, p: 3, r: 8 },
        { N: 1 << 15, p: 1, r: 8 },
        { N: 1 << 16, p: 2, r: 8 },
        { N: 1 << 17, p: 1, r: 8 }
    ];
    const DEFAULT_PARAMS = {
        N: 1 << 17,
        p: 1,
        r: 8
    };

    function scryptEncode(passphrase, salt = randomAsU8a(), params = DEFAULT_PARAMS, onlyJs) {
        const u8a = util.u8aToU8a(passphrase);
        return {
            params,
            password: !util.hasBigInt || (!onlyJs && isReady())
                ? scrypt$1(u8a, salt, Math.log2(params.N), params.r, params.p)
                : scrypt(u8a, salt, util.objectSpread({ dkLen: 64 }, params)),
            salt
        };
    }

    function scryptFromU8a(data) {
        if (!(data instanceof Uint8Array)) {
            throw new Error('Expected input to be a Uint8Array');
        }
        if (data.length < 32 + 12) {
            throw new Error(`Invalid input length: expected 44 bytes, found ${data.length}`);
        }
        const salt = data.subarray(0, 32);
        const N = util.u8aToBn(data.subarray(32, 36), BN_LE_OPTS).toNumber();
        const p = util.u8aToBn(data.subarray(36, 40), BN_LE_OPTS).toNumber();
        const r = util.u8aToBn(data.subarray(40, 44), BN_LE_OPTS).toNumber();
        if (N > (1 << 20) || p > 4 || r > 16) {
            throw new Error('Scrypt parameters exceed safe limits');
        }
        const isAllowed = ALLOWED_PARAMS.some((preset) => preset.N === N && preset.p === p && preset.r === r);
        if (!isAllowed) {
            throw new Error('Invalid injected scrypt params found');
        }
        return { params: { N, p, r }, salt };
    }

    function scryptToU8a(salt, { N, p, r }) {
        return util.u8aConcat(salt, util.bnToU8a(N, BN_LE_32_OPTS), util.bnToU8a(p, BN_LE_32_OPTS), util.bnToU8a(r, BN_LE_32_OPTS));
    }

    const ENCODING = ['scrypt', 'xsalsa20-poly1305'];
    const ENCODING_NONE = ['none'];
    const ENCODING_VERSION = '3';
    const NONCE_LENGTH = 24;
    const SCRYPT_LENGTH = 32 + (3 * 4);

    function jsonDecryptData(encrypted, passphrase, encType = ENCODING) {
        if (!encrypted) {
            throw new Error('No encrypted data available to decode');
        }
        else if (encType.includes('xsalsa20-poly1305') && !passphrase) {
            throw new Error('Password required to decode encrypted data');
        }
        let encoded = encrypted;
        if (passphrase) {
            let password;
            if (encType.includes('scrypt')) {
                const { params, salt } = scryptFromU8a(encrypted);
                password = scryptEncode(passphrase, salt, params).password;
                encrypted = encrypted.subarray(SCRYPT_LENGTH);
            }
            else {
                password = util.stringToU8a(passphrase);
            }
            encoded = naclDecrypt(encrypted.subarray(NONCE_LENGTH), encrypted.subarray(0, NONCE_LENGTH), util.u8aFixLength(password, 256, true));
        }
        if (!encoded) {
            throw new Error('Unable to decode using the supplied passphrase');
        }
        return encoded;
    }

    function jsonDecrypt({ encoded, encoding }, passphrase) {
        if (!encoded) {
            throw new Error('No encrypted data available to decode');
        }
        return jsonDecryptData(util.isHex(encoded)
            ? util.hexToU8a(encoded)
            : base64Decode(encoded), passphrase, Array.isArray(encoding.type)
            ? encoding.type
            : [encoding.type]);
    }

    function jsonEncryptFormat(encoded, contentType, isEncrypted) {
        return {
            encoded: base64Encode(encoded),
            encoding: {
                content: contentType,
                type: isEncrypted
                    ? ENCODING
                    : ENCODING_NONE,
                version: ENCODING_VERSION
            }
        };
    }

    function jsonEncrypt(data, contentType, passphrase) {
        let isEncrypted = false;
        let encoded = data;
        if (passphrase) {
            const { params, password, salt } = scryptEncode(passphrase);
            const { encrypted, nonce } = naclEncrypt(encoded, password.subarray(0, 32));
            isEncrypted = true;
            encoded = util.u8aConcat(scryptToU8a(salt, params), nonce, encrypted);
        }
        return jsonEncryptFormat(encoded, contentType, isEncrypted);
    }

    const secp256k1VerifyHasher = (hashType) => (message, signature, publicKey) => secp256k1Verify(message, signature, publicKey, hashType, true);
    const VERIFIERS_ECDSA = [
        ['ecdsa', secp256k1VerifyHasher('blake2')],
        ['ethereum', secp256k1VerifyHasher('keccak')]
    ];
    const VERIFIERS = [
        ['ed25519', ed25519Verify],
        ['sr25519', sr25519Verify]
    ];
    function verifyDetect(result, { message, publicKey, signature }, verifiers = [...VERIFIERS, ...VERIFIERS_ECDSA]) {
        result.isValid = verifiers.some(([crypto, verify]) => {
            try {
                if (verify(message, signature, publicKey)) {
                    result.crypto = crypto;
                    return true;
                }
            }
            catch {
            }
            return false;
        });
        return result;
    }
    function verifyMultisig(result, { message, publicKey, signature }) {
        if (![0, 1, 2].includes(signature[0]) || ![65, 66].includes(signature.length)) {
            throw new Error(`Unknown crypto type, expected signature prefix [0..2], found ${signature[0]}`);
        }
        if (signature.length === 66) {
            result = verifyDetect(result, { message, publicKey, signature: signature.subarray(1) }, VERIFIERS_ECDSA);
        }
        else {
            result = verifyDetect(result, { message, publicKey, signature: signature.subarray(1) }, VERIFIERS);
            if (!result.isValid) {
                result = verifyDetect(result, { message, publicKey, signature }, VERIFIERS_ECDSA);
            }
            if (!result.isValid) {
                result.crypto = 'none';
            }
        }
        return result;
    }
    function getVerifyFn(signature) {
        return [0, 1, 2].includes(signature[0]) && [65, 66].includes(signature.length)
            ? verifyMultisig
            : verifyDetect;
    }
    function signatureVerify(message, signature, addressOrPublicKey) {
        const signatureU8a = util.u8aToU8a(signature);
        if (![64, 65, 66].includes(signatureU8a.length)) {
            throw new Error(`Invalid signature length, expected [64..66] bytes, found ${signatureU8a.length}`);
        }
        const publicKey = decodeAddress(addressOrPublicKey);
        const input = { message: util.u8aToU8a(message), publicKey, signature: signatureU8a };
        const result = { crypto: 'none', isValid: false, isWrapped: util.u8aIsWrapped(input.message, true), publicKey };
        const isWrappedBytes = util.u8aIsWrapped(input.message, false);
        const verifyFn = getVerifyFn(signatureU8a);
        verifyFn(result, input);
        if (result.crypto !== 'none' || (result.isWrapped && !isWrappedBytes)) {
            return result;
        }
        input.message = isWrappedBytes
            ? util.u8aUnwrapBytes(input.message)
            : util.u8aWrapBytes(input.message);
        return verifyFn(result, input);
    }

    const P64_1 = BigInt$1('11400714785074694791');
    const P64_2 = BigInt$1('14029467366897019727');
    const P64_3 = BigInt$1('1609587929392839161');
    const P64_4 = BigInt$1('9650029242287828579');
    const P64_5 = BigInt$1('2870177450012600261');
    const U64 = BigInt$1('0xffffffffffffffff');
    const _7n = BigInt$1(7);
    const _11n = BigInt$1(11);
    const _12n = BigInt$1(12);
    const _16n = BigInt$1(16);
    const _18n = BigInt$1(18);
    const _23n = BigInt$1(23);
    const _27n = BigInt$1(27);
    const _29n = BigInt$1(29);
    const _31n = BigInt$1(31);
    const _32n = BigInt$1(32);
    const _33n = BigInt$1(33);
    const _64n = BigInt$1(64);
    const _256n = BigInt$1(256);
    function rotl(a, b) {
        const c = a & U64;
        return ((c << b) | (c >> (_64n - b))) & U64;
    }
    function fromU8a(u8a, p, count) {
        const bigints = new Array(count);
        let offset = 0;
        for (let i = 0; i < count; i++, offset += 2) {
            bigints[i] = BigInt$1(u8a[p + offset] | (u8a[p + 1 + offset] << 8));
        }
        let result = util._0n;
        for (let i = count - 1; i >= 0; i--) {
            result = (result << _16n) + bigints[i];
        }
        return result;
    }
    function init(seed, input) {
        const state = {
            seed,
            u8a: new Uint8Array(32),
            u8asize: 0,
            v1: seed + P64_1 + P64_2,
            v2: seed + P64_2,
            v3: seed,
            v4: seed - P64_1
        };
        if (input.length < 32) {
            state.u8a.set(input);
            state.u8asize = input.length;
            return state;
        }
        const limit = input.length - 32;
        let p = 0;
        if (limit >= 0) {
            const adjustV = (v) => P64_1 * rotl(v + P64_2 * fromU8a(input, p, 4), _31n);
            do {
                state.v1 = adjustV(state.v1);
                p += 8;
                state.v2 = adjustV(state.v2);
                p += 8;
                state.v3 = adjustV(state.v3);
                p += 8;
                state.v4 = adjustV(state.v4);
                p += 8;
            } while (p <= limit);
        }
        if (p < input.length) {
            state.u8a.set(input.subarray(p, input.length));
            state.u8asize = input.length - p;
        }
        return state;
    }
    function xxhash64(input, initSeed) {
        const { seed, u8a, u8asize, v1, v2, v3, v4 } = init(BigInt$1(initSeed), input);
        let p = 0;
        let h64 = U64 & (BigInt$1(input.length) + (input.length >= 32
            ? (((((((((rotl(v1, util._1n) + rotl(v2, _7n) + rotl(v3, _12n) + rotl(v4, _18n)) ^ (P64_1 * rotl(v1 * P64_2, _31n))) * P64_1 + P64_4) ^ (P64_1 * rotl(v2 * P64_2, _31n))) * P64_1 + P64_4) ^ (P64_1 * rotl(v3 * P64_2, _31n))) * P64_1 + P64_4) ^ (P64_1 * rotl(v4 * P64_2, _31n))) * P64_1 + P64_4)
            : (seed + P64_5)));
        while (p <= (u8asize - 8)) {
            h64 = U64 & (P64_4 + P64_1 * rotl(h64 ^ (P64_1 * rotl(P64_2 * fromU8a(u8a, p, 4), _31n)), _27n));
            p += 8;
        }
        if ((p + 4) <= u8asize) {
            h64 = U64 & (P64_3 + P64_2 * rotl(h64 ^ (P64_1 * fromU8a(u8a, p, 2)), _23n));
            p += 4;
        }
        while (p < u8asize) {
            h64 = U64 & (P64_1 * rotl(h64 ^ (P64_5 * BigInt$1(u8a[p++])), _11n));
        }
        h64 = U64 & (P64_2 * (h64 ^ (h64 >> _33n)));
        h64 = U64 & (P64_3 * (h64 ^ (h64 >> _29n)));
        h64 = U64 & (h64 ^ (h64 >> _32n));
        const result = new Uint8Array(8);
        for (let i = 7; i >= 0; i--) {
            result[i] = Number(h64 % _256n);
            h64 = h64 / _256n;
        }
        return result;
    }

    function xxhashAsU8a(data, bitLength = 64, onlyJs) {
        const rounds = Math.ceil(bitLength / 64);
        const u8a = util.u8aToU8a(data);
        if (!util.hasBigInt || (!onlyJs && isReady())) {
            return twox(u8a, rounds);
        }
        const result = new Uint8Array(rounds * 8);
        for (let seed = 0; seed < rounds; seed++) {
            result.set(xxhash64(u8a, seed).reverse(), seed * 8);
        }
        return result;
    }
    const xxhashAsHex =  createAsHex(xxhashAsU8a);

    exports.addressEq = addressEq;
    exports.addressToEvm = addressToEvm;
    exports.allNetworks = allNetworks;
    exports.availableNetworks = availableNetworks;
    exports.base32Decode = base32Decode;
    exports.base32Encode = base32Encode;
    exports.base32Validate = base32Validate;
    exports.base58Decode = base58Decode;
    exports.base58Encode = base58Encode;
    exports.base58Validate = base58Validate;
    exports.base64Decode = base64Decode;
    exports.base64Encode = base64Encode;
    exports.base64Pad = base64Pad;
    exports.base64Trim = base64Trim;
    exports.base64Validate = base64Validate;
    exports.blake2AsHex = blake2AsHex;
    exports.blake2AsU8a = blake2AsU8a;
    exports.checkAddress = checkAddress;
    exports.checkAddressChecksum = checkAddressChecksum;
    exports.createKeyDerived = createKeyDerived;
    exports.createKeyMulti = createKeyMulti;
    exports.cryptoIsReady = cryptoIsReady;
    exports.cryptoWaitReady = cryptoWaitReady;
    exports.decodeAddress = decodeAddress;
    exports.deriveAddress = deriveAddress;
    exports.ed25519DeriveHard = ed25519DeriveHard;
    exports.ed25519PairFromRandom = ed25519PairFromRandom;
    exports.ed25519PairFromSecret = ed25519PairFromSecret;
    exports.ed25519PairFromSeed = ed25519PairFromSeed;
    exports.ed25519PairFromString = ed25519PairFromString;
    exports.ed25519Sign = ed25519Sign;
    exports.ed25519Verify = ed25519Verify;
    exports.encodeAddress = encodeAddress;
    exports.encodeDerivedAddress = encodeDerivedAddress;
    exports.encodeMultiAddress = encodeMultiAddress;
    exports.ethereumEncode = ethereumEncode;
    exports.evmToAddress = evmToAddress;
    exports.hdEthereum = hdEthereum;
    exports.hdLedger = hdLedger;
    exports.hdValidatePath = hdValidatePath;
    exports.hmacSha256AsU8a = hmacSha256AsU8a;
    exports.hmacSha512AsU8a = hmacSha512AsU8a;
    exports.hmacShaAsU8a = hmacShaAsU8a;
    exports.isAddress = isAddress;
    exports.isBase32 = isBase32;
    exports.isBase58 = isBase58;
    exports.isBase64 = isBase64;
    exports.isEthereumAddress = isEthereumAddress;
    exports.isEthereumChecksum = isEthereumChecksum;
    exports.jsonDecrypt = jsonDecrypt;
    exports.jsonDecryptData = jsonDecryptData;
    exports.jsonEncrypt = jsonEncrypt;
    exports.jsonEncryptFormat = jsonEncryptFormat;
    exports.keccak256AsU8a = keccak256AsU8a;
    exports.keccak512AsU8a = keccak512AsU8a;
    exports.keccakAsHex = keccakAsHex;
    exports.keccakAsU8a = keccakAsU8a;
    exports.keyExtractPath = keyExtractPath;
    exports.keyExtractSuri = keyExtractSuri;
    exports.keyFromPath = keyFromPath;
    exports.keyHdkdEcdsa = keyHdkdEcdsa;
    exports.keyHdkdEd25519 = keyHdkdEd25519;
    exports.keyHdkdSr25519 = keyHdkdSr25519;
    exports.mnemonicGenerate = mnemonicGenerate;
    exports.mnemonicToEntropy = mnemonicToEntropy;
    exports.mnemonicToLegacySeed = mnemonicToLegacySeed;
    exports.mnemonicToMiniSecret = mnemonicToMiniSecret;
    exports.mnemonicValidate = mnemonicValidate;
    exports.naclDecrypt = naclDecrypt;
    exports.naclEncrypt = naclEncrypt;
    exports.packageInfo = packageInfo;
    exports.pbkdf2Encode = pbkdf2Encode;
    exports.randomAsHex = randomAsHex;
    exports.randomAsNumber = randomAsNumber;
    exports.randomAsU8a = randomAsU8a;
    exports.scryptEncode = scryptEncode;
    exports.scryptFromU8a = scryptFromU8a;
    exports.scryptToU8a = scryptToU8a;
    exports.secp256k1Compress = secp256k1Compress;
    exports.secp256k1Expand = secp256k1Expand;
    exports.secp256k1PairFromSeed = secp256k1PairFromSeed;
    exports.secp256k1PrivateKeyTweakAdd = secp256k1PrivateKeyTweakAdd;
    exports.secp256k1Recover = secp256k1Recover;
    exports.secp256k1Sign = secp256k1Sign;
    exports.secp256k1Verify = secp256k1Verify;
    exports.selectableNetworks = selectableNetworks;
    exports.setSS58Format = setSS58Format;
    exports.sha256AsU8a = sha256AsU8a;
    exports.sha512AsU8a = sha512AsU8a;
    exports.shaAsU8a = shaAsU8a;
    exports.signatureVerify = signatureVerify;
    exports.sortAddresses = sortAddresses;
    exports.sr25519Agreement = sr25519Agreement;
    exports.sr25519DeriveHard = sr25519DeriveHard;
    exports.sr25519DerivePublic = sr25519DerivePublic;
    exports.sr25519DeriveSoft = sr25519DeriveSoft;
    exports.sr25519PairFromSeed = sr25519PairFromSeed;
    exports.sr25519Sign = sr25519Sign;
    exports.sr25519Verify = sr25519Verify;
    exports.sr25519VrfSign = sr25519VrfSign;
    exports.sr25519VrfVerify = sr25519VrfVerify;
    exports.validateAddress = validateAddress;
    exports.xxhashAsHex = xxhashAsHex;
    exports.xxhashAsU8a = xxhashAsU8a;

}));
