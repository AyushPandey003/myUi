import type { FC } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

interface TestimonialCardProps extends HTMLMotionProps<"div"> {
  quote: string;
  author: string;
  role: string;
  avatar?: React.ReactNode;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  avatar,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-xl shadow-lg p-6 ${className}`}
      {...props}
    >
      <div className="flex items-start gap-4">
        {avatar && (
          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <OrbitControls enableZoom={false} />
              {avatar}
            </Canvas>
          </div>
        )}
        
        <div>
          <blockquote className="text-gray-600 italic mb-4">
            "{quote}"
          </blockquote>
          <div>
            <p className="font-semibold text-gray-900">{author}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard; 