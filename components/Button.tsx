import { ReactNode } from "react"

interface ButtonProps {
  children: string
  onClick: () => void
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="bg-dark-cyan hover:bg-gray-cyan-100 hover:text-dark-cyan text-white font-bold py-2 px-4 rounded w-full"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
