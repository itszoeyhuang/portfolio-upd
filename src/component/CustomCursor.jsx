import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor({ containerRef }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoverText, setHoverText] = useState('');
  const [active, setActive] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMouseMove = e => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = e => {
      const msg = e.target.dataset.cursorMessage;
      if (msg) {
        setHoverText(msg);
        setActive(true);
      }
    };

    const onMouseOut = e => {
      if (e.target.dataset.cursorMessage) {
        setActive(false);
      }
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseover', onMouseOver);
    container.addEventListener('mouseout', onMouseOut);

    return () => {
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseover', onMouseOver);
      container.removeEventListener('mouseout', onMouseOut);
    };
  }, [containerRef]);

  return (
    <motion.div
      className="custom-cursor"
      initial={{ opacity: 0 }}
      animate={{
        left: position.x,
        top: position.y,
        opacity: active ? 1 : 0
      }}
      transition={{ type: 'spring', mass: 0.4 }}
      style={{
        position: 'fixed',
        transform: 'translate(-50%, -120%)',
        pointerEvents: 'none',
        whiteSpace: 'nowrap'
      }}
    >
      {hoverText}
    </motion.div>
  );
}