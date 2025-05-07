
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, House, CircleCheck } from "lucide-react";

const infoCards = [
  {
    title: "Our Classes",
    icon: <BookOpen className="h-10 w-10 text-[#33C3F0]" />,
    description: "We have small classes with friendly teachers who make learning fun! Every classroom has a reading corner and lots of art on the walls.",
  },
  {
    title: "Our Friends",
    icon: <Users className="h-10 w-10 text-[#ea384c]" />,
    description: "Everyone is kind and welcoming at Glencraig. The older students help the younger ones, and we have a buddy system for new starters.",
  },
  {
    title: "Our Houses",
    icon: <House className="h-10 w-10 text-[#4CAF50]" />,
    description: "There are four houses: Eagles (Blue), Falcons (Red), Hawks (Green), and Owls (Yellow). We earn house points for good work, kindness, and helping others.",
  },
  {
    title: "Our Activities",
    icon: <CircleCheck className="h-10 w-10 text-[#FFD700]" />,
    description: "We have lots of fun clubs after school, sports days, school trips, and a big summer fair where we play games and eat ice cream!",
  },
];

export const SchoolInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {infoCards.map((card, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow border-2 rounded-3xl bg-white">
          <CardHeader className="flex flex-row items-center space-x-4">
            {card.icon}
            <CardTitle className="text-[#4B3B72] font-bold">{card.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[#6A5E80]">{card.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
