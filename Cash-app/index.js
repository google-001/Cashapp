let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');
let dot = document.getElementById('dot');
let backspace = document.getElementById('clear');
let amount = document.getElementById('amt');
let request = document.getElementById('request');
let pay = document.getElementById('pay');
let currentcurrency = document.getElementById('currentcurrency');
one.addEventListener('click',()=>{
    if (amount.innerHTML == 0){
        amount.innerHTML = 1
    }
    else{
        amount.innerHTML += 1
    }
})
two.addEventListener('click',()=>{
    if (amount.innerHTML == 0){
        amount.innerHTML = 2
    }
    else{
        amount.innerHTML += 2
    }
})
three.addEventListener('click',()=>{
    if (amount.innerHTML == 0){
        amount.innerHTML = 3
    }
    else{
        amount.innerHTML += 3
    }
})
four.addEventListener('click',()=>{
    if (amount.innerHTML == 0){
        amount.innerHTML = 4
    }
    else{
        amount.innerHTML += 4
    }
})
five.addEventListener('click',()=>{
    if (amount.innerHTML == 0){
        amount.innerHTML = 5
    }
    else{
        amount.innerHTML += 5
    }
})
six.addEventListener('click',()=>{
    if (amount.innerHTML == 0){
        amount.innerHTML = 6
    }
    else{
        amount.innerHTML += 6
    }
})
seven.addEventListener('click',()=>{
    if (amount.innerHTML == 0){
        amount.innerHTML = 7
    }
    else{
        amount.innerHTML += 7
    }
})
eight.addEventListener('click',()=>{
    if (amount.innerHTML == 0){
        amount.innerHTML = 8
    }
    else{
        amount.innerHTML += 8
    }
})
nine.addEventListener('click',()=>{
    if (amount.innerHTML == 0){
        amount.innerHTML = 9
    }
    else{
        amount.innerHTML += 9
    }
})
zero.addEventListener('click',()=>{
    if (amount.innerHTML == 0){
        amount.innerHTML = 0
    }
    else{
        amount.innerHTML += 0
    }
})
backspace.addEventListener('click',()=>{
    amount.innerHTML = 0
})
dot.addEventListener('click',()=>{
    if (amount.innerHTML == 0){
        amount.innerHTML += '.'
    }
    else{
        amount.innerHTML += '.'
    }
})