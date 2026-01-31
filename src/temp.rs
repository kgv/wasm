// '/game/?make=1' // массивной решетчатой дверью
// '/game/?make=10' // дверь с замком.
// '/game/?make=25'
const Make = {

}

const Action = {
    drink() {
        console.info('Drnk', heroFrame.g.location);
        switch (heroFrame.g.location) {
            case 22: heroFrame.link0('/game/?make=10'); break;
            case 258: heroFrame.link0('/game/?make=12'); break;
        }
        heroFrame.g.goal = GOALS.TO;
    },

    make(number) {
        console.info('Mk', heroFrame.g.location);
        heroFrame.link0(`/game/?make=${number}`);
    },

    move(...directions) {
        console.info('Mv', heroFrame.g.location);
        const fresh = directions.filter(direction => {
            return !heroFrame.g.history.includes(heroFrame.g.neighbors[direction]?.id);
        });
        if (fresh.length > 0) {
            directions = fresh;
        }
        const randomIndex = Math.floor(Math.random() * directions.length);
        const direction = directions[randomIndex];
        // Проверяем, что target — это число (защита от undefined)
        if (typeof direction === 'number') {
            heroFrame.go1(direction);
        }
    },
}

// Temp
const Temp = {
    start(location) {

    },

    end(location) {

    },

    loop(location) {
        switch (make()) {
            case 1: Action.make(2); break;
            case 2: Action.make(2); break;
            case 10: Action.make(10); break;
            default: { this.move(location); }
        }
    },

    move(location) {
        switch (location) {
            case 1263: Action.move(DIRECTIONS.SOUTH); break;
            case 2: Action.move(DIRECTIONS.EAST); break;
            case 21: Action.move(DIRECTIONS.EAST); break;
            case 5: Action.move(DIRECTIONS.SOUTH); break;
            case 329: Action.move(DIRECTIONS.SOUTH); break;
            case 4: Action.move(DIRECTIONS.WEST); break;
            case 18: Action.move(DIRECTIONS.WEST); break;
            case 331: Action.move(DIRECTIONS.WEST); break;
            case 23: Action.move(DIRECTIONS.NORTH); break;
            case 24: Action.move(DIRECTIONS.WEST); break;
            case 25: Action.move(DIRECTIONS.NORTH); break;
            case 26: Action.move(DIRECTIONS.DOWN); break;
            case 28: Action.move(DIRECTIONS.NORTH); break;
            case 36: Action.move(DIRECTIONS.WEST); break;
            case 514: Action.move(DIRECTIONS.WEST); break;
            case 515: Action.move(DIRECTIONS.WEST); break;
            case 37: Action.move(DIRECTIONS.NORTH); break;
            case 330: Action.move(DIRECTIONS.NORTH); break;
            case 38: Action.move(DIRECTIONS.DOWN); break;
            case 39: Action.move(DIRECTIONS.EAST); break;
            // case 39: Action.make(1); setTimeout(() => { Action.make(2); }, timeout(100, 500)); break;
            case 40: Action.move(DIRECTIONS.EAST); break;
            case 41: Action.move(DIRECTIONS.SOUTH); break;
            case 43: Action.move(DIRECTIONS.EAST); break;
            case 50: Action.move(DIRECTIONS.EAST); break;
            case 45: Action.move(DIRECTIONS.EAST); break;
            case 51: Action.move(DIRECTIONS.NORTH); break;
            case 58: Action.move(DIRECTIONS.EAST); break;
            case 57: Action.move(DIRECTIONS.NORTH); break;
            case 60: Action.move(DIRECTIONS.WEST); break;
            case 272: Action.move(DIRECTIONS.UP); break;
            case 61: Action.move(DIRECTIONS.SOUTH); break;
            case 64: Action.move(DIRECTIONS.SOUTH); break;
            case 512: Action.move(DIRECTIONS.Up); break;
            // case 63: Action.make(10); Action.make(11); break;
            default: console.error("UndergroundBeneathTheCity.goFarm", location);
        }
    },
}

function make() {
    const link = document.querySelector('a[href^="/game/?make="]');
    if (link) {
        const href = link.getAttribute('href');
        const match = href.match(/make=(\d+)/);
        if (match) {
            const number = parseInt(match[1]);
            return number
        }
    }
}

// Underground beneath the city
const UndergroundBeneathTheCity = {
    loop() {
        switch (heroFrame.g.goal) {
            case GOALS.TO: this.start(heroFrame.g.location); break;
            case GOALS.FROM: this.end(heroFrame.g.location); break;
        }
    },

    start(location) {
        switch (location) {
            case 253: Action.move(DIRECTIONS.EAST); break;
            case 254: Action.move(DIRECTIONS.SOUTH, DIRECTIONS.EAST); break;
            case 255: Action.move(DIRECTIONS.SOUTH, DIRECTIONS.WEST, DIRECTIONS.EAST); break;
            case 256: Action.move(DIRECTIONS.NORTH, DIRECTIONS.EAST); break;
            case 257: Action.move(DIRECTIONS.NORTH, DIRECTIONS.WEST); break;
            case 258: Action.move(DIRECTIONS.NORTH); break;
            case 259: Action.move(DIRECTIONS.WEST, DIRECTIONS.EAST); break;
            case 260: Action.move(DIRECTIONS.WEST, DIRECTIONS.EAST); break;
            case 262: Action.move(DIRECTIONS.NORTH, DIRECTIONS.WEST); break;
            case 263: Action.move(DIRECTIONS.NORTH, DIRECTIONS.SOUTH, DIRECTIONS.EAST, DIRECTIONS.WEST); break;
            case 264: Action.move(DIRECTIONS.EAST); break;
            case 265: Action.move(DIRECTIONS.SOUTH, DIRECTIONS.EAST, DIRECTIONS.WEST); break;
            case 266: Action.move(DIRECTIONS.NORTH, DIRECTIONS.EAST, DIRECTIONS.WEST); break;
            case 267: Action.move(DIRECTIONS.SOUTH); break;
            case 268: Action.move(DIRECTIONS.EAST); break;
            case 269: Action.move(DIRECTIONS.EAST, DIRECTIONS.WEST); break;
            case 270: Action.move(DIRECTIONS.NORTH, DIRECTIONS.WEST); break;
            case 271: Action.move(DIRECTIONS.WEST); break;
            default: console.error("UndergroundBeneathTheCity.start", location);
        }
    },

    end(location) {
        switch (location) {
            case 250: Action.move(DIRECTIONS.SOUTH); break;
            case 251: Action.move(DIRECTIONS.SOUTH); break;
            case 252: Action.move(DIRECTIONS.SOUTH); break;
            case 253: Action.move(DIRECTIONS.EAST); break;
            case 254: Action.move(DIRECTIONS.SOUTH); break;
            case 255: Action.move(DIRECTIONS.SOUTH); break;
            case 256: Action.move(DIRECTIONS.EAST); break;
            case 257: Action.move(DIRECTIONS.SOUTH); break;
            case 258: Action.drink(); break;
            case 259: Action.move(DIRECTIONS.WEST); break;
            case 260: Action.move(DIRECTIONS.WEST); break;
            case 262: Action.move(DIRECTIONS.WEST); break;
            case 263: Action.move(DIRECTIONS.SOUTH); break;
            case 264: Action.move(DIRECTIONS.EAST); break;
            case 265: Action.move(DIRECTIONS.SOUTH); break;
            case 266: Action.move(DIRECTIONS.EAST); break;
            case 267: Action.move(DIRECTIONS.SOUTH); break;
            case 268: Action.move(DIRECTIONS.EAST); break;
            case 269: Action.move(DIRECTIONS.SOUTH); break;
            case 270: Action.move(DIRECTIONS.WEST); break;
            case 271: Action.move(DIRECTIONS.WEST); break;
            default: console.error("UndergroundBeneathTheCity.end", location);
        }
    },
}

// Old wheat fields
const OldWheatFields = {
    loop() {
        switch (heroFrame.g.goal) {
            case GOALS.TO: this.start(heroFrame.g.location); break;
            case GOALS.FROM: this.end(heroFrame.g.location); break;
        }
    },

    start(location) {
        switch (location) {
            case 22: Action.move(DIRECTIONS.SOUTH); break;
            case 21: Action.move(DIRECTIONS.EAST); break;
            case 5: Action.move(DIRECTIONS.EAST); break;
            case 3100: Action.move(DIRECTIONS.NORTH); break;
            case 333: Action.move(DIRECTIONS.NORTH); break;
            case 3101: Action.move(DIRECTIONS.NORTH); break;
            case 3102: Action.move(DIRECTIONS.NORTH); break;
            case 3103: Action.move(DIRECTIONS.NORTH); break;
            case 3104: Action.move(DIRECTIONS.NORTH); break;
            case 3000: Action.move(DIRECTIONS.NORTH); break;
            //
            case 3105: Action.move(DIRECTIONS.NORTH, DIRECTIONS.SOUTH); break;
            case 3106: Action.move(DIRECTIONS.NORTH, DIRECTIONS.SOUTH); break;
            case 3107: Action.move(DIRECTIONS.NORTH, DIRECTIONS.SOUTH); break;
            case 3108: Action.move(DIRECTIONS.NORTH, DIRECTIONS.SOUTH); break;
            case 3109: Action.move(DIRECTIONS.NORTH, DIRECTIONS.SOUTH); break;
            case 3110: Action.move(DIRECTIONS.SOUTH); break;
            default: console.error("OldWheatFields.start", location);
        }
    },

    end(location) {
        switch (location) {
            case 5: Action.move(DIRECTIONS.WEST); break;
            case 21: Action.move(DIRECTIONS.NORTH); break;
            case 22: Action.drink(); break;
            case 333: Action.move(DIRECTIONS.SOUTH); break;
            case 3000: Action.move(DIRECTIONS.SOUTH); break;
            case 3100: Action.move(DIRECTIONS.WEST); break;
            case 3101: Action.move(DIRECTIONS.SOUTH); break;
            case 3102: Action.move(DIRECTIONS.SOUTH); break;
            case 3103: Action.move(DIRECTIONS.SOUTH); break;
            case 3104: Action.move(DIRECTIONS.SOUTH); break;
            case 3105: Action.move(DIRECTIONS.SOUTH); break;
            case 3106: Action.move(DIRECTIONS.SOUTH); break;
            case 3107: Action.move(DIRECTIONS.SOUTH); break;
            case 3108: Action.move(DIRECTIONS.SOUTH); break;
            case 3109: Action.move(DIRECTIONS.SOUTH); break;
            case 3110: Action.move(DIRECTIONS.SOUTH); break;
            default: console.error("OldWheatFields.end", location);
        }
    }
};

// Dark forest
const DarkForest0 = {
    loop() {
        switch (heroFrame.g.goal) {
            case GOALS.TO: this.start(heroFrame.g.location); break;
            case GOALS.FROM: this.end(heroFrame.g.location); break;
        }
    },

    start(location) {
        switch (location) {
            case 22: Action.move(DIRECTIONS.SOUTH); break;
            case 21: Action.move(DIRECTIONS.EAST); break;
            case 5: Action.move(DIRECTIONS.SOUTH); break;
            case 329: Action.move(DIRECTIONS.SOUTH); break;
            case 4: Action.move(DIRECTIONS.SOUTH); break;
            case 1: Action.move(DIRECTIONS.SOUTH); break;
            case 3: Action.move(DIRECTIONS.SOUTH); break;
            case 66: Action.move(DIRECTIONS.SOUTH); break;
            case 298: Action.move(DIRECTIONS.NORTH, DIRECTIONS.SOUTH); break;
            case 280: Action.move(DIRECTIONS.NORTH, DIRECTIONS.SOUTH); break;
            case 281: Action.move(DIRECTIONS.NORTH, DIRECTIONS.EAST); break;
            case 283: Action.move(DIRECTIONS.WEST, DIRECTIONS.EAST); break;
            case 284: Action.move(DIRECTIONS.WEST, DIRECTIONS.EAST); break;
            case 285: Action.move(DIRECTIONS.WEST, DIRECTIONS.EAST); break;
            case 286: Action.move(DIRECTIONS.NORTH, DIRECTIONS.WEST); break;
            case 287: Action.move(DIRECTIONS.SOUTH, DIRECTIONS.EAST); break;
            case 288: Action.move(DIRECTIONS.WEST, DIRECTIONS.EAST); break;
            case 289: Action.move(DIRECTIONS.NORTH, DIRECTIONS.WEST, DIRECTIONS.EAST); break;
            case 290: Action.move(DIRECTIONS.SOUTH, DIRECTIONS.EAST); break;
            case 291: Action.move(DIRECTIONS.WEST, DIRECTIONS.EAST); break;
            case 292: Action.move(DIRECTIONS.SOUTH, DIRECTIONS.WEST); break;
            case 293: Action.move(DIRECTIONS.NORTH, DIRECTIONS.WEST); break;
            case 294: Action.move(DIRECTIONS.SOUTH, DIRECTIONS.WEST, DIRECTIONS.EAST); break;
            case 295: Action.move(DIRECTIONS.NORTH, DIRECTIONS.WEST); break;
            case 296: Action.move(DIRECTIONS.WEST, DIRECTIONS.EAST); break;
            case 297: Action.move(DIRECTIONS.EAST); break;
            default: console.error("DarkForest.start", location);
        }
    },

    end(location) {
        switch (location) {
            case 22: Action.drink(); break;
            case 21: Action.move(DIRECTIONS.NORTH); break;
            case 5: Action.move(DIRECTIONS.WEST); break;
            case 329: Action.move(DIRECTIONS.NORTH); break;
            case 4: Action.move(DIRECTIONS.NORTH); break;
            case 1: Action.move(DIRECTIONS.NORTH); break;
            case 3: Action.move(DIRECTIONS.NORTH); break;
            case 66: Action.move(DIRECTIONS.NORTH); break;
            case 298: Action.move(DIRECTIONS.NORTH); break;
            case 280: Action.move(DIRECTIONS.NORTH); break;
            case 281: Action.move(DIRECTIONS.NORTH); break;
            case 283: Action.move(DIRECTIONS.WEST); break;
            case 284: Action.move(DIRECTIONS.WEST); break;
            case 285: Action.move(DIRECTIONS.WEST); break;
            case 286: Action.move(DIRECTIONS.WEST); break;
            case 287: Action.move(DIRECTIONS.SOUTH); break;
            case 288: Action.move(DIRECTIONS.WEST); break;
            case 289: Action.move(DIRECTIONS.WEST); break;
            case 290: Action.move(DIRECTIONS.SOUTH); break;
            case 291: Action.move(DIRECTIONS.WEST); break;
            case 292: Action.move(DIRECTIONS.SOUTH); break;
            case 293: Action.move(DIRECTIONS.WEST); break;
            case 294: Action.move(DIRECTIONS.WEST); break;
            case 295: Action.move(DIRECTIONS.NORTH); break;
            case 296: Action.move(DIRECTIONS.EAST); break;
            case 297: Action.move(DIRECTIONS.EAST); break;
            default: console.error("OldWheatFields.end", location);
        }
    }
};

const DarkForest = {
    toEnd(location) {
        switch (location) {
            case 22: Action.move(DIRECTIONS.SOUTH); break;
            case 21: Action.move(DIRECTIONS.EAST); break;
            case 5: Action.move(DIRECTIONS.SOUTH); break;
            case 329: Action.move(DIRECTIONS.SOUTH); break;
            case 4: Action.move(DIRECTIONS.SOUTH); break;
            case 1: Action.move(DIRECTIONS.SOUTH); break;
            case 3: Action.move(DIRECTIONS.SOUTH); break;
            case 66: Action.move(DIRECTIONS.SOUTH); break;
            case 298: Action.move(DIRECTIONS.NORTH, DIRECTIONS.SOUTH); break;
            case 280: Action.move(DIRECTIONS.NORTH, DIRECTIONS.SOUTH); break;
            case 281: Action.move(DIRECTIONS.NORTH, DIRECTIONS.SOUTH); break;
            case 282: Action.move(DIRECTIONS.NORTH, DIRECTIONS.SOUTH); break;
            case 67: Action.move(DIRECTIONS.NORTH, DIRECTIONS.SOUTH); break;
            case 93: Action.move(DIRECTIONS.NORTH, DIRECTIONS.SOUTH); break;
            case 91: Action.move(DIRECTIONS.NORTH, DIRECTIONS.SOUTH); break;
            case 90: Action.move(DIRECTIONS.NORTH, DIRECTIONS.SOUTH); break;
            case 94: Action.move(DIRECTIONS.NORTH); break;
            // case 96: Action.move(DIRECTIONS.NORTH); break;
            default: console.error("DarkForest.goFarm", location);
        }
    },
    // toEnd(location) {
    //     switch (location) {
    //         case 22: Action.move(DIRECTIONS.SOUTH); break;
    //         case 21: Action.move(DIRECTIONS.EAST); break;
    //         case 5: Action.move(DIRECTIONS.SOUTH); break;
    //         case 329: Action.move(DIRECTIONS.SOUTH); break;
    //         case 4: Action.move(DIRECTIONS.SOUTH); break;
    //         case 1: Action.move(DIRECTIONS.SOUTH); break;
    //         case 3: Action.move(DIRECTIONS.SOUTH); break;
    //         case 66: Action.move(DIRECTIONS.SOUTH); break;
    //         default: console.error("DarkForest.toEnd", location);
    //     }
    // },

    toDrink(location) {
        switch (location) {
            case 22: Action.drink(); break;
            case 21: Action.move(DIRECTIONS.NORTH); break;
            case 5: Action.move(DIRECTIONS.WEST); break;
            case 329: Action.move(DIRECTIONS.NORTH); break;
            case 4: Action.move(DIRECTIONS.NORTH); break;
            case 1: Action.move(DIRECTIONS.NORTH); break;
            case 3: Action.move(DIRECTIONS.NORTH); break;
            //
            case 66: Action.move(DIRECTIONS.NORTH); break; case 3291: Action.move(DIRECTIONS.NORTH); break;
            case 298: Action.move(DIRECTIONS.NORTH); break;
            case 280: Action.move(DIRECTIONS.NORTH); break;
            case 281: Action.move(DIRECTIONS.NORTH); break;
            case 282: Action.move(DIRECTIONS.NORTH); break;
            case 67: Action.move(DIRECTIONS.NORTH); break;
            case 93: Action.move(DIRECTIONS.NORTH); break;
            case 91: Action.move(DIRECTIONS.NORTH); break;
            case 90: Action.move(DIRECTIONS.NORTH); break;
            case 94: Action.move(DIRECTIONS.NORTH); break;
            case 96: Action.move(DIRECTIONS.NORTH); break;
            default: console.error("OldWheatFields.toDrink", location);
        }
    }
};

// Raspberry bush
const RaspberryBush = {
    loop() {
        switch (heroFrame.g.goal) {
            case GOALS.TO: this.to(heroFrame.g.location); break;
            case GOALS.FROM: this.from(heroFrame.g.location); break;
        }
    },

    to(location) {
        switch (location) {
            case 22: Action.move(DIRECTIONS.SOUTH); break;
            case 21: Action.move(DIRECTIONS.EAST); break;
            case 5: Action.move(DIRECTIONS.SOUTH); break;
            case 329: Action.move(DIRECTIONS.SOUTH); break;
            case 4: Action.move(DIRECTIONS.SOUTH); break;
            case 1: Action.move(DIRECTIONS.SOUTH); break;
            case 3: Action.move(DIRECTIONS.SOUTH); break;
            case 66: Action.move(DIRECTIONS.SOUTH); break;
            case 298: Action.move(DIRECTIONS.SOUTH); break;
            case 280: Action.move(DIRECTIONS.SOUTH); break;
            case 281: Action.move(DIRECTIONS.SOUTH); break;
            case 282: Action.move(DIRECTIONS.SOUTH); break;
            case 67: Action.move(DIRECTIONS.WEST); break;
            case 95: Action.move(DIRECTIONS.WEST); break;
            case 162: Action.move(DIRECTIONS.SOUTH); break;
            case 174: Action.move(DIRECTIONS.SOUTH); break;
            // Loop
            case 173: Action.move(DIRECTIONS.SOUTH, DIRECTIONS.EAST); break;
            case 175: Action.move(DIRECTIONS.SOUTH, DIRECTIONS.WEST, DIRECTIONS.EAST); break;
            case 176: Action.move(DIRECTIONS.NORTH, DIRECTIONS.SOUTH, DIRECTIONS.WEST, DIRECTIONS.EAST); break;
            case 177: Action.move(DIRECTIONS.NORTH, DIRECTIONS.SOUTH, DIRECTIONS.WEST, DIRECTIONS.EAST); break;
            case 178: Action.move(DIRECTIONS.NORTH, DIRECTIONS.SOUTH, DIRECTIONS.WEST); break;
            case 179: Action.move(DIRECTIONS.SOUTH, DIRECTIONS.WEST); break;
            case 300: Action.move(DIRECTIONS.NORTH, DIRECTIONS.WEST); break;
            case 301: Action.move(DIRECTIONS.NORTH, DIRECTIONS.WEST, DIRECTIONS.EAST); break;
            case 302: Action.move(DIRECTIONS.NORTH, DIRECTIONS.WEST, DIRECTIONS.EAST); break;
            case 303: Action.move(DIRECTIONS.NORTH, DIRECTIONS.EAST); break;
            case 304: Action.move(DIRECTIONS.NORTH, DIRECTIONS.SOUTH, DIRECTIONS.EAST); break;
            case 305: Action.move(DIRECTIONS.SOUTH, DIRECTIONS.EAST); break;
            default: console.error("RaspberryBush.to", location);
        }
    },

    from(location) {
        switch (location) {
            case 22: Action.drink(); break;
            case 21: Action.move(DIRECTIONS.NORTH); break;
            case 5: Action.move(DIRECTIONS.WEST); break;
            case 329: Action.move(DIRECTIONS.NORTH); break;
            case 4: Action.move(DIRECTIONS.NORTH); break;
            case 1: Action.move(DIRECTIONS.NORTH); break;
            case 3: Action.move(DIRECTIONS.NORTH); break;
            case 66: Action.move(DIRECTIONS.NORTH); break;
            case 298: Action.move(DIRECTIONS.NORTH); break;
            case 280: Action.move(DIRECTIONS.NORTH); break;
            case 281: Action.move(DIRECTIONS.NORTH); break;
            case 282: Action.move(DIRECTIONS.NORTH); break;
            case 67: Action.move(DIRECTIONS.NORTH); break;
            case 95: Action.move(DIRECTIONS.EAST); break;
            case 162: Action.move(DIRECTIONS.EAST); break;
            case 174: Action.move(DIRECTIONS.NORTH); break;
            // Loop
            case 173: Action.move(DIRECTIONS.EAST); break;
            case 175: Action.move(DIRECTIONS.NORTH); break;
            case 176: Action.move(DIRECTIONS.NORTH); break;
            case 177: Action.move(DIRECTIONS.NORTH); break;
            case 178: Action.move(DIRECTIONS.NORTH); break;
            case 179: Action.move(DIRECTIONS.WEST); break;
            case 300: Action.move(DIRECTIONS.NORTH); break;
            case 301: Action.move(DIRECTIONS.NORTH); break;
            case 302: Action.move(DIRECTIONS.NORTH); break;
            case 303: Action.move(DIRECTIONS.NORTH); break;
            case 304: Action.move(DIRECTIONS.NORTH); break;
            case 305: Action.move(DIRECTIONS.EAST); break;
            default: console.error("RaspberryBush.from", location);
        }
    },
}

// South caves
const SouthCaves = {
    loop() {
        switch (heroFrame.g.goal) {
            case GOALS.TO: this.to(heroFrame.g.location); break;
            case GOALS.FROM: this.from(heroFrame.g.location); break;
        }
    },

    to(location) {
        switch (location) {
            case 103: Action.move(DIRECTIONS.SOUTH); break;
            // Loop
            case 97: Action.move(DIRECTIONS.WEST, DIRECTIONS.EAST); break;
            case 98: Action.move(DIRECTIONS.WEST); break;
            case 99: Action.move(DIRECTIONS.WEST); break;
            case 101: Action.move(DIRECTIONS.WEST, DIRECTIONS.EAST); break;
            case 102: Action.move(DIRECTIONS.WEST, DIRECTIONS.EAST); break;
            case 104: Action.move(DIRECTIONS.SOUTH, DIRECTIONS.EAST); break;
            case 105: Action.move(DIRECTIONS.NORTH); break;
            case 185: Action.move(DIRECTIONS.NORTH, DIRECTIONS.EAST); break;
            default: console.error("SouthCaves.to", location);
        }
    },

    from(location) {
        switch (location) {
            case 103: Action.drink(); break;
            // Loop
            case 97: Action.move(DIRECTIONS.WEST); break;
            case 98: Action.move(DIRECTIONS.WEST); break;
            case 99: Action.move(DIRECTIONS.WEST); break;
            case 101: Action.move(DIRECTIONS.WEST); break;
            case 102: Action.move(DIRECTIONS.NORTH); break;
            case 104: Action.move(DIRECTIONS.EAST); break;
            case 105: Action.move(DIRECTIONS.NORTH); break;
            case 185: Action.move(DIRECTIONS.NORTH); break;
            default: console.error("SouthCaves.from", location);
        }
    },
}

// Направления
const DIRECTIONS = {
    UP: 0,
    DOWN: 1,
    NORTH: 2,
    SOUTH: 3,
    WEST: 4,
    EAST: 5,
};

// Цели (долгосрочные состояния)
const GOALS = {
    TO: 'TO',
    FROM: 'FROM',
};


    logic() {
        const isAction = !!heroFrame.g.make.actions.first;
        const isDirection = !!heroFrame.g.make.directions.up || !!heroFrame.g.make.directions.down || !!heroFrame.g.make.directions.north || !!heroFrame.g.make.directions.south || !!heroFrame.g.make.directions.west || !!heroFrame.g.make.directions.east;
        if (heroFrame.g.hp.relative < SETTINGS.HP.MIN) {
            heroFrame.g.goal = GOALS.FROM;
        }
        switch (true) {
            case (!isAction && isDirection): {
                if (heroFrame.g.items > 0) {
                    // Если есть предметы (вычитая треш)
                    heroFrame.go1(6);
                } else {
                    let number = make();
                    if (number) {
                        // Make
                        alert(number);
                    } else {
                        // Перемещаемся
                        this.go();
                    }
                }
                break;
            }
            case (isAction && isDirection): {
                // Есть цель
                if (heroFrame.g.goal === GOALS.TO) {
                    this.target();
                } else {
                    this.go();
                }
                break;
            }
            case (isAction && !isDirection): {
                this.combat();
                break;
            }
            case (!isAction && !isDirection): {
                if (!this.pickup()) {
                    this.idle();
                }
                break;
            }
        }
    },

    idle() {
        console.info('Idl');
        heroFrame.link0('/game/');
    },

    pickup() {
        const BLACK = [
            // Призрачный камень (горячий/теплый/остывший)
            '/img-item/1f1665490c3581.jpg', // Сугроб
            '/img-item/3642c2f17f3539.jpg', // Сухое дерево
            '/img-item/7744346ca83547.jpg', // Костер (маленький)
        ];
        let trash = 0;
        // Ищем все ссылки на поднятие
        const pickups = document.querySelectorAll('a[href*="pickup.php"]');
        for (const pickup of pickups) {
            // Находим строку таблицы, где лежит ссылка
            const row = pickup.closest('tr');
            // Получаем src картинки
            const image = row?.querySelector('img.itm');
            // Если картинка есть и её нет в списке мусора
            if (!BLACK.includes(image.getAttribute('src'))) {
                console.info('Pckp', image.src);
                heroFrame.link0(pickup.getAttribute('href'));
                return true;
            } else {
                console.info('Pckp skip', image.src);
                trash += 1;
            }
        }
        heroFrame.g.items = -trash;
        return false;
    },

    // <nobr><a href="/info/?mid=473630681" target="_blank" class="r">Кот</a> [<a href="/game-npc/?mid=473630681">почесать</a>]<br></nobr>
    target() {
        const WHITE = [
            'Болотный гоблин',
            // 'Большая крыса',
            'Волк',
            'Летучая мышь',
            'Медведь',
            // 'Огромная крыса',
            'Орк',
        ];
        if (heroFrame.g.goal === GOALS.TO) {
            const target = document.querySelector('a.r')?.innerText?.trim();
            if (target && WHITE.includes(target)) {
                console.info('Target', target);
                heroFrame.go1(7);
            } else {
                console.info('Target skip', target);
                heroFrame.g.make.actions.first = '';
            }
        }
    },

    // 'Бешеная собака'
    combat() {
        const WHITE = [
            'Болотный гоблин',
            'Большая крыса',
            'Волк',
            'Летучая мышь',
            'Медведь',
            'Огромная крыса',
            'Орк',
        ];
        console.info('Cmbt');
        if (heroFrame.g.hp.relative < 25) {
            console.info('HP < 25');
            return;
        }
        const target = document.querySelector('a.r')?.innerText?.trim();
        if (target && !WHITE.includes(target)) {
            alert(target);
            return;
        }
        heroFrame.go1(7);
        // const run = document.querySelector('a[href*="make=3"]');
        // if (target?.innerText === 'Орк') {
        //     const steal = document.querySelector('a[href*="make=4"]');
        //     if (!!heroFrame.g.steal) {
        //         heroFrame.link0(steal?.href);
        //         heroFrame.g.steal = false;
        //         // sleep(10000);
        //     }
        // }
    },

    go() {
        // OldWheatFields.loop(heroFrame.g.location);
        // DarkForest0.loop(heroFrame.g.location);
        RaspberryBush.loop(heroFrame.g.location);
    },