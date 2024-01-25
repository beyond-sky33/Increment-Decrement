const counter = document.querySelector('#counter');

const increment = () => {
    //get the vlue from UI
    let value = parseInt(counter.innerText);
    //Update the value
    value = value + 1;
    //set the value onto UI
    counter.innerText = value;
};


const decrement = () => {
   //get the vlue from UI
   let value = parseInt(counter.innerText);
   //Update the value
   value = value - 1;
   //set the value onto UI
   counter.innerText = value;
};