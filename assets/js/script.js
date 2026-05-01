// Mobile Menu Toggle
        const menuBtn = document.getElementById('menu-btn');
        const closeBtn = document.getElementById('close-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.onclick = () => mobileMenu.classList.remove('translate-x-full');
        closeBtn.onclick = () => mobileMenu.classList.add('translate-x-full');

        // Mobile Shop Dropdown Toggle
        const shopToggle = document.getElementById('mobile-shop-toggle');
        const shopList = document.getElementById('mobile-shop-list');
        const arrow = document.getElementById('arrow');

        shopToggle.onclick = () => {
            shopList.classList.toggle('show');
            arrow.classList.toggle('rotate-180');
        };

        // Search Bar Animation
        const searchTexts = ["Search for blush...", "Search for lipsticks...", "Search for skincare..."];
        let idx = 0;
        const textSpan = document.getElementById('changing-text');
        setInterval(() => {
            if(textSpan) {
                textSpan.style.opacity = '0';
                setTimeout(() => {
                    idx = (idx + 1) % searchTexts.length;
                    textSpan.textContent = searchTexts[idx];
                    textSpan.style.opacity = '1';
                }, 500);
            }
        }, 3000);
        const slider = document.getElementById('slider');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;
const totalSlides = 3;

// Function to update slider
function updateSlider() {
    if (slider) {
    slider.style.transform = `translateX(-${counter * 100}%)`;
    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('bg-white', index === counter);
        dot.classList.toggle('w-8', index === counter); 
        dot.classList.toggle('bg-white/50', index !== counter);
    });
}
}

// Next Slide
function nextSlide() {
    counter = (counter + 1) % totalSlides;
    updateSlider();
}

// Previous Slide
function prevSlide() {
    counter = (counter - 1 + totalSlides) % totalSlides;
    updateSlider();
}

// வரிசை 65-ல் இப்படி மாத்துங்க
if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide);
}

if (prevBtn) {
    prevBtn.addEventListener('click', prevSlide);
}

// Automatic Move (Every 4 seconds)
let autoSlide = setInterval(nextSlide, 4000);

// Stop auto-move when user hovers or clicks
if (slider) {
const container = slider.parentElement;
container.addEventListener('mouseenter', () => clearInterval(autoSlide));
container.addEventListener('mouseleave', () => autoSlide = setInterval(nextSlide, 4000));

// Initial call
updateSlider();
}
function scrollCarousel(distance) {
    const carousel = document.getElementById('categoryCarousel');
    carousel.scrollBy({
        left: distance,
        behavior: 'smooth'
    });

}
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('cat-slider');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');

    // ஒரு கார்டின் அகலம் + கேப் (280 + 32 = 312)
    const scrollAmount = 312;
  if (nextBtn && prevBtn && slider) {
    nextBtn.addEventListener('click', () => {
        slider.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    prevBtn.addEventListener('click', () => {
        slider.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
}
});
window.addEventListener('scroll', revealElements);

function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; 

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}


revealElements();

    const testimonials = [
        {
            name: "-Priya S., Chennai",
            text: '"Finally, a premium cream that actually controls my oil without making my skin dry. My face stays matte even in humid weather!"',
            img: "./assets/image/cus1.webp"
        },
        {
            name: "-Anitha R., Madurai",
            text: '"The serum is magic! I can see a visible glow in just two weeks. Highly recommended for daily use."',
            img: "./assets/image/cus2.jpg"
        },
        {
            name: "-Meera K., Coimbatore",
            text: '"Sustainable and beautiful packaging. The texture of the night cream is so smooth and non-sticky."',
            img: "./assets/image/cus1.webp"
        }
    ];

    let currentIndex = 0;

    function updateTestimonial() {
        const container = document.getElementById('testimonial-container');
        const img = document.getElementById('customer-img');
        const text = document.getElementById('customer-text');
        const name = document.getElementById('customer-name');

        
        if (container) {
        container.classList.remove('opacity-100');
        container.classList.add('opacity-0');

        setTimeout(() => {
            img.src = testimonials[currentIndex].img;
            text.innerText = testimonials[currentIndex].text;
            name.innerText = testimonials[currentIndex].name;

            
            container.classList.remove('opacity-0');
            container.classList.add('opacity-100');
        }, 500);
    }
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial();
    }

    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonial();
    }


    setInterval(nextTestimonial, 5000);

    // AOS Init
    AOS.init({ duration: 1200, once: true });
    //index sparkels
window.addEventListener('load', () => {
    if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        
        confetti({ ...defaults, particleCount, origin: { x: 0.2, y: 0.5 } });
        confetti({ ...defaults, particleCount, origin: { x: 0.8, y: 0.5 } });
    }, 250);
}
});
// pink section


const pinkSection = document.querySelector('section.relative.min-h-screen'); 

const confettiObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            
            
            confetti({
                particleCount: 200,
                spread: 160,       
                origin: { y: 0.8 }, 
                zIndex: 1000,       
                colors: ['#FF6FAE', '#ff1b6b', '#ffffff']
            });
            
            
            confettiObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 }); 


if (pinkSection) {
    confettiObserver.observe(pinkSection);
}

