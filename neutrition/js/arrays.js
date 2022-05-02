// arrays fra undervisning 4/4/22
/*
var colours = ["red", "green", "yellow", "blue"];
var booleans = [true, false, false, true];
var numbers = [1, 2, 3, 4];
var mixedValues = [true, "blue", 17, null];
*/
//console.log(colours, booleans, numbers, mixedValues);

// forskjellige array ut
//var minVar = [];
//console.log(minVar);

//sett inn verdi
//minVar.push(1);

// fjerne siste verdi i array
//colours.pop()

//legge til nye object på starten av listen
//var post = ["introduksjon av noe...", "tekst nr 2", "avslutning"];
//colours.unshift("black");
//fjerne første verdi
//colours.shift()

//legge til / fjerne i en liste
//array.splice(minVar)
//const fruits = ["mango","banana","lemon","durian","lime"]


// access items in arrays
//var firstItem = colours[0];
//var secondItem = colours[1];

/* oppgave fra forelesning
Array.push
Array.unshift
Array.pop
Array.shift
//Acessing items
// https://www.w3schools.com/jsref/jsref_obj_array.asp

*/
// oppgave: skriv ned kommentarare på hvordan de fungerer

var colours = ["red", "green", "orange", "blue"];
//console.log(colours);

var insert = document.querySelector(".insert-colours");

colours.forEach(function (colours,index) {
    //var colours=[i];
       console.log(colours,index);
});

    colours.push("indigo");

for (var i = 0; i < colours.length; i++) {
    console.log("Farge nummer "+[i] + " er " + colours[i]);
    insert.innerHTML += `<p style="color: ${colours[i]};">Dette er fargen ${colours[i]}</p>`;

}

//legger til element(er) i slutten av rekken (returnerer antall element i ny rekke)
colours.push("purple");
console.log(colours);

//legger til element(er) i starten av rekken (returnerer antall element i ny rekke)
colours.unshift("pink");
console.log(colours);

//fjerner (og returnerer) siste element i rekken
colours.pop();
console.log(colours);

//fjerner (og returnerer) første element i rekken
colours.shift();
console.log(colours);


// finne en fargen (return
var result = colours.find(function (farge){
    //return farge === "indigo";
})

function searchValue() {
    var sResult = document.getElementById("qbox").value;
    //mangler filter for å sjekke om fargen finnes
    document.getElementById("show").innerHTML = "du søkte etter " + sResult;


console.log("fargen du har søkt etter er " + sResult);
}

