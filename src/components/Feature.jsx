import { useRef, useEffect } from "react";
import { Target, Users, Award, BookOpen } from "lucide-react";
import { gsap } from 'gsap';

const Feature = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const features = [
    {
      icon: <Target className="w-12 h-12 text-purple-600" />,
      title: "Real-World Focus",
      description: "Learn skills that directly apply to actual workplace challenges and scenarios."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Expert Mentorship",
      description: "Get guidance from industry professionals with years of practical experience."
    },
    {
      icon: <Award className="w-12 h-12 text-indigo-600" />,
      title: "Recognized Certifications",
      description: "Earn certificates that are valued by top companies and organizations worldwide."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-purple-600" />,
      title: "Interactive Learning",
      description: "Engage with hands-on projects, simulations, and collaborative problem-solving."
    }
  ];

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.2,
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
            Why Choose Synauris?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the most effective and practical learning experience possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group hover:border-purple-200"
            >
              <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature