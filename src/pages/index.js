import React from "react"
import Header from "../components/header"
import Content from "../components/content"

import { Link } from "gatsby"


export default function Home() {
  return <div>
    <Header />
    <Content />

    <Link to="/about/">About</Link>


  </div>
}
