import { useEffect, useRef, useState } from 'react'
import { MenuListDataType } from 'Types'
import { Button } from '../Button'

interface DropdownProps {
  name: string
  list: MenuListDataType[]
}

export const Dropdown: React.FC<DropdownProps> = ({ list, name }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative inline-block select-none" ref={dropdownRef}>
      <Button
        className="border-2 border-solid border-indigo-600 rounded py-2 px-3 text-xl text-indigo-600 
                hover:bg-indigo-600 hover:text-white transition-color duration-300"
        onClick={() => setShowMenu(!showMenu)}
      >
        {name}
      </Button>
      {showMenu && (
        <div className="absolute menu-shadow bg-gray-200 w-full rounded-lg text-center z-10 overflow-hidden">
          {list.map((item, index) => {
            return (
              <div key={index} className="text-base hover:bg-indigo-600 p-3 hover:text-white">
                {item.name}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
