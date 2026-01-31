use crate::{ext::JsValueExt, types::Game};
use log::error;
use wasm_bindgen::prelude::*;
use web_sys::window;

// Underground beneath the city
struct UndergroundBeneathTheCity;

impl UndergroundBeneathTheCity {
    // fn r#loop() {
    //     switch (heroFrame.g.goal) {
    //         case GOALS.TO: this.start(heroFrame.g.location); break;
    //         case GOALS.FROM: this.end(heroFrame.g.location); break;
    //     }
    // }

    fn to(game: &Game, location: u64) -> Result<(), JsValue> {
        match location {
            253 => r#move(&[Direction::East])?,
            254 => r#move(&[Direction::South, Direction::East])?,
            255 => r#move(&[Direction::South, Direction::West, Direction::East])?,
            256 => r#move(&[Direction::North, Direction::East])?,
            257 => r#move(&[Direction::North, Direction::West])?,
            258 => r#move(&[Direction::North])?,
            259 => r#move(&[Direction::West, Direction::East])?,
            260 => r#move(&[Direction::West, Direction::East])?,
            262 => r#move(&[Direction::North, Direction::West])?,
            263 => r#move(&[
                Direction::North,
                Direction::South,
                Direction::East,
                Direction::West,
            ])?,
            264 => r#move(&[Direction::East])?,
            265 => r#move(&[Direction::South, Direction::East, Direction::West])?,
            266 => r#move(&[Direction::North, Direction::East, Direction::West])?,
            267 => r#move(&[Direction::South])?,
            268 => r#move(&[Direction::East])?,
            269 => r#move(&[Direction::East, Direction::West])?,
            270 => r#move(&[Direction::North, Direction::West])?,
            271 => r#move(&[Direction::West])?,
            _ => error!("UndergroundBeneathTheCity.start {location}"),
        }
        Ok(())
    }

    // fn from(location: u64) {
    //     switch (location) {
    //         case 250: Action.move(DIRECTIONS.SOUTH); break;
    //         case 251: Action.move(DIRECTIONS.SOUTH); break;
    //         case 252: Action.move(DIRECTIONS.SOUTH); break;
    //         case 253: Action.move(DIRECTIONS.EAST); break;
    //         case 254: Action.move(DIRECTIONS.SOUTH); break;
    //         case 255: Action.move(DIRECTIONS.SOUTH); break;
    //         case 256: Action.move(DIRECTIONS.EAST); break;
    //         case 257: Action.move(DIRECTIONS.SOUTH); break;
    //         case 258: Action.drink(); break;
    //         case 259: Action.move(DIRECTIONS.WEST); break;
    //         case 260: Action.move(DIRECTIONS.WEST); break;
    //         case 262: Action.move(DIRECTIONS.WEST); break;
    //         case 263: Action.move(DIRECTIONS.SOUTH); break;
    //         case 264: Action.move(DIRECTIONS.EAST); break;
    //         case 265: Action.move(DIRECTIONS.SOUTH); break;
    //         case 266: Action.move(DIRECTIONS.EAST); break;
    //         case 267: Action.move(DIRECTIONS.SOUTH); break;
    //         case 268: Action.move(DIRECTIONS.EAST); break;
    //         case 269: Action.move(DIRECTIONS.SOUTH); break;
    //         case 270: Action.move(DIRECTIONS.WEST); break;
    //         case 271: Action.move(DIRECTIONS.WEST); break;
    //         default: console.error("UndergroundBeneathTheCity.end", location);
    //     }
    // }
}

enum Direction {
    North,
    South,
    West,
    East,
}

fn r#move(game: &Game, directions: &[Direction]) -> Result<(), JsValue> {
    // console.info('Mv', heroFrame.g.location);
    let filtered = directions.iter().filter(|direction| {
        return game
            .map
            .history
            .contains(|location| {})
            .includes(heroFrame.g.neighbors[direction]?.id);
    });
    Ok(())
    // if (filtered.length > 0) {
    //     directions = filtered;
    // }
    // const randomIndex = Math.floor(Math.random() * directions.length);
    // const direction = directions[randomIndex];
    // // Проверяем, что target — это число (защита от undefined)
    // if (typeof direction === 'number') {
    //     heroFrame.go1(direction);
    // }
}

// const Action = {
//     drink() {
//         console.info('Drnk', heroFrame.g.location);
//         switch (heroFrame.g.location) {
//             case 22: heroFrame.link0('/game/?make=10'); break;
//             case 258: heroFrame.link0('/game/?make=12'); break;
//         }
//         heroFrame.g.goal = GOALS.TO;
//     },

//     make(number) {
//         console.info('Mk', heroFrame.g.location);
//         heroFrame.link0(`/game/?make=${number}`);
//     },

//     move(...directions) {
//         console.info('Mv', heroFrame.g.location);
//         const fresh = directions.filter(direction => {
//             return !heroFrame.g.history.includes(heroFrame.g.neighbors[direction]?.id);
//         });
//         if (fresh.length > 0) {
//             directions = fresh;
//         }
//         const randomIndex = Math.floor(Math.random() * directions.length);
//         const direction = directions[randomIndex];
//         // Проверяем, что target — это число (защита от undefined)
//         if (typeof direction === 'number') {
//             heroFrame.go1(direction);
//         }
//     },
// }
