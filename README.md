<p align="center">
    <a href="https://www.colfume.com">
        <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0hoKn%2FbtrcOe6TvjA%2FoJYxQxU0znFkRrQAlkoJR0%2Fimg.png" alt="colfume" >
    </a>
    <br />
    <h1 align="center">colfume</h3>
    <p align="center">컬퓸에서 색을 통해 당신의 향을 찾아보세요</p>
    <br />
    <p align="center">
        <a href="https://colfume.vercel.app/">View Demo</a>
    </p>
</p>

<br />
<br />

## About The Project

#### Sopt 28th AppJam - web part

#### Project name : colfume

#### Project period : 2021.06.26 ~ ing

<br />
<br />

## Main Feature

#### ✔ Home

<img alt="main" src="https://user-images.githubusercontent.com/55784772/125957379-e85b0222-71e3-4922-abf3-1373502c7769.png" >

- Header 메뉴 클릭하면 해당 링크로 이동
- Start 버튼 클릭하면 심리 테스트 링크로 이동

<img alt="mood and style" src="https://user-images.githubusercontent.com/55784772/125957546-1d2707af-a282-4ef9-8319-ed0c1f42bed0.png">

- Palette Color 클릭하면 해당 검색 결과 페이지로 이동
- 총 8개의 Color 가 있어서 슬라이더로 표현
- Mood & Style 클릭하면 해당 검색 결과 페이지로 이동

<img alt="main" src="https://user-images.githubusercontent.com/55784772/125957601-b3f8c61f-f6b2-4fc2-aafc-53da89a9d67c.png" >

- Recommendation 향수 사진 위에 Hover 하면 향수 이름 보여줌
- 하나의 상황에 대해 6가지 향수가 있어서 슬라이더로 표현
- 향수를 클릭하면 해당 향수의 디테일 페이지로 이동

<br />
<br />

#### ✔ Color Test - Question

<img alt="main" src="https://user-images.githubusercontent.com/55784772/125957970-bb04aac5-80c0-4f2c-8c22-8ddfadfc890d.png" >

- 사용자가 입력한 테스트의 값 저장
- 사용자 진행 상황을 Progress Bar 로 표현
- 사용자가 7번까지 테스트를 완료하면 로딩뷰 표시

<br />
<br />

#### ✔ Color Test - Result

<img alt="main" src="https://user-images.githubusercontent.com/55784772/125958027-898da592-51a4-4e01-93e9-c595fdcb9b24.png" >

- 사용자 입력 값에 따라 8개의 결과 표시
- 향수 추천을 받아보세요 버튼을 클릭하면 해당 색깔에 대한 Search 결과 페이지로 이동
- 링크 복사를 클릭하면 해당 링크 복사
- 링크 복사를 클릭하면 모달창 표시

<br />
<br />

#### ✔ Search

<img alt="main" src="https://user-images.githubusercontent.com/55784772/125958172-4266d84c-dd82-4c2c-89d2-cf9fef8eeae8.png">

- 제품명, 키워드를 검색하면 그에 맞는 향수 서치 결과 표시
- Mood 와 Style 을 클릭하면 해당 버튼만 Active 효과 표시
- Mood 와 Style 을 클릭하면 해당 서치 결과 표시
- 서치 결과에서 향수를 클릭하면 해당 디테일 페이지로 이동
- 향수 위에 마우스 오버하면 향수 제목 표시

<br />
<br />

#### ✔ Product List

<img alt="main" src="https://user-images.githubusercontent.com/55784772/125958214-9bdfe2e3-875d-4c6a-ab58-b7cfb40052f2.png" >

- 향수 팔레트 컬러를 클릭하면 해당 색에 대한 검색 결과 표시
- 서치 결과에서 향수를 클릭하면 해당 디테일 페이지로 이동
- 향수 위에 마우스 오버하면 향수 제목 표시

<br />
<br />

#### ✔ Product Detail

<img alt="main" src="https://user-images.githubusercontent.com/55784772/125958299-123e809d-12f2-4714-97e6-fa7f44256c98.png" >

- 해당 향수에 맞는 정보 표시
- 클릭하면 향수 id로 이동
- 뒤로가기 버튼 클릭

<br />
<br />

## Folder Structure

```
📦.github
 ┗ 📂ISSUE_TEMPLATE
 ┃ ┗ 📜custom-issue-template.md
 📦assets
 ┣ 📂main
 ┃ ┣ ...
 ┃ ┗ 📜Palette08White.svg
 ┣ 📂...
 ┃ ┣ ...
 ┗ 📜index.ts
 📦components
 ┣ 📂common
 ┃ ┣ ...
 ┃ ┗ 📜WithSize.tsx
 ┣ 📂...
 ┃ ┗ ...
 ┗ 📜index.ts
 📦api
 ┣ 📂detail
 ┃ ┗ 📜detail.ts
 ┣ 📂...
 ┃ ┗ ...
 ┗ 📜index.ts
 📦pages
 ┣ 📂product
 ┃ ┗ 📜[id].tsx
 ┣ 📂test
 ┃ ┗ 📂result
 ┃ ┃ ┗ 📜[id].tsx
 ┣ 📜index.tsx
 ┣ 📜product.tsx
 ┣ 📜search.tsx
 ┣ 📜test.tsx
 ┣ 📜_app.tsx
 ┗ 📜_document.tsx
 📦public
 ┣ 📂fonts
 ┃ ┣ ...
 ┃ ┗ 📜NotoSansKR-Thin.otf
 ┃ ┣ ...
 ┗ 📜favicon.ico
 📦states
 ┣ ...
 ┗ 📜test.ts
 📦styles
 ┣ 📜global-style.ts
 ┣ 📜styled.d.ts
 ┗ 📜theme.ts
 📦types
 ┣ ...
 ┗ 📜product.ts
 📜.eslintrc.json
 📜.gitignore
 📜.prettierrc.json
 📜.stylelintrc
 📜LICENSE
 📜next-env.d.ts
 📜next.config.js
 📜package.json
 📜README.md
 📜tsconfig.json
 📜yarn.lock
```

<br />
<br />

## Built With

| React | styled-components | Recoil | Next.js |
| :---: | :---------------: | :----: | :-----: |

```json
"@types/lodash": "^4.14.170",
"@types/react-responsive": "^8.0.3",
"@types/react-slick": "^0.23.4",
"axios": "^0.21.1",
"lodash": "^4.17.21",
"next": "^11.0.1",
"react": "17.0.2",
"react-copy-to-clipboard": "^5.0.3",
"react-dom": "17.0.2",
"react-responsive": "^8.2.0",
"react-sizeme": "^3.0.1",
"react-slick": "^0.28.1",
"recoil": "^0.3.1",
"slick-carousel": "^1.8.1",
"styled-components": "^5.3.0",
"styled-reset": "^4.3.4",
"swr": "^0.5.6"
```

<br />
<br />

## Getting Started

#### Prerequisites

```
npm install --global yarn
```

#### Installation

1. Clone the Repo

```
git clone https://github.com/mnxmnz/colfume-frontend.git
```

```
cd colfume-frontend
```

2. Install Project Packages

```
yarn
```

3. Run the Project (Dev Mode)

```
yarn dev
```

<br />
<br />

## Contributing

1. Fork the Project
2. Create your Feature Branch (git checkout -b feat/AmazingFeature)
3. Commit your Changes (git commit -m 'add: some AmazingFeature')
4. Push to the Branch (git push origin feat/AmazingFeature)
5. Open a Pull Request

<br />
<br />

## License

Distributed under the MIT License. See `LICENSE` for more information.

<br />
<br />

## Contact

|                                                 김민지                                                  |                                                 손예지                                                  |                                                                          김소령                                                                          |                                                 김영서                                                  |
| :-----------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/48766355?v=4" alt="profile" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/55784772?v=4" alt="profile" width="100" height="100"> | <img src="https://user-images.githubusercontent.com/55784772/124715910-74793900-df3e-11eb-9745-2601765cd046.png" alt="profile" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/79343830?v=4" alt="profile" width="100" height="100"> |
|                                   [mnxmnz](https://github.com/mnxmnz)                                   |                                 [yezgoget](https://github.com/yezgoget)                                 |                                                        [soryeongk](https://github.com/soryeongk)                                                         |                              [kimyeongseo](https://github.com/kimyeongseo)                              |
