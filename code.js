$(document).ready(() => {
  const inputValue = $('#input').val();
  const inputColor = $('#input').css('color');
  let shown = false;

  $('#input').focus(() => {
    $('#codeField').addClass('animated pulse');
  })
    .click(() => {
      if ($('#input').val() === inputValue) {
        $('#input').val('').css('color', '#000000');
      }
    })
    .focusout(() => {
      $('#codeField').removeClass('animated pulse');
      if ($('#input').val() === '') {
        $('#input').val(inputValue).css('color', inputColor);
      }
    });


  $('#input').on('keyup', () => {
    if ($('#input').val() === 'Tzahi<3Sasha' && !shown) {
      (function ($) {
        const origAppend = $.fn.append;

        $.fn.append = function () {
          return origAppend.apply(this, arguments).trigger('append');
        };
      }(jQuery));

      $('#futureButton').bind('append', () => {
        $('#secStage').animate({
          opacity: '1',
        });
      });
      $('#futureButton').append('<input type="button" class="btn btn-primary btn-lg" value="Way To Go!" id="secStage" />');
      shown = true;
    } else if (shown && $('#input').val() !== 'Tzahi<3Sasha') {
      $('#secStage').animate({ opacity: '0' }, 250, () => {
        $('#secStage').remove();
      });
      shown = false;
    }
  });

  $('#secStage').click(() => { window.location.href += 'bin/lib/tmp/secLv.html'; });
});
