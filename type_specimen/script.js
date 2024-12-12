const fontSizeSlider = document.getElementById('font-size-slider');
const fontSizeValue = document.getElementById('font-size-value');
const output = document.getElementById('output');

// 초기 설정
const baseStrokeWidth = 0.01; // 스트로크 두께 비율 (1%)

// 폰트 크기 및 스트로크 초기화
fontSizeValue.textContent = `${fontSizeSlider.value}pt`;
output.style.fontSize = `${fontSizeSlider.value}px`;
output.style.webkitTextStrokeWidth = `${fontSizeSlider.value * baseStrokeWidth}px`;

// 슬라이더 변경 시 폰트 크기와 스트로크 두께 업데이트
fontSizeSlider.addEventListener('input', () => {
    const fontSize = fontSizeSlider.value;

    // 폰트 크기 업데이트
    fontSizeValue.textContent = `${fontSize}pt`;
    output.style.fontSize = `${fontSize}px`;

    // 스트로크 두께 업데이트
    const strokeWidth = fontSize * baseStrokeWidth;
    output.style.webkitTextStrokeWidth = `${strokeWidth}px`;
});
