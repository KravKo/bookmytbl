
let checkbx = document.getElementById('check')
let checkbx1 = document.getElementById('check1')
let checkbx2 = document.getElementById('check2')
let checkbx3 = document.getElementById('check3')
let checkbx4 = document.getElementById('check4')
let checkbtn = document.getElementById('checkbtn');
let noti = document.getElementById('noti');
let chance = document.getElementById('chance')
let score = document.getElementById('score')
var word = 'bull'
let total;
var chanceval = 4;
var scoreval = 0;

function clickEvent(first, last) {
    if (first.value.length) {
        document.getElementById(last).focus();
    }
}

checkbtn.addEventListener('click', function () {
    total = checkbx.value + checkbx1.value + checkbx2.value + checkbx3.value;
    //fully check here//
    if (total == word) {
        noti.innerHTML = "correct";
        console.log("right")
        scoreval = scoreval + 1;
        score.innerHTML = "Score: " + scoreval;
        checkbx.style.borderColor = "green";
        checkbx2.style.borderColor = "green";
        checkbx1.style.borderColor = "green";
    }
    else if (total != word) {
        chanceval = chanceval - 1;
        chance.innerHTML = "Chance: " + chanceval;
        noti.innerHTML = "Wrong";
        console.log("wrong")
    }

    //word check here//
    if (word.charAt(0) == checkbx.value) {
        console.log("green")
        checkbx.style.borderColor = "green";
        checkbx.style.disabled = true;
    }
    else {
        checkbx.style.borderColor = "yellow";
        checkbx.value = '';

    }
    if (word.charAt(1) == checkbx1.value) {
        console.log("green1")
        checkbx1.style.borderColor = "green";
    }
    else {
        checkbx1.style.borderColor = "yellow";
        checkbx1.value = '';
    }
    if (word.charAt(2) == checkbx2.value) {
        console.log("green2")
        checkbx2.style.borderColor = "green";
    }
    else {
        checkbx2.style.borderColor = "yellow";
        checkbx2.value = '';
    } if (word.charAt(3) == checkbx3.value) {
        console.log("green3")
        checkbx3.style.borderColor = "green";
    }
    else {
        checkbx3.style.borderColor = "yellow";
        checkbx3.value = '';
    }
})

