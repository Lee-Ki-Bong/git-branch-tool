import SvgGitBranch from "./components/svgs/SvgGitBranch"
import SVGUser from "./components/svgs/SvgUser"

export default function Home() {
  return (
    <section className="root--container container flex flex-col gap-8">
      <div className="glass sub-padding">
        <button className="button-neon-normal ml-auto">Check Out</button>
      </div>
      <div className="glass sub-padding flex-auto"></div>
      <div className="glass sub-padding user--info flex flex-row gap-4">
        <SVGUser width="16" height="16" className="text-neonGreen" />
        <p className="flex items-center truncate pr-4">
          <span className="truncate">qatest01</span>
        </p>
        <SvgGitBranch width="16" height="16" className="text-neonOrange" />
        <p className="flex flex-1 items-center truncate">
          <span className="truncate">feature/dhkehd2/git-branch-tool</span>
        </p>
      </div>
    </section>
  )
}
