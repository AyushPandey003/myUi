import { type FC } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

interface FeatureCardProps extends MotionProps {
  title: string;
  description: string;
  icon?: ReactNode;
  preview?: ReactNode;
  className?: string;
}
const FeatureCard: FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  preview,
  className = '',
  ...motionProps
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-xl shadow-lg p-6 ${className}`}
      {...motionProps}
    >
      {icon && (
        <div className="w-12 h-12 mb-4 text-indigo-600">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
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

export default FeatureCard; 