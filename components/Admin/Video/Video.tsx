import { Card } from "antd";

type Props = {
  data: any;
};

export default function Video({ data }: Props) {
  return (
    <div className="h-full">
      <Card
        className="shadow-md h-full"
        hoverable
        type="inner"
        title={data.title}
      >
        <iframe
          className="w-full aspect-[2/3]"
          src={data.link}
          title="Video Youtube"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Card>
    </div>
  );
}
