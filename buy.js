document.getElementById("cart").addEventListener('click', function(){
    if (productNames[0] === undefined){
        alert("Empty Cart.");
    }
    else{
        totalPrice = 0;
        productPrices.forEach(nyan => {totalPrice = totalPrice + parseFloat(nyan)});
        alert("Products:" + productNames + `\n Total Price: $${totalPrice.toFixed(2)}`);
    }
});

const productNames = [];
const productPrices = [];
let totalPrice = 0;

document.addEventListener("keypress", function(b){
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


//The below is just test code again
function clicked(clicked_id)
  {
      alert(clicked_id);
      let itemPrice = clicked_id.slice(clicked_id.indexOf("$") +1);
      let itemName = clicked_id.slice(0, clicked_id.indexOf("$") - 1);
      productPrices.push(itemPrice);
      productNames.push(" " + itemName);
  }