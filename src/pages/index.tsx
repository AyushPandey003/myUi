import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import { motion } from 'framer-motion';
import FeatureCard from '../components/ui/FeatureCard';
import StepCard from '../components/ui/StepCard';
import TestimonialCard from '../components/ui/TestimonialCard';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
              <Center>
                <Text3D font="https://cdn.jsdelivr.net/npm/three@0.152.2/examples/fonts/helvetiker_regular.typeface.json" size={3} height={0.5} curveSegments={12}>
                  3D UI
                  <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={0.5} />
                </Text3D>
              </Center>
            </Float>
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 p-6"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4">3D UI Spark</h1>
          <p className="text-xl md:text-2xl text-purple-300 mb-8">Next-generation 3D component library for React</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-purple-700 transition-colors"
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why 3D UI Spark?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Easy to Use"
              description="Integrate beautiful 3D components with just a few lines of code."
              icon={<svg>...</svg>} // Placeholder icon
            />
            <FeatureCard
              title="Performant"
              description="Optimized for performance, ensuring a smooth user experience."
              icon={<svg>...</svg>} // Placeholder icon
            />
            <FeatureCard
              title="Customizable"
              description="Easily customize the look and feel to match your brand."
              icon={<svg>...</svg>} // Placeholder icon
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6 bg-slate-800 bg-opacity-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Get Started in 3 Steps</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number={1}
              title="Install"
              description="Add the library to your project using your favorite package manager."
            />
            <StepCard
              number={2}
              title="Import"
              description="Import the components you want to use in your application."
            />
            <StepCard
              number={3}
              title="Create"
              description="Start building amazing 3D user interfaces in minutes."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Loved by Developers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="This is the best 3D component library I have ever used. It's so easy to create stunning visuals."
              author="Jane Doe"
              role="Frontend Developer"
            />
            <TestimonialCard
              quote="I was able to build a complex 3D scene in just a few hours. Highly recommended!"
              author="John Smith"
              role="Full-Stack Engineer"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-700">
        <div className="max-w-7xl mx-auto text-center text-purple-300">
          <p>&copy; {new Date().getFullYear()} 3D UI Spark. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
