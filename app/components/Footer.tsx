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
      <div className="svg--center">
        <SVGUser width="24" height="24" className="text-neonGreen" />
        <p className="flex items-center truncate pr-4">
          <span
            className={`qa__user__name truncate text-neonGreen ${cn(state.userName !== "" ? "animate-blinkOnTime" : "")}`}
          >
            {state.userName}
          </span>
        </p>
      </div>
      <div className="svg--center">
        <SvgGitBranch width="24" height="24" className="text-neonOrange" />
        <p className="flex flex-1 items-center truncate">
          <span
            className={`choice__branch__name truncate text-neonOrange ${cn(state.branchName !== "" ? "animate-blinkOnTime" : "")}`}
          >
            {state.branchName}
          </span>
        </p>
      </div>
    </>
  )
}

export default Footer
