import { type } from "os";

export default function TypescriptUtilityPage() {
  // 기존 타입을 내가 입맛대로 조금씩 수정하면서 사용하려고 만드는게 이 페이지.
  interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string;
  }
  //타입 변경 방법은 5가지
  // 1. pick 타입 - 원하는 것만 선택
  type aaa = Pick<IProfile, "name" | "age">;

  // 2. Omit 타입 - pick과 반대로 제외
  type bbb = Omit<IProfile, "school">;

  // 3. Partial 타입 - 전부다 물음표 붙여줌
  type ccc = Partial<IProfile>;

  // 4. Required 타입 - 모두 필수
  type ddd = Required<IProfile>;

  // 5. Record 타입

  type eee = "철수" | "영희" | "훈이"; // union 타입 - 또는 (스트링 중에서도 해당 값만 들어갈 수 있게 만드는 것.)
  let child: eee;
  child = "영희";

  type fff = Record<eee, IProfile>; //이렇게 하면 eee가 키, IProfile이 값이 된다. 철수: { name: string; age: number; school: string;  hobby?: string;}, 영희: { name: string; age: number; school: string;  hobby?: string;},....

  //interface와 type은 거의 같다. 다만, 약간의 차이가 있다. (선언과 병합)

  interface IProfile {
    candy: number;
  }
  //이렇게 만들먼 interface는 기존 이름과 똑같은 곳에 합쳐진다.
  let profile: Partial<IProfile> = {};
  profile.candy = 10;

  return (
    <>
      <div></div>
    </>
  );
}
