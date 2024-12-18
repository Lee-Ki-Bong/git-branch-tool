"use client"
import React from "react"
import SVGUser from "./svgs/SvgUser"
import SvgGitBranch from "./svgs/SvgGitBranch"
import { useGlobal } from "@/context/GlobalProvider"

const Footer = () => {
  const { state } = useGlobal()
  return (
    <>
      <SVGUser width="20" height="20" className="text-neonGreen" />
      <p className="flex items-center truncate pr-4">
        <span className="text-neonGreen text-shadow-neon-green qa__user__name truncate">
          {state.userName}
        </span>
      </p>
      <SvgGitBranch width="20" height="20" className="text-neonOrange" />
      <p className="flex flex-1 items-center truncate">
        <span className="text-neonOrange text-shadow-neon-orange choice__branch__name truncate">
          {state.branchName}
        </span>
      </p>
    </>
  )
}

export default Footer
