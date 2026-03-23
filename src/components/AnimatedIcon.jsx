import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.2, type: 'spring', duration: 1.5, bounce: 0 },
      opacity: { delay: i * 0.2, duration: 0.01 },
    },
  }),
}

export function CircuitIcon({ className = '' }) {
  return (
    <motion.svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.path
        d="M8 24H16L20 16L28 32L32 24H40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
        custom={0}
      />
      <motion.circle cx="8" cy="24" r="3" stroke="currentColor" strokeWidth="2" variants={draw} custom={1} />
      <motion.circle cx="40" cy="24" r="3" stroke="currentColor" strokeWidth="2" variants={draw} custom={2} />
    </motion.svg>
  )
}

export function LightBulbIcon({ className = '' }) {
  return (
    <motion.svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.path
        d="M24 6C17.373 6 12 11.373 12 18C12 22.418 14.613 26.198 18.375 28.125V33C18.375 34.243 19.382 35.25 20.625 35.25H27.375C28.618 35.25 29.625 34.243 29.625 33V28.125C33.387 26.198 36 22.418 36 18C36 11.373 30.627 6 24 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
        custom={0}
      />
      <motion.path d="M20 39H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" variants={draw} custom={1} />
      <motion.path d="M21 42H27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" variants={draw} custom={2} />
    </motion.svg>
  )
}

export function ShieldIcon({ className = '' }) {
  return (
    <motion.svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.path
        d="M24 4L6 14V24C6 35.1 14.04 45.36 24 48C33.96 45.36 42 35.1 42 24V14L24 4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
        custom={0}
      />
      <motion.path
        d="M17 24L22 29L31 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
        custom={1}
      />
    </motion.svg>
  )
}

export function WrenchIcon({ className = '' }) {
  return (
    <motion.svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.path
        d="M28.5 7.5C24.36 7.5 21 10.86 21 15C21 15.84 21.15 16.65 21.42 17.4L8 30.84L17.16 40L30.6 26.58C31.35 26.85 32.16 27 33 27C37.14 27 40.5 23.64 40.5 19.5C40.5 18.21 40.17 17.01 39.6 15.93L34.5 21L27 13.5L32.07 8.4C30.99 7.83 29.79 7.5 28.5 7.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
        custom={0}
      />
    </motion.svg>
  )
}

export function PanelIcon({ className = '' }) {
  return (
    <motion.svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.rect
        x="8"
        y="6"
        width="32"
        height="36"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
        variants={draw}
        custom={0}
      />
      <motion.path d="M8 16H40" stroke="currentColor" strokeWidth="2" variants={draw} custom={1} />
      <motion.circle cx="18" cy="26" r="3" stroke="currentColor" strokeWidth="2" variants={draw} custom={2} />
      <motion.circle cx="30" cy="26" r="3" stroke="currentColor" strokeWidth="2" variants={draw} custom={3} />
      <motion.path d="M18 33V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" variants={draw} custom={4} />
      <motion.path d="M30 33V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" variants={draw} custom={4} />
    </motion.svg>
  )
}
