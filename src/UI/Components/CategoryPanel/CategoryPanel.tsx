interface CategoryPanelPros {
  name: string
  children: React.ReactNode
}

export const CategoryPanel: React.FC<CategoryPanelPros> = ({ children, name }) => {
  return (
    <div className="relative border-gray-500 border-2 rounded-lg p-5 w-80 flex justify-center items-center gap-3">
      <div className="absolute -top-[14px] bg-white">{name} Category</div>
      {children}
    </div>
  )
}
