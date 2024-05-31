export type MaterialCategoryDataType = {
  id: number,
  name: string
  value: string
}

export type ProductColorCategoryDataType = {
  name: string
  color: MaterialCategoryDataType[]
}

export type ProductSizeCategoryDataType = {
  name: string
  size: MaterialCategoryDataType[]
}
