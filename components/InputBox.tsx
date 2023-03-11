import { ChangeEvent } from "react"
import { DollarIcon } from "./icons/DollarIcon"
import { PersonIcon } from "./icons/PersonIcon"

interface InputBoxProps {
  className?: string
  placeholder?: string
  value?: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  type: string
  icon?: Icon
  min?: number
  step?: number
}

type Icon = keyof typeof iconMap

const iconMap = {
  dollar: <DollarIcon />,
  people: <PersonIcon />,
}

export function InputBox({
  className,
  value,
  placeholder,
  type,
  icon,
  onChange,
  min,
  step,
}: InputBoxProps) {
  const placeholderTextAlignment = placeholder === "Custom" ? "text-center" : "text-right"
  const placeholderTextColor = value === 0 ? "placeholder:text-dark-cyan opacity-50" : ""
  const buttonStyles = `rounded p-2 bg-gray-cyan-50 border-2 border-cyan text-dark-cyan text-gray placeholder:text-dark-cyan placeholder:opacity-50 w-full ${placeholderTextAlignment} ${placeholderTextColor} ${className}`

  return (
    <div className="relative">
      <input
        className={buttonStyles}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        min={min}
        step={step}
      />
      {icon && <span className="absolute bottom-4 left-5">{iconMap[icon]}</span>}
    </div>
  )
}
