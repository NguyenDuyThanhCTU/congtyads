import Head from "next/head";
import ListCampaign from "../components/FrontEnd/Campaign/ListCampaign";
import Contact from "../components/FrontEnd/Contact/Contact";
import ListCustomer from "../components/FrontEnd/Customer/ListCustomer";
import Footer from "../components/FrontEnd/Footer/Footer";
import Header from "../components/FrontEnd/Header/Header";
import ListPost from "../components/FrontEnd/Post/ListPost";
import ListProject from "../components/FrontEnd/Project/ListProject";
import ListQuestion from "../components/FrontEnd/Question/ListQuestion";
import SliderShow from "../components/FrontEnd/SliderShow/SliderShow";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dự án</title>
        <meta
          name="description"
          content="Công ty ứng dụng truyền thông ADS - Chuyên các dịch vụ Digital Marketing, chạy QC Facebook, Google, Tiktok..."
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <Header />
        <SliderShow />
        <ListProject />
        <ListCampaign />
        <ListCustomer />
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
