import Link from "next/link";

const OtherDescriptionsList = (props) => {
  console.log(props.repository.description);
  return (
    <>
      {props.repository.description &&
      props.repository.description.length > 0 ? (
        <ul className="mb-10">
          {props.repository.description?.map((description) => (
            <li key={description.id}>
              {description.title}は
              <Link href={`/description/${description.id}`}>こちら</Link>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default OtherDescriptionsList;
