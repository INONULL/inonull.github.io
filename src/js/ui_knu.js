function toggleKNU() {
    const round_popup_sub_knu = document.querySelector(`#${window.current_lang}-content #round_popup_sub_knu`);
    const knu_button = document.querySelector(`#${window.current_lang}-content [id^="knu_button"]`);
    const isHidden = round_popup_sub_knu.classList.contains('visible');
    if(window.current_lang == 'ko'){
        if (isHidden) {
            round_popup_sub_knu.classList.toggle("visible");
            knu_button.innerHTML = '첨단정보통신융합산업기술원(KNU/IACT)◀ [Click]';
        } else {
            round_popup_sub_knu.classList.toggle("visible");
            knu_button.innerHTML = '첨단정보통신융합산업기술원(KNU/IACT)▼ [Click]';
        }
    }else{
        if (isHidden) {
            round_popup_sub_knu.classList.toggle("visible");
            knu_button.innerHTML = 'KyungPook National University_IACT(KNU/IACT)◀ [Click]';
        } else {
            round_popup_sub_knu.classList.toggle("visible");
            knu_button.innerHTML = 'KyungPook National University_IACT(KNU/IACT)▼ [Click]';

        }
    }
}
function toggleKNUEmbed() {
    document.getElementById("embed_content_knu").src = "https://inonull.xyz";
    const embed_content_knu = document.getElementById('embed_content_knu');
    const embed_button_knu = document.getElementById('embed_button_knu');
    const isHidden = embed_content_knu.classList.contains('visible');
    if (isHidden) {
        embed_content_knu.classList.toggle("visible");;
        embed_button_knu.textContent = '[▶미리보기 Click]';
        document.getElementById("embed_content_knu").src = "about:blank";
    } else {
        embed_content_knu.classList.toggle("visible");
        embed_button_knu.textContent = '[▼보기닫기 Click]';
    }
}
function toggleKNUVideo() {    
    const video_content_knu = document.querySelector(`#${window.current_lang}-content #video_content_knu`);
    const knu_video_button = document.querySelector(`#${window.current_lang}-content [id^="knu_video_button"]`);
    const isHidden = video_content_knu.classList.contains('visible');
    if(window.current_lang == 'ko'){
        if (isHidden) {
            document.querySelector(`#${window.current_lang}-content #video_content_knu`).src = "about:blank";
            video_content_knu.classList.toggle("visible");
            knu_video_button.textContent = '[▶보기 Click]';
        } else {
            document.querySelector(`#${window.current_lang}-content #video_content_knu`).src = "doc/KNU/20230208_122605.mp4";
            video_content_knu.classList.toggle("visible");
            knu_video_button.textContent = '[▼닫기 Click]';
        }
    }else{
        if (isHidden) {
            document.querySelector(`#${window.current_lang}-content #video_content_knu`).src = "about:blank";
            video_content_knu.classList.toggle("visible");
            knu_video_button.textContent = '[▶Open Click]';
        } else {
            document.querySelector(`#${window.current_lang}-content #video_content_knu`).src = "doc/KNU/20230208_122605.mp4";
            video_content_knu.classList.toggle("visible");
            knu_video_button.textContent = '[▼Close Click]';
        }
    }
}