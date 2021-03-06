import { anbt } from '../../anbt'
import { uploadToDrawception } from '../anbt/uploadToDrawception'
import { ID } from '../idSelector'
import { warnStrokesAfterPosition } from './warnStrokesAfterPosition'

export function exportToDrawception(event) {
  event.preventDefault()
  if (warnStrokesAfterPosition()) return
  ID('drawception').childNodes[0].nodeValue = 'Uploading...'
  ID('drawception').disabled = true
  uploadToDrawception(request => {
    ID('drawception').childNodes[0].nodeValue = 'Upload to Drawception'
    ID('drawceptionpopup').classList.add('show')
    ID('drawceptionpopuptitle').childNodes[0].nodeValue =
      'Drawception upload result'
    if (request && request.url) {
      anbt.unsaved = false
      ID('drawceptionurl').href = request.url
      ID('drawceptionurl').childNodes[0].nodeValue = 'Uploaded image'
      if (window.inForum) {
        window.frameElement.ownerDocument.getElementById(
          'input-comment'
        ).value += `![](${request.url})`
      }
    }
    ID('drawception').disabled = false
  })
}
