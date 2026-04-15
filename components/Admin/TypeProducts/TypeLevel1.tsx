import { Button, ButtonGroup, IconButton } from "@mui/material";
import { Card, Input, Popconfirm } from "antd";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { useGlobalState } from "../../../Context/GlobalProvider";
import {
  deleteDocument,
  updateDocument,
} from "../../../lib/firebase/service";
import { UpLoadImage } from "../components/UpLoadImage";

type Props = {
  data: any;
};

export default function TypeLevel1({ data }: Props) {
  const { Search } = Input;
  const { imgSrc } = useGlobalState();
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(5);
  const [class2, setClass2] = useState(data.class2);
  return (
    <div className="h-full">
      <Card
        className="shadow-md h-full"
        hoverable
        type="inner"
        cover={
          data.photoURL && (
            <img
              className="w-full aspect-[2/1] object-cover"
              loading="lazy"
              alt="Loading"
              src={data.photoURL}
            />
          )
        }
        title={data.class1}
        extra={
          <div className="flex flex-col items-end">
            <ButtonGroup aria-label="outlined primary button group">
              <Button color="primary" onClick={() => setOpen(!open)}>
                SỬA
              </Button>
              <Popconfirm
                title="Xác nhận xóa nội dung này ?"
                onConfirm={() => {
                  deleteDocument("typeproducts", data.id);
                }}
              >
                <Button color="error">XÓA</Button>
              </Popconfirm>
            </ButtonGroup>
            {open && (
              <div>
                <Search
                  className="mt-2"
                  placeholder="Nhập tên phân loại 1..."
                  enterButton="SỬA"
                  defaultValue={data.class1}
                  onSearch={(value: string) => {
                    updateDocument("typeproducts", data.id, {
                      class1: value,
                      photoURL: imgSrc,
                    });
                    setOpen(false);
                  }}
                />
                <UpLoadImage defaultValue={data.photoURL} />
              </div>
            )}
          </div>
        }
      >
        <Search
          className="p-1"
          placeholder="Nhập tên phân loại 2..."
          enterButton="THÊM"
          onSearch={(value: string) => {
            {
              data.class2 === undefined
                ? updateDocument("typeproducts", data.id, {
                    class2: [value],
                  })
                : updateDocument("typeproducts", data.id, {
                    class2: [...data.class2, value],
                  });
            }
            setOpen(false);
          }}
        />
        {data.class2?.slice(page - 5, page).map((item: any) => (
          <div
            key={item}
            className="flex justify-between items-center py-[1px] pl-2 m-1 border"
          >
            <p>{item}</p>
            <div>
              <Popconfirm
                title="Xác nhận xóa nội dung này ?"
                onConfirm={() => {
                  updateDocument("typeproducts", data.id, {
                    class2: class2,
                  });
                  setOpen(false);
                }}
              >
                <IconButton color="error">
                  <AiFillDelete
                    onClick={() =>
                      setClass2(data.class2?.filter((obj: any) => obj !== item))
                    }
                  />
                </IconButton>
              </Popconfirm>
            </div>
          </div>
        ))}
        <div className="flex justify-center">
          <ButtonGroup>
            <IconButton>
              <BsFillArrowLeftSquareFill
                className="text-blue-500"
                onClick={() => setPage(page - 5)}
              />
            </IconButton>
            <Button variant="contained">{page / 5}</Button>
            <IconButton>
              <BsFillArrowRightSquareFill
                className="text-blue-500"
                onClick={() => setPage(page + 5)}
              />
            </IconButton>
          </ButtonGroup>
        </div>
      </Card>
    </div>
  );
}
