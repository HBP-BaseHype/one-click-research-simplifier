import { Zap } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <Zap className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold">ResearchSimplifier</span>
            </div>
            <p className="text-gray-400 mt-2">
              Your one-click research assistant
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {currentYear} ResearchSimplifier. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
