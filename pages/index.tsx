import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-white">White</h1>
      <h1 className="text-3xl font-bold text-gray-cyan-50">Very Light Grayish Cyan</h1>
      <h1 className="text-3xl font-bold text-gray-cyan-100">Light Grayish Cyan</h1>
      <h1 className="text-3xl font-bold text-gray-cyan-300">Grayish Cyan</h1>
      <h1 className="text-3xl font-bold text-gray-cyan-500">Dark Grayish Cyan</h1>
      <h1 className="text-3xl font-bold text-dark-cyan">Very Dark Cyan</h1>
      <h1 className="text-3xl font-bold text-cyan">Cyan</h1>
    </div>
  )
}

export default Home
