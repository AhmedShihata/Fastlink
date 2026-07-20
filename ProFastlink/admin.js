const STORAGE_KEY = "fastlink-site-data-v1";
const AUTH_KEY = "fastlink-admin-auth";
const ADMIN_PASSWORD = "FastLinkAdmin2026";
let editingRouterIndex = -1;
let editingPackageIndex = -1;

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
      promoPrice: 47,
      duration: "شهر واحد",
      description: "مناسبة للبيت العائلي البسيط مع دعم ممتاز.",
    },
    {
      name: "باقة السوبر",
      speed: "200 Mbps",
      price: 80,
      promoPrice: 68,
      duration: "شهر واحد",
      description: "مثالية للأسر التي تستخدم أكثر من جهاز في نفس الوقت.",
    },
    {
      name: "باقة برو",
      speed: "400 Mbps",
      price: 110,
      promoPrice: 94,
      duration: "شهر واحد",
      description: "أسرع تجربة للترفيه والعمل من المنزل.",
    },
  ],
  routers: [
    {
      name: "Arvan 2000",
      company: "FastLink",
      type: "روتر DSL مع دعم Wi-Fi",
      image: "assets/router-1.svg",
      description: "روتر مناسب للبيوت التي تحتاج اتصالًا مستقرًا مع إعدادات سهلة.",
      steps: [
        {
          title: "توصيل الكابل والرقم الأرضي",
          text: "تأكد من توصيل الكابل الأرضي أو FTTH بشكل صحيح ثم شغّل الراوتر وانتظر حتى يثبت المؤشر.",
          image: "assets/router-1.svg",
        },
        {
          title: "الدخول إلى صفحة الإعداد",
          text: "اكتب عنوان IP الخاص بالراوتر في المتصفح مثل 192.168.1.1 ثم أدخل اسم المستخدم وكلمة المرور الافتراضيين.",
          image: "assets/router-2.svg",
        },
        {
          title: "ضبط الواي فاي",
          text: "غيّر اسم الشبكة Wi-Fi إلى اسم مناسب وضع كلمة مرور قوية، ثم احفظ التغييرات.",
          image: "assets/router-3.svg",
        },
      ],
    },
    {
      name: "TP-Link AX3000",
      company: "TP-Link",
      type: "روتر FTTH حديث",
      image: "assets/router-2.svg",
      description: "مناسب للمنازل الحديثة التي تحتاج سرعة عالية وغطاء ممتاز.",
      steps: [
        {
          title: "توصيل الكابل FTTH",
          text: "أدخل كابل الإنترنت مباشرة إلى المنفذ WAN ثم شغّل الجهاز.",
          image: "assets/router-2.svg",
        },
        {
          title: "تسجيل الدخول",
          text: "افتح المتصفح واكتب 192.168.0.1 ثم أدخل بيانات الدخول.",
          image: "assets/router-3.svg",
        },
        {
          title: "إعداد الواي فاي",
          text: "حدد اسم الشبكة وكلمة المرور ثم احفظ الإعدادات.",
          image: "assets/hero.svg",
        },
      ],
    },
  ],
  routerGuide: {
    routerName: "Arvan 2000",
    companyName: "FastLink",
    mainImage: "assets/router-1.svg",
    description: "دليل مبسط لضبط الراوتر خطوة بخطوة مع صور توضيحية واضحة.",
    steps: [
      {
        title: "1) توصيل الكابل والرقم الأرضي",
        text: "تأكد من توصيل الكابل الأرضي أو FTTH بشكل صحيح ثم شغّل الراوتر وانتظر حتى يثبت المؤشر.",
        image: "assets/router-1.svg",
      },
      {
        title: "2) الدخول إلى صفحة الإعداد",
        text: "اكتب عنوان IP الخاص بالراوتر في المتصفح مثل 192.168.1.1 ثم أدخل اسم المستخدم وكلمة المرور الافتراضيين.",
        image: "assets/router-2.svg",
      },
      {
        title: "3) ضبط الواي فاي",
        text: "غيّر اسم الشبكة Wi-Fi إلى اسم مناسب وضع كلمة مرور قوية، ثم احفظ التغييرات.",
        image: "assets/router-3.svg",
      },
    ],
  },
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
    return JSON.parse(saved);
  } catch (error) {
    return defaultData;
  }
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function setFormValue(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.value = value ?? "";
  }
}

function renderPackages(data) {
  const container = document.getElementById("packages-admin-list");
  container.innerHTML = data.packages
    .map(
      (pkg, index) => `
        <div class="admin-item">
          <div>
            <strong>${pkg.name}</strong> — ${pkg.speed} — ${pkg.promoPrice} $
          </div>
          <div>
            <button data-edit-package="${index}">تعديل</button>
            <button data-remove-package="${index}">حذف</button>
          </div>
        </div>
      `
    )
    .join("");
}

function resetPackageForm() {
  const form = document.getElementById("package-form");
  if (form) form.reset();
  editingPackageIndex = -1;
  const submitButton = document.getElementById("package-submit-btn");
  if (submitButton) submitButton.textContent = "إضافة باقة";
  const status = document.getElementById("package-edit-status");
  if (status) status.textContent = "";
}

function fillPackageForm(data, index) {
  const pkg = data.packages[index];
  document.getElementById("packageName").value = pkg.name || "";
  document.getElementById("packageSpeed").value = pkg.speed || "";
  document.getElementById("packagePrice").value = pkg.price || "";
  document.getElementById("packagePromoPrice").value = pkg.promoPrice || "";
  document.getElementById("packageDuration").value = pkg.duration || "";
  document.getElementById("packageDescription").value = pkg.description || "";
  const submitButton = document.getElementById("package-submit-btn");
  if (submitButton) submitButton.textContent = "حفظ التغييرات";
  const status = document.getElementById("package-edit-status");
  if (status) status.textContent = `تعديل الباقة: ${pkg.name}`;
}

function renderRouters(data) {
  const container = document.getElementById("routers-admin-list");
  container.innerHTML = data.routers
    .map(
      (router, index) => `
        <div class="admin-item">
          <div>
            <strong>${router.name}</strong> — ${router.company || "FastLink"}
          </div>
          <div>
            <button data-edit-router="${index}">تعديل</button>
            <button data-remove-router="${index}">حذف</button>
          </div>
        </div>
      `
    )
    .join("");
}

function resetRouterForm() {
  const form = document.getElementById("router-form");
  if (form) form.reset();
  editingRouterIndex = -1;
  const submitButton = document.getElementById("router-submit-btn");
  if (submitButton) submitButton.textContent = "إضافة روتر";
  const status = document.getElementById("router-edit-status");
  if (status) status.textContent = "";
}

function fillRouterForm(data, index) {
  const router = data.routers[index];
  document.getElementById("routerName").value = router.name || "";
  document.getElementById("routerCompany").value = router.company || "";
  document.getElementById("routerType").value = router.type || "";
  document.getElementById("routerImage").value = router.image || "";
  document.getElementById("routerDescription").value = router.description || "";
  document.getElementById("routerStep1Title").value = router.steps?.[0]?.title || "";
  document.getElementById("routerStep1Text").value = router.steps?.[0]?.text || "";
  document.getElementById("routerStep1Image").value = router.steps?.[0]?.image || "";
  document.getElementById("routerStep2Title").value = router.steps?.[1]?.title || "";
  document.getElementById("routerStep2Text").value = router.steps?.[1]?.text || "";
  document.getElementById("routerStep2Image").value = router.steps?.[1]?.image || "";
  document.getElementById("routerStep3Title").value = router.steps?.[2]?.title || "";
  document.getElementById("routerStep3Text").value = router.steps?.[2]?.text || "";
  document.getElementById("routerStep3Image").value = router.steps?.[2]?.image || "";
  const submitButton = document.getElementById("router-submit-btn");
  if (submitButton) submitButton.textContent = "حفظ التغييرات";
  const status = document.getElementById("router-edit-status");
  if (status) status.textContent = `تعديل الروتر: ${router.name}`;
}

function bindEvents(data) {
  document.getElementById("offer-form").addEventListener("submit", (event) => {
    event.preventDefault();
    data.offerTitle = document.getElementById("offerTitle").value;
    data.offerText = document.getElementById("offerText").value;
    data.offerDuration = document.getElementById("offerDuration").value;
    saveData(data);
    window.location.href = "index.html";
  });

  document.getElementById("package-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const packageData = {
      name: document.getElementById("packageName").value,
      speed: document.getElementById("packageSpeed").value,
      price: Number(document.getElementById("packagePrice").value),
      promoPrice: Number(document.getElementById("packagePromoPrice").value),
      duration: document.getElementById("packageDuration").value,
      description: document.getElementById("packageDescription").value,
    };

    if (editingPackageIndex >= 0) {
      data.packages[editingPackageIndex] = packageData;
    } else {
      data.packages.push(packageData);
    }

    saveData(data);
    renderPackages(data);
    resetPackageForm();
  });

  document.getElementById("router-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const mainImageFile = document.getElementById("routerImageFile").files[0];
    const mainImageValue = document.getElementById("routerImage").value.trim();
    const mainImage = mainImageFile ? await readFileAsDataURL(mainImageFile) : mainImageValue;

    const step1ImageFile = document.getElementById("routerStep1ImageFile").files[0];
    const step1ImageValue = document.getElementById("routerStep1Image").value.trim();
    const step1Image = step1ImageFile ? await readFileAsDataURL(step1ImageFile) : step1ImageValue;

    const step2ImageFile = document.getElementById("routerStep2ImageFile").files[0];
    const step2ImageValue = document.getElementById("routerStep2Image").value.trim();
    const step2Image = step2ImageFile ? await readFileAsDataURL(step2ImageFile) : step2ImageValue;

    const step3ImageFile = document.getElementById("routerStep3ImageFile").files[0];
    const step3ImageValue = document.getElementById("routerStep3Image").value.trim();
    const step3Image = step3ImageFile ? await readFileAsDataURL(step3ImageFile) : step3ImageValue;

    const routerData = {
      name: document.getElementById("routerName").value,
      company: document.getElementById("routerCompany").value,
      type: document.getElementById("routerType").value,
      image: mainImage || "",
      description: document.getElementById("routerDescription").value,
      steps: [
        {
          title: document.getElementById("routerStep1Title").value,
          text: document.getElementById("routerStep1Text").value,
          image: step1Image || "",
        },
        {
          title: document.getElementById("routerStep2Title").value,
          text: document.getElementById("routerStep2Text").value,
          image: step2Image || "",
        },
        {
          title: document.getElementById("routerStep3Title").value,
          text: document.getElementById("routerStep3Text").value,
          image: step3Image || "",
        },
      ],
    };

    if (editingRouterIndex >= 0) {
      data.routers[editingRouterIndex] = routerData;
    } else {
      data.routers.push(routerData);
    }

    saveData(data);
    renderRouters(data);
    resetRouterForm();
  });

  document.addEventListener("click", (event) => {
    const editPackageButton = event.target.closest("[data-edit-package]");
    if (editPackageButton) {
      const index = Number(editPackageButton.getAttribute("data-edit-package"));
      editingPackageIndex = index;
      fillPackageForm(data, index);
      return;
    }

    const packageButton = event.target.closest("[data-remove-package]");
    if (packageButton) {
      const index = Number(packageButton.getAttribute("data-remove-package"));
      data.packages.splice(index, 1);
      saveData(data);
      renderPackages(data);
      if (editingPackageIndex === index) {
        resetPackageForm();
      }
    }

    const editRouterButton = event.target.closest("[data-edit-router]");
    if (editRouterButton) {
      const index = Number(editRouterButton.getAttribute("data-edit-router"));
      editingRouterIndex = index;
      fillRouterForm(data, index);
      return;
    }

    const routerButton = event.target.closest("[data-remove-router]");
    if (routerButton) {
      const index = Number(routerButton.getAttribute("data-remove-router"));
      data.routers.splice(index, 1);
      saveData(data);
      renderRouters(data);
      if (editingRouterIndex === index) {
        resetRouterForm();
      }
    }
  });
}

function showAdminContent() {
  document.getElementById("admin-login").classList.add("hidden");
  document.getElementById("admin-content").classList.remove("hidden");
}

function init() {
  const data = loadData();
  setFormValue("offerTitle", data.offerTitle);
  setFormValue("offerText", data.offerText);
  setFormValue("offerDuration", data.offerDuration);
  setFormValue("guideRouterName", data.routerGuide?.routerName);
  setFormValue("guideCompanyName", data.routerGuide?.companyName);
  setFormValue("guideMainImage", data.routerGuide?.mainImage);
  setFormValue("guideDescription", data.routerGuide?.description);
  setFormValue("guideStep1Title", data.routerGuide?.steps?.[0]?.title);
  setFormValue("guideStep1Text", data.routerGuide?.steps?.[0]?.text);
  setFormValue("guideStep1Image", data.routerGuide?.steps?.[0]?.image);
  setFormValue("guideStep2Title", data.routerGuide?.steps?.[1]?.title);
  setFormValue("guideStep2Text", data.routerGuide?.steps?.[1]?.text);
  setFormValue("guideStep2Image", data.routerGuide?.steps?.[1]?.image);
  setFormValue("guideStep3Title", data.routerGuide?.steps?.[2]?.title);
  setFormValue("guideStep3Text", data.routerGuide?.steps?.[2]?.text);
  setFormValue("guideStep3Image", data.routerGuide?.steps?.[2]?.image);
  renderPackages(data);
  renderRouters(data);
  resetPackageForm();
  resetRouterForm();
  bindEvents(data);

  const loginForm = document.getElementById("admin-login-form");
  const passwordInput = document.getElementById("adminPassword");
  const errorText = document.getElementById("admin-error");

  if (sessionStorage.getItem(AUTH_KEY) === "true") {
    showAdminContent();
    return;
  }

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const enteredPassword = (passwordInput.value || "").trim();
    if (enteredPassword === ADMIN_PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, "true");
      errorText.textContent = "";
      showAdminContent();
    } else {
      errorText.textContent = "كلمة المرور غير صحيحة";
      passwordInput.value = "";
    }
  });
}

init();
