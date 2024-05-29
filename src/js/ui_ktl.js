function toggleKTL() {
    const round_popup_sub_ktl = document.querySelector(`#${window.current_lang}-content #round_popup_sub_ktl`);
    const ktl_button = document.querySelector(`#${window.current_lang}-content #ktl_button`);
    const isHidden = round_popup_sub_ktl.classList.contains('visible');
    if(window.current_lang == 'ko'){
        if (isHidden) {
            round_popup_sub_ktl.classList.toggle("visible");
            ktl_button.innerHTML = '한국산업기술시험원(KTL)◀ [Click]';
        } else {
            round_popup_sub_ktl.classList.toggle("visible");
            ktl_button.innerHTML = '한국산업기술시험원(KTL)▼ [Click]';
        }
    }else{
        if (isHidden) {
            round_popup_sub_ktl.classList.toggle("visible");
            ktl_button.innerHTML = 'Korean Testing Laboratory(KTL)◀ [Click]';
        } else {
            round_popup_sub_ktl.classList.toggle("visible");
            ktl_button.innerHTML = 'Korean Testing Laboratory(KTL)▼ [Click]';
        }
    }
}

function toggleKTLEmbed() {
    const embed_content_ktl = document.querySelector(`#${window.current_lang}-content #embed_content_ktl`);
    const embed_button_ktl = document.querySelector(`#${window.current_lang}-content #embed_button_ktl`);
    const isHidden = embed_content_ktl.classList.contains('visible');
    if(window.current_lang == 'ko'){
        if (isHidden) {
            embed_content_ktl.classList.toggle("visible");
            embed_button_ktl.innerHTML = '한국산업기술시험원(KTL)◀ [Click]';
        } else {
            embed_content_ktl.classList.toggle("visible");
            embed_button_ktl.innerHTML = '한국산업기술시험원(KTL)▼ [Click]';
        }
    }else{
        if (isHidden) {
            embed_content_ktl.classList.toggle("visible");
            embed_button_ktl.innerHTML = 'Korean Testing Laboratory(KTL)◀ [Click]';
        } else {
            embed_content_ktl.classList.toggle("visible");
            embed_button_ktl.innerHTML = 'Korean Testing Laboratory(KTL)▼ [Click]';
        }
    }
}

function toggleKTLEmbed1() {
    const embed_content_ktl1 = document.querySelector(`#${window.current_lang}-content #embed_content_ktl1`);
    const embed_button_ktl1 = document.querySelector(`#${window.current_lang}-content #embed_button_ktl1`);
    const isHidden = embed_content_ktl1.classList.contains('visible');
    if(window.current_lang == 'ko'){
        if (isHidden) {
            embed_content_ktl1.classList.toggle("visible");
            embed_button_ktl1.innerHTML = '한국산업기술시험원(KTL)◀ [Click]';
        } else {
            embed_content_ktl1.classList.toggle("visible");
            embed_button_ktl1.innerHTML = '한국산업기술시험원(KTL)▼ [Click]';
        }
    }else{
        if (isHidden) {
            embed_content_ktl1.classList.toggle("visible");
            embed_button_ktl1.innerHTML = 'Korean Testing Laboratory(KTL)◀ [Click]';
        } else {
            embed_content_ktl1.classList.toggle("visible");
            embed_button_ktl1.innerHTML = 'Korean Testing Laboratory(KTL)▼ [Click]';
        }
    }
}

function toggleKTLImage() {
    const image_content_ktl = document.getElementById('image_content_ktl');
    const image_button_ktl = document.getElementById('image_button_ktl');
    const isHidden = image_content_ktl.classList.contains('visible');

    if (isHidden) {
        image_content_ktl.classList.toggle("visible");
        image_button_ktl.textContent = '[▶보기 Click]';
    } else {
        image_content_ktl.classList.toggle("visible");
        image_button_ktl.textContent = '[▼닫기 Click]';

    }
}


function toggleKTLPDF() {
    const pdf_content_ktl = document.querySelector(`#${window.current_lang}-content #pdf_content_ktl`);
    const pdf_button_ktl = document.querySelector(`#${window.current_lang}-content #pdf_button_ktl`)
    const isHidden = pdf_content_ktl.classList.contains('visible');
    if(window.current_lang == 'ko'){
        if (isHidden) {
            pdf_content_ktl.classList.toggle("visible");
            pdf_button_ktl.textContent = '[▶보기 Click]';
        } else {
            roll_start(pdf_content_ktl, 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/INONULL/inonull.github.io/e5abcfe4fbb3d4e5436e12c96102622655ca6444/doc/KTL/BondingIsolationTesttoCERE101102.pdf&embedded=true','doc/KTL/BondingIsolationTesttoCERE101102.pdf');
            pdf_content_ktl.classList.toggle("visible");
            pdf_button_ktl.textContent = '[▼닫기 Click]';
        }
    }else{
        if (isHidden) {
            pdf_content_ktl.classList.toggle("visible");
            pdf_button_ktl.textContent = '[▶Open Click]';
        } else {
            roll_start(pdf_content_ktl, 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/INONULL/inonull.github.io/e5abcfe4fbb3d4e5436e12c96102622655ca6444/doc/KTL/BondingIsolationTesttoCERE101102.pdf&embedded=true','doc/KTL/BondingIsolationTesttoCERE101102.pdf')
            pdf_content_ktl.classList.toggle("visible");
            pdf_button_ktl.textContent = '[▼Close Click]';
        } 
    }
}