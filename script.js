const count = document.querySelector("#count");
const incrementBtn = document.querySelector("#increment-btn");
const decrementBtn = document.querySelector("#decrement-btn");
const input = document.querySelector("#inputVal");
const reset = document.querySelector("#reset-btn");

let countVal = 0;
let inputValue = 0;


incrementBtn.addEventListener("click", ()=>{
    inputValue = input.value
    // if(inputValue > 1){
    //   countVal += Number(inputValue);
    // }else{ 
    // countVal ++;
    // }
    countVal += Number(inputValue);
    count.innerText = countVal
})

decrementBtn.addEventListener("click", ()=>{
    inputValue = input.value
    // if(inputValue > 1){
    //     countVal -= Number(inputValue);
    //   }else{ 
    //   countVal --;
    //   }
    countVal -= Number(inputValue);
    count.innerText = countVal
})

reset.addEventListener("click",()=>{
    countVal = 0;
    inputValue = 0
    count.innerText = 0;
    input.value = 1;
})

