/* Shared nav + tiny helpers — no frameworks, no tracking */
(function () {
  function currentPage() {
    var p = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    return p === "" ? "index.html" : p;
  }

  function buildNav() {
    var links = [
      { href: "index.html", label: "Home" },
      { href: "check.html", label: "Site check" },
      { href: "speed.html", label: "Speed" },
      { href: "dns.html", label: "DNS" },
      { href: "timezone.html", label: "Timezones" },
      { href: "about.html", label: "About" }
    ];
    var page = currentPage();
    var nav = document.querySelector("[data-nav]");
    if (!nav) return;
    nav.innerHTML = links
      .map(function (l) {
        var active = l.href === page ? ' class="active"' : "";
        return '<a href="' + l.href + '"' + active + ">" + l.label + "</a>";
      })
      .join("");
  }

  function wireMenu() {
    var btn = document.querySelector("[data-menu]");
    var nav = document.querySelector("[data-nav]");
    if (!btn || !nav) return;
    btn.addEventListener("click", function () {
      nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", nav.classList.contains("open") ? "true" : "false");
    });
  }

  function setYear() {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildNav();
    wireMenu();
    setYear();
  });

  window.Ift = {
    escapeHtml: function (s) {
      return String(s)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    },
    normalizeUrl: function (raw) {
      var s = String(raw || "").trim();
      if (!s) throw new Error("Enter a URL or domain.");
      if (!/^https?:\/\//i.test(s)) s = "https://" + s;
      var u = new URL(s);
      if (u.protocol !== "http:" && u.protocol !== "https:") {
        throw new Error("Only http(s) URLs are supported.");
      }
      return u;
    },
    normalizeDomain: function (raw) {
      var s = String(raw || "").trim().toLowerCase();
      if (!s) throw new Error("Enter a domain.");
      s = s.replace(/^https?:\/\//, "").replace(/\/.*$/, "").replace(/:\d+$/, "");
      if (!/^[a-z0-9._-]+$/i.test(s) || s.indexOf(".") === -1) {
        throw new Error("That does not look like a valid domain.");
      }
      return s;
    }
  };
})();
