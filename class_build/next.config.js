/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true, // 마지막 슬래시를 붙일것인가?. 이게 우리가 개발환경 폴더링과 맞추는 작업. 이부분을 쓰고 다시 얀빌드!
};

module.exports = nextConfig;
