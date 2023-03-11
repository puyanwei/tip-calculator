import { DollarIcon } from "./icons/DollarIcon"
import { PersonIcon } from "./icons/PersonIcon"

interface InputBoxProps {
  placeholder?: string
  type: string
  icon?: Icon
}

type Icon = keyof typeof iconMap

const iconMap = {
  dollar: <DollarIcon />,
  person: <PersonIcon />,
}

export function InputBox({ placeholder, type, icon = "dollar" }: InputBoxProps) {
  const placeholderTextAlignment = placeholder === "Custom" ? "text-center" : "text-right"
  const placeholderTextColor = placeholder === "0" ? "placeholder:text-gray-300" : ""
  return (
    <input
      className={`rounded p-2 bg-gray-cyan-50 text-dark-cyan text-gray placeholder:text-dark-cyan ${placeholderTextAlignment} ${placeholderTextColor}`}
      type="number"
      placeholder={placeholder}
    />
  )
}
