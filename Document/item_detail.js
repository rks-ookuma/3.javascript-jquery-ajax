'use strict';

$(function(){

    // この方法では最初にダミーの38,000円が一瞬見えてしまう
    let totalPrice = calcPrice();
    $('#price').text(totalPrice.toLocaleString());

    $(document).on('change','input[name="responsibleCompany"]',function(){
        let totalPrice = calcPrice();
        $('#price').text(totalPrice.toLocaleString());
    })

    $('input[type="checkbox"]').on('change',function(){
        let totalPrice = calcPrice();
        $('#price').text(totalPrice.toLocaleString());
    })

    $('select[name=area]').on('change',function(){
        let totalPrice = calcPrice();
        $('#price').text(totalPrice.toLocaleString());
    })

    function calcPrice(){
        let size = $('input[name="responsibleCompany"]:checked').val();
        let quantity = $('select[name=area]').val();
        let toppingCount = $('input[type="checkbox"]:checked').length;

        let priceOfSize = 0;
        switch (size) {
            case 'M':
                priceOfSize = 1380;
                break;
            case 'L':
                priceOfSize = 2380;
                break;
        }
        let priceOfTopping = 0;
        switch (size) {
            case 'M':
                priceOfTopping = 200;
                break;
            case 'L':
                priceOfTopping = 300;
                break;
        }
        
        let totalPrice = (priceOfSize + (priceOfTopping * toppingCount) ) * quantity;
        return totalPrice;
    }

})

