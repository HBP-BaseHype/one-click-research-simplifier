import { Copy, Download, FileText, Loader } from "lucide-react";

interface ResultDisplayProps {
  isLoading: boolean;
  outputText: string;
}

export default function ResultDisplay({
  isLoading,
  outputText,
}: ResultDisplayProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([outputText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "research_result.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Results</h2>
      <div className="min-h-[300px] bg-white p-4 rounded-lg shadow-inner border-l-4 border-indigo-500">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <Loader className="w-8 h-8 animate-spin text-blue-500" />
          </div>
        ) : outputText ? (
          <div className="whitespace-pre-line text-gray-700 leading-relaxed">
            {outputText}
          </div>
        ) : (
          <div className="text-gray-400 italic flex items-center justify-center h-full">
            <FileText className="w-5 h-5 mr-2" />
            Your processed content will appear here.
          </div>
        )}
      </div>

      {outputText && (
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center"
          >
            <Copy className="w-4 h-4 mr-2" />
            Copy
          </button>
          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </button>
        </div>
      )}
    </div>
  );
}
