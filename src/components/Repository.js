import Link from "next/link";

const Repository = (props) => {
  return (
    <div className="">
      {props.documentData.repository.map((repository) => (
        <Link
          key={repository.id}
          href={`/repository/${repository.id}`}
          className="hover:no-underline"
        >
          <div className="mb-4 mt-10 py-8 px-10 text-black bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 transition-transform duration-300 transform hover:-translate-y-1">
            <p className="text-xl flex items-center justify-center">
              {repository.title}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: repository.headline,
              }}
              className="mt-4 font-normal"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Repository;
