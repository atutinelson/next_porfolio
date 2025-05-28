import { useState } from "react";
import { Smile, Paperclip, ImageIcon, Send } from "lucide-react";

export default function ChatInput() {
  const [message, setMessage] = useState("");

  return (
    <div className="w-full">
      <div className="flex items-center px-4 py-2 rounded-full  bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
        <input
          type="text"
          placeholder="Message..."
          className="flex-grow outline-none text-sm text-gray-800 bg-transparent placeholder-gray-500"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="flex items-center gap-3 ml-3 text-gray-500">
          <Send className="w-4 h-4"/>
        </div>
      </div>
    </div>
  );
}
