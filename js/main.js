/**
 * RUPA — Circular Fashion Brand
 * Interactive Logic: Before/After Slider, Filterable Collection, Product Story Modal,
 * Animated Impact Counters, and Branching Flow Interactivity.
 */

// Comprehensive Product Database for Catalog & Story Modal
const PRODUCT_DATA = {
  "rupa-017": {
    id: "rupa-017",
    code: "RUPA #017",
    name: "Redesigned Patchwork Kimono",
    category: "Fashion Redesain",
    categoryKey: "redesain",
    price: "Rp 285.000",
    isOneOfOne: true,
    badgeText: "1 of 1 Redesign",
    cardImg: "assets/rupa-017-kimono.jpg",
    cardAlt: "RUPA #017 Redesigned Patchwork Kimono",
    quote: "“Produk ini berawal dari dua kemeja katun vintage dan sisa kain denim yang ditemukan dalam proses sortir bale domestik.”",
    origin: "Pakaian bekas domestik (Kemeja katun twill & denim 10oz)",
    process: "Sortir material → Dekonstruksi pola → Perancangan kimono asimetris → Jahit tangan & obras UMKM → Kurasi akhir",
    artisan: "Ibu Siti & Sanggar Penjahit Berdikari (Tangerang)",
    materialSaved: "480 gram serat katun & denim",
    impactCo2: "3.2 kg CO₂e emisi baru dihindari*",
    shopeeUrl: "https://shopee.co.id/rupa.official",
    tokopediaUrl: "https://tokopedia.com/rupaofficial",
    beforeImg: "assets/rupa-017-before.jpg",
    beforeCaption: "Kemeja katun bermotif indigo boro dan jaket denim vintage sebelum didekonstruksi.",
    processImg: "assets/artisan-sewing-umkm.jpg",
    processCaption: "Pemotongan pola baru dan jahitan silang oleh penjahit UMKM mitra.",
    afterImg: "assets/rupa-017-kimono.jpg",
    afterCaption: "Outer kimono patchwork modern dengan aksen jahitan boro/sashiko dan saku denim bernilai fungsional."
  },
  "rupa-024": {
    id: "rupa-024",
    code: "RUPA #024",
    name: "Dusty Pink Puffed Sleeve Peplum Blouse",
    category: "Fashion Redesain",
    categoryKey: "redesain",
    price: "Rp 385.000",
    isOneOfOne: true,
    badgeText: "1 of 1 Redesign",
    cardImg: "assets/rupa-024-after.jpg",
    cardAlt: "RUPA #024 Dusty Pink Puffed Sleeve Peplum Blouse",
    quote: "“Mentransformasi kaos oblong bermotif geometris dusty pink menjadi blus feminin berstruktur peplum dengan aksen puffed sleeve dan kancing depan yang elegan.”",
    origin: "Kaos oblong katun motif geometris dusty pink dari bal sortir domestik",
    process: "Dekomposisi pola kaos oblong → Perancangan garis leher square neck & siluet torso ramping → Pembentukan lengan balon (puffed sleeve) bervolume → Penambahan kancing bungkus kain senada & kelim peplum melengkung",
    artisan: "Pak Joko & Tim Penjahit Mitra RUPA (Bandung)",
    materialSaved: "380 gram katun combed bermotif",
    impactCo2: "3.1 kg CO₂e emisi dihindari*",
    shopeeUrl: "https://shopee.co.id/rupa.official",
    tokopediaUrl: "https://tokopedia.com/rupaofficial",
    beforeImg: "assets/rupa-024-before.jpg",
    beforeCaption: "Kondisi awal berupa kaos oblong vintage warna dusty pink dengan potongan longgar biasa.",
    processImg: "assets/artisan-sewing-umkm.jpg",
    processCaption: "Pemotongan pola square neck, perakitan lengan balon elastis, dan penjahitan kelim peplum.",
    afterImg: "assets/rupa-024-after.jpg",
    afterCaption: "Blus peplum square neck elegan dengan detail kancing depan dan lengan puffed yang modis."
  },
  "rupa-042": {
    id: "rupa-042",
    code: "RUPA #042",
    name: "Vintage Chore Workwear Coat",
    category: "Thrift Pilihan",
    categoryKey: "thrift",
    price: "Rp 175.000",
    isOneOfOne: true,
    badgeText: "Curated Thrift",
    cardImg: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=700&q=80",
    cardAlt: "RUPA #042 Vintage Chore Workwear Coat",
    quote: "“Jaket kerja klasik yang ditemukan dalam kondisi prima: material kanvas tebal yang justru semakin berkarakter seiring waktu.”",
    origin: "Bal pakaian kerja vintage domestik",
    process: "Sortir grade-A → Pembersihan ozon ramah lingkungan → Penggantian kancing kuningan vintage → Pemeriksaan detail kelayakan",
    artisan: "Tim Kurasi RUPA Studio",
    materialSaved: "750 gram kanvas katun organik",
    impactCo2: "5.1 kg CO₂e emisi dihindari*",
    shopeeUrl: "https://shopee.co.id/rupa.official",
    tokopediaUrl: "https://tokopedia.com/rupaofficial",
    beforeImg: "assets/before-garment.png",
    beforeCaption: "Kondisi awal di tumpukan bale dengan kancing longgar dan debu penyimpanan.",
    processImg: "assets/artisan-sewing-umkm.jpg",
    processCaption: "Pembersihan higienis bebas bahan kimia berbahaya dan perbaikan jahitan saku.",
    afterImg: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=700&q=80",
    afterCaption: "Chore coat otentik siap pakai dengan ketahanan bertahun-tahun."
  },
  "rupa-031": {
    id: "rupa-031",
    code: "RUPA #031",
    name: "Tiered Upcycled Prairie Dress",
    category: "Fashion Redesain",
    categoryKey: "redesain",
    price: "Rp 325.000",
    isOneOfOne: true,
    badgeText: "1 of 1 Redesign",
    cardImg: "assets/model-redesign-dress.png",
    cardAlt: "RUPA #031 Tiered Upcycled Prairie Dress",
    quote: "“Mengubah gamis bermotif vintage yang kebesaran menjadi gaun bertingkat modern dengan aksen puffed sleeve.”",
    origin: "Pakaian terusan berbahan rayon adem dari sortir gelombang pertama",
    process: "Pola ulang kerah & pinggang → Pemotongan bertingkat (ruffle) → Penjahitan kembali bersama UMKM",
    artisan: "Mbak Rini (Penjahit Busana Wanita, Yogyakarta)",
    materialSaved: "390 gram rayon viscose",
    impactCo2: "2.8 kg CO₂e emisi dihindari*",
    shopeeUrl: "https://shopee.co.id/rupa.official",
    tokopediaUrl: "https://tokopedia.com/rupaofficial",
    beforeImg: "assets/before-garment.png",
    beforeCaption: "Gaun vintage model lama yang terabaikan karena potongan tidak pas.",
    processImg: "assets/artisan-sewing-umkm.jpg",
    processCaption: "Penyempitan bustier dan perakitan ruffle bertingkat yang proporsional.",
    afterImg: "assets/model-redesign-dress.png",
    afterCaption: "Gaun santai yang anggun, segar, dan nyaman untuk iklim tropis."
  },
  "rupa-055": {
    id: "rupa-055",
    code: "RUPA #055",
    name: "Floral Upcycled Peplum Wrap Top",
    category: "Fashion Redesain",
    categoryKey: "redesain",
    price: "Rp 235.000",
    isOneOfOne: true,
    badgeText: "1 of 1 Redesign",
    cardImg: "assets/rupa-055-after.jpg",
    cardAlt: "RUPA #055 Floral Upcycled Peplum Wrap Top",
    quote: "“Mentransformasi kaos motif floral vintage menjadi atasan peplum wrap asimetris feminin yang anggun dan berkarakter.”",
    origin: "Kaos oblong katun motif floral vintage dari sortir bal domestik",
    process: "Dekomposisi pola kaos oblong → Pemotongan struktur square neck & tali bahu → Pembentukan draperi peplum asimetris samping → Penambahan aksen ikat pita pinggang",
    artisan: "Mbak Rini & Sanggar Jahit Mitra (Yogyakarta)",
    materialSaved: "310 gram katun floral combed",
    impactCo2: "2.4 kg CO₂e emisi dihindari*",
    shopeeUrl: "https://shopee.co.id/rupa.official",
    tokopediaUrl: "https://tokopedia.com/rupaofficial",
    beforeImg: "assets/rupa-055-before.jpg",
    beforeCaption: "Kaos oblong vintage bermotif floral dengan siluet sederhana sebelum didekonstruksi.",
    processImg: "assets/artisan-sewing-umkm.jpg",
    processCaption: "Pemotongan pola square-neck, penataan draperi samping, dan penjahitan kelim halus oleh penjahit mitra.",
    afterImg: "assets/rupa-055-after.jpg",
    afterCaption: "Atasan peplum wrap asimetris feminin elegan dengan detail pita samping yang siap pakai."
  },
  "rupa-088": {
    id: "rupa-088",
    code: "RUPA #088",
    name: "Remnant Patchwork Tote & Scrunchie Duo",
    category: "Produk Turunan",
    categoryKey: "turunan",
    price: "Rp 89.000",
    isOneOfOne: false,
    badgeText: "Sisa Bahan (Zero Waste)",
    cardImg: "assets/sisa-bahan-products.png",
    cardAlt: "RUPA #088 Patchwork Tote & Scrunchie",
    quote: "“Potongan kain sisa dari proses desain ulang tidak dibuang. Setiap perca dirajut menjadi aksesori harian yang bernilai fungsional.”",
    origin: "Perca (offcuts) dari produksi jaket dan dress RUPA",
    process: "Penyortiran perca berdasarkan warna & ketebalan → Jahit sambung pola mosaic → Penambahan furing katun daur ulang → Penambahan karet elastis",
    artisan: "Komunitas Ibu Rumah Tangga Mitra RUPA (Cimahi)",
    materialSaved: "220 gram perca tekstil",
    impactCo2: "1.5 kg CO₂e emisi dihindari*",
    shopeeUrl: "https://shopee.co.id/rupa.official",
    tokopediaUrl: "https://tokopedia.com/rupaofficial",
    beforeImg: "assets/before-garment.png",
    beforeCaption: "Potongan sisa kain pola garmen yang umumnya berakhir di tempat sampah.",
    processImg: "assets/artisan-sewing-umkm.jpg",
    processCaption: "Penyusunan komposisi warna geometris oleh ibu-ibu perajin.",
    afterImg: "assets/sisa-bahan-products.png",
    afterCaption: "Tote bag kuat berlapis ganda dan scrunchie lembut tanpa limbah."
  },
  "rupa-092": {
    id: "rupa-092",
    code: "RUPA #092",
    name: "Upcycled Pocket Pouch & Key Strap",
    category: "Produk Turunan",
    categoryKey: "turunan",
    price: "Rp 49.000",
    isOneOfOne: false,
    badgeText: "Sisa Bahan (Zero Waste)",
    cardImg: "assets/pouch-lanyard-product.jpg?v=clean1",
    cardAlt: "RUPA #092 Upcycled Pocket Pouch & Key Strap",
    quote: "“Memanfaatkan bagian saku celana kargo lama menjadi kantong serbaguna untuk koin, earphone, dan kartu.”",
    origin: "Saku utuh dari celana kargo yang diubah menjadi rompi",
    process: "Pelepasan saku presisi → Pemasangan zipper YKK rekondisi → Penambahan tali lanyard perca",
    artisan: "Sanggar Jahit Cimahi",
    materialSaved: "140 gram material",
    impactCo2: "0.9 kg CO₂e emisi dihindari*",
    shopeeUrl: "https://shopee.co.id/rupa.official",
    tokopediaUrl: "https://tokopedia.com/rupaofficial",
    beforeImg: "assets/celana.png",
    beforeCaption: "Celana kargo robek dengan kantong samping yang masih sangat kokoh.",
    processImg: "assets/artisan-sewing-umkm.jpg",
    processCaption: "Penambahan lining dalam dan pengait logam berdaya tahan tinggi.",
    afterImg: "assets/pouch-lanyard-product.jpg?v=clean1",
    afterCaption: "Pouch mini fungsional bergaya utilitarian modern dengan lanyard strap."
  }
};

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initComparisonSlider();
  initCollectionFilters();
  initProductStoryModal();
  initImpactCounters();
  initFlowInteractions();
  initStepInteractions();
  initScrollTransitions();
  init3DTiltCards();
});

/* 1. Mobile Navigation */
function initMobileNav() {
  const toggleBtn = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const isExpanded = navMenu.classList.contains("active");
    toggleBtn.setAttribute("aria-expanded", isExpanded);
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
}

/* 2. Interactive Before/After Comparison Slider */
function initComparisonSlider() {
  const container = document.getElementById("transformationSlider");
  if (!container) return;

  const beforeLayer = container.querySelector(".slider-image-before");
  const handle = container.querySelector(".slider-handle");
  const percentBadge = document.getElementById("sliderPercentageBadge");
  const tagBefore = document.getElementById("sliderTagBefore");
  const tagAfter = document.getElementById("sliderTagAfter");
  let isDragging = false;
  let hasInteracted = false;

  function setSliderPosition(percentage) {
    percentage = Math.max(0, Math.min(100, percentage));
    beforeLayer.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;

    if (percentBadge) {
      percentBadge.textContent = `SEBELUM ${Math.round(percentage)}% · SESUDAH ${Math.round(100 - percentage)}%`;
    }

    if (tagBefore && tagAfter) {
      tagBefore.style.opacity = percentage < 15 ? "0.2" : "1";
      tagAfter.style.opacity = percentage > 85 ? "0.2" : "1";
    }
  }

  function updateSliderPosition(clientX) {
    const rect = container.getBoundingClientRect();
    let offsetX = clientX - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;

    const percentage = (offsetX / rect.width) * 100;
    setSliderPosition(percentage);
  }

  function startDrag() {
    isDragging = true;
    container.classList.add("is-dragging");
    if (!hasInteracted) {
      hasInteracted = true;
      container.classList.add("has-interacted");
    }
  }

  function stopDrag() {
    isDragging = false;
    container.classList.remove("is-dragging");
  }

  // Mouse events
  handle.addEventListener("mousedown", (e) => {
    startDrag();
    e.preventDefault();
  });

  container.addEventListener("mousedown", (e) => {
    startDrag();
    updateSliderPosition(e.clientX);
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  });

  window.addEventListener("mouseup", stopDrag);

  // Touch events for mobile
  handle.addEventListener("touchstart", (e) => {
    startDrag();
  }, { passive: true });

  container.addEventListener("touchstart", (e) => {
    startDrag();
    if (e.touches && e.touches[0]) {
      updateSliderPosition(e.touches[0].clientX);
    }
  }, { passive: true });

  window.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    if (e.touches && e.touches[0]) {
      updateSliderPosition(e.touches[0].clientX);
    }
  }, { passive: true });

  window.addEventListener("touchend", stopDrag);

  // Auto demonstration sway when user scrolls into view (if not yet interacted)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasInteracted) {
        observer.disconnect();
        let step = 0;
        const frames = [50, 48, 44, 38, 34, 36, 42, 50, 58, 64, 66, 62, 56, 52, 50];
        const timer = setInterval(() => {
          if (hasInteracted || step >= frames.length) {
            clearInterval(timer);
            if (!hasInteracted) setSliderPosition(50);
            return;
          }
          setSliderPosition(frames[step]);
          step++;
        }, 55);
      }
    });
  }, { threshold: 0.35 });

  observer.observe(container);
}

/* 3. Collection Filter Tabs with Stagger Animation */
function initCollectionFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-card");
  const countIndicator = document.getElementById("collectionCount");

  if (!filterBtns.length || !productCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");
      let visibleCount = 0;

      productCards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filterValue === "all" || category === filterValue) {
          card.style.display = "flex";
          card.classList.remove("card-enter-anim");
          // Trigger reflow to restart CSS animation
          void card.offsetWidth;
          card.classList.add("card-enter-anim");
          card.style.animationDelay = `${visibleCount * 45}ms`;
          visibleCount++;
        } else {
          card.style.display = "none";
          card.classList.remove("card-enter-anim");
        }
      });

      if (countIndicator) {
        countIndicator.textContent = `Menampilkan ${visibleCount} Produk`;
      }
    });
  });
}

/* 4. Product Story Modal / Drawer */
function initProductStoryModal() {
  const modalOverlay = document.getElementById("storyModalOverlay");
  const closeBtn = document.getElementById("closeStoryModal");
  const storyTriggerBtns = document.querySelectorAll("[data-story-id]");

  if (!modalOverlay || !closeBtn) return;

  function openStory(productId) {
    const data = PRODUCT_DATA[productId];
    if (!data) return;

    // Fill in modal fields
    document.getElementById("modalProductCode").textContent = data.code;
    document.getElementById("modalCategoryBadge").textContent = data.category;
    document.getElementById("modalEditorialQuote").textContent = data.quote;
    document.getElementById("modalOrigin").textContent = data.origin;
    document.getElementById("modalProcess").textContent = data.process;
    document.getElementById("modalArtisan").textContent = data.artisan;
    document.getElementById("modalMaterialSaved").textContent = data.materialSaved;
    document.getElementById("modalImpactCo2").textContent = data.impactCo2;
    document.getElementById("modalPrice").textContent = data.price;

    // Visual Timeline
    document.getElementById("modalBeforeImg").src = data.beforeImg;
    document.getElementById("modalBeforeCaption").textContent = data.beforeCaption;
    document.getElementById("modalProcessImg").src = data.processImg;
    document.getElementById("modalProcessCaption").textContent = data.processCaption;
    document.getElementById("modalAfterImg").src = data.afterImg;
    document.getElementById("modalAfterCaption").textContent = data.afterCaption;

    // Marketplace buttons
    const shopeeBtn = document.getElementById("modalShopeeBtn");
    const tokopediaBtn = document.getElementById("modalTokopediaBtn");
    if (shopeeBtn) shopeeBtn.href = data.shopeeUrl;
    if (tokopediaBtn) tokopediaBtn.href = data.tokopediaUrl;

    // Show modal & prevent background scroll
    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeStory() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  storyTriggerBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const productId = btn.getAttribute("data-story-id");
      openStory(productId);
    });
  });

  closeBtn.addEventListener("click", closeStory);

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeStory();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeStory();
    }
  });

  // Attach global helper so buttons inside dynamic elements can call it
  window.openProductStory = openStory;
}

/* 5. Animated Impact Counters */
function initImpactCounters() {
  const counterElements = document.querySelectorAll(".metric-num[data-target]");
  if (!counterElements.length) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counterElements.forEach(counter => {
          const target = parseFloat(counter.getAttribute("data-target"));
          const isDecimal = counter.getAttribute("data-target").includes(".");
          const duration = 1800;
          const frameRate = 1000 / 60;
          const totalFrames = Math.round(duration / frameRate);
          let frame = 0;

          const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            // Ease out cubic
            const current = target * (1 - Math.pow(1 - progress, 3));

            if (isDecimal) {
              counter.textContent = current.toFixed(1);
            } else {
              counter.textContent = Math.round(current).toLocaleString("id-ID");
            }

            if (frame >= totalFrames) {
              clearInterval(timer);
              if (isDecimal) {
                counter.textContent = target.toFixed(1);
              } else {
                counter.textContent = target.toLocaleString("id-ID");
              }
            }
          }, frameRate);
        });
      }
    });
  }, { threshold: 0.3 });

  const impactSection = document.getElementById("dampak");
  if (impactSection) {
    observer.observe(impactSection);
  }
}

/* 6. Flow Diagram Interactions */
function initFlowInteractions() {
  const pathCards = document.querySelectorAll(".path-card");
  pathCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      pathCards.forEach(c => c.style.opacity = "0.7");
      card.style.opacity = "1";
    });
    card.addEventListener("mouseleave", () => {
      pathCards.forEach(c => c.style.opacity = "1");
    });
  });
}

/* 7. Interactive Step Sequence */
function initStepInteractions() {
  const steps = document.querySelectorAll(".step-item");
  if (!steps.length) return;

  steps.forEach(step => {
    step.addEventListener("mouseenter", () => {
      steps.forEach(s => s.classList.remove("active-step"));
      step.classList.add("active-step");
    });
    step.addEventListener("click", () => {
      steps.forEach(s => s.classList.remove("active-step"));
      step.classList.add("active-step");
    });
  });
}

/* 8. Professional Editorial Scroll Transitions & Animations */
function initScrollTransitions() {
  // A. Top Scroll Progress Bar & Back to Top Button
  const progressBar = document.getElementById("scrollProgressBar");
  const backToTopBtn = document.getElementById("backToTopBtn");
  
  // HUD Elements
  const hudNav = document.getElementById("sideHudNav");
  const hudIndex = document.getElementById("hudIndex");
  const hudLabel = document.getElementById("hudLabel");
  const hudTrackProgress = document.getElementById("hudTrackProgress");
  const hudDots = document.querySelectorAll(".hud-dot");

  const HUD_SECTIONS = [
    { id: "hero", num: "01", name: "BERANDA" },
    { id: "problem", num: "02", name: "MASALAH" },
    { id: "cara-kerja", num: "03", name: "CARA KERJA" },
    { id: "bale-to-value", num: "04", name: "PROSES" },
    { id: "koleksi", num: "05", name: "KOLEKSI" },
    { id: "dampak", num: "06", name: "DAMPAK" },
    { id: "tentang", num: "07", name: "TENTANG" }
  ];

  // Click on HUD dot to smooth scroll with sticky header offset
  hudDots.forEach(dot => {
    dot.addEventListener("click", () => {
      const targetSelector = dot.getAttribute("data-target");
      const targetEl = document.querySelector(targetSelector);
      if (targetEl) {
        const headerOffset = 80;
        const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: targetPos,
          behavior: "smooth"
        });
      }
    });
  });

  function updateScrollState() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Progress Bar
    if (progressBar && scrollHeight > 0) {
      const scrollPercent = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
      progressBar.style.width = `${scrollPercent}%`;
    }
    
    // Back to Top Button
    if (backToTopBtn) {
      if (scrollTop > 450) {
        backToTopBtn.classList.add("is-visible");
      } else {
        backToTopBtn.classList.remove("is-visible");
      }
    }

    // Dynamic Section HUD Tracking & Header NavSpy
    const scrollPosition = scrollTop + 160;
    let activeIdx = 0;

    HUD_SECTIONS.forEach((sec, idx) => {
      const el = document.getElementById(sec.id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top) {
          activeIdx = idx;
        }
      }
    });

    const activeSec = HUD_SECTIONS[activeIdx];
    if (hudIndex && hudLabel && activeSec) {
      hudIndex.textContent = activeSec.num;
      hudLabel.textContent = activeSec.name;
    }

    if (hudTrackProgress && HUD_SECTIONS.length > 1) {
      const trackPct = (activeIdx / (HUD_SECTIONS.length - 1)) * 100;
      hudTrackProgress.style.height = `${trackPct}%`;
    }

    hudDots.forEach((dot, idx) => {
      if (idx === activeIdx) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });

    // Sticky Header Nav Links
    const navLinks = document.querySelectorAll(".nav-menu .nav-link");
    navLinks.forEach(link => {
      link.classList.remove("active-nav");
      if (activeSec && link.getAttribute("href") === `#${activeSec.id}`) {
        link.classList.add("active-nav");
      }
    });

    // Subtle Watermark Parallax Motion
    const watermarks = document.querySelectorAll(".section-watermark");
    watermarks.forEach(wm => {
      const parentSection = wm.closest("section");
      if (parentSection) {
        const rect = parentSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const delta = (window.innerHeight - rect.top) * 0.08;
          wm.style.transform = `translateY(${Math.max(-25, Math.min(25, delta - 20))}px)`;
        }
      }
    });
  }

  window.addEventListener("scroll", () => {
    window.requestAnimationFrame(updateScrollState);
  }, { passive: true });
  updateScrollState();

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // C. Section & Component Editorial Entrance Observer
  const allSections = document.querySelectorAll("section");
  allSections.forEach(sec => {
    sec.classList.add("scroll-reveal");
  });

  const staggerContainers = document.querySelectorAll(
    ".product-grid, .steps-timeline-editorial, .three-paths-grid, .stats-editorial-grid, .impact-pillars-grid, .why-grid"
  );
  staggerContainers.forEach(container => {
    container.classList.add("stagger-group");
  });

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px"
    });

    document.querySelectorAll(".scroll-reveal, .stagger-group, .reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .reveal-scale-in").forEach(el => {
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll(".scroll-reveal, .stagger-group").forEach(el => {
      el.classList.add("is-revealed");
    });
  }
}

/* 9. Interactive 3D Perspective Card Tilt (Mousemove Micro-interaction) */
function init3DTiltCards() {
  const cards = document.querySelectorAll(".product-card, .path-card, .step-item");
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      
      card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px)`;
    });
    
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}



