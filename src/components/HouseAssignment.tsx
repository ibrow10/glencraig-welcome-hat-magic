
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
  }, [sorting]);

  return (
    <ErrorBoundary>
      <div className="flex flex-col items-center text-center bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl border-4 border-gray-600 shadow-2xl">
        {!sorting && !sorted ? (
          <>
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-lg opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=300&h=300" 
                alt="Sorting Dog - A magical dog that will assign you to a school house" 
                className="relative w-32 h-32 object-cover rounded-full animate-bounce border-4 border-purple-400 shadow-2xl"
                loading="lazy"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-lg">The Glencraig Sorting Dog</h3>
            <p className="mb-6 text-gray-200 text-lg max-w-md leading-relaxed">Meet our sorting dog to find out which house you'll be joining at Glencraig Primary School!</p>
            <Button 
              onClick={startSorting} 
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-lg rounded-xl px-8 py-4 shadow-2xl border-2 border-emerald-400 transition-all duration-200 hover:scale-105"
              aria-label="Start the house sorting process"
            >
              Try the Sorting Dog
            </Button>
          </>
        ) : sorting ? (
          <>
            <div className="text-3xl font-bold mb-6 text-white drop-shadow-lg" aria-live="polite">
              🎮 The dog is thinking...
            </div>
            <div 
              className="relative w-36 h-36 rounded-full bg-gray-700 mb-6 flex items-center justify-center border-4 border-gray-500 shadow-2xl"
              role="status"
              aria-label="Sorting in progress"
            >
              <div className="absolute inset-0 rounded-full animate-spin bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 opacity-50"></div>
              {selectedHouse && (
                <div className={`relative w-28 h-28 rounded-full ${selectedHouse.color} animate-pulse border-2 border-white shadow-lg`}></div>
              )}
            </div>
            <p className="text-xl text-gray-200 font-medium bg-black/30 px-6 py-3 rounded-xl border border-gray-600">
              "Woof! Hmm, interesting... where to put you..."
            </p>
          </>
        ) : (
          <>
            <div className="text-4xl font-bold mb-6 text-white drop-shadow-lg animate-bounce" aria-live="assertive">
              🏆 {selectedHouse?.name} House!
            </div>
            <div 
              className={`w-36 h-36 rounded-xl ${selectedHouse?.color} mb-6 flex items-center justify-center text-white text-5xl font-bold border-4 border-white shadow-2xl transform hover:scale-105 transition-transform`}
              aria-hidden="true"
              style={{ imageRendering: 'pixelated' }}
            >
              {selectedHouse?.name.charAt(0)}
            </div>
            <Card className="mb-6 border-4 border-gray-600 rounded-2xl bg-gray-800/90 backdrop-blur-sm shadow-2xl max-w-md">
              <CardContent className="pt-6">
                <p className="text-gray-200 text-lg leading-relaxed font-medium">{selectedHouse?.description}</p>
              </CardContent>
            </Card>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="outline" 
                onClick={startSorting} 
                className="bg-gray-700/80 border-2 border-gray-500 text-white hover:bg-gray-600 hover:border-gray-400 font-bold text-lg rounded-xl px-6 py-3 shadow-lg transition-all duration-200"
                aria-label="Try the sorting dog again"
              >
                Try Again
              </Button>
              <Button 
                onClick={onClose} 
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-lg rounded-xl px-6 py-3 shadow-lg border-2 border-blue-400 transition-all duration-200 hover:scale-105"
                aria-label="Close the sorting dog dialog"
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
