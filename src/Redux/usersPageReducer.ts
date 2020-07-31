import { Dispatch } from "redux";
import { AppStateType } from "./store";
import { usersApi } from "../api/usersApi";

const SET_ERROR = 'usersPageReducer/SET_ERROR'
const SET_USERS = 'usersPageReducer/SET_USERS'
const SET_LOADING = 'usersPageReducer/SET_LOADING'


export type userType = {
  firstName: string
  lastName: string
  email: string
  _id: string
}

export type usersType = Array<userType>


const initialState = {
  users: [] as usersType,
  error: '',
  loading: false
}


export type InitialStateType = typeof initialState;

export const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.error
      }
    default: return state
  }
}

type ActionType = setUsersActionType | setErrorActionType | setLoadingType

type setUsersActionType = {
  type: typeof SET_USERS
  users: usersType
}

type setLoadingType = {
  type: typeof SET_LOADING
  loading: boolean
}

type setErrorActionType = {
  type: typeof SET_ERROR
  error: string
}

// ******* ActionCreator *******

const setUsersSuccess = (users: usersType): setUsersActionType => ({ type: SET_USERS, users: users })

const setLoading = (loading: boolean): setLoadingType => ({ type: SET_LOADING, loading: loading })

const setError = (error: string): setErrorActionType => ({ type: SET_ERROR, error: error })


// ******* ThunkCreator *******

export const setUsers = () => async (dispatch: Dispatch) => {
  dispatch(setLoading(true))
  try {
    let response = await usersApi.getUsers()
    if (response.data.success) {
      dispatch(setUsersSuccess(response.data.users))
    } else {
      dispatch(setError('Some ERROR'))
    }
  } catch (error) {
    dispatch(setError('Some ERROR'))
  }
  dispatch(setLoading(false))
}

export const addNewUserData = (firstName: string, lastName: string, email: string) => async (dispatch: Dispatch, getState: () => AppStateType) => {
  dispatch(setLoading(true))
  try {
    let response = await usersApi.setNewUser(firstName, lastName, email)
    if (response.data.success) {
      let response = await usersApi.getUsers()
      dispatch(setUsersSuccess(response.data.users))
    } else {
      dispatch(setError('Some ERROR'))
    }
  } catch (error) {
    dispatch(setError('Some ERROR'))
  }
  dispatch(setLoading(false))
}

export const setErrorMessage = (error: string) => (dispatch: Dispatch) => {
  dispatch(setError(error))
}
