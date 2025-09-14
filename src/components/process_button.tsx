import { Loader, Zap } from "lucide-react";

interface ProcessButtonProps {
  isLoading: boolean;
  disabled: boolean;
  onClick: () => void;
}

export default function ProcessButton({
  isLoading,
  disabled,
  onClick,
}: ProcessButtonProps) {
  return (
    <div className="p-6 flex justify-center">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`px-8 py-3 rounded-full text-white font-semibold shadow-lg transition-all duration-300 flex items-center ${
          disabled
            ? "bg-gray-400 cursor-not-allowed"
            : isLoading
            ? "bg-blue-400"
            : "bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 hover:shadow-xl hover:scale-105"
        }`}
      >
        {isLoading ? (
          <>
            <span className="animate-pulse-slow">Processing...</span>
            <Loader className="w-5 h-5 ml-2 animate-spin" />
          </>
        ) : (
          <>
            <Zap className="w-5 h-5 mr-2" />
            Simplify My Research
          </>
        )}
      </button>
    </div>
  );
}
