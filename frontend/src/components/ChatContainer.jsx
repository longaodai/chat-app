import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";

const ChatContainer = () => {
  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="chat-end">
          <div className=" chat-image avatar">
            <div className="size-10 rounded-full border">
              <img src="/avatar.png" alt="profile pic" />
            </div>
          </div>
          <div className="chat-header mb-1">
            <time className="text-xs opacity-50 ml-1">2025-12-12</time>
          </div>
          <div className="chat-bubble flex flex-col">
            <img
              src="/avatar.png"
              alt="Attachment"
              className="sm:max-w-[200px] rounded-md mb-2"
            />
            <p>Hey! How's it going</p>
          </div>
        </div>
      </div>

      <MessageInput />
    </div>
  );
};
export default ChatContainer;
