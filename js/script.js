$(function () {
  //ロード画面
  $(function() {
    setTimeout(function(){
      //ロード画面をフェードイン
      $('.loading').fadeIn(500);

      // スクロール禁止
      document.addEventListener('touchmove', noScroll, { passive: false });
      document.addEventListener('mousewheel', noScroll, { passive: false });
    },100); //0.1秒後に実行

    setTimeout(function(){
      //ロード画面をフェードアウト
      $('.loading').fadeOut(100);

      //スクロール禁止を解除
      document.removeEventListener('touchmove', noScroll, { passive: false });
      document.removeEventListener('mousewheel', noScroll, { passive: false });
    },2000); //3秒後に実行
  });

  setTimeout(function(){
    turn($(".logo-name"), 80);
    turn($(".logo-title"), 100);
  },2000);//3秒後にロゴを1文字ずつ表示

  //1文字ずつ表示する関数
  function turn(container, speed) { 
    // テキストの間にスペースを入れる
    var content = $(container).html();
    var text = $.trim(content);
    var newHtml = "";

    // スペースで区切ったテキストを、テキストの数だけspanで囲む
    text.split("").forEach(function(v) {
      newHtml += '<span>' + v + '</span>';
    });

    // spanで囲んだテキスト群をHTMLに戻す
    $(container).html(newHtml);

    // 1文字ずつ表示
    var txtNum = 0;
    setInterval(function() {
      $(container).find('span').eq(txtNum).css({opacity: 1});
      txtNum++
    }, speed);
  }

  // スクロールを禁止する関数
  function noScroll(event) {
    event.preventDefault();
  }

});

/*--------------------------------
 modal
---------------------------------*/
    // モーダルを開く
    function openModal(ModalId) {
      document.getElementById(ModalId).style.display = 'block';
      document.getElementById('modalBackground').style.display = 'block';
  }

  // モーダルを閉じる
  function closeModal(ModalId) {
      document.getElementById(ModalId).style.display = 'none';
      document.getElementById('modalBackground').style.display = 'none';
  }

    // クリックされたら全画面表示
    function openFullscreen(ItemId) {
      var fullscreenImage = document.getElementById(ItemId);
      fullscreenImage.style.display = 'block';
  }

  // 全画面表示を閉じる
  function closeFullscreen(ItemId) {
      var fullscreenImage = document.getElementById(ItemId);
      fullscreenImage.style.display = 'none';
  }
