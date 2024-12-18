"use client"

import React, { createContext, useContext, useReducer } from "react"
import { ActionTypes } from "../content/global-context.content"

// 정보 정의
interface GlobalContextInterface {
  userName: string
  branchName: string
  branchList: string[]
  message: string
}

// 초기 상태 정의
const initialState: GlobalContextInterface = {
  userName: "",
  branchName: "",
  branchList: [],
  message: ""
}

// 액션 정의
type Action =
  | { type: typeof ActionTypes.SET_USER_NAME; payload: string }
  | { type: typeof ActionTypes.SET_BRANCH_NAME; payload: string }
  | { type: typeof ActionTypes.SET_MESSAGE; payload: string }

// GlobalContextValue 인터페이스
interface GlobalContextValue {
  state: GlobalContextInterface
  dispatch: React.Dispatch<Action>
}

// 유저에 따라 브랜치 리스트를 반환하는 함수 (예: API 요청)
const fetchBranches = (userName: string): string[] => {
  if (userName === "qatest01") return ["master", "develop", "feature/1"]
  if (userName === "qatest02") return ["main", "release", "hotfix"]
  return []
}

// 리듀서 함수
const globalReducer = (
  state: GlobalContextInterface,
  action: Action
): GlobalContextInterface => {
  switch (action.type) {
    case ActionTypes.SET_USER_NAME:
      const branchList = fetchBranches(action.payload)
      return {
        ...state,
        userName: action.payload,
        branchName: "", // 유저가 변경되면 브랜치 초기화
        branchList: branchList, // 유저에 따른 브랜치 리스트 갱신
        message: `Fetched ${branchList.length} branches for ${action.payload}.`
      }
    case ActionTypes.SET_BRANCH_NAME:
      return {
        ...state,
        branchName: action.payload,
        message: `Selected branch ${action.payload} for ${state.userName}.`
      }
    case ActionTypes.SET_MESSAGE:
      return { ...state, message: action.payload }
    default:
      throw new Error(`Unhandled action type: ${action}`)
  }
}

// Context 생성
const GlobalContext = createContext<GlobalContextValue | undefined>(undefined)

// 커스텀 훅 생성

export const useGlobal = (): GlobalContextValue => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error("useGlobal must be used within a GlobalProvider")
  }
  return context
}

// Provider 컴포넌트 생성
export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState)

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}
