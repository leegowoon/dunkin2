// gsap.registerPlugin(ScrollTrigger);


    $(window).scroll(function(){
        if($(document).scrollTop() > 0) {
            $('#header').addClass('scrolled');
        } else {
            $('#header').removeClass('scrolled');
        }
    });
//----------------------------------------------------------------------------
let lenis;

const initSmoothScrolling = () => {
	lenis = new Lenis({
		lerp: 0.1,
		smoothWheel: true ,
        ease:"linear"
	});

 
	lenis.on('scroll', () => ScrollTrigger.update());

	const scrollFn = (time) => {
		lenis.raf(time); 
		requestAnimationFrame(scrollFn); 
	};
	requestAnimationFrame(scrollFn);
};

initSmoothScrolling();

//----------------------------------------------------------------------------

// 🧡canvas
//window.onload=function(){

function canvas(){
    const canvas = document.querySelector("#myCanvas");
    const context = canvas.getContext("2d"); // canvas.getContext("2d") --> canvas를 사용하기 위한 필수코드!

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    window.addEventListener("resize",function(){
        canvas.width = window.innerWidth; // 뷰포트의 넓이 / canvas넓이가 뷰포트의 넓이만큼 맞추겠다는 뜻
        canvas.height = window.innerHeight;
        render();
    })
    

    function files(index){
        var data = `./img/던킨_720p_out0001.png
        ./img/던킨_720p_out0002.png
        ./img/던킨_720p_out0003.png
        ./img/던킨_720p_out0004.png
        ./img/던킨_720p_out0005.png
        ./img/던킨_720p_out0006.png
        ./img/던킨_720p_out0007.png
        ./img/던킨_720p_out0008.png
        ./img/던킨_720p_out0009.png
        ./img/던킨_720p_out0010.png
        ./img/던킨_720p_out0011.png
        ./img/던킨_720p_out0012.png
        ./img/던킨_720p_out0013.png
        ./img/던킨_720p_out0014.png
        ./img/던킨_720p_out0015.png
        ./img/던킨_720p_out0016.png
        ./img/던킨_720p_out0017.png
        ./img/던킨_720p_out0018.png
        ./img/던킨_720p_out0019.png
        ./img/던킨_720p_out0020.png
        ./img/던킨_720p_out0021.png
        ./img/던킨_720p_out0022.png
        ./img/던킨_720p_out0023.png
        ./img/던킨_720p_out0024.png
        ./img/던킨_720p_out0025.png
        ./img/던킨_720p_out0026.png
        ./img/던킨_720p_out0027.png
        ./img/던킨_720p_out0028.png
        ./img/던킨_720p_out0029.png
        ./img/던킨_720p_out0030.png
        ./img/던킨_720p_out0031.png
        ./img/던킨_720p_out0032.png
        ./img/던킨_720p_out0033.png
        ./img/던킨_720p_out0034.png
        ./img/던킨_720p_out0035.png
        ./img/던킨_720p_out0036.png
        ./img/던킨_720p_out0037.png
        ./img/던킨_720p_out0038.png
        ./img/던킨_720p_out0039.png
        ./img/던킨_720p_out0040.png
        ./img/던킨_720p_out0041.png
        ./img/던킨_720p_out0042.png
        ./img/던킨_720p_out0043.png
        ./img/던킨_720p_out0044.png
        ./img/던킨_720p_out0045.png
        ./img/던킨_720p_out0046.png
        ./img/던킨_720p_out0047.png
        ./img/던킨_720p_out0048.png
        ./img/던킨_720p_out0049.png
        ./img/던킨_720p_out0050.png
        ./img/던킨_720p_out0051.png
        ./img/던킨_720p_out0052.png
        ./img/던킨_720p_out0053.png
        ./img/던킨_720p_out0054.png
        ./img/던킨_720p_out0055.png
        ./img/던킨_720p_out0056.png
        ./img/던킨_720p_out0057.png
        ./img/던킨_720p_out0058.png
        ./img/던킨_720p_out0059.png
        ./img/던킨_720p_out0060.png
        ./img/던킨_720p_out0061.png
        ./img/던킨_720p_out0062.png
        ./img/던킨_720p_out0063.png
        ./img/던킨_720p_out0064.png
        ./img/던킨_720p_out0065.png
        ./img/던킨_720p_out0066.png
        ./img/던킨_720p_out0067.png
        ./img/던킨_720p_out0068.png
        ./img/던킨_720p_out0069.png
        ./img/던킨_720p_out0070.png
        ./img/던킨_720p_out0071.png
        ./img/던킨_720p_out0072.png
        ./img/던킨_720p_out0073.png
        ./img/던킨_720p_out0074.png
        ./img/던킨_720p_out0075.png
        ./img/던킨_720p_out0076.png
        ./img/던킨_720p_out0077.png
        ./img/던킨_720p_out0076.png
        ./img/던킨_720p_out0077.png
        ./img/던킨_720p_out0078.png
        ./img/던킨_720p_out0079.png
        ./img/던킨_720p_out0080.png
        ./img/던킨_720p_out0081.png
        ./img/던킨_720p_out0082.png
        ./img/던킨_720p_out0083.png
        ./img/던킨_720p_out0084.png
        ./img/던킨_720p_out0085.png
        ./img/던킨_720p_out0086.png
        ./img/던킨_720p_out0087.png
        ./img/던킨_720p_out0088.png
        ./img/던킨_720p_out0089.png
        ./img/던킨_720p_out0090.png
        ./img/던킨_720p_out0091.png
        ./img/던킨_720p_out0092.png
        ./img/던킨_720p_out0093.png
        ./img/던킨_720p_out0094.png
        ./img/던킨_720p_out0095.png
        ./img/던킨_720p_out0096.png
        ./img/던킨_720p_out0097.png
        ./img/던킨_720p_out0098.png
        ./img/던킨_720p_out0099.png
        ./img/던킨_720p_out0100.png
        ./img/던킨_720p_out0101.png
        ./img/던킨_720p_out0102.png
        ./img/던킨_720p_out0103.png
        ./img/던킨_720p_out0104.png
        ./img/던킨_720p_out0105.png
        ./img/던킨_720p_out0106.png
        ./img/던킨_720p_out0107.png
        ./img/던킨_720p_out0108.png
        ./img/던킨_720p_out0109.png
        ./img/던킨_720p_out0110.png
        ./img/던킨_720p_out0111.png
        ./img/던킨_720p_out0112.png
        ./img/던킨_720p_out0113.png
        ./img/던킨_720p_out0114.png
        ./img/던킨_720p_out0115.png
        ./img/던킨_720p_out0116.png
        ./img/던킨_720p_out0117.png
        ./img/던킨_720p_out0118.png
        ./img/던킨_720p_out0119.png
        ./img/던킨_720p_out0120.png
        ./img/던킨_720p_out0121.png
        ./img/던킨_720p_out0122.png
        ./img/던킨_720p_out0123.png
        ./img/던킨_720p_out0124.png
        ./img/던킨_720p_out0125.png
        ./img/던킨_720p_out0126.png
        ./img/던킨_720p_out0127.png
        ./img/던킨_720p_out0128.png
        ./img/던킨_720p_out0129.png
        ./img/던킨_720p_out0130.png
        ./img/던킨_720p_out0131.png
        ./img/던킨_720p_out0132.png
        ./img/던킨_720p_out0133.png
        ./img/던킨_720p_out0134.png
        ./img/던킨_720p_out0135.png
        ./img/던킨_720p_out0136.png
        ./img/던킨_720p_out0137.png
        ./img/던킨_720p_out0138.png
        ./img/던킨_720p_out0139.png
        ./img/던킨_720p_out0140.png
        ./img/던킨_720p_out0141.png
        ./img/던킨_720p_out0142.png
        ./img/던킨_720p_out0143.png
        ./img/던킨_720p_out0144.png
        ./img/던킨_720p_out0145.png
        ./img/던킨_720p_out0146.png
        ./img/던킨_720p_out0147.png
        ./img/던킨_720p_out0148.png
        ./img/던킨_720p_out0149.png
        ./img/던킨_720p_out0150.png
        ./img/던킨_720p_out0151.png
        ./img/던킨_720p_out0152.png
        ./img/던킨_720p_out0153.png
        ./img/던킨_720p_out0154.png
        ./img/던킨_720p_out0155.png
        ./img/던킨_720p_out0156.png
        ./img/던킨_720p_out0157.png
        ./img/던킨_720p_out0158.png
        ./img/던킨_720p_out0159.png
        ./img/던킨_720p_out0160.png
        ./img/던킨_720p_out0161.png
        ./img/던킨_720p_out0162.png
        ./img/던킨_720p_out0163.png
        ./img/던킨_720p_out0164.png
        ./img/던킨_720p_out0165.png
        ./img/던킨_720p_out0166.png
        ./img/던킨_720p_out0167.png
        ./img/던킨_720p_out0168.png
        ./img/던킨_720p_out0169.png
        ./img/던킨_720p_out0170.png
        ./img/던킨_720p_out0171.png
        ./img/던킨_720p_out0172.png
        ./img/던킨_720p_out0173.png
        ./img/던킨_720p_out0174.png
        ./img/던킨_720p_out0175.png
        ./img/던킨_720p_out0176.png
        ./img/던킨_720p_out0177.png
        ./img/던킨_720p_out0178.png
        ./img/던킨_720p_out0179.png
        ./img/던킨_720p_out0180.png
        ./img/던킨_720p_out0181.png
        ./img/던킨_720p_out0182.png
        ./img/던킨_720p_out0183.png
        ./img/던킨_720p_out0184.png
        ./img/던킨_720p_out0185.png
        ./img/던킨_720p_out0186.png
        ./img/던킨_720p_out0187.png
        ./img/던킨_720p_out0188.png
        ./img/던킨_720p_out0189.png
        ./img/던킨_720p_out0190.png
        ./img/던킨_720p_out0191.png
        ./img/던킨_720p_out0192.png
        ./img/던킨_720p_out0193.png
        ./img/던킨_720p_out0194.png
        ./img/던킨_720p_out0195.png
        ./img/던킨_720p_out0196.png
        ./img/던킨_720p_out0197.png
        ./img/던킨_720p_out0198.png
        ./img/던킨_720p_out0199.png
        ./img/던킨_720p_out0200.png
        ./img/던킨_720p_out0201.png
        ./img/던킨_720p_out0202.png
        ./img/던킨_720p_out0203.png
        ./img/던킨_720p_out0204.png
        ./img/던킨_720p_out0205.png
        ./img/던킨_720p_out0206.png
        ./img/던킨_720p_out0207.png
        ./img/던킨_720p_out0208.png
        ./img/던킨_720p_out0209.png
        ./img/던킨_720p_out0210.png
        ./img/던킨_720p_out0211.png
        ./img/던킨_720p_out0212.png
        ./img/던킨_720p_out0213.png
        ./img/던킨_720p_out0214.png
        ./img/던킨_720p_out0215.png
        ./img/던킨_720p_out0216.png
        ./img/던킨_720p_out0217.png
        ./img/던킨_720p_out0218.png
        ./img/던킨_720p_out0219.png
        ./img/던킨_720p_out0220.png
        ./img/던킨_720p_out0221.png
        ./img/던킨_720p_out0222.png
        ./img/던킨_720p_out0223.png
        ./img/던킨_720p_out0224.png
        ./img/던킨_720p_out0225.png
        ./img/던킨_720p_out0226.png
        ./img/던킨_720p_out0227.png
        ./img/던킨_720p_out0228.png
        ./img/던킨_720p_out0229.png
        ./img/던킨_720p_out0230.png
        ./img/던킨_720p_out0231.png
        ./img/던킨_720p_out0232.png
        ./img/던킨_720p_out0233.png
        ./img/던킨_720p_out0234.png
        ./img/던킨_720p_out0235.png
        ./img/던킨_720p_out0236.png
        ./img/던킨_720p_out0237.png
        ./img/던킨_720p_out0238.png
        ./img/던킨_720p_out0239.png
        ./img/던킨_720p_out0240.png`;

        return data.split("\n")[index];
         //split : 문자로 잘라서 배열로 만든다
    }

    const frameCount = 240; //이미지 전체 갯수 //300
    const images = [];
    const imageSeq = { //sequence
        frame:0
    }
    for(let i = 0; i < frameCount; i++){ //0부터 299까지
        const img = new Image(); //img태그 만들기
        img.src = files(i)
        images.push(img) //push 배열에 어떤것을 넣는다.
    }
    //console.log(images)
    gsap.to(imageSeq,{ //imageSeq>>변수라서 따옴표안함.
        frame:frameCount - 1, //마지막 프레임의 index번호
        snap:"frame", //frame은 프레임단위로 값을 맞추겠다는 의미
        ease:"none",
        scrollTrigger:{
            scrub: 0.15, //"true"도 가능 //스크롤 내리면 실행하고싶으면 필요 // 0.15
            trigger:'#section3>canvas',
            start:'top top',
            end:'600% top', //600%
            //scroller:"#wrap",
            pin:true
        },
        onUpdate: render //gsap.to가 변할 때마다 업데이트가 일어남
    })

    images[0].onload = render; // >> 이 코드는 첫번째사진은 시작부터 있어야하므로

    function render(){
        scaleImage(images[imageSeq.frame], context)
    }

    function scaleImage(img, ctx){
        let canvas = ctx.canvas;
        let hRatio = canvas.width / img.width; // canvas가 크고, img가 작을 때 --> 100/80=1.25  // canvas가 더 작고, img가 클 때 --> 100/150=0.6666
        let vRatio = canvas.height / img.height; // vRatio:수직

        //console.log(hRatio+","+vRatio)

        //let ratio = Math.max(10,20) //20 >> 가장 큰 값을 구하는 코드

        // ◼ 이미지 500*500
        // - 넓은 화면 일 때 1000*600이라고 가정하면
        // hRatio = 1000/500=2 vRatio = 600/500=1.2 --> ratio=2
        // let ratio = Math.max(hRatio,vRatio); --> 이 값은 2가 된다. 가장 큰 값을 찾기 때문에
        // - 넓은 화면 일때 넓이가 400*600이라고 가정하면
        // hRatio = 400/500=0.8 vRatio = 600/500=1.2 --> ratio=1.2
        // 결론 : 화면의 크기에 따라 이미지가 작아졌다 커졌다 한다는 의미

        let ratio = Math.max(hRatio, vRatio);

        // 이미지 중앙에 맞추기
        let centershift_x = (canvas.width - img.width * ratio)/2;
        let centershift_y = (canvas.height - img.height * ratio)/2;

        ctx.clearRect(0, 0, canvas.width, canvas.height) //화면정리하는 것
        // canvas에 이미지를 표현할 때 drawImage(image, x, y, width, height) -- mdn > canvas > using images
        // canvas에 이미지를 표현할 때 drawImage(image, sx, sy, swidth, sheight, dx, dy, dwidth, dheight) -- sx, sy, swidth --> 소스자체 / dx, dy, dwidth, dheight --> 소스가 만들어진 후 설정
        ctx.drawImage(img, 0, 0, img.width, img.height, centershift_x, centershift_y, img.width * ratio, img.height * ratio) // --> 이미지를 정중앙에 놓기 위한 방법 // img.width*ratio : ratio를 곱해주는이유는 화면크기에 따라 조절하기위해서
    }
        
    ScrollTrigger.create({
        trigger:"#section3>canvas", // 애니메이션이 시작될 요소
            //scroller:"#wrap", //스크롤이 발생하는 요소
            pin: true, //스크롤하는 동안 트리거 요소(#page>canvas) 고정시킴 //"#section4>canvas"
            start: "top top",//애니메이션 시작
            end: "600% top",//애니메이션 종료 --> 600%내려가서 뷰포트의 top에 붙으면 애니메이션 종료
            // pinSpacing: true
            // onComplete: () => {
            //     // Callback when the animation for #section3 is completed
            //     // Start the animation for #section4 after 600% scroll
            //     gsap.to("#section4", { opacity: 1, duration: 1 }); // Change opacity or use other animations
            // },
    })
}


canvas();

// Initial state for #section4 (invisible)
// gsap.set("#section4", { opacity: 0 });

// gsap.to("#section3", {
//     scrollTrigger: {
//         trigger: "#section3", 
//         //scroller: "#wrap",
//         pin: true, 
//         start: "top top", 
//         end: "bottom top", 
//     },
// });


gsap.to("#section4", {
    scrollTrigger: {
        trigger: "#section4", // 애니메이션이 시작될 요소
        //scroller: "#wrap", // 스크롤이 발생하는 요소
        pin: true, // 스크롤하는 동안 트리거 요소(#section2) 고정시킴
        start: "top top", // 애니메이션 시작
        end: "bottom top", // 애니메이션 종료 --> bottom이 top이 될 때
    },
});

gsap.to("#section5", {
    scrollTrigger: {
        trigger: "#section5", 
        //scroller: "#wrap",
        pin: true, 
        start: "top top", 
        end: "bottom top", 
    },
});

gsap.to("#section6", {
    scrollTrigger: {
        trigger: "#section6",
        //scroller: "#wrap",
        pin: true,
        start: "top top",
        end: "bottom top",
    },
});
gsap.to("#section7", {
    scrollTrigger: {
        trigger: "#section7",
        //scroller: "#wrap",
        //pin: true,
        start: "top top",
        end: "bottom top",
    },
});
// gsap.to("#section8", {
//     scrollTrigger: {
//         trigger: "#section8",
//         //scroller: "#wrap",
//         //pin: true,
//         start: "top top",
//         end: "200% top",
//     },
// });
// gsap.to("#section9", {
//     scrollTrigger: {
//         trigger: "#section9",
//         //scroller: "#wrap",
//         //pin: true,
//         start: "top top",
//         end: "bottom top",
//     },
// });
gsap.to("#section10", {
    scrollTrigger: {
        trigger: "#section10",
        //scroller: "#wrap",
        //pin: true,
        start: "top top",
        end: "bottom top",
    },
});
// gsap.to("#section11", {
//     scrollTrigger: {
//         trigger: "#section11",
//         //scroller: "#wrap",
//         //pin: true,
//         start: "top top",
//         end: "bottom top",
//     },
// });
// gsap.to("#section12", {
//     scrollTrigger: {
//         trigger: "#section12",
//         //scroller: "#wrap",
//         //pin: true,
//         start: "top top",
//         end: "bottom top",
//     },
// });




//-----------------------------------------------
//circle_text
// const text_c = document.getElementById('text_c')
// const rotate_c = new CircleType(text_c).radius(50)

// window.addEventListener('scroll',function(){
//     text_c.style.transform = 'rotate(' + (window.scrollY * 0.15) + 'deg)'
// })

// const text_c = document.getElementById('text_c');

// window.addEventListener('scroll', function () {
//     // 스크롤 위치에 따라 각도 계산 (180도까지)
//     const rotationAngle = (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 180;

//     // 반원 모양으로 회전하는 효과 적용
//     text_c.style.transform = 'rotate(' + rotationAngle + 'deg)';
// });

// const text_c1 = document.getElementById('text_c1')
// const rotate_c1 = new CircleType(text_c).radius(50)

// window.addEventListener('scroll',function(){
//     text_c.style.transform = 'rotate(' + (window.scrollY * 0.15) + 'deg)'
// })


// const text_c1 = document.getElementById('text_c1')
// const rotate_c1 = new CircleType(text_c).radius(10)

// window.addEventListener('scroll',function(){
//     text_c1.style.transform = 'rotate(' + (window.scrollY * 0.15) + 'deg)'
// })

// var demo5 = new CircleType(document.getElementById('text_c1'))
//   .radius(180);
// $(demo5.element).fitText();

// const demo1 = document.getElementById('demo5')
// const demo5 = new CircleType(document.getElementById('demo5')).radius(180);
// $(demo5.element).fitText();

// window.addEventListener('scroll',function(){
//     demo1.style.transform = 'rotate(' + (window.scrollY * 0.15) + 'deg)'
// })

// const demoElement = document.getElementById('demo5');
// const demo7 = new CircleType(demoElement).radius(180).dir(-1);
// $(demo7.element).fitText();

// window.addEventListener('scroll', function () {
//     demoElement.style.transform = 'rotate(' + (window.scrollY * 0.15) + 'deg)';
// });

//-------------------------------------------------------


// window.addEventListener('scroll',function(){
//     //console.log("kdkkdkdkkd")
// })



  var image = ['donut_2.png','donut_1.png','donut_3.png','donut_4.png']
// var hoverimage = ['big_536.png','se1_hicon_2.png','se1_hicon_3.png','se1_hicon4.png']
// var bullet = ['Famous Glazed','Cacao Frosted','Berry Cheese','Cappuccino Chewisty'];
// var price = ['￦3500','￦3500','￦3500','￦3500'];


var bottomSwiper = new Swiper('.swiper-bottom', {
    direction: 'vertical',
    slidesPerView: '1',
    pagination: {
        el: ".swiper-pagination-custom",
            clickable: true,
            bulletClass:"custom_bullet",
            bulletActiveClass: "swiper-pagination-custom-bullet-active",
            renderBullet: function (index, className) {
                // return '<div class="' + className + '"><div><img src="./img/' + (image[index]) + '"></div><span>' + (bullet[index]) + '</span><p>' + (price[index]) +'</p></div>';
                return '<div class="' + className + '"><div><img src="./img/' + (image[index]) + '"></div></div>';
            },
    },

    // autoplay: {
    //     delay: 4100,
    //     disableOnInteraction:false,
    // },
    speed: 800,
    loop: true,
    touchRatio: 0.2,
    observer: true,
    observeParents: true
});


// $('.animate').scrolla({
//     // default
//     mobile: false,
//     once: false,
//     animateCssVersion: 4
//   });

  


    //favorite glreas
  // 글씨 쪼개기 (라이브러리 사용하지않고)
//console.log(document.querySelectorAll(".desc"))
// document.querySelectorAll('.text_r>h1').forEach((des)=>{
//     let splitText = des.innerHTML;
//     //console.log(splitText)
//     let splitWrap=splitText.split("").join("</span><span>"); //split(""):""안에 띄어쓰기X
//     splitWrap = "<span>" + splitWrap + "</span>";
//     //console.log(splitWrap)
//     des.innerHTML=splitWrap;
// })

// document.querySelectorAll('.text_r>h1').forEach((des)=>{
//     let splitText = des.innerHTML;
//     //console.log(splitText)
//     let splitWrap=splitText.split("").join("</span><span>"); //split(""):""안에 띄어쓰기X
//     splitWrap = "<span>" + splitWrap + "</span>";
//     //console.log(splitWrap)
//     des.innerHTML=splitWrap; 
// })

// document.querySelectorAll('.text_r>h2').forEach((des)=>{
//     let splitText = des.innerHTML;
//     //console.log(splitText)
//     let splitWrap=splitText.split("").join("</span><span>"); //split(""):""안에 띄어쓰기X
//     splitWrap = "<span>" + splitWrap + "</span>";
//     //console.log(splitWrap)
//     des.innerHTML=splitWrap; 
// })

// function scroll(){
//     //let scrollTop = window.pageYOffset;
//     //= let scrollTop = window.scrollY;
//     //= let scrollTop = documentElement.scrollTop;

//     let scrollTop = window.pageYOffset;
//     document.querySelectorAll('.text_l>h1').forEach((item)=>{ //All 붙으면 배열이고, 이 코드는 유사배열이다<div className=""></div>
//         if(scrollTop >= item.offsetTop){
//             item.querySelectorAll(".text_l>h1 span").forEach((span,index)=>{
//                 //setInterval(function(){},3000) //3초마다 할일(반복실행)
//                 //setTimeout(function(){},3000) //3초뒤에 함수실행(한번실행)
//                 setTimeout(function(){
//                     span.classList.add('show'); //style에 show 만들기
//                 },50 * (index + 1))
//             })
//         }
//     }) 
//     requestAnimationFrame(scroll)
// }
// scroll();


// const introText = document.querySelectorAll("span");

// window.onload = () => {
//   let timer = 100;
//   introText.forEach((item) => {
//     item.style.animation = `fade 500ms ${(timer += 50)}ms forwards`;
//   });
// };


//favorite greds
// var tl = gsap.timeline({
//     repeat:-0.05,
//     // 무한히 반복하고 싶다면 repeat:-1
//     repeatDelay:0.01
//     // repeatDelay : 애니메이션이 끝나고 쉬는시간
//   });
  
//   tl.from(".text_r h1 > span", {
//     opacity: 0,
//     y: 100,
//     duration: 0.08,
//     stagger: 0.08
//   }
//   );


  
  // tl.to(".text_l h1 > span", {
  //   opacity: 0,
  //   y: -100,
  //   duration: 0.2,
  //   stagger: {
  //     each: "0.1",
  //     from: "end"
  //   }
  // }, );
  // "+=2" 는 delay를 나타냄

// gsap.to(".text_l>h1>span", {
//   scrollTrigger: {
//     trigger: '.text_l>h1>span',//객체기준범위
//     scroller: "#main",
//     start: "top top",//시작 지점
//     end: "bottom bottom",//끝 지점
//     // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
//     scrub: 1,//부드러운 스크러빙
//     //개발가이드선
//   },
//   y: 100,
//   opacity: 1,
//   duration: 0.3,
// });
// gsap.from(".text_l>h1>span", {
//   scrollTrigger: {
//     trigger: '.text_l>h1>span',//객체기준범위
//     scroller: "#section3",
//     start: "top top",//시작 지점
//     end: "bottom bottom",//끝 지점
//     // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
//     scrub: 1,//부드러운 스크러빙
//     //개발가이드선
//   },
//   y: -100,
//   opacity: 1,
//   duration: 0.3,
// });


// var tl2 = gsap.timeline({
//     repeat:-1,
//     // 무한히 반복하고 싶다면 repeat:-1
//     // repeatDelay:1
//     // repeatDelay : 애니메이션이 끝나고 쉬는시간
//   });
  
//   tl2.from(".text_r>h1 > span", {
//     opacity: 0,
//     y: 100,
//     duration: 0.2,
//     stagger: 0.1
//   });
  
//   tl2.to(".text_r h1 > span", {
//     opacity: 0,
//     y: -100,
//     duration: 0.2,
//     stagger: {
//       each: "0.1",
//       from: "end"
//     }
//   }, "+=2");
//   "+=2" 는 delay를 나타냄

// var tl2 = gsap.timeline({
//   repeat:-0.05,
//   // 무한히 반복하고 싶다면 repeat:-1
//   repeatDelay:0.03
//   // repeatDelay : 애니메이션이 끝나고 쉬는시간
// });

// tl2.from(".text_r>h1 > span", {
//   opacity: 0,
//   y: 100,
//   duration: 0.18,
//   stagger: 0.2
// }
// );

// var tl3 = gsap.timeline({
//     repeat:-1,
//     // 무한히 반복하고 싶다면 repeat:-1
//     // repeatDelay:2
//     // repeatDelay : 애니메이션이 끝나고 쉬는시간
//   });
  
//   tl3.from(".text_r>h2 > span", {
//     opacity: 0,
//     y: 100,
//     duration: 0.2,
//     stagger: 0.1
//   });
  
//   tl3.to(".text_r h2 > span", {
//     opacity: 0,
//     y: -100,
//     duration: 0.2,
//     stagger: {
//       each: "0.1",
//       from: "end"
//     }
//   }, "+=2");
//   "+=2" 는 delay를 나타냄

// var tl3 = gsap.timeline({
//   repeat:-0.05,
//   // 무한히 반복하고 싶다면 repeat:-1
//   repeatDelay:0.01
//   // repeatDelay : 애니메이션이 끝나고 쉬는시간
// });

// tl3.from(".text_r>h2 > span", {
//   opacity: 0,
//   y: 100,
//   duration: 0.08,
//   stagger: 0.08
// }
// );


//section2 - 글자
let clutter = ""; //문자인데 비어있음

//textContent --> 텍스트 콘텐츠에 가져온다.
let page2_h2 = document.querySelector('#section2>.container_desc>h2').textContent.split(""); //split : 잘라서 배열로 넣어주는 것
//console.log(document.querySelector('#page2>h2').textContent.split(""))
page2_h2.forEach((dets) => {
  clutter += `<span>${dets}</span>`;
  document.querySelector('#section2>.container_desc>h2').innerHTML = clutter;
})

gsap.to("#section2>.container_desc>h2>span", {
  scrollTrigger: {
    trigger: "#section2>.container_desc>h2>span",
    start: "top 70%", //= start:"0 100%",
    end: "bottom 30%",
    //scroller: "#wrap",
    scrub: .5, //스크롤값에 반응
  },
  stagger: 1,
//   color: "#ae1d74"
  color: "#7E2553"
})

/* spline */
let spline = document.querySelector(".spline");

gsap.timeline({
  scrollTrigger: {
    trigger: spline,
    start: "top top",
    end: "450% bottom", //빠르게 회전하려면 % 낮추기 600
    scrub: 1,
    // scroller:"#main",
    pin:true,
    // markers:true
    },
})
.to(spline, { xPercent : 0, duration:0.3})
.to(spline, { xPercent : 200, autoAlpha:0})
.to(spline, { PointerEvent:"none"})

//.to(spline, { xPercent : 0,duration:0.2})
//.to(spline, { xPercent : 200, yPercent:100, autoAlpha:0}) //autoAlpha: 처음에 보이다가 안보이게
//.to(spline, { PointerEvent:"none"})




/* count */
// const number = document.getElementById('number');
// const decrease = document.getElementById('decrease');
// const increase = document.getElementById('increase');

// decrease.onclick = ()=>{
//     const current = parseInt(number.innerText, 10)
//     number.innerText = current - 1;
// }
// increase.onclick = ()=>{
//     const current = parseInt(number.innerText, 10)
//     number.innerText = current + 1;
// }


/* bgc */
$(window).scroll(function() {
  
    // selectors
    var $window = $(window),
        $body = $('body'),
        $panel = $('.panel');
    
    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);
   
    $panel.each(function () {
      var $this = $(this);
      
      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
         
        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
      }
    });    
    
  }).scroll();


/* ----------------------------------------------------------------------- */
  gsap.to("#text1",{
    scrollTrigger:{
        trigger:"#text1", // 애니메이션이 시작될 요소
        //scroller:"#main", //스크롤이 발생하는 요소
        pin: true, //스크롤하는 동안 트리거 요소(#page>canvas) 고정시킴
        start: "top top",//애니메이션 시작
        end: "bottom top",//애니메이션 종료 --> bottom이 top이 될 때
    }
})

  gsap.to("#text2",{
    scrollTrigger:{
        trigger:"#text2", // 애니메이션이 시작될 요소
        //scroller:"#main", //스크롤이 발생하는 요소
        pin: true, //스크롤하는 동안 트리거 요소(#page>canvas) 고정시킴
        start: "top bottom",//애니메이션 시작
        end: "bottom bottom",//애니메이션 종료 --> bottom이 top이 될 때
    }
})
  gsap.to("#text3",{
    scrollTrigger:{
        trigger:"#text3", // 애니메이션이 시작될 요소
        //scroller:"#main", //스크롤이 발생하는 요소
        pin: true, //스크롤하는 동안 트리거 요소(#page>canvas) 고정시킴
        start: "top bottom",//애니메이션 시작
        end: "bottom top",//애니메이션 종료 --> bottom이 top이 될 때
    }
})
  gsap.to("#text4",{
    scrollTrigger:{
        trigger:"#text4", // 애니메이션이 시작될 요소
        //scroller:"#main", //스크롤이 발생하는 요소
        pin: true, //스크롤하는 동안 트리거 요소(#page>canvas) 고정시킴
        start: "top bottom",//애니메이션 시작
        end: "bottom top",//애니메이션 종료 --> bottom이 top이 될 때
    }
})

 //---------------------------------------------------
 //section2 - 글자
let clutter2 = ""; //문자인데 비어있음

//textContent --> 텍스트 콘텐츠에 가져온다.
let two_h3 = document.querySelector('.coffee_left>.two>h3').textContent.split(""); //split : 잘라서 배열로 넣어주는 것
//console.log(document.querySelector('#page2>h2').textContent.split(""))
two_h3.forEach((dets) => {
  clutter2 += `<span>${dets}</span>`;
  document.querySelector('.coffee_left>.two>h3').innerHTML = clutter2;
})

gsap.to(".coffee_left>.two>h3>span", {
  scrollTrigger: {
    trigger: ".coffee_left>.two>h3>span",
    start: "top 70%", //= start:"0 100%",
    end: "bottom 30%",
    //scroller: "#wrap",
    scrub: .5, //스크롤값에 반응
  },
  stagger: 1,
  color: "#503C3C"
})


let clutter3 = ""; //문자인데 비어있음

//textContent --> 텍스트 콘텐츠에 가져온다.
let one_p = document.querySelector('.coffee_right>.one>p').textContent.split(""); //split : 잘라서 배열로 넣어주는 것
//console.log(document.querySelector('#page2>h2').textContent.split(""))
one_p.forEach((dets) => {
  clutter3 += `<span>${dets}</span>`;
  document.querySelector('.coffee_right>.one>p').innerHTML = clutter3;
})

gsap.to(".coffee_right>.one>p>span", {
  scrollTrigger: {
    trigger: ".coffee_right>.one>p>span",
    start: "top 56%", //= start:"0 100%",
    end: "bottom 50%",
    //scroller: "#wrap",
    scrub: .5, //스크롤값에 반응
  },
  stagger: 1,
  color: "#503C3C"
})


//--------------------------------------------------------------------------
let tl5 = gsap.timeline({
    scrollTrigger:{
        trigger:".part-2",
        start:"top 10%", //"top 90%"
        end:"120% 20%%", //"180% 90%"
        scrub:true, //1 or 1.2 ok
        pin:true
        //markers:true
    }
})

tl5.to(".strip-r",{marginLeft:"-50%"},"green")
tl5.to(".strip-l",{marginLeft:"0%"},"green")

// let one = document.querySelector(".part-2");

// gsap.timeline({
//   scrollTrigger: {
//     trigger: ".part-2",
//     start: "5% top",
//     end: "bottom bottom", //빠르게 회전하려면 % 낮추기 600
//     scrub: 1,
//     // scroller:"#main",
//     pin:true,
//     // markers:true
//     },
// })

// tl.to(".strip-r",{marginLeft:"-50%"},"green")
// tl.to(".strip-l",{marginLeft:"0%"},"green")

// 

// let part = document.querySelector(".part-2");

// gsap.timeline({
//   scrollTrigger: {
//     trigger: part,
//     start: "top top",
//     end: "bottom bottom", //빠르게 회전하려면 % 낮추기 600
//     scrub: 1,
//     // scroller:"#main",
//     //pin:true,
//     // markers:true
//     },
// })
// // .to(spline, { xPercent : 0, duration:0.3})
// // .to(spline, { xPercent : 200, autoAlpha:0})
// // .to(spline, { PointerEvent:"none"})

// tl.to(".strip-r",{marginLeft:"-50%"},"green")
// tl.to(".strip-l",{marginLeft:"0%"},"green")


//--------------------------------------------------------------------------------
let tl6=gsap.timeline({
    scrollTrigger:{
      trigger:".animation",
      start:"top 10%", //top 20%
      end:"150% bottom",
      scrub:5,
      //pin:true,
      //markers:true
    }
})

// tl.to(path1,{
//     strokeDashoffset:0
// },"plane")
tl6.to(".beans",{
    offsetDistance: "100%", //80%
    stagger:0.1, //0.022 //0.5
    duration: 5,
},"plane")

/////////////////////////////
//비행기의 방향
window.addEventListener("wheel",myFunction)

let plane=document.querySelector('.beans')
function myFunction(event){
    let y=event.deltaY;
    //console.log(y)

    if(y>0){
        plane.style.transform=`rotate(0deg)`;
    }else{
        plane.style.transform=`rotate(180deg)`;
    }

}

//---------------------------------------------------------



  //-----------------------------------------------------
// const horSection=gsap.utils.toArray('.port_desc .port'); // 모든 요소들을 horSection이라는 변수에 배열로 저장한다.
// //console.log(horSection)

// const horiz=gsap.to(horSection,{
//   //x: (- 94 * (horSection.length - 1))+"%", //horSection.length >> 20개를 보여준다. 1을 빼는 이유는 마지막거를 보여주기위해 //🍑
//   xPercent: - 94 * (horSection.length - 1), //위 코드와 똑같음
//   scrollTrigger:{
//     trigger:'.port_desc',
//     start:'top 10%',
//     end:"+=1000", // += 는 애니메이션이 시작되는 시점으로부터 5000px 떨어진 곳에 도착하면 애니가 끝난다. //🍑
//     //markers: true,
//     scrub:1, //스크롤반응
//     pin:true //화면고정
//   }
// })

//--------------------

/* spline */
// let spline6 = document.querySelector(".text_circle_1");

// gsap.timeline({
//   scrollTrigger: {
//     trigger: spline6,
//     start: "-30% top",
//     end: "bottom bottom", //빠르게 회전하려면 % 낮추기 600
//     scrub: 5,
//     // scroller:"#main",
//     pin:true,
//     // markers:true
//     },
// })
// .from(spline6, { xPercent : -130, duration:0.5})
// /* .to(spline6, { xPercent : 200, autoAlpha:0}) */
// /* .to(spline6, { PointerEvent:"none"}) */


//----------------------------------------------------
 gsap.registerPlugin(ScrollTrigger);



let slider = document.querySelector('.slider');
let slideWrapper = document.querySelector('.slider-wrapper');
let slides = document.querySelectorAll('.slide9');

function updateScaleAnPosition(){
    slides.forEach((slide)=>{
        let rect= slide.getBoundingClientRect();
        let centerPosition=(rect.left + rect.right) / 2;
        
        let distanceFromCenter=centerPosition;
        let scale;
        if(distanceFromCenter >0){
            scale=Math.min(1.75, 1 + distanceFromCenter / window.innerWidth)
        }else{
            scale=Math.min(0.5, 1 - Math.abs(distanceFromCenter) / window.innerWidth)
        }
        gsap.set(slide,{scale:scale})

    })
}
updateScaleAnPosition();

let horiz = gsap.to(slides,{
    xPercent:-97 * (slides.length - 1),
    scrollTrigger:{
        trigger:'.page',
        start:'top top',
        end:"+=3000",
        scrub:1,
        pin:true,
        onUpdate:()=>{updateScaleAnPosition()}

    }
})
//---------------------------------------------------------------------

window.onscroll = function () {
    scrollRotate("mr");
    scrollRotate("mr2");
    scrollRotate("donut1");
    scrollRotate("donut2");
    scrollRotate("donut3");
    scrollRotate("donut4");
    scrollRotate("donut5");
    scrollRotate("donut6");
    scrollRotate("donut7");
    scrollRotate("donut8");
    //scrollRotate("txt");
    scrollRotate("txt2");
    scrollRotate("txt3");
    scrollRotate("txt5");
};

function scrollRotate(elementId) {
    let image = document.getElementById(elementId);
    image.style.transform = "rotate(" + window.pageYOffset/7 + "deg)";
    
}

//-----------------------
// coffee desc
// 글씨 쪼개기 (라이브러리 사용하지않고)
// console.log(document.querySelectorAll(".two"))
// document.querySelectorAll('.two>h3').forEach((des)=>{
//     let splitText = des.innerHTML;
//     //console.log(splitText)
//     let splitWrap=splitText.split("").join("</span><span>"); //split(""):""안에 띄어쓰기X
//     splitWrap = "<span>" + splitWrap + "</span>";
//     //console.log(splitWrap)
//     des.innerHTML=splitWrap;
// })


// var tl = gsap.timeline({
//     repeat:-0.05,
//     // 무한히 반복하고 싶다면 repeat:-1
//     repeatDelay:0.01
//     // repeatDelay : 애니메이션이 끝나고 쉬는시간
//   });
  
//   tl.from(".two h3 > span", {
//     opacity: 0,
//     y: 100,
//     duration: 0.08,
//     stagger: 0.08
//   }
//   );



gsap.to(".pink",{
    scrollTrigger:{
        trigger:".pink", // 애니메이션이 시작될 요소
        //scroller:"#main", //스크롤이 발생하는 요소
        pin: true, //스크롤하는 동안 트리거 요소(#page>canvas) 고정시킴
        start: "top top",//애니메이션 시작
        end: "bottom -20%",//애니메이션 종료 --> bottom이 top이 될 때
    }
})




