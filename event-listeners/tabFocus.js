document.addEventListener('keyup', (e) => {
  if (e.keyCode === 9) {
    console.log('tab focus is on:', e.target);
  }
});
