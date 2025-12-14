/* =========================================
   Spirit Particle Animation
========================================= */

function createSpirits() {
    const homeSection = document.querySelector('.home');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        let spirit = document.createElement('div');

        spirit.style.position = 'absolute';
        spirit.style.width = Math.random() * 5 + 3 + 'px';
        spirit.style.height = spirit.style.width;
        spirit.style.background = 'rgba(147, 181, 207, 0.7)';
        spirit.style.borderRadius = '50%';
        spirit.style.boxShadow = '0 0 10px rgba(147, 181, 207, 0.9)';
        spirit.style.pointerEvents = 'none';

        spirit.style.left = Math.random() * 100 + '%';
        spirit.style.top = Math.random() * 100 + '%';

        let duration = Math.random() * 5 + 5;
        spirit.style.transition = `all ${duration}s ease-in-out`;

        homeSection.appendChild(spirit);
        animateSpirit(spirit);
    }
}

function animateSpirit(spirit) {
    setInterval(() => {
        spirit.style.left = Math.random() * 100 + '%';
        spirit.style.top = Math.random() * 100 + '%';
        spirit.style.opacity = Math.random();
    }, 4000);
}

window.addEventListener('load', createSpirits);

/* =========================================
   Scroll to Contact
========================================= */

function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

/* =========================================
   EmailJS - FREE Email Sender
========================================= */

(function () {
    emailjs.init("YOUR_PUBLIC_KEY"); // 🔴 replace
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const status = document.getElementById("success");
    status.innerText = "Sending... ⏳";

    emailjs.sendForm(
        "YOUR_SERVICE_ID",   // 🔴 replace
        "YOUR_TEMPLATE_ID",  // 🔴 replace
        this
    ).then(
        function () {
            status.innerText = "🌻 Message sent successfully!";
            status.style.color = "green";
            document.getElementById("contact-form").reset();
        },
        function (error) {
            status.innerText = "❌ Message failed. Try again.";
            status.style.color = "red";
            console.error(error);
        }
    );
});
