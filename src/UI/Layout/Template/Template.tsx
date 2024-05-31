import { useCallback } from 'react'

import { Dropdown, Header, ShowCaseItem } from 'UI'
import { MenuDataType, ShowCaseDataType } from 'Types'
import site_data from 'json/site-data.json'

import T_Shirt_1 from 'Assets/images/t-shirt-1.png'
import T_Shirt_2 from 'Assets/images/t-shirt-2.png'
import T_Shirt_3 from 'Assets/images/t-shirt-3.png'
import Cup_1 from 'Assets/images/cup-1.png'
import Cup_2 from 'Assets/images/cup-2.png'
import Cup_3 from 'Assets/images/cup-3.png'

interface TemplateProp {
  children?: React.ReactNode
}

export const Template: React.FC<TemplateProp> = ({ children }) => {
  const getImage = useCallback((imageLink: string) => {
    switch (imageLink as string) {
      case 'T_Shirt_1':
        return T_Shirt_1
      case 'T_Shirt_2':
        return T_Shirt_2
      case 'T_Shirt_3':
        return T_Shirt_3
      case 'Cup_1':
        return Cup_1
      case 'Cup_2':
        return Cup_2
      default:
        return Cup_3
    }
  }, [])
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="px-6">
        <div className="flex-1 max-w-screen-xl w-full py-5 mx-auto">
          {/* Menu Section */}
          <div className="flex md:flex-row flex-col items-center justify-center gap-10 py-6">
            {site_data.landingPage.menuData.map((item: MenuDataType, index: number) => {
              return <Dropdown key={index} list={item.list} name={item.title} />
            })}
          </div>
          {children}

          {/* ShowCase Section */}
          <div className="mt-16 grid lg:grid-cols-3 sm:grid-cols-2 gap-10 py-6 md:py-12">
            {site_data.landingPage.showcaseData.map((item: ShowCaseDataType, index: number) => {
              return (
                <ShowCaseItem key={index} imageLink={getImage(item.imageLink)} name={item.name} />
              )
            })}
          </div>

          {/* Text Block Section*/}
          <div className="py-6 md:py-12">
            <div className="container mx-auto">
              <div className="flex">
                <div className="text-center md:w-10/12 xl:w-8/12 mx-auto">
                  <h1 className="mb-4 text-4xl font-medium">{site_data.landingPage.about.title}</h1>
                  <p className="mb-4 text-xl">{site_data.landingPage.about.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
