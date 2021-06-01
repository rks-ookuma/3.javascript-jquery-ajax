$(function(){
    $(document).on('change','input[name="responsibleCompany"]',function(){
        let sumPrice = calcPrice();
        console.log(sumPrice);
    })



























    function calcPrice(){
        let sumPrice = priceBySize() + priceByTopping();
        return sumPrice;
    }
    
    function priceByTopping(){
        let size = $('input[type="radio"]:checked').val();
        let toppingPrice = 0;
        switch (size) {
            case 'M':
                toppingPrice = 200;
                break;
            case 'L':
                toppingPrice = 300;
                break;
        }
        let toppingCount = $('.col-sm-12 input[type="checkbox"]:checked').length;
        return  toppingPrice * toppingCount;
    }
    
    function priceBySize(){
        let size = $('input[type="radio"]:checked').val();
        let priceBySize = 0;
        switch (size) {
            case 'M':
                priceBySize = 1380;
                break;
            case 'L':
                priceBySize = 2380;
                break;
        }
        return priceBySize;
    }
})

