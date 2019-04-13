export function isIos(){
  return navigator.userAgent.match(/iPhone|iPad|iPod/i);
}

export function wrap(){
  const yuiWrap = document.createElement("div");
  return yuiWrap;
}

export function mask(){
  const yuiShade = document.createElement("div");
  yuiShade.classList = `yui-mask`;
  return yuiShade;
}


export function bodyPosition(){
  let scrollTop = document.documentElement.scrollTop ||  document.body.scrollTop || window.pageYOffset;
  document.body.classList.add("yui-dialog__body");
  document.body.style.top = -scrollTop + 'px';
}

export function normalBody(){
  document.body.classList.remove("yui-dialog__body");
  let scrollTop = Math.abs(parseFloat(document.body.style.top));
  document.documentElement.scrollTop = scrollTop;
  document.body.scrollTop =scrollTop;
  window.pageYOffset =  scrollTop;
}

export function delegateEvent(parentElement,targetEle,events,fn){
  parentElement.addEventListener(events,function(e){
    var currTarget = e.currentTarget;
    var t = e.target;
    while(!t.matches(targetEle)){
      if(t === currTarget){
        t = null;
        break;
      }
      t = t.parentNode;
    }
    if(t){
      fn.call(t,Array.prototype.slice.call(arguments));
    }
  },false);
}
