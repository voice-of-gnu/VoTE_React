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
      <TextList />
      <Recorder />

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
  },
  slidePanel: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    height: "300px",
    backgroundColor: "#F2E5BF",
    transition: "transform 0.3s ease-in-out",
    zIndex: 100,
  },
  panelContent: {
    padding: "200px",
  },
};

export default App;
