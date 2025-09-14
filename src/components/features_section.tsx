import { BookOpen, Clock, Globe } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Save Time",
    description:
      "Get instant summaries and explanations without reading through pages of complex material.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: BookOpen,
    title: "Understand Better",
    description:
      "Technical jargon and complex concepts are broken down into simple, understandable terms.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Globe,
    title: "Multilingual",
    description:
      "Access research in multiple languages with our accurate translation feature.",
    color: "bg-green-100 text-green-600",
  },
];

export default function FeaturesSection() {
  return (
    <div className="mt-12 grid md:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div
            className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center mb-4`}
          >
            <feature.icon className={"w-6 h-6"} />
          </div>
          <h3 className="font-semibold text-lg mb-2 text-gray-800">
            {feature.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
