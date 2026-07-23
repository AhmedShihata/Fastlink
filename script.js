const STORAGE_KEY = "fastlink-site-data-v1";

const defaultData = {
  heroTitle: "مرحبا بكم في موقعنا هنا سوف تجد كل أسالتك ",
  heroSubtitle:
    "نحن في FastLink نقدم خدمات الإنترنت السريع عبر DSL مع دعم فني عملي، إعدادات رواتر واضحة، وعروض مميزة لفترة محدودة.",
  offerTitle: "عرض محدود",
  offerText: "خصم 50% على جميع الباقات لمدة 3 أشهر + شهران مجاناً للعملاء الجدد.",
  offerDuration: "متاح حتى 31 أغسطس 2026",
  aboutText:
    "FastLink هي شركة متخصصة في تقديم حلول الإنترنت المنزلي والاحترافي مع دعم فني متكامل وتوجيهات واضحة لضبط الأجهزة خطوة بخطوة. نركز على السرعة والاستقرار والراحة للعميل.",
  packages: [
    {
      name: "Home 260 ",
      Size: "150 G",
      price: 296.4,
      promoPrice: 166.4,
      duration: "شهر واحد",
      description: "خصم 50% لمدة 4شهور ."    },
    {
      name: "Home 330",
      Size: "200 G",
      price: 376.2,
      promoPrice: 211.2,
      duration: "شهر واحد",
      description: "خصم 50% لمدة 3شهور + شهران مجاناً.",
    },
    {
      name: "Home 395",
      Size: "250 G",
      price: 450.3,
      promoPrice: 252.8,
      duration: "شهر واحد",
      description: "خصم 50% لمدة 3شهور + شهران مجاناً.",
    },
    {
      name: "Home 460",
      Size: "300 G",
      price: 524.4,
      promoPrice: 294.4,
      duration: "شهر واحد",
      description: "خصم 50% لمدة 4شهور.",
    },
    {
      name: "Home 660",
      Size: "500 G",
      price: 752.4,
      promoPrice: 422.4,
      duration: "شهر واحد",
      description: "خصم 50% لمدة 4شهور.",
    },
  ], 
  contacts:[
    {
      name: "ا/ أسامة الصاوي",
      role: "Executive Director",
      phone: "01000052334",
    },
    {
      name: "ا/ وائل السيد",
      role: "Financial Accountant and Sales Officer",
      phone: "01011511104",
    },
    {
      name: "ا/ محمود صالح",
      role: "Customer Service",
      phone: "01153822465",
    },
    {
      name: "ا/ محمد عابدين",
      role: "Customer Service",
      phone: "01117509263",
    },
    {
      name: "ا/ محمد اسامة",
      role: "Technical Support Manager",
      phone: "01200063129",
    },
    {
      name: "م/ أحمد اسامة",
      role: "Web  Developer",
      phone: "01282862462",
    },
    {
      name: "ا/ حازم المهدي",
      role: "Technical Support",
      phone: "01554233617",
    }
  ],
};

function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return defaultData;
  try {
    const parsed = JSON.parse(saved);
    return {
      ...defaultData,
      ...parsed,
      packages: Array.isArray(parsed.packages) && parsed.packages.length ? parsed.packages : defaultData.packages,
      routers: Array.isArray(parsed.routers) && parsed.routers.length ? parsed.routers : defaultData.routers,
      contacts: Array.isArray(parsed.contacts) && parsed.contacts.length ? parsed.contacts : defaultData.contacts,
      steps: Array.isArray(parsed.steps) && parsed.steps.length ? parsed.steps : defaultData.steps,
    };
  } catch (error) {
    return defaultData;
  }
}

function renderHero(data) {
  document.getElementById("hero-title").textContent = data.heroTitle;
  document.getElementById("hero-subtitle").textContent = data.heroSubtitle;
}

function renderRouters(data) {
  const container = document.getElementById("routers-list");
  const routers = Array.isArray(data.routers) ? data.routers : [];
  container.innerHTML = routers
    .map(
      (router, index) => `
        <article class="card">
          <img src="${router.image || "assets/router-1.svg"}" alt="${router.name || "روتر"}" />
          <h3>${router.name || "روتر"}</h3>
          <p>${router.company || "FastLink"}</p>
          <p>${router.type || ""}</p>
          <p>${router.description || ""}</p>
          <a class="btn btn-secondary router-mode-btn" href="router-mode.html?router=${index}">عرض طريقة الضبط</a>
        </article>
      `
    )
    .join("");
}

function renderSteps(data) {
  const container = document.getElementById("setup-steps");
  if (!container) return;
  const steps = Array.isArray(data.steps) ? data.steps : [];
  container.innerHTML = steps
    .map(
      (step) => `
        <div class="timeline-item">
          <h3>${step.title || ""}</h3>
          <p>${step.description || ""}</p>
        </div>
      `
    )
    .join("");
}

function renderPackages(data) {
  const container = document.getElementById("packages-list");
  const packages = Array.isArray(data.packages) ? data.packages : [];
  container.innerHTML = packages
    .map(
      (pkg) => `
        <article class="card">
          <span class="tag">${pkg.duration || "باقة"}</span>
          <h3>${pkg.name || "باقة"}</h3>
          <p>${pkg.description || ""}</p>
          <p class="price">${(pkg.promoPrice ?? pkg.price ?? 0).toLocaleString("ar-EG")} جنيه</p>
          <p>السعر الأصلي: ${(pkg.price ?? 0).toLocaleString("ar-EG")} جنيه</p>
          <p>رصيد الباقة: ${pkg.speed || pkg.Size || ""}</p>
        </article>
      `
    )
    .join("");

  document.getElementById("offer-summary").textContent = `${data.offerTitle || "العرض"}: ${data.offerText || ""}`;
}

function renderAbout(data) {
  document.getElementById("about-text").textContent = data.aboutText || "";
  document.getElementById("offer-title").textContent = data.offerTitle || "";
  document.getElementById("offer-description").textContent = data.offerText || "";
  document.getElementById("offer-duration").textContent = data.offerDuration || "";
}

function renderContacts(data) {
  const container = document.getElementById("contacts-list");
  const contacts = Array.isArray(data.contacts) ? data.contacts : [];
  container.innerHTML = contacts
    .map(
      (contact) => `
        <article class="card">
          <h3>${contact.name || ""}</h3>
          <p>${contact.role || ""}</p>
          <p>${contact.phone || ""}</p>
        </article>
      `
    )
    .join("");
}

function renderPage() {
  const data = loadData();
  renderHero(data);
  renderPackages(data);
  renderAbout(data);
  renderContacts(data);
}

renderPage();
