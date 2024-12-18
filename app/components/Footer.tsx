"use client"
import React from "react"
import SVGUser from "./svgs/SvgUser"
import SvgGitBranch from "./svgs/SvgGitBranch"
import { useGlobal } from "@/context/GlobalProvider"
import { cn } from "@/util/util"

const Footer = () => {
  const { state } = useGlobal()
  return (
    <>
      <SVGUser width="20" height="20" className="text-neonGreen" />
      <p className="flex items-center truncate pr-4">
        <span
          className={`text-neonGreen qa__user__name truncate ${cn(state.userName !== "" ? "animate-blinkOnTime" : "")}`}
        >
          {state.userName}
        </span>
      </p>
      <SvgGitBranch width="20" height="20" className="text-neonOrange" />
      <p className="flex flex-1 items-center truncate">
        <span
          className={`text-neonOrange choice__branch__name truncate ${cn(state.branchName !== "" ? "animate-blinkOnTime" : "")}`}
        >
          {state.branchName}
        </span>
      </p>
    </>
  )
}

export default Footer
