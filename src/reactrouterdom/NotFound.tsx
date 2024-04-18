import React from 'react';
import { Link } from 'react-router-dom';
import notfound from './Notfound.png';
import "../AssCss/notfound.css";
import { motion } from 'framer-motion';


const NotFound: React.FC = () => {
  return (
    <>
        <img className='img2' src={notfound} alt="" />  
      <motion.div initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }} ><Link className='buttonnf' to="/home">กลับไปยังหน้าหลัก</Link></motion.div>

    </>
  );
};

export default NotFound;
