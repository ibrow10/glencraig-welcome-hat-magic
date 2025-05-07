
import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { HOUSES_ARRAY, THEME_COLORS } from "@/lib/constants";
import ErrorBoundary from "@/components/ErrorBoundary";

interface HouseAssignmentProps {
  onClose: () => void;
}

export const HouseAssignment = ({ onClose }: HouseAssignmentProps) => {
  const [sorting, setSorting] = useState(false);
  const [sorted, setSorted] = useState(false);
  const [selectedHouse, setSelectedHouse] = useState<typeof HOUSES_ARRAY[0] | null>(null);
  const [count, setCount] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const finalHouseRef = useRef<typeof HOUSES_ARRAY[0] | null>(null);

  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startSorting = useCallback(() => {
    setSorting(true);
    setCount(0);
    setSelectedHouse(null);
    
    // Pre-determine the final house before animation starts
    const finalHouseIndex = Math.floor(Math.random() * HOUSES_ARRAY.length);
    finalHouseRef.current = HOUSES_ARRAY[finalHouseIndex];
  }, []);

  // Fixed useEffect with proper dependency array and cleanup
  useEffect(() => {
    if (sorting) {
      intervalRef.current = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * HOUSES_ARRAY.length);
        setSelectedHouse(HOUSES_ARRAY[randomIndex]);
        
        setCount((prev) => {
          const newCount = prev + 1;
          // When animation completes, use the pre-determined house
          if (newCount > 10 && finalHouseRef.current) {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
            setSorting(false);
            setSorted(true);
            setSelectedHouse(finalHouseRef.current);
            
            toast({
              title: "House Assignment Complete!",
              description: `Welcome to ${finalHouseRef.current.name} House!`,
            });
          }
          return newCount;
        });
      }, 200);
      
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      };
    }
  }, [sorting]); // Removed count from dependencies to fix the memory leak

  return (
    <ErrorBoundary>
      <div className="flex flex-col items-center text-center">
        {!sorting && !sorted ? (
          <>
            <img 
              src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?auto=format&fit=crop&w=300&h=300" 
              alt="Sorting Hat - A magical hat that will assign you to a school house" 
              className="w-32 h-32 object-cover mb-6 rounded-full animate-bounce border-4 border-[#4B3B72]"
              loading="lazy"
            />
            <p className="mb-6 text-[#4B3B72]">Put on the sorting hat to find out which house you'll be joining at Glencraig Primary School!</p>
            <Button 
              onClick={startSorting} 
              className={`${HOUSES_ARRAY[0].color} ${HOUSES_ARRAY[0].hoverColor} text-white rounded-full px-6`}
              aria-label="Start the house sorting process"
            >
              Put on the Sorting Hat
            </Button>
          </>
        ) : sorting ? (
          <>
            <div className="text-2xl font-bold mb-4 text-[#4B3B72]" aria-live="polite">The hat is thinking...</div>
            <div 
              className="w-32 h-32 rounded-full bg-gray-300 animate-pulse mb-6 flex items-center justify-center border-4 border-[#4B3B72]"
              role="status"
              aria-label="Sorting in progress"
            >
              {selectedHouse && (
                <div className={`w-24 h-24 rounded-full ${selectedHouse.color} animate-pulse`}></div>
              )}
            </div>
            <p className="text-lg italic text-[#6A5E80]">"Hmm, interesting... where to put you..."</p>
          </>
        ) : (
          <>
            <div 
              className="text-2xl font-bold mb-4 text-[#4B3B72]"
              aria-live="assertive"
            >
              {selectedHouse?.name} House!
            </div>
            <div 
              className={`w-32 h-32 rounded-full ${selectedHouse?.color} mb-6 flex items-center justify-center text-white text-3xl font-bold border-4 border-[#4B3B72]`}
              aria-hidden="true"
            >
              {selectedHouse?.name.charAt(0)}
            </div>
            <Card className="mb-6 border-4 rounded-3xl bg-white">
              <CardContent className="pt-6">
                <p className="text-[#6A5E80]">{selectedHouse?.description}</p>
              </CardContent>
            </Card>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="outline" 
                onClick={startSorting} 
                className="rounded-full border-2 border-[#4B3B72] text-[#4B3B72]"
                aria-label="Try the sorting hat again"
              >
                Try Again
              </Button>
              <Button 
                onClick={onClose} 
                className={`${HOUSES_ARRAY[0].color} ${HOUSES_ARRAY[0].hoverColor} text-white rounded-full`}
                aria-label="Close the sorting hat dialog"
              >
                Close
              </Button>
            </div>
          </>
        )}
      </div>
    </ErrorBoundary>
  );
};
