import { useNavigate } from 'react-router-dom'

import { URLS } from 'Lib'
import { Button } from 'UI/Components'

export const Header: React.FC = () => {
  const navigate = useNavigate()

  return (
    <header>
      <nav className="relative border-gray-200 px-6 py-2.5 bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-2.5">
          <Button onClick={() => navigate(URLS.HOME)} className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Self Design"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              LOGO
            </span>
          </Button>
        </div>
      </nav>
    </header>
  )
}
