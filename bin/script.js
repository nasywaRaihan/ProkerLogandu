// Menunggu seluruh struktur HTML siap sebelum menjalankan JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // ===============================================
  // BAGIAN 1: Kode Animasi Angka (Kode Anda yang sudah ada)
  // ===============================================
  const data = {
    populasi: 3500,
    luas: 450,
    rt: 12,
  };

  Object.keys(data).forEach((id) => {
    let target = data[id];
    let el = document.getElementById(id);

    // Pastikan elemen ditemukan sebelum melanjutkan
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

  // ===============================================
  // BAGIAN 2: Kode Carousel (Kode Anda yang sudah ada)
  // ===============================================
  const carousel = document.querySelector(".carousel-container");

  // Pastikan elemen ditemukan sebelum menambahkan event listener
  if (carousel) {
    carousel.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      carousel.scrollLeft += evt.deltaY;
    });
  }

  // ===============================================
  // BAGIAN 3: BARU - Kode untuk Memuat Footer
  // ===============================================
  // Pastikan elemen placeholder footer ada di halaman
  const loadComponent = (id, url) => {
    if (document.getElementById(id)) {
      fetch(url)
        .then((response) => response.text())
        .then((data) => {
          document.getElementById(id).innerHTML = data;
        });
    }
  };

  // Panggil fungsi untuk memuat header dan footer
  loadComponent("header-placeholder", "header.html");
  loadComponent("footer-placeholder", "footer.html");
});
