document.getElementById('yr').textContent = new Date().getFullYear();
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* contact form -> mail app */
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  const body = encodeURIComponent(f.m.value + '\n\n' + f.n.value + ' (' + f.e.value + ')');
  location.href = 'mailto:mbharathi984@gmail.com?subject=' + encodeURIComponent('Portfolio message from ' + f.n.value) + '&body=' + body;
});

/* 3D tilt on project cards */
if (!reduce) document.querySelectorAll('.card').forEach(c => {
  c.addEventListener('pointermove', e => {
    const r = c.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    c.style.transform = `rotateY(${x * 16}deg) rotateX(${-y * 16}deg) translateZ(10px)`;
  });
  c.addEventListener('pointerleave', () => { c.style.transform = ''; });
});