const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});



const filter = document.getElementById("filter");
const sort = document.getElementById("sort");
const cards = [...document.querySelectorAll(".card")];

filter.addEventListener("change", () => {
  cards.forEach(card => {
    const price = parseInt(card.querySelector(".price").textContent.replace("$",""));
    if(filter.value === "low" && price >= 30) card.style.display="none";
    else if(filter.value === "high" && price < 30) card.style.display="none";
    else card.style.display="flex";
  });
});

sort.addEventListener("change", () => {
  const sorted = cards.sort((a,b) => {
    const pa = parseInt(a.querySelector(".price").textContent.replace("$",""));
    const pb = parseInt(b.querySelector(".price").textContent.replace("$",""));
    return sort.value==="asc"? pa-pb : pb-pa;
  });
  document.querySelector(".product-cards").append(...sorted);
});



// cart section
let cartCount = 0;
document.querySelectorAll(".card button").forEach(btn => {
  btn.addEventListener("click", () => {
    cartCount++;
    document.getElementById("cart").textContent = `🛒 Cart (${cartCount})`;
  });
});

// add to favriot icon
document.querySelectorAll(".fav").forEach(fav => {
    fav.addEventListener("click", () => {
      fav.classList.toggle("active");
      fav.textContent = fav.classList.contains("active") ? "❤️" : "♡";
    });
  });
  