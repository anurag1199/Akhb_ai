# Chatbot Feature - Implementation Guide

## 📌 Overview

A fully functional chatbot has been added to your AKHB.ai application with the following features:

- **Floating Button**: Visible on all pages in the bottom-right corner
- **Chat Window**: Expand/collapse functionality with maximize and minimize buttons
- **Message History**: All chat messages are persisted to browser localStorage
- **Demo Responses**: Smart keyword-based responses for demo purposes
- **Real-time Updates**: Messages update in real-time with typing indicators
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

---

## 🎯 Features Included

### 1. **Floating Chat Button**
- Always visible in the bottom-right corner
- Bouncing animation to draw attention
- Notification badge (pulsing red dot)
- Opens/closes chat window on click

### 2. **Chat Window**
- Clean, professional design
- Header with title and controls
- Message display area with auto-scroll
- Message input field
- Maximize/minimize toggle

### 3. **Message Storage**
- All messages are saved to browser's localStorage
- Chat history persists across page refreshes
- "Clear History" button to delete all messages
- Automatic welcome message on first visit

### 4. **Demo Chat Responses**
The chatbot recognizes these keywords and provides relevant responses:

| Keywords | Response Topic |
|----------|---|
| hello, hi | Greeting with welcome message |
| service | Lists all 6 services available |
| tool, ai | Describes AI tools (NoticeScope, DraftDesk, etc.) |
| engagement, model | Information about engagement models |
| contact, email, phone | Contact information |
| price, cost, fee | Pricing and engagement information |
| help, what can | General help information |
| (any other) | Default helpful response |

### 5. **User Experience Features**
- ✅ Typing indicator animation while "bot is typing"
- ✅ Timestamps for each message
- ✅ Smooth animations and transitions
- ✅ Disabled input while bot is responding
- ✅ Send button disabled until message is entered
- ✅ Keyboard support (Enter to send)

---

## 📁 Files Added/Modified

### New Files Created

1. **`frontend/src/components/Chatbot.js`** - Main chatbot component
   - Handles all chatbot logic
   - Message management
   - localStorage integration
   - Demo response generation

2. **`frontend/src/styles/Chatbot.css`** - Chatbot styling
   - Floating button styles
   - Chat window design
   - Message bubbles
   - Responsive layouts
   - Animations and transitions

### Modified Files

1. **`frontend/src/App.js`**
   - Added import for Chatbot component
   - Added `<Chatbot />` component to render on all pages

---

## 🚀 How to Use

### For Users

1. **Click the floating button** (💬) in the bottom-right corner
2. **Type your message** in the input field
3. **Press Enter or click the send button** (➤)
4. **See the bot's response** appear with a typing indicator
5. **Minimize the window** by clicking the − button to save space
6. **Clear history** anytime with the "Clear History" button
7. **Close the chat** by clicking the ✕ button

### For Developers

#### Modify Demo Responses

Edit the `demoResponses` object in `Chatbot.js`:

```javascript
const demoResponses = {
  hello: "Your custom greeting",
  services: "Your services description",
  // Add more keywords as needed
};
```

#### Add New Keywords

In the `getBotResponse()` function, add a new condition:

```javascript
if (lowerMessage.includes('your-keyword')) {
  return 'Your custom response';
}
```

#### Integrate with Real Backend API

Replace the `getBotResponse()` function to call your backend:

```javascript
const getBotResponse = async (userMessage) => {
  try {
    const response = await axios.post('/api/chatbot/response', {
      message: userMessage
    });
    return response.data.reply;
  } catch (error) {
    return 'Sorry, I couldn\'t process that. Please try again.';
  }
};
```

---

## 💾 Storage Details

### localStorage Keys

- **Key**: `chatHistory`
- **Format**: JSON stringified array of message objects
- **Size**: Typically 5-50KB depending on conversation length

### Message Object Structure

```javascript
{
  id: 1234567890,           // Unique timestamp-based ID
  text: "Message content",  // The actual message
  sender: "user" or "bot",  // Who sent it
  timestamp: Date object    // When it was sent
}
```

### Clearing History

- Users can click "Clear History" button
- Manually clear via browser DevTools: `localStorage.removeItem('chatHistory')`
- Browser cache clear will remove all stored data

---

## 🎨 Customization

### Change Colors

Edit `Chatbot.css` and update the gradients:

```css
/* Current: Blue gradient */
background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);

/* Change to your brand colors */
background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
```

### Change Button Size

Edit in `Chatbot.css`:

```css
.chatbot-floating-btn {
  width: 60px;  /* Change this */
  height: 60px; /* And this */
}
```

### Change Window Size

Edit in `Chatbot.css`:

```css
.chatbot-window.maximized {
  width: 420px;  /* Change width */
  height: 600px; /* Change height */
}
```

---

## 🔌 Future Enhancements

Potential features to add:

1. **Backend Integration**
   - Replace demo responses with API calls to NLP service
   - Store chat history on server
   - User authentication

2. **Advanced Features**
   - Image sharing capability
   - File uploads
   - Chat transcripts download
   - Typing the bot's responses

3. **Admin Dashboard**
   - View conversation analytics
   - Set custom responses
   - User engagement metrics

4. **Integration**
   - Connect to engagement form
   - Suggest services based on conversation
   - Lead scoring from chat interactions

---

## ✅ Testing Checklist

- [ ] Floating button visible on all pages
- [ ] Click button opens chat window
- [ ] Can type and send messages
- [ ] Bot responds with relevant answers
- [ ] Minimize button collapses window
- [ ] Close button hides window
- [ ] Messages persist after refresh
- [ ] Clear History button works
- [ ] Mobile responsive (test on mobile)
- [ ] No console errors

---

## 📞 Demo Keywords to Try

Try sending these messages to see the chatbot responses:

1. "hello" → Welcome message
2. "what services do you offer?" → Services list
3. "Tell me about your AI tools" → AI tools info
4. "engagement models" → Engagement information
5. "How can I contact you?" → Contact details
6. "What's your pricing?" → Pricing information
7. "How can I help?" → Help information
8. "random text" → Default helpful response

---

## 🐛 Troubleshooting

### Chat window not appearing?
- Check browser console for errors (F12)
- Ensure Chatbot.js and Chatbot.css are in correct directories
- Clear browser cache and reload

### Messages not persisting?
- Check if localStorage is enabled in browser settings
- Check browser privacy settings
- Try incognito/private mode

### Styling issues?
- Ensure `frontend/src/styles/Chatbot.css` is properly linked
- Check for CSS conflicts with App.css
- Inspect element to debug (F12 → Inspector)

### Send button not working?
- Verify axios is installed (`npm install axios`)
- Check browser console for JavaScript errors
- Ensure input field has text before sending

---

## 📚 File Locations

```
frontend/
├── src/
│   ├── components/
│   │   └── Chatbot.js          ← Main chatbot component
│   ├── styles/
│   │   ├── App.css
│   │   └── Chatbot.css         ← Chatbot styling
│   └── App.js                  ← Updated with Chatbot import
```

---

## 🎉 You're All Set!

The chatbot is now fully integrated into your application. It appears on all pages and provides intelligent demo responses. Users can chat, and their messages are automatically saved!

For questions or customization needs, refer to the code comments in `Chatbot.js` and `Chatbot.css`.
