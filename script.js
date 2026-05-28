const button = document.querySelectorAll("button");
const display = document.querySelector(".display");
const operator = document.querySelectorAll(".opeartor");
const displaybsr = [];


button.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if (display.innerText==="0"){
            display.innerText=btn.innerText;
        }
        else{
        display.innerText=display.innerText + btn.innerText;
        }
        
    })
})

operator.forEach((btn)=>{
    btn.addEventListener("click",()=>{

        display.innerText =`display.innerText ${btn} btn.innerText`;

    })
})
