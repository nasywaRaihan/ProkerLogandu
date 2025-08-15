// Animasikan angka di data desa
document.addEventListener('DOMContentLoaded', () => {
  const data = {
    populasi: 3500,
    luas: 450,
    rt: 12,
  };

  Object.keys(data).forEach((id) => {
    let target = data[id];
    let el = document.getElementById(id);
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
  });

  const carousel = document.querySelector('.carousel-container');
  carousel.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    carousel.scrollLeft += evt.deltaY;
  });
});
