import { React, useEffect, useState, useRef } from 'react';
import BlueNyang from './img/BlueNyang.png';
import LeftEye from './img/BlueNyang-Eyes-Left.png';
import RightEye from './img/BlueNyang-Eyes-Right.png';
import CatImgCSS from './CatImg.module.css';

const CalculateEyePos = (clientPos, divCenterPos, InitPos, radius) => {
  const dx = clientPos.x - divCenterPos.x;
  const dy = clientPos.y - divCenterPos.y;
  const angle = Math.atan2(dy, dx);
  const x = 1.5 * Math.cos(angle) * radius + InitPos.x;
  const y = Math.sin(angle) * radius + InitPos.y;

  return { x, y };
};

const MainCat = () => {
  const [leftEyePos, setLeftEyePos] = useState({ x: 0, y: 0 });
  const [rightEyePos, setRightEyePos] = useState({ x: 0, y: 0 });

  const CatRef = useRef(null);
  const leftEyeDiv = useRef(null);
  const leftEyeImg = useRef(null);
  const rightEyeDiv = useRef(null);
  const rightEyeImg = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const CatRect = CatRef.current.getBoundingClientRect();

      const leftEyeDivRect = leftEyeDiv.current.getBoundingClientRect();
      const leftEyeImgRect = leftEyeImg.current.getBoundingClientRect();

      const leftEyeInitPos = {
        x:
          (leftEyeDivRect.width - leftEyeImgRect.width) / 2 +
          CatRect.width * 0.0025,
        y:
          (leftEyeDivRect.height - leftEyeImgRect.height) / 2 -
          CatRect.height * 0.006,
      };

      const rightEyeDivRect = rightEyeDiv.current.getBoundingClientRect();
      const rightEyeImgRect = rightEyeImg.current.getBoundingClientRect();

      const rightEyeInitPos = {
        x:
          (rightEyeDivRect.width - rightEyeImgRect.width) / 2 -
          CatRect.width * 0.0025,
        y:
          (rightEyeDivRect.height - rightEyeImgRect.height) / 2 +
          CatRect.height * 0.0055,
      };

      const radius = CatRect.width * 0.003;

      const newLeftEyePos = CalculateEyePos(
        { x: e.clientX, y: e.clientY },
        {
          x: leftEyeDivRect.x + leftEyeDivRect.width / 2,
          y: leftEyeDivRect.y + leftEyeDivRect.height / 2,
        },
        leftEyeInitPos,
        radius,
      );
      const newRightEyePos = CalculateEyePos(
        { x: e.clientX, y: e.clientY },
        {
          x: rightEyeDivRect.x + rightEyeDivRect.width / 2,
          y: rightEyeDivRect.y + rightEyeDivRect.height / 2,
        },
        rightEyeInitPos,
        radius,
      );

      setLeftEyePos({ x: newLeftEyePos.x, y: newLeftEyePos.y });
      setRightEyePos({ x: newRightEyePos.x, y: newRightEyePos.y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={CatRef} className={CatImgCSS.BlueNyang}>
      <img className={CatImgCSS.MainCat} src={BlueNyang} alt="BlueNyang" />

      <div className={CatImgCSS.Eyes}>
        <div className={CatImgCSS.LeftEye} ref={leftEyeDiv}>
          <img
            src={LeftEye}
            ref={leftEyeImg}
            style={{
              transform: `translate(${leftEyePos.x}px, ${leftEyePos.y}px)`,
            }}
            alt="LeftEye"
          />
        </div>

        <div className={CatImgCSS.RightEye} ref={rightEyeDiv}>
          <img
            src={RightEye}
            ref={rightEyeImg}
            style={{
              transform: `translate(${rightEyePos.x}px, ${rightEyePos.y}px)`,
            }}
            alt="RightEye"
          />
        </div>
      </div>
    </div>
  );
};

export default MainCat;
