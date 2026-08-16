디자인 규칙

* 단체명: 위스테이별내 사회적협동조합
* 한 줄 소개: 491세대가 이웃이 되어 함께 가꾸는 협동조합형 공동체 아파트
* 아이콘: icons/icon-192.png
* 주색: #A6452E
* 보조색: #5B6B4F
* 배경색: #EDE7D9
* 글자색: #2B241C
* 느낌: 흙빛과 자연색이 어우러진 따뜻하고 차분한 공동체 감성
* 디자인 상세 규칙은 design.md를 따른다

데이터베이스(Supabase)

* 프로젝트: voicebox0815 (ref: soletccyqdllhlnlijth)
* 키 위치: 루트 `.env`의 `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` (git 추적 제외, `.env.example` 참고)
* 테이블
  * `voices`: id, title, body, author, photo_url, status(접수/처리중/완료), category, created_at, user_id(auth.users 참조 · 작성자, 관리자만 남의 글 수정/삭제 가능)
  * `categories`: id, name(고유), created_at — 분야 목록, 관리자만 추가/삭제 가능(RLS)
  * `admins`: user_id(auth.users 참조, PK), created_at — 관리자 지정 명단, `is_admin()` 함수로 RLS에서 참조
* 스토리지: `photos` 버킷 — 글 사진 1장 업로드

화면 구성

* `/`, `/voices` 목록 · `/voices/new` 쓰기(로그인 필요) · `/voices/:id` 상세 · `/voices/:id/edit` 수정(작성자 본인만)
* `/login`, `/signup` 로그인/회원가입 게이트 · `/auth/callback` 구글 인증 콜백
* `/mypage` 마이페이지: [내가 쓴 글]/[내 정보] 탭
* `/admin` 관리자: [접수된 글]/[분야 관리] 탭 (관리자만 접근)

로그인 흐름

헤더 [로그인]/[회원가입] → 게이트 화면에서 구글 버튼 클릭 → 확인 팝업 → 구글 인증 → `/auth/callback`에서 신규가입/기존로그인 판별해 토스트 → 목록으로 이동. 로그인 후에는 헤더에 구글 프로필 아바타가 뜨고, 클릭하면 마이페이지 · (관리자면) 관리자 화면 · 로그아웃 드롭다운이 열린다.
