let btn = document.getElementById('btn');
let btnf = document.getElementById('btnf');
let savebtn = document.getElementById('savebtn');
let score = document.getElementById('scorep')
let hscore = document.getElementById('hscore')
let details = document.getElementById('details')

var elem = document.getElementById('timer');
var point = 0;
var higest = 0;

function timer() {
var timeleft = 29;
    downloadTimer = setInterval(function () {
        if (timeleft <= -1) {
            clearInterval(downloadTimer);
            btnf.style.display = 'block';
            btn.style.display = 'none';
            if (higest <= point) {
                higest = point;
                hscore.innerHTML= higest;
                document.getElementById('alert').innerHTML = "New Record!"
            }
        } else {
            elem.innerHTML = timeleft ;
        }
        timeleft -= 1;
    }, 500);   
}

btnf.addEventListener('click',function(){
    document.getElementById('alert').innerHTML = ""
    btnf.style.display = 'none';
    btn.style.display = 'block';
    point = 0;
    score.innerHTML = point;
    timer();
})

btn.addEventListener('click', function () {
    point = point + 1;
    score.innerHTML = point;
})


let letsplay = document.getElementById('letsplay');
let rulesarea = document.getElementById('rules');
let mainarea = document.getElementById('main');
let storagearea = document.getElementById('storage');

letsplay.addEventListener('click',function () {
    rulesarea.classList.toggle('active');
    mainarea.classList.toggle('active');
    storagearea.classList.toggle('active');
})
