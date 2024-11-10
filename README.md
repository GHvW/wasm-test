# wasm-test

A test using `wasm-bindgen` to generate a wasm module from a rust library and then using inside a JS Vite project

Simply to learn what's going on without `wasm-pack`

---

## Dependencies

### wasm-bindgen
```shell
cargo install wasm-bindgen-cli
```


---

## Building

### Building the rust library
```shell
cargo build --target wasm32-unknown-unknown --release
```

### Using wasm-bindgen to make javascript bindings
From the root directory of the rust project you just built
```shell
wasm-bindgen target/wasm32-unknown-unknown/release/[the-library-name].wasm --out-dir ./out --target web
```
Will generate the bindings in the `./out` dir

Then copy the `./out` directory to the `pkg` directory in this project

The wasm module should be useable from the `pkg` directory now by referencing the `.js` file within