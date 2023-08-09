import Head from "next/head";
import { client } from "../../libs/client";
import Back from "../../components/Back";
import DescriptionPageTitle from "../../components/DescriptionPageTitle";
import InnerHTML from "../../components/InnerHTML";

export default function DescriptionId({ description }) {
  return (
    <>
      <Head>
        <title>{`Document | ${description.title}`}</title>
      </Head>
      <main>
        <Back />
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
          <DescriptionPageTitle description={description} />
          <InnerHTML data={description} />
        </div>
      </main>
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({
    endpoint: "description",
    queries: { limit: 100 },
  });

  const paths = data.contents.map((content) => `/description/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: "description",
    queries: { limit: 100 },
    contentId: id,
  });

  return {
    props: {
      description: data,
    },
  };
};
