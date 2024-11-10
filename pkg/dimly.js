let wasm;

const cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );

if (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };

let cachedUint8ArrayMemory0 = null;

function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}

const Vec2Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_vec2_free(ptr >>> 0, 1));

export class Vec2 {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Vec2.prototype);
        obj.__wbg_ptr = ptr;
        Vec2Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        Vec2Finalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_vec2_free(ptr, 0);
    }
    /**
     * @param {number} x
     * @param {number} y
     * @returns {Vec2}
     */
    static new(x, y) {
        const ret = wasm.vec2_new(x, y);
        return Vec2.__wrap(ret);
    }
    /**
     * @param {Vec2} other
     * @returns {Vec2}
     */
    plus(other) {
        _assertClass(other, Vec2);
        const ret = wasm.vec2_plus(this.__wbg_ptr, other.__wbg_ptr);
        return Vec2.__wrap(ret);
    }
    /**
     * @param {Vec2} other
     * @returns {Vec2}
     */
    minus(other) {
        _assertClass(other, Vec2);
        const ret = wasm.vec2_minus(this.__wbg_ptr, other.__wbg_ptr);
        return Vec2.__wrap(ret);
    }
    /**
     * @param {number} by
     * @returns {Vec2}
     */
    scale(by) {
        const ret = wasm.vec2_scale(this.__wbg_ptr, by);
        return Vec2.__wrap(ret);
    }
    /**
     * @param {Vec2} other
     * @returns {number}
     */
    distance_to(other) {
        _assertClass(other, Vec2);
        const ret = wasm.vec2_distance_to(this.__wbg_ptr, other.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    magnitude() {
        const ret = wasm.vec2_magnitude(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} n
     * @returns {Vec2}
     */
    divide_by(n) {
        const ret = wasm.vec2_divide_by(this.__wbg_ptr, n);
        return Vec2.__wrap(ret);
    }
    /**
     * @returns {Vec2}
     */
    normalize() {
        const ret = wasm.vec2_normalize(this.__wbg_ptr);
        return Vec2.__wrap(ret);
    }
    /**
     * @param {Vec2} towards
     * @param {number} amount
     * @returns {Vec2}
     */
    lerp(towards, amount) {
        _assertClass(towards, Vec2);
        var ptr0 = towards.__destroy_into_raw();
        const ret = wasm.vec2_lerp(this.__wbg_ptr, ptr0, amount);
        return Vec2.__wrap(ret);
    }
    /**
     * @param {number} max
     * @returns {Vec2}
     */
    limit(max) {
        const ret = wasm.vec2_limit(this.__wbg_ptr, max);
        return Vec2.__wrap(ret);
    }
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
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
}

function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };

    return imports;
}

function __wbg_init_memory(imports, memory) {

}

function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedUint8ArrayMemory0 = null;



    return wasm;
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (typeof module !== 'undefined') {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();

    __wbg_init_memory(imports);

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (typeof module_or_path !== 'undefined') {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (typeof module_or_path === 'undefined') {
        module_or_path = new URL('dimly_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    __wbg_init_memory(imports);

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync };
export default __wbg_init;
