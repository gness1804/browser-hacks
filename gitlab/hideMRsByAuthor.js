// thanks to "masato sasano @masatosasano commented a month ago" in https://gitlab.com/gitlab-org/gitlab-ce/issues/13650 for the meat of this code
const hideMRsByAuthor = () => {
  if (window.location.href.indexOf('gitlab') === -1) {
    alert('Oops, you are on the wrong site. You need to be in Gitlab to do this.');
    return;
  }

  const list = document.getElementsByClassName('author');

  for (const item of list) {
    const author = item.textContent;
    const parentEl = item.closest('.merge-request');
    if (author === 'Graham Nessler') {
      parentEl.style.display = 'none';
    }
  }

}

hideMRsByAuthor();
