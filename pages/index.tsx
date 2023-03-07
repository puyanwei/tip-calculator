import type { NextPage } from "next"
import { TipCalculator } from "../components/TipCalculator"

const Home: NextPage = () => {
  return (
    <div className="p-4">
      <h1>Splitter Title</h1>
      <TipCalculator />
    </div>
  )
}

export default Home
