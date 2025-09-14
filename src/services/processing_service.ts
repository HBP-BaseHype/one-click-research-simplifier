import { ActionType } from "@/types";

export class ProcessingService {
  static async processContent(
    text: string,
    action: ActionType,
    targetLanguage?: string
  ): Promise<string> {
    const trimmedText = text.trim();
    if (!trimmedText) {
      return Promise.reject("No input text provided");
    }
  
    switch (action) {
      case "summarize":
        return this.runSummariser(trimmedText);
      case "simplify":
        return Promise.resolve(`Explanation: This is a simplified explanation of the provided text.`);
      case "translate":
        if (!targetLanguage) {
          return Promise.reject("No target language provided for translation");
        }
        return Promise.resolve(`Translation (${targetLanguage}): This is the translated text.`);
      case "proofread":
        return Promise.resolve(`Proofread: This is the proofread version of the provided text.`);
      case "questions":
        return Promise.resolve(`Questions: Here are some questions based on the provided text.`);
      default:
        return Promise.reject(`Unknown action: ${action}`);
    }
  }

  private static async runSummariser(text: string): Promise<string> {
    if ('Summarizer' in self) {
      const availability = await Summarizer.availability();
      if (availability === "unavailable") {
        return Promise.reject(`Summarizer not available: ${availability.reason}`);
      }

      const summarizer = await Summarizer.create({ 
        expectedContextLanguage: ["en"],
        expectedInputLanguage: ["en"],
        outputLanguage: "en",
        format: "plain-text",
        length: "medium",	
        type: "key-points" 
      });

      const result = await summarizer.summarize(text);
      return result;

    } else {
      return Promise.reject("Summarizer API is not available in this environment.");
    }
  }

  static async readFileContent(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target?.result as string);
      };
      reader.onerror = () => {
        reject(new Error('Failed to read file'));
      };
      reader.readAsText(file);
    });
  }

  static async fetchUrlContent(url: string): Promise<string> {
    // In a real implementation, this would be handled by a backend API
    // to avoid CORS issues
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Content from ${url}: This would be the actual content fetched from the provided URL.`);
      }, 1000);
    });
  }
}
