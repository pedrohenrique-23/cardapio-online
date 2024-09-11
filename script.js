const menu = document.querySelector("#menu")
const cartBtn = document.querySelector("#cart-btn")
const cartModal = document.querySelector("#cart-modal")
const cartItemsContainer = document.querySelector("#cart-items")
const cartTotal = document.querySelector("#cart-total")
const checkoutBtn = document.querySelector("#checkout-btn")
const closeModalBtn = document.querySelector("#close-modal-btn")
const cartCounter = document.querySelector("#cart-count")
const adressInput = document.querySelector("#adress")
const addresWarn = document.querySelector("#address-warn")

let cart = [];

cartBtn.addEventListener("click", function() {
    cartModal.style.display = "flex"
})