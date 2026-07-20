const STORAGE_KEY = "fastlink-site-data-v1";

const defaultData = {
  heroTitle: "حلّ موثوق للإنترنت المنزلي والعملي",
  heroSubtitle:
    "نحن في FastLink نقدم خدمات الإنترنت السريع عبر DSL وFTTH مع دعم فني عملي، إعدادات رواتر واضحة، وعروض مميزة لفترة محدودة.",
  offerTitle: "عرض محدود",
  offerText: "خصم 15% على أول شهر مع تركيب مجاني عند اختيار باقة 400 Mbps أو أعلى.",
  offerDuration: "متاح حتى 31 أغسطس 2026",
  aboutText:
    "FastLink هي شركة متخصصة في تقديم حلول الإنترنت المنزلي والاحترافي مع دعم فني متكامل وتوجيهات واضحة لضبط الأجهزة خطوة بخطوة. نركز على السرعة والاستقرار والراحة للعميل.",
  packages: [
    {
      name: "باقة الأساسية",
      speed: "100 Mbps",
      price: 55,
      promoPrice: 47000,
      duration: "شهر واحد",
      description: "مناسبة للبيت العائلي البسيط مع دعم ممتاز.",
    },
    {
      name: "باقة السوبر",
      speed: "200 Mbps",
      price: 80000,
      promoPrice: 68000,
      duration: "شهر واحد",
      description: "مثالية للأسر التي تستخدم أكثر من جهاز في نفس الوقت.",
    },
    {
      name: "باقة برو",
      speed: "400 Mbps",
      price: 110000,
      promoPrice: 94000,
      duration: "شهر واحد",
      description: "أسرع تجربة للترفيه والعمل من المنزل.",
    },
  ],
  routers: [
    {
      name: "Arvan 2000",
      type: "روتر DSL مع دعم Wi-Fi",
      image: "assets/router-1.svg",
    },
    {
      name: "TP-Link AX3000",
      type: "روتر FTTH حديث",
      image: "assets/router-2.svg",
    },
    {
      name: "ZTE H360",
      type: "روتر سهل الإعداد",
      image: "assets/router-3.svg",
    },
  ],
  steps: [
    {
      title: "1) تحقق من الرقم الأرضي",
      description: "تأكد من أن الخط الأرضي متصل بشكل صحيح وأن الخدمة نشطة قبل البدء.",
    },
    {
      title: "2) قم بتوصيل الراوتر",
      description: "اربط الكابل من المنفذ الأرضي أو FTTH بالراوتر ثم شغله وانتظر حتى يضيء المؤشر بشكل ثابت.",
    },
    {
      title: "3) عدّل اسم الشبكة وكلمة المرور",
      description: "من خلال صفحة الإعداد الخاصة بالراوتر، غيّر اسم الواي فاي إلى اسم مناسب وضع كلمة مرور قوية.",
    },
    {
      title: "4) ضبط الإعدادات المتقدمة",
      description: "إذا كنت تستخدم FTTH أو مودم حديث، حدّد نوع الشبكة ونظام 2.4/5 GHz ثم اختبر الاتصال.",
    },
  ],
  contacts: [
    {
      name: "الأستاذ وليد",
      role: "المحاسب",
      phone: "+963 99 123 4567",
    },
    {
      name: "الأستاذ محمود",
      role: "المحاسب المالي",
      phone: "+963 99 765 4321",
    },
    {
      name: "الأستاذ محمد",
      role: "خدمة العملاء",
      phone: "+963 99 555 1212",
    },
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
          <p>السرعة: ${pkg.speed || ""}</p>
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
  renderRouters(data);
  renderSteps(data);
  renderPackages(data);
  renderAbout(data);
  renderContacts(data);
}

renderPage();
