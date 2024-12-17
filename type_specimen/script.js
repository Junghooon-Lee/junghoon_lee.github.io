const sliders = [
    { slider: 'font-size-slider-1', value: 'font-size-value-1', output: 'output-1' },
    { slider: 'font-size-slider-2', value: 'font-size-value-2', output: 'output-2' },
    { slider: 'font-size-slider-3', value: 'font-size-value-3', output: 'output-3' },
];

const baseStrokeWidth = 0.01; // 스트로크 두께 비율

// 슬라이더 초기화 및 업데이트
sliders.forEach(({ slider, value, output }) => {
    const fontSizeSlider = document.getElementById(slider);
    const fontSizeValue = document.getElementById(value);
    const outputElement = document.getElementById(output);

    // 초기 설정
    fontSizeValue.textContent = `${fontSizeSlider.value}pt`;
    outputElement.style.fontSize = `${fontSizeSlider.value}px`;
    outputElement.style.webkitTextStrokeWidth = `${fontSizeSlider.value * baseStrokeWidth}px`;

    // 슬라이더 변경 시 폰트 크기와 스트로크 두께 업데이트
    fontSizeSlider.addEventListener('input', () => {
        const fontSize = fontSizeSlider.value;
        fontSizeValue.textContent = `${fontSize}pt`;
        outputElement.style.fontSize = `${fontSize}px`;
        outputElement.style.webkitTextStrokeWidth = `${fontSize * baseStrokeWidth}px`;
    });
});

// 흑백 모드 토글 버튼
const toggleButton = document.getElementById('toggle-mode');
let isBlackAndWhite = false;

toggleButton.addEventListener('click', () => {
    isBlackAndWhite = !isBlackAndWhite;
    toggleButton.classList.toggle('active', isBlackAndWhite);

    // 배경색 변경
    document.body.style.backgroundColor = isBlackAndWhite ? '#000' : '#fff';

    // 각 섹션 배경 변경
    document.querySelector('.section-1').style.background = isBlackAndWhite
        ? '#000'
        : 'linear-gradient(120deg, #FFDDC1, #FFABAB)';
    document.querySelector('.section-2').style.background = isBlackAndWhite
        ? '#000'
        : 'linear-gradient(120deg, #C1EFFF, #ABABFF)';
    document.querySelector('.section-3').style.background = isBlackAndWhite
        ? '#000'
        : 'linear-gradient(120deg, #D7FFD9, #AFF8DB)';

    // 슬라이더 색상 변경
    document.getElementById('font-size-slider-1').style.background = isBlackAndWhite ? '#666' : '#861694';
    document.getElementById('font-size-slider-2').style.background = isBlackAndWhite ? '#666' : '#1A237E';
    document.getElementById('font-size-slider-3').style.background = isBlackAndWhite ? '#666' : '#004D40';

    // 텍스트 색상 및 스트로크 제거/복원
    sliders.forEach(({ output }) => {
        const outputElement = document.getElementById(output);
        if (isBlackAndWhite) {
            outputElement.style.color = '#fff';
            outputElement.style.webkitTextStroke = '0px';
        } else {
            outputElement.style.color = output === 'output-1' ? '#FF3B80' :
                                        output === 'output-2' ? '#3B80FF' : '#009688';
            outputElement.style.webkitTextStroke = `${outputElement.style.fontSize.replace('px', '') * baseStrokeWidth}px ${
                output === 'output-1' ? '#861694' :
                output === 'output-2' ? '#1A237E' : '#004D40'
            }`;
        }
    });
});