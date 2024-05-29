function toggleCareer() {
    const career_container = document.querySelector(`#${window.current_lang}-content #career_container`);
    const career_button = document.querySelector(`#${window.current_lang}-content #career_button`);
    const isHidden = career_container.classList.contains('visible');
    if(window.current_lang == 'ko'){
        if (isHidden) {
            career_container.classList.toggle("visible");
            career_button.innerHTML = '[▶정보 Click]';
        } else {
            career_container.classList.toggle("visible");
            career_button.innerHTML = '[▼정보 닫기 Click]';
        }
    }else{
        if (isHidden) {
            career_container.classList.toggle("visible");
            career_button.innerHTML = '[▶Information Open Click]';
        } else {
            career_container.classList.toggle("visible");
            career_button.innerHTML = '[▼Information Close Click]';
        }
    }
}

function toggleCareer1() {
    const career_container1 = document.querySelector(`#${window.current_lang}-content #career_container1`);
    const career_button1 = document.querySelector(`#${window.current_lang}-content #career_button1`);
    const isHidden = career_container1.classList.contains('visible');
    if(window.current_lang == 'ko'){
        if (isHidden) {
            career_container1.classList.toggle("visible");
            career_button1.innerHTML = '[▶상세정보 Click]';
        } else {
            career_container1.classList.toggle("visible");
            career_button1.innerHTML = '[▼상세정보 닫기 Click]';
        }
    }else{
        if (isHidden) {
            career_container1.classList.toggle("visible");
            career_button1.innerHTML = '[▶Detailed Information Click]';
        } else {
            career_container1.classList.toggle("visible");
            career_button1.innerHTML = '[▼Detailed Information Close Click]';
        }
    }
}