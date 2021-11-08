function startGame() {
    //starting a new Game
    var messagesElement = document.getElementById("messages");
    messagesElement!.innerText = "Welcome to MultiMath! starting a new game"
}

document.getElementById("startGame")!.addEventListener("click", startGame);