document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link')
    
    navLinks.forEach(Link => {
        Link.addEventListener('click', function(event){
            event.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            const headerHeight = document.querySelector('header').offsetHeight;
            
            const elementPosition = targetSection.getBoundingClientRect().top;
            
            const offsetPosition = window.scrollY + elementPosition - headerHeight;
            
            window.scrollTo({
                top: offsetPosition,
                behavior:"smooth"
            })
        })
    })
    
    document.querySelectorAll('.carousel-control-prev, .carousel-control-next').forEach(control => {
        control.addEventListener('click', function(event) {
            event.preventDefault();
            const carousel = document.getElementById('carouselExampleFade');
            const direction = this.classList.contains('carousel-control-prev') ? 'prev' : 'next';
            carousel.bootstrap.Carousel.getInstance(carousel).slide(direction);
        });
    }); 

})

