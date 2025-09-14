interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function TextInput({ value, onChange }: TextInputProps) {
  return (
    <div>
      <textarea
        className="w-full h-40 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-all"
        placeholder="Paste your research text here..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
