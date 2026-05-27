import Head from "next/head";
import Contact from "../../components/FrontEnd/Contact/Contact";
import Footer from "../../components/FrontEnd/Footer/Footer";
import Header from "../../components/FrontEnd/Header/Header";
import ListPost from "../../components/FrontEnd/Post/ListPost";
import PagePost from "../../components/FrontEnd/Post/PagePost";
import ListQuestion from "../../components/FrontEnd/Question/ListQuestion";
import SliderShow from "../../components/FrontEnd/SliderShow/SliderShow";
import { mockData } from "../../lib/mockData";

export async function getStaticPaths() {
  return {
    paths: mockData.posts.map((post) => ({
      params: { title: post.title },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { title: string } }) {
  return {
    props: {
      title: params.title,
    },
  };
}

export default function Home({ title }: { title: string }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Công ty ứng dụng truyền thông ADS - Chuyên các dịch vụ Digital Marketing, chạy QC Facebook, Google, Tiktok..."
        />
        <link rel="icon" href="/logo.PNG" />
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
