let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
  updateCount();
}

function updateCount() {
  const el = document.getElementById("cartCount");
  if (el) el.innerText = cart.length;
}
updateCount();

if (document.getElementById("cartItems")) {
  let html = "";
  cart.forEach((i, idx) => {
    html += `<p>${i.name} - ${i.price} AED 
    <button onclick="removeItem(${idx})">❌</button></p>`;
  });
  document.getElementById("cartItems").innerHTML = html;
}

function removeItem(i) {
  cart.splice(i,1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

function sendWhatsApp() {
  let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;
  let phone = document.getElementById("phone").value;
  let payment = document.getElementById("payment").value;

  let order = cart.map(i => i.name + " - " + i.price + " AED").join("%0A");

  let msg = `Order:%0A${order}%0A%0AName:${name}%0AAddress:${address}%0APhone:${phone}%0APayment:${payment}`;

  window.open("https://wa.me/971566514365?text=" + msg);
}let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
  updateCount();
}

function updateCount() {
  const el = document.getElementById("cartCount");
  if (el) el.innerText = cart.length;
}
updateCount();

if (document.getElementById("cartItems")) {
  let html = "";
  cart.forEach((i, idx) => {
    html += `<p>${i.name} - ${i.price} AED 
    <button onclick="removeItem(${idx})">❌</button></p>`;
  });
  document.getElementById("cartItems").innerHTML = html;
}

function removeItem(i) {
  cart.splice(i,1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

function sendWhatsApp() {
  let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;
  let phone = document.getElementById("phone").value;
  let payment = document.getElementById("payment").value;

  let order = cart.map(i => i.name + " - " + i.price + " AED").join("%0A");

  let msg = `Order:%0A${order}%0A%0AName:${name}%0AAddress:${address}%0APhone:${phone}%0APayment:${payment}`;

  window.open("https://wa.me/971566514365?text=" + msg);
}let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
  updateCount();
}

function updateCount() {
  const el = document.getElementById("cartCount");
  if (el) el.innerText = cart.length;
}
updateCount();

if (document.getElementById("cartItems")) {
  let html = "";
  cart.forEach((i, idx) => {
    html += `<p>${i.name} - ${i.price} AED 
    <button onclick="removeItem(${idx})">❌</button></p>`;
  });
  document.getElementById("cartItems").innerHTML = html;
}

function removeItem(i) {
  cart.splice(i,1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

function sendWhatsApp() {
  let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;
  let phone = document.getElementById("phone").value;
  let payment = document.getElementById("payment").value;

  let order = cart.map(i => i.name + " - " + i.price + " AED").join("%0A");

  let msg = `Order:%0A${order}%0A%0AName:${name}%0AAddress:${address}%0APhone:${phone}%0APayment:${payment}`;

  window.open("https://wa.me/971566514365?text=" + msg);
}
