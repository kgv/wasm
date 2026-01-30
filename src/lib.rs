use wasm_bindgen::prelude::*;

// Define a function that will be exported to JavaScript
#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

// You can also import functions from JavaScript into Rust
#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);

    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn greet_and_log(name: &str) {
    let greeting = greet(name);
    alert(&greeting);
    log(&greeting);
}
