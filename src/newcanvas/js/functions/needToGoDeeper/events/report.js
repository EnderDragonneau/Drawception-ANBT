import { ID } from '../../idSelector'
import { ajax } from '../ajax'
import { getParametersFromPlay } from '../getParametersFromPlay'

export function report() {
  if (!confirm('Report this panel?')) return
  ajax('POST', '/play/flag.json', {
    obj: {
      game_token: window.gameInfo.gameId
    },
    load: () => {
      ID('report').disabled = false
      getParametersFromPlay()
    }
  })
}


