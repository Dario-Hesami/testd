
// grab header and footer elements - make a reference for each
const mainHeader = document.querySelector('#main-header');
const mainFooter = document.querySelector('#footer-section');

// include header
mainHeader.innerHTML = `
<div class="header">
  <img class="logo" src="images/logo4.png">
  <h1>My Website</h1>
  <p>A <b>responsive</b> website created by me.</p>
</div>

<nav class="navbar">
        <div class="menu-icon" onclick="toggleMenu()">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
<div class="nav-links" id="nav-links">
  <a href="index.html" class="active"><img src="images/home-icon1.png"></a>
  <a href="about-us.html">About</a>
  <a href="products.html">Products</a>
  <a href="services.html">Srvices</a>
  <a href="#">Contact Us</a>
  <a href="#" class="right"><img src="images/shopping-cart-icon.png" ></a>
<div>
</nav>
`;

// include footer
// mainFooter.innerHTML = `
// <div class="footer">
//   <h2>Footer</h2>
// </div>
// `;


mainFooter.innerHTML = `
<section id="footer-partners">
  <div>Our Partners</div> <div>item 02</div> <div>item 03</div>
</section>
<footer class="footer-distributed">

      <div class="footer-left">

        <h3>Company<span>logo</span></h3>

        <p class="footer-links">
          <a href="#" class="link-1">Home</a>
          
          <a href="#">Blog</a>
        
          <a href="#">Pricing</a>
        
          <a href="#">About</a>
          
          <a href="#">Faq</a>
          
          <a href="#">Contact</a>
        </p>

        <p class="footer-company-name">Company Name © 2015</p>
      </div>

      <div class="footer-center">

        <div>
          <i class="fa fa-map-marker"></i>
          <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+1.555.555.5555</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="mailto:support@company.com">support@company.com</a></p>
        </div>

      </div>

      <div class="footer-right">

        <p class="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div class="footer-icons">

          <a href="#" id="fa-facebook" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-linkedin"></a>
          <a href="#" class="fa fa-github"></a>

        </div>

      </div>

    </footer>
`;





// <header>
//   <nav>
//     <ul>
//       <li><a href="about.html">About</a></li>
//       <li><a href="work.html">Work</a></li>
//       <li><a href="contact.html">Contact</a></li>
//     </ul>
//   </nav>
// </header>

//document.body.appendChild(template.content);

function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
}

