import { Link as Scroll } from "react-scroll";

const CategoryIndex = (props) => {
  return (
    <ul className="my-10">
      {props.documentData.map((documentData) => (
        <li
          key={documentData.category.id}
          className="hover:cursor-pointer mb-2 flex items-center justify-center"
        >
          <Scroll
            to={`${documentData.category.id}`}
            smooth
            offset={-80}
            duration={600}
          >
            {documentData.category.title}
          </Scroll>
        </li>
      ))}
    </ul>
  );
};

export default CategoryIndex;
