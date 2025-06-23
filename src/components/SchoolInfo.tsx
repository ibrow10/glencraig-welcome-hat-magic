
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, House, CircleCheck } from "lucide-react";
import { HOUSES, THEME_COLORS } from "@/lib/constants";
import ErrorBoundary from "@/components/ErrorBoundary";

interface InfoCard {
  title: string;
  icon: React.ReactNode;
  description: string;
  iconColor: string;
}

const infoCards: InfoCard[] = [
  {
    title: "Our School",
    icon: <BookOpen className="h-10 w-10" />,
    iconColor: HOUSES.Eagles.color,
    description: "We have small classes with friendly teachers who make learning fun! Every classroom has a reading corner and lots of art on the walls.",
  },
  {
    title: "Our Buddies",
    icon: <Users className="h-10 w-10" />,
    iconColor: HOUSES.Falcons.color,
    description: "Everyone is kind and welcoming at Glencraig. The older students help the younger ones, and we have a buddy system for new starters.",
  },
  {
    title: "Our Houses",
    icon: <House className="h-10 w-10" />,
    iconColor: HOUSES.Hawks.color,
    description: "There are four houses: Eagles (Blue), Falcons (Red), Hawks (Green), and Owls (Yellow). We earn house points for good work, kindness, and helping others.",
  },
  {
    title: "Our Activities",
    icon: <CircleCheck className="h-10 w-10" />,
    iconColor: HOUSES.Owls.color,
    description: "We have lots of fun clubs after school, sports days, school trips, and a big summer fair where we play games and eat ice cream!",
  },
];

export const SchoolInfo = () => {
  return (
    <ErrorBoundary>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {infoCards.map((card, index) => (
          <Card 
            key={index} 
            className="hover:shadow-2xl transition-all duration-300 border border-gray-600 rounded-2xl bg-gray-900/80 backdrop-blur-sm hover:bg-gray-800/90 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-800 focus-within:ring-emerald-500"
          >
            <CardHeader className="flex flex-row items-center space-x-6 pb-4">
              <div className={`${card.iconColor} p-3 rounded-xl shadow-lg`}>
                {card.icon}
              </div>
              <CardTitle className="text-white font-bold text-xl">{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-lg leading-relaxed">{card.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </ErrorBoundary>
  );
};
