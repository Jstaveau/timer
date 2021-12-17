let btn = document.querySelector('button');

let secondes = 10
let p = document.createElement('p');
let intervale;
btn.addEventListener('click', start)
function start() {
    intervale = setInterval('decompte()', 1000)
}
function stop() {
    clearInterval(intervale)
    p = document.createElement('p');
    p.style.margin = '0px'
    document.body.append(p)
    p.innerText = 'Stop !'
}

function decompte() {
    if (secondes > 0) {
        p = document.createElement('p');
        p.style.margin = '0px'
        document.body.append(p)
        p.innerText = secondes
        secondes--
    } else {
        stop()
    }
}