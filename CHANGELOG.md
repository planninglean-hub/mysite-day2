# CHANGELOG

모든 Git 커밋 이력을 최신순으로 기록합니다. 새 커밋은 표 최상단에 추가합니다.

| 일시 | 유형 | 범위 | 변경내용 | 변경사유 | 작성AI |
|---|---|---|---|---|---|
| YYYY-MM-DD HH:MM | feat/fix/refactor/docs/chore | area-or-folder | 변경 요약 | 변경 이유·목적 | Claude/Codex/Gemini |
| 2026-08-16 16:22 | feat | src/context, src/components/Header, src/pages/AuthGatePage, src/pages/AuthCallbackPage, src/pages/MyPage, src/pages/VoiceEditPage, src/lib/voicesApi.js, supabase(voices RLS) | 구글 로그인/회원가입 흐름 추가: AuthContext·ToastContext, 헤더 로그인/회원가입 버튼과 로그인 후 아바타+드롭다운(마이페이지/로그아웃), /login·/signup 게이트 화면과 구글 확인 팝업, /auth/callback에서 신규가입·기존로그인 판별 토스트, 마이페이지(내가 쓴 글/내 정보) 탭과 글 수정·삭제, voices.user_id 컬럼 및 본인 글만 수정/삭제 가능한 RLS 정책 | 비로그인 상태의 서비스에 실제 사용자 계정·소유권 개념을 도입해 글 작성자를 식별하고 본인 글만 관리할 수 있게 하기 위함 | Claude |
| 2026-08-15 17:50 | feat | src/lib, src/pages, src/data | Supabase 연동(voices 테이블 조회/저장), 사진 첨부 1장 제한, mockVoices→categories 정리, tokens.css error 색상 보완 | 목소리함 화면을 실제 Supabase 백엔드에 연결해 의견이 저장·조회되도록 하기 위함 | Claude |
| 2026-08-15 18:10 | feat | src/lib, src/components/PhotoUploadField, src/pages/VoiceNewPage | Supabase Storage(photos 버킷) 연동, 글쓰기에서 실제 사진 업로드→공개 URL 저장 | 미리보기만 되던 사진 첨부를 실제 저장·표시까지 되는 사진 제보 기능으로 완성하기 위함 | Claude |
| 2026-08-15 18:25 | fix | vercel.json | SPA 라우팅 rewrite 추가 (모든 경로를 index.html로) | Vercel 배포에서 /voices 등으로 새로고침 시 404가 나는 문제 수정 | Claude |
| 2026-08-15 18:32 | fix | src/components/PhotoUploadField | 사진 첨부 드롭존에 실제 onDragOver/onDrop 핸들러 추가, 드래그 중 하이라이트 스타일 추가 | "끌어다 놓으세요" 안내 문구만 있고 실제 드래그앤드롭 기능이 구현되지 않았던 버그 수정 | Claude |
| 2026-08-15 19:13 | feat | src/App.jsx, src/components/HeroBanner, design.md | 루트(/) 리다이렉트 제거해 목록을 바로 표시, 목록 위 히어로 배너(아이콘+단체명·한줄소개·의견 남기기 버튼) 추가, design.md에 페이지 골격(헤더·히어로·푸터) 규격 추가 | 아직 없는 화면을 가정한 리다이렉트를 걷어내고, 핵심 기능인 의견 목록을 진짜 홈으로 만들기 위함 | Claude |
| 2026-08-15 19:26 | fix | src/pages/VoiceListPage, src/components/HeroBanner, src/App.jsx, design.md | 목록 상단 "의견 쓰기" 버튼 제거(히어로 "의견 남기기"와 중복), 히어로에 실데이터 통계(누적 의견·처리 완료 건수) 추가 | 같은 동작을 하는 CTA 버튼 2개가 중복 노출되던 것을 정리하고, 휑했던 히어로 여백을 실제 Supabase 데이터로 채우기 위함 | Claude |
