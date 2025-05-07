
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {infoCards.map((card, index) => (
          <Card 
            key={index} 
            className="hover:shadow-lg transition-shadow border-2 rounded-3xl bg-white focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-white focus-within:ring-[#4B3B72]"
          >
            <CardHeader className="flex flex-row items-center space-x-4">
              <div className={`${card.iconColor} p-2 rounded-full`}>
                {card.icon}
              </div>
              <CardTitle className={`text-${THEME_COLORS.primary} font-bold`}>{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-${THEME_COLORS.secondary}`}>{card.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </ErrorBoundary>
  );
};
