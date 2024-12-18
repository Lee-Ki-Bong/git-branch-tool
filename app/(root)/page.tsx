"use client"
import { useGlobal } from "@/context/GlobalProvider"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { cn } from "@/util/util"
import Snowfall from "../components/effects/Snowfall"

export default function Home() {
  const { state } = useGlobal()
  const getStatusClassName = () => {
    if (!state.userName) {
      return "text-neonOrange" // 유저가 선택되지 않음
    }

    if (!state.branchName) {
      return "text-neonBlue" // 브랜치가 선택되지 않음
    }

    return "text-neonGreen" // 모든 상태가 준비됨
  }

  return (
    <>
      <Snowfall />
      <section className="root--container container flex flex-col gap-8">
        <div className="glass sub-padding flex max-xl:flex-col xl:gap-28">
          <Header />
        </div>

        <div className="glass sub-padding terminal flex-auto">
          <span className={` ${cn(getStatusClassName())}`}>
            {state.message}
          </span>
        </div>

        <div className="glass sub-padding svg--center flex flex-row gap-4">
          <Footer />
        </div>
      </section>
    </>
  )
}
