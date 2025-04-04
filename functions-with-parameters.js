/* Opdracht 0: voorbeeld */
// Schrijf een functie genaamd add, die twee getallen verwacht, die bij elkaar optelt en teruggeeft
// ---- Verwachte uitkomsten:
// add(1, 4) geeft 5
// add(2, 5) geeft 7

function add(a, b) {
    return a + b;
}

const result = add(1, 4);
console.log(result);

/* Opdracht 1 */
// Schrijf een functie genaamd greeter, die een naam verwacht en een groet teruggeeft
// ---- Verwachte uitkomsten:
// greeter("Jan") geeft "Hoi Jan!"
// greeter("Kees") geeft "Hoi Kees!"

function greeter(name) {
    return `Hoi ${name}!`;
}

const greetJan = greeter('Jan');
const greetKees = greeter('Kees');

console.log(greetJan);
console.log(greetKees);

/* Opdracht 2 */
// Schrijf een functie genaamd minutesToSeconds, die een hoeveelheid minuten verwacht (als een getal) en teruggeeft hoeveel seconden dat zijn.
// ---- Verwachte uitkomsten:
// minutesToSeconds(1) geeft 60
// minutesToSeconds(3) geeft 180
// minutesToSeconds(23) geeft 1380

const minutesToSeconds = (minutes) => minutes * 60;

console.log(minutesToSeconds(1));
console.log(minutesToSeconds(3));
console.log(minutesToSeconds(23));

/* Opdracht 3 */
// Schrijf een functie genaamd merge, die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Let op: je mag hier geen String methoden voor gebruiken zoals concat().
// ---- Verwachte uitkomsten:
// merge("abra", "cadabra") geeft "abracadabra"
// merge("zoet", "sappig") geeft "zoetsappig"

const merge = (stringOne, stringTwo) => {
    return stringOne + stringTwo;
};

console.log(merge("abra", "cadabra"));
console.log(merge("zoet", "sappig"));

/* Opdracht  4 */
// Schrijf een functie genaamd calculateDogYears die de hondenleeftijd verwacht en dit omrekent naar mensenjaren (1 tot 7). Op basis daarvan wordt een zinnetje teruggegeven.
// ---- Verwachte uitkomsten:
// calculateDogYears(6) geeft "Jouw hond is 42 jaar oud in mensenjaren."
// calculateDogYears(2) geeft "Jouw hond is 14 jaar oud in mensenjaren."

const calculateDogYears = (age) => {
    return `Jouw hond is ${age * 7} jaar oud in mensenjaren`;
};

console.log(calculateDogYears(6));
console.log(calculateDogYears(2));

/* Opdracht 5 */
// Schrijf een functie genaamd wrapper, die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// wrapper("bril", "*") geeft "*bril*"
// wrapper("beep", "_") geeft "_beep_"
// wrapper("kaas", "Q") geeft "QkaasQ"

const wrapper = (word, character) => {
    return character + word + character;
};

console.log(wrapper("bril", "*"));
console.log(wrapper("beep", "_"));
console.log(wrapper("kaas", "Q"));

/* Bonus opdracht  */
// Schrijf een functie genaamd createDetailString, die een object met de properties firstName, lastName en profession verwacht en een zin teruggeeft
// ---- Verwachte uitkomsten:
// createDetailString({ firstName: 'Jan', lastName: 'Jansen', profession: 'docent'}) geeft "Het beroep van Jan Jansen is docent."
// createDetailString({ firstName: 'Kees', lastName: 'Klaasen', profession: 'brandweerman'}) geeft "Het beroep van Kees Klaasen is brandweerman."

const createDetailString = ({firstName, lastName, profession}) => {
    return `Het beroep van ${firstName} ${lastName} is ${profession}.`;
};

const jan = {firstName: 'Jan', lastName: 'Jansen', profession: 'docent'};
const kees = {firstName: 'Kees', lastName: 'Klaasen', profession: 'brandweerman'};

console.log(createDetailString(jan));
console.log(createDetailString(kees));