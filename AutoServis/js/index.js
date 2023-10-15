
const navClassName = "nav",
  navLinkClassName = "nav-link",
  navLinkActiveClassName = "nav-link-active",
  sectionClassName = "section",
  navNode = document.querySelector(".nav"),
  navLinkNodes = document.querySelectorAll(".nav-link"),
  navActiveLinkNode = document.querySelector(".nav-link-active"),
  sectionNodes = document.querySelectorAll(".section")


let scrollAnimationId,
  indexActiveLink = 0,
  currentScroll = window.scrollY

function changeNavActiveLink(n) {
  for (let n = 0; n < navLinkNodes.length; n++)
    navLinkNodes[n].classList.remove("nav-link-active")
  n.classList.add("nav-link-active")
}
function setActiveLinkByScroll() {
  var n = Array.from(sectionNodes).map((n) => n.offsetTop)
  let e = 0
  for (let t = 0; t < n.length; t++) window.scrollY >= n[t] && (e = t)
  indexActiveLink !== e &&
    changeNavActiveLink(navLinkNodes[(indexActiveLink = e)])
}

function startAnimationScroll(n) {
  var e = n - currentScroll;
  (currentScroll += 0.15 * e),
    window.scrollTo(0, currentScroll),
    1 < Math.abs(e)
      ? (scrollAnimationId = window.requestAnimationFrame(() =>
          startAnimationScroll(n)
        ))
      : (window.scrollTo(0, n), stopAnimationScroll())
}

function stopAnimationScroll() {
  window.cancelAnimationFrame(scrollAnimationId), (scrollAnimationId = void 0)
}
changeNavActiveLink(navLinkNodes[indexActiveLink]),
  navNode.addEventListener("click", (n) => {
    n.preventDefault()
    const e = n.target.closest("a")
    e &&
      (stopAnimationScroll(),
      changeNavActiveLink(e),
      (currentScroll = window.scrollY),
      (n = e.getAttribute("href").substring(1)),
      startAnimationScroll(document.getElementById(n).offsetTop))
  }),
  window.addEventListener("scroll", () => {
    scrollAnimationId || setActiveLinkByScroll()
  })
