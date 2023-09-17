import { Position, positionLocations } from '@/lib/types'
import { Formation } from './_data/formation'
import { m, motion } from 'framer-motion'

export function Pitch({ formation }: { formation: Formation }) {
  return (
    <motion.div
      className="relative bg-green-700 w-64 h-96 flex self-center rounded-lg row-span-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      layoutId="pitch"
    >
      {formation.positions.map((position) => (
        <PlayerDot key={position} position={position} />
      ))}
    </motion.div>
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
    <motion.button
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        left: `${xPercentage - 4.25}%`,
        top: `${yPercentage - 4.25}%`,
      }}
      className="absolute bg-white rounded-full w-6 h-6 hover:bg-slate-300 hover:scale-125"
    ></motion.button>
  )
}
