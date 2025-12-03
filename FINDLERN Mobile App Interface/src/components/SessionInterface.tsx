import { useState } from "react";
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  PhoneOff, 
  MessageSquare,
  Send,
  X,
  Maximize
} from "lucide-react";
import { Tutor } from "../types";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface SessionInterfaceProps {
  tutor: Tutor;
  onEndSession: () => void;
}

interface ChatMessage {
  id: string;
  sender: "user" | "tutor";
  message: string;
  time: string;
}

export function SessionInterface({ tutor, onEndSession }: SessionInterfaceProps) {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      sender: "tutor",
      message: "Hi! Ready to start our session?",
      time: "2:00 PM"
    },
    {
      id: "2",
      sender: "user",
      message: "Yes, I'm ready! Thanks for helping me with Excel.",
      time: "2:01 PM"
    },
    {
      id: "3",
      sender: "tutor",
      message: "Great! Let's start with VLOOKUP functions. I'll share my screen.",
      time: "2:01 PM"
    }
  ]);

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        sender: "user",
        message: chatMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setChatMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 relative">
      {/* Video Area */}
      <div className="h-screen flex flex-col">
        {/* Main Video (Tutor) */}
        <div className="flex-1 relative bg-gray-800">
          <ImageWithFallback
            src={tutor.photo}
            alt={tutor.name}
            className="w-full h-full object-cover"
          />
          
          {/* Video Overlay Info */}
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-white text-sm">Session in progress</span>
            </div>
          </div>

          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
            <span className="text-white text-sm">42:18</span>
          </div>

          {/* Tutor Name */}
          <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
            <span className="text-white">{tutor.name}</span>
          </div>
        </div>

        {/* Self Video (Small) */}
        <div className="absolute top-20 right-4 w-28 h-40 bg-gray-700 rounded-xl overflow-hidden border-2 border-white/20">
          <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center">
            <span className="text-white">You</span>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-6 py-6">
          <div className="flex items-center justify-center gap-4">
            {/* Video Toggle */}
            <button
              onClick={() => setIsVideoOn(!isVideoOn)}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
                isVideoOn 
                  ? "bg-white/20 hover:bg-white/30 text-white" 
                  : "bg-red-500 hover:bg-red-600 text-white"
              }`}
            >
              {isVideoOn ? <Video className="w-6 h-6" /> : <VideoOff className="w-6 h-6" />}
            </button>

            {/* Audio Toggle */}
            <button
              onClick={() => setIsAudioOn(!isAudioOn)}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
                isAudioOn 
                  ? "bg-white/20 hover:bg-white/30 text-white" 
                  : "bg-red-500 hover:bg-red-600 text-white"
              }`}
            >
              {isAudioOn ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
            </button>

            {/* End Call */}
            <button
              onClick={onEndSession}
              className="w-14 h-14 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white"
            >
              <PhoneOff className="w-6 h-6" />
            </button>

            {/* Chat Toggle */}
            <button
              onClick={() => setShowChat(!showChat)}
              className="w-14 h-14 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white relative"
            >
              <MessageSquare className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-indigo-600 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {/* Fullscreen */}
            <button
              className="w-14 h-14 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white"
            >
              <Maximize className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Chat Overlay */}
      {showChat && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-20 flex items-end md:items-center md:justify-end">
          <div className="bg-white w-full md:w-96 h-[80vh] md:h-[600px] md:m-6 md:rounded-2xl flex flex-col">
            {/* Chat Header */}
            <div className="bg-indigo-600 text-white px-6 py-4 md:rounded-t-2xl flex items-center justify-between">
              <div>
                <h3 className="text-white">Chat</h3>
                <p className="text-indigo-100 text-sm">with {tutor.name}</p>
              </div>
              <button 
                onClick={() => setShowChat(false)}
                className="p-2 hover:bg-white/10 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className="max-w-[80%]">
                    <div
                      className={`rounded-2xl px-4 py-2 ${
                        msg.sender === "user"
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p>{msg.message}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 px-2">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="border-t border-gray-100 px-6 py-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-3 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-indigo-600 text-gray-900 placeholder:text-gray-400"
                />
                <button
                  onClick={handleSendMessage}
                  className="w-12 h-12 bg-indigo-600 hover:bg-indigo-700 rounded-xl flex items-center justify-center text-white"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
