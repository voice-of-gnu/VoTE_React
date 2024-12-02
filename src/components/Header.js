import React, { useState } from "react";

const Header = ({ onOpenModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 슬라이딩 패널 상태 관리
  const [selectedText, setSelectedText] = useState(null); // 클릭된 텍스트 추적
  const [isButtonActive, setIsButtonActive] = useState(false); // 버튼 활성화 상태

  // 불러오기 클릭 시 슬라이딩 패널 열기
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // 슬라이딩 패널 닫기
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // 패널 외부를 클릭했을 때 닫기
  const handleOutsideClick = (e) => {
    if (e.target.id === "overlay") {
      handleCloseModal();
    }
  };

  // 텍스트 클릭 시 처리
  const handleTextClick = (index) => {
    setSelectedText(index); // 클릭된 텍스트 인덱스를 설정
    setIsButtonActive(true); // 버튼 활성화
  };

  return (
    <div>
      {/* 기존의 헤더 부분 */}
      <div style={styles.header}>
        <button style={styles.button} onClick={handleOpenModal}>
          불러오기
        </button>
        <div style={styles.iconContainer}>
          <span style={styles.icon}>🔍︎</span>
          <span style={styles.icon}>⚙️</span>
        </div>
      </div>

      {/* 슬라이딩 패널 */}
      <div
        id="overlay"
        onClick={handleOutsideClick}
        style={{
          ...styles.overlay,
          visibility: isModalOpen ? "visible" : "hidden",
        }}
      >
        <div
          style={{
            ...styles.slidePanel,
            transform: isModalOpen ? "translateY(0)" : "translateY(100%)",
            transition: "transform 0.3s ease",
          }}
        >
          <div style={styles.panelContent}>
            <h2 style={styles.h2}>대화 불러오기</h2>
          </div>

          {/* 텍스트 박스 */}
          <div style={styles.textBox}>
            {[
              "첫 번째 줄 텍스트",
              "두 번째 줄 텍스트",
              "세 번째 줄 텍스트",
              "네 번째 줄 텍스트",
            ].map((text, index) => (
              <div
                key={index}
                style={{
                  ...styles.textRow,
                  backgroundColor:
                    selectedText === index ? "#f0f0f0" : "transparent", // 클릭된 줄 배경색 변경
                }}
                onClick={() => handleTextClick(index)} // 텍스트 클릭 시
              >
                {text}
              </div>
            ))}
          </div>

          {/* 비활성화된 불러오기 버튼 */}
          <button
            style={{
              ...styles.disabledButton,
              opacity: isButtonActive ? 1 : 0.5, // 버튼 활성화 시 opacity 변경
              cursor: isButtonActive ? "pointer" : "not-allowed", // 버튼 활성화 시 커서 변경
            }}
            disabled={!isButtonActive} // 버튼 비활성화 상태 처리
          >
            불러오기
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "white",
    color: "#257180",
    border: "none",
    padding: "5px 0px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },
  iconContainer: {
    display: "flex",
    gap: "10px",
  },
  icon: {
    fontSize: "20px",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 100,
    visibility: "hidden",
  },
  slidePanel: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FAF5E5",
    padding: "20px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    height: "80vh",
  },
  panelContent: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "10px",
  },
  h2: {
    margin: 0,
    marginTop: "10px",
    marginLeft: "10px",
    fontSize: "30px",
    fontWeight: "bold",
    display: "inline-block",
  },
  textBox: {
    marginTop: "20px",
    marginBottom: "300px",
    backgroundColor: "#FAF5E5",
    padding: "10px",
    borderRadius: "5px",

    border: "0px solid #ddd",
    overflowY: "auto",
    maxHeight: "150px",
  },
  textRow: {
    fontSize: "14px",
    padding: "10px 0",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)", // 희미한 선 추가
    cursor: "pointer", // 클릭 가능하게 설정
  },
  disabledButton: {
    marginTop: "20px",
    backgroundColor: "#257180",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "not-allowed",
    width: "100%",
    fontSize: "16px",
    opacity: 0.5, // 비활성화 효과
  },
};

export default Header;
