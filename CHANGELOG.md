# CHANGELOG

모든 Git 커밋 이력을 최신순으로 기록합니다. 새 커밋은 표 최상단에 추가합니다.

| 일시 | 유형 | 범위 | 변경내용 | 변경사유 | 작성AI |
|---|---|---|---|---|---|
| YYYY-MM-DD HH:MM | feat/fix/refactor/docs/chore | area-or-folder | 변경 요약 | 변경 이유·목적 | Claude/Codex/Gemini |
| 2026-08-15 17:50 | feat | src/lib, src/pages, src/data | Supabase 연동(voices 테이블 조회/저장), 사진 첨부 1장 제한, mockVoices→categories 정리, tokens.css error 색상 보완 | 목소리함 화면을 실제 Supabase 백엔드에 연결해 의견이 저장·조회되도록 하기 위함 | Claude |
| 2026-08-15 18:10 | feat | src/lib, src/components/PhotoUploadField, src/pages/VoiceNewPage | Supabase Storage(photos 버킷) 연동, 글쓰기에서 실제 사진 업로드→공개 URL 저장 | 미리보기만 되던 사진 첨부를 실제 저장·표시까지 되는 사진 제보 기능으로 완성하기 위함 | Claude |
| 2026-08-15 18:25 | fix | vercel.json | SPA 라우팅 rewrite 추가 (모든 경로를 index.html로) | Vercel 배포에서 /voices 등으로 새로고침 시 404가 나는 문제 수정 | Claude |
| 2026-08-15 18:32 | fix | src/components/PhotoUploadField | 사진 첨부 드롭존에 실제 onDragOver/onDrop 핸들러 추가, 드래그 중 하이라이트 스타일 추가 | "끌어다 놓으세요" 안내 문구만 있고 실제 드래그앤드롭 기능이 구현되지 않았던 버그 수정 | Claude |
