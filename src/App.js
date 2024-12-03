import React, { useState } from "react";
import Header from "./components/Header";
import TextList from "./components/TextList";
import Recorder from "./components/Recorder";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div style={styles.app}>
      <Header onOpenModal={handleOpenModal} />
      <div style={styles.mainContainer}>
        <TextList style={styles.textList} />
        <Recorder style={{ ...styles.recorder, flexShrink: 0 }} />
      </div>

      {/* 슬라이딩 패널 구현 여기에 안되면 Header 에 박자 */}
      <div
        style={{
          ...styles.slidePanel,
          transform: isModalOpen ? "translateY(0)" : "translateY(100%)",
        }}
      ></div>
    </div>
  );
}

const styles = {
  app: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflow: "hidden",
    boxSizing: "border-box",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  textList: {
    flex: 1,
    overflowY: "auto",
  },
  recorder: {
    height: "200px",
    minHeight: "200px",
    maxHeight: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default App;
