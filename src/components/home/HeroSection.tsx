import { Button } from "@/components/ui/button";
import { Star, Shield, Heart, Users } from "lucide-react";
import heroImage from "@/assets/hero-daycare.jpg";
import FloatingElements from "@/components/FloatingElements";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <FloatingElements />
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8 animate-slide-up">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white border border-white/20">
              <Star className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">Licensed & Accredited Daycare</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight">
              Where Children
              <span className="text-secondary block">Shine & Grow</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
              A safe, nurturing environment where your child will learn, play, and develop lasting friendships while you have peace of mind.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="text-sm">State Licensed</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-coral" />
              <span className="text-sm">Caring Staff</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" />
              <span className="text-sm">Small Groups</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="playful" size="lg" className="text-lg px-8 py-6">
              Schedule Your Tour Today
            </Button>
            <Button variant="warm" size="lg" className="text-lg px-8 py-6">
              Learn About Our Programs
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-secondary">15+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-coral">150+</div>
              <div className="text-sm text-white/80">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-accent">4.9★</div>
              <div className="text-sm text-white/80">Parent Rating</div>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative animate-bounce-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative rounded-3xl overflow-hidden shadow-playful transform hover:scale-105 transition-playful">
            <img
              src={heroImage}
              alt="Happy children playing and learning at Sunshine Daycare"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          
          {/* Floating Achievement Badges */}
          <div className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-playful animate-float">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">A+</div>
              <div className="text-xs text-muted-foreground">Safety Rating</div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -left-6 bg-white rounded-full p-4 shadow-warm animate-float" style={{ animationDelay: '2s' }}>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">24/7</div>
              <div className="text-xs text-muted-foreground">Security</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;