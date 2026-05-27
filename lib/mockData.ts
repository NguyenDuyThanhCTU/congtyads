export const mockData = {
  webinfo: [
    {
      id: "webinfo-1",
      logo: "/logo.PNG",
      gmail: "ungdungtruyenthongads@gmail.com",
    },
  ],
  slidershow: [
    {
      id: "project-1",
      title: "Landing page doanh nghiệp",
      link: "ads-demo.vn",
      photoURL:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "project-2",
      title: "Website dịch vụ marketing",
      link: "marketing-demo.vn",
      photoURL:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "project-3",
      title: "Trang giới thiệu thương hiệu",
      link: "brand-demo.vn",
      photoURL:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    },
  ],
  users: [],
  other: [],
  products: [],
  typeproducts: [],
  posts: [
    {
      id: "post-1",
      group: "HOẠT ĐỘNG CÔNG TY",
      title: "ADS triển khai chiến dịch truyền thông mẫu",
      subtitle:
        "Một chiến dịch mockup mô phỏng quy trình tư vấn, triển khai và báo cáo hiệu quả cho khách hàng.",
      photoURL:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
      editor: {
        value:
          "<p>Đây là nội dung mockup cho bài viết. Dữ liệu được lấy từ file nội bộ thay vì CSDL.</p>",
      },
    },
    {
      id: "post-2",
      group: "KIẾN THỨC CHUNG",
      title: "Cách chuẩn bị nội dung trước khi chạy quảng cáo",
      subtitle:
        "Các nhóm thông tin cần chuẩn bị để đội triển khai tối ưu chiến dịch nhanh hơn.",
      photoURL:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
      editor: {
        value:
          "<p>Khách hàng nên chuẩn bị mục tiêu, chân dung khách hàng, ngân sách dự kiến và tài sản truyền thông sẵn có.</p>",
      },
    },
    {
      id: "post-3",
      group: "KHUYẾN MÃI HOT",
      title: "Gói tư vấn digital marketing mockup",
      subtitle:
        "Thông tin chương trình mẫu dùng cho bản build static không phụ thuộc hệ quản trị.",
      photoURL:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      editor: {
        value:
          "<p>Ưu đãi mockup có thể được thay đổi trực tiếp trong mã nguồn tại <strong>lib/mockData.ts</strong>.</p>",
      },
    },
  ],
  videos: [],
  albums: [],
  comments: [],
  feedback: [],
  question: [],
};

export type MockData = typeof mockData;
