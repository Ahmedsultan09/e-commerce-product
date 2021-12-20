// Pop Up
let cart = document.querySelector(".cart-icon");
let popup = document.querySelector('.popup-cart');

cart.addEventListener('mouseover', function () {
    popup.style.visibility = 'visible';
    popup.addEventListener('mouseover', function () {
        popup.style.visibility = 'visible';
    })
})
cart.addEventListener('mouseout', function () {
    popup.style.visibility = 'hidden';
    popup.addEventListener('mouseout', function () {
        popup.style.visibility = 'hidden';

    })
})

// End of Pop Up

// Left-side Content Minipulation

let mainImg = document.querySelector('.main-img img')
let thumbImg = document.querySelectorAll(".thumbnails img")
let mainImgAtrr = mainImg.getAttribute('src');
thumbImg.forEach((thumb) => {
    thumb.addEventListener('click', function (e) {
        let newAtrr = e.currentTarget.src
        thumbImg.forEach((element) => {
            element.classList.remove('thumbnail-click');
            e.currentTarget.classList.add('thumbnail-click')
        })
        mainImg.setAttribute('src', newAtrr)
    })
})

// End of Left-side Contnet

// Right-side Content Minipulation
let counter = document.querySelector('#counter');
let plusBtn = document.querySelector('#plus');
let minusBtn = document.querySelector('#minus');
let oldCounter = +counter.innerHTML;

plusBtn.addEventListener('click', async function () {
    let newCounter = ++oldCounter;
    return counter.innerHTML = +`${newCounter}`;

})

minusBtn.addEventListener('click', async function () {
    if (oldCounter != 1) {
        let newCounter = --oldCounter;
        return counter.innerHTML = +`${newCounter}`;
    }
})



// Add elements to cart


let cartDiv = document.querySelector('.cart-element');
let emptyCart = document.querySelector('.empty-cart');
let addToCartBtn = document.querySelector('.add-to-cart button');
let cartTitle = document.querySelector('.content .right-side h2');
let cartData = [];


// Product object

var productDetails = {
    productName: cartTitle.innerHTML,
    productPrice: 125,
}


// Create Cart Element 

function createCartElement() {
    let elementDetails = document.createElement('div');
    elementDetails.classList.add('element-details');
    cartDiv.appendChild(elementDetails)
    // add image
    let cartImage = document.createElement('img');
    cartImage.setAttribute('src', mainImgAtrr)
    elementDetails.appendChild(cartImage)
    // Bold total price
    let totalPrice = document.createElement('b')
    totalPrice.innerHTML = `$${productDetails.productPrice * oldCounter}`

    // add specifications 
    let productTitle = document.createElement('p')
    productTitle.classList.add('cart-product-disc');
    productTitle.innerHTML = `${productDetails.productName} ${productDetails.productPrice} X ${oldCounter} Total :`;
    elementDetails.appendChild(productTitle)
    productTitle.appendChild(totalPrice)

    // Trash
    let deleteBtn = document.createElement('button');
    let deleteIcon = document.createElement('i');
    deleteIcon.setAttribute('class', 'far fa-trash-alt')
    deleteBtn.appendChild(deleteIcon);
    deleteBtn.id = 'trash'
    elementDetails.appendChild(deleteBtn);
    let allDeleteBtns = document.querySelectorAll('#trash')
    allDeleteBtns.forEach((del) => {
        del.addEventListener('click', function (e) {
            e.currentTarget.parentElement.remove()

        })
    })

    deleteBtn.addEventListener('click', function () {
        cartData.pop()
        if (cartData.length = 0) {
            emptyCart.style.display = 'block'
        }
    })

}

function checkOutBtn() {
    // Checout button
    let popUpCart = document.querySelector('.popup-cart');
    let CheckoutBtn = document.createElement('button');
    CheckoutBtn.classList.add('cart-checkout');
    CheckoutBtn.innerHTML = 'Checkout';
    popUpCart.appendChild(CheckoutBtn)
}






if (cartData = []) {
    let emptyTitle = document.createElement('p');
    emptyTitle.classList.add('empty-cart')
    emptyTitle.innerHTML = "Your cart is empty"
    cartDiv.appendChild(emptyTitle)
}


addToCartBtn.addEventListener('click', function () {
    cartData.push(productDetails.productName)
    if (cartData.length === 0) {
        let emptyTitle = document.createElement('p');
        emptyTitle.classList.add('empty-cart')
        emptyTitle.innerHTML = "Your cart is empty"
        cartDiv.appendChild(emptyTitle)
    }
    else if (cartData.length != 0) {
        document.querySelector('.empty-cart').style.display = 'none'
    }
})


addToCartBtn.addEventListener('click', function () {
    createCartElement();
    oldCounter = 1;
    counter.innerHTML = oldCounter;
})


