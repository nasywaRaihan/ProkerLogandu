// Animasi angka
function animateValue(id, start, end, duration) {
  let obj = document.getElementById(id);
  let range = end - start;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    let progress = Math.min((timestamp - startTime) / duration, 1);
    obj.textContent = Math.floor(progress * range + start);
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }
  requestAnimationFrame(step);
}

// Jalankan animasi saat halaman load
window.onload = function () {
  animateValue('populasi', 0, 3500, 2000);
  animateValue('luas', 0, 450, 2000);
  animateValue('rt', 0, 20, 2000);
};
