const STORAGE_KEY = "fastlink-site-data-v1";


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

function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return null;
  try {
    return JSON.parse(saved);
  } catch (error) {
    return null;
  }
}

function renderGuide() {
  const data = loadData();
  if (!data) return;

  const params = new URLSearchParams(window.location.search);
  const routerIndex = Number(params.get("router"));
  const router = !Number.isNaN(routerIndex) && data.routers?.[routerIndex]
    ? data.routers[routerIndex]
    : data.routerGuide && data.routers?.[0]
      ? data.routers[0]
      : data.routerGuide || null;

  if (!router) return;

  document.getElementById("guide-title").textContent = `${router.name || "الراوتر"} | دليل الضبط`;
  document.getElementById("guide-company").textContent = router.company || data.routerGuide?.companyName || "";
  document.getElementById("guide-description").textContent = router.description || data.routerGuide?.description || "";
  document.getElementById("");
  const mainImage = document.getElementById("guide-main-image");
  mainImage.src = router.image || data.routerGuide?.mainImage || "";
  mainImage.alt = router.name || "الراوتر";

  const steps = router.steps || data.routerGuide?.steps || [];
  const stepsContainer = document.getElementById("guide-steps");
  stepsContainer.innerHTML = steps.length
    ? steps
        .map(
          (step, index) => `
            <section class="guide-card">
              <h2>${index + 1}) ${step.title || "خطوة"}</h2>
              <p>${step.text || ""}</p>
              ${step.image ? `<img src="${step.image}" alt="${step.title || "خطوة"}" />` : ""}
            </section>
            
          `
        )
        .join("")
    : '<p>لا توجد خطوات متاحة لهذا الراوتر حالياً.</p>';
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
renderGuide();
