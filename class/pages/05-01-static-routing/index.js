import { useRouter } from "next/router";

export default function staticRoutingPage() {
  const router = useRouter();
  const onClinkMove = () => {
    router.push("/05-02-static-routed");
  };
  return (
    <>
      <button onClick={onClinkMove}>자, 가자~~</button>
    </>
  );
}
