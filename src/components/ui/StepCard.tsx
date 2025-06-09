import type { FC } from 'react';
import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

interface StepCardProps extends MotionProps {
  number: number;
  title: string;
  description: string;
  preview?: React.ReactNode;
  className?: string;
}

const StepCard: FC<StepCardProps> = ({
  number,
  title,
  description,
  preview,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: number * 0.1 }}
      className={`relative bg-white rounded-xl shadow-lg p-6 ${className}`}
      {...props}
    >
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      
      <h3 className="text-xl font-semibold mb-2 mt-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {preview && (
        <div className="h-48 rounded-lg overflow-hidden">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <OrbitControls enableZoom={false} />
            {preview}
          </Canvas>
        </div>
      )}
    </motion.div>
  );
};

export default StepCard; 