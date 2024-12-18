"use client"

import React from "react"
import SVGUser from "./svgs/SvgUser"
import SearchSelect from "./SearchSelect"
import { userList } from "@/util/user-list"
import SvgGitBranch from "./svgs/SvgGitBranch"
import { useGlobal } from "@/context/GlobalProvider"
import { ActionTypes } from "@/content/global-context.content"

const Header = () => {
  const { state, dispatch } = useGlobal()

  const handleUserChange = (userName: string) => {
    dispatch({ type: ActionTypes.SET_USER_NAME, payload: userName })
  }

  const handleBranchChange = (branchName: string) => {
    dispatch({ type: ActionTypes.SET_BRANCH_NAME, payload: branchName })
  }

  const handleCheckOut = () => {
    if (!state.userName || !state.branchName) {
      dispatch({
        type: ActionTypes.SET_MESSAGE,
        payload: "Please select User and Branch."
      })
      return
    }
    alert(state.userName + " " + state.branchName + " 체크아웃")
  }

  return (
    <>
      <div className="svg--center">
        <SVGUser width="24" height="24" className="text-neonGreen" />
        <SearchSelect
          focusedReset={true}
          placeholder="Search User..."
          options={userList}
          onChange={(value) => handleUserChange(value)}
        />
      </div>
      <div className="svg--center flex-1">
        <SvgGitBranch width="24" height="24" className="text-neonOrange" />
        <SearchSelect
          initialQuery={state.branchName}
          placeholder="Search Branch..."
          options={state.branchList}
          onChange={(value) => handleBranchChange(value)}
        />
      </div>
      <button
        className="button-neon-normal ml-auto max-sm:w-full"
        onClick={() => handleCheckOut()}
      >
        Check Out
      </button>
    </>
  )
}

export default Header
