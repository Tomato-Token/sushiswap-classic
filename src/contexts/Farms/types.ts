import { Contract } from 'web3-eth-contract'


export enum FarmType {
  STAKE = 'STAKE',
  LP = 'LP'
}

export interface Farm {
  pid: number
  name: string
  moreName: string
  lpToken: string
  lpTokenAddress: string
  lpContract: Contract
  tokenAddress: string
  earnToken: string
  earnTokenAddress: string
  icon: React.ReactNode
  id: string
  tokenSymbol: string
  highlight?: boolean
  type: FarmType
  active: boolean
  lpUrl: string
}

export interface FarmsContext {
  farms: Farm[]
  unharvested: number
}
