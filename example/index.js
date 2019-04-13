import YuiDialog from '../src/index.js';
import FastClick from 'fastclick'

FastClick.attach(document.body)


document.querySelector(".toast-btn").addEventListener("click",function(){
  YuiDialog.toast({
    position:"middle",
  });
})
document.querySelector(".confirm-btn").addEventListener("click",function(){
  YuiDialog.confirm();
})

document.querySelector(".popup-btn").addEventListener("click",function(){
  YuiDialog.popup();
})
document.querySelector(".actionsheet-btn").onclick = function(){
  YuiDialog.actionSheet({
    className:"actionsheets",
    clickOnItem:function(item){
      console.log(item);
    }
  });
}
