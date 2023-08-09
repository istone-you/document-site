import React from "react";

const DescriptionPageTitle = (props) => {
  return (
    <>
      <div className="text-3xl font-bold mb-16 mt-10 flex items-center justify-center">
        {props.description.title}
      </div>
    </>
  );
};

export default DescriptionPageTitle;
