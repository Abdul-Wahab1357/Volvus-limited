document.getElementById("navbar").innerHTML=
`
<nav class="navbar navbar-expand-lg">
<div class="container-fluid">
  <a class="navbar-brand" href="index.html"><img style="width: 200px;height: ;margin-left: 8vw;" src="images/logo.png" alt=""></a>
  <button style="color: white !important;background-color: white !important;" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span style="color: white !important;background-color: white !important;" class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto d-flex justify-content-evenly">
      <li class="nav-item">
        <a  class="nav-link text-center" aria-current="page" href="index.html">Home</a>
      </li>
      <li class="nav-item">
        <a  class="nav-link  text-center" aria-current="page" href="projects.html?attribute=all">Projects</a>
      </li>
      <li class="nav-item">
        <a  class="nav-link  text-center" aria-current="page" href="services.html">Services</a>
      </li>
    </ul>
    <ul class="navbar-nav me-auto mb-2 mb-lg-0  d-flex justify-content-evenly">
        <li class="nav-item text-center   d-flex justify-content-center">
            <a  class="nav-link active con-btn" aria-current="page" href="contact.html">Contact</a>
          </li>
    </ul>
  </div>
</div>
</nav>
`
document.getElementById("footer").innerHTML=
`
<div class="container-fluid bg pt-4">
  <div class="row">
    <div class="col-lg-3"></div>
    <div class="col-lg-6">
        <div class="text-center mb-3 "><a href="index.html"><img width="200px" src="images/logo.png" alt=""></a></div>
        <div style="Font-size: 16px;Font-weight: 700;Line-height: 19.2px;color: rgb(255, 255, 255)" class="text-center mt-4 mb-2">Volvus Limited</div> 
        
    </div>
     <div class="col-md-12 text-center pt-4">
            <div class="d-flex justify-content-center" >
               <div><i style="color: #00A3FF;background-color:#EDEDED;height: 25px;width: 25px;border-radius: 50%;padding-top: 7px;font-size: 12px;" class="fa-solid fa-phone"></i>  </div>
               <div style="margin-top: px;margin-left: 12px;"><a style="text-decoration: none;Font-size: 16px;Font-weight: 600;color: #ffffff" href="tel:(+48) 697 697 732">+44 7397 805769</a></div> 
            </div>
        </div>
        <div class="col-md-12 text-center pt-4">
        <div class="d-flex justify-content-center">
          <div><i style="color: #00A3FF;background-color:#EDEDED;height: 25px;width: 25px;border-radius: 50%;padding-top: 7px;font-size: 12px;" class="fa-solid fa-envelope"></i></div>
          <div style="margin-top: px;margin-left: 12px;"><a style="text-decoration: none;Font-size: 16px;Font-weight: 600;color: #ffffff" href="mailto:operations@volvus.co.uk">operations@volvus.co.uk</a></div> 
        </div>
    </div>
    <div class="col-lg-6 d-flex justify-content-center mt-4">
      <a href="contact.html" style="text-decoration: none;Font-size: 16px;Font-weight: 500;Line-height: 27.2px;color: #00AEE8;padding-left: 20PX;">Contact Us<img width="15px" class="padding-right5px" src="images/icon2.png" alt=""></a>
    </div>
    <div class="col-lg-6 d-flex justify-content-center mt-4">
      <a href="index.html#faq" style="text-decoration: none;Font-size: 16px;Font-weight: 500;Line-height: 27.2px;color: #00AEE8;padding-left: 20PX;">FAQ<img width="15px" class="padding-right5px" src="images/icon2.png" alt=""></a>
    </div>
    <div class="col-lg-12">
      <div style="Font-size: 16px;Font-weight: 500;Line-height: 27.2px;color: rgb(137, 137, 137)" class="text-center mb-5 mt-5">All rights reserved © 2024 Volvus Limited</div>
    </div>
  </div>
</div>
`

// document.getElementById("redirectButton1").addEventListener("click", function() {
//   // Redirect to another page
//   window.location.href = "projects.html?attribute=web";
// });
// document.getElementById("redirectButton2").addEventListener("click", function() {
//   // Redirect to another page
//   window.location.href = "projects.html?attribute=graphic";
// });
// document.getElementById("redirectButton3").addEventListener("click", function() {
//   // Redirect to another page
//   window.location.href = "projects.html?attribute=brand";
// });
// document.getElementById("redirectButton4").addEventListener("click", function() {
//   // Redirect to another page
//   window.location.href = "projects.html?attribute=content";
// });

// // Get all anchor links
// document.querySelectorAll("#data-f .btn").forEach(function(button) {
//   button.addEventListener("click", function() {
//     let filtername = button.getAttribute("id");
//     // Redirect to product.html page with appropriate parameters
//     if (filtername === "brand" || filtername === "graphic" || filtername === "content" || filtername === "product") {
//       window.location.href = `product.html?category=${filtername}`;
//     } else if (filtername === "web") {
//       window.location.href = `product.html?category=web`;
//     } else if (filtername === "all") {
//       window.location.href = `product.html`;
//     }
//   });
// });
