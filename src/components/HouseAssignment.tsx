
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

const houses = [
  { 
    name: "Eagles", 
    color: "bg-[#33C3F0]", 
    description: "Known for wisdom and creativity. Eagles house members soar high with imagination and clever ideas!" 
  },
  { 
    name: "Falcons", 
    color: "bg-[#ea384c]", 
    description: "Celebrated for courage and determination. Falcons house members are always ready to take on a challenge!" 
  },
  { 
    name: "Hawks", 
    color: "bg-[#4CAF50]", 
    description: "Famous for leadership and kindness. Hawks house excels in helping others and working together as a team!" 
  },
  { 
    name: "Owls", 
    color: "bg-[#FFD700]", 
    description: "Noted for wisdom and creativity. Owls house members are great at solving problems and coming up with new ideas!" 
  },
];

interface HouseAssignmentProps {
  onClose: () => void;
}

export const HouseAssignment = ({ onClose }: HouseAssignmentProps) => {
  const [sorting, setSorting] = useState(false);
  const [sorted, setSorted] = useState(false);
  const [selectedHouse, setSelectedHouse] = useState<(typeof houses)[0] | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (sorting) {
      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * houses.length);
        setSelectedHouse(houses[randomIndex]);
        setCount((prev) => prev + 1);
        
        if (count > 10) {
          clearInterval(interval);
          setSorting(false);
          setSorted(true);
          toast({
            title: "House Assignment Complete!",
            description: `Welcome to ${houses[randomIndex].name} House!`,
          });
        }
      }, 200);
      
      return () => clearInterval(interval);
    }
  }, [sorting, count]);

  const startSorting = () => {
    setSorting(true);
    setCount(0);
    setSelectedHouse(null);
  };

  return (
    <div className="flex flex-col items-center text-center">
      {!sorting && !sorted ? (
        <>
          <img 
            src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?auto=format&fit=crop&w=300&h=300" 
            alt="Sorting Hat" 
            className="w-32 h-32 object-cover mb-6 rounded-full animate-bounce border-4 border-[#4B3B72]"
          />
          <p className="mb-6 text-[#4B3B72]">Put on the sorting hat to find out which house you'll be joining at Glencraig Primary School!</p>
          <Button onClick={startSorting} className="bg-[#33C3F0] hover:bg-[#33C3F0]/90 text-white rounded-full px-6">
            Put on the Sorting Hat
          </Button>
        </>
      ) : sorting ? (
        <>
          <div className="text-2xl font-bold mb-4 text-[#4B3B72]">The hat is thinking...</div>
          <div className="w-32 h-32 rounded-full bg-gray-300 animate-pulse mb-6 flex items-center justify-center border-4 border-[#4B3B72]">
            {selectedHouse && (
              <div className={`w-24 h-24 rounded-full ${selectedHouse.color} animate-pulse`}></div>
            )}
          </div>
          <p className="text-lg italic text-[#6A5E80]">"Hmm, interesting... where to put you..."</p>
        </>
      ) : (
        <>
          <div className="text-2xl font-bold mb-4 text-[#4B3B72]">
            {selectedHouse?.name} House!
          </div>
          <div className={`w-32 h-32 rounded-full ${selectedHouse?.color} mb-6 flex items-center justify-center text-white text-3xl font-bold border-4 border-[#4B3B72]`}>
            {selectedHouse?.name.charAt(0)}
          </div>
          <Card className="mb-6 border-4 rounded-3xl bg-white">
            <CardContent className="pt-6">
              <p className="text-[#6A5E80]">{selectedHouse?.description}</p>
            </CardContent>
          </Card>
          <div className="flex space-x-4">
            <Button variant="outline" onClick={startSorting} className="rounded-full border-2 border-[#4B3B72] text-[#4B3B72]">Try Again</Button>
            <Button onClick={onClose} className="bg-[#33C3F0] hover:bg-[#33C3F0]/90 text-white rounded-full">Close</Button>
          </div>
        </>
      )}
    </div>
  );
};
