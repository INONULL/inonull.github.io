function toggleKOTI() {
    const round_popup_sub_koti = document.querySelector(`#${window.current_lang}-content #round_popup_sub_koti`);
    const koti_button = document.querySelector(`#${window.current_lang}-content [id^="koti_button"]`);
    const isHidden = round_popup_sub_koti.classList.contains('visible');
    if(window.current_lang == 'ko'){
        if (isHidden) {
            round_popup_sub_koti.classList.toggle("visible");
            koti_button.innerHTML = '한국교통연구원(KOTI)◀ [Click]';
        } else {
            round_popup_sub_koti.classList.toggle("visible");
            koti_button.innerHTML = '한국교통연구원(KOTI)▼ [Click]';
        }
    }else{
        if (isHidden) {
            round_popup_sub_koti.classList.toggle("visible");
            koti_button.innerHTML = 'KOrea Transport Institute(KOTI)◀ [Click]';
        } else {
            round_popup_sub_koti.classList.toggle("visible");
            koti_button.innerHTML = 'KOrea Transport Institute(KOTI)▼ [Click]';
        }
    }
}

function toggleKOTIPaper() {
    const paper_content_koti = document.querySelector(`#${window.current_lang}-content #paper_content_koti`);
    const paper_content_koti1 = document.querySelector(`#${window.current_lang}-content #paper_content_koti1`);
    const paper_content_koti2 = document.querySelector(`#${window.current_lang}-content #paper_content_koti2`);
    const paper_button_koti = document.querySelector(`#${window.current_lang}-content #paper_button_koti`);
    const isHidden = paper_content_koti.classList.contains('visible');
    if(window.current_lang == 'ko'){
        if (isHidden) {
            paper_content_koti.classList.toggle("visible");
            paper_button_koti.textContent = '[▶보기 Click]';
        } else {
            roll_start(paper_content_koti1, 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/INONULL/inonull.github.io/336424a23a221966853be3c9adcd3224ecfb7f45/doc/KOTI/논문분석1.pdf&embedded=true','doc/KOTI/논문분석1.pdf');
            roll_start(paper_content_koti2,'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/INONULL/inonull.github.io/336424a23a221966853be3c9adcd3224ecfb7f45/doc/KOTI/논문분석2.pdf&embedded=true','doc/KOTI/논문분석2.pdf');
            paper_content_koti.classList.toggle("visible");
            paper_button_koti.textContent = '[▼닫기 Click]';
        }
    }else{
        if (isHidden) {
            paper_content_koti.classList.toggle("visible");;
            paper_button_koti.textContent = '[▶Open Click]';
        } else {
            roll_start(paper_content_koti1, 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/INONULL/inonull.github.io/336424a23a221966853be3c9adcd3224ecfb7f45/doc/KOTI/논문분석1.pdf&embedded=true','doc/KOTI/논문분석1.pdf');
            roll_start(paper_content_koti2,'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/INONULL/inonull.github.io/336424a23a221966853be3c9adcd3224ecfb7f45/doc/KOTI/논문분석2.pdf&embedded=true','doc/KOTI/논문분석2.pdf');
            paper_content_koti.classList.toggle("visible");
            paper_button_koti.textContent = '[▼Close Click]';
        }
    }
}
function toggleKOTIImage() {
    const image_content_koti = document.querySelector(`#${window.current_lang}-content #image_content_koti`);
    const image_button_koti = document.querySelector(`#${window.current_lang}-content #image_button_koti`);
    const isHidden = image_content_koti.classList.contains('visible');
    if(window.current_lang == 'ko'){
        if (isHidden) {
            image_content_koti.classList.toggle("visible");
            image_button_koti.textContent = '[▶보기 Click]';
        } else {
            image_content_koti.classList.toggle("visible");
            image_button_koti.textContent = '[▼닫기 Click]';
        }
    }else{
        if (isHidden) {
            image_content_koti.classList.toggle("visible");
            image_button_koti.textContent = '[▶Open Click]';
        } else {
            image_content_koti.classList.toggle("visible");
            image_button_koti.textContent = '[▼Close Click]';
        }
    }
}
function toggleKOTIPDF() {
    const pdf_content_koti = document.querySelector(`#${window.current_lang}-content #pdf_content_koti`);
    const pdf_button_koti = document.querySelector(`#${window.current_lang}-content #pdf_button_koti`);
    const isHidden = pdf_content_koti.classList.contains('visible');
    if(window.current_lang == 'ko'){
        if (isHidden) {
            pdf_content_koti.classList.toggle("visible");
            pdf_button_koti.textContent = '[▶보기 Click]';
        } else {
            roll_start(pdf_content_koti, 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/INONULL/inonull.github.io/336424a23a221966853be3c9adcd3224ecfb7f45/doc/KOTI/교통연구원.pdf&embedded=true','doc/KOTI/교통연구원.pdf');
            pdf_content_koti.classList.toggle("visible");
            pdf_button_koti.textContent = '[▼닫기 Click]';
        }
    }else{
        if (isHidden) {
            pdf_content_koti.classList.toggle("visible");
            pdf_button_koti.textContent = '[▶Open Click]';
        } else {
            roll_start(pdf_content_koti, 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/INONULL/inonull.github.io/336424a23a221966853be3c9adcd3224ecfb7f45/doc/KOTI/TransportInstitute.pdf&embedded=true','doc/KOTI/TransportInstitute.pdf');
            pdf_content_koti.classList.toggle("visible");
            pdf_button_koti.textContent = '[▼Close Click]';
        } 
    }
}