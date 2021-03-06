// Since the `data.js` file is loaded in your `index.html` before this one, 
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let average = 0;
  for (i=0; i < 25; i++){
    average = average + data[i].price/25;
  }
  console.log(average);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let between = [];
  for (i=0; i < 25; i++){
    if ((data[i].price) >= 14.00 && (data[i].price <= 18.00)){
      between.push(data[i].title);
    }
  }
  console.log(between);
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  for (i=0; i < 25; i++){
    if (data[i].currency_code === "GBP"){
         console.log((data[i].title) + " costs " + (data[i].price) + " pounds.")
    }
    }
  }




// 4: Display a list of all items who are made of wood. THIS IS A NESTED LOOP!
function question4 () {
  // Answer:
  let varTitle = "";
  for (i=0; i < data.length; i++){
    for (j=0; j < data[i].materials.length; j++){
      if (data[i].materials[j] === "wood"){
        varTitle += data[i].title + " is made of wood.";
      }
    }
  }
  console.log(varTitle);
}


// 5: Which items are made of eight or more materials? 
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  let titleLength="";
  for (i=0; i < data.length; i++){
    if (data[i].materials.length >= 8){
      titleLength += data[i].title + data[i].materials.length;
      for (j=0; j < data[i].materials.length; j++){
      titleLength += data[i].materials[j]

      }
    }
  }
  console.log(titleLength);
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let number = 0;
  for (i=0; i < data.length; i++){
    if (data[i].who_made === "i_did"){
      number = number + 1;
    }
  }
  console.log((number) + " items were made by their sellers.");
}