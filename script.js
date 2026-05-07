const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
        "Solicitud enviada correctamente. TechNova Security se comunicará contigo pronto."
    );

    form.reset();

});

const cards = document.querySelectorAll(
".about-card, .service-card, .remote-card"
);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});