import {mask,wrap,isIos,bodyPosition,normalBody} from '../util/util.js'
let _sington;
function popup(options = {}){
  if(_sington){return _sington};
  const opt = Object.assign({
      html:"这是一个popup",
      showMask:true,
      closeOnClickMask:true,
      styleType:isIos() ? "ios" : "android",
      isBodyFixed:true,
    },options);
  const yuiWrap = wrap();
  bodyPosition();
  if(opt.showMask){
    const yuiMask = mask(opt.closeOnClickMask);
    if(opt.closeOnClickMask){
      yuiMask.addEventListener("click",function(e){
        _sington = false;
        yuiWrap.remove();
        normalBody();
      },false)
    }
    yuiWrap.appendChild(yuiMask);
  }  

  const contentTpl = `<div class="yui-dialog__content"><div class="yui-dialog__msg yui-popup__msg">${opt.html}</div></div>`
  const yuiPopup = document.createElement("div");
  yuiPopup.classList = `yui-dialog yui-dialog-${opt.styleType}`;
  yuiPopup.innerHTML = contentTpl;
  yuiWrap.appendChild(yuiPopup);
  document.body.appendChild(yuiWrap);
  _sington = yuiWrap;
  return yuiWrap;
}

export default popup;