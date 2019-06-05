// stack overflow

const hideUselessSidebar = () => {
  if (document.querySelector('#hot-network-questions')) {
    document.querySelector('#hot-network-questions').style.display = 'none';
  }
};

if (window.location.href.indexOf('stackoverflow.com') !== -1) {
  hideUselessSidebar();
}
