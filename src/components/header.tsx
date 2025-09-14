import { Zap } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-indigo-500 via-blue-600 to-cyan-500 text-white py-6 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8" />
            <h1 className="text-2xl font-bold">ResearchSimplifier</h1>
          </div>
        </div>
      </div>
    </header>
  );
}
