import Head from "next/head";
import About from "../components/FrontEnd/About/About";
import Problems from "../components/FrontEnd/About/Problems";
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
        <title>Giới thiệu</title>
        <meta
          name="description"
          content="Công ty ứng dụng truyền thông ADS - Chuyên các dịch vụ Digital Marketing, chạy QC Facebook, Google, Tiktok..."
        />
        <link rel="icon" href="/logo.PNG" />
      </Head>
      <main>
        <Header />
        <SliderShow />
        <About />
        <Problems />
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
