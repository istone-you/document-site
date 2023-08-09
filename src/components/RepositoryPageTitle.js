import React from "react";

const RepositoryPageTitle = (props) => {
  return (
    <>
      <div className="text-3xl font-bold mb-8 mt-10 flex items-center justify-center">
        {props.repository.title}
      </div>
      <div className="flex items-center justify-center">
        <a
          alt={props.repository.id}
          href={props.repository.url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="flex items-center justify-center"
        >
          CodeCommitを開く
        </a>
      </div>
      <p className="mb-8 flex items-center justify-center">
        ※アカウント<b>641264638977</b>にログインしてください
      </p>
    </>
  );
};

export default RepositoryPageTitle;
