import React from "react";
import styles from "./PromptSuggestions.module.css"; // Ensure this file exists

interface PromptSuggestionsProps {
  onPromptClick: (prompt: string) => void;
}

const PromptSuggestions: React.FC<PromptSuggestionsProps> = ({ onPromptClick }) => {
  const examplePrompts = [
    "What are some applications in Contoso having modernisation gaps?",
    "What are the recommended architectural patterns for modernizing applications at Contoso?",
    "What is the version of Node.js approved in our organisation?",
    "What are the key factors in deciding the best modernisation strategy for an application at Contoso?",
    "How do I determine the best cloud migration strategy for my applications at Contoso?",
    "What tools can I use to scan for outdated dependencies?"
  ];

  return (
    <div className={styles.promptGrid}>
      {examplePrompts.map((prompt, index) => (
        <button 
          key={index} 
          className={styles.promptBox} 
          onClick={() => onPromptClick(prompt)}
        >
          {prompt}
        </button>
      ))}
    </div>
  );
};

export default PromptSuggestions;
