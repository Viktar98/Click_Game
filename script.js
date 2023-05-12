let score = 0;
let lifes = '🖤🖤🖤';
let counting_Lives = 3;
let game = true;
let object = document.querySelector('#object');

//while(game==true){
    if(counting_Lives>=1){
    document.title = `${lifes} Score: ${score} ${lifes}`;
} else {document.title = `💀 Game Over 💀`;}
//}

function start_game() {
    alert('Start');
    object.classList.toggle = 'start';
}

function miss(event) {
    if (event.target.id == 'area') {
        counting_Lives --;
        counting_Lives == 3? lifes = '🖤🖤🖤': 
        counting_Lives == 2? lifes = '🖤🖤🤍':
        counting_Lives == 1? lifes = '🖤🤍🤍': 
        counting_Lives = counting_Lives;
    }
}

function hit() {
    score ++;
    document.title = `Score: ${score}`
}

