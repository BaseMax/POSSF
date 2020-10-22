// (function () {
//
//     const $window = $(window),
//         $sectionOne = $('#section_one'),
//         $serviceOne = $('#service_one'),
//         $serviceTwo = $('#service_two'),
//         $serviceThree = $('#service_three'),
//         $serviceBtnOne = $('#service_btn_one'),
//         $sectionTwo = $('#section_two'),
//         $discountResultOne = $('#discount_result_one'),
//         $discountResultTwo = $('#discount_result_two'),
//         $discountResultThree = $('#discount_result_three'),
//         $discountResultFour = $('#discount_result_four'),
//         $sectionThree = $('#section_three'),
//         $discountBoxLeft = $('.discount_box_left'),
//         $discountBoxCenter = $('.discount_box_center'),
//         $discountBoxRight = $('.discount_box_right'),
//         $cartBtn = $('.cart-btn'),
//         $serviceBtnTwo = $('#service_btn_two');
//
//
//
//     $window.scroll(function () {
//         // section one
//         if ($window.scrollTop() > $sectionOne.position().top - 500) {
//             $serviceOne.delay(200).animate({top: '0px', opacity: '1'},{duration:300});
//             $serviceTwo.delay(400).animate({top: '0px', opacity: '1'}, {duration:300});
//             $serviceThree.delay(600).animate({top: '0px', opacity: '1'}, {duration:300});
//             $serviceBtnOne.delay(800).animate({opacity: '1'}, {duration:300});
//             $serviceBtnTwo.delay(800).animate({opacity: '1'}, {duration:300});
//         }
//
//         // section two
//         if ($window.scrollTop() > $sectionTwo.position().top - 500) {
//             $discountResultOne.delay(200).animate({left: '0px', opacity: '1'}, {duration:300});
//             $discountResultTwo.delay(400).animate({left: '0px', opacity: '1'}, {duration:300});
//             $discountResultThree.delay(600).animate({left: '0px', opacity: '1'}, {duration:300});
//             $discountResultFour.delay(800).animate({left: '0px', opacity: '1'}, {duration:300});
//         }
//
//         // section two
//         if ($window.scrollTop() > $sectionThree.position().top - 500) {
//             $discountBoxLeft.delay(200).animate({left: '0px', opacity: '1'}, {duration:500});
//             $discountBoxCenter.delay(200).animate({opacity: '1'}, {duration:500});
//             $discountBoxRight.delay(200).animate({right: '0px', opacity: '1'}, {duration:500});
//
//             $cartBtn.addClass('shadow-animation');
//         }
//     })
//
//
// })();
