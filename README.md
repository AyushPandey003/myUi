# 🎨 3D UI Spark

A modern collection of interactive 3D UI components built with React, Three.js, and TypeScript. Create stunning user interfaces with smooth animations and immersive 3D experiences.

![3D UI Spark Demo](https://via.placeholder.com/800x400/1a1a2e/ffffff?text=3D+UI+Spark+Demo)

## ✨ Features

- 🎯 **Interactive 3D Components** - Carousel, buttons, sliders, and toggle switches
- 🚀 **Built with Modern Tech** - React 18, TypeScript, Three.js, React Three Fiber
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- ⚡ **Smooth Animations** - GSAP-powered animations with elastic easing
- 🎨 **Customizable** - Easy to customize colors, sizes, and behaviors
- 🔧 **TypeScript Ready** - Full type safety and IntelliSense support
- 📦 **Copy & Paste** - Easy to integrate components with code examples

## 🎮 Live Demo

[View Live Demo](https://your-demo-url.com) | [Component Gallery](https://your-demo-url.com/components)

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **3D Graphics:** Three.js, React Three Fiber, React Three Drei
- **Animations:** GSAP
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Code Highlighting:** Prism.js

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/3d-ui-spark.git
   cd 3d-ui-spark
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📦 Available Components

### 🎠 3D Carousel
Interactive circular carousel with smooth transitions
```tsx
<Canvas>
  <CircularCarousel 
    items={items}
    radius={3}
    onItemSelect={(item) => console.log(item)}
  />
</Canvas>
```

### 🎛️ 3D Slider
Responsive 3D slider with customizable range
```tsx
<Canvas>
  <Slider3D 
    min={0}
    max={100}
    value={50}
    onChange={(value) => console.log(value)}
  />
</Canvas>
```

### 🔘 3D Button
Interactive button with hover and click animations
```tsx
<Canvas>
  <Button3D 
    text="Click Me"
    onClick={() => console.log('Clicked!')}
    color="#6366f1"
  />
</Canvas>
```

### 🎚️ 3D Toggle Switch
Smooth toggle switch with elastic animations
```tsx
<Canvas>
  <ToggleSwitch3D 
    initialOn={false}
    onToggle={(on) => console.log('Toggled:', on)}
  />
</Canvas>
```

## 🎨 Customization

Each component is highly customizable with props for:

- **Colors & Materials** - Customize colors, metalness, roughness
- **Dimensions** - Adjust size, position, and scale
- **Animations** - Configure speed, easing, and effects
- **Interactions** - Custom click handlers and callbacks

Example:
```tsx
<ToggleSwitch3D 
  position={[0, 0, 0]}
  size={[2, 0.5, 0.2]}
  initialOn={true}
  onToggle={(on) => handleToggle(on)}
/>
```

## 📱 Mobile Responsiveness

The app is fully responsive with:
- 📱 Mobile-first sidebar navigation
- 👆 Touch-friendly 3D interactions
- 📏 Adaptive component sizing
- 🔄 Optimized performance for mobile devices

## 🏗️ Project Structure

```
src/
├── components/
│   └── ui/
│       ├── 3DCarousel/          # Carousel components
│       ├── Button3D.tsx         # 3D Button component
│       ├── ToggleSwitch3D.tsx   # Toggle Switch component
│       ├── Slider3D.tsx         # 3D Slider component
│       ├── Sidebar.tsx          # Navigation sidebar
│       └── Layout.tsx           # Main layout
├── pages/                       # Page components
├── hooks/                       # Custom React hooks
└── utils/                       # Utility functions
```

## 🔧 Development

### Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Type checking
npm run type-check
```

### Adding New Components

1. Create component in `src/components/ui/`
2. Add page in `src/pages/`
3. Update routing in `App.tsx`
4. Add to sidebar navigation

## 🎯 Performance Optimizations

- **Lazy Loading** - Components loaded on demand
- **Memoization** - React.memo for expensive renders
- **Efficient Animations** - GSAP with hardware acceleration
- **Optimized Three.js** - Proper geometry disposal and material reuse

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Use TypeScript for all new components
- Follow existing code style and patterns
- Add proper documentation and examples
- Test on both desktop and mobile
- Ensure components are accessible

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) - 3D graphics library
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - React renderer for Three.js
- [React Three Drei](https://docs.pmnd.rs/drei) - Useful helpers for React Three Fiber
- [GSAP](https://greensock.com/gsap/) - Professional animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## 📞 Support

- 📧 Email: your-email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/your-username/3d-ui-spark/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/your-username/3d-ui-spark/discussions)

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/AyushPandey003">Ayush Pandey</a></p>
  <p>⭐ Star us on GitHub if you like this project!</p>
</div>
