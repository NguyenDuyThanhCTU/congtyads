import { Card, Collapse } from "antd";
import React from "react";

export interface Props {
  data: any;
}

export default function Question({ data }: Props) {
  const { Panel } = Collapse;

  return (
    <Card
      className="shadow-md h-full"
      hoverable
      type="inner"
      title={<p className="font-bold text-gray-400">Danh sách câu hỏi</p>}
    >
      <Collapse>
        {data.map((data: any) => (
          <Panel key={data.uid} header={data.question}>
            <p>{data.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </Card>
  );
}
