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
    "https://firebasestorage.googleapis.com/v0/b/catttienriversideforest-f4d95.firebasestorage.app/o/nanghouse.jpg?alt=media&token=ad6b5e0b-06ac-410d-a27c-60cf384e9f5b",
    "https://firebasestorage.googleapis.com/v0/b/catttienriversideforest-f4d95.firebasestorage.app/o/thuexe29.png?alt=media&token=38ea4bc0-78d1-4b1a-a1d6-5dd0f2c78384",
    "https://firebasestorage.googleapis.com/v0/b/catttienriversideforest-f4d95.firebasestorage.app/o/thienngoc.jpg?alt=media&token=613169d9-0ed6-4a08-9b7d-12b65338b069",
    "https://firebasestorage.googleapis.com/v0/b/catttienriversideforest-f4d95.firebasestorage.app/o/sangtuoi.webp?alt=media&token=cb526981-ef5f-4c86-9bf6-9c705927f9da",
    "https://firebasestorage.googleapis.com/v0/b/catttienriversideforest-f4d95.firebasestorage.app/o/klbduhoc.webp?alt=media&token=2781f4f5-9ed6-4b9c-9c5e-5947a0e5c265",
    "https://firebasestorage.googleapis.com/v0/b/catttienriversideforest-f4d95.firebasestorage.app/o/avatar_Vxnt3flau85kiXPcTCesOXdSwmoaNnAgWWhPCwkHb8McEGVPJE.webp?alt=media&token=c166a780-14ba-41f9-90b6-093e9174e3b7",
    "https://firebasestorage.googleapis.com/v0/b/catttienriversideforest-f4d95.firebasestorage.app/o/phamgia.webp?alt=media&token=0f78da91-92d5-443e-b28d-009372cdaff0",
    "https://firebasestorage.googleapis.com/v0/b/catttienriversideforest-f4d95.firebasestorage.app/o/dienmattroi.webp?alt=media&token=9d22f56e-9415-4028-b540-4096fda75a63",
    "https://firebasestorage.googleapis.com/v0/b/catttienriversideforest-f4d95.firebasestorage.app/o/Bao%20bi%20tien%20thanh.webp?alt=media&token=dc3d26b6-4856-4622-9b1c-1f095fbd10f6",
    "https://firebasestorage.googleapis.com/v0/b/catttienriversideforest-f4d95.firebasestorage.app/o/cuacuonsaigon.webp?alt=media&token=e14c4b36-6933-4c47-acc8-e4657e799498",
    "https://firebasestorage.googleapis.com/v0/b/catttienriversideforest-f4d95.firebasestorage.app/o/cclub.webp?alt=media&token=eb7ae4e6-bff0-4a2b-b86d-ebe168987d2a",
    "https://firebasestorage.googleapis.com/v0/b/catttienriversideforest-f4d95.firebasestorage.app/o/datsach.webp?alt=media&token=bac0d1a9-c181-4961-b01d-2fed56c6baa5",
    "https://firebasestorage.googleapis.com/v0/b/catttienriversideforest-f4d95.firebasestorage.app/o/dacanlove.webp?alt=media&token=a8ce37ba-ccbd-4b55-b6a6-c7fce5796e15",
    "https://firebasestorage.googleapis.com/v0/b/catttienriversideforest-f4d95.firebasestorage.app/o/caty%20homestay.webp?alt=media&token=8cb38dba-87f9-4a6d-81b0-9b671d5c19ac",
    "https://firebasestorage.googleapis.com/v0/b/catttienriversideforest-f4d95.firebasestorage.app/o/xaydungagp.webp?alt=media&token=20f05493-b319-42f2-ad38-3350f7fe3c42",
    "https://firebasestorage.googleapis.com/v0/b/catttienriversideforest-f4d95.firebasestorage.app/o/logo_600x600.png?alt=media&token=0fcf8492-17f2-4bec-bcba-16ce5e6a11cc",
    "https://firebasestorage.googleapis.com/v0/b/catttienriversideforest-f4d95.firebasestorage.app/o/ebike-logo-png-transparent.png?alt=media&token=d9b97238-99d9-4cf8-b3b3-fbd79c5b0482",
    "https://firebasestorage.googleapis.com/v0/b/catttienriversideforest-f4d95.firebasestorage.app/o/03._LOGO_THACO.png?alt=media&token=f8f99f23-09c9-4e79-9fcc-089efbf03fc3",

    "https://firebasestorage.googleapis.com/v0/b/catttienriversideforest-f4d95.firebasestorage.app/o/avatar_hVPjmYJH6yc7cgoJtynNy0taaVdt8LmlM4yX2o5bojUcP3Zi4M.webp?alt=media&token=f55df929-b2e7-485f-8b37-31dd588d5c18",
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
