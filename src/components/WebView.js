import React from "react";

const WebView = ({ url }) => {
  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <iframe
        src={url}
        title="WebView"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      ></iframe>
    </div>
  );
};

export default WebView;
