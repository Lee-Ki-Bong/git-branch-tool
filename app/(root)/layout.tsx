import { GlobalProvider } from "@/context/GlobalProvider"
import React from "react"

const ContextLayout = ({ children }: { children: React.ReactNode }) => {
  return <GlobalProvider>{children}</GlobalProvider>
}

export default ContextLayout
