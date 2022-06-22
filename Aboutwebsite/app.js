const openmenu = document.getElementById('openmenu');
const closemenu = document.getElementById('closemenu')
const upbarr = document.getElementById('upbarr')
upbarr.style.maxHeight = "0%"


function opennn() {
    console.log("hello world")
    upbarr.style.maxHeight = "17%"
    upbarr.style.display = 'block'
    closemenu.style.display = 'block'
    openmenu.style.display = 'none'

}

function closeee() {
    upbarr.style.maxHeight = "0%"
    upbarr.style.display = 'none'
    closemenu.style.display = 'none'
    openmenu.style.display = 'block'
}

