// the master JS file that I use with Scratch.js. It works on all relevant pages.
// this should always be up to date and kept in sync with ScratchJS in Chrome.
// To build this file. run npm run build:scratch.
// It should be auto-generated and not edited manually.

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
      const title = elem.getElementsByClassName('merge-request-title-text')[0]
        .innerText;
      if (
        title.indexOf('WIP') !== -1 ||
        title.indexOf('Draft:') !== -1 ||
        title.indexOf('DRAFT:') !== -1
      ) {
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

const hideMRsWithTwoApprovals = () => {
  const list = document.getElementsByClassName('issuable-upvotes');
  if (!list) {
    return;
  }

  for (const item of list) {
    const approvals = item.textContent;
    const parentEl = item.closest('.merge-request');
    if (parseInt(approvals, 10) > 1) {
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
  hideMRsWithTwoApprovals();
  hideTreeView();
}

// sympli

const hideSidebar = () => {
  if (document.querySelector('.m-panel__tree')) {
    document.querySelector('.m-panel__tree').style.display = 'none';
  }
};

if (window.location.href.indexOf('sympli.io') !== -1) {
  hideSidebar();
}

// stack overflow

const hideUselessSidebar = () => {
  if (document.querySelector('#hot-network-questions')) {
    document.querySelector('#hot-network-questions').style.display = 'none';
  }
};

if (window.location.href.indexOf('stackoverflow.com') !== -1) {
  hideUselessSidebar();
}

// for jira

if (document.querySelectorAll("[id*='card'] img").length) {
  document.querySelectorAll("[id*='card'] img").forEach((elem) => {
    elem.style.display = 'none';
  });
}
