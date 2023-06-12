document.getElementById("add-to-cart").addEventListener("click", function() {
    alert("El libro ha sido agregado al carrito de compras.");
  });
  
  document.getElementById("cart-link").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Redirigiendo al carrito de compras...");
    // Aquí puedes redirigir al usuario a la página del carrito utilizando window.location.href = "/carrito.html";
  });  