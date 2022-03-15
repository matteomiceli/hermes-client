import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function CheckMark({animate}) {
  return (
    <AnimatePresence exitBeforeEnter>
    <motion.div initial={{opacity: 0}} animate={animate} className='check-mark'>
        <svg width="63" height="47" viewBox="0 0 63 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.0193 47C22.4807 46.9983 21.9483 46.8865 21.4551 46.6717C20.9619 46.4569 20.5184 46.1436 20.1522 45.7512L1.0646 25.5758C0.351075 24.8203 -0.0311557 23.814 0.00198894 22.7785C0.0351336 21.7429 0.480939 20.7629 1.24133 20.0539C2.00173 19.3449 3.01442 18.9651 4.05664 18.9981C5.09885 19.031 6.08521 19.474 6.79873 20.2295L22.98 37.3611L56.0102 1.45894C56.3454 1.0442 56.7624 0.701927 57.2356 0.453144C57.7087 0.204361 58.2281 0.0543187 58.7618 0.0122338C59.2954 -0.0298511 59.8321 0.0369099 60.3388 0.208415C60.8456 0.379921 61.3117 0.652549 61.7085 1.00956C62.1054 1.36657 62.4246 1.80042 62.6465 2.28446C62.8685 2.76851 62.9885 3.29253 62.9992 3.82434C63.0099 4.35614 62.9111 4.88451 62.7088 5.37699C62.5065 5.86947 62.2051 6.31566 61.8229 6.68816L25.9256 45.7122C25.5629 46.1116 25.1209 46.4322 24.6275 46.6538C24.1342 46.8755 23.6 46.9933 23.0586 47H23.0193Z" fill="#2DD220"/>
        </svg>
    </motion.div>
    </AnimatePresence>
  )
}

export default CheckMark