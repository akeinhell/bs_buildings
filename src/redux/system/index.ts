import {createActions, FAIL, REQUEST, SUCCESS} from '../common'
import {saveUserInfo} from '../persist/index'
import {Reducer} from 'redux'

const defaultState = {} as SystemState

export const reducer: Reducer<SystemState> = (state = defaultState, action) => {
  const {type, payload} = action
  switch (type) {
    case ActionTypes.BOOT:
      return {
        ...state,
        boot: true
      }
    default:
      return state
  }
}

enum ActionTypes {
  BOOT    = 'boot',
  SESSION = 'session',
}

export function boot() {
  return {
    type: ActionTypes.BOOT
  }
}

const SESSION = createActions(ActionTypes.SESSION)

export function session() {
  return async (dispatch, getState) => {
    dispatch({type: SESSION[REQUEST]})
    try {
      const userInfo: any = await (async _ => {
        return {
          user: 1,
          name: 2
        }
      })()
      dispatch({type: SESSION[SUCCESS]})
      dispatch(saveUserInfo(userInfo))
    } catch (ex) {
      dispatch({type: SESSION[FAIL]})
    } finally {
      dispatch(boot())
    }
  }
}

export interface SystemState {
  boot: boolean
  reHydrated: boolean
}

