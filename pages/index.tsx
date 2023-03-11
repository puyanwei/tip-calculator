import type { NextPage } from "next"
import { Calculator } from "../components/Calculator"

const Home: NextPage = () => {
  return (
    <div className="bg-gray-cyan-100 text-dark-cyan">
      <h1>Splitter Title</h1>
      <Calculator />
    </div>
  )
}

export default Home
