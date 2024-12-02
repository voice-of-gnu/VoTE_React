import React, { useState } from "react";

const TextList = () => {
  const [texts, setTexts] = useState([
    "싸늘하다 가슴에 비수가 날아와 꽂힌다",
    "하지만 걱정하지 마라 손은 눈보다 빠르니까",
    "아귀한테 밑에서 한 장, 정마담도 밑에서 한 장, 나 한장 아귀한텐 다시 밑에서 한장, 이제 정마담에게 마지막 한 장",
    "동작그만 밑장빼기냐",
    "사쿠라네",
    "사쿠라네",
    "사쿠라네",
    "사쿠라네",
    "사쿠라네",
    "사쿠라네",
    "사쿠라네",
    "사쿠라네",
    "사쿠라네",
  ]);

  const [inputValue, setInputValue] = useState("");

  return (
    <div style={styles.container}>
      <div style={styles.textBox}>
        {texts.map((text, index) => (
          <div key={index} style={styles.textRow}>
            {text}
          </div>
        ))}
      </div>

      <div style={styles.inputBox}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="텍스트를 입력하세요..."
          style={styles.inputField}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "10px",
    backgroundColor: "#F2E5BF",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    alignItems: "center",
    position: "relative",
  },
  textBox: {
    flexGrow: 1,
    width: "94%",
    height: "350px",
    backgroundColor: "#FAF5E5",
    borderRadius: "10px 10px 0 0",
    border: "1px solid #ccc",
    overflowY: "auto",
    padding: "10px",
    margin: "0",
    fontFamily: "'Noto Sans', sans-serif", // 이거 Noto Sans 안되는것 같은데?
  },
  textRow: {
    padding: "10px 0",
    borderBottom: "1px solid #eee",
    fontSize: "13px",
    color: "#333",
    fontFamily: "'Noto Sans', sans-serif",
  },
  inputBox: {
    width: "94%",
    height: "40px",
    backgroundColor: "#fff",
    border: "1px solid #257180",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    marginTop: "0",
    overflowY: "auto",
    boxShadow: "0 8px 6px -6px rgba(0, 0, 0, 0.3)",
    overflow: "visible",
    fontFamily: "'Noto Sans', sans-serif",
  },
  inputField: {
    width: "100%",
    height: "100%",
    border: "none",
    outline: "none",
    fontSize: "14px",
    padding: "0 10px",
    borderRadius: "0",
    backgroundColor: "transparent",
    fontFamily: "'Noto Sans', sans-serif",
  },
};

export default TextList;
