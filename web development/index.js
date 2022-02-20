console.log("Can You see me buddy");

document.getElementById('first_header').style.fontSize="27px";
document.getElementById('second_header').style.fontSize="29px";
document.getElementsByClassName("only_class")[1].style.fontSize="29px";
document.write("Great to see you working man");

newp = document.createElement('p');
newp.innerText("Hey I sneaked in");


temp = document.getElementById('first_header');
temp.appendChild(newp);