import { useRef, useEffect } from "react";
import {gsap} from 'gsap';
import { Star } from "lucide-react";


const Testimonials = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const testimonials = [
    {
      name: "Anishka Swaran",
      role: "Chief Executive Officier",
      quote: "Synauris transformed my career. The real-world projects prepared me for challenges I face every day at work.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b19c?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Marcus Johnson",
      role: "Business Analyst at Microsoft",
      quote: "The business strategy course gave me frameworks I use daily. The mentorship was invaluable for my growth.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer at Airbnb",
      quote: "From beginner to professional in 6 months. The design thinking approach revolutionized how I solve problems.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
    {
      name: "Emily Rodriguez",
      role: "UX Designer at Airbnb",
      quote: "From beginner to professional in 6 months. The design thinking approach revolutionized how I solve problems.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
    {
      name: "Emily Rodriguez",
      role: "UX Designer at Airbnb",
      quote: "From beginner to professional in 6 months. The design thinking approach revolutionized how I solve problems.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
    {
      name: "Emily Rodriguez",
      role: "UX Designer at Airbnb",
      quote: "From beginner to professional in 6 months. The design thinking approach revolutionized how I solve problems.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
    {
      name: "Emily Rodriguez",
      role: "UX Designer at Airbnb",
      quote: "From beginner to professional in 6 months. The design thinking approach revolutionized how I solve problems.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(card,
        { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            The Minds Behind
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The team behind Synauris—driven, skilled, and impact-focused.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl relative hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute -top-2 -left-2 text-6xl text-purple-200 font-serif">"</div>
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;