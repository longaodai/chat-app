import { X } from "lucide-react";

const ChatHeader = () => {
  return (
    <div className="p-2.5 border-b border-base-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="avatar">
            <div className="size-10 rounded-full relative">
              <img src="/avatar.png" alt="fullName" />
            </div>
          </div>

          {/* User info */}
          <div>
            <h3 className="font-medium">fullName</h3>
            <p className="text-sm text-base-content/70">Online</p>
          </div>
        </div>

        {/* Close button */}
        <button>
          <X />
        </button>
      </div>
    </div>
  );
};
export default ChatHeader;
