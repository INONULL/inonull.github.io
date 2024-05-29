window.iframe_loaded = false
let timeout = null;
function onloaded(){
    window.iframe_loaded = true;
    clearTimeout(timeout);
}

async function not_loaded(doc){
    window.iframe_loaded = false;
    doc = doc;
}

function time_out_load(doc){
    timeout = setTimeout(async () => {
        if(window.iframe_loaded == false){
            await not_loaded(doc);
        }
    }, 3000);
}