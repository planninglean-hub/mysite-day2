---
name: 위스테이별내 사회적협동조합
tagline: 491세대가 이웃이 되어 함께 가꾸는 협동조합형 공동체 아파트
colors:
  surface: "#EDE7D9"
  surface-dim: "#D8CFBC"
  surface-bright: "#FBF8F0"
  surface-container-lowest: "#FFFFFF"
  surface-container-low: "#F5F1E6"
  surface-container: "#EFE9DB"
  surface-container-high: "#E7E0CF"
  surface-container-highest: "#DFD7C2"
  on-surface: "#2B241C"
  on-surface-variant: "#5C5245"
  inverse-surface: "#362E23"
  inverse-on-surface: "#F5EFE2"
  outline: "#8A7C68"
  outline-variant: "#D9CFBA"
  surface-tint: "#A6452E"
  primary: "#A6452E"
  on-primary: "#FFFFFF"
  primary-container: "#F0D9CD"
  on-primary-container: "#4A1D0F"
  inverse-primary: "#E8A491"
  secondary: "#5B6B4F"
  on-secondary: "#FFFFFF"
  secondary-container: "#DCE3D2"
  on-secondary-container: "#24301C"
  tertiary: "#8C6A2F"
  on-tertiary: "#FFFFFF"
  tertiary-container: "#EDE0C4"
  on-tertiary-container: "#4A3710"
  error: "#BA1A1A"
  on-error: "#FFFFFF"
  error-container: "#FFDAD6"
  on-error-container: "#93000A"
  primary-fixed: "#F6E4DB"
  primary-fixed-dim: "#E8A491"
  on-primary-fixed: "#3A140A"
  on-primary-fixed-variant: "#7A331F"
  secondary-fixed: "#E3E9DA"
  secondary-fixed-dim: "#B7C4A8"
  on-secondary-fixed: "#1E2817"
  on-secondary-fixed-variant: "#445238"
  tertiary-fixed: "#F1E6CB"
  tertiary-fixed-dim: "#D2B876"
  on-tertiary-fixed: "#2E2103"
  on-tertiary-fixed-variant: "#6B4F1D"
  background: "#EDE7D9"
  on-background: "#2B241C"
  surface-variant: "#E4DCC8"
typography:
  display:
    fontFamily: Pretendard
    fontSize: 40px
    fontWeight: "800"
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Pretendard
    fontSize: 28px
    fontWeight: "700"
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Pretendard
    fontSize: 22px
    fontWeight: "700"
    lineHeight: 30px
  title-md:
    fontFamily: Pretendard
    fontSize: 18px
    fontWeight: "600"
    lineHeight: 26px
  body-lg:
    fontFamily: Pretendard
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 26px
  body-md:
    fontFamily: Pretendard
    fontSize: 15px
    fontWeight: "400"
    lineHeight: 24px
  label-lg:
    fontFamily: Pretendard
    fontSize: 15px
    fontWeight: "600"
    lineHeight: 20px
    letterSpacing: 0.01em
  meta-sm:
    fontFamily: Pretendard
    fontSize: 13px
    fontWeight: "500"
    lineHeight: 18px
    letterSpacing: 0.01em
rounded:
  sm: 0.5rem
  DEFAULT: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
  gutter: 16px
  margin: 24px
shadow:
  sm: "0 1px 3px rgba(43, 36, 28, 0.08)"
  md: "0 6px 16px rgba(166, 69, 46, 0.10)"
  lg: "0 16px 32px rgba(166, 69, 46, 0.14)"
breakpoints:
  mobile:
    maxWidth: 599px
    columns: 1
  tablet:
    minWidth: 600px
    maxWidth: 1023px
    columns: 2
  desktop:
    minWidth: 1024px
    columns: 3
    containerMaxWidth: 1200px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.DEFAULT}"
    padding: "12px {spacing.lg}"
  button-primary-hover:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
  button-secondary:
    backgroundColor: transparent
    borderColor: "{colors.outline}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.DEFAULT}"
    padding: "12px {spacing.lg}"
  button-secondary-hover:
    backgroundColor: "{colors.surface-container-high}"
  button-google:
    backgroundColor: "#FFFFFF"
    borderColor: "{colors.outline-variant}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.DEFAULT}"
    padding: "12px {spacing.lg}"
    note: "구글 브랜드 가이드 예외 - 배경 흰색 고정"
  button-status-received:
    backgroundColor: "{colors.tertiary-container}"
    textColor: "{colors.on-tertiary-container}"
    typography: "{typography.label-lg}"
    padding: "10px {spacing.md}"
  button-status-progress:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    typography: "{typography.label-lg}"
    padding: "10px {spacing.md}"
  button-status-done:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    typography: "{typography.label-lg}"
    padding: "10px {spacing.md}"
  button-status-unselected:
    backgroundColor: transparent
    borderColor: "{colors.outline-variant}"
    textColor: "{colors.on-surface-variant}"
  button-status-group:
    roundedOuter: "{rounded.DEFAULT}"
    roundedInner: 0px
    gap: 0px
    note: "왼쪽 끝은 바깥쪽만, 오른쪽 끝은 바깥쪽만 roundedOuter, 가운데 버튼은 roundedInner(각짐)"
  tab:
    height: 48px
    typography: "{typography.title-md}"
    activeColor: "{colors.on-surface}"
    activeIndicator: "{colors.primary}"
    inactiveColor: "{colors.on-surface-variant}"
    dividerColor: "{colors.outline-variant}"
  card-post:
    backgroundColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    shadow: "{shadow.sm}"
    shadowHover: "{shadow.md}"
    thumbnailRatio: "4 / 3"
  list-item-post:
    backgroundColor: transparent
    padding: "{spacing.sm}"
    rounded: "{rounded.sm}"
  list-item-post-hover:
    backgroundColor: "{colors.surface-container-high}"
  badge-status-received:
    backgroundColor: "{colors.tertiary-container}"
    textColor: "{colors.on-tertiary-container}"
    typography: "{typography.meta-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"
  badge-status-progress:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    typography: "{typography.meta-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"
  badge-status-done:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    typography: "{typography.meta-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"
  chip-category:
    backgroundColor: "{colors.surface-container-high}"
    borderColor: "{colors.outline-variant}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.meta-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"
  chip-category-selected:
    backgroundColor: "{colors.inverse-surface}"
    textColor: "{colors.inverse-on-surface}"
    borderColor: transparent
  input-field:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  textarea-field:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
    minHeight: 160px
  upload-dropzone:
    backgroundColor: "{colors.surface-container-low}"
    borderColor: "{colors.outline-variant}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  thumbnail:
    size: 72px
    rounded: "{rounded.sm}"
  card-auth:
    backgroundColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
    shadow: "{shadow.md}"
    maxWidth: 400px
  avatar:
    backgroundColor: "{colors.surface-container-highest}"
    textColor: "{colors.on-surface-variant}"
    rounded: "{rounded.full}"
    size: 24px
  header:
    height: 64px
    backgroundColor: "{colors.surface-container-lowest}"
    borderBottom: "1px solid {colors.outline-variant}"
    padding: "0 {spacing.margin}"
    iconSize: 32px
    gap: "{spacing.sm}"
    typography: "{typography.title-md}"
    textColor: "{colors.on-surface}"
  hero-banner:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    padding: "{spacing.xxl} {spacing.margin}"
    contentMaxWidth: 640px
    headlineTypography: "{typography.headline-lg}"
    bodyTypography: "{typography.body-lg}"
  footer:
    backgroundColor: "{colors.inverse-surface}"
    textColor: "{colors.inverse-on-surface}"
    padding: "{spacing.xl} {spacing.margin}"
    typography: "{typography.body-md}"
    metaTypography: "{typography.meta-sm}"
---

## 브랜드 & 스타일

위스테이별내 사회적협동조합은 491세대가 이웃이 되어 함께 가꾸는 협동조합형 공동체 아파트다. 화면은 관공서 서식처럼 딱딱하지도, 상업 서비스처럼 화려하지도 않게 — **흙빛과 자연색이 어우러진 따뜻하고 차분한 공동체 감성**을 기준으로 삼는다.

핵심 화면은 **우리 동네 목소리함**(입주민 제안·의견함)과 **커뮤니티 게시판**이다. 둘 다 "이웃이 말을 걸고, 이웃이 듣는다"는 톤을 유지해야 하므로, 화면은 항상 사람이 쓴 글이 주인공이 되도록 여백을 넉넉히 두고 장식은 최소화한다.

## 색

- **주색 `#A6452E`(테라코타)** — 글쓰기·제출·강조 버튼, 활성 상태, 핵심 액션에만 좁게 쓴다.
- **보조색 `#5B6B4F`(올리브그린)** — 보조 액션, 내비게이션 강조, 신뢰·안정 정보에 쓴다.
- **3차색 `#8C6A2F`(황토/겨자)** — CLAUDE.md에 없어 이번에 정한 색. "접수" 상태 배지처럼 주색·보조색과 겹치지 않는 중립 강조가 필요할 때만 쓴다.
- **배경색 `#EDE7D9`(따뜻한 베이지)** — 페이지 바탕은 항상 이 색 계열(`surface`, `surface-container-*`)을 유지한다.
- **글자색 `#2B241C`(짙은 흙갈색)** — 본문 텍스트 기본값. 메타 정보처럼 톤을 낮출 때는 `on-surface-variant(#5C5245)`를 쓴다.
- **테두리(outline)** `#8A7C68` / **연한 테두리(outline-variant)** `#D9CFBA` — 입력창·구분선에 사용. 진한 검정 테두리는 쓰지 않는다.
- **그림자 색**은 순수 회색이 아니라 주색을 아주 옅게 섞는다(아래 "그림자" 참고) — 흙빛 톤에서 그림자만 차갑게 뜨는 것을 막기 위해서다.
- 모든 색은 반드시 짝을 이루는 `on-*` 토큰과 함께 쓴다(예: `primary` 배경엔 `on-primary` 글자).

## 타이포그래피

폰트는 **Pretendard**(실패 시 `-apple-system, BlinkMacSystemFont, "Malgun Gothic", sans-serif` 순으로 대체)를 쓴다. 이웃에게 말을 거는 서비스이므로 과하게 각진 폰트보다 둥글고 읽기 편한 Pretendard가 CLAUDE.md의 "따뜻하고 차분한" 톤에 맞는다고 판단해 정했다.

4단계로만 구분해서 쓴다.

| 용도 | 토큰 | 크기/굵기 |
|---|---|---|
| 제목 | `headline-lg`(페이지) / `headline-md`(섹션) / `title-md`(카드·글 제목) | 28·22·18px, 700~600 |
| 본문 | `body-lg`(강조 본문) / `body-md`(기본 본문) | 16·15px, 400 |
| 메타 | `meta-sm` (작성자·작성일·조회수·세대 정보) | 13px, 500 |
| 버튼 | `label-lg` (버튼·탭·칩 라벨) | 15px, 600 |

`display`(40px)는 랜딩 성격의 큰 타이틀에만 예외적으로 쓴다.

## 레이아웃 · 간격 · 반응형

- **간격은 8px 리듬**을 따르며 `xs 4 · sm 8 · md 16 · lg 24 · xl 40 · xxl 64`px 중에서만 고른다. 목록/카드 내부는 `sm~md`, 섹션 사이 세로 간격은 `lg~xl`을 쓴다.
- **컨테이너 최대폭**은 `1200px`, 좌우 여백(`margin`)은 `24px`, 그리드 간격(`gutter`)은 `16px`로 고정한다.
- **반응형 3폭**
  - 모바일 (~599px): **1열**
  - 태블릿 (600~1023px): **2열**
  - PC (1024px~): **3열**, 컨테이너는 가운데 정렬 후 1200px에서 멈춘다.
- 카드형 목록(목소리함, 게시판)은 이 3단 그리드를 기본으로 하고, 열 수를 임의로 늘리지 않는다.
- 예외 1: 관리자 "접수된 글"처럼 `list-item-post`(가로 1줄 리스트)를 쓰는 화면은 화면 폭과 관계없이 항상 1열이다 — 이 그리드 규칙은 `card-post` 그리드에만 적용된다.
- 예외 2: 게이트 화면(`/login`, `/signup`)은 이 그리드를 쓰지 않는다. 화면 폭과 관계없이 항상 가운데 정렬된 카드 1개(`card-auth`, 최대폭 400px)만 놓는다.

## 그림자 · 깊이

- **그림자 3단계만** 쓴다: `sm`(카드 기본) · `md`(호버/선택) · `lg`(모달·팝오버).
- 색은 검정이 아니라 **주색을 8~14% 정도 옅게 섞은 톤**을 쓴다. 블러는 넓고 퍼짐은 부드럽게(`sm` 3px, `md` 16px, `lg` 32px) — 딱딱한 그림자 대신 은은하게 뜬 느낌을 준다.
- 표면 위계는 그림자보다 **면 색 단계**(`surface` → `surface-container` → `surface-container-lowest`)로 먼저 표현하고, 그림자는 그 위에 살짝 더하는 정도로만 쓴다.

## 모양(Shapes)

- **모서리 반경 5단계만** 쓴다: `sm 8px`(입력창·배지 내부 요소) · `DEFAULT 12px`(버튼) · `lg 16px`(카드) · `xl 24px`(큰 섹션·모달) · `full`(배지·아바타·칩).
- 임의의 반경(3px, 10px 등)은 쓰지 않는다.
- 아이콘·일러스트 선도 각진 직선보다 둥근 끝처리를 우선한다(아래 "아이콘" 참고).

## 아이콘

이번 세션에서 확정한 서비스 아이콘("품은 집")을 기준으로 삼는다.

- 기본 배경은 보조색(`#5B6B4F`), 집 심볼은 흰색, 지붕 아래 어깨를 나란히 한 두 이웃은 주색(`#A6452E`)으로 표현한다.
- 원본: `icon-src.svg`(라운드 배경) / `icon-maskable-src.svg`(풀블리드, 심볼 20% 축소)
- 배포용: `icons/icon-192.png`, `icons/icon-512.png`, `icons/icon-maskable-512.png`, `icons/favicon.ico`
- UI 내부에서 이 아이콘의 색 조합(보조색 배경 + 흰색 + 주색 포인트)을 다른 용도로 재사용하지 않는다 — 브랜드 마크 전용으로 남겨둔다.

## 페이지 골격

카드·배지 같은 낱개 컴포넌트와 별개로, 화면을 감싸는 뼈대(헤더·히어로·푸터)를 정한다. 색·타이포·간격은 위에서 정한 토큰만 재사용하고 새 값은 만들지 않는다.

### 헤더 (`header`)

- 높이 `64px` 고정, 스크롤해도 상단에 계속 보이게(`sticky`) 한다
- 왼쪽부터 서비스 아이콘(32px, `icons/icon-192.png`) → 간격 `sm(8px)` → 단체명(`title-md`, `on-surface`)
- 배경 `surface-container-lowest`(흰색), 페이지 배경(`surface`)과 구분되도록 하단에 `outline-variant 1px` 선만 긋는다 — 그림자는 얹지 않는다(면 색 구분만으로 충분)
- 좌우 여백은 컨테이너 규칙과 동일하게 `margin(24px)`
- 아이콘의 색 조합(보조색 배경 + 흰 집 + 주색 사람)은 헤더 안에서 다시 칠하지 않는다 — 원본 아이콘 파일을 그대로 얹는다

### 홈 히어로 배너 (`hero-banner`)

- 배경 `secondary-container`(연한 올리브, #DCE3D2), 글자 `on-secondary-container` — **주색은 쓰지 않는다**(아래 "하지 말 것" 참고)
- 안쪽 여백 위아래 `xxl(64px)`, 좌우 `margin(24px)`
- 내용은 가운데 정렬, 텍스트 폭은 `640px`로 좁혀 가독성을 확보한다(입력 폼과 같은 좁힘 규칙)
- 구조(위→아래): 제목(`headline-lg`, 단체명 또는 환영 문구) → 소개 문구(`body-lg`, CLAUDE.md 한 줄 소개 "491세대가 이웃이 되어 함께 가꾸는...") → 필요하면 `button-primary` 하나(예: "의견 남기기")
- 카드가 아니라 화면 폭 전체를 쓰는 띠(band)이므로 `rounded` 값을 쓰지 않는다 — 모서리 없이 사각형 그대로 둔다

### 푸터 (`footer`)

- 배경 `inverse-surface`(짙은 흙갈색, #362E23), 글자 `inverse-on-surface` — 페이지 가장 아래를 눌러 마무리하는 용도로 이미 정의된 반전 색을 그대로 쓴다(새 색 없음)
- 안쪽 여백 위아래 `xl(40px)`, 좌우 `margin(24px)`
- 내용: 단체명(`body-md`) → 한 줄 소개(`meta-sm`, 톤 낮춤) 순으로 세로 배치
- 헤더와 마찬가지로 화면 폭 전체를 쓰는 띠이므로 `rounded` 값을 쓰지 않는다

## 컴포넌트

오늘 함께 만드는 공통기능 네 가지 — **글 저장하기 · 사진 올리기 · 로그인&회원가입 · 처리상태&관리자 화면** — 를 기준으로 아래 여섯 가지 규격을 정한다.

### 게시글 카드 (`card-post`)

제보/글 하나를 나타내는 기본 단위. 목소리함과 커뮤니티 게시판 모두 이 카드를 쓴다.

- 구조(위→아래): **사진 썸네일**(4:3, 사진이 있을 때만, 카드 상단에 꽉 차게) → **상태 배지 + 분야 칩**(가로 나열, 간격 4px) → **제목**(`title-md`, 최대 2줄) → **본문 미리보기**(`body-md`, `on-surface-variant`, 최대 2줄) → **메타**(작성자 · 작성시간, `meta-sm`)
- 텍스트 영역 안쪽 여백 `lg(24px)`, 요소 사이 세로 간격 `sm(8px)`. 사진은 카드 폭에 꽉 차게 붙이고 텍스트만 안쪽 여백을 준다
- 배경 `surface-container-lowest`, 모서리 `rounded.lg(16px)` — 사진이 있으면 위쪽 두 모서리만 둥글고 아래는 각지게(`overflow: hidden`으로 카드 전체 둥근 테두리는 유지)
- 그림자 기본 `shadow.sm`, 호버·클릭 가능 상태에서 `shadow.md`
- 사진이 없는 글은 썸네일 영역을 생략하고 바로 배지·칩부터 시작한다 — 빈 회색 박스를 넣지 않는다
- 메타의 작성자 이름 앞에는 `avatar`(중립색, 24px, 원형)를 붙일 수 있다. 상태 배지의 3색과 겹치지 않도록 항상 중립 배경(`surface-container-highest`)만 쓴다
- 목록이 빽빽해야 하는 화면(관리자 "접수된 글" 등)은 같은 정보를 `list-item-post`(가로 1줄, 썸네일은 왼쪽에 48px 정사각형)로 압축해서 쓴다

### 상태 배지 (`badge-status-*`)

접수 처리 흐름 3단계를 CLAUDE.md 색만으로 구분한다. 새 색을 추가하지 않고 이미 정의된 container 색에 상태 의미를 배정했다.

| 상태 | 배경 | 글자 | 고른 이유 |
|---|---|---|---|
| 접수 | `tertiary-container` (#EDE0C4) | `on-tertiary-container` | 아직 손대지 않은 대기 — 주색·보조색과 겹치지 않는 중립 색 |
| 처리중 | `primary-container` (#F0D9CD) | `on-primary-container` | 지금 움직이는 중 — 주색 계열로 활동감 표현 |
| 완료 | `secondary-container` (#DCE3D2) | `on-secondary-container` | 끝나서 안정된 상태 — 보조색(올리브그린)의 안정감과 자연스럽게 맞음 |

- 크기 `padding 4px 8px`, `rounded.full`, `meta-sm`
- 글자 앞에 지름 6px 원형 점을 붙여 색이 아닌 형태로도 상태를 구분할 수 있게 한다
- 이 세 색 조합은 상태 표시 전용이다. 다른 용도(카테고리, 일반 태그)에는 재사용하지 않는다

### 분야 칩 (`chip-category`)

"분야 관리"에서 관리자가 등록하는 카테고리(예: 안전, 시설, 소음, 청소 등)를 표시한다. 상태 배지와 헷갈리지 않도록 항상 **무채색 계열**로만 만든다.

- 기본: 배경 `surface-container-high`, 테두리 `outline-variant 1px`, 글자 `on-surface-variant`, `meta-sm`
- 선택됨(게시판 필터에서 고른 상태, 분야 관리에서 편집 중인 항목): 배경 `inverse-surface`(짙은 채움), 글자 `inverse-on-surface`, 테두리 없음 — 상태 배지의 3색(접수·처리중·완료)과 겹치지 않는 무채색 반전으로 "선택됨"만 표시한다
- 크기·모서리는 상태 배지와 동일(`padding 4px 8px`, `rounded.full`) — 나란히 놓았을 때 높이가 어긋나지 않게
- 분야 관리 탭에서는 칩 오른쪽에 8px 간격으로 `×` 삭제 아이콘을 붙인 편집 모드를 쓴다
- 카드에서 배지와 칩을 같이 쓸 때는 **배지(상태) → 칩(분야)** 순서로 놓아 "무슨 상태 – 어느 분야"로 읽히게 한다

### 탭 (`tab`)

마이페이지([내가 쓴 글]/[내 정보])와 관리자 화면([접수된 글]/[분야 관리]) 모두 **정확히 2개**만 쓴다.

- 높이 `48px`, 폭은 50:50 균등 분할
- 활성 탭: `on-surface` 글자 + `title-md`(600) + 하단 2px 밑줄(`primary`색)
- 비활성 탭: `on-surface-variant` 글자, 밑줄 없음
- 탭 바 하단에 `outline-variant 1px` 구분선을 깔고, 활성 탭의 밑줄이 그 위에 겹쳐 보이게 한다
- 3개 이상으로 늘리지 않는다 — 항목이 늘어나면 탭이 아니라 별도 화면으로 분리한다

### 버튼

- `button-primary`: 화면당 핵심 행동 하나에만 — "저장하기", "제출하기" 등
- `button-secondary`: 취소·뒤로가기 등 보조 행동, 테두리만
- `button-google`: 구글 인증 전용 버튼. **배경은 항상 흰색(#FFFFFF) 고정** — 구글 브랜드 가이드 때문에 색 규칙의 유일한 예외다. `/login`, `/signup` 게이트 화면은 가운데 정렬된 `card-auth`(최대폭 400px, `rounded.xl`, `shadow.md`) 안에 이 버튼 하나만 두는 것을 기본형으로 한다
- `button-status-*`(관리자 3버튼 세그먼트, `button-status-group` 참고): 접수·처리중·완료 버튼을 붙여서 하나의 세그먼트로 배치한다. 선택된 버튼은 해당 상태 배지와 같은 container 색으로 채우고, 나머지는 `button-status-unselected`(테두리만)로 낮춘다. 가운데 버튼은 `roundedInner(0)`로 각지게, 양 끝 버튼만 바깥쪽 모서리를 `roundedOuter({rounded.DEFAULT})`로 둥글려 세 버튼이 하나로 이어진 컨트롤처럼 보이게 한다
- 모든 버튼 높이는 44px 이상으로 맞춰 모바일 탭 영역을 확보한다

### 입력 폼

- **제목** — `input-field`(1줄), placeholder "제목을 입력하세요"
- **내용** — `textarea-field`, 최소 높이 `160px`, 세로로만 크기 조절, 나머지 스타일은 `input-field`와 동일
- **사진 올리기** — 1장만 첨부 가능(`photo_url` 단일 컬럼과 1:1 대응). `upload-dropzone`: 점선 테두리(`outline-variant`, 1.5px dashed), 배경 `surface-container-low`, `rounded.lg`, 안쪽 여백 `xl(40px)`, 가운데에 안내 문구(`body-md`)와 아이콘. 사진을 선택하면 드롭존이 `thumbnail`(72px 정사각형, `rounded.sm`) 하나로 바뀌고 우상단에 삭제 아이콘이 붙는다. 삭제하면 다시 드롭존으로 돌아간다
- **작성자 · 작성시간**은 입력 항목이 아니다 — 로그인 사용자 정보와 서버 시각으로 자동 채워지며, 저장된 뒤 카드의 메타 영역에서만 보여준다
- 입력 폼 전체 폭은 `card-post`와 같은 컨테이너 규칙(최대 1200px, 여백 24px)을 따르되, 실제 입력 영역은 가독성을 위해 최대 640px로 한 번 더 좁힌다

## 하지 말 것

- 주색(`#A6452E`)을 헤더·히어로 배너·카드 배경 전체처럼 넓은 면에 통째로 칠하지 않는다. 버튼·강조 텍스트·배지 등 좁은 면적에만 쓴다.
- 그림자에 순수 검정/회색(`rgba(0,0,0,x)`)을 쓰지 않는다. 반드시 주색 계열로 옅게 틴트한다.
- 모서리 반경을 `sm·DEFAULT·lg·xl·full` 다섯 값 밖에서 임의로 고르지 않는다.
- 간격을 8px 스케일(`4·8·16·24·40·64`) 밖의 값(예: 10px, 15px, 20px)으로 쓰지 않는다.
- 페이지 배경에 순백(`#FFFFFF`)을 통째로 쓰지 않는다. 흰색은 카드처럼 좁은 표면(`surface-container-lowest`)에만 허용한다.
- PC에서 카드 그리드를 4열 이상으로 늘리지 않는다 — 3열 고정.
- 배경색 위에 글자색만 얹고 끝내지 않는다. 색을 쓸 때는 항상 짝이 되는 `on-*` 토큰(대비가 검증된 글자색)을 함께 지정한다.
- 다크모드 토큰은 아직 정의하지 않았다 — 만들지 않은 다크 모드용 색을 추측해서 쓰지 않는다.
- 구글 로그인 버튼의 흰 배경을 주색·보조색으로 바꾸지 않는다 — 브랜드 가이드 예외로 그대로 둔다.
- 상태 배지 3색(접수·처리중·완료)을 분야 칩이나 다른 라벨에 재사용하지 않는다 — 상태 표시 전용으로 남겨둔다.
