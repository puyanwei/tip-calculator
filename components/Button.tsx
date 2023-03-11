import { MouseEvent } from "react"

interface ButtonProps {
  children: string
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  theme?: ButtonTheme
}
type ButtonTheme = keyof typeof themeMap

const themeMap = {
  dark: "bg-dark-cyan hover:bg-gray-cyan-100 hover:text-dark-cyan text-white",
  light: "bg-cyan hover:bg-gray-cyan-100 hover:text-light-gray text-dark-cyan",
} as const

export function Button({ children, onClick, theme = "dark" }: ButtonProps) {
  const buttonTheme = themeMap[theme]
  return (
    <button className={`${buttonTheme} font-bold py-2 px-4 rounded w-full`} onClick={onClick}>
      {children}
    </button>
  )
}
