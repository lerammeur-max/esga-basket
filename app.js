document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".main-nav");
  const navToggle = document.querySelector(".nav-toggle");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const teamButton = document.querySelector(".nav-team-button");
  const teamMenu = document.querySelector(".nav-team-menu");
  const panels = document.querySelectorAll(".nav-team-panel");

  function showFirstPanel() {
    panels.forEach(panel => {
      panel.hidden = !panel.classList.contains("nav-team-level-1");
    });
  }

  function showPanel(name) {
    panels.forEach(panel => {
      panel.hidden = panel.dataset.panel !== name;
    });
  }

  function closeTeamMenu() {
    if (!teamButton || !teamMenu) return;
    teamMenu.hidden = true;
    teamButton.setAttribute("aria-expanded", "false");
    showFirstPanel();
  }

  if (teamButton && teamMenu) {
    showFirstPanel();

    teamButton.addEventListener("click", event => {
  event.stopPropagation();

  const isOpen =
    teamButton.getAttribute("aria-expanded") === "true";

  // Fermer le menu Le club
  closeClubMenu();

  // Ouvrir / fermer Équipes
  teamButton.setAttribute(
    "aria-expanded",
    String(!isOpen)
  );

  teamMenu.hidden = isOpen;

  if (!isOpen) {
    showFirstPanel();
  }
});

    teamMenu.querySelectorAll(".nav-team-next").forEach(button => {
      button.addEventListener("click", event => {
        event.stopPropagation();
        showPanel(button.dataset.next);
      });
    });

    teamMenu.querySelectorAll(".nav-team-back").forEach(button => {
      button.addEventListener("click", event => {
        event.stopPropagation();
        const back = button.dataset.back || "level-1";
        if (back === "level-1") showFirstPanel();
        else showPanel(back);
      });
    });

    teamMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => closeTeamMenu());
    });

    document.addEventListener("click", event => {
      if (!event.target.closest(".nav-team-dropdown")) closeTeamMenu();
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeTeamMenu();
    });
  }

  // Menu Le club
  const clubButton = document.querySelector(".nav-club-button");
  const clubMenu = document.querySelector(".nav-club-menu");

  function closeClubMenu() {
    if (!clubButton || !clubMenu) return;
    clubMenu.hidden = true;
    clubButton.setAttribute("aria-expanded", "false");
  }

  if (clubButton && clubMenu) {
    clubButton.addEventListener("click", event => {
  event.stopPropagation();

  const isOpen =
    clubButton.getAttribute("aria-expanded") === "true";

  // Fermer le menu Équipes
  closeTeamMenu();

  // Ouvrir / fermer Le club
  clubButton.setAttribute(
    "aria-expanded",
    String(!isOpen)
  );

  clubMenu.hidden = isOpen;
});
    clubMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeClubMenu);
    });

    document.addEventListener("click", event => {
      if (!event.target.closest(".nav-club-dropdown")) closeClubMenu();
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeClubMenu();
    });
  }

});

document.querySelectorAll(".info-card").forEach(card => {
  card.addEventListener("click", () => {
    window.location.href = card.dataset.page;
  });
});