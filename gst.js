let mart = document.querySelector('.mart');
let bill = document.querySelector('.bill');
let Grandtotal = document.querySelector('#Grandtotal');

Grandtotal.addEventListener('click',(e)=>{
 e.preventDefault()
 
 let price = document.querySelector('#price').value;
 let Quantity = document.querySelector('#Quantity').value;
 let GST = document.querySelector('#GST').value;

 let billdata = document.createElement('div')
 let billprice = document.createElement('input');
 let billQuantity = document.createElement('input');
 let billGST = document.createElement('input');
  
 let totalbill1 = document.createElement('label');
   totalbill1.innerHTML = "Totalbill";
//    totalbill1.style.cssText = "margin-right:20px color:green";
 let totalbill = document.createElement('input');


 billGST.setAttribute('readonly','readonly')

 billprice.value = price;
 billQuantity.value = Quantity;
 billGST.value = GST;



bill.appendChild(billdata);
billdata.appendChild(billprice);
billdata.appendChild(billQuantity);
billdata.appendChild(billGST);
billdata.appendChild(totalbill1)
billdata.appendChild(totalbill);

console.log(billprice.value);
console.log(billQuantity.value);
console.log(billGST.value);



let total = parseInt(billprice.value) * parseInt(billQuantity.value)  ;

GST = (total*18)/100

totalbill.value = total + GST
console.log(total);

})