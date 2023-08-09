import Link from "next/link";

const Title = () => {
  return (
    <>
      <h1
        className="text-5xl font-bold mb-6 flex justify-center items-center"
        id="title"
      >
        Document
      </h1>
      <div className="flex justify-center items-center">
        <p>CodeCommitのリポジトリをベースに解説しています。</p>
      </div>
      <div className="flex justify-center items-center">
        <p>
          またこのドキュメントの内容は<b>microCMS</b>
          で管理しています。microCMSの解説については
          <Link href="/description/microcms">こちら</Link>をご覧ください。
        </p>
      </div>
    </>
  );
};

export default Title;
