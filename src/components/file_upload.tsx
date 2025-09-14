import { FileText, Upload, X } from "lucide-react";
import { useRef } from "react";

interface FileUploadProps {
  uploadedFile: File | null;
  onFileUpload: (file: File | null) => void;
}

export default function FileUpload({
  uploadedFile,
  onFileUpload,
}: FileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileUpload(file);
    }
  };

  const removeFile = () => {
    onFileUpload(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center transition-colors hover:border-gray-400">
      {uploadedFile ? (
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center">
            <FileText className="text-gray-500 mr-3 w-5 h-5" />
            <span className="text-sm">{uploadedFile.name}</span>
          </div>
          <button
            onClick={removeFile}
            className="text-red-500 hover:text-red-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <div onClick={handleClick} className="cursor-pointer">
          <div className="flex flex-col items-center justify-center">
            <Upload className="w-12 h-12 text-gray-400 mb-2" />
            <p className="text-gray-500 mb-2">
              Drag & Drop your file here or click to browse
            </p>
            <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
              Select File
            </span>
          </div>
        </div>
      )}
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleFileChange}
        accept=".pdf,.doc,.docx,.txt"
      />
    </div>
  );
}
