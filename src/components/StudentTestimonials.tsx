
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { HOUSES, THEME_COLORS } from "@/lib/constants";
import ErrorBoundary from "@/components/ErrorBoundary";

interface Testimonial {
  name: string;
  house: keyof typeof HOUSES;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Mabel, P7",
    house: "Sharks",
    quote: "I would like to reassure you that there will always be someone to talk to on the firs day. If you want to talk to someone, just Ask. They will always help",
    avatar: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=100&h=100",
  },
  {
    name: "Harriet, P7",
    house: "Foxes",
    quote: "Don't be worried if you think the schoool is very big compared to nursery, you will soon find your way round",
    avatar: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=100&h=100",
  },
  {
    name: "Heath, P7",
    house: "Snakes",
    quote: "Don't walk backwards into school, you will bang your head.  The pitch and play equipment, the playgound is super fun. You will enjoy every day",
    avatar: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&w=100&h=100",
  },
  {
    name: "Zac, P7",
    house: "YellowHammers",
    quote: "When I started I didnt know anyone, the teachers are very nice and don't be worried if the seem strict. I have met most of my best friends at Glencraig",
    avatar: "https://images.unsplash.com/photo-1501286353178-1ec881214838?auto=format&fit=crop&w=100&h=100",
  },
];

export const StudentTestimonials = () => {
  return (
    <ErrorBoundary>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card 
            key={index} 
            className="hover:shadow-2xl transition-all duration-300 border border-gray-600 rounded-2xl bg-gray-900/80 backdrop-blur-sm hover:bg-gray-800/90 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-700 focus-within:ring-emerald-500"
          >
            <CardHeader className="pb-4">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <img 
                  src={testimonial.avatar} 
                  alt={`Portrait of ${testimonial.name}`} 
                  className="rounded-full w-20 h-20 sm:w-16 sm:h-16 object-cover border-3 border-gray-600 shadow-lg"
                  loading="lazy"
                />
                <div className="text-center sm:text-left">
                  <h4 className="font-bold text-white text-lg" id={`testimonial-${index}-name`}>{testimonial.name}</h4>
                  <span 
                    className={`text-sm ${HOUSES[testimonial.house].textColor} font-medium`}
                    aria-describedby={`testimonial-${index}-name`}
                  >
                    {testimonial.house} House
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <blockquote>
                <p className="italic text-gray-300 text-lg leading-relaxed">"{testimonial.quote}"</p>
              </blockquote>
            </CardContent>
            <CardFooter className="pt-4">
              <div 
                className={`w-full h-1.5 rounded-full ${HOUSES[testimonial.house].color} shadow-lg`}
                aria-hidden="true"
              ></div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </ErrorBoundary>
  );
};
