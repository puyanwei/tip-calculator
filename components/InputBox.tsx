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
  people: <PersonIcon />,
}

export function InputBox({ placeholder, type, icon }: InputBoxProps) {
  const placeholderTextAlignment = placeholder === "Custom" ? "text-center" : "text-right"
  const placeholderTextColor = placeholder === "0" ? "placeholder:text-dark-cyan" : ""
  return (
    <div className="relative">
      <input
        className={`rounded p-2 bg-gray-cyan-100 text-dark-cyan text-gray placeholder:text-dark-cyan placeholder:opacity-50 w-full ${placeholderTextAlignment} ${placeholderTextColor}`}
        type="number"
        placeholder={placeholder}
      />
      {icon && <span className="absolute bottom-3 left-5">{iconMap[icon]}</span>}
    </div>
  )
}
