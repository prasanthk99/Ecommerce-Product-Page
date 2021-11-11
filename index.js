
var element;

function thumbnail(product){
    for(let i =0;i<4;i++){
        element = document.querySelectorAll(".thumbnail")[i];
        if(element.classList.contains("opacity")){
            element.classList.remove("opacity");
        }
    }
    element = document.querySelectorAll(".thumbnail")[product-1];
    let Src = "images/image-product-"+product+".jpg";
    document.getElementById("product-img").src = Src;
    element.classList.add("opacity");

}

document.getElementById("product-fullsize").addEventListener("click",close);
document.querySelector(".Close").addEventListener("click",close);
if( document.getElementById("content").classList.contains("fullsize-img-opa")){
    window.addEventListener("click",close)
}


function close(){
    document.getElementById("content").classList.remove("fullsize-img-opa");
    document.querySelector(".nav").classList.remove("fullsize-img-opa");
    document.getElementById("product-fullsize").classList.remove("fullsize-img-vis");
}

function fullSize(Src){
    document.getElementById("content").classList +=" fullsize-img-opa";
    document.querySelector(".nav").classList +=" fullsize-img-opa";
    document.getElementById("product-fullsize").classList +=" fullsize-img-vis";
    document.getElementById("fullsize-img").src = Src;
}

function increment ()  {
    let val = document.querySelector('.quantity').value;
    document.querySelector('.quantity').value = Number(val) + 1;
}
function decrement ()  {
    let val = document.querySelector('.quantity').value;
    if(val>1){
        document.querySelector('.quantity').value -=1;
    }    
}

var quantity;
function addCart(){
    quantity = document.querySelector('.quantity').value;
    if(quantity>0){
        let image = document.querySelector(".cartImage");
        image.src = "images/image-product-1-thumbnail.jpg";

        document.querySelector(".ctxt1").innerText = "Fall Limited Edition Sneakers"

        let total = 125 * quantity;
        document.querySelector(".ctxt2").innerHTML = "$125 x "+quantity +" = <span class='total'>$"+total+"</span>";
        document.getElementById("add-cart").classList = "cart-tab";

        if(!document.querySelector(".checkout-btn")){
            let crelemt = document.createElement("BUTTON");
            crelemt.innerText = "CheckOut";
            document.getElementById("add-cart").appendChild(crelemt);
            crelemt.classList = "checkout-btn";
        }

        if(document.querySelector(".No-item")){
            document.querySelector(".No-item").remove();
        }
  
        document.querySelector(".cartItems").style.visibility= "inherit";

        document.querySelector(".cart").style.setProperty("--Visible","visible")

        noOfItemsinCart();
    }
}

var notif = document.querySelector(".cart");
function noOfItemsinCart(){
    notif.setAttribute("data-before",quantity);
}

function togglecart(){
    emptycartchecker();
    document.getElementById("add-cart").classList.toggle("cart-tab");
}

window.addEventListener("resize",()=>{
    document.getElementById("add-cart").classList.remove("cart-tab");
})

function emptycartchecker(){
    let check = document.querySelector(".ctxt1");
    let displayNoitem = document.querySelector("#add-cart");

    if(check.innerText == "" && !document.querySelector(".No-item")){
        displayNoitem.innerHTML += "<p class='No-item'>No items in cart</p>";
    }  
}

function Delete(){
    let cartImg = document.querySelector(".cartImage");
    let carttxt1 = document.querySelector(".ctxt1");
    let carttxt2 = document.querySelector(".ctxt2");

    cartImg.src="";
    carttxt1.innerText = "";
    carttxt2.innerText = "";
    document.querySelector(".checkout-btn").remove();

    document.querySelector(".cartItems").style.visibility= "hidden";
    document.querySelector("#add-cart").innerHTML += "<p class='No-item'>No items in cart</p>";
    quantity = "";
    
    noOfItemsinCart();
    document.querySelector(".cart").style.setProperty("--Visible","hidden")

};

function sideNavBar(){
    let navlink = document.getElementsByClassName("nav-links");
    for(let i =0;i<navlink.length;i++){
        document.getElementsByClassName("nav-links")[i].classList.toggle("res-navlinks");
    }
    document.getElementById("add-cart").classList.remove("cart-tab")
}

