import Head from "next/head";
import { client } from "../libs/client";
import Title from "../components/Title";
import Category from "../components/Category";
import CategoryIndex from "../components/CategoryIndex";

export default function Home({ documentData }) {
  return (
    <>
      <Head>
        <title>Document</title>
      </Head>
      <main>
        <div className="lg:px-20 xl:px-32">
          <Title />
          <CategoryIndex documentData={documentData} />
          <Category documentData={documentData} />
        </div>
      </main>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const [repository, category] = await Promise.all([
    client.get({ endpoint: "repository", queries: { limit: 100 } }),
    client.get({ endpoint: "category", queries: { limit: 100 } }),
  ]);

  // データを希望する形式に整理します
  const sortedDocumentData = category.contents
    .map((cat) => ({
      category: cat,
      repository: repository.contents.filter(
        (repo) => repo.category.title === cat.title
      ),
    }))
    .sort((a, b) => a.category.order - b.category.order); // category.order の数字順でソート

  return {
    props: {
      documentData: sortedDocumentData,
    },
  };
};
