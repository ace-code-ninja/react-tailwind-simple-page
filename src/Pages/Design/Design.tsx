import { useCallback, useState } from 'react'
import className from 'classnames'

import { Button, Carousel, FeatureItem, Template } from 'UI'
import { FeatureDataType, MaterialCategoryDataType } from 'Types'
// import { CupSection, StickerSection, TShirtSection } from './Sections'
import site_data from 'json/site-data.json'

import T_Shirt_1 from 'Assets/images/t-shirt-1.png'
import T_Shirt_2 from 'Assets/images/t-shirt-2.png'
import T_Shirt_3 from 'Assets/images/t-shirt-3.png'
import Cup_1 from 'Assets/images/cup-1.png'
import Cup_2 from 'Assets/images/cup-2.png'
import Cup_3 from 'Assets/images/cup-3.png'

// Import Icon from react-icons package
import { HiCode } from 'react-icons/hi'
import { AiTwotoneThunderbolt } from 'react-icons/ai'
import { HiMiniWrenchScrewdriver } from 'react-icons/hi2'

export const Design: React.FC = () => {
  const [categoryIndex, setCategoryIndex] = useState<string>('1')
  // const renderCategorySection = () => {
  //   switch (categoryIndex) {
  //     case '1':
  //       return <TShirtSection />
  //     case '2':
  //       return <CupSection />
  //     case '3':
  //       return <StickerSection />
  //     default:
  //       return null
  //   }
  // }

  const getIcon = useCallback((iconName: string) => {
    switch (iconName as string) {
      case 'bolt':
        return AiTwotoneThunderbolt
      case 'code':
        return HiCode
      default:
        return HiMiniWrenchScrewdriver
    }
  }, [])

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
    <Template>
      {/* Carousel Section */}
      <div className="h-[500px] max-w-screen-xl">
        <Carousel>
          {site_data.designPage.carouselData.map((item, index) => {
            return (
              <div key={index} className="center-card">
                <img
                  key={index}
                  src={getImage(item.imageLink)}
                  alt={item.name}
                  className="w-full h-full"
                />
              </div>
            )
          })}
        </Carousel>
      </div>
      {/* Buy Block Section */}
      <div className="py-20">
        <div className="flex justify-center gap-5">
          {site_data.designPage.materialCategory.map(
            (item: MaterialCategoryDataType, index: number) => {
              return (
                <Button
                  key={index}
                  className={className(
                    'w-auto border-2 border-solid border-indigo-600 rounded py-2 px-3 text-xl text-indigo-600',
                    'hover:bg-indigo-600 hover:text-white transition-color duration-300',
                    item.value === categoryIndex && 'bg-indigo-600 text-white'
                  )}
                  onClick={() => setCategoryIndex(item.value)}
                >
                  {item.name}
                </Button>
              )
            }
          )}
        </div>
        {/* {renderCategorySection()} */}
      </div>
      {/* Text Block Section*/}
      <div className="py-6 md:py-12">
        <div className="container mx-auto">
          <div className="flex">
            <div className="text-center md:w-10/12 xl:w-8/12 mx-auto">
              <h1 className="mb-4 text-4xl font-medium">
                {site_data.designPage.designDescription.title}
              </h1>
              <p className="mb-4 text-xl">{site_data.designPage.designDescription.description}</p>
              <Button
                className="border-2 border-solid border-indigo-600 rounded py-2 px-12 text-xl text-indigo-600 
                    hover:bg-indigo-600 hover:text-white mt-4 transition-color duration-300"
              >
                {site_data.designPage.designDescription.button_name}
              </Button>
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:justify-between mt-12 gap-5">
            {site_data.designPage.designDescription.item.map(
              (item: FeatureDataType, index: number) => {
                return (
                  <FeatureItem
                    key={index}
                    title={item.title}
                    Icon={getIcon(item.icon_name)}
                    description={item.description}
                  />
                )
              }
            )}
          </div>
        </div>
      </div>
    </Template>
  )
}
