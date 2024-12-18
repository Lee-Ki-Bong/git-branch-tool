"use client"

import React from "react"
import SVGUser from "./svgs/SvgUser"
import SearchSelect from "./SearchSelect"
import { userList } from "@/util/user-list"
import SvgGitBranch from "./svgs/SvgGitBranch"

const Header = () => {
  return (
    <>
      <div className="svg--center">
        <SVGUser width="20" height="20" className="text-neonGreen" />
        <SearchSelect
          placeholder="Search User..."
          options={userList}
          onChange={(value) => console.log(value)}
        />
      </div>
      <div className="svg--center flex-1">
        <SvgGitBranch width="20" height="20" className="text-neonOrange" />
        <SearchSelect
          placeholder="Search Branch..."
          options={[
            "apple",
            "banana",
            "orange",
            "grapeasdfasdfasdfasdfasdfasdfasdfasdfsadfasdfasdfdasdasdasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          ]}
          onChange={(value) => console.log(value)}
        />
      </div>
      <button className="button-neon-normal ml-auto max-sm:w-full">
        Check Out
      </button>
    </>
  )
}

export default Header
