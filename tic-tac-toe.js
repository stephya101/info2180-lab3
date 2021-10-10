window.addEventListener("load", () => {
    boards = Array.from(document.querySelectorAll("#board >div"));
    let changeB = true;
    let winningC = [[0,1,2],[3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8], [0,4,8] , [2,4,6]];
    let result;
    let xWinVal;
    let oWinVal;
    let status = document.getElementById("status");
    //console.log(boards); 
    //console.log(typeof(boards));

    boards.forEach (elm => {
        elm.classList.add("square");
        elm.onclick = () =>{
            if (elm.innerHTML == "X" || elm.innerHTML == "O") {
                elm.innerHTML = elm.innerHTML;
            }
            else {
                if (changeB) {
                    elm.classList.add("X");
                    elm.innerHTML = "X";
                    changeB = false;
                }
                else if (changeB==false) {
                    elm.classList.add("O");
                    elm.innerHTML = "O";
                    changeB = true;
                }
            }
            result = playing();
            if (result == 1){
                //console.log("X WON");
                status.classList.add("you-won");
                status.innerHTML = "Congratulations! X is the Winner!";
                boards.forEach((ele)=>{
                    ele.onclick = (e) => {
                        e.preventDefault();
                    }   
                });
            }
            else if (result == 0){
                //console.log("O WON");
                status.classList.add("you-won");
                status.innerHTML = "Congratulations! O is the Winner!";
                boards.forEach((ele)=>{
                    ele.onclick = (e) => {
                        e.preventDefault();
                    }
                    
                });
            }
          
        }

        elm.onmouseover = ()=> {
            elm.classList.add("hover");
        }
        elm.onmouseout = ()=> {
            elm.classList.remove("hover");
        }
    });

    let button = document.getElementsByClassName("btn")[0];
    button.onclick = () => {
    location.reload();
    }

    let playing = () => {
        for (let play = 0; winningC.length; play++){
            winningC[play].forEach(elm => {
                if (boards[elm].classList.contains("X")){
                    xWinVal++;
                }
                else if (boards[elm].classList.contains("O")){
                    oWinVal++;
                }
            });
            if (xWinVal == 3) {
                return 1;
            }
            else if (oWinVal == 3){
                return 0;
            }
            xWinVal = 0;
            oWinVal = 0;

            if (play < winningC.length - 1){
                continue;
            }
             return -1;

        }

           }

});
