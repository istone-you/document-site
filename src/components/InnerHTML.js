import React from "react";

const InnerHTML = (props) => {
  return (
    <div className="mt-6 mb-10 flex items-center justify-center">
      <div
        className="prose"
        dangerouslySetInnerHTML={{
          __html: `${props.data.body}`,
        }}
      />
    </div>
  );
};

export default InnerHTML;
