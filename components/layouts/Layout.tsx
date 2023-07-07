import Head from "next/head"
import { FC } from "react"
import { Navbar } from "../ui"
type Props={
  children: JSX.Element | JSX.Element[]
}
export const Layout:FC<Props> = ({children}) => {
  return (
    <div>
    <Head>

    </Head>
    <nav>
      <Navbar/>
    </nav>
    <main style={{padding:'20px 50px'}}>
      {children}
    </main>
    </div>
  )
}
