import { Grid } from "@mui/material";
import { Fragment } from "react";
import { useData } from "../../../Context/DataProvider";
import { BreadScrumb } from "../components/BreadCrumb";
import Question from "./Question";
import QuestionTable from "./QuestionTable";
export default function ListQuestion() {
  const { question } = useData();
  return (
    <Fragment>
      <BreadScrumb title1="Câu hỏi" title2="Câu hỏi thường gặp" />
      <div className="m-3 md:m-5">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <QuestionTable data={question} />
          </Grid>
          <Grid item xs={12}>
            <Question data={question} />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}
