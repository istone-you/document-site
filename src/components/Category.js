import Link from "next/link";
import Image from "next/image";
import Repository from "./Repository";

const Category = (props) => {
  return (
    <div>
      {props.documentData.map((documentData) => (
        <div className="mt-14" key={documentData.category.id}>
          <div className="flex justify-center items-center">
            {documentData.category.image?.url && (
              <Image
                alt={documentData.category.title}
                src={documentData.category.image.url}
                width={300}
                height={300}
                className="mb-10 mt-10 mx-auto"
                id={documentData.category.id}
              />
            )}
          </div>
          <div className="flex justify-center items-center">
            <p className="font-bold mx-auto">
              {documentData.category.description?.title ? (
                <>
                  {documentData.category.description.title}は
                  <Link
                    href={`/description/${documentData.category.description.id}`}
                  >
                    こちら
                  </Link>
                </>
              ) : null}
            </p>
          </div>
          <Repository documentData={documentData} />
        </div>
      ))}
    </div>
  );
};

export default Category;
