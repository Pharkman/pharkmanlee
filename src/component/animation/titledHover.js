import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './titledCardHover.css';

const TiltedCardHover = ({ imageSrc, texts = ['01 TOKYO', '02 AN', '03 LO'] }) => {
  const cardRef = useRef(null);
  const cursorRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      if (card && cursor) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
      }
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="card-container" ref={cardRef}>
      <motion.div
        className="card-image"
        style={{ backgroundImage: `url(${imageSrc})` }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {texts.map((text, index) => (
          <motion.div
            key={index}
            className="hover-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            {text}
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        ref={cursorRef}
        className="custom-cursor"
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
};

export default TiltedCardHover;