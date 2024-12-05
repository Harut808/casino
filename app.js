let button = document.querySelector('.button')
let stavka = document.querySelector('#stavka')
let stavkaner = [...document.querySelectorAll('.stavkaner')]
let balanc = document.querySelector('h2')
let cont = document.querySelector('#ruletka')
let vandak = [...document.querySelectorAll(".vandak")]
let value = 0
let count = 0
let casinoSound = new Audio("./nkarner/dzen.mp3");
let casinoWinSound = new Audio("./nkarner/kreldzen.wav")
vandak.map((el) => {
    el.src = "./nkarner/yot.jpg"
})
stavka.addEventListener('click', (event) => {
    stavkaner.map((x) => {
        x.style.background = "linear-gradient(45deg, #1a237e, #6a1b9a)"
        value = 0
    })
    if (event.target.className === "stavkaner" && value === 0) {
        let x = event.target.innerText
        value = Number(x)
        event.target.style.background = "linear-gradient(45deg, #004d00, #b8860b)";
        if (value >= balanc.innserText) {
            alert('HOP ARA ASA ИЗВИНИ')
        }
    }
})

function foo() {
    if (count >= 23) {
        count = 0
        casinoSound.pause();
        let chek1 = true
        let chek2 = true
        let chek3 = true
        let chek4 = true
        let chek5 = true

        for (let i = 0; i < vandak.length; i++) {
            console.log(balanc.innerText);
            console.log(i, vandak[i].alt);



            if (chek1 === true && i < 5) {
                let x = vandak[0].alt
                if (vandak[i].alt === x) {


                    if (i === 4) {
                        balanc.innerText = Number(balanc.innerText) + (value * 2)
                        balanc.style.backgroundColor = "#28A745"
                        casinoWinSound.play();

                    }

                } else if (vandak[i].alt !== x) {
                    chek1 = false
                }


            } else if (chek2 === true && i < 10 && i > 5) {
                let x = vandak[5].alt
                if (vandak[i].alt === x) {
                    if (i === 9) {
                        balanc.innerText = Number(balanc.innerText) + (value * 2)
                        balanc.style.backgroundColor = "#28A745"
                        casinoWinSound.play();

                    }
                } else if (vandak[i].alt !== x) {
                    chek2 = false
                }
            }
            if (chek3 === true && i < 15 && i > 10) {
                let x = vandak[10].alt
                if (vandak[i].alt === x) {
                    if (i === 14) {
                        balanc.innerText = Number(balanc.innerText) + (value * 2)
                        balanc.style.backgroundColor = "#28A745"
                        casinoWinSound.play();

                    }
                } else if (vandak[i].alt !== x) {
                    chek3 = false
                }
            } else if (chek4 === true && i < 20 && i > 15) {
                let x = vandak[15].alt
                if (vandak[i].alt === x) {
                    if (i === 19) {
                        balanc.innerText = Number(balanc.innerText) + (value * 2)
                        balanc.style.backgroundColor = "#28A745"
                        casinoWinSound.play();

                    }
                } else if (vandak[i].alt !== x) {
                    chek4 = false
                }
            } else if (chek5 === true && i < 25 && i > 20) {
                let x = vandak[20].alt
                if (vandak[i].alt === x) {
                    if (i === 24) {
                        balanc.innerText = Number(balanc.innerText) + (value * 2)
                        balanc.style.backgroundColor = "#28A745"
                        casinoWinSound.play();

                    }
                } else if (vandak[i].alt !== x) {
                    chek5 = false
                }

            }
            if (i === 24) {
                if (
                    vandak[0].alt === vandak[5].alt &&
                    vandak[0].alt === vandak[10].alt &&
                    vandak[0].alt === vandak[15].alt &&
                    vandak[0].alt === vandak[20].alt) {
                    balanc.innerText = Number(balanc.innerText) + (value * 2)
                    balanc.style.backgroundColor = "#28A745"
                    casinoWinSound.play();

                }
                if (
                    vandak[1].alt === vandak[6].alt &&
                    vandak[1].alt === vandak[11].alt &&
                    vandak[1].alt === vandak[16].alt &&
                    vandak[1].alt === vandak[21].alt) {
                    balanc.innerText = Number(balanc.innerText) + (value * 2)
                    balanc.style.backgroundColor = "#28A745"
                    casinoWinSound.play();

                }
                if (
                    vandak[2].alt === vandak[7].alt &&
                    vandak[2].alt === vandak[12].alt &&
                    vandak[2].alt === vandak[17].alt &&
                    vandak[2].alt === vandak[22].alt) {
                    balanc.innerText = Number(balanc.innerText) + (value * 2)
                    balanc.style.backgroundColor = "#28A745"
                    casinoWinSound.play();

                }
                if (
                    vandak[3].alt === vandak[8].alt &&
                    vandak[3].alt === vandak[13].alt &&
                    vandak[3].alt === vandak[18].alt &&
                    vandak[3].alt === vandak[23].alt) {
                    balanc.innerText = Number(balanc.innerText) + (value * 2)
                    balanc.style.backgroundColor = "#28A745"
                    casinoWinSound.play();

                }
                if (
                    vandak[4].alt === vandak[9].alt &&
                    vandak[4].alt === vandak[14].alt &&
                    vandak[4].alt === vandak[19].alt &&
                    vandak[4].alt === vandak[24].alt) {
                    balanc.innerText = Number(balanc.innerText) + (value * 2)
                    balanc.style.backgroundColor = "#28A745"
                    casinoWinSound.play();

                }
            }
            if (i === 24) {
                if (
                    vandak[0].alt === vandak[6].alt &&
                    vandak[0].alt === vandak[12].alt &&
                    vandak[0].alt === vandak[18].alt &&
                    vandak[0].alt === vandak[24].alt) {
                    balanc.innerText = Number(balanc.innerText) + (value * 2)
                    balanc.style.backgroundColor = "#28A745"
                    casinoWinSound.play();

                }
                if (vandak[4] === vandak[8] === vandak[12] === vandak[16] === vandak[20]) {
                    balanc.innerText = Number(balanc.innerText) + (value * 2)
                    balanc.style.backgroundColor = "#28A745"
                    casinoWinSound.play();

                }
            }

        }

    }
}

let stug = true
button.addEventListener('click', () => {

    if (value > 0 && balanc.innerText >= value && stug) {
        balanc.innerText = balanc.innerText - value
        stug = false
        balanc.style.backgroundColor = "#1E4D2B"
        casinoWinSound.pause()

        casinoSound.play();
        casinoSound.loop = true;

        vandak.forEach((el, index) => {
            console.log(count);
            count++

            setTimeout(() => {

                for (let i = 0; i < arr.length*2; i++) {
                    let x = Math.ceil(Math.random() * arr.length)
                    setTimeout(() => {
                        let elem = arr[x]
                        el.src = elem.url;
                        el.alt = elem.value
                    }, i*100)
                }

            }, index * 800);
            setTimeout(() => {
                if (balanc.style.backgroundColor !== "#28A745") {
                    balanc.style.backgroundColor = '#FF4500'
                }

            }, 21000)
            setTimeout(() => {
                foo()
                stug = true
            }, 20000)

        })
    } else if (balanc.innerText <= 0 || value >= balanc.innerText) {
        casinoSound.pause();
        alert('HOP ARA ASA ИЗВИНИ')
    } else if (value === 0) {
        casinoSound.pause();
        alert("Stavka di ara")
    }


})