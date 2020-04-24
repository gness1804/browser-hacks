// sympli

const hideSidebar = () => {
  if (document.querySelector('.m-panel__tree')) {
    document.querySelector('.m-panel__tree').style.display = 'none';
  }
};

if (window.location.href.indexOf('sympli.io') !== -1) {
  hideSidebar();
}
