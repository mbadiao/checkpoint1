const prducts = [
  {
    image: "/assets/baskets.png",
    title: "Baskets",
    description: "This is a basket",
    price: 100,
    alt: "Baskets",
  },
  {
    image: "/assets/socks.png",
    title: "Baskets",
    description: "This is a socks",
    price: 20,
    alt: "socks",
  },
  {
    image: "/assets/bag.png",
    title: "Bag",
    description: "This is a Bag",
    price: 50,
    alt: "Bag",
  },
];

const bodyCard = document.querySelector(".list-products");
bodyCard.innerHTML = prducts.map((items) => {
  let { image, title, description, price, alt } = items;
  return `<div class="all-card-body">
    <div class="card" style="width: 18rem">
      <img
        src="${image}"
        class="card-img-top"
        alt="${alt}"
      />
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
        <h4 class="unit-price">${price} $</h4>
        <div>
          <i class="fas fa-plus-circle plus"></i>
          <span class="quantity">0</span>
          <i class="fas fa-minus-circle minus"></i>
        </div>
        <div>
          <i class="fas fa-trash-alt"></i>
          <i class="fas fa-heart"></i>
        </div>
      </div>
    </div>
  </div>`;
});

const trash = document.querySelectorAll(".fa-trash-alt");
const heart = document.querySelectorAll(".fa-heart");
const plusBtns = document.querySelectorAll(".plus");
const minusBtns = document.querySelectorAll(".minus");
// pour ajouter le nombre item
plusBtns.forEach((plusBtn) => {
  plusBtn.addEventListener("click", function () {
    const total = document.querySelector(".total");
    const totalPrice = parseInt(total.textContent);
    // on augmante la quantité associée à ce produit spécifique
    const quantitySpan = this.parentElement.querySelector(".quantity");
    // on convertie la valeur
    let quantity = parseInt(quantitySpan.textContent);
    quantity++;
    quantitySpan.textContent = quantity;
    // on prend le prix unitaire avec "parentElement.parentElement."
    const unit = this.parentElement.parentElement.querySelector(".unit-price");
    let unitnbr = parseInt(unit.textContent);
    total.textContent = `${totalPrice + unitnbr} $`;
  });
});
// pour dimunuer le nombre item
minusBtns.forEach((minusBtn) => {
  minusBtn.addEventListener("click", function () {
    const total = document.querySelector(".total");
    const totalPrice = parseInt(total.textContent);
    // on diminue la quantité associée à ce produit spécifique
    const quantitySpan = this.parentElement.querySelector(".quantity");
    // on convertie la valeur
    let quantity = parseInt(quantitySpan.textContent);
    if (quantity > 0) {
      quantity--;
      quantitySpan.textContent = quantity;
      const unit =
        this.parentElement.parentElement.querySelector(".unit-price");
      let unitnbr = parseInt(unit.textContent);
      total.textContent = `${totalPrice - unitnbr} $`;
    }
  });
});

// supprimer un item de la cart

trash.forEach((item) => {
  item.addEventListener("click", () => {
    // oreprend les valeurs de total
    const total = document.querySelector(".total");
    let totalPrice = parseInt(total.textContent);
    // nous utilisons la méthode closest() pour trouver l'élément parent avec la classe .card-body
    const body = item.closest(".all-card-body");
    // dans quand on prends body recuperons sa quantitee et son prix unitaire
    const quantityToRemove = body.querySelector(".quantity");
    const valueToRemove = body.querySelector(".unit-price");
    let quantity = parseInt(valueToRemove.textContent);
    let value = parseInt(quantityToRemove.textContent);
    //on change la valeur quand on delet l'item
    totalPrice -= quantity * value;
    total.textContent = `${totalPrice} $`;
    body.remove();
  });
});

// favorie
heart.forEach((favori) => {
  favori.addEventListener("click", () => {
    favori.classList.toggle("red-heart")
  });
});
