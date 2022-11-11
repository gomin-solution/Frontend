import React, { useState, useEffect } from "react";
import styled from "styled-components";

import a from "../../image/a.png";
import b from "../../image/b.png";
import c from "../../image/c.png";

const Banner = () => {
  const [idx, SetIdx] = useState(0);

  const cards = [
    { id: "1", img: a },
    { id: "2", img: b },
    { id: "3", img: c },
  ];

  const mod = (n, m) => {
    let result = n % m;
    return result >= 0 ? result : result + m;
  };

  const cardHandler = (id) => {
    console.log("id", id);
  };

  useEffect(() => {
    setTimeout(() => {
      SetIdx((idx + 1) % cards.length);
    }, 5000);
  }, [idx]);

  return (
    <StContainer>
      <StBulletWrap style={{ display: "flex", rowGap: "10px" }}>
        <StBullet> ● </StBullet>
        <StBullet> ● </StBullet>
        <StBullet> ● </StBullet>
      </StBulletWrap>
      <StImgWrap>
        {/* <StImg className="card-active" src={a} alt="Banner" />
        <StImg className="card-left" src={b} alt="Banner" />
        <StImg className="card-right" src={c} alt="Banner" /> */}
        {cards.map((item, i) => {
          const idxLeft = mod(idx - 1, cards.length);
          const idxRight = mod(idx + 1, cards.length);

          let className = "";

          if (i === idx) {
            className = "card-active";
          } else if (i === idxLeft) {
            className = "card-left";
          } else if (i === idxRight) {
            className = "card-right";
          }

          return (
            <StImg
              key={item.id}
              src={item.img}
              alt="card"
              className={className}
              onClick={() => cardHandler(item.id)}
            />
          );
        })}
      </StImgWrap>
    </StContainer>
  );
};

export default Banner;

const StContainer = styled.div`
  width: 100%;
  height: 172px;
  overflow: hidden; // 이미지 넣었을 때 화면 넘치치 않도록 하기
  margin-bottom: 36px;
  position: relative;
`;

const StBulletWrap = styled.div`
  display: flex;
  row-gap: 30px;
  position: absolute;
  bottom: 5%;
  left: 47%;
  z-index: 99;
`;

const StBullet = styled.span`
  font-size: 5px;
`;

const StImgWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const StImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  &.card-active {
    transition: 1000ms;
    z-index: 1;
  }
  &.card-left {
    transform: translateX(-105%);
    transition: 1000ms;
    opacity: 0.3;
  }
  &.card-right {
    transform: translateX(105%);
    transition: 1000ms;
    opacity: 0.3;
  }
`;
