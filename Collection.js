var productContainer=document.getElementById("products");
var search=document.getElementById("search");
var productlist = productContainer.querySelectorAll(".products-box");


const buttons=document.querySelectorAll(".btn");
const boxes=document.querySelectorAll(".products-box");




search.addEventListener("keyup",function(){
    var enteredvalue=event.target.value.toUpperCase().trim();

    for(count=0;count<productlist.length;count=count+1){
        var productname=productlist[count].querySelector("p").textContent;
        if(productname.toUpperCase().trim().indexOf(enteredvalue)<0){
            productlist[count].style.display="none";
        }
        else{
            productlist[count].style.display="block";   
        }
    }


});


buttons.forEach((button)=>{
button.addEventListener('click',(e)=>{

e.preventDefault();
setActiveBtn(e);
const btnfilter=e.target.dataset.filter;
boxes.forEach((box=>{
if(btnfilter=='all'){
    box.style.display="block";
}
else{
    const boxfilter=box.dataset.item;
    if(btnfilter==boxfilter){
        box.style.display="block";
    }
    else{
        box.style.display="none";
    }
}
}));
});

});

function  setActiveBtn(e){
buttons.forEach((button)=>{
    button.classList.remove('default');

});
e.target.classList.add('default');
}


//cart
const btnCart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnClose=document.querySelector('#cart-close')



btnCart.addEventListener('click',()=>{
cart.classList.add('cart-active');
});

btnClose.addEventListener('click',()=>{
cart.classList.remove('cart-active');
});


document.addEventListener('DOMContentLoaded',loadFood());


function loadFood(){
loadContent();

}

function loadContent(){
//removing items in cart
let btnRemove= document.querySelectorAll('.fa-trash'); 
btnRemove.forEach((btn)=>{
    btn.addEventListener('click',removeItem);
});

//changing product item
let qtyElements= document.querySelectorAll('.cart-quantity'); 
qtyElements.forEach((input)=>{
    input.addEventListener('change',changeQty);
});
//product cart
let cartBtns=document.querySelectorAll('.fa-cart-shopping');
cartBtns.forEach((btn)=>{
    btn.addEventListener('click',addCart);
});
updateTotal();


}

//remove item

function removeItem(){
if(confirm('Are you sure to remove')){
    let title=this.parentElement.querySelector('.cart-food-title').innerHTML;
   // console.log(title);
    itemList= itemList.filter(el=>el.title!=title);
    this.parentElement.remove();
    loadContent();
    
    
}

}


//changing quantity

function changeQty(){
if(isNaN(this.value) || this.value <1){
    this.value=1;
}
loadContent();
}

let itemList=[];

//add cart
function addCart(){
    let food=this.parentElement;
    let title=food.querySelector('.food-title').innerHTML;
    let price=food.querySelector('.food-price').innerHTML;
    let imgSrc=food.querySelector('.food-img').src;
    //console.log(title,price,imgSrc)
let newProduct={title,price,imgSrc}
//check product already exists in cart
if(itemList.find((el)=>el.title==newProduct.title))
{
    alert("Product already added in cart");
    return;
}
else{
    itemList.push(newProduct);
}



    let newProductElement=createCartProduct(title,price,imgSrc);
    let element=document.createElement('div');
    element.innerHTML=newProductElement;
    let cartBasket=document.querySelector('.cart-content');
    cartBasket.append(element);
    loadContent();

}
function createCartProduct(title,price,imgSrc){
    return ` 
    <div class="cart-box">
      <img src="${imgSrc}" alt="" class="cart-img">
      <div class="detail-box">
      <div class="cart-food-title">${title}</div>
      <div class="price-box">
        <div class="cart-price">${price}</div>
        <div class="cart-amt">${price}</div>
      </div>
      <input type="number" value="1" class="cart-quantity">
    </div>
    <i class="fa-solid fa-trash" name="trash" id="trash1"></i>
    </div> `;
}

function updateTotal(){
    const cartItems = document.querySelectorAll('.cart-box');
    const totalValue = document.querySelector('.total-price');
    let total = 0;
    cartItems.forEach(product => {
        let priceElement = product.querySelector('.cart-price');
        let price = parseFloat(priceElement.innerHTML.replace("Rs.", ""));
        let qty = product.querySelector('.cart-quantity').value;
        total += (price * qty);
        product.querySelector('.cart-amt').innerText = "Rs." + (price * qty);
    });
    totalValue.innerHTML = 'Rs.' + total;

    // add Product Count in cart icon



}


function placeorder() {
    console.log("Button clicked!");
    window.location.href = "PlaceOrder.html";
}


