const nav =  document.getElementById('navbar');


function toggleNavbar(collapseID) {
    document.getElementById(collapseID).classList.toggle("hidden");
    document.getElementById(collapseID).classList.toggle("block");
    document.getElementById(collapseID).style.background = "#fff";
  }

// Event Listener - hide nav items if mobile version
window.addEventListener('resize', () => {
    if(window.innerWidth < 1024) {
        nav.classList.add('hidden');
    }else if(window.innerWidth > 1025) {
        nav.classList.remove('hidden');
    }
})

window.addEventListener('load', () => {
    if(window.innerWidth < 1024) {
        nav.classList.add('hidden');        
    }else if(window.innerWidth > 1025) {
        nav.classList.remove('hidden');
    }
})