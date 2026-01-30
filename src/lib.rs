use wasm_bindgen::prelude::*;
use web_sys::console;
use web_sys::window;

// Define a function that will be exported to JavaScript
#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

// You can also import functions from JavaScript into Rust
#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

// fn window() -> web_sys::Window {
//     web_sys::window().expect("no global `window` exists")
// }

#[wasm_bindgen(start)]
pub fn greet_and_log() -> Result<(), JsValue> {
    console_error_panic_hook::set_once();

    let greeting = greet("name");
    console::log_1(&greeting.into());
    console::time_with_label("test label");
    console::time_end_with_label("test label");
    let window = window().expect("no global `window` exists");
    // let document = window.document().expect("should have a document on window");
    // alert(&greeting);
    // window().alert_with_message("message: &str");
    Ok(())
}
