$(document).ready(() => {
  for (let i = 0; i < 100; i += 1) {
    $('.balloons').append(`<div class='balloon balloon${i}'></div>`);
  }
  $('#vid_l').on('ended', () => {
    $('#vid_l').hide('slow');
    $('#vidContainer').append('<button class="btn btn-info" title="Replay" id="replay"><i class="fas fa-sync fa-spin"></i></button>');
  });
  $('#vidContainer').on('click', '#replay', () => {
    $('#vid_l').show('slow').currentTime = 0;
    $('#vid_l').trigger('play');
    $('#replay').remove();
  });
});
