const LoadingSpinner = (
  
) => {
  return (
    <div className="flex items-center gap-2 text-white/70">
      <div className="w-4 h-4 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
      <span className="text-sm">Loading 3D Scene...</span>
    </div>
  );
};

export default LoadingSpinner;
