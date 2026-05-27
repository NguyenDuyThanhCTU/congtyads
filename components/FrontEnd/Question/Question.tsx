import { useState } from "react";
import { AiOutlineLine, AiOutlinePlus } from "react-icons/ai";
import { FaRegQuestionCircle } from "react-icons/fa";
import styled from "styled-components";
import Grid from "../Components/Grid";

const Container = styled.div`
  cursor: pointer;
  width: 100%;
  margin: 10px 0px;
  div.question {
    border-radius: 4px;
    padding: 10px;
    font-weight: bold;
    color: white;
    background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
    text-align: start;
  }
  div.answer {
    ul {
      li {
        text-align: start;
        padding: 5px;
        background-color: #f9f9f9;
        font-weight: 300;
        font-size: 14px;
      }
    }
  }
  @media (min-width: 768px) {
    padding: 0px 200px;
    div.question {
      padding: 15px 10px;
      font-size: 18px;
    }
    div.answer {
      ul {
        li {
          padding: 10px;
          font-size: 18px;
        }
      }
    }
  }
`;
export default function Question({ data }: { data: any }) {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <div className="question" onClick={() => setOpen(!open)}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={1} sm={0.5}>
            <FaRegQuestionCircle />
          </Grid>
          <Grid item xs={10} sm={11}>
            {data.question}
          </Grid>
          <Grid item xs={1} sm={0.5}>
            {open ? <AiOutlineLine /> : <AiOutlinePlus />}
          </Grid>
        </Grid>
      </div>
      {open && (
        <div className="answer animate__animated animate__fadeInDown">
          {data?.answer.map((item: string) => (
            <ul key={item}>
              <li>→ {item}</li>
            </ul>
          ))}
        </div>
      )}
    </Container>
  );
}
