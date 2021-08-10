// ハンバーガーメニュー
$(function () {
  $('.hamburger-menu').on('click', function () {
    $(this).toggleClass('hamburger-menu-active')
  })
})
$(function () {
  $('.hamburger-menu').click(function () {
    $('.nav-sp').toggle('slow');
  });
});
// 制作物モーダル
$(function() {
  var winScrollTop;
  $('.js-modal-open').each(function(){
    $(this).on('click', function () {
      //スクロール位置を取得
      winScrollTop = $(window).scrollTop();
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      $(modal).fadeIn();
      return false;
    });
});
$(function() {
  $('.js-modal-close').on('click',function(){
      $('.js-modal').fadeOut();
  $('body,html').stop().animate({scrollTop:winScrollTop}, 100);
  return false;
    });
});
});
// クリックで状態切り替え
$(function() {
  $(".change_btn").click(function() {
    $(".change_img").toggleClass("active");
  });
});
