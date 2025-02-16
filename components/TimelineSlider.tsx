import { Slider } from "@/components/ui/slider";

interface TimelineSliderProps {
  timeSpeed: number;
  setTimeSpeed: (speed: number) => void;
}

export default function TimelineSlider({
  timeSpeed,
  setTimeSpeed,
}: TimelineSliderProps) {
  return (
    <div className="absolute bottom-24 left-0 right-0 flex items-center justify-center">
      <div className="bg-black bg-opacity-50 p-4 rounded-lg w-64">
        <Slider
          min={0.1}
          max={5}
          step={0.1}
          value={[timeSpeed]}
          onValueChange={(value) => setTimeSpeed(value[0])}
        />
        <div className="text-white text-center mt-2">
          Time Speed: {timeSpeed.toFixed(1)}x
        </div>
      </div>
    </div>
  );
}
