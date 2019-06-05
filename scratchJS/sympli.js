// sympli

const hideSidebar = () => {
  if (document.querySelector('.m-panel__tree')) {
    document.querySelector('.m-panel__tree').style.display = 'none';
  }
};

// const makeCompFullScreen = () => { // doesn't work
//   if (document.querySelector('.m-panel__content')) {
//     document.querySelector('.m-panel__content').style.width = '3000px !important';
//   }
// };

if (window.location.href.indexOf('sympli.io') !== -1) {
  hideSidebar();
  // makeCompFullScreen();
}
