import React from "react";
import styled from "styled-components";
import Grid from "../Components/Grid";

const Container = styled.div`
  cursor: pointer;
  border: 1px solid #e9e8e8;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  :hover {
    transform: translateY(-3%);
    box-shadow: rgba(0, 0, 0, 0.3) 1.95px 1.95px 2.6px;
  }
  @media (min-width: 768px) {
    padding: 20px;
  }
`;
export default function Customer() {
  const list = [
    "https://placehold.co/300x180/0f766e/ffffff.png?text=Client+01",
    "https://placehold.co/300x180/2563eb/ffffff.png?text=Client+02",
    "https://placehold.co/300x180/7c3aed/ffffff.png?text=Client+03",
    "https://placehold.co/300x180/dc2626/ffffff.png?text=Client+04",
    "https://placehold.co/300x180/ea580c/ffffff.png?text=Client+05",
    "https://placehold.co/300x180/0891b2/ffffff.png?text=Client+06",
    "https://placehold.co/300x180/4f46e5/ffffff.png?text=Client+07",
    "https://placehold.co/300x180/16a34a/ffffff.png?text=Client+08",
    "https://placehold.co/300x180/be123c/ffffff.png?text=Client+09",
    "https://placehold.co/300x180/4338ca/ffffff.png?text=Client+10",
    "https://placehold.co/300x180/0f766e/ffffff.png?text=Client+11",
    "https://placehold.co/300x180/2563eb/ffffff.png?text=Client+12",
    "https://placehold.co/300x180/7c3aed/ffffff.png?text=Client+13",
    "https://placehold.co/300x180/dc2626/ffffff.png?text=Client+14",
    "https://placehold.co/300x180/ea580c/ffffff.png?text=Client+15",
    "https://placehold.co/300x180/0891b2/ffffff.png?text=Client+16",
    "https://placehold.co/300x180/4f46e5/ffffff.png?text=Client+17",
    "https://placehold.co/300x180/16a34a/ffffff.png?text=Client+18",
  ];
  return (
    <div className="md:p-20 p-5">
      <Grid container spacing={2}>
        {list?.map((data: string) => (
          <Grid key={data} item xs={4} sm={2}>
            <Container>
              <img loading="lazy" alt="Loading" src={data} />
            </Container>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
