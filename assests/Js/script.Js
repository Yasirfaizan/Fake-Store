const container = document.getElementById('container');


axios.get('https://api.escuelajs.co/api/v1/products')
  .then(function (response) {
    // handle success
    const products = response.data;
    console.log(products);
    products.forEach(product => {
      const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = product.images[0];
        img.alt = product.title;
        img.style = "width:220px; height: 320px; object-fit: cover; border-radius: 10px;";

        const title = document.createElement('h2');
        title.textContent = product.title;
        title.className = 'card-title';

        const price = document.createElement('p');
        price.textContent = `$${product.price}`;
        price.className = 'card-price';

        const desc = document.createElement('p');
        desc.textContent = product.description;
        desc.className = 'card-desc';

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(desc);

        // Append the card to the container
        container.appendChild(card);
    })
  })
  .catch(function () {
    container.innerHTML = "<p style='color:red;'>Failed to load products.</p>";
  })