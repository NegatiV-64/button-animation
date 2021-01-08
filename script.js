// You can specify almost everything before the main "CLICK" function. You can specify the btn 
// class and its additional classes. If you want, you can only specify the main classes (that goes with $('.smth')). 
// The additional classes are already specified.

// HTML button Element
let buttonElement = $('.btn');

// Button Initial Visible Text before the animation start. For example, "Submit"
let buttonFirstText = $('.btn-submit');
let buttonFirstTextMoveUp = 'btn-submit-moveUp';

// Button Text that is seen between initial text and 'ready' text. For example, "Sending"
let buttonSecondText = $('.btn-sending');
let buttonSecondTextAnim = 'btn-sending-animation';

// Button Text that is seen in the end of the animation. For example, "Send!"
let buttonThirdText = $('.btn-done');
let buttonThirdTextAnim = 'btn-done-animation';
let buttonThirdTextReady = 'btn-done-ready';
let buttonThirdTextRemove = 'btn-done-remover';


$(buttonElement).click(function (e) {
    e.preventDefault();
    $(buttonFirstText).addClass(buttonFirstTextMoveUp);
    $(buttonSecondText).addClass(buttonSecondTextAnim);
    $(buttonThirdText).addClass(buttonThirdTextAnim);
    setTimeout(() => {
        $(buttonThirdText).addClass(buttonThirdTextReady)
    }, 1000); // This timeout duration should match with the buttonThirdTextAnim css style "animation-delay"
              // For example, if the css style is 1000ms, therefore there should be 1000. Otherwise, the animation would appear too early

    setTimeout(() => {
        if (
            $(buttonFirstText).hasClass(buttonFirstTextMoveUp) &&
            $(buttonSecondText).hasClass(buttonSecondTextAnim) &&
            $(buttonThirdText).hasClass(buttonThirdTextAnim) &&
            $(buttonThirdText).hasClass(buttonThirdTextReady)
        ) {
            $(buttonFirstText).removeClass(buttonFirstTextMoveUp);
            $(buttonSecondText).removeClass(buttonSecondTextAnim);
            $(buttonThirdText).removeClass(buttonThirdTextAnim);
            $(buttonThirdText).removeClass(buttonThirdTextReady);
            $(buttonThirdText).addClass(buttonThirdTextRemove);
            setTimeout(() => {
                $(buttonThirdText).removeClass(buttonThirdTextRemove)
            }, 201);  // This timeout duration should match with the buttonThirdTextRemove css style "animation-delay"
                      // For example, if the css style is 200, therefore there should be 201 (delay time+1). Otherwise, the animation would appear too early
        }
    }, 4000); // This is timeout time, when the the first text would appear again
});