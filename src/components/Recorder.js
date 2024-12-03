import React, { useState, useEffect } from "react";
import neutralImage from "./img/Neutral.png";

const Recorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer;
    if (isRecording) {
      timer = setInterval(() => setTime((prev) => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isRecording]);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) setTime(0); //이거 연동 필요
  };

  return (
    <div style={styles.container}>
      <img
        src={neutralImage}
        alt="Record Button"
        onClick={toggleRecording}
        style={styles.button}
      />
      <div style={styles.timer}>
        {new Date(time * 1000).toISOString().substr(14, 5)}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "200px",
    minHeight: "200px",
    maxHeight: "200px",
    position: "relative",
    backgroundColor: "#F2E5BF",
    boxSizing: "border-box",
  },
  button: {
    width: "95px", // 크기를 적절히 줄임
    height: "95px",
    cursor: "pointer",
    borderRadius: "50%",
    margin: "0 auto",
  },
  timer: {
    marginTop: "10px",
    fontSize: "24px",
    color: "#257180",
    fontWeight: "bold",
  },
};

export default Recorder;
