// thanks to "masato sasano @masatosasano commented a month ago" in https://gitlab.com/gitlab-org/gitlab-ce/issues/13650 for the meat of this code
const hideGitlabWIPS = () => {
  if (window.location.href.indexOf('gitlab') === -1) {
    alert('Oops, you are on the wrong site. You need to be in Gitlab to do this.');
    return;
  }

  const mrList = document.getElementsByClassName('mr-list')[0].children;
  if (!mrList) {
    return;
  }

  for (const key in mrList) {
    const elem = mrList[key];
    const title = elem.getElementsByClassName('merge-request-title-text')[0].innerText;
    if (title.indexOf('WIP') !== -1) {
      elem.style.display = 'none';
    }
  }
}

hideGitlabWIPS();
