import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{
    id: 1,
    text: "Hi! I'm Grid2Chip's AI assistant. I can help you learn about our data center solutions. What would you like to know?",
    isBot: true,
    timestamp: new Date()
  }]);
  const [inputValue, setInputValue] = useState("");
  const quickResponses = ["Tell me about AI-ready data centers", "What solutions do you offer?", "Schedule a demo", "Pricing information"];
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thank you for your question! Our team specializes in AI-ready infrastructure. Would you like to schedule a demo to see our solutions in action?",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };
  const handleQuickResponse = (response: string) => {
    setInputValue(response);
  };
  return <>
      {/* Chat Toggle Button */}
      <Button onClick={() => setIsOpen(!isOpen)} variant="hero" size="lg" className={cn("fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 shadow-lg ai-pulse", isOpen && "rotate-180")}>
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && <Card className="fixed bottom-24 right-4 left-4 sm:left-auto sm:right-6 sm:w-96 h-[70vh] sm:h-[500px] z-40 bg-card border-primary/20 ai-glow animate-slide-up">
          <CardHeader className="bg-gradient-ai text-navy-deep">
            <CardTitle className="flex items-center space-x-2">
              <Bot className="h-5 w-5" />
              <span>Grid2Chip Assistant</span>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-[calc(70vh-80px)] sm:h-[calc(500px-80px)]">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map(message => <div key={message.id} className={cn("flex", message.isBot ? "justify-start" : "justify-end")}>
                  <div className={cn("max-w-[80%] rounded-lg p-3 text-sm", message.isBot ? "bg-primary/10 text-foreground" : "bg-primary text-primary-foreground")}>
                    {message.text}
                  </div>
                </div>)}
            </div>

            {/* Quick Responses */}
            <div className="p-4 border-t border-primary/20">
              <div className="grid grid-cols-1 gap-2 mb-4">
                {quickResponses.map((response, index) => <Button key={index} variant="ghost" size="sm" onClick={() => handleQuickResponse(response)} className="justify-start text-left h-auto py-2 px-3 text-xs text-primary">
                    {response}
                  </Button>)}
              </div>

              {/* Input */}
              <div className="flex space-x-2">
                <Input value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Type your message..." onKeyPress={e => e.key === 'Enter' && handleSendMessage()} className="flex-1" />
                <Button onClick={handleSendMessage} size="icon" variant="hero">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>}
    </>;
};
export default ChatBot;