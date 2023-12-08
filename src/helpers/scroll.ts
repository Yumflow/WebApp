// @ts-nocheck

export function scrollToElementById(elementId: string, scrollBehavior: ScrollBehavior = 'smooth') {
  const element = document.getElementById(elementId)

  if (element) {
    element.scrollIntoView({ behavior: scrollBehavior })
  }
}

export function scrollToElementInHorizontalById(elementId: string, scrollBehavior: ScrollBehavior = 'smooth') {
  const el = document.getElementById(elementId)

  if (!el) {
    return
  }

  const elRight = el.offsetLeft + el.offsetWidth
  const elLeft = el.offsetLeft

  const elParentRight = el.parentNode.offsetLeft + el.parentNode.offsetWidth
  const elParentLeft = el.parentNode.offsetLeft

  // check if right side of the element is not in view
  if (elRight > elParentRight + el.parentNode.scrollLeft) {
    el.parentNode.scrollBy({
      left: elRight - elParentRight,
      behavior: scrollBehavior,
    })
  }

  // check if left side of the element is not in view
  else if (elLeft < elParentLeft + el.parentNode.scrollLeft) {
    el.parentNode.scrollLeft = elLeft - elParentLeft
  }
}