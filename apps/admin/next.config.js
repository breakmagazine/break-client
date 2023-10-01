const withTM = require('next-transpile-modules')(['ui']); // 'ui' 패키지를 transpile하도록 설정

module.exports = withTM({
  reactStrictMode: true,
  // 다른 Next.js 설정 (필요한 경우)
});
