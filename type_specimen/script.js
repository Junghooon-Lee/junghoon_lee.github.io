const output = document.getElementById('output');
const fontSizeSlider = document.getElementById('font-size-slider');
const fontSizeValue = document.getElementById('font-size-value');

// 슬라이더 변경 시 폰트 크기 업데이트
fontSizeSlider.addEventListener('input', () => {
    const fontSize = fontSizeSlider.value;
    output.style.fontSize = `${fontSize}px`;
    fontSizeValue.textContent = `${fontSize}px`;
});
