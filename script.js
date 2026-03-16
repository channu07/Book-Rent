let books=[
{id:1,title:"Malegalalli Madumagalu - Kuvempu",category:"kannada novel",price:250,rating:4.8,image:"https://th.bing.com/th/id/R.18663e5ba2b206ef89603a563b0b19d8?rik=YPMw7CRGUImLuw&riu=http%3a%2f%2frukmini1.flixcart.com%2fimage%2f300%2f300%2fkuof5ow0%2fregionalbooks%2fn%2fk%2fm%2fmalegalalli-madumagalu-hardcover-kannada-kuvempu-4-6-140-ratings-original-imag7qxyp2gwzjvg.jpeg&ehk=j3IOMbAXaDWs8SVvYbUGfcybmQ%2fo7byWLAhfi26%2b1h4%3d&risl=&pid=ImgRaw&r=0"},
{id:2,title:"Mookajjiya Kanasugalu",category:"kannada novel",price:300,rating:4.7,image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1354026606i/16174509._UY200_.jpg"},
{id:3,title:"JavaScript Guide",category:"coding",price:350,rating:4.5,image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1575201309i/49021905.jpg"},
{id:4,title:"Python Programming",category:"coding",price:400,rating:4.6,image:"https://tse4.mm.bing.net/th/id/OIP.MY5ITFXbtMDObl8j50yrjwHaHU?w=557&h=550&rs=1&pid=ImgDetMain&o=7&rm=3"},
{id:5,title:"HTML & CSS Design",category:"coding",price:500,rating:4.4,image:"https://tse1.mm.bing.net/th/id/OIP.kO7GNWjnr9R-c0Sau4hRtAHaHa?w=700&h=700&rs=1&pid=ImgDetMain&o=7&rm=3"},
{id:6,title:"Machine Learning",category:"learning",price:600,rating:4.3,image:"https://tse3.mm.bing.net/th/id/OIP.z85FDfsuBfRW6pD8iarbIgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"},
{id:7,title:"Deep Learning",category:"learning",price:200,rating:4.5,image:"https://m.media-amazon.com/images/I/81ocRIIDRwL._SL1500_.jpg"},
{id:8,title:"React Guide",category:"coding",price:350,rating:4.4,image:"https://tse3.mm.bing.net/th/id/OIP.o2UpCnJR1l2GyvdN3wBcqwHaJL?rs=1&pid=ImgDetMain&o=7&rm=3"},
{id:9,title:"Node.js Basics",category:"coding",price:200,rating:4.2,image:"https://m.media-amazon.com/images/I/71Hks+N9ESL._AC_UF1000,1000_QL80_.jpg"},
{id:10,title:"Clean Code",category:"coding",price:150,rating:4.9,image:"https://m.media-amazon.com/images/S/aplus-media/sota/b136d8dd-6bad-48db-9978-6e8ba44a8a7c.__CR0,0,300,300_PT0_SX300_V1___.jpg"},
{id:11,title:"karavlo",category:"kannada novel",price:260,rating:4.8,image:"https://tse3.mm.bing.net/th/id/OIP.b1gRjVrSLa8XSyN1XfpB2wAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"},
{id:12,title:"Bhagavad Gita",category:"kannada novel",price:270,rating:4.7,image:"https://m.media-amazon.com/images/I/71xY3i7iUdL._SY342_.jpg"},
{id:13,title:"Think like a Monk",category:"English novel",price:360,rating:4.5,image:"https://tse3.mm.bing.net/th/id/OIP.kUztcUcaLhthr22YCPlONgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"},
{id:14,title:"The White Tiger",category:"English novel",price:340,rating:4.6,image:"https://tse3.mm.bing.net/th/id/OIP.B46Hi6NwKm9JCyO2ePomCAHaGg?rs=1&pid=ImgDetMain&o=7&rm=3"},
{id:15,title:"Automic Changes",category:"English novel",price:390,rating:4.4,image:"https://tse2.mm.bing.net/th/id/OIP.VYg6TJabOeGmoJrH0dCzkAHaJk?w=792&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3"},
{id:16,title:"Wings Of Fire",category:"English novel",price:250,rating:4.3,image:"https://www.adazing.com/wp-content/uploads/2023/06/Wings-of-Fire-Book-Covers-Winter-Turning-Graphic-Novel-scaled.jpg"},
{id:17,title:"Learning  Skils of Life",category:"learning",price:500,rating:4.5,image:"https://m.media-amazon.com/images/I/51PfpjDGPzL._AC_UF1000,1000_QL80_.jpg"},
{id:18,title:"Creating & Learining Without Limits",category:"learning",price:120,rating:4.4,image:"https://2.bp.blogspot.com/-Ffwyi51cAhk/T_TSRmP11YI/AAAAAAAABo4/1uDejDTbxJs/s1600/bookcover2.jpg"},
{id:19,title:"Educational Psychology",category:"learning",price:300,rating:4.2,image:"https://tse4.mm.bing.net/th/id/OIP.7VYxRXOH2ZMkv5mP3nA9fwHaJw?rs=1&pid=ImgDetMain&o=7&rm=3"},
{id:20,title:"Educational Technology",category:"learning",price:160,rating:4.9,image:"https://m.media-amazon.com/images/I/51DAtO5wBpL.jpg"},
{id:21,title:"Ramayana",category:"kannada novel",price:560,rating:4.8,image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmGJhj5u9UBcJ1340320MQ7LXILOqCXQJqdJzP68T0La5iiIcK_ZVxneIenQPG8IvnNqW8oQuZMLGEy9TsWPXA1rYJcZPv"},
{id:22,title:"Chomana Dudi",category:"kannada novel",price:100,rating:4.7,image:"https://pustakamane.com/wp-content/uploads/2023/10/1-3.jpg"},
{id:23,title:"Rich Dad Poor Dad",category:"English novel",price:150,rating:4.5,image:"https://tse3.mm.bing.net/th/id/OIP.x8eVoHpFohVarytbPbMyeAHaG1?rs=1&pid=ImgDetMain&o=7&rm=3"},
{id:24,title:"The Greatest Secret",category:"English novel",price:180,rating:4.6,image:"https://tse4.mm.bing.net/th/id/OIP.kW-7E402FsQ4BtHJ0kHWwwAAAA?w=409&h=400&rs=1&pid=ImgDetMain&o=7&rm=3"},
]



let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayBooks(list) {
  let container = document.getElementById("bookList");
  if (!container) return;

  container.innerHTML = ""; // clear previous content

  list.forEach(book => {
    container.innerHTML += `
      <div class="book">
        <img src="${book.image}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p>⭐ ${book.rating}</p>
        <p>₹${book.price}</p>

        <!-- Single container for all buttons -->
        <div class="button-row">
          <button onclick="buyBook(${book.id})">Buy</button>
          <button onclick="addToCart(${book.id})">Add to Cart</button>
          <button onclick="rentBook(${book.id})">Rent</button>
        </div>
      </div>
    `;
  });
}

if(document.getElementById("bookList")){
displayBooks(books)
}

function searchBooks(){

let input=document.getElementById("search").value.toLowerCase()

let filtered=books.filter(b=>b.title.toLowerCase().includes(input))

displayBooks(filtered)

}


function addToCart(id){

let book=books.find(b=>b.id===id)

cart.push(book)

localStorage.setItem("cart",JSON.stringify(cart))

alert("Added to cart")

}



function buyBook(id){

let user = localStorage.getItem("user");

if(!user){
alert("Please login first");
window.location = "login.html";
return;
}

localStorage.setItem("selectedBook", id);
localStorage.setItem("orderType", "buy");

window.location = "address.html";
}

function rentBook(id){

let user = localStorage.getItem("user");

if(!user){
alert("Please login first");
window.location = "login.html";
return;
}

let days = prompt("Enter rent days (Max 30 days)");

if(days === null) return;

days = parseInt(days);

if(days > 30){
alert("Maximum rent duration is 30 days.");
return;
}

if(days <= 0){
alert("Enter valid number of days");
return;
}

localStorage.setItem("rentBookId", id);
localStorage.setItem("rentDays", days);
localStorage.setItem("orderType", "rent");

window.location = "address.html";
}

function displayCart(){

let container = document.getElementById("cartContainer");
if(!container) return;

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

container.innerHTML = "";

if(cart.length === 0){
container.innerHTML = `<div class="empty-cart">Your cart is empty</div>`;
document.getElementById("totalPrice").innerText = 0;
return;
}

cart.forEach((book, i) => {

total += book.price;

container.innerHTML += `
<div class="cart-item">
    <img src="${book.image}" alt="${book.title}">
    
    <div class="item-details">
        <h3>${book.title}</h3>
        <p>Category: ${book.category}</p>
        <p>Rating: ⭐ ${book.rating}</p>
        <p class="price">Price: ₹${book.price}</p>
        <button class="remove-btn" onclick="removeItem(${i})">Remove</button>
    </div>
</div>
`;
});

document.getElementById("totalPrice").innerText = total;
}

if(document.getElementById("cartContainer")){
displayCart();
}

function removeItem(i){

let cart=JSON.parse(localStorage.getItem("cart"))||[]

cart.splice(i,1)

localStorage.setItem("cart",JSON.stringify(cart))

displayCart()
}


function checkout() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if(cart.length === 0){
        alert("Your cart is empty. Please add books first.");
        return;
    }

    localStorage.setItem("orderType", "cart");
    window.location.href = "address.html";
}

function createAccount(){

let user = document.getElementById("username").value.trim();
let pass = document.getElementById("password").value.trim();

if(user == "" || pass == ""){
alert("Enter username and password");
return;
}

let users = JSON.parse(localStorage.getItem("users")) || [];

for(let u of users){
if(u.username.toLowerCase() == user.toLowerCase()){
alert("Account already exists");
return;
}
}

users.push({
username: user,
password: pass
});

localStorage.setItem("users", JSON.stringify(users));

alert("Account Created Successfully!");
}

function login(){

let user = document.getElementById("username").value.trim();
let pass = document.getElementById("password").value.trim();

if(user == "" || pass == ""){
alert("Please enter username and password");
return;
}

let users = JSON.parse(localStorage.getItem("users")) || [];

for(let u of users){
if(u.username === user && u.password === pass){

localStorage.setItem("user", user);

alert("Login Successful");
window.location = "index.html";
return;
}
}

alert("Wrong username or password");
}
function submitAddress(){

let name = document.getElementById("name").value.trim();
let phone = document.getElementById("phone").value.trim();
let address = document.getElementById("address").value.trim();

let namePattern = /^[A-Za-z ]+$/;
let phonePattern = /^[0-9]{10}$/;

if(name == ""){
alert("Please enter your name");
return;
}

if(!namePattern.test(name)){
alert("Name should contain only letters");
return;
}

if(!phonePattern.test(phone)){
alert("Enter valid 10 digit phone number");
return;
}

if(address.length < 10){
alert("Please enter full address");
return;
}

// save address details
localStorage.setItem("customerName", name);
localStorage.setItem("customerPhone", phone);
localStorage.setItem("customerAddress", address);

// go to payment page
window.location = "payment.html";
}
function returnRentBook(i){

let rentedBooks = JSON.parse(localStorage.getItem("rentedBooks")) || [];

let returnedBook = rentedBooks[i];

alert("Return Request Submitted!\n\nBook: " + returnedBook.title + "\nMessage: Book will be collected soon.");

rentedBooks.splice(i,1);

localStorage.setItem("rentedBooks", JSON.stringify(rentedBooks));

let returnRequests = JSON.parse(localStorage.getItem("returnRequests")) || [];
returnRequests.push({
title: returnedBook.title,
type: "Rent Return",
status: "Book will be collected soon"
});
localStorage.setItem("returnRequests", JSON.stringify(returnRequests));

showRentBooks();
}

function returnBuyBook(i){

let boughtBooks = JSON.parse(localStorage.getItem("boughtBooks")) || [];

let returnedBook = boughtBooks[i];

alert("Return Request Submitted!\n\nBook: " + returnedBook.title + "\nMessage: Your payment will be returned soon.");

boughtBooks.splice(i,1);

localStorage.setItem("boughtBooks", JSON.stringify(boughtBooks));

let returnRequests = JSON.parse(localStorage.getItem("returnRequests")) || [];
returnRequests.push({
title: returnedBook.title,
type: "Buy Return",
status: "Your payment will be returned soon"
});
localStorage.setItem("returnRequests", JSON.stringify(returnRequests));

showBuyBooks();
}function showBuyBooks(){

let container = document.getElementById("returnList");
if(!container) return;

let boughtBooks = JSON.parse(localStorage.getItem("boughtBooks")) || [];

container.innerHTML = "";

if(boughtBooks.length === 0){
container.innerHTML = "<div class='no-books'>No purchased books found</div>";
return;
}

boughtBooks.forEach((book,i)=>{

container.innerHTML += `
<div class="return-item">
<p>📕 ${book.title}</p>
<button onclick="returnBuyBook(${i})">Return Book</button>
</div>
`;

});
}

function showRentBooks(){

let container = document.getElementById("returnList");
if(!container) return;

let rentedBooks = JSON.parse(localStorage.getItem("rentedBooks")) || [];

container.innerHTML = "";

if(rentedBooks.length === 0){
container.innerHTML = "<div class='no-books'>No rented books found</div>";
return;
}

rentedBooks.forEach((book,i)=>{

container.innerHTML += `
<div class="return-item">
<p>📘 ${book.title} <br><small>Days: ${book.days}</small></p>
<button onclick="returnRentBook(${i})">Return Book</button>
</div>
`;

});
}

function showPaymentFields(){

let selected = document.querySelector('input[name="payment"]:checked').value;

let upiFields = document.getElementById("upiFields");
let cardFields = document.getElementById("cardFields");
let bankFields = document.getElementById("bankFields");

if(upiFields) upiFields.style.display = "none";
if(cardFields) cardFields.style.display = "none";
if(bankFields) bankFields.style.display = "none";

document.querySelectorAll(".payment-option").forEach(option => {
option.classList.remove("active-option");
});

document.querySelector('input[name="payment"]:checked').parentElement.classList.add("active-option");

if(selected === "UPI"){
if(upiFields) upiFields.style.display = "block";
}
else if(selected === "Card"){
if(cardFields) cardFields.style.display = "block";
}
else if(selected === "Net Banking"){
if(bankFields) bankFields.style.display = "block";
}
}

function loadPaymentSummary(){

let container = document.getElementById("paymentSummary");
if(!container) return;

let orderType = localStorage.getItem("orderType");
let html = "";
let total = 0;

if(orderType === "buy"){
let buyId = localStorage.getItem("selectedBook");
let book = books.find(b => b.id == buyId);

if(book){
total = book.price;
html = `
<div class="summary-box">
<p><strong>Book:</strong> ${book.title}</p>
<p><strong>Category:</strong> ${book.category}</p>
<p><strong>Price:</strong> ₹${book.price}</p>
</div>
<p class="summary-total">Total: ₹${total}</p>
`;
}
}

else if(orderType === "rent"){
let rentId = localStorage.getItem("rentBookId");
let rentDays = localStorage.getItem("rentDays");
let book = books.find(b => b.id == rentId);

if(book){
total = rentDays * 10;
html = `
<div class="summary-box">
<p><strong>Book:</strong> ${book.title}</p>
<p><strong>Rent Days:</strong> ${rentDays}</p>
<p><strong>Rent Charge:</strong> ₹${total}</p>
</div>
<p class="summary-total">Total: ₹${total}</p>
`;
}
}

else if(orderType === "cart"){
let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.forEach(book => {
total += book.price;
html += `
<div class="summary-box">
<p><strong>${book.title}</strong></p>
<p>Price: ₹${book.price}</p>
</div>
`;
});

html += `<p class="summary-total">Total: ₹${total}</p>`;
}

container.innerHTML = html;
}

function confirmPayment(){

let selected = document.querySelector('input[name="payment"]:checked');

if(!selected){
alert("Please select payment method");
return;
}

let paymentMethod = selected.value;

if(paymentMethod === "UPI"){
let upiId = document.getElementById("upiId").value.trim();
if(upiId === ""){
alert("Please enter UPI ID");
return;
}
}

if(paymentMethod === "Card"){
let cardName = document.getElementById("cardName").value.trim();
let cardNumber = document.getElementById("cardNumber").value.trim();
let expiry = document.getElementById("expiry").value.trim();
let cvv = document.getElementById("cvv").value.trim();

if(cardName === "" || cardNumber === "" || expiry === "" || cvv === ""){
alert("Please fill all card details");
return;
}

if(cardNumber.length < 12){
alert("Enter valid card number");
return;
}

if(cvv.length < 3){
alert("Enter valid CVV");
return;
}
}

if(paymentMethod === "Net Banking"){
let bankName = document.getElementById("bankName").value;
let accountNumber = document.getElementById("accountNumber").value.trim();

if(bankName === "" || accountNumber === ""){
alert("Please fill bank details");
return;
}
}

localStorage.setItem("paymentMethod", paymentMethod);

let name = localStorage.getItem("customerName");
let phone = localStorage.getItem("customerPhone");
let address = localStorage.getItem("customerAddress");
let orderType = localStorage.getItem("orderType");

if(orderType === "rent"){

let rentId = localStorage.getItem("rentBookId");
let rentDays = localStorage.getItem("rentDays");
let book = books.find(b => b.id == rentId);
let price = rentDays * 10;

let rentedBooks = JSON.parse(localStorage.getItem("rentedBooks")) || [];
rentedBooks.push({
title: book.title,
days: rentDays
});
localStorage.setItem("rentedBooks", JSON.stringify(rentedBooks));

alert(
"Payment Successful\n\n" +
"Book: " + book.title +
"\nOrder Type: Rent" +
"\nDays: " + rentDays +
"\nPrice: ₹" + price +
"\nPayment: " + paymentMethod +
"\nName: " + name +
"\nPhone: " + phone +
"\nAddress: " + address
);

localStorage.removeItem("rentBookId");
localStorage.removeItem("rentDays");
localStorage.removeItem("orderType");
}

else if(orderType === "buy"){

let buyId = localStorage.getItem("selectedBook");
let book = books.find(b => b.id == buyId);

let boughtBooks = JSON.parse(localStorage.getItem("boughtBooks")) || [];
boughtBooks.push(book);
localStorage.setItem("boughtBooks", JSON.stringify(boughtBooks));

alert(
"Payment Successful\n\n" +
"Book: " + book.title +
"\nOrder Type: Buy" +
"\nPrice: ₹" + book.price +
"\nPayment: " + paymentMethod +
"\nName: " + name +
"\nPhone: " + phone +
"\nAddress: " + address
);

localStorage.removeItem("selectedBook");
localStorage.removeItem("orderType");
}

else if(orderType === "cart"){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

if(cart.length === 0){
alert("No order found");
return;
}

let total = 0;
let bookNames = "";

cart.forEach(book => {
total += book.price;
bookNames += "- " + book.title + "\n";
});

let boughtBooks = JSON.parse(localStorage.getItem("boughtBooks")) || [];
boughtBooks.push(...cart);
localStorage.setItem("boughtBooks", JSON.stringify(boughtBooks));

alert(
"Payment Successful\n\n" +
"Cart Books:\n" + bookNames +
"\nTotal Price: ₹" + total +
"\nPayment: " + paymentMethod +
"\nName: " + name +
"\nPhone: " + phone +
"\nAddress: " + address
);

localStorage.removeItem("cart");
localStorage.removeItem("orderType");
}

else{
alert("No order found");
return;
}

localStorage.removeItem("customerName");
localStorage.removeItem("customerPhone");
localStorage.removeItem("customerAddress");
localStorage.removeItem("paymentMethod");

window.location = "index.html";
}

if(document.getElementById("paymentSummary")){
loadPaymentSummary();
showPaymentFields();
}