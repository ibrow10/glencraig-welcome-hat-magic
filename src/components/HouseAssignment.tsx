
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

const houses = [
  { 
    name: "Phoenix", 
    color: "bg-red-500", 
    description: "Known for courage and determination. Phoenix house members are always ready for a challenge!" 
  },
  { 
    name: "Unicorn", 
    color: "bg-blue-500", 
    description: "Celebrated for creativity and imagination. Unicorn house loves art, music and storytelling!" 
  },
  { 
    name: "Dragon", 
    color: "bg-green-500", 
    description: "Famous for leadership and strength. Dragon house excels in sports and outdoor activities!" 
  },
  { 
    name: "Griffin", 
    color: "bg-yellow-500", 
    description: "Noted for wisdom and kindness. Griffin house members are great at helping others!" 
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
            className="w-32 h-32 object-cover mb-6 rounded-full animate-bounce"
          />
          <p className="mb-6">Put on the sorting hat to find out which house you'll be joining at Glencraig Primary School!</p>
          <Button onClick={startSorting} className="bg-[#FEC6A1] hover:bg-[#FEC6A1]/90 text-black">
            Put on the Sorting Hat
          </Button>
        </>
      ) : sorting ? (
        <>
          <div className="text-2xl font-bold mb-4">The hat is thinking...</div>
          <div className="w-32 h-32 rounded-full bg-gray-300 animate-pulse mb-6 flex items-center justify-center">
            {selectedHouse && (
              <div className={`w-24 h-24 rounded-full ${selectedHouse.color} animate-pulse`}></div>
            )}
          </div>
          <p className="text-lg italic">"Hmm, interesting... where to put you..."</p>
        </>
      ) : (
        <>
          <div className="text-2xl font-bold mb-4">
            {selectedHouse?.name} House!
          </div>
          <div className={`w-32 h-32 rounded-full ${selectedHouse?.color} mb-6 flex items-center justify-center text-white text-3xl font-bold`}>
            {selectedHouse?.name.charAt(0)}
          </div>
          <Card className={`mb-6 border-4 border-${selectedHouse?.color.replace('bg-', '')}`}>
            <CardContent className="pt-6">
              <p>{selectedHouse?.description}</p>
            </CardContent>
          </Card>
          <div className="flex space-x-4">
            <Button variant="outline" onClick={startSorting}>Try Again</Button>
            <Button onClick={onClose}>Close</Button>
          </div>
        </>
      )}
    </div>
  );
};
