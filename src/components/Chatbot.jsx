import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Loader } from 'lucide-react';
import { geminiService } from '../services/geminiService';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        // Initialize Gemini AI
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
        if (apiKey) {
            const initialized = geminiService.initialize(apiKey);
            setIsInitialized(initialized);
        }

        // Add welcome message
        setMessages([
            {
                content:
                    "Hello! I'm your AI assistant for this portfolio. I can help you learn more about the projects, skills, and experience showcased here. What would you like to know?",
                isUser: false,
                timestamp: new Date(),
            },
        ]);
    }, []);

    useEffect(() => {
        // Scroll to bottom when messages change
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = async () => {
        if (!userInput.trim() || isLoading) return;

        if (!isInitialized) {
            setMessages((prev) => [
                ...prev,
                {
                    content: 'Chatbot is not configured. Please add your Gemini API key to the .env file.',
                    isUser: false,
                    timestamp: new Date(),
                },
            ]);
            return;
        }

        // Add user message
        const newUserMessage = {
            content: userInput,
            isUser: true,
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, newUserMessage]);

        const currentInput = userInput;
        setUserInput('');
        setIsLoading(true);

        try {
            const response = await geminiService.sendMessage(currentInput);
            setMessages((prev) => [
                ...prev,
                {
                    content: response,
                    isUser: false,
                    timestamp: new Date(),
                },
            ]);
        } catch (error) {
            console.error('Error sending message:', error);

            let errorMessage = 'I apologize, but I encountered a technical issue. Please try rephrasing your question or try again in a moment.';

            if (error.message === 'RATE_LIMITED') {
                errorMessage = "I apologize, but I've reached my request limit. Please try again in about a minute.";
            }

            setMessages((prev) => [
                ...prev,
                {
                    content: errorMessage,
                    isUser: false,
                    timestamp: new Date(),
                },
            ]);
        }

        setIsLoading(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <>
            {/* Chat Window */}
            {isChatOpen && (
                <div className="fixed bottom-24 right-4 md:right-8 w-80 md:w-96 h-[500px] bg-light-surface dark:bg-dark-surface rounded-lg shadow-2xl flex flex-col z-50 border border-light-border dark:border-dark-border">
                    {/* Header */}
                    <div className="bg-brand-accent text-white p-4 rounded-t-lg flex justify-between items-center">
                        <div className="flex items-center">
                            <MessageCircle size={20} className="mr-2" />
                            <span className="font-semibold">AI Assistant</span>
                        </div>
                        <button
                            onClick={toggleChat}
                            className="hover:bg-brand-accent-hover rounded-full p-1 transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-lg ${message.isUser
                                            ? 'bg-brand-accent text-white'
                                            : 'bg-light-bg dark:bg-dark-bg text-light-primary dark:text-dark-primary'
                                        }`}
                                >
                                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                                    <span className="text-xs opacity-70 mt-1 block">
                                        {message.timestamp.toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}
                                    </span>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-light-bg dark:bg-dark-bg p-3 rounded-lg">
                                    <Loader className="animate-spin text-brand-accent" size={20} />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t border-light-border dark:border-dark-border">
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Type your message..."
                                className="flex-1 px-4 py-2 rounded-lg bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-primary dark:text-dark-primary focus:outline-none focus:ring-2 focus:ring-brand-accent text-sm"
                                disabled={isLoading}
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={isLoading || !userInput.trim()}
                                className="bg-brand-accent text-white p-2 rounded-lg hover:bg-brand-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Chat Toggle Button */}
            <button
                onClick={toggleChat}
                className="fixed bottom-4 right-4 md:right-8 bg-brand-accent text-white p-4 rounded-full shadow-2xl hover:bg-brand-accent-hover hover:shadow-glow transition-all duration-300 transform hover:scale-110 z-50"
                aria-label="Toggle chat"
            >
                {isChatOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </button>
        </>
    );
};

export default Chatbot;
