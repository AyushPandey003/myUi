import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Container from './Container';
import Button from './Button';
import FeatureCard from './FeatureCard';
import StepCard from './StepCard';
import TestimonialCard from './TestimonialCard';


const CustomerLanding: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-red-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                Build Amazing 3D Experiences
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Create stunning 3D interfaces with our component library. Fast, accessible, and beautiful.
              </p>
              <div className="flex gap-4">
                <Button variant="primary" onClick={() => window.location.href = '/components'}>Get Started</Button>
                <Button variant="outline" onClick={() => window.location.href = '/components/carousel'}>See Demo</Button>
              </div>
            </motion.div>

            {/* Right 3D Canvas */}
            <div className="h-[400px] lg:h-[600px]">
              <Canvas camera={{ position: [0, 1.5, 5] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <OrbitControls enableZoom={false} />
                <mesh>
                  <boxGeometry args={[1, 1, 1]} />
                  <meshStandardMaterial color="#4F46E5" />
                </mesh>
              </Canvas>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="3D Components"
              description="Pre-built 3D components that you can customize and extend."
              preview={
                <mesh>
                  <sphereGeometry args={[1, 32, 32]} />
                  <meshStandardMaterial color="#4F46E5" />
                </mesh>
              }
            />
            <FeatureCard
              title="Responsive Design"
              description="Fully responsive layouts that work on any device."
              preview={
                <mesh>
                  <boxGeometry args={[1, 1, 1]} />
                  <meshStandardMaterial color="#10B981" />
                </mesh>
              }
            />
            <FeatureCard
              title="Accessibility"
              description="Built with accessibility in mind from the ground up."
              preview={
                <mesh>
                  <torusGeometry args={[1, 0.3, 16, 32]} />
                  <meshStandardMaterial color="#F59E0B" />
                </mesh>
              }
            />
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              number={1}
              title="Install"
              description="Add our library to your project with a single command."
              preview={
                <mesh>
                  <boxGeometry args={[1, 1, 1]} />
                  <meshStandardMaterial color="#4F46E5" />
                </mesh>
              }
            />
            <StepCard
              number={2}
              title="Customize"
              description="Customize components to match your brand and needs."
              preview={
                <mesh>
                  <sphereGeometry args={[1, 32, 32]} />
                  <meshStandardMaterial color="#10B981" />
                </mesh>
              }
            />
            <StepCard
              number={3}
              title="Deploy"
              description="Deploy your 3D-enabled application to production."
              preview={
                <mesh>
                  <torusGeometry args={[1, 0.3, 16, 32]} />
                  <meshStandardMaterial color="#F59E0B" />
                </mesh>
              }
            />
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="This library has transformed how we build 3D interfaces. The components are intuitive and powerful."
              author="Sarah Johnson"
              role="Lead Developer at TechCorp"
              avatar={
                <mesh>
                  <sphereGeometry args={[1, 32, 32]} />
                  <meshStandardMaterial color="#4F46E5" />
                </mesh>
              }
            />
            <TestimonialCard
              quote="The accessibility features are a game-changer. We can now build 3D experiences that everyone can enjoy."
              author="Michael Chen"
              role="UX Designer at DesignHub"
              avatar={
                <mesh>
                  <boxGeometry args={[1, 1, 1]} />
                  <meshStandardMaterial color="#10B981" />
                </mesh>
              }
            />
            <TestimonialCard
              quote="The documentation is clear and the community is incredibly helpful. A must-have for 3D web development."
              author="Emma Rodriguez"
              role="Frontend Developer at WebCraft"
              avatar={
                <mesh>
                  <torusGeometry args={[1, 0.3, 16, 32]} />
                  <meshStandardMaterial color="#F59E0B" />
                </mesh>
              }
            />
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Features</a></li>
                <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-300">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">About</a></li>
                <li><a href="#" className="hover:text-gray-300">Blog</a></li>
                <li><a href="#" className="hover:text-gray-300">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Community</a></li>
                <li><a href="#" className="hover:text-gray-300">Support</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-300">Terms</a></li>
                <li><a href="#" className="hover:text-gray-300">License</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default CustomerLanding; 