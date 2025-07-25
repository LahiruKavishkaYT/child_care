import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import staffMember from "@/assets/staff-member.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Mother of Emma (3 years)",
      content: "Sunshine Daycare has been a blessing for our family. Emma loves going to 'school' every day and has learned so much. The teachers are incredible - they really know each child personally.",
      rating: 5,
      image: staffMember
    },
    {
      name: "Michael Chen",
      role: "Father of twins Alex & Maya (2 years)",
      content: "As working parents, we needed a place we could trust completely. The daily photos and updates give us peace of mind, and our twins have thrived in this nurturing environment.",
      rating: 5,
      image: staffMember
    },
    {
      name: "Lisa Rodriguez",
      role: "Mother of Carlos (4 years)",
      content: "The educational program is outstanding. Carlos started kindergarten so well-prepared, and his teachers were amazed by his readiness. We couldn't be happier with our experience.",
      rating: 5,
      image: staffMember
    },
    {
      name: "David & Amanda Kim",
      role: "Parents of Sophie (18 months)",
      content: "The infant care is exceptional. Sophie's teachers know her schedule, preferences, and personality so well. It's like having extended family caring for our daughter.",
      rating: 5,
      image: staffMember
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            What Parents Are
            <span className="text-secondary block">Saying About Us</span>
          </h2>
          <p className="text-xl text-white/90">
            Don't just take our word for it – hear from the families who trust us with their most precious gifts.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className={`group hover:shadow-playful transition-all duration-500 transform hover:-translate-y-2 bg-white/10 backdrop-blur-sm border-white/20 animate-bounce-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-6">
                  <Quote className="w-8 h-8 text-secondary" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
                
                {/* Testimonial Content */}
                <blockquote className="text-white/90 text-lg leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                  />
                  <div>
                    <div className="font-heading font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-white/70">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Review Summary */}
        <div className="text-center animate-slide-up">
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-heading font-bold text-secondary">4.9</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
            </div>
            <div className="text-white/90">
              <div className="font-semibold">Excellent Rating</div>
              <div className="text-sm">Based on 147 reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;