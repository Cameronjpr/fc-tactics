import { Formation, formations } from './_data/formation'

export function Pitch({ formation }: { formation: Formation }) {
  return (
    <div className="relative bg-green-700 w-64 h-96">
      {formation.positions.map((position) => (
        <PlayerDot
          key={position}
          position={position}
          // teamHeight={formation.height}
          // teamWidth={formation.width}
        />
      ))}
    </div>
  )
}

type PlayerDotProps = {
  position: 'GK' | 'LB'
  teamHeight?: number
  teamWidth?: number
}

function PlayerDot(props: PlayerDotProps) {
  const { position } = props
  const { x: xPercentage, y: yPercentage } = positionLocations[position]

  return (
    <div
      style={{
        left: `${xPercentage - 2.25}%`,
        top: `${yPercentage - 2.25}%`,
      }}
      className={`absolute bg-white rounded-full w-4 h-4`}
    ></div>
  )
}

const positionLocations = {
  GK: {
    x: 50,
    y: 90,
  },
  LB: {
    x: 15,
    y: 80,
  },
  LCB: {
    x: 35,
    y: 80,
  },
  CCB: {
    x: 50,
    y: 80,
  },
  RCB: {
    x: 65,
    y: 80,
  },
  RB: {
    x: 85,
    y: 80,
  },
  LWB: {
    x: 15,
    y: 70,
  },
  RWB: {
    x: 85,
    y: 70,
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
    x: 30,
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
    x: 70,
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
