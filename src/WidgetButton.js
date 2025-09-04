import React, { useState } from "react";

const WidgetButton = ({ label = "Chat with us" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
      {isOpen && (
        <div
          style={{
            width: "300px",
            height: "400px",
            background: "#1E293B",
            color: "white",
            borderRadius: "10px",
            boxShadow: "0 0 15px rgba(0,0,0,0.3)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            marginBottom: "10px"
          }}
        >
          <div style={{ padding: "10px", background: "#0F172A", fontWeight: "bold" }}>
            Chat
          </div>
          <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
            <div style={{ marginBottom: "10px" }}>
              <b>Bot:</b> Hello! How can I help you?
            </div>
            <div style={{ marginBottom: "10px" }}>
              <b>User:</b> Just testing.
            </div>
          </div>
          <input
            style={{
              border: "none",
              padding: "8px",
              borderTop: "1px solid #334155",
              borderRadius: "0 0 10px 10px",
              outline: "none"
            }}
            placeholder="Type a message..."
          />
        </div>
      )}
      <button
        onClick={toggleChat}
        style={{
          background: "#ab4c93ff",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          fontSize: "18px",
          cursor: "pointer",
          boxShadow: "0 0 10px rgba(0,0,0,0.3)"
        }}
      >
        💭
      </button>
    </div>
  );
};

export default WidgetButton;
