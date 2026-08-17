
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-links");

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("open");
            toggle.setAttribute("aria-expanded", nav.classList.contains("open"));
        });

        nav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => nav.classList.remove("open"));
        });
    }

    const current = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach(link => {
        const href = link.getAttribute("href");
        if (href === current) link.classList.add("active");
    });

    const year = document.querySelector("#year");
    if (year) year.textContent = new Date().getFullYear();

    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const message = document.querySelector("#form-message");
            if (message) {
                message.textContent = "Merci ! Le formulaire est prêt. Pour recevoir réellement les messages, il faudra ensuite le connecter à un service de formulaire.";
                message.style.display = "block";
            }
            contactForm.reset();
        });
    }

    const filters = document.querySelectorAll("[data-filter]");
    const teamCards = document.querySelectorAll("[data-category]");
    filters.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter;
            filters.forEach(b => b.classList.remove("btn-primary"));
            button.classList.add("btn-primary");

            teamCards.forEach(card => {
                card.style.display = (filter === "all" || card.dataset.category === filter) ? "" : "none";
            });
        });
    });
});
