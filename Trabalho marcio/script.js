const blendLayer = document.getElementById('blend');
const select = document.getElementById('blendMode');

select.addEventListener('change', () => {
  blendLayer.style.mixBlendMode = select.value;
});
