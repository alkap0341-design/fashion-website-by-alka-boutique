

    
const slides = document.querySelectorAll(".slidecard");
const cards = document.querySelectorAll(".card");
let count = 0;

// Image Slider
slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`;
});

function slideImage(){
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${count * 100}%)`;
    });
}

let sliderInterval = setInterval(function(){
    count++;
    if(count == slides.length){
        count = 0;
    }
    slideImage();
}, 2500); // 2.5 sec is better than 2 sec

// Card Details Popup
cards.forEach(function(card){
    card.addEventListener("click", function(){
        // Stop slider when detail open
        clearInterval(sliderInterval);
        document.querySelector(".container").style.display = "none";

        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML = `
            <img src="${card.firstElementChild.src}" alt="Product Image">
            <div class="cardText">
                <h2>Top Trending Wear</h2>
                <h2>Upto 30% OFF - Hurry!</h2>
                <p>✓ Pure Cotton</p>
                <p>✓ Best Quality</p>
                <p>✓ Best Price</p>
                <p>✓ Trending Collection</p>
                <button>Buy Now</button>
                <button>Add To Cart</button>
                <a href="#" id="backBtn">← Back to Shopping</a>
            </div>
        `;
        document.querySelector("body").append(div);

        // Back button working//
        document.getElementById("backBtn").addEventListener("click", function(e){
            e.preventDefault();
            div.remove();
            document.querySelector(".container").style.display = "block";
            // Restart slider//
            sliderInterval = setInterval(function(){
                count++;
                if(count == slides.length) count = 0;
                slideImage();
            }, 2500);
        });
    });
});

