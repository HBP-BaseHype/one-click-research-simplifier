import { TabType } from "@/types";
import { Edit2, Link, Upload } from "lucide-react";

interface InputTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const tabs = [
  { id: "text", name: "Paste Text", icon: Edit2 },
  { id: "url", name: "URL", icon: Link },
  { id: "file", name: "Upload File", icon: Upload },
];

export default function InputTabs({ activeTab, onTabChange }: InputTabsProps) {
  return (
    <div className="flex border-b mb-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id as TabType)}
          className={`px-4 py-2 font-medium flex items-center space-x-2 ${
            activeTab === tab.id
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          <tab.icon className="w-4 h-4" />
          <span>{tab.name}</span>
        </button>
      ))}
    </div>
  );
}
