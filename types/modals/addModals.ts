export declare interface facility {
  name: string
  description: string
}

declare interface trainer {
  firstName: string
  lastName: string
  email: string
  phone: string
  profilePic?: string
}

declare interface member {
  creditName: string
  totalCredits: null
  description: string
  price: null
  period?: string
}

export interface memberDetails {
  modalTitle: string
  showTrainerModal: boolean
  details: member
}

export interface trainerDetails {
  modalTitle: string
  showTrainerModal: boolean
  details: trainer
}

export interface facilityDetail {
  modalTitle: string
  showFacilityModal: boolean
  details: facility
}
