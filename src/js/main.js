let i = [
    0, 0, 0, 0, 0, 0, 0
]
const winPos = [1, board.X, -board.X + 1, -board.X - 1]
const win = () => {
    for (let i = 0; i < document.getElementsByClassName('box').length; i++) {
        if (document.getElementsByClassName('box')[i].childElementCount) {
            const color = document.querySelector(`.box:nth-child(${i+1  + board.X }) .y`).classList[document.querySelector(`.box:nth-child(${i+1  + board.X }) .y`).classList.length - 1]
            winPos.map(Element => {
                let winner = 0
                for (let d = 1; d != 4; d++) {
                    if ((i + (Element * d)) % board.X == 0 && Element == 1) {
                        break
                    }
                    if (((i + (Element * d)) % board.X == 0 || i + (Element * d) < 0) && Element == -6) {
                        break
                    }
                    if (((i + (Element * d)) % board.X == 6 || i + (Element * d) < 0) && Element == -8) {
                        break
                    }
                    if ((i + (Element * d)) > board.X * board.Y - 1 && Element == 7) {
                        break
                    }
                    if (document.getElementsByClassName('box')[i + (Element * d)].childElementCount) {
                        if (document.querySelector(`.box:nth-child(${i+1  + board.X +(Element * d)}) .y`).classList[document.querySelector(`.box:nth-child(${i+1  + board.X +(Element * d)}) .y`).classList.length - 1] == color) {
                            winner++
                        }
                    }
                }
                if (winner == 3) {
                    if (color == "red") {
                        document.getElementById('win').innerHTML = "Win red"
   
                    
                    } else {
                        document.getElementById('win').innerHTML = "Win yellow"
                    }

                    setTimeout(() => {
                        document.getElementById('board').innerHTML = null
                        start()  
                        document.getElementById('win').innerHTML = ""
                    }, 1000);

                }
            })

        }
    }
}
document.querySelector('#board').onclick = (e) => {
    if (i[e.path[0].id] <= board.Y) {
        i[e.path[0].id]++
        const classCan0 = document.getElementsByClassName(`can${e.path[0].id}`)[0]
        const classCan1 = document.getElementsByClassName('box')[((board.Y) * board.X - 1) - board.X - ((board.X * i[e.path[0].id]) - e.path[0].id - 1)]

        document.getElementsByClassName('animated').length % 2 == 1 ?
            classCan0.innerHTML += `<div class="animated y yellow"></div>` :
            classCan0.innerHTML += `<div class="animated y red"></div>`
        classCan0.classList.remove("can" + e.path[0].id);
        classCan0.classList.remove("can");
        classCan0.classList.remove("hover");
        if (i[e.path[0].id] <= board.Y - 1) {
            classCan1.classList.add("can");
            classCan1.classList.add("can" + e.path[0].id);
        } else {
            i[e.path[0].id]++
        }
        for (let i = 0; i < document.getElementsByClassName('box').length; i++) {
            for (let x = 0; x < document.getElementsByClassName('box')[i].classList.length; x++) {
                if (document.getElementsByClassName('box')[i].classList[x] == "redHover") {

                    document.getElementsByClassName('box')[i].classList.remove("redHover");
                    document.getElementsByClassName('box')[i].classList.add("yellowHover");
                    break
                } else if (document.getElementsByClassName('box')[i].classList[x] == "yellowHover") {

                    document.getElementsByClassName('box')[i].classList.remove("yellowHover");
                    document.getElementsByClassName('box')[i].classList.add("redHover");
                    break
                }
            }
        }
        win()
    }

}