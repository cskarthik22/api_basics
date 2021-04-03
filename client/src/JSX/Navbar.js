import '../CSS/style.css';

function Navbar() {
  return (
  <div class="navbar">
    <input type="checkbox" id="click" class="checkbox" hidden></input>
   <div class="sidebar">
     <label for="click">
        <div class="menu-icon">
          <div class="line line-1"></div>
          <div class="line line-2"></div>
          <div class="line line-3"></div>
       </div>
     </label>
     <ul class="social-media-list">
       <li> <a href="https://www.facebook.com/karthik.kaluvala.1/" class="social-link"><i class="fab fa-facebook-f"></i></a></li>
       <li> <a href="https://linkedin.com/in/cskarthik22" class="social-link"><i class="fab fa-linkedin-in"></i></a></li>
       <li> <a href="https://twitter.com/cskarthik22" class="social-link"><i class="fab fa-twitter"></i></a></li>
       <li> <a href="https://www.instagram.com/cskarthik22" class="social-link"><i class="fab fa-instagram"></i></a></li>
 
     </ul>
   </div>
   
   <nav class="navigation">
     <div class="navigation-header">
       <h1 class="navigation-heading"> core cs </h1>
       <form class="navigation-search">
         <input type="text" class="naviation-search-input" placeholder="Search..."></input>
         <button class="navigation-search-btn">
           <i class="fas fa-search"></i>
         </button>
       </form>
     </div>
     <ul class="navigation-list">
       <li class="navigation-item"><a href="#" class="navigation-link"> home </a></li>
       <li class="navigation-item"><a href="#" class="navigation-link"> Sorting </a></li>
       <li class="navigation-item"><a href="#" class="navigation-link"> Divide-Conquer </a></li>
       <li class="navigation-item"><a href="#" class="navigation-link"> Greedy </a></li>
       <li class="navigation-item"><a href="#" class="navigation-link"> Backtracking </a></li>
       <li class="navigation-item"><a href="#" class="navigation-link"> Recursion </a></li>
       <li class="navigation-item"><a href="#" class="navigation-link"> DP (Bitmask) </a></li>
       <li class="navigation-item"><a href="#" class="navigation-link"> Graphs </a></li>
       <li class="navigation-item"><a href="#Others" class="navigation-link"> Links </a></li>
     </ul>
     
     <div class="copyright">
       <p>&copy; 2021 CoreCS All Rights Reserved.</p>
     </div>
   </nav>
 </div>
  );
}

export default Navbar;
