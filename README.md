<p align="center">
  <img src="https://user-images.githubusercontent.com/55784772/124712579-74773a00-df3a-11eb-9c15-62b7f2f41ff9.png" alt="colfume" >
  <h3 align="center">컬퓸에서 색을 통해 당신의 향을 찾아보세요</h3>
</p>
<br />
<br />

### 🧷 프로젝트 소개

#### Sopt 28th AppJam-web part

#### Project name : Colfume

#### Project period : 2021.06.26 ~ 

<br />

### 📌 팀원 소개

|                                                 김민지                                                  |                                                 손예지                                                  |                                                                          김소령                                                                          |                                                 김영서                                                  |
| :-----------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/48766355?v=4" alt="profile" width="200" height="200"> | <img src="https://avatars.githubusercontent.com/u/55784772?v=4" alt="profile" width="200" height="200"> | <img src="https://user-images.githubusercontent.com/55784772/124715910-74793900-df3e-11eb-9745-2601765cd046.png" alt="profile" width="200" height="200"> | <img src="https://avatars.githubusercontent.com/u/79343830?v=4" alt="profile" width="200" height="200"> |
|                                   [mnxmnz](https://github.com/mnxmnz)                                   |                                 [yezgoget](https://github.com/yezgoget)                                 |                                                        [soryeongk](https://github.com/soryeongk)                                                         |                              [kimyeongseo](https://github.com/kimyeongseo)                              |

<br />

### 📌 서비스 핵심 기능


#### ✔ 메인 홈 (

<img alt="main" src="https://user-images.githubusercontent.com/55784772/125957379-e85b0222-71e3-4922-abf3-1373502c7769.png" >

    💡 
       - Header 메뉴 클릭하면 해당 링크로 이동
       - Start 버튼 클릭하면 심리 테스트 링크로 이동


<img alt="mood and style" src="https://user-images.githubusercontent.com/55784772/125957546-1d2707af-a282-4ef9-8319-ed0c1f42bed0.png">

    💡 
       - Palette Color 클릭하면 해당 검색 결과 페이지로 이동
       - 총 8개의 Color 가 있어서 슬라이더로 표현
       - Mood & Style 클릭하면 해당 검색 결과 페이지로 이동

<img alt="main" src="https://user-images.githubusercontent.com/55784772/125957601-b3f8c61f-f6b2-4fc2-aafc-53da89a9d67c.png" >

    💡 
       - Recommendation 향수 사진 위에 Hover 하면 향수 이름 보여줌
       - 하나의 상황에 대해 6가지 향수가 있어서 슬라이더로 표현
       - 향수를 클릭하면 해당 향수의 디테일 페이지로 이동
      
      
#### ✔ 심리테스트 - 문제
<img alt="main" src="https://user-images.githubusercontent.com/55784772/125957970-bb04aac5-80c0-4f2c-8c22-8ddfadfc890d.png" >

    💡 
       - 사용자가 입력한 테스트의 값 저장
       - 사용자 진행 상황을 Progress Bar 로 표현
       - 사용자가 7번까지 테스트를 완료하면 로딩뷰 표시
      
#### ✔ 심리테스트 결과
<img alt="main" src="https://user-images.githubusercontent.com/55784772/125958027-898da592-51a4-4e01-93e9-c595fdcb9b24.png" >

    💡 
       - 사용자 입력 값에 따라 8개의 결과 표시
       - 향수 추천을 받아보세요 버튼을 클릭하면 해당 색깔에 대한 Search 결과 페이지로 이동
       - 링크 복사를 클릭하면 해당 링크 복사
       - 링크 복사를 클릭하면 모달창 표시
#### ✔ 향수 검색
<img alt="main" src="https://user-images.githubusercontent.com/55784772/125958172-4266d84c-dd82-4c2c-89d2-cf9fef8eeae8.png">

    💡 
       - 제품명, 키워드를 검색하면 그에 맞는 향수 서치 결과 표시
       - Mood 와 Style 을 클릭하면 해당 버튼만 Active 효과 표시
       - Mood 와 Style 을 클릭하면 해당 서치 결과 표시
       - 서치 결과에서 향수를 클릭하면 해당 디테일 페이지로 이동
       - 향수 위에 마우스 오버하면 향수 제목 표시
       
#### ✔ 향수 리스트 불러오
<img alt="main" src="https://user-images.githubusercontent.com/55784772/125958214-9bdfe2e3-875d-4c6a-ab58-b7cfb40052f2.png" >


    💡 
       - 향수 팔레트 컬러를 클릭하면 해당 색에 대한 검색 결과 표시
       - 서치 결과에서 향수를 클릭하면 해당 디테일 페이지로 이동
       - 향수 위에 마우스 오버하면 향수 제목 표시
       
#### ✔ 향수 디테일 정보 불러오기
<img alt="main" src="https://user-images.githubusercontent.com/55784772/125958299-123e809d-12f2-4714-97e6-fa7f44256c98.png" >

    💡 
       - 해당 향수에 맞는 정보 표시
       - 클릭하면 향수 id로 이동
       - 뒤로가기 버튼 클릭

### 🔨 기술 스택 및 사용 라이브러리

```
    "@types/lodash": "^4.14.170",
    "@types/react-slick": "^0.23.4",
    "axios": "^0.21.1",
    "lodash": "^4.17.21",
    "next": "^11.0.1",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "react-slick": "^0.28.1",
    "recoil": "^0.3.1",
    "slick-carousel": "^1.8.1",
    "styled-components": "^5.3.0",
    "styled-reset": "^4.3.4",
    "swr": "^0.5.6",
    "eslint": "^7.29.0",
    "file-loader": "^6.2.0",
    "prettier": "^2.3.2",
    "stylelint": "^13.13.1",
    "stylelint-config-concentric-order": "^4.0.1",
    "typescript": "4.3.4"
```

<br />

### 🗂 프로젝트 폴더 구조

```
📦.next
 ┣ 📂cache
 ┃ ┣ 📂images
 ┃ ┗ 📂webpack
 ┃ ┃ ┣ 📂client-development
 ┃ ┃ ┗ 📂server-development
 ┣ 📂server
 ┃ ┣ 📂pages
 ┃ ┣ 📂static
 ┃ ┃ ┗ 📂image
 ┃ ┃ ┃ ┗ 📂assets
 ┃ ┃ ┃ ┃ ┣ 📂TestReult
 ┃ ┃ ┃ ┃ ┣ 📂main
 ┃ ┃ ┃ ┃ ┣ 📂product
 ┃ ┃ ┃ ┃ ┣ 📂search
 ┃ ┃ ┃ ┃ ┣ 📂test
 ┃ ┣ 📜pages-manifest.json
 ┃ ┗ 📜webpack-runtime.js
 ┣ 📂static
 ┃ ┣ 📂image
 ┃ ┃ ┗ 📂assets
 ┃ ┃ ┃ ┣ 📂TestReult
 ┃ ┃ ┃ ┣ 📂main
 ┃ ┃ ┃ ┣ 📂product
 ┃ ┃ ┃ ┣ 📂search
 ┃ ┃ ┃ ┣ 📂test
 ┃ ┣ 📂media
 ┃ ┗ 📂webpack
 ┃ ┃ ┣ 📂pages
 ┣ 📜build-manifest.json
 ┗ 📜react-loadable-manifest.json
```
