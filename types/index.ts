declare interface classDetail {
  name: string
  description: string
  capacity: number
  level: string
  classType: string
  singlePrice: boolean
  category: Array<string>
  facility: string
  trainers: Array<string>
}
export interface ClassState {
  classDetails: classDetail
  classCategories: Array<object>
  facilities: Array<object>
  trainers: Array<object>
  activeTab: String
}