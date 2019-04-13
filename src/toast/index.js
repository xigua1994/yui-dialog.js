let _singto;
function toast(options={}){
    console.log(_singto);
    if(_singto){return _singto}
    const opt = Object.assign({
       msg:"this is a toast",
       position:"bottom",
       duration:1500,
       className:"" 
    },options)
    const toastWrap = document.createElement("div")
    toastWrap.classList = `yui-toast yui-toast__${opt.position} ${opt.className}`
    toastWrap.innerHTML = `<span class="yui-toast-msg">${opt.msg}</span>`
    document.body.appendChild(toastWrap)
    setTimeout(() => {
        toastWrap.remove();
        _singto = false;
    },opt.duration)
    _singto = toastWrap;
    return toastWrap
}

export default toast;