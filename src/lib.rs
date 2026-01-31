use self::ext::{Actions, Directions, Frames, JsValueExt};
use self::types::Game;
use gloo_timers::callback::Interval;
use log::{debug, error, info};
use serde::{Deserialize, Serialize};
use std::sync::LazyLock;
use std::{collections::HashMap, sync::Once};
use wasm_bindgen::prelude::*;
use web_sys::Window;
// use web_sys::window;

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

static GAME: LazyLock<Game> = LazyLock::new(|| Default::default());

static INIT: Once = Once::new();

#[wasm_bindgen(start)]
pub fn init() -> Result<(), JsValue> {
    console_error_panic_hook::set_once();
    INIT.call_once(|| {
        wasm_logger::init(wasm_logger::Config::default());
    });
    Ok(())
}

#[wasm_bindgen]
pub fn run(window: Window) -> Result<(), JsValue> {
    // info!("Rust run");
    // debug!("Window {window:?}");
    if let Err(err) = handle(&window) {
        error!("Error {err:?}");
    }
    // Interval::new(1_000, move || {
    //     if let Err(err) = handle(&window) {
    //         error!("Error {err:?}");
    //     }
    // })
    // .forget();
    // if let Some(window) = window() {
    // }
    // let document = window.document().expect("should have a document on window");
    // alert(&greeting);
    // window().alert_with_message("message: &str");
    Ok(())
}

pub fn handle(window: &Window) -> Result<(), JsValue> {
    let name = window.name()?;
    match &*name {
        "game" => game(window)?,
        "hero" => {}
        "chat" => {}
        "gamemap" => {}
        "menu" => {}
        _ => error!("Unknown window name {name}"),
    }
    // debug!("Ok: {name}");
    let document = window.document().ok_or(JsValue::from(window))?;
    Ok(())
}

pub fn game(window: &Window) -> Result<(), JsValue> {
    // info!("In game");
    if let Some(top) = window.top()? {
        // let frames = top.frames()?;
        let hero = top.hero()?;
        let g: Game = serde_wasm_bindgen::from_value(hero.game()?)?;
        info!("In game north {:?}", g.map.north());
        info!("In game south {:?}", g.map.south());
        info!("In game west {:?}", g.map.west());
        info!("In game east {:?}", g.map.east());
        // info!("In game up {:?}", hero.g()?.up());
        // info!("In game down {:?}", hero.g()?.down());
        // info!("In game north {:?}", hero.g()?.north());
        // info!("In game south {:?}", hero.g()?.south());
        // info!("In game east {:?}", hero.g()?.east());
        // info!("In game west {:?}", hero.g()?.west());
    }
    Ok(())
}

mod ext;
mod locations;
mod types;
