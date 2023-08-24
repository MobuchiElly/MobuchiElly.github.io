//Custom function created to createElement and setAttribute simultaneously 
const CreateElement = (elem, attr, attrValue, _textContent) => {
    let createdElement = document.createElement(elem);
    createdElement.setAttribute(attr, attrValue);
    createdElement.textContent = _textContent;
    return createdElement;
}

const body = document.body;
let h1 = CreateElement('h1', 'class', 'myClass', 'Text Generated with Javascript');
h1.setAttribute('id', 'main-heading');
body.appendChild(h1);
const mainH = document.getElementById("main-heading");
mainH.style.background="transparent";


//STOP WATCH APPLICATION
//Targeting the html elements
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const stopBtn = document.getElementById('stop-btn');
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
let s =  0, m = 0, h = 0;
let strS, strM, strH;
let tempS = 0, tempM = 0, tempH = 0;
let setTime= 100;

//Function to increment my second(s), minute(m) and hour(h) values
let runTime = () => {    
    s++
    if (s / 60 == 1) {
        s = 0;
        m++
    }
    if (m / 60 == 1) {
        m = 0;
        h++;
    }
   
    tempS = s, tempM = m, tempH = h;
    strS = s < 10 ? '0' + s: s;
    strM = m < 10 ? '0' + m : m;
    strH = h < 10 ? '0' + h : h;
    sec.textContent = `${strS}`;
    min.textContent = `${strM}`;
    hour.textContent = `${strH}`;
}

let myIntervalId = null;
startBtn.addEventListener('click', () => {
    if (!myIntervalId)
    {
        myIntervalId = setInterval(runTime, setTime);
    };
});
stopBtn.addEventListener('click', () => {
    clearInterval(myIntervalId)
    myIntervalId = null;
    tempS = s, tempM = m, tempH = h;
});
resetBtn.addEventListener('click', () => {
    clearInterval(myIntervalId)
    myIntervalId = null;
    s = 0,  m = 0, h = 0, tempS = 0, tempM = 0, tempH = 0;
    strS = '00', strM = '00', strH = '00';
    sec.textContent = `${strS}`;
    min.textContent = `${strM}`;
    hour.textContent = `${strH}`;
});
