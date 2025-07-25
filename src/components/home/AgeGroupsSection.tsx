import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Baby, Users, GraduationCap, BookOpen, ArrowRight } from "lucide-react";
import ageGroupsImage from "@/assets/age-groups.jpg";

const AgeGroupsSection = () => {
  const ageGroups = [
    {
      icon: Baby,
      title: "Infant Care",
      ageRange: "6 weeks - 12 months",
      description: "Tender loving care for your littlest ones with feeding, diaper changes, tummy time, and developmental activities.",
      features: ["Low 1:3 ratio", "Flexible feeding", "Milestone tracking", "Cozy environment"],
      color: "coral",
      bgColor: "bg-coral/10",
      iconColor: "text-coral"
    },
    {
      icon: Users,
      title: "Toddler Program",
      ageRange: "1 - 2 years",
      description: "Exciting exploration and learning through play, art, music, and social interaction in a safe environment.",
      features: ["Potty training", "Language development", "Social skills", "Creative play"],
      color: "secondary",
      bgColor: "bg-secondary/10", 
      iconColor: "text-secondary"
    },
    {
      icon: GraduationCap,
      title: "Preschool",
      ageRange: "3 - 5 years",
      description: "School readiness program with structured learning, literacy, math concepts, and kindergarten preparation.",
      features: ["Pre-K curriculum", "School readiness", "STEM activities", "Character building"],
      color: "accent",
      bgColor: "bg-accent/10",
      iconColor: "text-accent"
    },
    {
      icon: BookOpen,
      title: "After-School",
      ageRange: "5 - 12 years",
      description: "Homework help, recreational activities, and enrichment programs for school-age children.",
      features: ["Homework help", "Field trips", "Sports & crafts", "Summer camps"],
      color: "primary",
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={ageGroupsImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Programs for Every
            <span className="text-primary block">Stage of Growth</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From infants to school-age children, we provide age-appropriate care and learning experiences 
            that support your child's unique developmental journey.
          </p>
        </div>

        {/* Age Groups Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {ageGroups.map((group, index) => (
            <Card 
              key={group.title}
              className={`group hover:shadow-playful transition-all duration-500 transform hover:-translate-y-2 ${group.bgColor} border-0 animate-bounce-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${group.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <group.icon className={`w-8 h-8 ${group.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  {group.title}
                </h3>
                
                <div className={`text-sm font-semibold ${group.iconColor} mb-4 px-3 py-1 rounded-full bg-white/50`}>
                  {group.ageRange}
                </div>
                
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {group.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {group.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-foreground flex items-center justify-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${group.iconColor.replace('text-', 'bg-')}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={`group-hover:${group.iconColor} transition-colors`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-slide-up">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
            Not sure which program is right for your child?
          </h3>
          <p className="text-muted-foreground mb-8">
            Our experienced staff will help you find the perfect fit during your tour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="tour" size="lg">
              Schedule a Tour
            </Button>
            <Button variant="warm" size="lg">
              Speak with Our Director
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgeGroupsSection;