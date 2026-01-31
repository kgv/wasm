use serde::{Deserialize, Deserializer, Serialize};
use std::{collections::HashMap, fmt::Display, hash::Hash, str::FromStr};

#[derive(Debug, Default, Deserialize, Serialize)]
#[serde(default)]
pub(crate) struct Game {
    // sx1tn
    pub(crate) search: Option<Direction>,
    pub(crate) pickup: Option<Direction>,
    // sx4tn
    pub(crate) up: Option<Direction>,
    pub(crate) down: Option<Direction>,
    pub(crate) north: Option<Direction>,
    pub(crate) south: Option<Direction>,
    pub(crate) west: Option<Direction>,
    pub(crate) east: Option<Direction>,
    pub(crate) first: Option<Direction>,
    pub(crate) second: Option<Direction>,
    // minimap
    #[serde(flatten)]
    pub(crate) map: Map,
}

/// Map
#[derive(Debug, Default, Deserialize, Serialize)]
pub(crate) struct Map {
    #[serde(default)]
    pub(crate) history: Vec<u64>,
    #[serde(default, deserialize_with = "map_key_from_str")]
    pub(crate) minimap: HashMap<u64, Tile>,
}

impl Map {
    pub(crate) fn north(&self) -> Option<(&u64, &Tile)> {
        self.minimap
            .iter()
            .find(|&(_, tile)| tile.dx == 0 && tile.dy == -1)
    }

    pub(crate) fn south(&self) -> Option<(&u64, &Tile)> {
        self.minimap
            .iter()
            .find(|&(_, tile)| tile.dx == 0 && tile.dy == 1)
    }

    pub(crate) fn west(&self) -> Option<(&u64, &Tile)> {
        self.minimap
            .iter()
            .find(|&(_, tile)| tile.dx == -1 && tile.dy == 0)
    }

    pub(crate) fn east(&self) -> Option<(&u64, &Tile)> {
        self.minimap
            .iter()
            .find(|&(_, tile)| tile.dx == 1 && tile.dy == 0)
    }

    pub(crate) fn neighbors(&self) -> impl Iterator<Item = (&u64, &Tile)> {
        self.minimap
            .iter()
            .filter(|&(_, tile)| (tile.dx.abs() + tile.dy.abs()) == 1)
    }
}

#[derive(Debug, Deserialize, Serialize)]
#[serde(from = "(i8, i8, u8)")]
pub(crate) struct Tile {
    dx: i8,
    dy: i8,
    mask: u8,
}

// if (x === 0 && y === -1) unsafeWindow.g.neighbors[DIRECTIONS.NORTH] = { id: id, bit: (mask & 4) != 0 };
// if (x === 0 && y === 1) unsafeWindow.g.neighbors[DIRECTIONS.SOUTH] = { id: id, bit: (mask & 8) != 0 };
// if (x === -1 && y === 0) unsafeWindow.g.neighbors[DIRECTIONS.WEST] = { id: id, bit: (mask & 1) != 0 };
// if (x === 1 && y === 0) unsafeWindow.g.neighbors[DIRECTIONS.EAST] = { id: id, bit: (mask & 2) != 0 };
// impl Tile {
//     fn current(&self) -> Option<()> {
//         self
//     }
// }

impl From<(i8, i8, u8)> for Tile {
    fn from((dx, dy, mask): (i8, i8, u8)) -> Self {
        Self { dx, dy, mask }
    }
}

// #[derive(Debug, Deserialize, Eq, Hash, PartialEq, Serialize)]
// #[serde(transparent)]
// pub(crate) struct Key(#[serde(deserialize_with = "from_str")] u64);

#[derive(Debug, Deserialize, Serialize)]
pub(crate) struct Direction {
    y: u8,
    n: u8,
    l: String,
}

fn map_key_from_str<'de, D, K, V>(deserializer: D) -> Result<HashMap<K, V>, D::Error>
where
    D: Deserializer<'de>,
    K: Eq + Hash + FromStr,
    K::Err: Display,
    V: Deserialize<'de>,
{
    let string_map = <HashMap<String, V>>::deserialize(deserializer)?;
    let mut map = HashMap::with_capacity(string_map.len());
    for (string, value) in string_map {
        let key = K::from_str(&string).map_err(serde::de::Error::custom)?;
        map.insert(key, value);
    }
    Ok(map)
}

// fn from_str<'de, T, D>(deserializer: D) -> Result<T, D::Error>
// where
//     T: FromStr,
//     T::Err: Display,
//     D: Deserializer<'de>,
// {
//     let string = String::deserialize(deserializer)?;
//     T::from_str(&string).map_err(serde::de::Error::custom)
// }
