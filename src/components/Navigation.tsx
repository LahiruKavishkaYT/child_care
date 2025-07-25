import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Staff", path: "/staff" },
    { name: "Facilities", path: "/facilities" },
    { name: "Enrollment", path: "/enrollment" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
        <div className="container mx-auto flex flex-wrap justify-center md:justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>(555) 123-KIDS</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>123 Rainbow Lane, Sunshine City</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} />
            <span>Mon-Fri: 6:30 AM - 6:30 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-gentle">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-bounce">
              <div className="w-10 h-10 bg-gradient-rainbow rounded-full flex items-center justify-center font-heading font-bold text-white shadow-playful">
                S
              </div>
              <div>
                <h1 className="font-heading font-bold text-xl text-primary">Sunshine Daycare</h1>
                <p className="text-xs text-muted-foreground">Where Children Shine</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition-colors hover:text-primary ${
                    isActive(item.path) 
                      ? "text-primary border-b-2 border-primary" 
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="tour" size="sm">
                Schedule Tour
              </Button>
              <Button variant="enroll" size="sm">
                Enroll Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border animate-slide-up">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-medium py-2 px-4 rounded-md transition-colors ${
                      isActive(item.path)
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="tour" size="sm" className="w-full">
                    Schedule Tour
                  </Button>
                  <Button variant="enroll" size="sm" className="w-full">
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;