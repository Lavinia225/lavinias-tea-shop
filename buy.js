const productNames = [];
const productPrices = [];
let totalPrice = 0;

if (document.cookie){
    cookieReader();
}

document.addEventListener("keypress", function(b){ //Make this later send you to the cart post testing.
    if (b.key === "b"){
        if(productNames[0] === undefined){
            alert("Empty Cart.");
        }
        else {
            totalPrice = 0;
            productPrices.forEach(nyan => {totalPrice = totalPrice + parseFloat(nyan)});
            alert("Products:" + productNames + `\n Total Price: $${totalPrice.toFixed(2)}`);
        }
    }
});

//This is where the cart table generation method goes.

if (window.location.href.includes("cart")){ 
    let table = document.getElementById("table");

    for (i = 0; i < productNames.length; i++){ //One row takes two data.
        let row = document.createElement("tr");
        let data1 = document.createElement("td");
        let data2 = document.createElement("td");
        let text1 = document.createTextNode(productNames[i]);
        let text2 = document.createTextNode(productPrices[i]);

        table.appendChild(row);
        row.appendChild(data1);
        row.appendChild(data2);
        data1.appendChild(text1);
        data2.appendChild(text2);

    }
}




//The below is just test code again
function clicked(clicked_id)
  {
      alert(clicked_id);
      let itemPrice = clicked_id.slice(clicked_id.indexOf("$") +1);
      let itemName = clicked_id.slice(0, clicked_id.indexOf("$") - 1);
      productPrices.push(itemPrice);
      productNames.push(" " + itemName);
      cookieSetter();
  }

  function cookieReader(){
    const seperatedCookies = document.cookie.split(";"); //Divide price and name strings
    const priceHolder = seperatedCookies[0].slice(seperatedCookies[0].indexOf("=") + 1).split(",") //Cut off the label at slice, then puts each price in an element
    //const priceHolderSliced = priceHolder.split(",");
    const nameHolder = seperatedCookies[1].slice(seperatedCookies[1].indexOf("=") + 1).split(",")

    for (i = 0; i < priceHolder.length; i++){
        productPrices.push(priceHolder[i]);
    }

    for (i = 0; i < nameHolder.length; i++){
        productNames.push(nameHolder[i]);
    }
  }

  function cookieSetter(){
      document.cookie=`productPrices=${productPrices};Max-Age=86,400,000; Secure;`; //Max age is milliseconds in a day, or 1000 * 60 * 60 * 24 for 86,400,000
      document.cookie=`productNames=${productNames};Max-Age=86,400,000; Secure;`;
  }