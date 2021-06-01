'use strict';

// 演習1
$(function(){
    $(document).on('click','#ex1-btn',function(){
        $('#ex1-name').show();
    })
})

// 演習2
$(function () {
    $(document).on('click','#ex2-btn',function(){
        console.log($('#ex2-name').css('color'));
        if ($('#ex2-name').css('color') == 'rgb(255, 0, 0)') {
            $('#ex2-name').css('color','blue');
        }else if($('#ex2-name').css('color') == 'rgb(0, 0, 255)'){
            $('#ex2-name').css('color','red');
        }
    })
  })

  // 演習3
  $(function(){
      $(document).on('change','#ex3-hobby',function(){
          if ($('#ex3-hobby').val() == 'トライアスロン') {
              $('#ex3-p').html('それでは好きな種目は？<input type="radio" name="subject">Swim <input type="radio" name="subject">Bike <input type="radio" name="subject">Run');
          }else if($('#ex3-hobby').val() == 'その他'){
              $('#ex3-p').html('それでは何が好き？<input type="text" name="subject">');
          }
      })
  })

  // 演習4
  $(function(){
      $(document).on('click','#ex4-btn',function(){
          $('#ex4-btn').prop('disabled',true);
      })
  })

  // 演習5
  $(function(){
      $(document).on('click','#ex5-btn',function(){
          if($('#ex5-email').val() == ''){
              alert("名前が入力されていません");
          }
      })
  })