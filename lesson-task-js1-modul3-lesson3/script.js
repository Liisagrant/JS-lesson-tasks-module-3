//Question 1

const greet = (name) => `Hello ${name}!`;

const add = (a, b) => a + b;

//Question 2

const url = "https://noroff.herokuapp.com/v1/cat-facts/facts"

fetch(url)
    .then(function (response) {
        return respons.json();
    })
    .then(function (results) {
        console.log(results.length)
    })
    .catch(function(error){
        console.log(eroor)
    });


/*async function getCatFacts() {
    try {
        const response = await fetch("https://noroff.herokuapp.com/v1/cat-facts/facts");
        const results = await response.json();
        console.log(results.length);
    } catch (error) {
        console.log(error);
    }
}*/