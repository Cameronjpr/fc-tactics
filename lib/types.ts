export const defensiveStyles = [
  'Press after Possession Loss',
  'Constant Pressure',
  'Drop Back',
  'Balanced',
]

export type DefensiveStyle = "Press after Possession Loss" | "Constant Pressure" | "Drop Back" | "Balanced"

export const positionLocations = {
  GK: {
    x: 50,
    y: 90,
  },
  LWB: {
    x: 15,
    y: 65,
  },
  LB: {
    x: 15,
    y: 70,
  },
  LCB: {
    x: 35,
    y: 70,
  },
  CCB: {
    x: 50,
    y: 70,
  },
  RCB: {
    x: 65,
    y: 70,
  },
  RB: {
    x: 85,
    y: 70,
  },
  RWB: {
    x: 85,
    y: 65,
  },
  LDM: {
    x: 35,
    y: 60,
  },
  CDM: {
    x: 50,
    y: 60,
  },
  RDM: {
    x: 65,
    y: 60,
  },
  LM: {
    x: 15,
    y: 50,
  },
  LCM: {
    x: 40,
    y: 50,
  },
  CM: {
    x: 50,
    y: 50,
  },
  RCM: {
    x: 60,
    y: 50,
  },
  RM: {
    x: 85,
    y: 50,
  },
  LAM: {
    x: 25,
    y: 40,
  },
  CAM: {
    x: 50,
    y: 42,
  },
  RAM: {
    x: 75,
    y: 40,
  },
  LW: {
    x: 30,
    y: 30,
  },
  LF: {
    x: 40,
    y: 30,
  },
  CF: {
    x: 50,
    y: 30,
  },
  RF: {
    x: 60,
    y: 30,
  },
  RW: {
    x: 70,
    y: 30,
  },
  LS: {
    x: 40,
    y: 20,
  },
  ST: {
    x: 50,
    y: 20,
  },
  RS: {
    x: 60,
    y: 20,
  },
}
export type Position = keyof typeof positionLocations