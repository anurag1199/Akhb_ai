import React, { useState, useEffect, useRef } from 'react';
import '../styles/Chatbot.css';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [chats, setChats] = useState([]);
  const [currentChatId, setCurrentChatId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const messagesEndRef = useRef(null);

  // Demo bot responses
  const demoResponses = {
    hello: "Hello! 👋 Welcome to AKHB.ai. How can I assist you with your tax and advisory needs today?",
    services: "We offer 6 main services: Entry & Structuring, Tax Controversy, GST & Indirect Tax, Assurance & CFO Support, Forensic & Governance, and AI-enabled Workflows. Which one interests you?",
    tools: "Our AI tools include NoticeScope (tax notice analysis), DraftDesk (draft preparation), Refund360 (refund modeling), and Global Entry Navigator (cross-border structuring).",
    engagement: "We offer 6 engagement models tailored to different needs and budgets. Would you like to know more about a specific model?",
    contact: "You can reach us at hello@akhb.ai or use our contact form. Our team responds within 2-3 business days.",
    pricing: "Our pricing depends on the engagement model and scope of work. Contact us for a personalized quote.",
    help: "I can help you with information about our services, AI tools, engagement models, and more. What would you like to know?",
    default: "That's a great question! For more detailed information, please visit the relevant page or contact our team at hello@akhb.ai. We're here to help!"
  };

  // Load chats from localStorage on mount
  useEffect(() => {
    const savedChats = localStorage.getItem('chatSessions');
    if (savedChats) {
      try {
        const parsedChats = JSON.parse(savedChats);
        setChats(parsedChats);
        // Load the most recent chat
        if (parsedChats.length > 0) {
          const latestChat = parsedChats[0];
          setCurrentChatId(latestChat.id);
          const messagesWithDates = latestChat.messages.map(msg => ({
            ...msg,
            timestamp: new Date(msg.timestamp)
          }));
          setMessages(messagesWithDates);
        }
      } catch (error) {
        console.error('Error loading chat history:', error);
        createNewChat();
      }
    } else {
      createNewChat();
    }
  }, []);

  // Save chats to localStorage whenever they change
  useEffect(() => {
    if (chats.length > 0) {
      localStorage.setItem('chatSessions', JSON.stringify(chats));
    }
  }, [chats]);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const createNewChat = () => {
    const chatId = Date.now();
    const welcomeMessage = {
      id: Date.now(),
      text: "👋 Hello! I'm the AKHB.ai Assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    };
    
    const newChat = {
      id: chatId,
      title: 'Chat ' + new Date().toLocaleDateString(),
      messages: [welcomeMessage],
      createdAt: new Date()
    };
    
    setChats(prev => [newChat, ...prev]);
    setCurrentChatId(chatId);
    setMessages([welcomeMessage]);
    setShowHistory(false);
  };

  const switchChat = (chatId) => {
    const chat = chats.find(c => c.id === chatId);
    if (chat) {
      setCurrentChatId(chatId);
      const messagesWithDates = chat.messages.map(msg => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      }));
      setMessages(messagesWithDates);
      setShowHistory(false);
    }
  };

  const deleteChat = (chatId, e) => {
    e.stopPropagation();
    const updatedChats = chats.filter(c => c.id !== chatId);
    setChats(updatedChats);
    
    if (currentChatId === chatId) {
      if (updatedChats.length > 0) {
        switchChat(updatedChats[0].id);
      } else {
        createNewChat();
      }
    }
  };

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    // Check for keywords
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return demoResponses.hello;
    }
    if (lowerMessage.includes('service')) {
      return demoResponses.services;
    }
    if (lowerMessage.includes('tool') || lowerMessage.includes('ai')) {
      return demoResponses.tools;
    }
    if (lowerMessage.includes('engagement') || lowerMessage.includes('model')) {
      return demoResponses.engagement;
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      return demoResponses.contact;
    }
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('fee')) {
      return demoResponses.pricing;
    }
    if (lowerMessage.includes('help') || lowerMessage.includes('what can')) {
      return demoResponses.help;
    }

    return demoResponses.default;
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputValue('');
    setIsLoading(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      const finalMessages = [...updatedMessages, botResponse];
      setMessages(finalMessages);
      
      // Update the current chat in chats array
      setChats(prevChats => 
        prevChats.map(chat => 
          chat.id === currentChatId 
            ? { ...chat, messages: finalMessages }
            : chat
        )
      );
      
      setIsLoading(false);
    }, 800);
  };

  const clearChat = () => {
    if (window.confirm('Are you sure you want to delete this chat?')) {
      deleteChat(currentChatId, { stopPropagation: () => {} });
    }
  };

  return (
    <div className={`chatbot-container ${isFullscreen ? 'fullscreen-active' : ''}`}>
      {/* Floating Button */}
      <button
        className="chatbot-floating-btn"
        onClick={() => setIsOpen(!isOpen)}
        title="Open Chat"
      >
        <span className="chat-icon">💬</span>
        {!isOpen && <span className="notification-badge"></span>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`chatbot-window ${isMinimized ? 'minimized' : 'expanded'} ${isFullscreen ? 'fullscreen' : ''}`}>
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-title">
              <span className="title-icon">🤖</span>
              <span>AKHB.ai Assistant</span>
            </div>
            <div className="chatbot-controls">
              <button
                className="control-btn"
                onClick={() => setShowHistory(!showHistory)}
                title="Chat History"
              >
                📋
              </button>
              <button
                className="control-btn"
                onClick={() => setIsFullscreen(!isFullscreen)}
                title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              >
                {isFullscreen ? '⛶' : '⛶'}
              </button>
              <button
                className="control-btn"
                onClick={() => setIsMinimized(!isMinimized)}
                title={isMinimized ? 'Expand' : 'Minimize'}
              >
                {isMinimized ? '+' : '−'}
              </button>
              <button
                className="control-btn"
                onClick={() => setIsOpen(false)}
                title="Close"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Messages Area */}
          {!isMinimized && !showHistory && (
            <>
              <div className="chatbot-messages">
                {messages.length === 0 ? (
                  <div className="empty-state">
                    <p>No messages yet. Start a conversation!</p>
                  </div>
                ) : (
                  messages.map(msg => (
                    <div key={msg.id} className={`message ${msg.sender}`}>
                      <div className="message-content">
                        <p>{msg.text}</p>
                        <span className="message-time">
                          {new Date(msg.timestamp).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                    </div>
                  ))
                )}
                {isLoading && (
                  <div className="message bot">
                    <div className="message-content">
                      <div className="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <form className="chatbot-input-area" onSubmit={handleSendMessage}>
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask me anything..."
                    disabled={isLoading}
                    className="chat-input"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !inputValue.trim()}
                    className="send-btn"
                    title="Send message"
                  >
                    ➤
                  </button>
                </div>
                <button
                  type="button"
                  onClick={clearChat}
                  className="clear-btn"
                  title="Delete current chat"
                >
                  Delete Chat
                </button>
              </form>
            </>
          )}

          {/* Chat History */}
          {!isMinimized && showHistory && (
            <div className="chat-history-section">
              <div className="history-header">
                <h3>Chat History</h3>
                <button
                  className="new-chat-btn"
                  onClick={createNewChat}
                  title="Create a new chat"
                >
                  + New Chat
                </button>
              </div>
              <div className="chat-list">
                {chats.length === 0 ? (
                  <div className="empty-state">
                    <p>No chats yet</p>
                  </div>
                ) : (
                  chats.map(chat => (
                    <div
                      key={chat.id}
                      className={`chat-item ${currentChatId === chat.id ? 'active' : ''}`}
                      onClick={() => switchChat(chat.id)}
                    >
                      <div className="chat-item-content">
                        <div className="chat-item-title">{chat.title}</div>
                        <div className="chat-item-preview">
                          {chat.messages.length} messages
                        </div>
                      </div>
                      <button
                        className="delete-chat-btn"
                        onClick={(e) => deleteChat(chat.id, e)}
                        title="Delete chat"
                      >
                        🗑️
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Chatbot;
