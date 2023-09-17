import { Position, positionLocations } from '@/lib/types'
import { Formation } from './_data/formation'
import { m } from 'framer-motion'

export function Pitch({ formation }: { formation: Formation }) {
  return (
    <m.div
      className="relative bg-green-700 w-64 h-96 flex self-center rounded-lg row-span-3"
      transition={{
        ease: 'linear',
        duration: 2,
        x: { duration: 1 },
      }}
    >
      {formation.positions.map((position) => (
        <PlayerDot key={position} position={position} />
      ))}
    </m.div>
  )
}

type PlayerDotProps = {
  position: Position
  teamHeight?: number
  teamWidth?: number
}

function PlayerDot(props: PlayerDotProps) {
  const { position } = props
  const { x: xPercentage, y: yPercentage } = positionLocations[position]

  return (
    <button
      style={{
        left: `${xPercentage - 2.25}%`,
        top: `${yPercentage - 2.25}%`,
      }}
      className="absolute bg-white rounded-full w-6 h-6 hover:bg-slate-300 hover:scale-125"
    ></button>
  )
}
