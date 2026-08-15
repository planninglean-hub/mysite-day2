export const CATEGORIES = ['안전', '시설', '소음', '청소', '기타']

function hoursAgo(hours) {
  return new Date(Date.now() - hours * 60 * 60 * 1000).toISOString()
}

export const initialVoices = [
  {
    id: 'v-001',
    title: '놀이터 야간 소음 관련 제보',
    body: '밤 10시 이후에도 아이들 소리가 커서 이웃분들이 불편해하십니다. 관리사무소에서 안내 방송을 한 번 부탁드려요.',
    category: '소음',
    status: '접수',
    photos: [],
    author: '이이웃',
    createdAt: hoursAgo(0.2),
  },
  {
    id: 'v-002',
    title: '화단 옆 가로등이 꺼져있어요',
    body: '며칠째 저녁이면 어두워서 산책하기 무서워요. 확인 부탁드립니다.',
    category: '시설',
    status: '처리중',
    photos: [{ id: 'seed-photo-2', url: 'https://picsum.photos/seed/voicebox2/800/600' }],
    author: '김이웃',
    createdAt: hoursAgo(2),
  },
  {
    id: 'v-003',
    title: '단지 후문 계단 난간이 흔들려요',
    body: '수리 완료됐다고 들었는데 다시 확인해보니 여전히 흔들립니다. 안전상 위험해 보여요.',
    category: '안전',
    status: '완료',
    photos: [{ id: 'seed-photo-3', url: 'https://picsum.photos/seed/voicebox3/800/600' }],
    author: '박이웃',
    createdAt: hoursAgo(26),
  },
  {
    id: 'v-004',
    title: '재활용 분리수거장이 항상 지저분해요',
    body: '주말마다 재활용품이 넘쳐서 냄새도 나고 보기에도 좋지 않습니다. 수거 주기를 늘려주실 수 있을까요.',
    category: '청소',
    status: '접수',
    photos: [],
    author: '최이웃',
    createdAt: hoursAgo(30),
  },
  {
    id: 'v-005',
    title: '커뮤니티룸 예약 시스템 문의',
    body: '지금 쓰는 예약 방식이 헷갈려서 종이로 된 안내문이 있으면 좋겠습니다.',
    category: '기타',
    status: '처리중',
    photos: [],
    author: '정이웃',
    createdAt: hoursAgo(50),
  },
  {
    id: 'v-006',
    title: '지하주차장 미끄럼 방지 페인트 요청',
    body: '경사로 구간이 비 오는 날 특히 미끄럽습니다. 페인트나 매트 설치를 검토해주세요.',
    category: '안전',
    status: '완료',
    photos: [{ id: 'seed-photo-6', url: 'https://picsum.photos/seed/voicebox6/800/600' }],
    author: '한이웃',
    createdAt: hoursAgo(96),
  },
]

export function buildNewVoice({ title, body, category, photos }) {
  return {
    id: `local-${Date.now()}`,
    title,
    body,
    category,
    photos: photos ?? [],
    status: '접수',
    author: '나',
    createdAt: new Date().toISOString(),
  }
}
