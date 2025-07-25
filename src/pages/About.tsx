import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, GraduationCap, Shield, Award, Clock } from "lucide-react";
import staffMember from "@/assets/staff-member.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Nurturing Care",
      description: "Every child deserves to feel loved, safe, and valued. We create a warm environment where children can express themselves freely."
    },
    {
      icon: Users,
      title: "Individual Attention",
      description: "We recognize that each child is unique with their own interests, learning style, and developmental timeline."
    },
    {
      icon: GraduationCap,
      title: "Educational Excellence",
      description: "We blend play-based learning with structured activities to prepare children for future academic success."
    },
    {
      icon: Shield,
      title: "Safety & Security",
      description: "Your child's safety is our highest priority, with comprehensive protocols and trained emergency response."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 animate-slide-up">
              About Sunshine Daycare
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              A family-owned daycare dedicated to nurturing young minds and hearts since 2008
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Sunshine Daycare was founded in 2008 by Maria Rodriguez, a mother of three and early childhood education specialist with over 20 years of experience. After struggling to find quality, affordable childcare for her own children, Maria decided to create the kind of program she wished existed.
                </p>
                <p>
                  What started as a small home-based program has grown into a state-of-the-art facility serving over 100 families in our community. Despite our growth, we've maintained our family atmosphere and personal touch that makes each child feel special.
                </p>
                <p>
                  Today, Sunshine Daycare is recognized as one of the premier early childhood programs in the region, but our mission remains the same: to provide exceptional care and education in an environment where every child can shine.
                </p>
              </div>
            </div>
            <div className="animate-bounce-in" style={{ animationDelay: '0.3s' }}>
              <img 
                src={staffMember} 
                alt="Maria Rodriguez, Director of Sunshine Daycare"
                className="rounded-3xl shadow-playful w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-muted-foreground">
              We believe every child has the potential to shine. Our mission is to nurture that potential through love, learning, and play.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-gentle mb-12 text-center">
            <h3 className="text-2xl font-heading font-bold text-primary mb-6">Our Mission</h3>
            <blockquote className="text-lg text-foreground leading-relaxed max-w-4xl mx-auto">
              "To provide exceptional early childhood education and care in a safe, nurturing environment that promotes each child's social, emotional, physical, and cognitive development while supporting families in our community."
            </blockquote>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="border-0 bg-white/50 backdrop-blur-sm hover:shadow-playful transition-all duration-500 animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Director Bio */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Meet Our Director
              </h2>
            </div>
            
            <Card className="border-0 shadow-playful">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-center">
                    <img 
                      src={staffMember} 
                      alt="Maria Rodriguez"
                      className="w-48 h-48 rounded-full object-cover mx-auto shadow-warm"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-foreground">Maria Rodriguez</h3>
                      <p className="text-lg text-primary font-medium">Director & Founder</p>
                    </div>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Maria brings over 20 years of experience in early childhood education, including a Master's degree in Child Development from State University. She is passionate about creating environments where children feel safe to explore, learn, and grow.
                      </p>
                      <p>
                        When she's not at the daycare, Maria enjoys reading, gardening, and spending time with her three grown children and two grandchildren.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-4 pt-4">
                      <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">M.Ed Child Development</span>
                      </div>
                      <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">20+ Years Experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We'd love to show you around our facility and answer any questions you might have about our programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="warm" size="lg">
              Schedule a Tour
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
              Download Our Handbook
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;