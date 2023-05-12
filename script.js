let score = 0;
let lifes = '🖤🖤🖤';
let counting_Lives = 3;
let game = true;
let object = document.querySelector('#object');

function title() {
    counting_Lives == 3 ? lifes = '🖤🖤🖤' :
        counting_Lives == 2 ? lifes = '🖤🖤🤍' :
            counting_Lives == 1 ? lifes = '🖤🤍🤍' :
                counting_Lives = counting_Lives;
    if (counting_Lives >= 1) {
        document.title = `${lifes} Score: ${score} ${lifes}`;
    } else { document.title = `💀 Game Over 💀`; }
}


function start_game(){
    score = 0;
    object.classList.toggle('start');
}

title();

function miss(event) {
    if (event.target.id == 'area') {
        counting_Lives--;
    }
}

title();

function hit() {
    score++;
    object.classList.remove('start');
    void object.offsetWidth;              //обновление DOM
    object.classList.add('start');
    let random_offset = Math.floor(Math.random()*7);
    object.style.left = `${random_offset * 60}px`;
}

title();

