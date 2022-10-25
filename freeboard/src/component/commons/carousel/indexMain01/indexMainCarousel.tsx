import styled from "@emotion/styled";
import { useState, useRef, useEffect } from "react";

const Wrapper = styled.div`
  width: 100%;
  background-color: black;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 1000px;
  height: 500px;

  position: relative;

  overflow: hidden;
`;

const SlideContainer = styled.div`
  width: 100%;

  display: flex;
`;

const SlideImg = styled.img`
  width: 1000px;
  height: 500px;
`;

const ButtonWrapper = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  text-align: center;

  position: absolute;
  top: 47%;
`;

const SlideButton = styled.div`
  width: 50px;
  padding: 0 10px;
  border-radius: 20px;
  background-color: #none;

  cursor: pointer;
  :hover svg {
    opacity: 1;
  }
`;

export default function IndexMainCarousel() {
  const img01 = "/img/1.jpg";
  const img02 = "/img/2.jpg";
  const img03 = "/img/3.jpg";
  const img04 = "/img/4.jpg";
  const img05 = "/img/5.jpg";

  const totalSlide = 4;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  //   const slideRef = useRef<(HTMLDivElement | null)[]>([]);

  const onClickNext = () => {
    if (currentSlide >= totalSlide) {
      setCurrentSlide(0);
      console.log(slideRef, slideRef.current);
    } else {
      setCurrentSlide(currentSlide + 1);
      console.log(slideRef, slideRef.current);
    }
  };
  const onClickPrev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(totalSlide);
      console.log(slideRef, slideRef.current);
    } else {
      setCurrentSlide(currentSlide - 1);
      console.log(slideRef, slideRef.current);
    }
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }
  }, [currentSlide]);

  return (
    <Wrapper className="콘테이너">
      <Container className="메인">
        <SlideContainer className="이미지리스트랩퍼" ref={slideRef}>
          <SlideImg src={img01} />
          <SlideImg src={img02} />
          <SlideImg src={img03} />
          <SlideImg src={img04} />
          <SlideImg src={img05} />
        </SlideContainer>
        <ButtonWrapper className="버튼랩퍼">
          <SlideButton onClick={onClickPrev}>
            <svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(180)"
              fill="#fff"
              opacity={0.5}
            >
              <path d="M300.295344 63.815421 756.236584 510.525416 300.295344 957.234387 264.856203 922.540214 685.507706 510.525416 264.856203 98.509594Z" />
            </svg>
          </SlideButton>
          <SlideButton onClick={onClickNext}>
            <svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              opacity={0.5}
            >
              <path d="M300.295344 63.815421 756.236584 510.525416 300.295344 957.234387 264.856203 922.540214 685.507706 510.525416 264.856203 98.509594Z" />
            </svg>
          </SlideButton>
        </ButtonWrapper>
      </Container>
    </Wrapper>
  );
}
