setInterval(setClock, 1000)
var red = document.getElementsByTagName('button')[0]
var redp = document.getElementsByTagName('p')[0]
var body = document.getElementsByTagName('body')[0]
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()
function displayTime(){
    var d = new Date();
    var hour = d.getHours(); 
    var min = d.getMinutes(); 
    var sec = d.getSeconds();
    var amOrPm = "AM";
    if(hour >= 12)
    {
      amOrPm = "PM";
    }
    if(hour > 12)
    {
      hour = hour - 12;
    }
    if(hour < 10)
      hour = "0" + hour;
    if(min < 10)
      min = "0" + min;
    if(sec < 10)
      sec = "0" + sec;
    document.getElementById("clocke").innerHTML = hour + ":" + min + ":" + sec + " " + amOrPm;
  }
  setInterval(displayTime, 1000);
  function rede(){
    var body = document.getElementsByTagName('body')[0]
    var GG = document.getElementById('min')
    var G = document.getElementById('hor')
    var RED = document.getElementById('l')
    var RED = document.getElementById('a')
    var RED = document.getElementById('b')
    var RED = document.getElementById('c')
    var RED = document.getElementById('d')
    var RED = document.getElementById('e')
    var RED = document.getElementById('f')
    var RED = document.getElementById('g')
    var RED = document.getElementById('h')
    var RED = document.getElementById('i')
    var RED = document.getElementById('j')
    var RED = document.getElementById('k')
    a.style.color= "Red"
    b.style.color= "Red"
    c.style.color= "Red"
    d.style.color= "Red"
    e.style.color= "Red"
    f.style.color= "Red"
    g.style.color= "Red"
    h.style.color= "Red"
    i.style.color= "Red"
    j.style.color= "Red"
    k.style.color= "Red"
    l.style.color= "Red"
    redp.style.color = "Red"
    G.style.backgroundColor = "Red"
    GG.style.backgroundColor = "Red"
    body.style.backgroundColor = "Red"
  }
  function blue(){
    var body = document.getElementsByTagName('body')[0]
    var GG = document.getElementById('min')
    var G = document.getElementById('hor')
    var RED = document.getElementById('l')
    var RED = document.getElementById('a')
    var RED = document.getElementById('b')
    var RED = document.getElementById('c')
    var RED = document.getElementById('d')
    var RED = document.getElementById('e')
    var RED = document.getElementById('f')
    var RED = document.getElementById('g')
    var RED = document.getElementById('h')
    var RED = document.getElementById('i')
    var RED = document.getElementById('j')
    var RED = document.getElementById('k')
    a.style.color= "blue"
    b.style.color= "blue"
    c.style.color= "blue"
    d.style.color= "blue"
    e.style.color= "blue"
    f.style.color= "blue"
    g.style.color= "blue"
    h.style.color= "blue"
    i.style.color= "blue"
    j.style.color= "blue"
    k.style.color= "blue"
    l.style.color= "blue"
    redp.style.color = "blue"
    G.style.backgroundColor = "blue"
    GG.style.backgroundColor = "blue"
    body.style.backgroundColor = "blue"
  }
  function green(){
    var body = document.getElementsByTagName('body')[0]
    var GG = document.getElementById('min')
    var G = document.getElementById('hor')
    var RED = document.getElementById('l')
    var RED = document.getElementById('a')
    var RED = document.getElementById('b')
    var RED = document.getElementById('c')
    var RED = document.getElementById('d')
    var RED = document.getElementById('e')
    var RED = document.getElementById('f')
    var RED = document.getElementById('g')
    var RED = document.getElementById('h')
    var RED = document.getElementById('i')
    var RED = document.getElementById('j')
    var RED = document.getElementById('k')
    a.style.color= "green"
    b.style.color= "green"
    c.style.color= "green"
    d.style.color= "green"
    e.style.color= "green"
    f.style.color= "green"
    g.style.color= "green"
    h.style.color= "green"
    i.style.color= "green"
    j.style.color= "green"
    k.style.color= "green"
    l.style.color= "green"
    redp.style.color = "green"
    G.style.backgroundColor = "green"
    GG.style.backgroundColor = "green"
    body.style.backgroundColor = "green"
  }