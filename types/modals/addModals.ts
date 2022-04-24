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
