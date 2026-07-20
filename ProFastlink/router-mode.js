const STORAGE_KEY = "fastlink-site-data-v1";

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
  document.getElementById("guide-company").textContent = router.company || data.routerGuide?.companyName || "FastLink";
  document.getElementById("guide-description").textContent = router.description || data.routerGuide?.description || "";
  document.getElementById("guide-main-image").src = router.image || data.routerGuide?.mainImage || "";
  document.getElementById("guide-main-image").alt = router.name || "الراوتر";

  const steps = router.steps || data.routerGuide?.steps || [];
  document.getElementById("guide-step-1-title").textContent = steps[0]?.title || "";
  document.getElementById("guide-step-1-text").textContent = steps[0]?.text || "";
  document.getElementById("guide-step-1-image").src = steps[0]?.image || "";
  document.getElementById("guide-step-1-image").alt = steps[0]?.title || "";

  document.getElementById("guide-step-2-title").textContent = steps[1]?.title || "";
  document.getElementById("guide-step-2-text").textContent = steps[1]?.text || "";
  document.getElementById("guide-step-2-image").src = steps[1]?.image || "";
  document.getElementById("guide-step-2-image").alt = steps[1]?.title || "";

  document.getElementById("guide-step-3-title").textContent = steps[2]?.title || "";
  document.getElementById("guide-step-3-text").textContent = steps[2]?.text || "";
  document.getElementById("guide-step-3-image").src = steps[2]?.image || "";
  document.getElementById("guide-step-3-image").alt = steps[2]?.title || "";
}

renderGuide();
