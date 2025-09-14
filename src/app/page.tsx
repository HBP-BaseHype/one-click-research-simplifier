"use client";

import ActionSelector from "@/components/action_selector";
import FeaturesSection from "@/components/features_section";
import FileUpload from "@/components/file_upload";
import Footer from "@/components/footer";
import Header from "@/components/header";
import InputTabs from "@/components/input_tabs";
import ProcessButton from "@/components/process_button";
import ResultDisplay from "@/components/result_display";
import TextInput from "@/components/text_input";
import UrlInput from "@/components/url_input";
import { ActionType, TabType } from "@/types";
import { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [selectedAction, setSelectedAction] = useState<ActionType>("summarize");
  const [outputText, setOutputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>("text");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [targetLanguage, setTargetLanguage] = useState("english");

  const handleFileUpload = async (file: File | null) => {
    setUploadedFile(file);
    if (file) {
      try {
        const content = ""; //await ProcessingService.readFileContent(file);
        setInputText(content);
      } catch (error) {
        console.error("Error reading file:", error);
      }
    } else {
      setInputText("");
    }
  };

  const processContent = async () => {
    if ((!inputText && !inputUrl && !uploadedFile) || isLoading) return;

    setIsLoading(true);
    setOutputText("");

    try {
      let contentToProcess = inputText;

      if (activeTab === "url" && inputUrl) {
        contentToProcess = ""; //await ProcessingService.fetchUrlContent(inputUrl);
      }

      const result = ""; /*await ProcessingService.processContent(
        contentToProcess,
        selectedAction,
        targetLanguage
      );*/

      setOutputText(result);
    } catch (error) {
      console.error("Error processing content:", error);
      setOutputText(
        "An error occurred while processing your content. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const hasContent = inputText || inputUrl || uploadedFile;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Input Section */}
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Input Your Research Material
              </h2>

              <InputTabs activeTab={activeTab} onTabChange={setActiveTab} />

              {activeTab == "text" && (
                <TextInput value={inputText} onChange={setInputText} />
              )}

              {activeTab === "url" && (
                <UrlInput value={inputUrl} onChange={setInputUrl} />
              )}

              {activeTab === "file" && (
                <FileUpload
                  uploadedFile={uploadedFile}
                  onFileUpload={handleFileUpload}
                />
              )}
            </div>

            {/* Action Selection */}
            <div className="p-6 border-b">
              <ActionSelector
                selectedAction={selectedAction}
                onActionChange={setSelectedAction}
                targetLanguage={targetLanguage}
                onLanguageChange={setTargetLanguage}
              />
            </div>

            {/* Process Button */}
            <ProcessButton
              isLoading={isLoading}
              disabled={!hasContent}
              onClick={processContent}
            />

            {/* Output Section */}
            <ResultDisplay isLoading={isLoading} outputText={outputText} />
          </div>

          <FeaturesSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
