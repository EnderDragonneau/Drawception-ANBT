import { ajax } from './ajax'
import { extractInfoFromHTML } from './extractInfoFromHTML'
import { handlePlayParameters } from './handlePlayParameters'

export function getParametersFromPlay() {
  const { inContest, friendGameId } = window
  const url = inContest
    ? '/contests/play/'
    : `/play/${friendGameId ? `${friendGameId}/` : ''}`
  try {
    if (location.pathname !== url) history.replaceState({}, null, url)
  } catch (e) {}
  // On Firefox, requesting "/play/" url would immediately return a cached error.
  // Firefox, WTF? So we use cache-busting here.
  ajax('GET', `${url}?${Date.now()}`, {
    load: response => {
      window.gameInfo = response
        ? extractInfoFromHTML(response)
        : {
            error: 'Server returned a blank response :('
          }
      handlePlayParameters()
    },
    error: response => {
      window.gameInfo = {
        error: `Server error: ${response.statusText}`
      }
      handlePlayParameters()
    }
  })
}
