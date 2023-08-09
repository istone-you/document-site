import Head from "next/head";
import { client } from "../../libs/client";
import Back from "../../components/Back";
import RepositoryPageTitle from "../../components/RepositoryPageTitle";
import OtherDescriptionsList from "../../components/OtherDescriptionsList";
import InnerHTML from "../../components/InnerHTML";

export default function RepoId({ repository }) {
  return (
    <>
      <Head>
        <title>{`Document | ${repository.title}`}</title>
      </Head>
      <main>
        <Back />
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
          <RepositoryPageTitle repository={repository} />
          <div className="flex items-center justify-center">
            <div>
              <OtherDescriptionsList repository={repository} />
              <InnerHTML data={repository} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({
    endpoint: "repository",
    queries: { limit: 100 },
  });

  const paths = data.contents.map((content) => `/repository/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: "repository",
    contentId: id,
    queries: { limit: 100 },
  });

  return {
    props: {
      repository: data,
    },
  };
};
