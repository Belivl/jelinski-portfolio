import { GoldButton } from '@/components/ui/GoldButton';

export function GoldButtonDemo() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center gap-12 p-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">Gold Button Demo</h1>
        <p className="text-gray-400 max-w-md mx-auto">
          Interactive 3D gold effect with radial waves, anisotropic reflections, and mouse-responsive lighting.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col items-center gap-4">
          <GoldButton>
            Contact Me
          </GoldButton>
          <span className="text-gray-500 text-sm">Default Size</span>
        </div>

        <div className="flex flex-col items-center gap-4">
          <GoldButton className="w-40 h-40 text-lg">
            Book Now
          </GoldButton>
          <span className="text-gray-500 text-sm">Smaller Size</span>
        </div>
      </div>
      
       <div className="flex flex-col items-center gap-4">
          <GoldButton className="w-96 h-96 text-4xl">
            Portfolio
          </GoldButton>
          <span className="text-gray-500 text-sm">Large Size</span>
        </div>
    </div>
  );
}
