/* eslint-disable camelcase */
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
  images: Array<string>
}

// declare interface day {
//   SUN: string
//   MON: string
//   TUES: string
//   WED: string
//   THURS: string
//   FRI: string
//   SAT: string
// }

export interface IClassState {
  classDetails: classDetail
  classCategories: Array<object>
  facilities: Array<object>
  trainers: Array<object>
  activeTab: string
  queryParams: object
}

export interface IUser {
  _id: string
  name: string
  first_name: string
  last_name: string
  email: string
  profile_pic: string
  has_relative: boolean
  role: string
  type: string
  classes: Array<object>
  classNumber: number
  lastActive: string
}

export interface IErrorObject {
  response: {
    data: object
  }
}
