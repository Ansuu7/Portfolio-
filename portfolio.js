document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    dropdownToggle.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if(this.hash !== "") {
                e.preventDefault();
                
                const hash = this.hash;
                
                navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
                
                sections.forEach(section => section.classList.remove('active'));
                document.querySelector(hash).classList.add('active');
                
                if(window.innerWidth < 992) {
                    document.querySelector('.dropdown-menu').classList.remove('show');
                }
                
                window.scrollTo(0, 0);
            }
        });
    });
    
    function clock() {
        const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        const d = new Date();
        let day = days[d.getDay()];
        let hour = d.getHours();
        let minutes = d.getMinutes();
        let seconds = d.getSeconds();
        let ampm = hour < 12 ? "AM" : "PM";

        let greet;
        if (hour < 12) {
            greet = "OHAYO! (Good Morning)";
        } else if (hour >= 12 && hour <= 17) {
            greet = "Good Afternoon";
        } else if (hour > 17 && hour <= 22) {
            greet = "Good Evening";
        } else {
            greet = "Oyasumi! Good Night!";
        }

        hour = hour > 12 ? hour - 12 : hour;
        hour = hour === 0 ? 12 : hour;
        hour = hour < 10 ? "0" + hour : hour;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById("day").innerHTML = day;
        document.getElementById("hour").innerHTML = hour;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
        document.getElementById("ampm").innerHTML = ampm;
        document.getElementById("greet").innerHTML = greet;
    }

    setInterval(clock, 1000);
    clock();
    
    const progressBars = document.querySelectorAll('.progress-bar');
    
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 500);
        });
    }
    
    setTimeout(animateProgressBars, 1000);
    
    const contactForm = document.querySelector('.contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});