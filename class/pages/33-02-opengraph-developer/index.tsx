import axios from "axios";

// 개발자일 때 => 디스코드(개발자)
export default function OpengraphDeveloperPage() {
  const onClickEnter = async () => {
    // 1. 채팅데이터에 주소가 있는지 찾기(ex, https://~~ 로 시작하는 것.)

    // 2. 해당 주소로 스크래핑하기
    const result = await axios.get("https://www.gmarket.co.kr"); // CORS 가능여부에 따라 다름. 그래서 보통 백엔드에서 해옴.
    console.log(result.data);

    // 3. 메타태그에서 오픈그래프(og:) 찾기
    console.log(result.data.split("<meta").filter((el) => el.includes("og:")));
  };

  return (
    <div>
      <button onClick={onClickEnter}>채팅입력후 엔터치기</button>
    </div>
  );
}
