import { Button, ButtonGroup } from "@mui/material";
import { Card, Image, Popconfirm } from "antd";
import { useGlobalState } from "../../../Context/GlobalProvider";
import { deleteDocument } from "../../../lib/firebase/service";

type Props = {
  data: any;
  setOpen: (open: boolean) => void;
};
export default function Album({ data, setOpen }: Props) {
  const { setId } = useGlobalState();
  return (
    <div className="h-full">
      <Card
        className="shadow-md h-full"
        hoverable
        type="inner"
        title={data.name}
        extra={
          <ButtonGroup aria-label="outlined primary button group">
            <Button
              color="primary"
              onClick={() => {
                setId(data.id);
                setOpen(true);
              }}
            >
              SỬA
            </Button>
            <Popconfirm
              title="Xác nhận xóa nội dung này ?"
              onConfirm={() => {
                deleteDocument("albums", data.id);
              }}
            >
              <Button color="error">XÓA</Button>
            </Popconfirm>
          </ButtonGroup>
        }
      >
        <div className="grid grid-cols-3">
          {data.listphotoURL?.map((item: any) => (
            <Image
              loading="lazy"
              className="w-full aspect-[2/3] object-cover p-1 border"
              key={item}
              src={item}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}
