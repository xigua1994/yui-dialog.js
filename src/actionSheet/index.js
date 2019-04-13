import {mask,wrap,bodyPosition,normalBody,isIos,delegateEvent} from '../util/util.js'
let _sington;

function actionSheet(options){
  if(_sington){return _sington};
  const opt = Object.assign({
    showMask:true,
    closeOnClickMask:true,
    styleType:isIos() ? "ios" : "android",
    actions:[
      {
        content:"标签一",
      },
      {
        content:"标签二",
      },
      {
        content:"标签三",
        disabled: true
      },
      {
        content:"标签四",
      },
    ],
    showCancle:false,
    className:"",
  },options)
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
  let yuiActionSheet = document.createElement("div");
  yuiActionSheet.classList = `yui-actionsheet yui-actionsheet-${opt.styleType} ${opt.className}`;
  const actionSheetTpl = `${opt.actions.map((item,key) => `<div data-item="${key}" class="yui-actionsheets-item yui-border-bottom-1px ${item.disabled ? 'yui-actionsheets-item__disabled':''}">${item.content}</div>`).join("")}`;
  yuiActionSheet.innerHTML = actionSheetTpl;
  yuiWrap.appendChild(yuiActionSheet);
  delegateEvent(yuiActionSheet,'.yui-actionsheets-item',"click",function(e){
    var itemIndex = this.getAttribute("data-item");
    opt.clickOnItem(itemIndex);
    yuiWrap.remove();
    normalBody();
    _sington = false;
  })
  document.body.appendChild(yuiWrap);
}

export default actionSheet;
