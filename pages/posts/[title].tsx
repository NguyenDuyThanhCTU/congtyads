import Head from "next/head";
import { useRouter } from "next/router";
import Contact from "../../components/FrontEnd/Contact/Contact";
import Footer from "../../components/FrontEnd/Footer/Footer";
import Header from "../../components/FrontEnd/Header/Header";
import ListPost from "../../components/FrontEnd/Post/ListPost";
import PagePost from "../../components/FrontEnd/Post/PagePost";
import ListQuestion from "../../components/FrontEnd/Question/ListQuestion";
import SliderShow from "../../components/FrontEnd/SliderShow/SliderShow";
import { useData } from "../../Context/DataProvider";

export default function Home() {
  const router = useRouter();
  const { title } = router.query;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Công ty ứng dụng truyền thông ADS - Chuyên các dịch vụ Digital Marketing, chạy QC Facebook, Google, Tiktok..."
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <Header />
        <SliderShow />
        <PagePost title={title} />
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
