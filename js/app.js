document.documentElement.style .setProperty('--primary', '#74BDCB');
document.documentElement.style .setProperty('--secondary', '#262626');
document.documentElement.style .setProperty('--tertiary', '#FAFAFA');
document.documentElement.style .setProperty('--quaternary', '#0292B7');
document.documentElement.style .setProperty('--border', '#d8d8d8');
document.documentElement.style .setProperty('--page-max-width', '1366px');
document.documentElement.style .setProperty('--navbar-background', 'transparent');
document.documentElement.style .setProperty('--navbar-text-color', '#0292B7');
document.documentElement.style .setProperty('--header-background', 'white');
document.documentElement.style .setProperty('--header-text-color', 'none');
document.documentElement.style .setProperty('--footer-background', 'white');
document.documentElement.style .setProperty('--footer-text-color', 'black');
document.documentElement.style .setProperty('--h1-color', 'black');
document.documentElement.style .setProperty('--h2-color', '#000');
document.documentElement.style .setProperty('--h3-color', '#262626');
document.documentElement.style .setProperty('--seo-page-title-color', '#fff');







const navbar_data = [
   {
       brand: "Best Insurance Plan Cost",
   }
];
function navbar_template(nav) {
    return `
    
    <h1 class="brand 2em">${nav.brand}</h1> 
    <span></span>

  `;
}
document.getElementById("navbar-simple").innerHTML = `${navbar_data.map(navbar_template).join('')}`;



const footer_data = [
   {
       brand: "Best Insurance Plan Cost",
   }
];
function footer_template(foot) {
    return `
    <div class="footer">
         <div class="grid set-cols-1">
            <div class="column">
                  <p class="lead-text">${foot.brand} is a privately owned and operated independent marketing agency and is not part of or directly correlated with any health insurance company or carrier. We are a licensed health insurance agency and our agents are qualified to discuss any health care options available to you in your state. Not all health insurance policies, coverage options or products may be applicable in your area. Prestige Health Advisors is not affiliated with or sanctioned by any state exchange, government agency or any other commercial insurance providers.</p>
            </div>
            <div class="column">
                  <h2 class="copyright"> Copyright ${foot.brand} <span id="year"></span>. All rights reserved </h2>
            </div>
            <nav class="nav-menu">
               <a href="privacy.html">Privacy</a> |
               <a href="terms.html">Term of Use</a>
            </nav>
        </div>
    </div>
  `;
}
document.getElementById("footer").innerHTML = `${footer_data.map(footer_template).join('')}`;
document.getElementById("year").innerHTML = new Date().getFullYear();


