import styled, { keyframes } from "styled-components";

const ping = keyframes`
    0%, 100% {
    transform: translateY(-1%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
`;
const Container = styled.div`
  padding: 0px;
  animation: ${ping} 2s infinite;
`;
export default function ListImg() {
  return (
    <Container className="animate__animated animate__bounceInRight">
      <img
        alt="Loading"
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
      />
    </Container>
  );
}
