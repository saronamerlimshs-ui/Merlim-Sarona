// =========================
// REVEAL ANIMATION
// =========================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));


// =========================
// CURSOR EFFECT
// =========================
const c1 = document.querySelector(".cursor");
const c2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", (e) => {
  if (c1 && c2) {
    c1.style.left = e.pageX + "px";
    c1.style.top = e.pageY + "px";
    c2.style.left = e.pageX + "px";
    c2.style.top = e.pageY + "px";
  }
});


// =========================
// GLOW EFFECT
// =========================
const glow = document.querySelector(".glow");

document.addEventListener("mousemove", (e) => {
  if (!glow) return;
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});


// =========================
// STATE
// =========================
let activeType = "all";
let activeCategory = "all";


// =========================
// DATA
// =========================
const posters = [
  {
    src: "img/CACI SOIREE.jpg",
    title: "CACI Soirée – Formal Event Poster",
    desc: "Elegant visual identity for a school formal night event",
    type: "poster",
    category: "school"
  },
  {
    src: "img/AEROSONIC.jpg",
    title: "AEROSONIC – Live Music Night",
    desc: "High-energy neon concert poster for a student music event",
    type: "poster",
    category: "artists"
  },
  {
    src: "img/COACHELLA.jpg",
    title: "Athletic Fest – Brand Poster",
    desc: "Bold sports festival branding inspired by modern festivals",
    type: "poster",
    category: "sports"
  }
];

const logos = [
  {
    src: "img/airmenlogo.jpg",
    title: "Airmen – Core Identity Logo",
    desc: "Minimalist emblem symbolizing strength, motion, and unity",
    type: "logo",
    category: "sports"
  },
  {
    src: "img/campuscravings.png",
    title: "Campus Cravings",
    desc: "Playful food brand logo built with bold typography",
    type: "logo",
    category: "school"
  },
  {
    src: "img/aeromercado.png",
    title: "Aero Mercado",
    desc: "Clean modern branding for a campus marketplace",
    type: "logo",
    category: "school"
  },
  {
    src: "img/padayonsticker.png",
    title: "Padayon Sticker",
    desc: "Motivational street-style branding concept",
    type: "logo",
    category: "others"
  }
];

const shirts = [
  {
    src: "img/airmenjersey.png",
    title: "Airmen Jersey",
    desc: "Sports team jersey design",
    type: "apparel",
    category: "sports"
  },
  {
    src: "img/airmenmerch.png",
    title: "Airmen Merch Shirt",
    desc: "Official merch concept design",
    type: "apparel",
    category: "sports"
  },
  {
    src: "img/airmenmerch2.png",
    title: "Streetwear Merch",
    desc: "Alternate merch shirt design",
    type: "apparel",
    category: "sports"
  },
  {
    src: "img/eductour.png",
    title: "Educational Tour Shirt",
    desc: "Field trip commemorative shirt design",
    type: "apparel",
    category: "school"
  },
  {
    src: "img/aesauni.png",
    title: "AESA Uniform Shirt",
    desc: "Organization uniform design",
    type: "apparel",
    category: "school"
  },
  {
    src: "img/ssc1.png",
    title: "SSC Shirt",
    desc: "Student council shirt design",
    type: "apparel",
    category: "school"
  },
  {
    src: "img/faculty1.png",
    title: "Faculty Shirt",
    desc: "Event recognition shirt design",
    type: "apparel",
    category: "school"
  },
  {
    src: "img/sinulogshirt.jpg",
    title: "Sinulog Shirt",
    desc: "Cultural festival design",
    type: "apparel",
    category: "school"
  },
  {
    src: "img/ssc2.png",
    title: "SSC Alternate",
    desc: "Second council design concept",
    type: "apparel",
    category: "school"
  }
];

const led = [
  {
    src: "img/aerofest.mov",
    title: "AEROFEST LED",
    desc: "Stage visual design",
    type: "led",
    category: "school"
  },
  {
    src: "img/bravantegrad.mov",
    title: "Graduation LED",
    desc: "Formal stage animation",
    type: "led",
    category: "school"
  },
  {
    src: "img/20260518081602.mov",
    title: "Campus LED",
    desc: "Event motion graphics",
    type: "led",
    category: "school"
  },
  {
    src: "img/20260518081721.mov",
    title: "Live LED Loop",
    desc: "Ambient stage visuals",
    type: "led",
    category: "school"
  }
];

const tarps = [
  {
    src: "img/salosalotarp.jpg",
    title: "Fiesta Tarpaulin",
    desc: "Community event banner",
    type: "tarpaulin",
    category: "holidays"
  },
  {
    src: "img/unotarp.jpg",
    title: "UNO Celebration",
    desc: "School celebration banner",
    type: "tarpaulin",
    category: "school"
  },
  {
    src: "img/passertarp.jpg",
    title: "Recognition Day",
    desc: "Academic awards banner",
    type: "tarpaulin",
    category: "school"
  },
  {
    src: "img/ticket.jpg",
    title: "Event Ticket Banner",
    desc: "School event layout",
    type: "tarpaulin",
    category: "school"
  },
  {
    src: "img/lagonera.jpg",
    title: "School Event Banner",
    desc: "Institutional celebration design",
    type: "tarpaulin",
    category: "school"
  },
  {
    src: "img/gradcover.jpg",
    title: "Graduation Cover",
    desc: "Graduation event design",
    type: "tarpaulin",
    category: "school"
  }
];


// SOCIAL (unchanged simplified structure kept)
const socialSports = [
  { src: "img/BEST RB.jpg", title: "Sports Post", desc: "Sports design" }
];

const socialSchool = [
  { src: "img/DONATIONS.jpg", title: "School Post", desc: "School design" }
];

const socialHolidays = [
  { src: "img/babaeka.jpg", title: "Holiday Post", desc: "Holiday design" }
];

const socialArtists = [
  { src: "img/aeroverse.jpg", title: "Artist Post", desc: "Artist design" }
];

const socialContest = [
  { src: "img/mr and ms.jpg", title: "Pageant Post", desc: "Event design" }
];

const socialElections = [
  { src: "img/20260518115157.jpg", title: "Election Post", desc: "Leadership design" }
];

const socialOthers = [
  { src: "img/aeromercadovendors.jpg", title: "Business Post", desc: "Misc design" }
];


// =========================
// LANGUAGE SYSTEM (MINI VERSION)
// =========================
const languages = [
  { name: "English", level: 80, flag: "🇺🇸" },
  { name: "Filipino", level: 100, flag: "🇵🇭" },
  { name: "Bisaya", level: 80, flag: "🇵🇭" },
  { name: "Waray", level: 100, flag: "🇵🇭" }
];

function renderLanguages() {
  const container = document.getElementById("languageList");
  if (!container) return;

  container.innerHTML = "";

  languages.forEach(lang => {
    const item = document.createElement("div");
    item.className = "lang-mini reveal";

    item.innerHTML = `
      <div class="mini-top">
        <span class="mini-flag">${lang.flag}</span>
        <span class="mini-name">${lang.name}</span>
        <span class="mini-level">${lang.level}%</span>
      </div>

      <div class="mini-line">
        <div class="mini-fill"></div>
      </div>
    `;

    container.appendChild(item);

    setTimeout(() => {
      item.querySelector(".mini-fill").style.width = lang.level + "%";
    }, 200);
  });
}
// =========================
// FILTER LOGIC
// =========================
function filterProjects(type, category = "all", btn) {
  activeType = type;
  activeCategory = category;

  document.querySelectorAll(".filter-btn")
    .forEach(b => b.classList.remove("active"));

  if (btn) btn.classList.add("active");

  document.querySelectorAll(".carousel-section").forEach(section => {
    section.style.display =
      type === "all" || section.classList.contains(type)
        ? "block"
        : "none";
  });
}


// =========================
// MATCH
// =========================
function match(item) {
  if (activeType === "all") return true;
  if (activeType === "social") return true;
  return item.type === activeType;
}


// =========================
// RENDER
// =========================
function renderGallery(trackId, data) {
  const track = document.getElementById(trackId);
  if (!track) return;

  track.innerHTML = "";

  data.filter(match).forEach((item, index) => {
    const img = document.createElement("img");
    img.src = item.src;

    img.onclick = () => openGallery(data.filter(match), index);

    track.appendChild(img);
  });
}

function renderAll() {
  renderGallery("posterTrack", posters);
  renderGallery("logoTrack", logos);
  renderGallery("shirtTrack", shirts);
  renderGallery("tarpTrack", tarps); // ← ADD THIS
  renderGallery("ledTrack", led);

  renderGallery("socialSportsTrack", socialSports);
  renderGallery("socialSchoolTrack", socialSchool);
  renderGallery("socialHolidaysTrack", socialHolidays);
  renderGallery("socialArtistsTrack", socialArtists);
  renderGallery("socialContestTrack", socialContest);
  renderGallery("socialElectionsTrack", socialElections);
  renderGallery("socialOthersTrack", socialOthers);
}


// =========================
// GALLERY
// =========================
let currentGallery = [];
let currentIndex = 0;

function openGallery(images, index) {
  currentGallery = images;
  currentIndex = index;

  const viewer = document.getElementById("viewer");
  if (!viewer) return;

  const item = currentGallery[currentIndex];

  document.getElementById("viewerImg").src = item.src;
  document.getElementById("viewerTitle").innerText = item.title;
  document.getElementById("viewerDesc").innerText = item.desc;

  viewer.classList.add("active");
}

function closeViewer() {
  document.getElementById("viewer")?.classList.remove("active");
}


// =========================
// INIT
// =========================
window.addEventListener("load", () => {

  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.classList.add("hide");
      setTimeout(() => loader.style.display = "none", 600);
    }, 600);
  }

  renderAll();
  renderLanguages();
});
// =========================
// GO TO CATEGORY
// =========================
function goToProject(type) {

  const map = {
    poster: ".poster-section",
    logo: ".logo-section",
    apparel: ".apparel-section",
    tarpaulin: ".tarpaulin-section",
    led: ".led-section",
    social: ".social-section"
  };

  const target = document.querySelector(map[type]);

  if (!target) return;

  target.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}