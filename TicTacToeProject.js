let boxes = document.querySelectorAll(".box")
let resetbutton = document.querySelector("#resetbutton")
let newbutton = document.querySelector("#newbutton")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")


let turn0 = true;     // playerX , playerO

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

    const resetGame = () => {
        true0 = true;
        enableboxes();
        msgContainer.classList.add("hide");
    }

    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if(turn0){
                box.innerText = 'O';
                turn0 = false;
            }else{
                box.innerText = "X"
                turn0 = true;
            }
            box.disabled = true;

            checkwinner();
        })
    })

    const disableboxes = () => {
        for(let box of boxes){
            box.disabled = false;
        }
    }

    const enableboxes = () => {
        for(let box of boxes){
            box.disabled = true;
            box.innerText = "";
        }
    }

    const showWinner = (winner) =>{
        msg.innerText = `Congratulations , Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableboxes();
    }


    const checkwinner = () => {
        for(let pattern of winpatterns){
            let position1value = boxes[pattern[0]].innerText;
            let position2value = boxes[pattern[1]].innerText;
            let position3value = boxes[pattern[2]].innerText;


            if(position1value != "" && position2value != "" && position3value != ""){

            if (position1value === position2value && position2value === position3value ){
                showWinner(position1value);
            }
            }

        }
    }

    newbutton.addEventListener("click",resetGame);
    resetbutton.addEventListener("click",resetGame);