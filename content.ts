import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://github.com/*"]
}

window.addEventListener("load", () => {
  moreLoadWorkflows()
})

function moreLoadWorkflows() {
  const element = document.querySelector(
    '[data-test-selector="workflows-show-more"]:not([aria-disabled="true"])'
  )
  if (element) {
    // XXX: 型に怒られる
    element.click()
  }
}

const observer = new MutationObserver(moreLoadWorkflows)
observer.observe(document.documentElement, { childList: true, subtree: true })
