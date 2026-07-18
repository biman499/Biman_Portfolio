document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');
    const navigation = document.getElementById('navigation');

    if (mobileMenuIcon && navigation) {
        mobileMenuIcon.addEventListener('click', () => {
            navigation.classList.toggle('active');
        });

        // Hide menu when clicking a link
        const navLinksMobile = navigation.querySelectorAll('a');
        navLinksMobile.forEach(link => {
            link.addEventListener('click', () => {
                navigation.classList.remove('active');
            });
        });
    }

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
(function () {
    emailjs.init({
        publicKey: "PUcL8QBCw8wnBqnHd",
    });
})();
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const status = document.getElementById('formStatus');
            const btn = this.querySelector('button');

            if (status) {
                status.textContent = "Sending...";
                status.style.color = "white";
            }
            btn.disabled = true;

            const serviceID = 'service_dl2hqnh';
            const templateID = 'template_pv7ahxb';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    if (status) {
                        status.textContent = "Message sent successfully!";
                        status.style.color = "#4CAF50";
                    }
                    this.reset();
                }, (err) => {
                    if (status) {
                        status.textContent = "Error sending message. Please try again.";
                        status.style.color = "#FF5252";
                    }
                    console.error('EmailJS Error:', err);
                }).finally(() => {
                    btn.disabled = false;
                });
        });
    }
});
