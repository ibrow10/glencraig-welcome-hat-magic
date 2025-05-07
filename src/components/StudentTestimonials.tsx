
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    name: "Emma, Age 11",
    house: "Phoenix",
    quote: "My favorite thing about Glencraig is the science club where we did cool experiments like making volcanoes erupt! The teachers make learning really fun.",
    avatar: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=100&h=100",
  },
  {
    name: "James, Age 11",
    house: "Dragon",
    quote: "I was nervous on my first day, but everyone was really friendly. I love our school trips - last year we went to the dinosaur museum!",
    avatar: "https://images.unsplash.com/photo-1570988970194-8af9cd001101?auto=format&fit=crop&w=100&h=100",
  },
  {
    name: "Sophia, Age 11",
    house: "Unicorn",
    quote: "The art room is my favorite place in the school. We get to paint, make clay models and even did a big mural for the entrance hall!",
    avatar: "https://images.unsplash.com/photo-1570043116883-a52c0fdc75b8?auto=format&fit=crop&w=100&h=100",
  },
  {
    name: "Oliver, Age 11",
    house: "Griffin",
    quote: "When I started, I didn't know anyone, but now I have so many friends. The playground is awesome with a big climbing frame and football pitches.",
    avatar: "https://images.unsplash.com/photo-1570039486851-9d088331be29?auto=format&fit=crop&w=100&h=100",
  },
];

export const StudentTestimonials = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex items-center space-x-4">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="rounded-full w-12 h-12 object-cover"
              />
              <div>
                <h4 className="font-bold">{testimonial.name}</h4>
                <span className="text-sm text-muted-foreground">{testimonial.house} House</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="italic">"{testimonial.quote}"</p>
          </CardContent>
          <CardFooter className="pt-0">
            <div className={`w-full h-1 rounded-full ${
              testimonial.house === "Phoenix" ? "bg-red-500" :
              testimonial.house === "Dragon" ? "bg-green-500" :
              testimonial.house === "Unicorn" ? "bg-blue-500" :
              "bg-yellow-500"
            }`}></div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
