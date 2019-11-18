var myDeck = new Array("asset/spadesA.png", "asset/heartLove.png", "asset/heartTwo.png");
var dice;

$('.shuffle').ready(
    $('.shuffle').click(function () {
        const nums = new Set();
        while(nums.size !== 3) {
            nums.add(Math.floor(Math.random() * 3));
        }
        dice =Array.from(nums);
        $(".slot_1").attr("src",myDeck[dice[0]]);
        $(".slot_2").attr("src",myDeck[dice[1]]);
        $(".slot_3").attr("src",myDeck[dice[2]]);
        $('.shuffle').html("Shuffling!!");
        $('.shuffle').css({'backgroundColor' : 'green'});
        setTimeout(()=>{
            $('.shuffle').html("Shuffle!!");
            $('.shuffle').css({'backgroundColor' : 'deepskyblue'});
        },300);
    })
);


