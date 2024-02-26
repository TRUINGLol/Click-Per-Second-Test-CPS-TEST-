//Инициализация "глобальных" переменных
let timer = 1;
let timer_Show = 0;
let hint = 0;
let score = -1;
var score_Show = 0;
let CPS_n = 0;
var CPS_n_Show = 0;
let SELECTED = 1;
let isPlay = false;

//работа при полной загрузке страницы
window.onload = function(){
    timer_Show = document.getElementById("timer");
    hint = document.getElementById("hint").style;
    score_Show = document.getElementById("score");
    CPS_n_Show = document.getElementById("clicks");
}


//Выбор времени
function SelectTimer(button_Select){
    if(isPlay){
        return;
    }
    SELECTED = Number(button_Select.innerHTML);
    timer = Number(button_Select.innerHTML);
    timer_Show.innerHTML = timer;
    console.log("Select time:"+timer);
}


//Начало игры
function Game_Start(){
    if(!isPlay){
        isPlay= true;
        Game();
    }
    if(isPlay){
        score++;
        score_Show.innerHTML = score;
    }
    hint.display = "none";
}

//Основная логика игры
function Game(){
    timer = SELECTED;
    timer_Show.innerHTML = timer;
    CPS_n_Show.innerHTML = 0;
    var main = setInterval(function(){
        timer--;
        timer_Show.innerHTML = timer;

        if(timer<=0){
            clearInterval(main);
            hint.display = "block";
            CPS_n =CPS();
            CPS_n_Show.innerHTML = CPS_n;
            isPlay = false;
            score = -1;
        }
    },1000)
    
}

//Высчитывает cps за игру
function CPS(){
    return score/SELECTED;
}

//Убрать баги
//2. убрать возможность запуска игры сразу после вывода ALERT