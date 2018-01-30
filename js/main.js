let header = document.getElementById("page-header");
let saywhat = document.getElementById("output");


console.log("header", header);

function handleHeaderMouseEvent(event){
   // console.log("event", event.target);
   saywhat.innerHTML = "The force is strong with this one";
}

function handleHeaderMouseOut (event){
    saywhat.innerHTML = "Remember... the Force will be with you always.";
}

let listItems = document.getElementsByClassName("list-item");
console.log("listItems", listItems);


/** this for loops adds items to the HTML collection because it is not an array */
for(var i = 0; i < listItems.length; i++){
    listItems.item(i).addEventListener("click", handleClick);
}

function handleClick(MouseEvent){
    let elementText = MouseEvent.target.innerHTML;
    saywhat.innerHTML = "hummm, " + elementText + " clicked you have";
}

header.addEventListener("mouseover", handleHeaderMouseEvent);
header.addEventListener("mouseout", handleHeaderMouseOut);