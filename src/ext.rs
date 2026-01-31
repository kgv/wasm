use wasm_bindgen::prelude::*;
use web_sys::js_sys::Reflect;

/// Extension methods for [`JsValue`]
pub(crate) trait JsValueExt {
    fn game(&self) -> Result<JsValue, JsValue>;
}

impl JsValueExt for JsValue {
    fn game(&self) -> Result<JsValue, JsValue> {
        Reflect::get(self, &JsValue::from_str("g"))
    }
}

/// Extension methods for [`JsValue`]
pub(crate) trait Actions {
    fn first(&self) -> Result<JsValue, JsValue>;

    fn second(&self) -> Result<JsValue, JsValue>;

    fn search(&self) -> Result<JsValue, JsValue>;

    fn pickup(&self) -> Result<JsValue, JsValue>;
}

impl Actions for JsValue {
    fn first(&self) -> Result<JsValue, JsValue> {
        Reflect::get(self, &JsValue::from_str("first"))
    }

    fn second(&self) -> Result<JsValue, JsValue> {
        Reflect::get(self, &JsValue::from_str("second"))
    }

    fn search(&self) -> Result<JsValue, JsValue> {
        Reflect::get(self, &JsValue::from_str("search"))
    }

    fn pickup(&self) -> Result<JsValue, JsValue> {
        Reflect::get(self, &JsValue::from_str("pickup"))
    }
}

/// Extension methods for [`JsValue`]
pub(crate) trait Directions {
    fn up(&self) -> Result<JsValue, JsValue>;

    fn down(&self) -> Result<JsValue, JsValue>;

    fn north(&self) -> Result<JsValue, JsValue>;

    fn south(&self) -> Result<JsValue, JsValue>;

    fn west(&self) -> Result<JsValue, JsValue>;

    fn east(&self) -> Result<JsValue, JsValue>;

    fn first(&self) -> Result<JsValue, JsValue>;

    fn second(&self) -> Result<JsValue, JsValue>;
}

impl Directions for JsValue {
    fn up(&self) -> Result<JsValue, JsValue> {
        Reflect::get(self, &JsValue::from_str("up"))
    }

    fn down(&self) -> Result<JsValue, JsValue> {
        Reflect::get(self, &JsValue::from_str("down"))
    }

    fn north(&self) -> Result<JsValue, JsValue> {
        Reflect::get(self, &JsValue::from_str("north"))
    }

    fn south(&self) -> Result<JsValue, JsValue> {
        Reflect::get(self, &JsValue::from_str("south"))
    }

    fn west(&self) -> Result<JsValue, JsValue> {
        Reflect::get(self, &JsValue::from_str("west"))
    }

    fn east(&self) -> Result<JsValue, JsValue> {
        Reflect::get(self, &JsValue::from_str("east"))
    }

    fn first(&self) -> Result<JsValue, JsValue> {
        Reflect::get(self, &JsValue::from_str("first"))
    }

    fn second(&self) -> Result<JsValue, JsValue> {
        Reflect::get(self, &JsValue::from_str("second"))
    }
}

/// Extension methods for [`JsValue`]
pub(crate) trait Frames {
    fn bottom(&self) -> Result<JsValue, JsValue>;

    fn hero(&self) -> Result<JsValue, JsValue>;
}

impl Frames for JsValue {
    fn bottom(&self) -> Result<JsValue, JsValue> {
        Reflect::get(self, &JsValue::from_str("bgrdown"))
    }

    fn hero(&self) -> Result<JsValue, JsValue> {
        Reflect::get(self, &JsValue::from_str("hero"))
    }
}
