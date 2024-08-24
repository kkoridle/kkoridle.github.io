<template>
    <div class="layout">
      <header>
        <h1>꼬리들</h1>
      </header>
      
      <div class="content">
        <aside class="sidebar left">
          <p>공사 중</p>
        </aside>
  
        <main>
          <div class="buttons">
            <a href="https://discord.gg/7Qk3vTnqTY" class="grow-button button1">디스코드</a>
            <a href="https://open.kakao.com/o/gPqP4SKc" class="grow-button button2">오픈채팅</a>
          </div>
        </main>
  
        <aside class="sidebar right">
          <p>공사 중</p>
        </aside>
      </div>
      
      <footer>
        <p>© {{ currentYear }} KKoridle</p>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // 현재 연도를 얻어옴
  const currentYear = ref(new Date().getFullYear())
  </script>
  
  <style scoped lang="scss">
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  header, footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1rem;
  }
  
  header {
    font-family: 'Jua', sans-serif;
    font-size: 24px;
  }
  
  .content {
    display: flex;
    flex: 1;
    flex-direction: column; /* 모바일에서 세로 방향으로 스택 */
  }
  
  .sidebar {
    width: 200px;
    background-color: #f4f4f4;
    padding: 1rem;
    display: block; /* 기본적으로 보이게 설정 */
  }
  
  main {
    flex: 1;
    padding: 1rem;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .buttons {
    display: flex;
    gap: 100px;
    font-family: 'Jua';
    flex-direction: row; /* 기본적으로 가로 방향으로 배치 */
  }
  
  /* 모바일 반응형 스타일 */
  @media (max-width: 768px) {
    .content {
      flex-direction: column; /* 모바일에서는 세로 방향으로 스택 */
    }
  
    .sidebar {
      display: none; /* 모바일에서는 사이드바 숨기기 */
    }
  
    .buttons {
      flex-direction: column; /* 모바일에서는 버튼들을 세로로 배치 */
      gap: 30px;
    }
  
    .grow-button {
      width: 100%; /* 모바일에서는 버튼을 전체 너비로 확장 */
      height: 150px; /* 직사각형으로 보이게 조정 */
      font-size: 18px;
    }
  }
  
  .grow-button {
    width: 250px; /* 정사각형 크기 */
    height: 250px;
    font-size: 24px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 10px; /* 둥근 모서리 */
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none; /* 링크 밑줄 제거 */
    transition: transform 0.3s ease;
  }
  
  .button1 {
    background-color: #5865F2;
  }
  
  .button2 {
    background-color: #F7E300;
    color: #333;
  }
  
  .grow-button:hover {
    transform: scale(1.1);
  }
  </style>
  