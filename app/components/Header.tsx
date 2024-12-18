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

  return (
    <>
      <div className="svg--center">
        <SVGUser width="20" height="20" className="text-neonGreen" />
        <SearchSelect
          focusedReset={true}
          placeholder="Search User..."
          options={userList}
          onChange={(value) => handleUserChange(value)}
        />
      </div>
      <div className="svg--center flex-1">
        <SvgGitBranch width="20" height="20" className="text-neonOrange" />
        <SearchSelect
          initialQuery={state.branchName}
          placeholder="Search Branch..."
          options={state.branchList}
          onChange={(value) => handleBranchChange(value)}
        />
      </div>
      <button className="button-neon-normal ml-auto max-sm:w-full">
        Check Out
      </button>
    </>
  )
}

export default Header
