// import { Observable } from "@apollo/client";
import { from } from "zen-observable";

export default function ObservavleFlatmapPage() {
  const onClickBtn = () => {
    // new Promise(() => {}); // 자바스크립트 기본 내장.
    // new Observable() // 아직 라이브러리를 써야함. 현재 자바 내장 검토중이라함. 아폴로에서 꺼내오지만 실제론 아폴로가 zen-observable 라이브러리에서 꺼내서 전달해주는 것. 따라서 zen-observable를 실제로 설치해서 사용할 예정.

    // from promise를 observable로 바꿔줌
    // flatmap 합쳐줌/
    // promise는 단일이라면 observable는 여러개
    // subscribe는 실행
    from(["1번 useQuery", "2번 useQuery", "3번 useQeury"]) // fromPromise와 같음.
      .flatMap(
        // fromPromise에서 썼던 자바스크립트의 flatMap과는 다름. 동작방식이 살짝 다름.
        (el: string) =>
          from([`${el} 결과에 qqq 적용`, `${el} 결과에 ㅋㅋㅋ 적용`])
      )
      .subscribe((el) => console.log(el));
  };

  return (
    <div>
      <button onClick={onClickBtn}>클릭</button>
    </div>
  );
}
