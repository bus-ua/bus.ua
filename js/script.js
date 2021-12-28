const opens = document.getElementById('open');
const containerInfo = document.querySelector('.container_info');
const downTop = document.querySelector('.down_top');


let Opens = true;


const addOpen = (add) => {
    for (let i = 0; i < add.children.length; i++) {
        newArr = add.children[1];
        newArr2 = add.children[0].children[1].children[0];
    }

    if (Opens === true) {
        newArr.classList.remove('active_menu');
        newArr2.classList.add('down');
        Opens = false;
    } else {
        newArr.classList.add('active_menu');
        newArr2.classList.remove('down');
        Opens = true;

    }

}

4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
////////////////////////
///////// Настройки
////////////////////////

// количество снежинок, которое будет на экране одновременно.
let snowmax = 40

// Цвета для снежинок. Для каждой конкретной снежинки цвет выбирается случайно из этого массива.
let snowcolor = new Array("#b9dff5", "#7fc7ff", "#7fb1ff", "#7fc7ff", "#b9dff5")

// Шрифт для снежинок
let snowtype = new Array("Times")

// Символ (*) и есть снежинка, в место нее можно вставить любой другой символ.
let snowletter = "&#10052;"

// Скорость движения снежинок (от 0.3 до 2)
let sinkspeed = 0.4

// Максимальный размер для снежинок
let snowmaxsize = 40

// Минимальный размер для снежинок
let snowminsize = 10

// Зона для снежинок
// 1 для всей страницы, 2 в левой части страницы
// 3 в центральной части, 4 в правой части страницы
let snowingzone = 1

////////////////////////
///////// Конец настроек
////////////////////////

let snow = new Array();
let marginbottom;
let marginright;
let timer;
let i_snow = 0;
let x_mv = new Array();
let crds = new Array();
let lftrght = new Array();
function randommaker(range) {
    rand = Math.floor(range * Math.random());
    return rand;
}
function initsnow() {
    marginbottom = document.documentElement.clientHeight + 50
    marginright = document.body.clientWidth - 15
    let snowsizerange = snowmaxsize - snowminsize
    for (i = 0; i <= snowmax; i++) {
        crds[i] = 0;
        lftrght[i] = Math.random() * 15;
        x_mv[i] = 0.03 + Math.random() / 10;
        snow[i] = document.getElementById("s" + i)
        snow[i].style.fontFamily = snowtype[randommaker(snowtype.length)]
        snow[i].size = randommaker(snowsizerange) + snowminsize
        snow[i].style.fontSize = snow[i].size + 'px';
        snow[i].style.color = snowcolor[randommaker(snowcolor.length)]
        snow[i].style.zIndex = 1000
        snow[i].sink = sinkspeed * snow[i].size / 5
        if (snowingzone == 1) { snow[i].posx = randommaker(marginright - snow[i].size) }
        if (snowingzone == 2) { snow[i].posx = randommaker(marginright / 2 - snow[i].size) }
        if (snowingzone == 3) { snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 4 }
        if (snowingzone == 4) { snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 2 }
        snow[i].posy = randommaker(2 * marginbottom - marginbottom - 2 * snow[i].size)
        snow[i].style.left = snow[i].posx + 'px';
        snow[i].style.top = snow[i].posy + 'px';
    }
    movesnow()
}
function movesnow() {
    for (i = 0; i <= snowmax; i++) {
        crds[i] += x_mv[i];
        snow[i].posy += snow[i].sink
        snow[i].style.left = snow[i].posx + lftrght[i] * Math.sin(crds[i]) + 'px';
        snow[i].style.top = snow[i].posy + 'px';

        if (snow[i].posy >= marginbottom - 2 * snow[i].size || parseInt(snow[i].style.left) > (marginright - 3 * lftrght[i])) {
            if (snowingzone == 1) { snow[i].posx = randommaker(marginright - snow[i].size) }
            if (snowingzone == 2) { snow[i].posx = randommaker(marginright / 2 - snow[i].size) }
            if (snowingzone == 3) { snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 4 }
            if (snowingzone == 4) { snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 2 }
            snow[i].posy = 0
        }
    }
    let timer = setTimeout("movesnow()", 50)
}

for (i = 0; i <= snowmax; i++) {
    document.body.insertAdjacentHTML('beforeend', "<span id='s" + i + "' style='user-select:none;position:fixed;top:-" + snowmaxsize + "'>" + snowletter + "</span>")
}
window.onload = initsnow 