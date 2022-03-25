const lampOn = document.querySelector('#lampOn');
const lamp = document.querySelector('#lamp');
const lampOff = document.querySelector('#lampOff');


function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}

function turnOn () {
    if (!isLampBroken()) {
        lamp.src = './img/acesa.jpg'
    }
}
function turnOff () {
    if (!isLampBroken()) {
        lamp.src = './img/apagada.jpg'
    }
}
function lampBroken () {
    lamp.src = './img/quebrada.jpg'
}

lampOn.addEventListener ('click', turnOn);
lampOff.addEventListener ('click', turnOff);
lamp.addEventListener('mouseover', turnOn);
lamp.addEventListener('mouseleave', turnOff);
lamp.addEventListener('dblclick', lampBroken);  
