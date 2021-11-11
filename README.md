# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![](./images/screenshot.jpg)

### Links

- Solution URL: [https://github.com/prasanthk99/Ecommerce-Product-Page]
- Live Site URL: [https://vibrant-lumiere-77e479.netlify.app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I have learned some important topics while building this project. Some of  the html, css and javascript coding, I have gone through this project are given below.


```html
<div id="add-cart">
       <h4>Cart</h4>
       <hr>
       <div class="cartItems">
              <div>
                <img src="" alt="" class="cartImage">
              </div>
              <div class="carttxt">
                <p class="ctxt1"></p>
                <p class="ctxt2"></p>
              </div>
              <i class="fa-solid fa-trash" onclick="Delete()"></i>
       </div>
</div>
```
```css
.cart::after{
  content: attr(data-before);
  text-align: center;
  position: absolute;
  top:-18px;
  left: 15px;
  background-color: var(--Orange);
  color: var(--White);
  width: 22px;
  height: 20px;
  font-size: 12px;
  border-radius: 50%;
  padding-top: 4px;
  visibility: var(--Visible,hidden);
}
```
```js
function sideNavBar(){
    let navlink = document.getElementsByClassName("nav-links");
    for(let i =0;i<navlink.length;i++){
        document.getElementsByClassName("nav-links")[i].classList.toggle("res-navlinks");
    }
    document.getElementById("add-cart").classList.remove("cart-tab")
}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [StackOverflow](https://stackoverflow.com/) - This helped me to solve some questions and problems I have faced doing this project.
- [Font-Awesome](https://www.fontawesome.com) - This helped to insert some Icons into my site easily.

## Author

- Frontend Mentor - [@prasanthk99](https://www.frontendmentor.io/profile/prasanthk99)
