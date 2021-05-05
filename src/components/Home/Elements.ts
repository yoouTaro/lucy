import styled from "styled-components";

export const Button = styled.a`
  border-radius: 4px;
  background: #e6c03b;
  padding: 12px 64px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55%;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: #c39911;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  color: #fff;
  background: #3c40c6;
  display: flex;
  align-items: center;
  height: 100vh;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;

export const Col = styled.div`
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const ImgWrapper = styled.div``;

export const TopLine = styled.div`
  color: #a9b3c1;
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;

  max-height: 500px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa;
  @media screen and (max-width: 375px) {
    font-size: 30px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #a9b3c1;
`;

export const Wrapper = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
