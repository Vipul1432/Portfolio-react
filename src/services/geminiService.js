import { GoogleGenerativeAI } from '@google/generative-ai';

const SYSTEM_PROMPT = `You are an AI assistant for this portfolio website. Your responses should:
1. Draw information solely from the content available on this portfolio
2. Provide accurate and relevant details about projects, services, and work processes
3. Focus on offering insights and explaining specific works
4. Guide users through the portfolio content
5. If unsure about something, clearly state that you can only provide information available in the portfolio
Please maintain a professional and helpful tone while staying within these constraints.`;

class GeminiService {
    constructor() {
        this.genAI = null;
        this.model = null;
        this.isRateLimited = false;
        this.rateLimitTimer = null;
        this.RATE_LIMIT_DELAY = 60000; // 1 minute
    }

    initialize(apiKey) {
        if (!apiKey) {
            console.error('Gemini API key is required');
            return false;
        }

        try {
            this.genAI = new GoogleGenerativeAI(apiKey);
            this.model = this.genAI.getGenerativeModel({ model: 'gemini-pro' });
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
        if (!this.model) {
            throw new Error('Gemini AI not initialized. Please provide an API key.');
        }

        if (this.isRateLimited) {
            throw new Error('RATE_LIMITED');
        }

        try {
            const prompt = `${SYSTEM_PROMPT}\n\nUser Question: ${userMessage}`;
            const result = await this.model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();

            if (!text) {
                throw new Error('Empty response received');
            }

            return text;
        } catch (error) {
            // Check for rate limiting
            if (error.message?.includes('429') || error.status === 429) {
                this.handleRateLimit();
                throw new Error('RATE_LIMITED');
            }
            throw error;
        }
    }
}

// Export singleton instance
export const geminiService = new GeminiService();
