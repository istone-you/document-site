import Link from "next/link";
import { useRouter } from "next/router";

const Back = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center mb-10">
      <Link
        href="#"
        onClick={() => {
          router.back();
        }}
      >
        戻る
      </Link>
    </div>
  );
};

export default Back;
