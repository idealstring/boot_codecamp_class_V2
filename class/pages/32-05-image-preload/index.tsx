import { useRouter } from "next/router";
import { useEffect } from "react";
import { preloadImage } from "../../src/commons/preloadImage";

// let qqq; // 전역에 두고 사라지지 않게 함.
const PRELOAD_IMAGES = [
  "https://upload.wikimedia.org/wikipedia/commons/9/96/%22Den_kjekke_gutt%22_-_6._Internasjonale_Akademiske_Vinterleker_%281939%29_%2840200856483%29.jpg",
];

export default function ImagePreloadPage() {
  // class/src/commons/preloadImage.ts로 이동

  useEffect(() => {
    preloadImage(PRELOAD_IMAGES);
  }, []);

  const router = useRouter();
  const onClickMove = () => {
    void router.push("/32-06-image-preload-moved");
  };
  return (
    <div>
      <button onClick={onClickMove}>페이지 이동</button>
    </div>
  );
}
