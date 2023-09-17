import { Position } from "@/lib/types"

export type Formation = {
  name: string
  positions: Array<Position>
}

export const formations: Array<Formation> = [
  {
    name: '442',
    positions: [
      'GK',
      'LB',
      'LCB',
      'RCB',
      'RB',
      'LM',
      'LCM',
      'RCM',
      'RM',
      'LS',
      'RS',
    ],
  },
  {
    name: '433',
    positions: [
      'GK',
      'LB',
      'LCB',
      'RCB',
      'RB',
      'LCM',
      'CM',
      'RCM',
      'LW',
      'ST',
      'RW',
    ],
  },
  {
    name: '532',
    positions: [
      'GK',
      'LWB',
      'LCB',
      'CCB',
      'RCB',
      'RWB',
      'LCM',
      'RCM',
      'CAM',
      'LS',
      'RS',
    ],
  },
  {
    name: '352',
    positions: [
      'GK',
      'LCB',
      'CCB',
      'RCB',
      'LM',
      'LCM',
      'RCM',
      'RM',
      'CAM',
      'LS',
      'RS',
    ],
  },
]
