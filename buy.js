const productNames = [];
const productPrices = [];
let totalPrice = 0;

document.addEventListener("keypress", function(b){
    if (b.key === "b"){
        //Buy logic
        //Test code to move to a one-time button
        productPrices.forEach(nyan => {totalPrice = totalPrice + parseFloat(nyan)});
        alert(totalPrice.toFixed(2));
    }
})


//The below is just test code again
function clicked(clicked_id)
  {
      alert(clicked_id);
      let itemPrice = clicked_id.slice(clicked_id.indexOf("$") +1);
      productPrices.push(itemPrice);
  }