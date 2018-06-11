const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
const planetSec = document.getElementById('planets');
console.log('mercury')


const addToDom = (planet) => {
    switch (planet) {
        case "mercury":
            const paraMer = document.createElement('p');
            paraMer.textContent = "mercury"
            planetSec.appendChild(paraMer);
            break;
        case "venus":
            const paraV = document.createElement('p');
            paraV.textContent = "venus"
            planetSec.appendChild(paraV);
            break;
        case "earth":
            const paraE = document.createElement('p');
            paraE.textContent = "earth"
            planetSec.appendChild(paraE);
            break;
        case "mars":
            const paraMar = document.createElement('p');
            paraMar.textContent = "mars"
            planetSec.appendChild(paraMar);
            break;
        case "jupiter":
            const paraJ = document.createElement('p');
            paraJ.textContent = "jupiter"
            planetSec.appendChild(paraJ);
            break;
        case "saturn":
            const paraS = document.createElement('p');
            paraS.textContent = "satrun"
            planetSec.appendChild(paraS);
            break;
        case "uranus":
            const paraU = document.createElement('p');
            paraU.textContent = "uranus"
            planetSec.appendChild(paraU);
            break;
        case "neptune":
            const paraN = document.createElement('p');
            paraN.textContent = "neptune"
            planetSec.appendChild(paraN);
            break;
    }
}

planets.forEach(addToDom)

const planetEl = document.getElementById("planets")

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const planetToUp = planets.map(function (planetCap) {
    {
        return planetCap.charAt(0).toUpperCase() + planetCap.slice(1)
    }
})

console.log(planetToUp);


const planetsWithE = planets.filter(withE => {
    return withE.includes('e')
    })

console.log(planetsWithE);

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/


// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const sentence = words.reduce(
    (currentTotal, next) => currentTotal + ' ' + next
)

console.log(sentence);

