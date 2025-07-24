let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let secondCanvas = document.getElementById('nextElement');
let ctx2 = nextElement.getContext('2d');

let scr = document.getElementById('score');

let btn = document.getElementById('start');
let score = 0;

let bgc = document.getElementById('ColorInputBG');

let check = document.getElementById('checkDifficult');
let inpt = document.getElementById('inputSpeed');
let grb = document.getElementById('checkGrid');
let pixel = 25;
let lines = 0;
let field = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

]
let time = inpt.value;
var elements = [
    [
        [0, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 0]
    ],
    [
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 1, 1, 0],
        [0, 1, 0, 0]
    ],
    [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0]
    ],
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
    ],
    [
        [0, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 1, 0]
    ],
    [
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 1, 1, 0]
    ],
    [
        [0, 0, 0, 0],
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0]
    ],
]

let elementBuffer = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]
let x = 7;
let y = 0;
let colors = [
]
let elementColor = '#800080';
let colorTable = new Array(28);
let lose = false;
let r = getRandomInt(0, elements.length);
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

for (let i = 0; i < 28; i++) {
    colorTable[i] = new Array(14);
}

 function addDifficult() {
    console.log(check);
    if (check.checked) { 
        time = time - 10;
     }
}
function generateColor() {
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            colorTable[i][j] = "#E0FFFF";
        }
    }
    for (let i = 0; i < 7; i++) {
        colorInput = document.getElementById('ColorInput' + i);
        console.log(colorInput);
        colors[i] = colorInput.value;
    }
}

function isPossibly(x, y, elementBuffer) {
    for (let i = 0; i < elementBuffer.length; i++) {
        for (let j = 0; j < elementBuffer[i].length; j++) {
            if (((y + i) < field.length) && ((x + j) < field[0].length)
                && ((x + j) >= 0) && (y + i) >= 0) {
                if (field[y + i][x + j] === 1 && elementBuffer[i][j] === 1) {
                    return false;
                }
            } else if (elementBuffer[i][j] === 1) {
                return false;
            }
        }
    }
    return true;
}

function movingDown() {
    if (isPossibly(x, y + 1, elementBuffer)) {
        y++;
    } else stayElement();
}

function movingRight() {
    if (isPossibly(x + 1, y, elementBuffer)) {
        x++;
    }
}

function movingLeft() {
    if (isPossibly(x - 1, y, elementBuffer)) {
        x--;
    }
}

function rotateRight() {
    let buffer = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    for (let i = 0; i < elementBuffer.length; i++) {
        for (let j = 0; j < elementBuffer[i].length; j++) {
            buffer[i][j] = elementBuffer[elementBuffer[i].length - j - 1][i];
        }
    }
    if (isPossibly(x, y, buffer)) {
        elementBuffer = buffer;
    } else if (isPossibly(x + 1, y, buffer)) {
        elementBuffer = buffer;
        x++;
    } else if (isPossibly(x - 1, y, buffer)) {
        elementBuffer = buffer;
        x--;
    }
}

function rotateLeft() {
    let buffer = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    for (let i = 0; i < elementBuffer.length; i++) {
        for (let j = 0; j < elementBuffer[i].length; j++) {
            buffer[elementBuffer[i].length - j - 1][i] = elementBuffer[i][j];
        }
    }
    if (isPossibly(x, y, buffer)) {
        elementBuffer = buffer;
    } else if (isPossibly(x + 1, y, buffer)) {
        elementBuffer = buffer;
        x++;
    } else if (isPossibly(x - 1, y, buffer)) {
        elementBuffer = buffer;
        x--;
    } else if (isPossibly(x + 2, y, buffer)) {
        elementBuffer = buffer;
        x += 2;
    } else if (isPossibly(x - 2, y, buffer)) {
        elementBuffer = buffer;
        x -= 2;
    }
}


function stayElement() {
    let f = true;
    let s = 0;
    for (let i = 0; i < elementBuffer.length; i++) {
        for (let j = 0; j < elementBuffer[i].length; j++) {
            if (((y + i) < field.length) && ((x + j) < field[0].length)
                && ((x + j) >= 0) && ((y + i) >= 0) && elementBuffer[i][j] === 1) {
                field[y + i][x + j] = elementBuffer[i][j];
                colorTable[y + i][x + j] = elementColor;

            }
        }
    }

    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            if (field[i][j] === 0)
                f = false;
        }
        if (f) {
            destroyLine(i);
            s++;
            addDifficult();
        }
        f = true;
    }
    newElement();
    switch (s) {
        case 1: score += 100;
            break;
        case 2: score += 300;
            break;
        case 3: score += 700;
            break;
        case 4: score += 1500;
            break;
    }
    lines += s;
    scr.textContent = 'Ваши очки: ' + score + '\r' + "Уничтоженно линий: " + lines;
}

function destroyLine(number) {
    console.log('d');
    for (let i = number; i > 0; i--) {
        field[i] = field[i - 1];
        colorTable[i] = colorTable[i - 1];
    }
    field[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    colorTable[0] = ["#E0FFFF", "#E0FFFF", "#E0FFFF", "#E0FFFF", "#E0FFFF",
    "#E0FFFF", "#E0FFFF", "#E0FFFF", "#E0FFFF", "#E0FFFF", "#E0FFFF", "#E0FFFF",
    "#E0FFFF", "#E0FFFF"];

}

function newElement() {
    x = 5;
    y = 0;
    let f = false;
    for (let i = 0; i < elements[r].length; i++) {
        for (let j = 0; j < elements[r][i].length; j++) {
            if (isPossibly(x, y, elements[r])) {
                elementBuffer[i][j] = elements[r][i][j];
                elementColor = colors[r];
            } else f = true;
        }
    }
    if (f) {
        lose = true;

        elementBuffer = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    }
    r = getRandomInt(0, elements.length);
    secondDraw();
    secondGrid();
}

function drawBlock(y, x, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x * pixel, y * pixel, pixel, pixel);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(x * pixel + 6, y * pixel + 6, (pixel - 12), (pixel - 12));
    ctx.fill();
}

function elementDraw() {
    for (let i = 0; i < elementBuffer.length; i++) {
        for (let j = 0; j < elementBuffer[i].length; j++) {
            if (elementBuffer[i][j] === 1) {
                drawBlock(y + i, x + j, elementColor);
            }
        }
    }
}

function grid() {
    ctx.strokeStyle = "#000";
    for (let i = 0; i < field.length; i++) {
        ctx.beginPath();
        ctx.moveTo(0, pixel * i);
        ctx.lineTo(400, pixel * i);
        ctx.stroke();
    }
    for (let i = 0; i < field[0].length; i++) {
        ctx.beginPath();
        ctx.moveTo(pixel * i, 0);
        ctx.lineTo(pixel * i, 700);
        ctx.stroke();
    }
}

function fieldDraw() {
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            if (field[i][j] === 1) {
                drawBlock(i, j, colorTable[i][j]);
            }
        }
    }
}

function draw() {
    ctx.fillStyle = bgc.value;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (!lose) {
        fieldDraw();
        elementDraw();
        if (grb.checked){
            grid();
        }
    } else {
        ctx.fillStyle = "#00F";
        ctx.strokeStyle = "#F00";
        ctx.font = "italic 38pt Arial";
        ctx.fillText("Вы проиграли", 0, 100);
    }
}

function update() {
    movingDown();
    draw();
}

function secondGrid() {
    ctx2.fillStyle = "#00F";
    for (let i = 0; i < 4; i++) {
        ctx2.beginPath();
        ctx2.moveTo(0, pixel * i);
        ctx2.lineTo(100, pixel * i);
        ctx2.stroke();
    }
    for (let i = 0; i < 4; i++) {
        ctx2.beginPath();
        ctx2.moveTo(pixel * i, 0);
        ctx2.lineTo(pixel * i, 100);
        ctx2.stroke();
    }
}

function secondDraw() {
    ctx2.fillStyle = bgc.value;
    ctx2.fillRect(0, 0, nextElement.width, nextElement.height);
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (elements[r][j][i]) {
                ctx2.beginPath();
                ctx2.fillStyle = colors[r];
                ctx2.fillRect(i * pixel, j * pixel, pixel, pixel);
                ctx2.fill();
                ctx2.beginPath();
                ctx2.fillStyle = "rgb(0,0,0)";
                ctx2.fillRect(i * pixel + 6, j * pixel + 6, (pixel - 12), (pixel - 12));
                ctx2.fill();
            }
        }
    }
}
function eventList(e) {
    switch (e.code) {
        case 'KeyS': movingDown();
            break;
        case 'ArrowDown': movingDown();
            break;
        case 'KeyD': movingRight();
            break;
        case 'ArrowRight': movingRight();
            break;
        case 'KeyA': movingLeft();
            break;
        case 'ArrowLeft': movingLeft();
            break;
        case 'KeyE': rotateRight();
            break;
        case 'KeyW': rotateRight();
            break;
        case 'ArrowUp': rotateRight();
            break;
        case 'KeyQ': rotateLeft();
            break;
        case 'KeyR': newGame();
            break;
        case 'Enter': newGame();
            break;
    }
    draw();
}
let timer;
document.addEventListener('keydown', eventList);
function newGame() {
    clearTimeout(timer);
    generateColor();
    score = 0;
    lines = 0;
    scr.textContent = 'Ваши очки: ' + score + '\r' + 'Уничтоженно линий: ' + lines  ;
    field = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    ]
    timer = setTimeout(function tick(){
        update();
        timer = setTimeout(tick, time);
    }, time);
    lose = false;
    newElement();
    draw();
}

draw();

document.addEventListener('click', function (e) {
    if (e.target == btn) {
        time = inpt.value;
        ctx.fillStyle = "rgb(0,0,0)";
        newGame();
    }

});
newGame();