



## 📃 **_고민접기, 당신의 고민을 접어드립니다._**
![thumbnail-01](https://user-images.githubusercontent.com/112849712/207773647-0f8d2c2a-51b9-4d98-a10b-76f5da19fb33.jpg)

>“**오늘 뭐 먹지…?” “이럴 땐 어떻게 해야 하는 걸까…”**<br/>
>너무 사소하거나 너무 무거워서 남들에게 쉽게 꺼낼 수 없었던 고민이 있으신가요?<br/>
>저희 고민접기는 여러분들의 크고 작은 다양한 고민을 접을 수 있도록 도와주는 커뮤니티입니다.<br/>
><br/>
>**[:iphone: 고민접기 링크](https://gomin.site)**<br/>
>**[📎 Backend](https://github.com/gomin-solution/Backend)**<br/>

<br/>

## 💡 **_주요 기능_**
-   매일 색다른 행운 편지
-   골라주기 게시글 작성 후 투표하기
-   답해주기 게시글 작성하고 다른 유저들의 의견 받기
-   대화하고 싶은 유저와 1:1 쪽지하기
-   미션 완료 후 귀여운 종이접기 획득하기
-   미션 완료에 따른 등급 상승
<br/>



| 매일 색다른 행운 편지 | 골라주기 작성 후 투표하기 | 답해주기 작성하고 의견 받기 |
|:---: | :---: | :---: |
| ![편지](https://user-images.githubusercontent.com/112849712/207931147-af4eea01-a930-4e17-a326-5a750cd98293.gif)| ![골라주기](https://user-images.githubusercontent.com/112849712/207931260-90a786a9-7aca-44f9-9f49-524164928eb5.gif) |![답해주기](https://user-images.githubusercontent.com/112849712/207931359-4576b136-a1a8-436d-887d-e0007f5a9dd5.gif) |

| 유저와 1:1 쪽지하기 |  미션 완료 후 종이접기 획득하기 | 미션 완료에 따른 등급 상승 |
|:---: | :---: | :---: |
| <img src="https://user-images.githubusercontent.com/112849712/207931481-fffa89d9-d49e-46a5-a501-c05d4f61392b.gif" width="300" /> | ![보관함](https://user-images.githubusercontent.com/112849712/207931549-9ec6f670-0c2c-4804-971a-8960a91bd943.gif) | ![등급](https://user-images.githubusercontent.com/112849712/207931603-4bfb07c9-4972-4cd4-8619-0e281f29514f.gif) |
<br/>

## 🛠️ **_프로젝트 아키텍처_**
![image](https://user-images.githubusercontent.com/112886992/207830402-6c6de0dd-ba40-4c88-bd6c-c59e3a6924a1.png)

<br/>


<br/>

## ⚙️ **_기술 스택_**

**Frontend**<br /> <br />
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> 
<br />
<br />
<img src="https://img.shields.io/badge/React Hook Form-EC5990?style=for-the-badge&logo=React&logoColor=white"> 
<img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> 
<img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white">
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
<br />
<br />
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
<img src="https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=PWA&logoColor=white">
<img src="https://img.shields.io/badge/FCM-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white">
<img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=Socket.io&logoColor=white">
<img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=Netlify&logoColor=white">
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white">

<br/>

## 🔩 **_기술 스택 & 라이브러리 사용 이유_**
**<details><summary>React-Query</summary>**
-   **친숙한 React Hook을 사용 :** 복잡하고 장황한 코드가 필요한 다른 데이터 불러오기 방식과 달리 React Component 내부에서 간단하고 직관적으로 API를 사용할 수 있습니다.
-   ************서버 상태 관리와 관련된 반복적인 작업들을 쉽게 처리 :************ 서버에서 받아오는 데이터를 처리할때 useEffect로 해결해야 했던 여러 가지 상황들을 refetchOnMount, refetchOnReconnect, refetchOnWindowFocus와 같은 옵션으로 쉽게 처리할 수 있습니다.
-   **Infinite scroll :** 서비스 특성상 모바일 환경에 최적화되어 있기 때문에 무한스크롤을 도입하는 것이 필수라고 생각했습니다. 데이터를 한 번에 받아오지 않고 10개 항목씩 받아오기 때문에 렌더링 시간을 많이 단축할 수 있었습니다.
-   **Optimistic update UI (낙관적 업데이트) :** ‘고민접기’의 ‘골라주기’ 탭에서 항목 선택 시 투표 결과를 보여주도록 구현이 되어 있습니다. 처음 서비스 개발 당시엔 데이터를 받아온 후 리렌더링 되어 유저가 결과를 볼 수 있도록 되어 있어서 즉각적인 결과를 보길 원하는 유저는 불편함을 느꼈습니다. 이를 개선하기 위해 react-query에 낙관적 업데이트를 적용하여 데이터가 정상적으로 받아올 것이란 걸 예상하여 반영하는 로직을 추가할 수 있었습니다.
</details>

**<details><summary>socket.io-client</summary>**
- 유저 간에 1:1 실시간 대화 기능 구현 : webSocket은 브라우저 별로 지원하는 버전이 다르고 지원하지 않는 브라우저도 있습니다. Soket.io는 webSocket 보다는 무겁지만 socket통신을 지원하지 않는 브라우저도 Websocket 방식을 이용해 통신할 수 있게 하고 연결 실패시 자동으로 재연결 시도를 해주는 등 연결 신뢰성이 높고 더 다양한 기능을 제공하기 때문에 socket.io를 사용하게 되었습니다.
</details>

**<details><summary>styled-compoenents</summary>**
-   **조건부 스타일링** : 투표가 진행중인지, 마감인지에 따라 스타일링을 다르게 해야 했습니다. 이때 컴포넌트 내부에서 css를 작성할 수 있으므로 props를 통해 손 쉽게 조건부 스타일링이 가능합니다. 또한 자주 사용하는 테마 css 설정 값을 props로 받을 수 있어 코드가 절약 됩니다.
-   **전역 스타일** : css reset을 선언하여 브라우저마다 공통적인 스타일링을 줄 수 있습니다. 또한 모바일 반응형을 위한 미디어쿼리, 폰트, 엘리먼트 스타일 등을 전역적으로 쓰기 간편합니다.
</details>

**<details><summary>PWA</summary>**
-   서비스를 모바일환경에 최적화 하기 위해 도입하였습니다. 서버로부터 받아오는 데이터 외의 데이터를 캐싱하고 있기 때문에 속도가 개선되며, 일반 앱처럼 앱아이콘이 생기므로 접근성을 향상시킬 수 있습니다.
</details>

**<details><summary>FCM</summary>**
-   **실시간 알림 기능 구현** : 유저의 게시물에 댓글이 달리거나 유저가 쪽지를 받았을 때처럼 유저에게 즉각적으로 알려주는 기술이 추가되면 사용자경험이 향상될 것이라고 생각했습니다. FCM을 사용하면 백그라운드뿐만 아니라 포그라운드 환경에서도 알림을 받을 수 있습니다.
-   **리소스 절약** : 서버를 경유해서 실시간으로 알람을 받으려면 사용자는 항상 서버에 접속해 있어야 해서 사용자 기기의 배터리 및 네트워크 리소스를 크게 낭비하지만, FCM의 경우 FCM서버가 중간에 연결되어 있기 때문에 사용자는 배터리 소모를 줄이고 네트워크의 사용만으로도 메세지를 실시간으로 송수신 처리를 할 수 있습니다.
</details>

<br/>

## ⚠️ **_기술적 도전 및 트러블 슈팅_**
**<details><summary>즉각적인 반응 처리로 사용자 경험 증대(optimistic update UI)</summary>**

|구분|내용|
|------|---|
|문제상황|변경사항을 즉각적으로 유저에게 보여주지 못함|
|요구사항|골라주기 항목 선택, 북마크, 좋아요 기능은 유저가 클릭 시 변경사항을 즉각적으로 보여줘야 함|
|의사결정|React-query의 onMutate, onError, onSettled 옵션을 사용하여 조건에 따른 낙관적 업데이트 적용|
|근거|데이터 통신이 성공할 것을 예상하여 미리 반영 가능 실패 시 원래의 값으로 돌릴 수 있음|

</details>

**<details><summary>알림 기능 도입(Firebase Cloud Messaging)</summary>**
	
|구분|내용|
|---|---|
|요구사항|유저의 편의성을 위한 알림기능 구현|
|선택지|socket.io, FCM|
|의사결정|FCM|
|근거|socket.io는 백그라운드에서 알림을 보낼 수 없으므로<br/>FCM 의 onBackgroundMessage, onMessage를 사용하여 백그라운드 환경에서도 알림 기능 구현|

</details>

**<details><summary>리워드 페이지 응답 개선</summary>**

|구분|내용|
|------|---|
|문제상황|리워드 페이지 조회 시 서버 데이터 응답시간이 평균 2초대 소요<br/>유저활동 기록이 많아질수록 응답시간 또한 길어짐|
|요구사항|DB에 유저활동 기록 테이블을 추가하여 활동 기록에 변경을 주는 요청마다<br/>유저활동 기록을 가져오는 정보의 속도 개선|
|의사결정|활동 기록을 업데이트 하는 형태로 변경|
|근거|유저활동을 따로 기록하여 저장하고 리워드 조회 시 불필요한 조인을 최소화하여<br/>데이터를 받아오는 속도가 약 90% 개선됨|

</details>
<br/>

## ‼️ **_유저 피드백 개선_**
### **총 피드백 78개 중, 유효 피드백 58개, 반영 피드백 46개**
- 인트로 페이지 이미지 리사이징 및 서버인증  미들웨어 개선을 통한 서비스 속도 향상
- Intro에서 슬라이드 버튼과 스킵 버튼을 추가하여 편의성을 증대
- 골라주기 항목 타이틀의 가독성을 높이고 본인이 선택한 항목 표기
- 받아올 데이터가 없어서 빈 화면일 때 단순 텍스트가 아닌 이미지를 넣어서 완성도 향상
<br/>

## 📸 **_고민 접기의 팀원_**
|역할|이름|Github|
|------|---|---|
|FE🍀|홍정표|[Github](https://github.com/Jeongpyo-Hong)|
|FE|정도은|[Github](https://github.com/do-eun)|
|BE🍀|이승표|[Github](https://github.com/leeSP22)|
|BE|이준|[Github](https://github.com/Leejun2022)|
|BE|손민성|[Github](https://github.com/Tarel-Github)|
|DE|이현서|디자이너|
