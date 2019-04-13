import {mask,wrap,bodyPosition,normalBody,isIos,delegateEvent} from '../util/util.js'
let _sington;

function confirm(options = {}){
  if(_sington){return _sington};
  const opt = Object.assign({
      message:"操作成功",
      title:"标题",
      showConfirmButton:true,
      showCancelButton:true,
      showMask:true,
      closeOnClickMask:true,
      styleType:isIos() ? "ios" : "android",
      confirmButtonText:"确定",
      cancelButtonText:"取消",
      isBodyFixed:true,
    },options);
  const yuiWrap = wrap();
  bodyPosition();
  if(opt.showMask){
    const yuiMask = mask(opt.closeOnClickMask);
    if(opt.closeOnClickMask){
      yuiMask.addEventListener("click",function(e){
        _sington = false;
        normalBody();
        yuiWrap.remove();
      },false)
    }
    yuiWrap.appendChild(yuiMask);
  }
  //stopBodyScroll(opt.isBodyFixed);
  const titleTpl = opt.title ? `<div class="yui-dialog__header"><div class="yui-dialog__title">${opt.title}</div></div>` : "";
  const contentTpl = `<div class="yui-dialog__content"><div class="yui-dialog__msg">${opt.message}</div></div>`
  let bottomTpl;
  if(opt.showCancelButton || opt.showConfirmButton){
    bottomTpl = `<div class="yui-dialog__footer ${opt.styleType == "ios" ? 'yui-border-top-1px' : ''}">${opt.showCancelButton ? `<div class="yui-dialog__btn yui-cancle-btn ${opt.styleType == "ios" ? 'yui-border-left-1px' : ''}">${opt.cancelButtonText}</div>` : ""}
      ${opt.showConfirmButton ? `<div class="yui-dialog__btn yui-confirm-btn">${opt.confirmButtonText}</div>` : ""}
    </div>`
  }
  const yuiConfirm = document.createElement("div");
  yuiConfirm.classList = `yui-dialog yui-dialog-${opt.styleType}`;
  yuiConfirm.innerHTML = titleTpl + contentTpl + bottomTpl;
  yuiWrap.appendChild(yuiConfirm);
  document.body.appendChild(yuiWrap);
  if(opt.showCancelButton){
    delegateEvent(yuiWrap,'.yui-cancle-btn',"click",function(e){
      if(typeof opt.clickCancleFn === "function"){
        opt.clickCancleFn();
      }
      normalBody();
      yuiWrap.remove();
      _sington = false;
    })
  }
  if(opt.showConfirmButton){
    delegateEvent(yuiWrap,'.yui-confirm-btn',"click",function(e){
      if(typeof opt.clickConfirmFn === "function"){
        opt.clickConfirmFn();
      }
      normalBody();
      yuiWrap.remove();
      _sington = false;
    })
  }
  _sington = yuiWrap;
  return yuiWrap;
}

export default confirm;
