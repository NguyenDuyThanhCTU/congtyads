import Head from "next/head";
import About from "../components/FrontEnd/About/About";
import Problems from "../components/FrontEnd/About/Problems";
import ListCampaign from "../components/FrontEnd/Campaign/ListCampaign";
import Snow from "../components/FrontEnd/Components/Snow";
import Contact from "../components/FrontEnd/Contact/Contact";
import ListCustomer from "../components/FrontEnd/Customer/ListCustomer";
import Footer from "../components/FrontEnd/Footer/Footer";
import Header from "../components/FrontEnd/Header/Header";
import ListPost from "../components/FrontEnd/Post/ListPost";
import PriceList from "../components/FrontEnd/Price/PriceList";
import ProCessList from "../components/FrontEnd/ProCess/ProCessList";
import ListProject from "../components/FrontEnd/Project/ListProject";
import ListQuestion from "../components/FrontEnd/Question/ListQuestion";
import SliderShow from "../components/FrontEnd/SliderShow/SliderShow";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Công ty ứng dụng truyền thông ADS</title>
        <meta
          name="description"
          content="Công ty ứng dụng truyền thông ADS - Chuyên các dịch vụ Digital Marketing, chạy QC Facebook, Google, Tiktok..."
        />
        <link rel="icon" href="/logo.PNG" />
      </Head>
      <main>
        <Snow />
        <Header />
        <SliderShow />
        <About />
        <Problems />
        <PriceList />
        <ProCessList />
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
