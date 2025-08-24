// Menunggu seluruh struktur HTML siap sebelum menjalankan JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // ===============================================
  // FUNGSI UNTUK MEMUAT KOMPONEN (HEADER & FOOTER)
  // ===============================================
  const loadComponent = (id, url) => {
    const element = document.getElementById(id);
    if (element) {
      fetch(url)
        .then((response) => response.text())
        .then((data) => {
          element.innerHTML = data;
        });
    }
  };

  // Selalu panggil fungsi untuk memuat header dan footer di setiap halaman
  loadComponent('header-placeholder', 'header.html');
  loadComponent('footer-placeholder', 'footer.html');

  // ===============================================
  // BAGIAN 1: Kode Animasi Angka (HANYA JIKA ELEMENNYA ADA)
  // ===============================================
  // Kita periksa dulu apakah salah satu elemen data ada, misalnya 'populasi'
  if (document.getElementById('populasi')) {
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
  const carousel = document.querySelector('.carousel-container');
  if (carousel) {
    carousel.addEventListener('wheel', (evt) => {
      evt.preventDefault();
      carousel.scrollLeft += evt.deltaY;
    });
  }
});

// ===============================================
// BAGIAN 3: Kode Toggle Menu (HANYA JIKA ELEMENNYA ADA)
// ===============================================
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
