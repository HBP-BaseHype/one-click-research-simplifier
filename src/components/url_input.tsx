interface UrlInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function UrlInput({ value, onChange }: UrlInputProps) {
  return (
    <div>
      <input
        type="url"
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        placeholder="Enter URL of the research material..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
