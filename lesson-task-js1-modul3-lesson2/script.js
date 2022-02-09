//Question 1
function greet(name = "John") {
    return `Hello ${name}!`;
}
//console.log(greet())


//Question 2
//Create a reusable function that accepts two parameters, then returns a dynamic HTML <div> element.
// The <div> it creates should insert one of the parameters as a class, and the other as the inner value. Similar to the below HTML:

function createReusable (type, value) {
    return `<div class="type">${value}</div>`;

}

//Question 3

async function getFact() {
  try{
      const response = await fetch("https://cat-fact.herokuapp.com/facts");
      const results = await response.json();
      console.log(results[8].text);

  } catch (error) {
      console.log("error, no good API")
  }
  finally {
      console.log("I always work!")
  }

}
getFact();