export function popupClose(event) {
  event.preventDefault()
  event.currentTarget.parentElement.classList.remove('show')
}
