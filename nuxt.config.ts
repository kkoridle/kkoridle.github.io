// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true, // 클라이언트 사이드 렌더링만 사용
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: 'src/',
  css: ['@/assets/main.scss'],
  nitro: {
    preset: 'github-pages' // GitHub Pages에 배포하기 위한 설정
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Jua&family=Nanum+Gothic&display=swap'
        }
      ]
    }
  }
})