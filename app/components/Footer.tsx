import React from "react"
import SVGUser from "./svgs/SvgUser"
import SvgGitBranch from "./svgs/SvgGitBranch"

const Footer = () => {
  return (
    <>
      <SVGUser width="20" height="20" className="text-neonGreen" />
      <p className="flex items-center truncate pr-4">
        <span className="text-neonGreen truncate">qatest01</span>
      </p>
      <SvgGitBranch width="20" height="20" className="text-neonOrange" />
      <p className="flex flex-1 items-center truncate">
        <span className="text-neonOrange truncate">
          feature/dhkehd2/git-branch-tool
        </span>
      </p>
    </>
  )
}

export default Footer
