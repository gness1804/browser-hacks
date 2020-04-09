// for jira

if (document.querySelectorAll("[id*='card'] img").length) {
  document.querySelectorAll("[id*='card'] img").forEach(elem => elem.style.display = 'none')
}
