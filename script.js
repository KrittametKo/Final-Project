function move() {
    alert("Have a Good Day");
}

function ChangName() {
    let nname = prompt("Insert Your Name");
    document.getElementById("name").innerHTML = nname;
}

function ChangSurName() {
    let sname = prompt("Insert Your SurName");
    document.getElementById("sname").innerHTML = sname;
}

function ChangNickName() {
    let nname = prompt("Insert Your NickName");
    document.getElementById("nname").innerHTML = nname;
}

function ChangBGColor() {
    document.getElementById("first").style.backgroundColor = "orange";
    document.getElementById("second").style.backgroundColor = "white";
    document.getElementById("third").style.backgroundColor = "green";
    document.getElementById("four").style.backgroundColor = "blue";
    document.getElementById("five").style.backgroundColor = "pink";
}

function ChangBGB() {
    document.getElementById("first").style.backgroundColor = "white";
    document.getElementById("second").style.backgroundColor = "#5A405D";
    document.getElementById("third").style.backgroundColor = "white";
    document.getElementById("four").style.backgroundColor = "gray";
    document.getElementById("five").style.backgroundColor = "white";
}

function addskill() {
    let input = document.getElementById("input").value;

    let newskill = document.createElement("li");
    let node = document.createTextNode(input);

    newskill.appendChild(node);

    let element = document.getElementById("list");

    element.appendChild(newskill);
}

function deleteskill() {

    let list = document.getElementById("list");
    list.removeChild(list.childNodes[11]);

}


// let input = document.getElementById("input").value;
//     let newskill = document.createElement("li");
//     let node = document.createTextNode(input);
//     let element = document.getElementById("list");

//     newskill.appendChild(node);
//     console.log(newskill)
//     for (i = 1; i <= 11; i + 2) {
//         console.log(element.childNodes[i])
//         if (newskill === element.childNodes[i])
//             element.removeChild(element.childNodes[i])