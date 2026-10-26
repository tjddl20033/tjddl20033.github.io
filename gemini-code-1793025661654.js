// 1. 탭 전환 처리 함수
function switchTab(tabId) {
  // 모든 탭 컨텐츠 숨기기
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));

  // 모든 버튼 비활성화
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  // 선택한 탭 활성화
  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}

// 2. 프로젝트 상세 정보 데이터베이스
const projectData = {
  project1: {
    title: "프로세스 표준화 및 매뉴얼 감사 체계 구축",
    period: "2026.04 – 2026.07",
    role: "문서 감사 및 표준화 담당",
    summary: "국제 항공 안전 및 품질 표준(ICAO/IOSA)을 준수하도록 운항 관련 매뉴얼 개정 및 점검 프로세스 구축",
    details: [
      "국제 기준 요구사항과 기존 내부 매뉴얼의 1:1 비교 매핑 수행",
      "불일치 항목 추출 및 프로세스 개정안 도출",
      "감사 체크리스트 가이드라인 표준화로 점검 시간 57% 감소"
    ]
  },
  project2: {
    title: "설문 및 텍스트 데이터 기반 정량·정성 분석",
    period: "2026.01 – 2026.03",
    role: "데이터 분석 및 리서치 리드",
    summary: "사용자 의견 및 인터뷰 텍스트 데이터 300+건 분석을 통한 개선 인사이트 도출",
    details: [
      "정성적 인터뷰 텍스트 클러스터링을 통한 3개 핵심 유저 유형 정의",
      "통계 분석 도구를 활용한 신뢰성 검정",
      "분석 결과 시각화 대시보드 리포트 생성"
    ]
  }
};

// 3. 프로젝트 상세 모달 열기/닫기
function openModal(projectId) {
  const data = projectData[projectId];
  if (!data) return;

  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = `
    <h2 style="font-size: 1.4rem; margin-bottom: 0.5rem;">${data.title}</h2>
    <p style="color: #64748b; font-size: 0.9rem; margin-bottom: 1.2rem;">${data.period} | ${data.role}</p>
    
    <div style="background: #f8fafc; padding: 1rem; border-radius: 8px; margin-bottom: 1.2rem;">
      <strong>프로젝트 개요:</strong>
      <p style="margin-top: 0.3rem;">${data.summary}</p>
    </div>

    <h4 style="margin-bottom: 0.5rem;">주요 성과 및 수행 업무</h4>
    <ul style="padding-left: 1.2rem; line-height: 1.8;">
      ${data.details.map(item => `<li>${item}</li>`).join('')}
    </ul>
  `;

  document.getElementById('projectModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('projectModal').style.display = 'none';
}

// 모달 외부 클릭 시 닫기
window.onclick = function(event) {
  const modal = document.getElementById('projectModal');
  if (event.target === modal) {
    closeModal();
  }
};