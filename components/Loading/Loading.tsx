import styled, { keyframes } from "styled-components";

const load = (percent: number) => keyframes`
    0% { width: 0; }
  100% { width: ${percent}%; }
`;
const Container = styled.div<{ percent: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  height: 100vh;
  padding: 0;
  margin: 0;
  p {
    color: red;
    font-weight: bold;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  div.progress {
    background: rgba(255, 255, 255, 0.1);
    justify-content: flex-start;
    border-radius: 100px;
    align-items: center;
    position: relative;
    padding: 0 5px;
    margin: 20px;
    display: flex;
    height: 40px;
    width: 500px;
  }
  div.progress-value {
    animation: ${(props) => load(props.percent)} 3s normal forwards;
    box-shadow: 0 10px 40px -10px #fff;
    border-radius: 100px;
    background: #fff;
    height: 30px;
    width: 0;
  }
`;
export default function Loading({ percent }: { percent: number }) {
  return (
    <Container percent={percent}>
      <div className="progress">
        <div className="progress-value"></div>
      </div>
    </Container>
  );
}
