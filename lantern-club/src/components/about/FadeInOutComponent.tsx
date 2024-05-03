// FadeInOutCompoentn.tsx
import React, { ReactNode } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FadeInOutComponent = ({ children }: { children: ReactNode }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // Set to true if you want the animation to occur only the first time the component comes into view
    threshold: 0.01, // Adjust based on when you want the animation to trigger
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.75 },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      transition={{ duration: 0.38 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOutComponent;
