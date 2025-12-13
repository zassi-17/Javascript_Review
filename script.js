const swiper = new Swiper('.swiper', {
  // 最後までスライドしたら最初の画像の戻る
  loop: true,

  // ページネーションの表示
  pagination: {
    el: '.swiper-pagination',
  },

  // ナビゲーションボタンの表示
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});