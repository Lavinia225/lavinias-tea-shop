const productNames = [];
const productPrices = [];
let totalPrice = 0;

if (document.cookie){
    cookieReader();
}

if(productNames[0] === ""){
    productNames.splice[0, 1];
    productPrices.splice[0, 1];
}

document.addEventListener("keypress", function(b){ //Make this later send you to the cart post testing.
    if (b.key === "b"){
        window.location.href = "./cart.html";
    }
});

//This is where the cart table generation method goes.

if (window.location.href.includes("cart")){ 
    let table = document.getElementById("table");

    for (i = 0; i < productNames.length; i++){ //One row takes two data.
        let row = document.createElement("tr");
        let data1 = document.createElement("td");
        let data2 = document.createElement("td");
        let imgHolder = document.createElement("td");
        
        let text1 = document.createTextNode(productNames[i]);
        let text2 = document.createTextNode("$" + productPrices[i]);

        let img = document.createElement("img");
        img.id = `img${i}`;
        img.src = "./images/can.png";
        img.alt = "Trash Can Machine Broke";
        img.height = "20";
        img.width = "20";

        table.appendChild(row);
        row.appendChild(data1);
        row.appendChild(data2);
        row.appendChild(imgHolder);
        data1.appendChild(text1);
        data2.appendChild(text2);
        imgHolder.appendChild(img);

        document.getElementById(img.id).addEventListener('click', function(){ //This is for the delete button.
            let elementNumber = img.id.slice(3, img.id.length);
            productNames.splice(elementNumber, 1);
            productPrices.splice(elementNumber, 1);
            cookieSetter();
            location.reload();
        })
    }

    if (document.getElementById("img0") != null){ //To set the total price and add the buy/reset buttons at the bottom of it all
        let finalRow = document.createElement("tr");
        let trueFinalRow = document.createElement("tr");
        let emptySpot = document.createElement("td");
        let totalPriceSpot = document.createElement("td");
        let purchaseButtonSpot = document.createElement("td");
        let resetyButtonSpot = document.createElement("td");
        let notEmptySpot = document.createTextNode("Total Price:");
        let purchaseButton = document.createElement("button");
        let resetyButton = document.createElement ("button");

        purchaseButton.id = "buyButton";
        purchaseButton.type = "button";
        purchaseButton.textContent = "Buy";
        resetyButton.id = "resetButton";
        resetyButton.type = "button";
        resetyButton.textContent = "Empty Cart";

        totalPrice = 0;
        productPrices.forEach(nyan => {totalPrice = totalPrice + parseFloat(nyan)});
        let totalPriceText = document.createTextNode(`$${totalPrice.toFixed(2)}`);

        table.appendChild(finalRow);
        table.appendChild(trueFinalRow);
        finalRow.appendChild(emptySpot);
        finalRow.appendChild(totalPriceSpot);
        totalPriceSpot.appendChild(totalPriceText);
        emptySpot.appendChild(notEmptySpot);
        trueFinalRow.appendChild(purchaseButtonSpot);
        trueFinalRow.appendChild(resetyButtonSpot);
        purchaseButtonSpot.appendChild(purchaseButton);
        resetyButtonSpot.appendChild(resetyButton);

        document.getElementById("buyButton").addEventListener('click', function(){
            alert("Purchase Succeeded! (This is not a real shop, this is as far as you can get.");
        });
        
        document.getElementById("resetButton").addEventListener('click', function(){
            productNames.splice(0);
            productPrices.splice(0);
            document.cookie=`productPrices=${productPrices};Max-Age=0; Secure;`;
            document.cookie=`productNames=${productNames};Max-Age=0; Secure;`;
            location.reload();
        })
        
    }
}




//The below is just test code again
function clicked(clicked_id)
  {
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
