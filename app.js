const shop = ['Apple', 'Banana',  'Orange', 'Mango', 'Grape', 'Strawberry'];
const input = document.querySelector('#input');
const h2 = document.querySelector('h2');
function getFruits(){
    console.log(input.value)
    if(shop.includes(input.value)){
        console.log('This fruit is available..')
        h2.innerHTML = `${input.value} is available`
    }else{
        console.log('This Fruit is not Available..');
        h2.innerHTML = `${input.value} is not available`
    }
    input.value = ''
}