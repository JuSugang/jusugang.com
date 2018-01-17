var main = function() {
    $('#fullpage').fullpage();

    /*---------------------greensock--------------------------*/
    //변수선언
    //타임라인변수
    var tlCircle=new TimelineMax({repeat: -1,paused:true}),
    tlWave=new TimelineMax({repeat:-1,paused:true}),
    tlSetting=new TimelineMax({paused:true}),
    motiTextTl = new TimelineMax({repeat:1}),
    soluTextTl = new TimelineMax({repeat:1}),
    jusuTextTl = new TimelineMax({repeat:1}),
    contTextTl = new TimelineMax({repeat:1}),
    tlIntr=new TimelineMax(),
    tlMoti=new TimelineMax(), 
    tlSolu=new TimelineMax(), 
    soluMVtl=new TimelineMax(), 
    tlJusu=new TimelineMax(),
    tlCont=new TimelineMax(),
    tlShowMask=new TimelineMax({paused:true}),
    tlShowPad=new TimelineMax({paused:true}),
    tlShowInternet=new TimelineMax({paused:true}),
    //글로벌 메뉴 변수
    bgBerryblue=$("#bgBerryblue"),
    bgMotivation=$("#bgMotivation"),
    bgSolution=$("#bgSolution"),
    logo=$(".logo"),
    menu=$(".hamburger-menu"),
    copyright=$(".copyright"),
    meter=$(".meter"),
    sidebar=$(".sidebar-item"),
    line=$(".sidebar-line"),
    i=0,
    //인트로화면 변수
    circle = $('.circle'),
    h1= $(".loading"),
    upperText =$(".upper-text"),
    lowerText=$(".lower-text"),
    introTitle=$(".intro-title"),
    introSub=$(".intro-sub"),
    typeDivider=$(".type-divider"),
    //동기화면 변수
    body=$("body"),
    logoType=$(".logo-type"),
    headline=$(".headline"),
    motivePara=$(".motive-para"),
    button=$(".btn-prim"),
    //해결과제화면 변수
    wave=$(".wave"),
    notebook=$("#notebook"),
    phone=$("#phone"),
    watch=$("#watch"),
    server=$("#server"),
    j=0,
    //수강화면 변수
    pad=$("#pad"),
    internet=$("#internet"),
    myprofile=$("#myprofile"),
    idid=$("#idid"),
    illdo=$("#illdo"),
    h1Profile=$("#h1Profile"),
    pProfile=$("#pProfile"),
    headlineGray=$(".headline-gray"),
    h1Now=$("#h1Now"),
    pNow=$("#pNow"),
    h1Todo=$("#h1Todo"),
    pTodo=$("#pTodo"),
    mask=$("#mask"),
    //컨텍트화면 번수
    mail=$(".mail"),
    mailContent=$(".mail-content");


    TweenMax.from(h1, 1.5, {
        onUpdate:onUpdate,
        onComplete:onComplete
    });
    function onUpdate(){
        if(i<100) h1.text(i+=4);    
    }
    function onComplete(){
        tlCircle.play();
        tlSetting.play();
        tlWave.play();       
    }
    function changeText(i=$(".focus").text()){
        h1.text(i);   
    }
    tlCircle
    .set(circle,{opacity:0.5})
    .staggerFromTo(circle, 1.5,
        {scale:1.05},
        {scale:1.13, ease:Elastic.easeOut.config(1, 0.3)},
        0.3
        )
    .staggerFromTo(circle, 1.5,
        {scale:1.13},
        {scale:1.05, ease:Elastic.easeOut.config(1, 0.3)},
        0.3,"-=1.2"
        );

    tlSetting       //초기세팅
    .to(mask,0,{opacity:0})
    .to(upperText,0.3,{x:"40px",opacity:0})
    .to(sidebar,0.3,{y:"0px"},"-=0.3")
    .to(lowerText,0.3,{x:"-40px",opacity:0},"-=0.3")
    .set(h1,{onComplete:changeText})
    .to(upperText,0.3,{x:"0px",opacity:1})
    .to(lowerText,0.3,{x:"0px",opacity:1},"-=0.3")
    .set(line[0],{className:"+=gradient"})
    .to(sidebar[0],0.3,{scaleX:2},"-=0.3")
    .from(logo,0.3,{y:"-20px",opacity:0},"-=0.3")
    .from(menu,0.3,{y:"-20px",opacity:0})
    .from([copyright,meter,introTitle],1,{y:"20px",opacity:0})
    .from(typeDivider,0.8,{y:"20px",opacity:0},"-=0.8")
    .from(introSub,0.6,{y:"20px",opacity:0},"-=0.6")
    .staggerFrom(sidebar,0.2,{x:"-20px",opacity:0},0.15,"-=1");

    
    motiTextTl  //motivation으로 바꾸는 애니메이션
    .to(upperText,0.3,{x:"40px",opacity:0})
    .to(lowerText,0.3,{x:"-40px",opacity:0},"-=0.3")
    .to(h1,0,{onComplete:changeText})
    .yoyo(true);
    
    soluTextTl  //solution으로 바꾸는 애니메이션
    .to(upperText,0.3,{x:"40px",opacity:0})
    .to(lowerText,0.3,{x:"-40px",opacity:0},"-=0.3")
    .to(h1,0,{onComplete:changeText})
    .yoyo(true);

    jusuTextTl  //jusugang으로 바꾸는 애니메이션
    .to(upperText,0.3,{x:"40px",opacity:0})
    .to(lowerText,0.3,{x:"-40px",opacity:0},"-=0.3")
    .to(h1,0,{onComplete:changeText})
    .yoyo(true);

    contTextTl  //contactus으로 바꾸는 애니메이션
    .to(upperText,0.3,{x:"40px",opacity:0})
    .to(lowerText,0.3,{x:"-40px",opacity:0},"-=0.3")
    .to(h1,0,{onComplete:changeText})
    .yoyo(true);


    tlMoti      //moti화면 가면서 생기는 애니메이션
    .to(logoType,0.3,{x:"-20px",opacity:0})
    .to(typeDivider,0.3,{opacity:0},"-=0.3")
    .to(circle,0.3,{opacity:0},"-=0.3")
    .to(introSub,0.3,{opacity:0},"-=0.3")
    .to(introTitle,0.3,{opacity:0},"-=0.3")
    .to(sidebar,0.3,{y:"-16px"},"-=0.3")
    .to(sidebar[0],0.3,{scaleX:1},"-=0.3")
    .to(sidebar[1],0.3,{scaleX:2},"-=0.3")
    .to(line[0],0.3,{className:"-=gradient"},"-=0.3")
    .to(line[1],0.3,{className:"+=gradient"},"-=0.3")
    .to(h1,0.3,{css:{color:"#212121"}},"-=0.3")
    .to(body,0.3,{css:{background:"#000000"}},"-=0.3")
    .to(lowerText,0.3,{className:"+=blackLine"},"-=0.3");


    tlSolu
    .to(body,0.3,{css:{background:"#ffffff"}})
    .to(h1,0.3,{css:{color:"#f8f8f8"}},"-=0.3")
    .to(logoType,0.3,{x:"0px",opacity:1},"-=0.3")
    .to(headline,0.3,{opacity:0},"-=0.3")
    .to(motivePara,0.3,{opacity:0},"-=0.3")
    .to(lowerText,0.3,{className:"-=blackLine"},"-=0.3")
    .to(sidebar,0.3,{y:"-32px"},"-=0.3")
    .to(sidebar[1],0.3,{scaleX:1},"-=0.3")
    .to(sidebar[2],0.3,{scaleX:2},"-=0.3")
    .to(line[1],0.3,{className:"-=gradient"},"-=0.3")
    .to(line[2],0.3,{className:"+=gradient"},"-=0.3");
    
    soluMVtl
    .from(phone,0.6,{x:"-70px"})
    .from(phone,0.2,{opacity:0},"-=0.6")
    .from(watch,0.6,{x:"+70px"},"-=0.5")
    .from(watch,0.2,{opacity:0},"-=0.6")
    .from(notebook,0.6,{x:"-70px"},"-=0.5")
    .from(notebook,0.2,{opacity:0},"-=0.6")
    .from(server,0.6,{x:"+70px"},"-=0.4")
    .from(server,0.2,{opacity:0},"-=0.6");

    tlWave
    .staggerFromTo(wave, 1.5,
        {scale:0,opacity:1},
        {scale:1,opacity:0},
        0.1
        );
    
    tlJusu
    .to(sidebar,0.3,{y:"-48px"})
    .to(sidebar[2],0.3,{scaleX:1},"-=0.3")
    .to(sidebar[3],0.3,{scaleX:2},"-=0.3")
    .to(line[2],0.3,{className:"-=gradient"},"-=0.3")
    .to(line[3],0.3,{className:"+=gradient"},"-=0.3")
    .from(h1Profile,0.3,{opacity:0,y:"40px"},"-=0.3")
    .from(pProfile,0.3,{opacity:0,y:"40px"},"-=0.3")
    .to(mask,0.3,{opacity:1,y:"-40px"},"-=0.3")
    .from(headlineGray,0.3,{opacity:0,y:"40px"},"-=0.3");
    
    tlCont
    .to(sidebar,0.3,{y:"-64px"})
    .to(sidebar[3],0.3,{scaleX:1},"-=0.3")
    .to(sidebar[4],0.3,{scaleX:2},"-=0.3")
    .to(line[3],0.3,{className:"-=gradient"},"-=0.3")
    .to(line[4],0.3,{className:"+=gradient"},"-=0.3")
    .from(mailContent,0.3,{opacity:0,y:"40px"},"-=0.3")
    .from(mail,0.3,{opacity:0,y:"40px"},"-=0.3");

    tlShowMask
    .to(pad,0,{opacity:0})
    .to(myprofile,0,{className:"+=selected"})
    .to(idid,0,{className:"-=selected"})
    .to(illdo,0,{className:"-=selected"})
    .to(h1Profile,0,{className:"-=hide"})
    .to(pProfile,0,{className:"-=hide"})
    .to(h1Now,0,{className:"+=hide"})
    .to(pNow,0,{className:"+=hide"})
    .to(h1Todo,0,{className:"+=hide"})
    .to(pTodo,0,{className:"+=hide"})
    .to(internet,0,{opacity:0})
    .from(mask,0.7,{opacity:0,y:"30px"});
    
    tlShowPad
    .to(internet,0,{opacity:0})
    .to(myprofile,0,{className:"-=selected"})
    .to(idid,0,{className:"+=selected"})
    .to(illdo,0,{className:"-=selected"})
    .to(h1Profile,0,{className:"+=hide"})
    .to(pProfile,0,{className:"+=hide"})
    .to(h1Now,0,{className:"-=hide"})
    .to(pNow,0,{className:"-=hide"})
    .to(h1Todo,0,{className:"+=hide"})
    .to(pTodo,0,{className:"+=hide"})
    .to(mask,0,{opacity:0})
    .from(pad,0.7,{opacity:0,y:"30px"});
    
    tlShowInternet
    .to(pad,0,{opacity:0})
    .to(myprofile,0,{className:"-=selected"})
    .to(idid,0,{className:"-=selected"})
    .to(illdo,0,{className:"+=selected"}) 
    .to(h1Profile,0,{className:"+=hide"})
    .to(pProfile,0,{className:"+=hide"})
    .to(h1Now,0,{className:"+=hide"})
    .to(pNow,0,{className:"+=hide"})
    .to(h1Todo,0,{className:"-=hide"})
    .to(pTodo,0,{className:"-=hide"})
    .to(mask,0,{opacity:0})
    .from(internet,0.7,{opacity:0,y:"30px"});
    /*---------------------scrollmagic-----------------------*/

    var controller = new ScrollMagic.Controller();
    
    // 인덱스 화면 스크롤 애니메이션
    var introScene1 = new ScrollMagic.Scene({   //bgText글자 Berryblue 설정
        triggerElement: '#intro',
        triggerHook:0.5,
        duration:'100%'

    })
    .setClassToggle('#bgBerryblue', 'focus') 
    .addTo(controller);

    var introScene2 = new ScrollMagic.Scene({  //기타 동기화면 애니메이션
        triggerElement: '#intro',
        triggerHook:0.5
    })
    .setTween(tlIntr)
    .addTo(controller);
    // 동기 화면 스크롤 애니메이션 
    var motivationScene1 = new ScrollMagic.Scene({  //bgText글자 Motivation설정 
        triggerElement: '#motivation',
        triggerHook:0.5,
        duration:'100%'
    })
    .setClassToggle('#bgMotivation', 'focus') 
    .addTo(controller);
    
    var motivationScene2 = new ScrollMagic.Scene({  //bgText 애니메이션 설정
        triggerElement: '#motivation',
        triggerHook: 0.5
    })
    .setTween(motiTextTl)
    .addTo(controller);

    var motivationScene4 = new ScrollMagic.Scene({  //기타 동기화면 애니메이션
        triggerElement: '#motivation',
        triggerHook:0.5
    })
    .setTween(tlMoti)
    .addTo(controller);

    // 해결과제 화면 스크롤 애니메이션
    var solutionScene1 = new ScrollMagic.Scene({  //bgText글자 Solution설정 
        triggerElement: '#solution',
        triggerHook:0.5,
        duration:'100%'
    })
    .setClassToggle('#bgSolution', 'focus') 
    .addTo(controller);

    var solutionScene2 = new ScrollMagic.Scene({  //bgText 애니메이션 설정
        triggerElement: '#solution',
        triggerHook: 0.5
    })
    .setTween(soluTextTl)
    .addTo(controller);

    var solutionScene3 = new ScrollMagic.Scene({  //기타 해결화면 애니메이션
        triggerElement: '#solution',
        triggerHook: 0.5
    })
    .setTween(tlSolu)
      .addTo(controller);

    var solutionScene3 = new ScrollMagic.Scene({  //기타 해결화면 애니메이션
        triggerElement: '#solution',
        triggerHook: 0.5
    })
    .setTween(soluMVtl)
    .addTo(controller);
    
    // 주수강 화면 스크롤 애니메이션
    var jusugangScene1 = new ScrollMagic.Scene({  //bgText글자 Jusugang설정
        triggerElement: '#jusugang',
        triggerHook: 0.5,
        duration:'100%'
    })
    .setClassToggle('#bgJusugang', 'focus')
    .addTo(controller);

    var jusugangScene2 = new ScrollMagic.Scene({  //bgText 애니메이션 설정
        triggerElement: '#jusugang',
        triggerHook: 0.5
    })
    .setTween(jusuTextTl)
    .addTo(controller);

    var jusugangScene3 = new ScrollMagic.Scene({  //기타 주수강 애니메이션
        triggerElement: '#jusugang',
        triggerHook: 0.5
    })
    .setTween(tlJusu)
    .addTo(controller);

    // 콘텍트 화면 스크롤 애니메이션
    var jusugangScene1 = new ScrollMagic.Scene({  //bgText글자 contactus설정
        triggerElement: '#contactus',
        triggerHook: 0.5,
        duration:'100%'
    })
    .setClassToggle('#bgContactus', 'focus')
    .addTo(controller);

    var jusugangScene2 = new ScrollMagic.Scene({  //bgText 애니메이션 설정
        triggerElement: '#contactus',
        triggerHook: 0.5
    })
    .setTween(contTextTl)
    .addTo(controller);

    var jusugangScene3 = new ScrollMagic.Scene({  //기타 콘텍트 애니메이션
        triggerElement: '#contactus',
        triggerHook: 0.5
    })
    .setTween(tlCont)
    .addTo(controller);


    
    /*---------------------jquery-----------------------*/
    show(j);
    $('.case-nav-left').click(function() {
        j--;
        if(j<0){
            j=2;
        }
        show(j);
    });
    $('.case-nav-right').click(function() {
        j++;
        j=j%3;
        show(j);   
    });
    function show(i){
        switch(i){
            case 0 : tlShowMask.restart();tlShowPad.pause();tlShowInternet.pause();break;
            case 1 : tlShowPad.restart();tlShowMask.pause();tlShowInternet.pause();break;
            case 2 : tlShowInternet.restart();tlShowMask.pause();tlShowPad.pause();break;
        }
    }
};


$(document).ready(main);
