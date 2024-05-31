import { CategoryPanel, Checkbox } from 'UI'
import { MaterialCategoryDataType } from 'Types'
import product_category_data from 'json/productCategoryData.json'

export const CupSection: React.FC = () => {
  return (
    <div className="mt-10 flex justify-center">
      <CategoryPanel name={product_category_data.cup.color[0].name}>
        <div className="flex flex-wrap gap-4">
          {product_category_data.cup.color[0].category.map(
            (item: MaterialCategoryDataType, index: number) => {
              return <Checkbox key={index} name={item.name} />
            }
          )}
        </div>
      </CategoryPanel>
    </div>
  )
}
