interface CheckboxProps {
  name: string
}

export const Checkbox: React.FC<CheckboxProps> = ({ name }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id={name}
        className="w-5 h-5 border-1 border-gray-300 rounded-3 hover:cursor-pointer"
      />
      <label htmlFor={name} className="select-none text-xl">
        {name}
      </label>
    </div>
  )
}
