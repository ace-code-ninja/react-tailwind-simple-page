import { CategoryPanel, Checkbox } from 'UI'
import { MaterialCategoryDataType } from 'Types'
import product_category_data from 'json/productCategoryData.json'

export const TShirtSection: React.FC = () => {
  return (
    <div className="mt-10 flex md:flex-row flex-col items-center justify-center gap-5">
      <CategoryPanel name={product_category_data.t_shirt.size[0].name}>
        <div className="flex flex-wrap gap-4">
          {product_category_data.t_shirt.size[0].category.map(
            (item: MaterialCategoryDataType, index: number) => {
              return <Checkbox key={index} name={item.name} />
            }
          )}
        </div>
      </CategoryPanel>
      <CategoryPanel name={product_category_data.t_shirt.color[0].name}>
        <div className="flex flex-wrap gap-4">
          {product_category_data.t_shirt.color[0].category.map(
            (item: MaterialCategoryDataType, index: number) => {
              return <Checkbox key={index} name={item.name} />
            }
          )}
        </div>
      </CategoryPanel>
    </div>
  )
}
