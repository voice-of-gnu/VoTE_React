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
    textAlign: "center",
    padding: "4px",
    backgroundColor: "#F2E5BF",
  },
  button: {
    width: "100px",
    height: "100px",
    cursor: "pointer",
    borderRadius: "50%",
    display: "block",
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
