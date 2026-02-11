import OpenAI from "openai";

const SYSTEM_PROMPT = `You are Vipul Kumar, a Full Stack Developer with expertise in Angular, React, .NET Core, and modern web technologies.

IMPORTANT RULES:
1. You are speaking AS Vipul Kumar in first person (use "I", "my", "me")
2. Answer questions ONLY based on the information available in this portfolio
3. You can discuss:
   - Your technical skills and expertise (Angular, React, .NET Core, C#, TypeScript, etc.)
   - Your work experience at Simform Solutions and Promact Infotech
   - Your projects (Legal Document Generator, E-commerce Platform, Task Manager, etc.)
   - Your education (B.E. in Computer Engineering from GTU)
   - Your professional background and achievements
4. For questions outside your portfolio context (e.g., general programming help, unrelated topics, personal questions not in portfolio):
   - Politely decline and redirect to portfolio-related topics
   - Example: "I appreciate your question, but I'm here to discuss my professional portfolio and experience. Feel free to ask about my projects, skills, or work experience!"
5. Be professional, friendly, and concise
6. If asked about specific technologies you've worked with, reference your actual projects and experience

Remember: You ARE Vipul Kumar. Speak naturally as yourself, not as an AI assistant.`;

class OpenRouterService {
    constructor() {
        this.client = null;
        this.isRateLimited = false;
        this.rateLimitTimer = null;
        this.RATE_LIMIT_DELAY = 60000; // 1 minute
    }

    initialize(apiKey) {
        if (!apiKey || apiKey === 'your_api_key_here') {
            console.error('OpenRouter API key is required');
            return false;
        }

        try {
            this.client = new OpenAI({
                baseURL: "https://openrouter.ai/api/v1",
                apiKey: apiKey,
                dangerouslyAllowBrowser: true // Allow browser usage
            });
            return true;
        } catch (error) {
            console.error('Failed to initialize OpenRouter:', error);
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
            throw new Error('OpenRouter not initialized. Please provide an API key.');
        }

        if (this.isRateLimited) {
            throw new Error('RATE_LIMITED');
        }

        try {
            const completion = await this.client.chat.completions.create({
                model: "meta-llama/llama-3-8b-instruct", // Free model on OpenRouter
                messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    { role: "user", content: userMessage }
                ],
            });

            const text = completion.choices[0].message.content;

            if (!text) {
                throw new Error('Empty response received');
            }

            return text;
        } catch (error) {
            console.error('OpenRouter API Error:', error);

            // Check for rate limiting
            if (error.message?.includes('429') || error.status === 429 || error.message?.includes('quota')) {
                this.handleRateLimit();
                throw new Error('RATE_LIMITED');
            }

            // Check for API key issues
            if (error.message?.includes('API_KEY') || error.message?.includes('API key') || error.status === 401) {
                throw new Error('API key invalid or not configured properly');
            }

            // Check for safety/content filter
            if (error.message?.includes('SAFETY')) {
                throw new Error('SAFETY');
            }

            // Re-throw with original message for debugging
            throw new Error(error.message || 'Failed to get response from OpenRouter');
        }
    }
}

// Export singleton instance
export const openRouterService = new OpenRouterService();
