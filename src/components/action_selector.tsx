import { ActionType, Language } from "@/types";
import { FileText, Layers, Globe, Edit, HelpCircle } from "lucide-react";

interface ActionSelectorProps {
  selectedAction: ActionType;
  onActionChange: (action: ActionType) => void;
  targetLanguage: string;
  onLanguageChange: (language: string) => void;
}

const actions = [
  {
    id: "summarize" as const,
    name: "Summarize",
    icon: FileText,
    color: "bg-purple-500",
  },
  {
    id: "simplify" as const,
    name: "Simplify",
    icon: Layers,
    color: "bg-blue-500",
  },
  {
    id: "translate" as const,
    name: "Translate",
    icon: Globe,
    color: "bg-green-500",
  },
  {
    id: "proofread" as const,
    name: "Proofread",
    icon: Edit,
    color: "bg-yellow-500",
  },
  {
    id: "questions" as const,
    name: "Generate Qs",
    icon: HelpCircle,
    color: "bg-red-500",
  },
];

const languages: Language[] = [
  { code: "english", name: "English" },
  { code: "spanish", name: "Spanish" },
  { code: "french", name: "French" },
  { code: "german", name: "German" },
  { code: "chinese", name: "Chinese" },
  { code: "japanese", name: "Japanese" },
  { code: "arabic", name: "Arabic" },
];

export default function ActionSelector({
  selectedAction,
  onActionChange,
  targetLanguage,
  onLanguageChange,
}: ActionSelectorProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Select Action
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {actions.map((action) => (
          <button
            key={action.id}
            onClick={() => onActionChange(action.id)}
            className={`transition-all duration-300 hover:scale-105 ${
              selectedAction === action.id
                ? `${action.color} text-white shadow-lg`
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            } rounded-lg p-3 flex flex-col items-center`}
          >
            <action.icon className="w-6 h-6 mb-1" />
            <span className="text-sm">{action.name}</span>
          </button>
        ))}
      </div>

      {selectedAction === "translate" && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Target Language
          </label>
          <select
            value={targetLanguage}
            onChange={(e) => onLanguageChange(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
