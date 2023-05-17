//Calcualte BMI
//Formula: weight / ((weight * height) / 10000)

const btnCalc = document.querySelector('#btn');
const form = document.querySelector('form');
const inputHeight = document.querySelector('.height');
const inputWeight = document.querySelector('.weight');
const result = document.querySelector('#results');



btnCalc.addEventListener("click", (event) =>{
    event.preventDefault();
    const regex = /^[0-9]+$/
    const height = inputHeight.value;
    const weight = inputWeight.value;

    if(((!regex.test(height)) && (!regex.test(weight)))){
        console.log('error')
        result.innerHTML = `HEIGHT AND WIDTH CANNOT BE EMPTY AND CAN ONLY CONTAIN NUMBERS`
        result.style.color= 'red'
    }else if(!regex.test(height)){
        console.log('error')
        result.innerHTML = `HEIGHT CANNOT BE EMPTY AND CAN ONLY CONTAIN NUMBERS`
        result.style.color= 'red'
    }else if(!regex.test(weight)){
        console.log('error')
        result.innerHTML = `WEIGHT CANNOT BE EMPTY AND CAN ONLY CONTAIN NUMBERS`
        result.style.color= 'red'
    }else{
        console.log('Height', height);
        console.log('Weight' , weight);
        console.log('BMI',weight / ((weight * height) / 10000))
        result.innerHTML = `Your BMI is ${((weight) / (((height/30) * (height/30)))*10).toFixed(2)}`
        result.style.color= 'blue'
    }
    

})