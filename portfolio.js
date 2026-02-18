document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    dropdownToggle.addEventListener('click', function () {
        dropdownMenu.classList.toggle('show');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.hash !== "") {
                e.preventDefault();

                const hash = this.hash;
                const container = document.querySelector('.container');

                navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');

                sections.forEach(section => section.classList.remove('active'));
                document.querySelector(hash).classList.add('active');

                // Hide sidebar for atithi section, show for others
                if (hash === '#atithi') {
                    container.classList.add('atithi-view');
                } else {
                    container.classList.remove('atithi-view');
                }

                if (window.innerWidth < 992) {
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

        // Update home clock
        document.getElementById("day").innerHTML = day;
        document.getElementById("hour").innerHTML = hour;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
        document.getElementById("ampm").innerHTML = ampm;
        document.getElementById("greet").innerHTML = greet;

        // Update atithi clock
        document.getElementById("day-atithi").innerHTML = day;
        document.getElementById("hour-atithi").innerHTML = hour;
        document.getElementById("minutes-atithi").innerHTML = minutes;
        document.getElementById("seconds-atithi").innerHTML = seconds;
        document.getElementById("ampm-atithi").innerHTML = ampm;
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
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }

    // Initialize: Hide sidebar if atithi section is active on page load
    const container = document.querySelector('.container');
    const atithiSection = document.querySelector('#atithi');
    if (atithiSection.classList.contains('active')) {
        container.classList.add('atithi-view');
    }
});

// Atithi Devo Bhava Animation Reset Function
function resetAtithiAnimation() {
    const atithiClockWrapper = document.querySelector('.atithi-clock-wrapper');
    const atithiText = document.querySelector('.atithi-text');
    const atithiSubtitle = document.querySelector('.atithi-subtitle');
    const atithiResetBtn = document.querySelector('.atithi-reset');
    const atithiEnterBtn = document.querySelector('.atithi-enter-home');

    // Remove animations
    atithiClockWrapper.classList.add('reset-animation');
    atithiText.classList.add('reset-animation');
    atithiSubtitle.classList.add('reset-animation');
    atithiResetBtn.classList.add('reset-animation');
    atithiEnterBtn.classList.add('reset-animation');

    // Reset animations after a short delay
    setTimeout(() => {
        atithiClockWrapper.classList.remove('reset-animation');
        atithiText.classList.remove('reset-animation');
        atithiSubtitle.classList.remove('reset-animation');
        atithiResetBtn.classList.remove('reset-animation');
        atithiEnterBtn.classList.remove('reset-animation');

        // Trigger reflow to restart animation
        void atithiClockWrapper.offsetWidth;
        void atithiText.offsetWidth;
        void atithiSubtitle.offsetWidth;
        void atithiResetBtn.offsetWidth;
        void atithiEnterBtn.offsetWidth;
    }, 100);
}

// Enter Home Function
function enterHome() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const homeLink = document.querySelector('a[href="#home"]');
    const container = document.querySelector('.container');

    navLinks.forEach(link => link.classList.remove('active'));
    homeLink.classList.add('active');

    sections.forEach(section => section.classList.remove('active'));
    document.querySelector('#home').classList.add('active');

    // Show sidebar when entering home
    container.classList.remove('atithi-view');

    window.scrollTo(0, 0);
}
