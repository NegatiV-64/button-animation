# button-animation
This is a quick way to add an animation for your button

DEPENDENCIES:
- jQuery library

HOW TO INSTALL:
<h2>1. Add the HTML elements to your html page:
"<button type="submit" class="btn btn-style">
  <span class="btn-submit">Submit</span>
  <span class="btn-sending">Sending...</span>
  <span class="btn-send btn-done">Done!</span>
</button>"

<h2>2. Add the css style to your css file. All the needed styles (starting from <MAIN CODE>) you can find in the style.css file. In addition, you should add to the .btn padding, height and width. If you don't want to download the file, here is minified version, just copy and paste to your css styles:</h2>

.btn{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;overflow:hidden}.btn-submit{position:absolute;transition:.4s}.btn-submit-moveUp{transform:translateY(-300%)}.btn-sending{position:absolute;display:block;transform:translateY(250%)}.btn-sending-animation{animation-name:btnSendingDownUp;animation-duration:1.35s;animation-timing-function:cubic-bezier(.28,.68,.74,.17);animation-iteration-count:1}@keyframes btnSendingDownUp{from{transform:translateY(250%)}to{transform:translateY(-250%)}}.btn-send{position:absolute;display:block;transform:translateY(250%)}.btn-done-animation{animation-name:btnSendUp;animation-duration:.7s;animation-timing-function:ease-in;animation-iteration-count:1;animation-delay:1s}@keyframes btnSendUp{0%{transform:translateY(250%)}100%{transform:translateY(0)}}.btn-done-ready{transform:translateY(0)}.btn-done-remover{animation-name:btnSendDown;animation-duration:.2s;animation-timing-function:ease-in;animation-iteration-count:1}@keyframes btnSendDown{0%{transform:translateY(0)}100%{transform:translateY(250%)}}

3. Add the script from the script.js. If you don't want to download the file, here is minified version, just copy and paste to your script:

let buttonElement=$(".btn"),buttonFirstText=$(".btn-submit"),buttonFirstTextMoveUp="btn-submit-moveUp",buttonSecondText=$(".btn-sending"),buttonSecondTextAnim="btn-sending-animation",buttonThirdText=$(".btn-done"),buttonThirdTextAnim="btn-done-animation",buttonThirdTextReady="btn-done-ready",buttonThirdTextRemove="btn-done-remover";$(buttonElement).click(function(t){t.preventDefault(),$(buttonFirstText).addClass(buttonFirstTextMoveUp),$(buttonSecondText).addClass(buttonSecondTextAnim),$(buttonThirdText).addClass(buttonThirdTextAnim),setTimeout(()=>{$(buttonThirdText).addClass(buttonThirdTextReady)},1e3),setTimeout(()=>{$(buttonFirstText).hasClass(buttonFirstTextMoveUp)&&$(buttonSecondText).hasClass(buttonSecondTextAnim)&&$(buttonThirdText).hasClass(buttonThirdTextAnim)&&$(buttonThirdText).hasClass(buttonThirdTextReady)&&($(buttonFirstText).removeClass(buttonFirstTextMoveUp),$(buttonSecondText).removeClass(buttonSecondTextAnim),$(buttonThirdText).removeClass(buttonThirdTextAnim),$(buttonThirdText).removeClass(buttonThirdTextReady),$(buttonThirdText).addClass(buttonThirdTextRemove),setTimeout(()=>{$(buttonThirdText).removeClass(buttonThirdTextRemove)},201))},4e3)});

ADDITIONAL INFORMATION:
1. You can easily add another class to any elements, to style them, unless the styles wouldn't conflict with the code.
2. If you quite familiar with jQuery (or JavaScript) you can change the class names, however, I suggest you not to change the class names or keyframes until you understand what you are doing.

<h2>CONTACT:</h2>
If you have any problems with the code, contact me via oleg.panash228@gmail.com. Hope that my piece of code would be helpful)
