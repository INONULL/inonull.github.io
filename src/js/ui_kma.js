function toggleKMA() {
    const round_popup_sub_kma = document.querySelector(`#${window.current_lang}-content #round_popup_sub_kma`);
    const kma_button = document.querySelector(`#${window.current_lang}-content #kma_button`);
    // const kma_button = document.getElementById('kma_button');
    const isHidden = round_popup_sub_kma.classList.contains('visible');
    if(window.current_lang == 'ko'){
        if (isHidden) {
            round_popup_sub_kma.classList.toggle("visible");
            kma_button.innerHTML = '기상청(KMA)◀ [Click]';
        } else {
            round_popup_sub_kma.classList.toggle("visible");
            kma_button.innerHTML = '기상청(KMA)▼ [Click]';
        }
    }else{
        if (isHidden) {
            round_popup_sub_kma.classList.toggle("visible");
            kma_button.innerHTML = 'Korea Meteorological Administration(KMA)◀ [Click]';
        } else {
            round_popup_sub_kma.classList.toggle("visible");
            kma_button.innerHTML = 'Korea Meteorological Administration(KMA)▼ [Click]';
        }
    }
}
function toggleKMAEmbed() {
    const embed_content_kma = document.querySelector(`#${window.current_lang}-content #embed_content_kma`);
    const embed_button_kma = document.querySelector(`#${window.current_lang}-content #embed_button_kma`);
    const isHidden = embed_content_kma.classList.contains('visible');
    if(window.current_lang == 'ko'){
        if (isHidden) {
            embed_content_kma.src = "about:blank";
            embed_content_kma.classList.toggle("visible");;
            embed_button_kma.textContent = '[▶서버 미리보기 Click]';
        } else {
            embed_content_kma.src = "https://inonull.xyz";
            embed_content_kma.classList.toggle("visible");
            embed_button_kma.textContent = '[▼서버 닫기 Click]';
            checkIframeLoad(embed_content_kma);
        }
    }else{
        if (isHidden) {
            embed_content_kma.src = "about:blank";
            embed_content_kma.classList.toggle("visible");;
            embed_button_kma.textContent = '[▶Server Preview Click]';
        } else {
            embed_content_kma.src = "https://inonull.xyz";
            embed_content_kma.classList.toggle("visible");
            embed_button_kma.textContent = '[▼Preview Close Click]';
            checkIframeLoad(embed_content_kma);
        }
    }
}
function toggleKMAImage() {
    const image_content_kma = document.querySelector(`#${window.current_lang}-content #image_content_kma`);
    const image_button_kma = document.querySelector(`#${window.current_lang}-content #image_button_kma`);
    const isHidden = image_content_kma.classList.contains('visible');
    if(window.current_lang == 'ko'){
        if (isHidden) {
            image_content_kma.classList.toggle("visible");
            image_button_kma.textContent = '[▶보기 Click]';
        } else {
            image_content_kma.classList.toggle("visible");
            image_button_kma.textContent = '[▼닫기 Click]';
        }
    }else{
        if (isHidden) {
            image_content_kma.classList.toggle("visible");
            image_button_kma.textContent = '[▶Open Click]';
        } else {
            image_content_kma.classList.toggle("visible");
            image_button_kma.textContent = '[▼Close Click]';
        }
    }
}

function toggleKMATelegram() {
    const telegram_content_kma = document.querySelector(`#${window.current_lang}-content #telegram_content_kma`);
    const telegram_button_kma = document.querySelector(`#${window.current_lang}-content #telegram_button_kma`);
    const isHidden = telegram_content_kma.classList.contains('visible');
    if(window.current_lang == 'ko'){
        if (isHidden) {
            telegram_content_kma.classList.toggle("visible");
            telegram_button_kma.textContent = '[▶보기 Click]';
        } else {
            telegram_content_kma.classList.toggle("visible");
            telegram_button_kma.textContent = '[▼닫기 Click]';
        }
    }else{
        if (isHidden) {
            telegram_content_kma.classList.toggle("visible");
            telegram_button_kma.textContent = '[▶Open Click]';
        } else {
            telegram_content_kma.classList.toggle("visible");
            telegram_button_kma.textContent = '[▼Close Click]';
        } 
    }
}

function toggleKMATelegram1() {
    const telegram_content_kma1 = document.querySelector(`#${window.current_lang}-content #telegram_content_kma1`);
    const telegram_button_kma1 = document.querySelector(`#${window.current_lang}-content #telegram_button_kma1`);
    const isHidden = telegram_content_kma1.classList.contains('visible');
    if(window.current_lang == 'ko'){
        if (isHidden) {
            telegram_content_kma1.classList.toggle("visible");
            telegram_button_kma1.textContent = '[▶보기 Click]';
        } else {
            telegram_content_kma1.classList.toggle("visible");
            telegram_button_kma1.textContent = '[▼닫기 Click]';
        }
    }else{
        if (isHidden) {
            telegram_content_kma1.classList.toggle("visible");
            telegram_button_kma1.textContent = '[▶Open Click]';
        } else {
            telegram_content_kma1.classList.toggle("visible");
            telegram_button_kma1.textContent = '[▼Close Click]';
        }
    }
}

function toggleKMAPDF() {
    const pdf_content_kma = document.querySelector(`#${window.current_lang}-content #pdf_content_kma`);
    const pdf_button_kma = document.querySelector(`#${window.current_lang}-content #pdf_button_kma`);
    const isHidden = pdf_content_kma.classList.contains('visible');
    if(window.current_lang == 'ko'){
        if (isHidden) {
            pdf_content_kma.classList.toggle("visible");
            pdf_button_kma.textContent = '[▶보기 Click]';
        } else {
            roll_start(pdf_content_kma,'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/INONULL/inonull.github.io/e5abcfe4fbb3d4e5436e12c96102622655ca6444/doc/KMA/대만지진정보.pdf&embedded=true','doc/KMA/대만지진정보.pdf');
            pdf_content_kma.classList.toggle("visible");
            pdf_button_kma.textContent = '[▼닫기 Click]';
        }
    }else{
        if (isHidden) {
            pdf_content_kma.classList.toggle("visible");
            pdf_button_kma.textContent = '[▶Open Click]';
        } else {
            roll_start(pdf_content_kma,'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/INONULL/inonull.github.io/e5abcfe4fbb3d4e5436e12c96102622655ca6444/doc/KMA/TaiwanEarthquakeInformation.pdf&embedded=true','doc/KMA/TaiwanEarthquakeInformation.pdf');
            pdf_content_kma.classList.toggle("visible");
            pdf_button_kma.textContent = '[▼Close Click]';
        }  
    }
}

function toggleKMACopyCert() {
    const pdf_content_kma1 = document.querySelector(`#${window.current_lang}-content #pdf_content_kma1`);
    const pdf_button_kma1 = document.querySelector(`#${window.current_lang}-content #pdf_button_kma1`);
    const isHidden = pdf_content_kma1.classList.contains('visible');
    if(window.current_lang == 'ko'){
        if (isHidden) {
            pdf_content_kma1.classList.toggle("visible");
            pdf_button_kma1.textContent = '[▶보기 Click]';
        } else {
            roll_start(pdf_content_kma1,'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/INONULL/inonull.github.io/e5abcfe4fbb3d4e5436e12c96102622655ca6444/doc/KMA/Copyright_Cert.pdf&embedded=true','doc/KMA/Copyright_Cert.pdf');
            pdf_content_kma1.classList.toggle("visible");
            pdf_button_kma1.textContent = '[▼닫기 Click]';
        }
    }else{
        if (isHidden) {
            pdf_content_kma1.classList.toggle("visible");
            pdf_button_kma1.textContent = '[▶Open Click]';
        } else {
            roll_start(pdf_content_kma1,'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/INONULL/inonull.github.io/e5abcfe4fbb3d4e5436e12c96102622655ca6444/doc/KMA/Copyright_Cert.pdf&embedded=true','doc/KMA/Copyright_Cert.pdf');
            pdf_content_kma1.classList.toggle("visible");
            pdf_button_kma1.textContent = '[▼Close Click]';
        }  
    }
}

