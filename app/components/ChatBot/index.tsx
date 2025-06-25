"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  id: string;
  text: string;
  isUser: boolean;
};

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Hello! How can I help you today?", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const fetchBedrockResponse = async (userQuery: string) => {
    try {
      // Make API call to AWS Bedrock endpoint
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Barin",
          message: userQuery,
        }),
      });

      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
      }

      const data = await response.json();
      return data || "I'm sorry, I couldn't process your request.";
    } catch (error) {
      console.error("Error fetching response from AWS Bedrock:", error);
      return "Sorry, I encountered an error while processing your request.";
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Get response from AWS Bedrock API
      const aiResponse = await fetchBedrockResponse(userMessage.text);

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
      };
      console.log("AI Response:", aiResponse);
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error in chat flow:", error);

      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I encountered an error while processing your request.",
        isUser: false,
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col rounded-lg shadow-xl bg-white max-w-[400px] w-full sm:w-96 max-h-[600px] border border-gray-200">
      {/* Chat header */}
      <div className="bg-black text-white px-4 py-3 rounded-t-lg flex justify-between items-center">
        <h3 className="font-medium text-sm">AI Assistant</h3>
        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-500 text-white text-xs">
          AI
        </span>
      </div>

      {/* Messages container */}
      <div className="flex-1 p-4 overflow-y-auto max-h-[400px] flex flex-col space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`${
              message.isUser
                ? "ml-auto bg-black text-white"
                : "mr-auto bg-gray-100 text-gray-800"
            } rounded-lg px-4 py-2 max-w-[80%] break-words`}
          >
            {message.text}
          </div>
        ))}

        {/* Loading indicator */}
        {isLoading && (
          <div className="mr-auto bg-gray-100 text-gray-800 rounded-lg px-4 py-2">
            <div className="flex space-x-1">
              <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              ></div>
              <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              ></div>
              <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              ></div>
            </div>
          </div>
        )}

        {/* Auto-scroll anchor */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <form
        onSubmit={handleSendMessage}
        className="border-t border-gray-200 p-3 flex items-center"
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="flex-1 py-2 px-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
        />
        <button
          type="submit"
          className="bg-black text-white rounded-r-lg px-4 py-2 font-medium hover:bg-gray-800"
          disabled={isLoading}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatBot;
