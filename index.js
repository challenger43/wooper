// Petting Wooper-Sydney CODE HERE
//  Putting clothes on wooper
//      i.e hat needs to appear/disappear depending on which hat is selected in the store




// Money - Khai
//     Needs to be able to retain information(if possible)
//     Gets money from doing various things(like food)
//     Can spend money on things such as stores etc
//     Makes money with Wooper clicker (basically petting Wooper)

let money = 0
let woopcoin = "Woopcoin: "
let purchase = 100
let price = 5
let display = woopcoin + " " + money / 100
function moneyCounter() {
    money = money + 1
    document.getElementById("money").textContent = woopcoin + " " + money / purchase
    console.log((money / 100).toFixed(2))
}




// Food treats, drinks etc(eating mechanics) -Emilia 
//      Wooper food(pop out menu, need to interact with money)
//       Feeding Wooper increases money 


function moneyLeft() {
    price = price * 2
    money = money - price

    if (money < 0) {
        document.getElementById("money").textContent = "FAILURE"
        money = -10000000000
    }
    else {
        document.getElementById("money").textContent = woopcoin + " " + money / 100

    }
}

const els = document.querySelectorAll(".DragFood");
els.forEach((name) => {
  dragElement(name);
});

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pose3 = 0,
    pose4 = 0,
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// let randomMover = document.getElementById("randomMover")  //this function imports the element randomMover from my html
// // this stuff is a test to show how everything works 
// function moveRandomMover(){
//     randomMover.style.left = Math.floor(Math.random()*1000) + 'px'  //px are neccesary to move it left/right by pixels- in this it moves from -99-->99px at a time. If I were to set it to percent it would move the percentage of the width of the screen
//     randomMover.style.top = Math.floor(Math.random()*1000) + 'px' //floor rounds the value to the nearest integer. math.random is the thing that randomly selects this stuff.
// } 

// setInterval(moveRandomMover, 1000) //each 1 = one millisecond so 1000 is one per second. our thing moves once per second at the moment. 


// let wooperSprite = document.getElementById("wooperSprite")

// function moveWooperSprite(){
//     wooperSprite.style.left = Math.floor(Math.random()*1000) +'px'
// }

// setInterval(moveWooperSprite, 5000)

//Isabella- wooper needs random movements, speed, turns ar

let canMove = true

let wooperSprite = document.getElementById("wooperSprite") //grabs wooperSprite from the html

const pixelsPerSecond = 150 //the amount of pixels wooper per second
function moveWooperSprite() {
    console.log("woop")
    let prev = Number(wooperSprite.style.left.substring(0, wooperSprite.style.left.length - 2))  //number makes it a number, substring makes a string inside of a string  
    let curr = Math.floor(Math.random() * 700)
    let direction = Math.sign(prev - curr) //sign makes it so it will either end up being -1 or positive 1, based on the value inside the parentheses
    let time = Math.abs(prev - curr) / pixelsPerSecond //takes the distance between wooper's previous location to wooper's current location, then dividing it by the pixels per second to find the total time wooper needs to get to the new location
    wooperSprite.style.transitionDuration = time.toFixed(2) + "s" //links back to the css to control the wooper moving, s changes it to seconds and sets the time that css needs to move wooper
    wooperSprite.style.left = curr + "px" //sets the current value to pixels
    //if positive go left if negative go right
    for (let child of wooperSprite.children) {
        if (direction == -1) {
            child.style.transform = "rotateY(180deg)";
        } else {
            child.style.transform = "rotateY(0deg)";
        }
    }
    setTimeout(moveWooperSprite, time.toFixed(2) * 1000 + Math.random() * 2000) //sets the amount of time wooper must wait before each iteration of the function
}

//     if (direction == -1) { //going back to the math sign thing, use double equal signs and -1 represents it being a negative number
//         for (let child of wooperSprite.children){
//             child.style.transform = "rotateY(180deg)";
//             console.log("it works")
//         }
//         //.children makes it so all children of wooperSprite(everything inside the div with id woopersprite) will follow this rule
//     } else {
//         for (let child of wooperSprite.children){
//             child.style.transform = "rotateY(0deg)";
//             console.log("it works 2") 
//         // wooperSprite.children[0].style.transform = "rotateY(180deg)" //makes it rotate 180degrees y. 
//     }
//     setTimeout(moveWooperSprite, time.toFixed(2) * 1000 + Math.random() * 2000 + 1000) //sets the amount of time wooper must wait before each iteration of the function
//     }
// }
moveWooperSprite();

// setInterval(moveWooperSprite, 1000, Math.floor(Math.random()*10000)) //picks how often wooper moves
