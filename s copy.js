// ==UserScript==
// @name         Skazanie
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Сказание
// @author       You
// @match        http://*.bbgam.com/*
// @match        http://*.skazanie.com/*
// @grant        unsafeWindow
// @grant        GM_addStyle
// ==/UserScript==
/* global bottomFrame, gameFrame, heroFrame, mapFrame, topFrame */

Object.defineProperty(window, 'bottomFrame', {
    get: function () {
        return unsafeWindow.top.frames.bgrdown;
    }
});

Object.defineProperty(window, 'chatFrame', {
    get: function () {
        return unsafeWindow.top.frames.chat;
    }
});

Object.defineProperty(window, 'gameFrame', {
    get: function () {
        return unsafeWindow.top.frames.game;
    }
});

Object.defineProperty(window, 'heroFrame', {
    get: function () {
        return unsafeWindow.top.frames.hero;
    }
});

Object.defineProperty(window, 'mapFrame', {
    get: function () {
        return unsafeWindow.top.frames.gamemap;
    }
});

Object.defineProperty(window, 'topFrame', {
    get: function () {
        return unsafeWindow.top.frames.menu;
    }
});

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

// // Действия (краткосрочные состояния)
// const ACTIONS = {
//     MOVE: 'MOVE',
//     SEARCH: 'SEARCH',
// };

// Chat
const Chat = {
    run() {
        console.debug('Chat');
        this.hook();
    },

    hook() {
        // Инициализируем наши переменные
        unsafeWindow.g = {
            weight: false,
        };
        // Сохраняем оригинальные функции
        const original = {
            log1: unsafeWindow.log1,
        };
        unsafeWindow.log1 = function (message) {
            console.log(message);
            if (typeof message === 'string') {
                if (message.includes('слишком тяжелые вещи')) {
                    console.warn('Перегруз!');
                    if (unsafeWindow.g) {
                        unsafeWindow.g.weight = true;
                    }
                }
            }
            // Вызываем оригинальную функцию
            return original.log1.apply(this, arguments);
        }
    },
}

// Hero
const Hero = {
    run() {
        console.debug('Hero');
        this.hook();
    },

    hook() {
        // Инициализируем наши переменные
        unsafeWindow.g = {
            goal: GOALS.TO,
            captcha: false,
            hp: { absolute: 0, relative: 0 },
            mp: { absolute: 0, relative: 0 },
            level: 0,
            experience: 0,
            // sx4tn
            make: {
                directions: {
                    up: '',
                    down: '',
                    north: '',
                    south: '',
                    west: '',
                    east: '',
                },
                actions: {
                    first: '', // sx4tn 1 7 make=1&r=33144b7ed3
                    second: '', // sx4tn 1 8 make=2&spl=10&r=33144b7ed3
                },
            },
            // sx1tn
            do: {
                search: '', // sx1tn 1 6 Object { "/game-items/search.php?597159": undefined }
                pickup: '', // sx1tn 1 7 Object { "/game-items/pickup.php?rrc": "26418", rc: "db0105c", liid: "119525102" }
            },
            items: 0,
            location: 0,
            // Добавляем историю посещений (храним последние 10 ID)
            history: [],
            // Здесь будем хранить соседей: { 2: "280", 3: "282" } (Направление: ID локации)
            neighbors: {},
            steal: true,
            buffs: '',
        };
        // Сохраняем оригинальные функции
        const original = {
            gcl1: unsafeWindow.gcl1,
            i5: unsafeWindow.i5,
            i7: unsafeWindow.i7,
            minimap: unsafeWindow.minimap,
            rauto: unsafeWindow.rauto,
            sp5i: unsafeWindow.sp5i,
            sx1tn: unsafeWindow.sx1tn,
            sx4tn: unsafeWindow.sx4tn,
            xarrows: unsafeWindow.xarrows,
        };
        // Подменяем функции
        // unsafeWindow.rauto = function (t) {
        //     // Логируем
        //     console.log("rauto", t);
        //     // Сохраняем значения в наши переменные
        //     //
        //     // Вызываем оригинальную функцию, чтобы обновилась картинка в игре
        //     return original.rauto.apply(this, arguments);
        // };
        unsafeWindow.gcl1 = function () {
            // Логируем
            console.debug("gcl1");
            // Удаляем значения в наши переменные
            unsafeWindow.g.make = {
                directions: {
                    up: '',
                    down: '',
                    north: '',
                    south: '',
                    west: '',
                    east: '',
                },
                actions: {
                    first: '',
                    second: '',
                },
            };
            unsafeWindow.g.do = {
                search: '',
                pickup: '',
            };
            unsafeWindow.g.neighbors = {};
            // Вызываем оригинальную функцию, чтобы обновилась картинка в игре
            return original.gcl1.apply(this, arguments);
        };
        unsafeWindow.i5 = function (xn, l) {
            // Логируем
            console.debug("i5", xn, l);
            // Сохраняем значения в наши переменные
            unsafeWindow.g.level = l;
            unsafeWindow.g.experience = xn;
            // Вызываем оригинальную функцию, чтобы обновилась картинка в игре
            return original.i5.apply(this, arguments);
        };
        unsafeWindow.i7 = function (h, e, hn, en, x, xn) {
            // Логируем
            console.debug("i7", h, e, hn, en, x, xn);
            // Сохраняем значения в наши переменные
            unsafeWindow.g.hp = { absolute: hn, relative: h };
            unsafeWindow.g.mp = { absolute: en, relative: e };
            // Вызываем оригинальную функцию, чтобы обновилась картинка в игре
            return original.i7.apply(this, arguments);
        };
        unsafeWindow.minimap = function (minimap, location) {
            // Логируем
            console.debug("minimap", minimap, location);
            // Сохраняем значения в наши переменные
            unsafeWindow.g.location = location;
            // History
            let history = unsafeWindow.g.history;
            if (history[history.length - 1] != location) {
                history.push(location);
            }
            if (history.length > 5) {
                history.shift();
            }
            unsafeWindow.g.history = history;
            // Neighbors
            for (let id in minimap) {
                let [x, y, mask] = minimap[id];
                // Преобразуем ID в число
                id = parseInt(id);
                // Определяем направление относительно нас (0,0)
                if (x === 0 && y === -1) unsafeWindow.g.neighbors[DIRECTIONS.NORTH] = { id: id, bit: (mask & 4) != 0 };
                if (x === 0 && y === 1) unsafeWindow.g.neighbors[DIRECTIONS.SOUTH] = { id: id, bit: (mask & 8) != 0 };
                if (x === -1 && y === 0) unsafeWindow.g.neighbors[DIRECTIONS.WEST] = { id: id, bit: (mask & 1) != 0 };
                if (x === 1 && y === 0) unsafeWindow.g.neighbors[DIRECTIONS.EAST] = { id: id, bit: (mask & 2) != 0 };
            }
            // Вызываем оригинальную функцию, чтобы обновилась картинка в игре
            return original.minimap.apply(this, arguments);
        };
        unsafeWindow.sp5i = function (t) {
            // Логируем
            console.log("sp5i", t);
            // alert(t);
            unsafeWindow.g.buffs = t;
            // Сохраняем значения в наши переменные
            // unsafeWindow.g.level = l;
            // Вызываем оригинальную функцию, чтобы обновилась картинка в игре
            return original.sp5i.apply(this, arguments);
        };
        unsafeWindow.sx1tn = function (y, n, l) {
            let name;
            switch (n) {
                case 6: name = "search"; break;
                case 7: name = "pickup"; break;
            };
            // Логируем
            console.debug("sx1tn", name, y, n, l);
            // Сохраняем значения в наши переменные
            // 1 7 /game-items/pickup.php?rrc=8270&rc=edf49d0&liid=119529861
            switch (n) {
                // /game-items/pickup.php?rrc=16384&rc=2513c9e&liid=119538040&nrc=67522
                case 6: {
                    console.debug("search", y, n, l);
                    unsafeWindow.g.do.search = l;
                    break;
                }
                // case 6: switch (unsafeWindow.g.location) {
                //     case 280: { }; break;
                //     default: unsafeWindow.g.make.actions.search = l; break;
                // }
                case 7: {
                    console.debug("pickup", y, n, l);
                    unsafeWindow.g.do.pickup = l;
                    break;
                }
            };
            // Вызываем оригинальную функцию, чтобы обновилась картинка в игре
            return original.sx1tn.apply(this, arguments);
        };
        unsafeWindow.sx4tn = function (y, n, l) {
            // Логируем
            console.debug("sx4tn", y, n, l);
            // Сохраняем значения в наши переменные
            switch (n) {
                // Directions
                case DIRECTIONS.UP: unsafeWindow.g.make.directions.up = l; break;
                case DIRECTIONS.DOWN: unsafeWindow.g.make.directions.down = l; break;
                case DIRECTIONS.NORTH: unsafeWindow.g.make.directions.north = l; break;
                case DIRECTIONS.SOUTH: unsafeWindow.g.make.directions.south = l; break;
                case DIRECTIONS.WEST: unsafeWindow.g.make.directions.west = l; break;
                case DIRECTIONS.EAST: unsafeWindow.g.make.directions.east = l; break;
                // Actions
                case 7: unsafeWindow.g.make.actions.first = l; break; // Attack, Physical
                case 8: unsafeWindow.g.make.actions.second = l; break; // Magical
            };
            // Вызываем оригинальную функцию, чтобы обновилась картинка в игре
            return original.sx4tn.apply(this, arguments);
        };
        unsafeWindow.xarrows = function (items, red1, red2) {
            // red1 - сколько активных sx4tn
            // Логируем
            console.debug("xarrows", items, red1, red2);
            // Сохраняем значения в наши переменные
            if (unsafeWindow.g.items < 0) {
                items += unsafeWindow.g.items;
            }
            unsafeWindow.g.items = items;
            // Вызываем оригинальную функцию, чтобы обновилась картинка в игре
            return original.xarrows.apply(this, arguments);
        };
    }
};

GM_addStyle(`
    #BottomUi, #TopUi {
        position: absolute; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.9); color: #fff; z-index: 9999;
        display: flex; align-items: center; justify-content: space-around;
        font-family: Consolas, monospace; font-size: 11px;
        border-bottom: 1px solid #444; box-sizing: border-box;
    }

    #TopUi {
        pointer-events: none;
    }

    #BottomUi span, #TopUi span { 
        font-weight: bold; 
    }

    .c-hp { color: #ff5555; }
    .c-mp { color: #55aaff; }
    .c-goal { color: #ffff55; }
    .c-action { color: #ff55ff; }
    .c-location { color: #55ffff; }
`);

// UI
const Ui = {
    run() {
        this.top();
        this.hero();
        this.bottom();
    },

    bottom() {
        // Создаем элемент, если его нет
        const id = 'BottomUi';
        let element = bottomFrame.document.getElementById(id);
        if (!element) {
            element = bottomFrame.document.createElement('div');
            element.id = id;
            bottomFrame.document.body.appendChild(element);
            // Скрываем всё остальное в меню, если нужно
            // menuDoc.body.style.overflow = 'hidden'; 
        }
        // Обновляем HTML
        element.innerHTML = `
            <div>Bffs: <span class="c-goal">${heroFrame.g.buffs}</span></div>
        `;
    },

    top() {
        // Создаем элемент, если его нет
        const id = 'TopUi';
        let element = topFrame.document.getElementById(id);
        if (!element) {
            element = topFrame.document.createElement('div');
            element.id = id;
            topFrame.document.body.appendChild(element);
            // Скрываем всё остальное в меню, если нужно
            // menuDoc.body.style.overflow = 'hidden'; 
        }
        // Обновляем HTML
        element.innerHTML = `
            <div>Gl: <span class="c-goal">${heroFrame.g.goal}</span></div>
            <div>Hl: <span class="c-hp">${heroFrame.g.hp.absolute}(${heroFrame.g.hp.relative}/${SETTINGS.HP.MIN})</span></div>
            <div>Mn: <span class="c-mp">${heroFrame.g.mp.absolute}(${heroFrame.g.mp.relative})</span></div>
            <div>Lvl: <span>${heroFrame.g.level}</span></div>
            <div>Exprnc: <span>${heroFrame.g.experience}</span></div>
            <div>Lctn: <span>${heroFrame.g.location}</span></div>
            <div>Itms: ${heroFrame.g.items}</div>
        `;
    },

    hero() {
        let id = 'LeftUI';
        let element = heroFrame.document.getElementById(id);
        if (!element) {
            element = heroFrame.document.createElement('div');
            element.id = id;
            // Стили
            element.style.position = 'fixed';
            element.style.top = '0px';
            element.style.right = '0px';
            element.style.padding = '25px';
            element.style.width = '125px';
            element.style.height = '100%';
            element.style.background = 'rgba(0, 0, 0, 0.9)';
            element.style.color = '#fff';
            element.style.zIndex = '9999';
            element.style.borderRadius = '5px';
            element.style.fontSize = '12px';
            element.style.pointerEvents = 'none'; // Чтобы клики проходили сквозь панель (если она мешает)
            // Добавляем в body фрейма hero
            heroFrame.document.body.appendChild(element);
        }
        element.innerHTML = `
            <hr>
            Action: ${!!heroFrame.g.make.actions.first}<br>
            <hr>
            Direction: ${!!heroFrame.g.make.directions.up || !!heroFrame.g.make.directions.down || !!heroFrame.g.make.directions.north || !!heroFrame.g.make.directions.south || !!heroFrame.g.make.directions.west || !!heroFrame.g.make.directions.east}<br>
            <hr>
            Search: ${!!heroFrame.g.do.search}<br>
            Pickup: ${!!heroFrame.g.do.pickup}<br>
            <hr>
            North: ${displayNeighbor(heroFrame.g.neighbors[DIRECTIONS.NORTH])}<br>
            South: ${displayNeighbor(heroFrame.g.neighbors[DIRECTIONS.SOUTH])}<br>
            West: ${displayNeighbor(heroFrame.g.neighbors[DIRECTIONS.WEST])}<br>
            East: ${displayNeighbor(heroFrame.g.neighbors[DIRECTIONS.EAST])}<br>
            <hr>
            History: ${heroFrame.g.history.join("-")}<br>
        `;
        // Steal: ${heroFrame.g.steal}<br>
        // Up: ${!!heroFrame.g.make.directions.up}<br>
        // Down: ${!!heroFrame.g.make.directions.down}<br>
        // North: ${!!heroFrame.g.make.directions.north}<br>
        // South: ${!!heroFrame.g.make.directions.south}<br>
        // West: ${!!heroFrame.g.make.directions.west}<br>
        // East: ${!!heroFrame.g.make.directions.east}<br>

        function displayNeighbor(neighbor) {
            if (neighbor) {
                return `${neighbor.id}, ${neighbor.bit}`;
            }
        }
    }
};

const Game = {
    run() {
        console.debug('Game');
        setInterval(() => this.loop(), 100);
    },

    loop() {
        // Ready
        if (!this.ready()) return;
        // Captcha
        if (this.captcha()) return;
        // UI
        Ui.run();
        this.logic();
    },

    ready() {
        // console.debug('Ready', heroFrame.window.ln0);
        return heroFrame.window.ln0 === 0;
    },

    captcha() {
        // Ищем форму, которая отправляет данные на robot-test.php
        const element = document.querySelector('form[action*="robot-test.php"]');
        if (element) {
            if (!heroFrame.g.captcha) {
                console.error('CAPTCHA');
                // // Ищем блок с картинкой капчи
                // const image = document.querySelector('div[style*="robot-img.php"]');
                heroFrame.g.captcha = true;
                alert('CAPTCHA');
                // // Визуальное оповещение (красный фон на всё окно)
                // document.body.style.border = "10px solid red";
                // document.body.style.backgroundColor = "#ffcccc";
            }
            // Звуковое оповещение (бип)
            // let audio = new Audio('https://actions.google.com/sounds/v1/alarms/beep_short.ogg');
            // audio.play();
        } else {
            heroFrame.g.captcha = false;
        }
        return heroFrame.g.captcha;
    },

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
};

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

// Settings
const SETTINGS = {
    LOCATION: OldWheatFields,
    HP: { MIN: 50, MAX: 100 },
    MP: { MIN: 50, MAX: 100 },
    TIMEOUT: { MIN: 100, MAX: 1000 },
};

(function () {
    'use strict';

    // console.log(`window.name: ${window.name}`);

    if (window.name == 'hero') {
        Hero.run();
    }
    if (window.name == 'chat') {
        Chat.run();
    }
    if (window.name == 'game') {
        Game.run();
    }
})();

function sleep(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
};

function timeout(min, max) {
    const start = min || SETTINGS.TIMEOUT.MIN;
    const end = max || SETTINGS.TIMEOUT.MAX;
    return Math.floor(Math.random() * (end - start + 1) + start);
};

// function parseParameters(query) {
//     let map = {};
//     var pairs = query.split('&');
//     for (var i = 0; i < pairs.length; i++) {
//         var pair = pairs[i].split('=');
//         map[pair[0]] = pair[1];
//     }
//     return map;
// }