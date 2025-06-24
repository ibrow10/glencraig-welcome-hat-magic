
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BookOpen, Users, House, CircleCheck } from "lucide-react";
import { HOUSES, THEME_COLORS } from "@/lib/constants";
import ErrorBoundary from "@/components/ErrorBoundary";
import { useState } from "react";

interface InfoCard {
  title: string;
  icon: React.ReactNode;
  description: string;
  iconColor: string;
  detailedContent: string;
}

const infoCards: InfoCard[] = [
  {
    title: "Our School",
    icon: <BookOpen className="h-10 w-10" />,
    iconColor: HOUSES.Sharks.color,
    description: "We have small classes with friendly teachers who make learning fun! Every classroom has a reading corner and lots of art on the walls.",
    detailedContent: "Welcome to our amazing school! Our classrooms are bright and colorful, filled with student artwork and cozy reading nooks. Each class has only 25 students, so teachers can give everyone special attention. We have a fantastic library with thousands of books, a computer lab with the latest technology, and science labs where we do exciting experiments. Our playground has climbing frames, football pitches, and quiet areas for reading. The school garden lets us grow our own vegetables, and we even have chickens! Every corridor displays our creative work, making the whole school feel like an art gallery."
  },
  {
    title: "Our Buddies",
    icon: <Users className="h-10 w-10" />,
    iconColor: HOUSES.Foxes.color,
    description: "Everyone is kind and welcoming at Glencraig. The older students help the younger ones, and we have a buddy system for new starters.",
    detailedContent: "Our buddy system is one of the best parts of Glencraig! Every new student gets paired with a P6 or P7 buddy who shows them around, helps them find their classrooms, and sits with them at lunch. We have special buddy activities like reading together, playing games at break time, and working on fun projects. The older students teach the younger ones playground games and help them with their shoelaces or opening their lunch boxes. It's amazing how quickly friendships form! Many buddies stay friends even after they move to different schools. We also have peer mediators who help solve any playground problems with kindness and understanding."
  },
  {
    title: "Our Houses",
    icon: <House className="h-10 w-10" />,
    iconColor: HOUSES.Snakes.color,
    description: "There are four houses: Sharks (Blue), Foxes (Red), Snakes (Green), and Yellow Hammers (Yellow). We earn house points for good work, kindness, and helping others.",
    detailedContent: "Our house system brings everyone together! Sharks are known for their determination and strength, Foxes for their cunning and adaptability, Snakes for their wisdom and cleverness, and Yellow Hammers for their joy and creativity. You can earn house points by being kind to others, completing excellent work, helping teachers, showing good manners, and representing our school values. Every Friday, we announce the weekly house point totals in assembly - it's so exciting! We have inter-house competitions like sports day, quiz competitions, art contests, and even cooking challenges. At the end of each term, the winning house gets a special celebration party with games, music, and treats!"
  },
  {
    title: "Our Activities",
    icon: <CircleCheck className="h-10 w-10" />,
    iconColor: HOUSES.YellowHammers.color,
    description: "We have lots of fun clubs after school, sports days, school trips, and a big summer fair where we play games and eat ice cream!",
    detailedContent: "There's never a dull moment at Glencraig! Our after-school clubs include football, netball, choir, drama, art, coding, chess, and science experiments. We go on amazing school trips - last year we visited the Ulster Museum, went to the beach for geography fieldwork, and even had a camping trip! Our annual sports day is legendary with relay races, egg-and-spoon races, and the famous teachers vs. students tug-of-war. The summer fair is the highlight of the year with bouncy castles, face painting, a talent show, games stalls, and the best ice cream van in Ulster! We also have Christmas concerts, Easter egg hunts, World Book Day dress-ups, and special themed weeks like Science Week and Arts Week."
  },
];

export const SchoolInfo = () => {
  const [selectedCard, setSelectedCard] = useState<InfoCard | null>(null);

  return (
    <ErrorBoundary>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {infoCards.map((card, index) => (
          <Card 
            key={index} 
            onClick={() => setSelectedCard(card)}
            className="hover:shadow-2xl transition-all duration-300 border border-gray-600 rounded-2xl bg-gray-900/80 backdrop-blur-sm hover:bg-gray-800/90 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-800 focus-within:ring-emerald-500 cursor-pointer transform hover:scale-105"
          >
            <CardHeader className="flex flex-row items-center space-x-6 pb-4">
              <div className={`${card.iconColor} p-3 rounded-xl shadow-lg`}>
                {card.icon}
              </div>
              <CardTitle className="text-white font-bold text-xl">{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-lg leading-relaxed">{card.description}</p>
              <p className="text-emerald-400 text-sm mt-3 font-medium">Click to learn more →</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Content Dialog */}
      <Dialog open={!!selectedCard} onOpenChange={() => setSelectedCard(null)}>
        <DialogContent className="sm:max-w-2xl rounded-2xl border border-gray-700 bg-gray-800 max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center space-x-4 mb-4">
              {selectedCard && (
                <div className={`${selectedCard.iconColor} p-3 rounded-xl shadow-lg`}>
                  {selectedCard.icon}
                </div>
              )}
              <DialogTitle className="text-white text-2xl font-bold">
                {selectedCard?.title}
              </DialogTitle>
            </div>
            <DialogDescription className="text-gray-300 text-lg leading-relaxed">
              {selectedCard?.detailedContent}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </ErrorBoundary>
  );
};
