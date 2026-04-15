import Head from "next/head";
import Contact from "../components/FrontEnd/Contact/Contact";
import Footer from "../components/FrontEnd/Footer/Footer";
import Header from "../components/FrontEnd/Header/Header";
import ListPost from "../components/FrontEnd/Post/ListPost";
import ListQuestion from "../components/FrontEnd/Question/ListQuestion";
import SliderShow from "../components/FrontEnd/SliderShow/SliderShow";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Liên hệ</title>
        <meta
          name="description"
          content="Công ty ứng dụng truyền thông ADS - Chuyên các dịch vụ Digital Marketing, chạy QC Facebook, Google, Tiktok..."
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <Header />
        <SliderShow />
        <Contact />
        <ListQuestion />
        <ListPost />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
