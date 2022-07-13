// sticky scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('nav')
    header.classList.toggle('sticky', window.scrollY > 0 )
})


// get current year 
const latestDate = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
    
latestDate.textContent = currentYear;
