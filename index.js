//Isabella- wooper needs random movements, speed, turns ar

// let randomMover = document.getElementById("randomMover")  //this function imports the element randomMover from my html
// // this stuff is a test to show how everything works 
// function moveRandomMover(){
//     randomMover.style.left = Math.floor(Math.random()*1000) + 'px'  //px are neccesary to move it left/right by pixels- in this it moves from -99-->99px at a time. If I were to set it to percent it would move the percentage of the width of the screen
//     randomMover.style.top = Math.floor(Math.random()*1000) + 'px' //floor rounds the value to the nearest integer. math.random is the thing that randomly selects this stuff.
// } 

// setInterval(moveRandomMover, 1000) //each 1 = one millisecond so 1000 is one per second. our thing moves once per second at the moment.


let wooperSprite = document.getElementById("wooperSprite") //grabs wooperSprite from the html

let paused = false

const pixelsPerSecond = 150 //the amount of pixels wooper per second
function moveWooperSprite() {
  console.log("woop")
  let prev = Number(wooperSprite.style.left.substring(0, wooperSprite.style.left.length - 2))  //number makes it a number, substring makes a string inside of a string  
  let curr = Math.floor(Math.random() * 1000)
  let direction = Math.sign(prev - curr) //sign makes it so it will either end up being -1 or positive 1, based on the value inside the parentheses
  let time = Math.abs(prev - curr) / pixelsPerSecond //takes the distance between wooper's previous location to wooper's current location, then dividing it by the pixels per second to find the total time wooper needs to get to the new location
  
  if (!paused) {
    wooperSprite.style.transitionDuration = time.toFixed(2) + "s" //links back to the css to control the wooper moving, s changes it to seconds and sets the time that css needs to move wooper
    wooperSprite.style.left = curr + "px" //sets the current value to pixels
    //if positive go left if negative go right
    for (let child of wooperSprite.children) {
      if (direction == -1 && !child.classList.contains("noFlip")) {
        child.style.transform = "rotateY(180deg)";
      } else {
        child.style.transform = "rotateY(0deg)";
      }
    }
  }
  setTimeout(moveWooperSprite, time.toFixed(2) * 1000 + Math.random() * 2000) //sets the amount of time wooper must wait before each iteration of the function
}
moveWooperSprite();

//technically this is Khai's job but I had extra time so I(Isabella) decided to make the money sync up and update
let money = 0
let woopcoin = "Woopcoin: "
let purchase = 100
let mushroomPrice = 5
let algaePrice = 1
let fishPrice = 10
let multiplier = 1
let gOutcome = 0
//those variables Khai made

function moneyUpdate() {
  document.getElementById("money").textContent = woopcoin + money / 100;
  console.log("money has been updated")
}

setInterval(moneyUpdate, 1000)

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
 }

//Emi's Code

function show() {
  let shopEl = document.getElementById('shop')
  shopEl.hidden = !shopEl.hidden;
}

document.getElementById('hatbutton')
function show1() {
  let hatButtonEl = document.getElementById('hatbutton1')
  hatButtonEl.hidden = !hatButtonEl.hidden;
}



// Money - Khai
//    Gets money from doing various things(like food)
//     Can spend money on things such as stores etc
//     Makes money with Wooper clicker (basically petting Wooper)


function moneyCounter() { //adds 5 cents
  money = money + multiplier
  document.getElementById("money").textContent = woopcoin + " " + money / 100
}

document.getElementById("cost").textContent = "Cost: " + mushroomPrice / 100
document.getElementById("mushroom")

function moneyLeft() {
  console.log("moneyLeft worked")

  money = money - mushroomPrice
  function updateMoney() {
    document.getElementById("money").textContent = woopcoin + " " + money / 100
  }
  if (money < 0) {
    document.getElementById("money").textContent = "Not enough money"
    money = money + mushroomPrice
    setTimeout(updateMoney, 1000)

  }
  else {


    multiplier = multiplier + 5
    mushroomPrice = mushroomPrice * 3
    updateMoney()
  }



  document.getElementById("cost").textContent = "Cost: " + mushroomPrice / 100

}

function algaeBuy() { //adds one cent
  console.log("moneyLeft worked")

  money = money - algaePrice



  if (money < 0) {
    document.getElementById("money").textContent = "Not enough money"
    money = money + algaePrice
    setTimeout(updateMoney, 1000)
  }
  else {
    multiplier = multiplier + 1
    algaePrice = algaePrice * 2
    updateMoney()

    document.getElementById("cost2").textContent = "Cost: " + algaePrice / 100
  }

}



function fishBuy() { //adds 10 cents
  console.log("moneyLeft worked")

  money = money - fishPrice

  if (money < 0) {
    document.getElementById("money").textContent = "Not enough money"
    money = money + fishPrice
    setTimeout(updateMoney(), 1000)
  }
  else {
    multiplier = multiplier + 10
    fishPrice = fishPrice * 4
    updateMoney()
  }



  document.getElementById("cost2").textContent = "Cost: " + algaePrice / 100
}

function oopTreatBuy() {
  paused = true;
  console.log("Bought WoopTreat")
  setTimeout(function () {
    paused = false;
    console.log("unpaused")
  }, 10000)

 money = money - woopTreatPrice

  if (money < 0){
    document.getElementById("money").textContent = "Not enough money"
  }
}

function gamble() {
  money = money - 500

  gOutcome = getRandomInt(1001)
  console.log(gOutcome)
  if (gOutcome == 1000) {
    money = money + 100000
    document.getElementById("money").textContent = "+1000"
    setTimeout(updateMoney(), 1000)

  } else {
    document.getElementById("money").textContent = "+0"
    setTimeout(moneyUpdate(), 1000)
  }

}


// Sydney CODE HERE Isabella added some code here(to figure out how to make something bought so you don't have to buy it again)
//  Putting clothes on wooper
//      i.e hat needs to appear/disappear depending on which hat is selected in the store

let hats = ["hat", "croissantHat", "eleganthat", "donutHat", "santaHat", "rowletHat", "bow", "Headband"]
let owned_hats = []

if (!owned_hats.includes(hat)) {
  owned_hats.push(hat);
}

owned_hats.includes("hat")

function changeHat(cost, newHat) {
  console.log("changing a hat with cost " + cost + " to hat " + newHat)
  if (cost > money) {
    return;
  }
  money -= cost
  for (const hat of hats) {
    let hatEl = document.getElementById(hat)
    if (hat == newHat) {
      hatEl.hidden = false
      console.log("show hat")
    } else {
      hatEl.hidden = true
      console.log("hide hat")
    }
  }
}
changeHat(0, "nohat")
console.log(money)

