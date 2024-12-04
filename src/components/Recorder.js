import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import neutralImage from "./img/Neutral.png";
import delightImage from "./img/Delight.png";
import fearImage from "./img/Fear.png";
import surprisedImage from "./img/Surprised.png";
import angerImage from "./img/Anger.png";
import sadnessImage from "./img/Sadness.png";

const Recorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [time, setTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState(neutralImage); // 초기 이미지
  const [progressColor, setProgressColor] = useState("#D3D3D3");

  useEffect(() => {
    let timer;
    if (isRecording) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1); // 타이머는 그대로 흐름
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRecording]);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      setTime(0);
      // 랜덤 값에 따라 이미지와 프로그래스 바 색깔 바꾸게 했음
      // 이거만 맞게 넣어주면 될듯
      // 아래 케이스에서 각각 1~ 6 으로 감정 6개 분류해서 이미지랑 바 색깔 넣어놓음
      // 저 1~6 값이랑 폰트 색상도 연결하면 될 듯
      // 지금은 확인차 랜덤으로 해놨음
      //프로그래스 바 채워지는 정도도 랜덤으로 넣어놓음
      changeRandomImageAndColor();
      // 프로그래스 바를 랜덤 값으로 설정 (0~100 사이)
      setProgress(Math.random());
    }
  };

  const changeRandomImageAndColor = () => {
    const randomValue = Math.floor(Math.random() * 6) + 1;
    switch (randomValue) {
      case 1: // 중립
        setImage(neutralImage);
        setProgressColor("#D3D3D3");
        break;
      case 2: // 기쁨
        setImage(delightImage);
        setProgressColor("#FFFF00");
        break;
      case 3: // 공포
        setImage(fearImage);
        setProgressColor("#800080");
        break;
      case 4: // 놀람
        setImage(surprisedImage);
        setProgressColor("#008000");
        break;
      case 5: // 화남
        setImage(angerImage);
        setProgressColor("#DC143C");
        break;
      case 6: // 슬픔
        setImage(sadnessImage);
        setProgressColor("#4682B4");
        break;
      default:
        setImage(neutralImage);
        setProgressColor("#D3D3D3");
        break;
    }
  };

  const chartData = [
    { name: "Progress", value: progress * 100 }, // 진행 상태
    { name: "Remaining", value: 100 - progress * 100 }, // 남은 상태
  ];

  return (
    <div style={styles.container}>
      <div style={styles.progressContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              startAngle={180}
              endAngle={0}
              innerRadius={0}
              outerRadius={60}
              dataKey="value"
              stroke="none" // 테두리 없애기 ㅅㅂ 이거때문에 몇분을 날린거야
            >
              <Cell fill={progressColor} /> <Cell fill="#FFFFFF" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <img
          src={image} //위에 랜덤값 기반 이미지 표시
          alt="Record Button"
          onClick={toggleRecording}
          style={styles.button}
        />
      </div>

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
  progressContainer: {
    position: "relative",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    marginTop: "-60px",
    marginBottom: "-20px",
  },
  button: {
    width: "95px",
    height: "95px",
    cursor: "pointer",
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    objectFit: "cover",
    zIndex: 1, // PieChart 위에 표시
  },
  timer: {
    fontSize: "24px",
    color: "#257180",
    fontWeight: "bold",
    marginTop: "10px",
  },
};

export default Recorder;
