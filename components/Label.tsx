interface LabelProps {
  children: string
}

export function Label({ children }: LabelProps) {
  return <label className="my-2 text-base">{children}</label>
}
