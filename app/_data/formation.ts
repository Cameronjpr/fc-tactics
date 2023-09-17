
export type Formation = {
  name: string
  positions: Array<string>
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
]
