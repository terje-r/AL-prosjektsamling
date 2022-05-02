/*
 1) lag en array liste med 7 forskjellige verdier
*/
var oppgave = ["verdi1", "verdi2", "verdi3", "verdi4", "verdi5", "verdi6", "verdi7"];
    console.log("1 " + oppgave)
/*
2) Skriv ned kodene fra forelesningen

Array.push
    //legger til element(er) i slutten av rekken (returnerer antall element i ny rekke)
*/
    oppgave.push("verdi8");
    console.log("2 push " + oppgave)
/*
Array.unshift
    //legger til element(er) i starten av rekken (returnerer antall element i ny rekke)
*/
    oppgave.unshift("verdi0");
    console.log("2 unshift " + oppgave)
/*
Array.pop
    //fjerner (og returnerer) siste element i rekken
*/
    oppgave.pop();
    console.log("2 pop " + oppgave)
/*
Array.shift
    //fjerner (og returnerer) første element i rekken
*/
    oppgave.shift();
    console.log("2 pop " + oppgave)
/*
Acessing items
    //tilgang til elelemtet via index nummer:
*/
    let item = oppgave[4];
    console.log("2 access " + oppgave[4])
/*

3) Console log tredje item i array listen.
*/
var winningNumbers = [1, 76, 2, 78, 16, 7];

var thirdItem = winningNumbers[2];
    console.log("3 " + thirdItem);

/*

4) Bruk push metoden og legg til en nytt object i denne listen. 
*/
var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];

    vegetables.push("bacon")
    console.log("4 " + vegetables);
/*

5) Console log hvert element fra denne arrayen 
*/
var randomThings = ["pumpkin", false, 23, true, "tomato"];

    randomThings.forEach(function (stuff, index){
    console.log("5 " + stuff);
})
/*

6) Loop through denne arrayen, men console log kun number valuene
*/
var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];

    moreThings.forEach(things => console.log("6 " + things));

/*

7) Sorter denne arrayen alfabetisk og loop through hver element
*/
var ingredients = ["water", "flour", "toothpaste", "fish lips"];

    ingredients.sort();
    for (var i = 0; i < ingredients.length; i++) {
        console.log("7 " + ingredients[i]);
    }
 // eller       
 //   ingredients.forEach(sorted => console.log(sorted));
/*

8) Loop through arrayen, men console log kun hvert andre element
*/
var characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];

    for (var i = 0; i < characters.length; i += 2) {
    console.log("8 " + characters[i]);
    }

/*

9) hvis tid til overs

*/
    console.log("9 ingen mer tilgjengelig tid")