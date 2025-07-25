import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Shield,
  Award,
  Heart
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Staff", href: "/staff" },
    { name: "Facilities", href: "/facilities" },
    { name: "Enrollment", href: "/enrollment" },
    { name: "Contact", href: "/contact" }
  ];

  const programs = [
    { name: "Infant Care", href: "/programs/infant" },
    { name: "Toddler Program", href: "/programs/toddler" },
    { name: "Preschool", href: "/programs/preschool" },
    { name: "After-School Care", href: "/programs/after-school" },
    { name: "Summer Camps", href: "/programs/summer" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-rainbow rounded-full flex items-center justify-center font-heading font-bold text-white shadow-playful">
                S
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">Sunshine Daycare</h3>
                <p className="text-sm text-primary-foreground/80">Where Children Shine</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/90 leading-relaxed">
              Providing exceptional childcare and early education in a safe, nurturing environment 
              where every child can learn, grow, and shine.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary" />
                <span>(555) 123-KIDS</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary" />
                <span>hello@sunshinedaycare.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-secondary" />
                <span>123 Rainbow Lane, Sunshine City, ST 12345</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-secondary" />
                <span>Mon-Fri: 6:30 AM - 6:30 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <a 
                    href={program.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors hover:translate-x-1 transform inline-block"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA & Social */}
          <div className="space-y-6">
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Ready to Join Our Family?</h4>
              <div className="space-y-3">
                <Button variant="warm" size="sm" className="w-full">
                  Schedule a Tour
                </Button>
                <Button variant="outline" size="sm" className="w-full bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  Download Enrollment Forms
                </Button>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Follow Our Journey</h4>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-primary-foreground/70 mt-3">
                See daily photos and updates from our classrooms!
              </p>
            </div>
          </div>
        </div>

        {/* Certifications Bar */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="text-sm">State Licensed</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-secondary" />
              <span className="text-sm">Accredited Program</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-secondary" />
              <span className="text-sm">CPR Certified Staff</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="text-sm">Background Checked</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6 text-center text-sm text-primary-foreground/70">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2024 Sunshine Daycare. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-secondary transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;