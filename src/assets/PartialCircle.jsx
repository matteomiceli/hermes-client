import React from 'react'
import { motion } from 'framer-motion'

function PartialCircle({rotate = 0, style = {}, initial = {}, animate={}}) {
  return (
    <motion.div animate={animate} style={{...style, height: 38, width: 63}} initial={{rotate, ...initial}} className='partial-circle'>
        <svg width="63" height="38" viewBox="0 0 63 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M63 0C63 13.3043 58.7881 26.2671 50.9681 37.0305L0 0H63Z" fill="white"/>
        </svg>
    </motion.div>
  )
}

export default PartialCircle