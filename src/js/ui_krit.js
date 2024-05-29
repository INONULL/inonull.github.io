function toggleKRIT() {
    const round_popup_sub_krit = document.querySelector(`#${window.current_lang}-content #round_popup_sub_krit`);
    const krit_button = document.querySelector(`#${window.current_lang}-content [id^="krit_button"]`);
    const isHidden = round_popup_sub_krit.classList.contains('visible');
    if(window.current_lang == 'ko'){
        if (isHidden) {
            round_popup_sub_krit.classList.toggle("visible");
            krit_button.innerHTML = '국방기술품질원(DTAQ)<br>[국방기술진흥연구소(KRIT)]◀ [Click]';
        } else {
            round_popup_sub_krit.classList.toggle("visible");
            krit_button.innerHTML = '국방기술품질원(DTAQ)<br>[국방기술진흥연구소(KRIT)]▼ [Click]';
        }
    }else{
        if (isHidden) {
            round_popup_sub_krit.classList.toggle("visible");
            krit_button.innerHTML = 'Defense Technical Quality Assurance Agency(DTAQ)<br>[Defense Technology Promotion Research Institute (KRIT)]◀ [Click]';
        } else {
            round_popup_sub_krit.classList.toggle("visible");
            krit_button.innerHTML = 'Defense Technical Quality Assurance Agency(DTAQ)<br>[Defense Technology Promotion Research Institute (KRIT)]▼ [Click]';

        }
    }
}
function toggleKRITEmbed() {
    const embed_content_krit = document.getElementById('embed_content_krit');
    const embed_button_krit = document.getElementById('embed_button_krit');
    const isHidden = embed_content_krit.classList.contains('visible');
    if (isHidden) {
        embed_content_krit.classList.toggle("visible");;
        embed_button_krit.textContent = '[▶미리보기 Click]';
        embed_content_krit.src = "about:blank";
    } else {
        embed_content_krit.src = "https://inonull.xyz";
        embed_content_krit.classList.toggle("visible");
        embed_button_krit.textContent = '[▼보기닫기 Click]';
    }
}
function toggleKRITImage() {
    const image_content_krit = document.querySelector(`#${window.current_lang}-content #image_content_krit`);
    const image_button_krit = document.querySelector(`#${window.current_lang}-content [id^="image_button_krit"]`);
    const isHidden = image_content_krit.classList.contains('visible');
    if(window.current_lang == 'ko'){
        if (isHidden) {
            image_content_krit.classList.toggle("visible");
            image_button_krit.textContent = '[▶보기 Click]';
        } else {
            image_content_krit.classList.toggle("visible");
            image_button_krit.textContent = '[▼닫기 Click]';
        }
    }else{
        if (isHidden) {
            image_content_krit.classList.toggle("visible");
            image_button_krit.textContent = '[▶Open Click]';
        } else {
            image_content_krit.classList.toggle("visible");
            image_button_krit.textContent = '[▼Close Click]';
        }
    }
}
function toggleKRITPDF() {
    const pdf_content_krit = document.querySelector(`#${window.current_lang}-content #pdf_content_krit`);
    const pdf_button_krit = document.querySelector(`#${window.current_lang}-content #pdf_button_krit`)
    const isHidden = pdf_content_krit.classList.contains('visible');
    if(window.current_lang == 'ko'){
        if (isHidden) {
            pdf_content_krit.classList.toggle("visible");
            pdf_button_krit.textContent = '[▶보기 Click]';
        } else {
            roll_start(pdf_content_krit, 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/INONULL/inonull.github.io/e5abcfe4fbb3d4e5436e12c96102622655ca6444/doc/KRIT/%EB%A9%94%ED%83%80%EB%B2%84%EC%8A%A4%EC%9D%98%20%EA%B5%AD%EB%B0%A9%EB%B6%84%EC%95%BC%20%EA%B5%AC%ED%98%84%20%EB%B0%A9%EC%95%88%EC%97%90%20%EB%8C%80%ED%95%9C%20%EA%B3%A0%EC%B0%B0.pdf&embedded=true',"doc/KRIT/메타버스의 국방분야 구현 방안에 대한 고찰.pdf");
            pdf_content_krit.classList.toggle("visible");
            pdf_button_krit.textContent = '[▼닫기 Click]';
        }
    }else{
        if (isHidden) {
            pdf_content_krit.classList.toggle("visible");
            pdf_button_krit.textContent = '[▶Open Click]';
        } else {
            roll_start(pdf_content_krit, 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/INONULL/inonull.github.io/e5abcfe4fbb3d4e5436e12c96102622655ca6444/doc/KRIT/%EB%A9%94%ED%83%80%EB%B2%84%EC%8A%A4%EC%9D%98%20%EA%B5%AD%EB%B0%A9%EB%B6%84%EC%95%BC%20%EA%B5%AC%ED%98%84%20%EB%B0%A9%EC%95%88%EC%97%90%20%EB%8C%80%ED%95%9C%20%EA%B3%A0%EC%B0%B0.pdf&embedded=true',"doc/KRIT/메타버스의 국방분야 구현 방안에 대한 고찰.pdf");
            pdf_content_krit.classList.toggle("visible");
            pdf_button_krit.textContent = '[▼Close Click]';
        } 
    }
}