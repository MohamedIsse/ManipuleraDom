
//div1 för namn
let div1 = document.createElement('div')
let myName = document.createElement("p");
myName.innerText = ("Mohamed Isse");
document.body.appendChild(myName);
document.body.appendChild(div1);

// div 2 för array
var div2 = document.createElement("div");
var txt = document.createElement("p")
txt.innerHTML = ("Fyra saker som jag är bra på")
div2.appendChild(txt);
var myArray = ["Promenera", "Sova", "Prata", "Springa"];
var lista = document.createElement("ul");
for (let i = 0; i < myArray.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = myArray[i];
    lista.appendChild(li);
    
}

div2.appendChild(lista);
document.body.appendChild(div2);
