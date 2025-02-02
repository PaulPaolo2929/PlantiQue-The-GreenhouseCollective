function filterProducts() {
    let searchQuery = document.getElementById("searchBar").value.toLowerCase();
    let products = document.querySelectorAll(".product");
  
    products.forEach(function(product) {
      let productName = product.getAttribute("data-name").toLowerCase();
      if (productName.includes(searchQuery)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }
  
  