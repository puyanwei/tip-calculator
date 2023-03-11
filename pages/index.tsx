import type { NextPage } from "next"
import Image from "next/image"
import { Calculator } from "../components/Calculator"

const Home: NextPage = () => {
  return (
    <div className="bg-gray-cyan-100 text-gray-cyan-500 font-semibold">
      <Image
        className="mx-auto py-8"
        src="/assets/logo.svg"
        width="100"
        height="100"
        alt="Tip Splitter logo"
      />
      <h1 className="hidden">Tip Splitter</h1>
      <Calculator />
    </div>
  )
}

export default Home
