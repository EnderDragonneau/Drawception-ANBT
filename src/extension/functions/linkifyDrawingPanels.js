import { scrambleID } from './scrambleID'

export function linkifyDrawingPanels(img) {
  if (img.parentNode.nodeName !== 'A') {
    if (
      img.src.match(/\/images\/panels\//) ||
      img.src.match(/\/pub\/panels\//)
    ) {
      img.outerHTML = `<a href="/game/${
        img.src.match(/\/([^-]+)-\d+.png/)[1]
      }/-/">${img.outerHTML}</a>`
    }

    if (img.src.match(/\/drawings\//)) {
      img.outerHTML = `<a href="/panel/drawing/${
        img.src.match(/(\w+).png$/)[1]
      }/-/">${img.outerHTML}</a>`
    }

    if (img.src.match(/\/panel\//)) {
      img.outerHTML = `<a href="${img.src}-/">${img.outerHTML}</a>`
    }

    if (img.src.match(/\/images\/games\//) || img.src.match(/\/pub\/games\//)) {
      img.outerHTML = `<a href="/game/${
        img.src.match(/\/([^/]+)\.png/)[1]
      }/-/">${img.outerHTML}</a>`
    }

    if (img.src.match(/\/display-panel.php?/)) {
      const newSrc = `/panel/drawing/${scrambleID(
        img.src.match(/x=(\d+)/)[1]
      )}/`
      img.setAttribute('src', newSrc)
      img.outerHTML = `<a href="${newSrc}-/">${img.outerHTML}</a>`
    }
  }
}
