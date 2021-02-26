import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const ContactUS = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: '#fff' }}
    >
      <h1>Our Contact</h1>
    </motion.div>
  );
};

export default ContactUS;
