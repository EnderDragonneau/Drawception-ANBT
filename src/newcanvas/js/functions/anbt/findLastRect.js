import { anbt } from '../../anbt'

export function findLastRect(endPosition) {
  if (!endPosition) endPosition = anbt.svg.childNodes.length - 1
  for (let i = endPosition; i > 0; i--) {
    const element = anbt.svg.childNodes[i]
    if (element.nodeName === 'rect') return i
  }
  return 0
}
