// for jira

if (document.querySelectorAll("[id*='card'] img").length) {
  // eslint-disable-next-line no-param-reassign
  document.querySelectorAll("[id*='card'] img").forEach((elem) => { elem.style.display = 'none'; });
}
