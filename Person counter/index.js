let count = 0
let totalCount = 0

let countEl = document.getElementById("count-el")

function increment(){
    count += 1
    countEl.textContent = count
}

let saveEl = document.getElementById("save-el")
function save(){
    saveEl.textContent += count+" - "
    totalCount+=count
    count = 0
    countEl.textContent = count
}