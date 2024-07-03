let cardsdata= [
  {
    image:"images/projects/Branding/1.png",
    attribute:"brand"
},
{
  image:"images/projects/Branding/2.png",
  attribute:"brand"
},
{
  image:"images/projects/Branding/3.png",
  attribute:"brand"
},
{
  image:"images/projects/Branding/4.png",
  attribute:"brand"
},
{
  image:"images/projects/Branding/5.png",
  attribute:"brand"
},
{
  image:"images/projects/Branding/6.png",
  attribute:"brand"
},
{
  image:"images/projects/Branding/7.png",
  attribute:"brand"
},
{
  image:"images/projects/Branding/8.png",
  attribute:"brand"
},
{
  image:"images/projects/Branding/9.png",
  attribute:"brand"
},
{
  image:"images/projects/Branding/10.png",
  attribute:"brand"
},
{
  image:"images/projects/Branding/11.png",
  attribute:"brand"
},
{
  image:"images/projects/Branding/12.png",
  attribute:"brand"
},
{
  image:"images/projects/Branding/13.png",
  attribute:"brand"
},
{
  image:"images/Projects/Graphic Design/1.png",
  attribute:"graphic"
},
{
  image:"images/Projects/Graphic Design/2.png",
  attribute:"graphic"
},
{
  image:"images/Projects/Graphic Design/3.png",
  attribute:"graphic"
},
{
  image:"images/Projects/Graphic Design/4.png",
  attribute:"graphic"
},
{
  image:"images/Projects/Graphic Design/5.png",
  attribute:"graphic"
},
{
  image:"images/Projects/Graphic Design/6.png",
  attribute:"graphic"
},
{
  image:"images/Projects/Graphic Design/7.png",
  attribute:"graphic"
},
{
  image:"images/Projects/Graphic Design/8.png",
  attribute:"graphic"
},
{
  image:"images/Projects/Graphic Design/9.png",
  attribute:"graphic"
},
{
  image:"images/Projects/Graphic Design/10.png",
  attribute:"graphic"
},
{
  image:"images/Projects/Graphic Design/11.png",
  attribute:"graphic"
},
{
  image:"images/Projects/Graphic Design/12.png",
  attribute:"graphic"
},
{
  image:"images/Projects/Graphic Design/13.png",
  attribute:"graphic"
},
{
  image:"images/Projects/Graphic Design/14.png",
  attribute:"graphic"
},
{
  image:"images/Projects/Graphic Design/15.png",
  attribute:"graphic"
},
{
  image:"images/Projects/Content Creation/1.png",
  attribute:"content"
},
{
  image:"images/Projects/Content Creation/2.png",
  attribute:"content"
},
{
  image:"images/Projects/Content Creation/3.png",
  attribute:"content"
},
{
  image:"images/Projects/Content Creation/4.png",
  attribute:"content"
},
{
  image:"images/Projects/Content Creation/5.png",
  attribute:"content"
},
{
  image:"images/Projects/Content Creation/6.png",
  attribute:"content"
},
{
  image:"images/Projects/Content Creation/7.png",
  attribute:"content"
},
{
  image:"images/Projects/Content Creation/8.png",
  attribute:"content"
},
{
  image:"images/Projects/Content Creation/9.png",
  attribute:"content"
},
{
  image:"images/Projects/Content Creation/10.png",
  attribute:"content"
},
{
  image:"images/Projects/Content Creation/11.png",
  attribute:"content"
},
{
  image:"images/Projects/Product Design/1.png",
  attribute:"product"
},
{
  image:"images/Projects/Product Design/2.png",
  attribute:"product"
},
{
  image:"images/Projects/Product Design/3.png",
  attribute:"product"
},
{
  image:"images/Projects/Product Design/4.png",
  attribute:"product"
},
{
  image:"images/Projects/Product Design/5.png",
  attribute:"product"
},
{
  image:"images/Projects/Product Design/6.png",
  attribute:"product"
},
{
  image:"images/Projects/Product Design/7.png",
  attribute:"product"
},
{
  image:"images/Projects/Product Design/8.png",
  attribute:"product"
},
{
  image:"images/Projects/Product Design/9.png",
  attribute:"product"
},
{
  image:"images/Projects/Product Design/10.png",
  attribute:"product"
},
{
  image:"images/Projects/Product Design/11.png",
  attribute:"product"
},
{
  image:"images/Projects/web design/1.jpg",
  attribute:"web"
},
{
  image:"images/Projects/web design/2.jpg",
  attribute:"web"
},
{
  image:"images/Projects/web design/3.jpg",
  attribute:"web"
},
{
  image:"images/Projects/web design/4.jpg",
  attribute:"web"
},
{
  image:"images/Projects/web design/5.jpg",
  attribute:"web"
},
{
  image:"images/Projects/web design/6.jpg",
  attribute:"web"
},
{
  image:"images/Projects/web design/7.jpg",
  attribute:"web"
},
{
  image:"images/Projects/web design/8.jpg",
  attribute:"web"
},
{
  image:"images/Projects/web design/9.jpg",
  attribute:"web"
},
{
  image:"images/Projects/web design/10.jpg",
  attribute:"web"
},
{
  image:"images/Projects/web design/11.jpg",
  attribute:"web"
},
{
  image:"images/Projects/web design/12.jpg",
  attribute:"web"
},
{
  image:"images/Projects/web design/13.jpg",
  attribute:"web"
},
{
  image:"images/Projects/web design/14.jpg",
  attribute:"web"
},
{
  image:"images/Projects/web design/15.jpg",
  attribute:"web"
},
{
  image:"images/Projects/web design/16.jpg",
  attribute:"web"
},
{
  image:"images/Projects/web design/17.jpg",
  attribute:"web"
},
{
  image:"images/Projects/web design/18.jpg", 
  attribute:"web"
},
]

let datacards = document.getElementById("cards");

for(let fetch of cardsdata){
    datacards.innerHTML +=
    `
    
    <div class="col-lg-3 col-md-4 col-sm-6 col-12 text-center">
    <div class="card mb-4" style="background-color: transparent;" id="${fetch.attribute}">
    <div class="container">
    <img  src="${fetch.image}" class="card-img-top adjust-1" alt="...">
    <div class="overlay">
    <span>+</span>
    </div>
</div>
    </div>
  </div>
    
    `


}

document.querySelectorAll("#data-f .btn").forEach(function(button){
  button.addEventListener("click" , function(){
    let filtername = button.getAttribute("id");
    document.querySelectorAll("#data-g .card").forEach(function(card){
      card.parentElement.style.display =
      filtername === "all" || card.getAttribute("id") === filtername ? "block" : "none";
    })
  })
})
// Get the attribute value from the URL
const urlParams = new URLSearchParams(window.location.search);
const attribute = urlParams.get('attribute');

// Filter cards based on the attribute
document.querySelectorAll(".card").forEach(function(card) {
    if (card.getAttribute("id") !== attribute && attribute !== "all") {
        card.parentElement.style.display = "none";
    }
});



let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// Add click event listener to each card
document.querySelectorAll(".card").forEach(function(card) {
  card.addEventListener("click", function() {
    // Get the image URL from the clicked card
    let imageUrl = card.querySelector("img").getAttribute("src");
    
    // Set the image URL to the modal
    document.getElementById("modalImg").src = imageUrl;
    
    // Display the modal
    modal.style.display = "block";
  });
});

// Close the modal when the <span> (x) is clicked
span.onclick = function() {
  modal.style.display = "none";
};

// Close the modal when user clicks outside the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

