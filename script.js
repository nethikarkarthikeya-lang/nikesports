document.getElementById("shopNow").addEventListener("click", () => {
    window.scrollTo({
        top: document.querySelector(".products").offsetTop,
        behavior: "smooth"
    });
});

const cartButtons = document.querySelectorAll(".addCart");

cartButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("✅ Added to cart!");
    });
});
