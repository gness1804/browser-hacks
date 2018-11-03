// chinesefor.us

const hideSocialSidebar = () => {
  if (document.querySelector('.essb_displayed_sidebar')) {
    document.querySelector('.essb_displayed_sidebar').style.display = 'none';
  }
};

if (window.location.href.indexOf('chinesefor.us') !== -1) {
  hideSocialSidebar();
}
