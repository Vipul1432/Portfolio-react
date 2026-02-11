import { GoogleGenAI } from '@google/genai';

const SYSTEM_PROMPT = `You are an AI assistant for this portfolio website. Your responses should:
1. Draw information solely from the content available on this portfolio
2. Provide accurate and relevant details about projects, services, and work processes
3. Focus on offering insights and explaining specific works
4. Guide users through the portfolio content
5. If unsure about something, clearly state that you can only provide information available in the portfolio
Please maintain a professional and helpful tone while staying within these constraints.`;

class GeminiService {
    constructor() {
        this.client = null;
        this.isRateLimited = false;
        this.rateLimitTimer = null;
        this.RATE_LIMIT_DELAY = 60000; // 1 minute
    }

    initialize(apiKey) {
        if (!apiKey || apiKey === 'your_api_key_here') {
            console.error('Gemini API key is required');
            return false;
        }

        try {
            // Initialize the new SDK client
            this.client = new GoogleGenAI({ apiKey: apiKey });
            console.log('Gemini AI initialized successfully with NEW SDK');
            return true;
        } catch (error) {
            console.error('Failed to initialize Gemini AI:', error);
            return false;
        }
    }

    handleRateLimit() {
        this.isRateLimited = true;
        if (this.rateLimitTimer) {
            clearTimeout(this.rateLimitTimer);
        }
        this.rateLimitTimer = setTimeout(() => {
            this.isRateLimited = false;
        }, this.RATE_LIMIT_DELAY);
    }

    async sendMessage(userMessage) {
        if (!this.client) {
            throw new Error('Gemini AI not initialized. Please provide an API key.');
        }

        if (this.isRateLimited) {
            throw new Error('RATE_LIMITED');
        }

        try {
            const prompt = `${SYSTEM_PROMPT}\n\nUser Question: ${userMessage}`;

            // Use the new SDK's generate method
            const response = await this.client.models.generateContent({
                model: 'gemini-2.0-flash',
                contents: prompt
            });

            const text = response.text;

            if (!text) {
                throw new Error('Empty response received');
            }

            return text;
        } catch (error) {
            console.error('Gemini API Error:', error);

            // Check for rate limiting
            if (error.message?.includes('429') || error.status === 429 || error.message?.includes('quota')) {
                this.handleRateLimit();
                throw new Error('RATE_LIMITED');
            }

            // Check for API key issues
            if (error.message?.includes('API_KEY') || error.message?.includes('API key') || error.status === 400) {
                throw new Error('API key invalid or not configured properly');
            }

            // Check for safety/content filter
            if (error.message?.includes('SAFETY')) {
                throw new Error('SAFETY');
            }

            // Re-throw with original message for debugging
            throw new Error(error.message || 'Failed to get response from Gemini AI');
        }
    }
}

// Export singleton instance
export const geminiService = new GeminiService();
