import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Baby, 
  Users, 
  GraduationCap, 
  BookOpen,
  Clock,
  Heart,
  Puzzle,
  Palette,
  Music,
  CheckCircle
} from "lucide-react";
import ageGroupsImage from "@/assets/age-groups.jpg";

const Programs = () => {
  const programs = [
    {
      icon: Baby,
      title: "Infant Care",
      ageRange: "6 weeks - 12 months",
      ratio: "1:3 ratio",
      hours: "6:30 AM - 6:30 PM",
      description: "Tender, individualized care for your littlest ones in a safe, nurturing environment designed specifically for infants.",
      features: [
        "Flexible feeding schedules",
        "Diaper changes & hygiene care",
        "Tummy time & motor development",
        "Sensory exploration activities",
        "Daily sleep routines",
        "Milestone tracking & documentation"
      ],
      dailySchedule: [
        "7:00 AM - Arrival & free play",
        "8:00 AM - Breakfast (formula/milk)",
        "9:00 AM - Tummy time & sensory play",
        "10:00 AM - Morning nap",
        "12:00 PM - Lunch & diaper change",
        "1:00 PM - Outdoor time (weather permitting)",
        "2:00 PM - Afternoon nap",
        "4:00 PM - Snack time",
        "5:00 PM - Quiet play & departure"
      ],
      color: "coral",
      bgColor: "bg-coral/10"
    },
    {
      icon: Users,
      title: "Toddler Program",
      ageRange: "1 - 2 years",
      ratio: "1:4 ratio",
      hours: "6:30 AM - 6:30 PM",
      description: "Active learning through play, exploration, and social interaction as toddlers develop independence and communication skills.",
      features: [
        "Potty training support",
        "Language development activities",
        "Social skills & sharing",
        "Art & creative expression",
        "Music & movement",
        "Outdoor playground time"
      ],
      dailySchedule: [
        "7:00 AM - Arrival & circle time",
        "8:00 AM - Breakfast & cleanup",
        "9:00 AM - Creative arts & crafts",
        "10:00 AM - Outdoor play",
        "11:00 AM - Story time & songs",
        "12:00 PM - Lunch & quiet time",
        "1:00 PM - Nap time",
        "3:00 PM - Snack & free play",
        "4:00 PM - Music & movement",
        "5:00 PM - Departure preparation"
      ],
      color: "secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: GraduationCap,
      title: "Preschool Program",
      ageRange: "3 - 5 years",
      ratio: "1:8 ratio",
      hours: "6:30 AM - 6:30 PM",
      description: "Comprehensive school readiness program focusing on early literacy, math concepts, science exploration, and social development.",
      features: [
        "Pre-K curriculum aligned with standards",
        "Early literacy & phonics",
        "Math concepts & problem solving",
        "Science experiments & discovery",
        "Character building & values",
        "Kindergarten preparation"
      ],
      dailySchedule: [
        "7:00 AM - Arrival & free choice",
        "8:00 AM - Breakfast & morning meeting",
        "9:00 AM - Learning centers rotation",
        "10:00 AM - Outdoor exploration",
        "11:00 AM - Group activities & lessons",
        "12:00 PM - Lunch & cleanup",
        "1:00 PM - Quiet time/rest",
        "2:30 PM - STEM activities",
        "3:30 PM - Snack & story time",
        "4:30 PM - Creative play & departure"
      ],
      color: "accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: BookOpen,
      title: "After-School Care",
      ageRange: "5 - 12 years",
      ratio: "1:12 ratio",
      hours: "3:00 PM - 6:30 PM",
      description: "Structured after-school program with homework support, enrichment activities, and recreational fun for school-age children.",
      features: [
        "Homework help & tutoring",
        "Recreational activities",
        "Arts & crafts projects",
        "Sports & physical activities",
        "Field trips & special events",
        "Summer camp programs"
      ],
      dailySchedule: [
        "3:00 PM - School pickup & arrival",
        "3:30 PM - Snack time",
        "4:00 PM - Homework help",
        "4:45 PM - Physical activities",
        "5:15 PM - Creative projects",
        "5:45 PM - Free play & cleanup",
        "6:00 PM - Departure preparation"
      ],
      color: "primary",
      bgColor: "bg-primary/10"
    }
  ];

  const enrichmentActivities = [
    { icon: Palette, title: "Art & Creativity", description: "Painting, drawing, sculpting, and mixed media projects" },
    { icon: Music, title: "Music & Movement", description: "Singing, dancing, instrument exploration, and rhythm activities" },
    { icon: Puzzle, title: "STEM Learning", description: "Science experiments, technology exploration, engineering challenges" },
    { icon: Heart, title: "Character Building", description: "Social skills, empathy, kindness, and community values" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 animate-slide-up">
              Our Programs
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Age-appropriate care and education programs designed to nurture your child's unique developmental journey
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {programs.map((program, index) => (
              <div key={program.title} className={`animate-slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="border-0 shadow-playful overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Content Side */}
                      <div className={`p-8 md:p-12 ${program.bgColor}`}>
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-gentle`}>
                            <program.icon className={`w-8 h-8 text-${program.color}`} />
                          </div>
                          <div>
                            <h2 className="text-3xl font-heading font-bold text-foreground">
                              {program.title}
                            </h2>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{program.ageRange}</span>
                              <span>•</span>
                              <span>{program.ratio}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-lg text-muted-foreground mb-8">
                          {program.description}
                        </p>

                        {/* Features */}
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                          {program.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className={`w-4 h-4 text-${program.color}`} />
                              <span className="text-sm text-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                          <Clock className={`w-4 h-4 text-${program.color}`} />
                          <span>Operating Hours: {program.hours}</span>
                        </div>

                        <Button variant="tour" size="lg">
                          Learn More About This Program
                        </Button>
                      </div>

                      {/* Schedule Side */}
                      <div className="p-8 md:p-12 bg-muted/50">
                        <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                          Daily Schedule
                        </h3>
                        <div className="space-y-3">
                          {program.dailySchedule.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className={`w-2 h-2 rounded-full bg-${program.color} mt-2 flex-shrink-0`}></div>
                              <span className="text-sm text-foreground">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrichment Activities */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Enrichment Activities
            </h2>
            <p className="text-xl text-muted-foreground">
              Across all our programs, children participate in special activities that enhance learning and development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enrichmentActivities.map((activity, index) => (
              <Card 
                key={activity.title}
                className={`border-0 bg-white/70 backdrop-blur-sm hover:shadow-playful transition-all duration-500 animate-bounce-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <activity.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-4">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Find the Perfect Program for Your Child
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Not sure which program is the best fit? Our experienced staff will help you choose during your tour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="warm" size="lg">
              Schedule a Tour
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
              Speak with Our Director
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;