
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
    house: "Eagles",
    quote: "My favorite thing about Glencraig is the science club where we did cool experiments like making volcanoes erupt! The teachers make learning really fun.",
    avatar: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=100&h=100",
  },
  {
    name: "Harriet, P7",
    house: "Falcons",
    quote: "I was nervous on my first day, but everyone was really friendly. I love our school trips - last year we went to the dinosaur museum!",
    avatar: "https://images.unsplash.com/photo-1570988970194-8af9cd001101?auto=format&fit=crop&w=100&h=100",
  },
  {
    name: "Heath, P7",
    house: "Hawks",
    quote: "The art room is my favorite place in the school. We get to paint, make clay models and even did a big mural for the entrance hall!",
    avatar: "https://images.unsplash.com/photo-1570043116883-a52c0fdc75b8?auto=format&fit=crop&w=100&h=100",
  },
  {
    name: "Zac, P7",
    house: "Owls",
    quote: "When I started, I didn't know anyone, but now I have so many friends. The playground is awesome with a big climbing frame and football pitches.",
    avatar: "https://images.unsplash.com/photo-1570039486851-9d088331be29?auto=format&fit=crop&w=100&h=100",
  },
];

export const StudentTestimonials = () => {
  return (
    <ErrorBoundary>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card 
            key={index} 
            className="hover:shadow-lg transition-shadow border-2 rounded-3xl bg-white focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-white focus-within:ring-[#4B3B72]"
          >
            <CardHeader className="pb-2">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                <img 
                  src={testimonial.avatar} 
                  alt={`Portrait of ${testimonial.name}`} 
                  className="rounded-full w-16 h-16 sm:w-12 sm:h-12 object-cover border-2 border-[#4B3B72]"
                  loading="lazy"
                />
                <div className="text-center sm:text-left">
                  <h4 className="font-bold text-[#4B3B72]" id={`testimonial-${index}-name`}>{testimonial.name}</h4>
                  <span 
                    className={`text-sm ${HOUSES[testimonial.house].textColor}`}
                    aria-describedby={`testimonial-${index}-name`}
                  >
                    {testimonial.house} House
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <blockquote>
                <p className="italic text-[#6A5E80]">"{testimonial.quote}"</p>
              </blockquote>
            </CardContent>
            <CardFooter className="pt-0">
              <div 
                className={`w-full h-1 rounded-full ${HOUSES[testimonial.house].color}`}
                aria-hidden="true"
              ></div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </ErrorBoundary>
  );
};
