import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPageRouted() {
  // 첫번째
  useEffect(() => {
    const script = document.createElement("script");
    // script.src =
    //   "//dapi.kakao.com/v2/maps/sdk.js?appkey=3eb924ffe384ecc83f27debda50ea48a";
    // 잠깐! 이렇게할 경우 라우팅시 나오지 않는다. 맵이 로드되기 전에 페이지가 그려지기 때문. 이를 위해 몇가지 한다.
    // 1. useEffect, 2. 주소창에 autoload=false, 3. window.kakao.maps.load(function () { })
    // https://apis.map.kakao.com/web/documentation/#load_StaticMethods
    // 두번째
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=3eb924ffe384ecc83f27debda50ea48a"; // 쿼리스트링 : ?를 기준으로 그 뒤는 키밸류 형태로 인식하며, 그 사이는 &로 구분.
    script.type = "text/javascript";
    document.head.appendChild(script);

    script.onload = () => {
      // 세번째
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.484798, 126.896334), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        console.log(map);
        const markerPosition = new kakao.maps.LatLng(37.484798, 126.896334);

        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });

      // 마커가 지도 위에 표시되도록 설정합니다
    };
  }, []);

  return (
    <>
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=3eb924ffe384ecc83f27debda50ea48a"
        ></script>
      </Head> */}
      {/* _app으로 이동하면 가능하긴함! 다만,,, 추천하지 않는다. 카카오맵이 필요없는 페이지에서도 다운로드하니까. 비효율적이다. */}

      <div>
        <div id="map" style={{ width: "500px", height: "400px" }}></div>
      </div>
    </>
  );
}
