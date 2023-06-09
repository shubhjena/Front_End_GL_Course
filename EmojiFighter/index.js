let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦄", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let emoji1 = fighters[Math.floor(Math.random()*fighters.length)]
    let emoji2 = fighters[Math.floor(Math.random()*fighters.length)]
    stageEl.textContent = emoji1 + " VS " + emoji2

})
