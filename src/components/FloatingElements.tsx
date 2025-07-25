import floatingToys from "@/assets/floating-toys.png";

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating toys background */}
      <div className="absolute top-10 left-10 animate-float opacity-20">
        <img src={floatingToys} alt="" className="w-16 h-16" />
      </div>
      <div className="absolute top-20 right-20 animate-float opacity-15" style={{ animationDelay: '2s' }}>
        <img src={floatingToys} alt="" className="w-12 h-12" />
      </div>
      <div className="absolute bottom-20 left-20 animate-float opacity-10" style={{ animationDelay: '4s' }}>
        <img src={floatingToys} alt="" className="w-20 h-20" />
      </div>
      <div className="absolute bottom-32 right-32 animate-float opacity-20" style={{ animationDelay: '6s' }}>
        <img src={floatingToys} alt="" className="w-14 h-14" />
      </div>
      
      {/* Gradient overlays */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-coral/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-secondary/5 to-transparent rounded-full blur-3xl"></div>
    </div>
  );
};

export default FloatingElements;