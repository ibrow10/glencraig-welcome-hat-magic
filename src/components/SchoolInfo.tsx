
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, House, CircleCheck } from "lucide-react";

const infoCards = [
  {
    title: "Our Classes",
    icon: <BookOpen className="h-10 w-10 text-[#FEC6A1]" />,
    description: "We have small classes with friendly teachers who make learning fun! Every classroom has a reading corner and lots of art on the walls.",
  },
  {
    title: "Our Friends",
    icon: <Users className="h-10 w-10 text-[#D3E4FD]" />,
    description: "Everyone is kind and welcoming at Glencraig. The older students help the younger ones, and we have a buddy system for new starters.",
  },
  {
    title: "Our Houses",
    icon: <House className="h-10 w-10 text-[#FFDEE2]" />,
    description: "There are four houses: Phoenix, Unicorn, Dragon, and Griffin. We earn house points for good work, kindness, and helping others.",
  },
  {
    title: "Our Activities",
    icon: <CircleCheck className="h-10 w-10 text-[#FEF7CD]" />,
    description: "We have lots of fun clubs after school, sports days, school trips, and a big summer fair where we play games and eat ice cream!",
  },
];

export const SchoolInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {infoCards.map((card, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center space-x-4">
            {card.icon}
            <CardTitle>{card.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{card.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
