// gitlab.com
// thanks to "masato sasano @masatosasano commented a month ago" in https://gitlab.com/gitlab-org/gitlab-ce/issues/13650 for the meat of this code

const hideGitlabWIPS = () => {
  const mrList = document.getElementsByClassName('mr-list')[0].children;
  if (!mrList) {
    return;
  }

  for (const key in mrList) {
    if ({}.hasOwnProperty.call(mrList, key)) {
      const elem = mrList[key];
      const title = elem.getElementsByClassName('merge-request-title-text')[0].innerText;
      if (title.indexOf('WIP') !== -1) {
        elem.style.display = 'none';
      }
    }
  }
};

const hideMRsByAuthor = () => {
  const list = document.getElementsByClassName('author');
  if (!list) {
    return;
  }

  for (const item of list) {
    const author = item.textContent;
    const parentEl = item.closest('.merge-request');
    if (author === 'Graham Nessler') {
      parentEl.style.display = 'none';
    }
  }
};

const hideTreeView = () => {
  if (document.querySelector('.diff-tree-list')) {
    document.querySelector('.diff-tree-list').style.display = 'none';
  }
};

if (window.location.href.indexOf('gitlab') !== -1) {
  hideGitlabWIPS();
  hideMRsByAuthor();
  hideTreeView();
}
