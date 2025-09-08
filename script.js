// Menunggu seluruh struktur HTML siap sebelum menjalankan JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // ===============================================
  // FUNGSI BARU UNTUK MENANDAI LINK NAVBAR AKTIF
  // ===============================================
  const setActiveNavLink = () => {
    const currentPagePath = window.location.pathname;
    const navLinks = document.querySelectorAll('#nav-links a'); // Pastikan ID ini sesuai

    navLinks.forEach(link => {
      // Dapatkan href atribut langsung dari HTML
      const linkHref = link.getAttribute('href');

      // Cek apakah path halaman saat ini diakhiri dengan href link
      if (currentPagePath.endsWith(linkHref)) {
        link.classList.add('active');
      }
    });
  };

  // ===============================================
  // FUNGSI UNTUK TOGGLE NAVBAR MOBILE
  // ===============================================
  const setupMenuToggle = () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    }
  };

  // ===============================================
  // FUNGSI LAMA UNTUK MEMUAT KOMPONEN (HEADER & FOOTER) - TELAH DIMODIFIKASI
  // ===============================================
  const loadComponent = (id, url) => {
    const element = document.getElementById(id);
    if (element) {
      fetch(url)
        .then((response) => response.text())
        .then((data) => {
          element.innerHTML = data;

          // JIKA YANG DIMUAT ADALAH HEADER...
          if (id === "header-placeholder") {
            // ...MAKA JALANKAN FUNGSI UNTUK SETUP MENU TOGGLE...
            setupMenuToggle();
            // ...DAN JALANKAN FUNGSI UNTUK MENANDAI LINK AKTIF.
            setActiveNavLink();
          }
        });
    }
  };

  // Selalu panggil fungsi untuk memuat header dan footer
  loadComponent("header-placeholder", "header.html");
  loadComponent("footer-placeholder", "footer.html");
  // ===============================================
  // BAGIAN 1: Kode Animasi Angka (HANYA JIKA ELEMENNYA ADA)
  // ===============================================
  if (document.getElementById("populasi")) {
    const data = {
      populasi: 3500,
      luas: 450,
      rt: 12,
    };

    Object.keys(data).forEach((id) => {
      let target = data[id];
      let el = document.getElementById(id);
      if (el) {
        let count = 0;
        let step = target / 100;
        let counter = setInterval(() => {
          count += step;
          if (count >= target) {
            count = target;
            clearInterval(counter);
          }
          el.textContent = Math.floor(count);
        }, 20);
      }
    });
  }

  // ===============================================
  // BAGIAN 2: Kode Carousel (HANYA JIKA ELEMENNYA ADA)
  // ===============================================
  const carousel = document.querySelector(".carousel-container");
  if (carousel) {
    carousel.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      carousel.scrollLeft += evt.deltaY;
    });
  }

  // =========================================================
// BAGIAN 3: KODE UNTUK GALERI GAMBAR UMKM (KODE BARU)
// =========================================================
// Cek dulu apakah ada elemen galeri di halaman ini
const mainImage = document.querySelector(".main-img");

if (mainImage) {
  const thumbnails = document.querySelectorAll(".thumbnail-img");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      // Ganti 'src' gambar utama dengan 'src' dari thumbnail yang diklik
      mainImage.src = thumbnail.src;

      // Beri highlight pada thumbnail yang aktif
      thumbnails.forEach((t) => t.classList.remove("active"));
      thumbnail.classList.add("active");
    });
  });

  // Inisialisasi: set thumbnail pertama sebagai aktif
  if (thumbnails.length > 0) {
    thumbnails[0].classList.add("active");
  }
}

});

