const board = {
    Y: 6,
    X: 7
}
const start = () => {


    for (let x = 0; x < board.X; x++) {
        document.getElementById('board').innerHTML += `<div id="${x}" class="boardHover"></div>`
    }
    for (let y = 0; y < board.Y; y++) {
        for (let x = 0; x < board.X; x++) {
            if (y == board.Y - 1) {
                document.getElementById('board').innerHTML += `<div class="box can can${x} hover redHover"></div>`
            } else {
                document.getElementById('board').innerHTML += `<div  class="box  ${x} hover redHover"></div>`
            }
        }
    }
}
start()