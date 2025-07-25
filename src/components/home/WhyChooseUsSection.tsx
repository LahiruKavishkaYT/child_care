import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Heart, 
  GraduationCap, 
  Users, 
  Clock, 
  Utensils,
  Camera,
  Award
} from "lucide-react";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description: "State-of-the-art security systems, background-checked staff, and comprehensive safety protocols.",
      stats: "Zero incidents in 15 years",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Heart,
      title: "Experienced Staff",
      description: "Degreed early childhood educators with ongoing training and genuine love for children.",
      stats: "Average 8 years experience",
      color: "text-coral",
      bgColor: "bg-coral/10"
    },
    {
      icon: GraduationCap,
      title: "Educational Excellence",
      description: "Research-based curriculum that prepares children for school success while honoring play-based learning.",
      stats: "98% kindergarten ready",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Users,
      title: "Small Group Sizes",
      description: "Low teacher-to-child ratios ensure individual attention and personalized care for every child.",
      stats: "1:3 infant ratio",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Extended hours to accommodate working parents with early drop-off and late pickup options.",
      stats: "6:30 AM - 6:30 PM",
      color: "text-lavender",
      bgColor: "bg-lavender/10"
    },
    {
      icon: Utensils,
      title: "Nutritious Meals",
      description: "Fresh, healthy meals and snacks prepared on-site with accommodations for dietary restrictions.",
      stats: "Organic & locally sourced",
      color: "text-mint",
      bgColor: "bg-mint/10"
    },
    {
      icon: Camera,
      title: "Daily Updates",
      description: "Real-time photos, activity reports, and communication through our parent app.",
      stats: "500+ daily photos shared",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Award,
      title: "Licensed & Accredited",
      description: "Fully licensed by the state with top ratings and recognized for excellence in early childhood education.",
      stats: "5-star state rating",
      color: "text-coral",
      bgColor: "bg-coral/10"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-secondary/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Why Parents Choose
            <span className="text-primary block">Sunshine Daycare</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We're more than just childcare – we're your partner in raising confident, curious, 
            and capable children who are ready to take on the world.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className={`group hover:shadow-playful transition-all duration-500 transform hover:-translate-y-2 border-0 ${feature.bgColor} animate-bounce-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                
                <h3 className="text-lg font-heading font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {feature.description}
                </p>
                
                <div className={`text-xs font-semibold ${feature.color} px-3 py-2 rounded-full bg-white/50 mt-auto`}>
                  {feature.stats}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-soft rounded-3xl p-8 md:p-12 text-center animate-slide-up">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
            Trusted by Families Since 2008
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-coral mb-2">15</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-accent mb-2">4.9★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;