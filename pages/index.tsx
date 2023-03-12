import type { NextPage } from "next"
import Image from "next/image"
import { Calculator } from "../containers/Calculator"

const Home: NextPage = () => {
  return (
    <div className=" text-gray-cyan-500 font-semibold min-h-screen lg:max-w-4xl lg:mx-auto">
      <Image
        className="mx-auto py-8 lg:pt-32"
        src="/assets/logo.svg"
        width="100"
        height="100"
        alt="Tip Splitter logo"
      />
      <h1 className="hidden">Tip Splitter</h1>
      <div className="lg:grid lg:place-items-center">
        <Calculator />
      </div>
    </div>
  )
}

export default Home
