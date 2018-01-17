var main = function() {
  $('#fullpage').fullpage({
    continuousVertical: true,
    anchors:['0', '1', '2', '3', '4'],
    navigation:true,
    navigationPosition: 'left',
    showActiveTooltip: true
  });
  var tlLoading= new TimelineMax({paused:true}),
  tlRotating=new TimelineMax({repeat:-1,paused:true}),
  tlintro=new TimelineMax(),
  tlsugang=new TimelineMax(),
  tlworkshop=new TimelineMax(),
  // 로딩화면
  loading=$("#loading"),
  loadingCover=$("#loadingCover"),
  loadingCount=$("#loadingCount"),
  guitar=$(".guitar"),
  meter=$(".meter"),
  copyright=$(".copyright"),
  // 메인화면
  triangle=$("#triangle"),
  mainBG=$("#mainBG"),
  mainLine=$("#mainLine"),
  mainTitle =$("#mainTitle"),
  mainSub=$("#mainSub"),
  mainBorder=$("#mainBorder"),
  mainSugang=$("#mainSugang"),
  // 인트로화면
  upperTitle=$("#upperTitle"),
  lowerTitle=$("#lowerTitle"),
  introLine=$("#introLine"),
  upperBox=$("#upperBox"),
  lowerBox=$("#lowerBox"),
  // 수강화면
  wordCloud=$(".wordCloud")
  works=$("#works");

  /*---------------------greensock--------------------------*/
  TweenMax.to(loadingCover,2,{
    x:"450px",
    onComplete:onComplete,
    ease:Power1.easeIn
  })

  function onComplete(){
    tlLoading.play();
    tlRotating.play();
  }
  function changeHello(){
    upperTitle.text("안녕하세요.");
    lowerTitle.text("안녕하세요.");
  }
  function changeMe(){
    upperTitle.text("주수강입니다.");
    lowerTitle.text("주수강입니다.");
  }
  tlLoading
  .to(loadingCover,0.7,{opacity:0})
  .to(loadingCount,0.5,{opacity:0,x:"30"})
  .to(loading,0.5,{opacity:0,x:"-30"},"-=0.5")
  .to(guitar,0,{opacity:1},"-=0.5")
  .from(mainBG,0.5,{opacity:0})
  .from(mainLine,0.5,{opacity:0,scaleX:0},"-=0.5")
  .from(mainTitle,0.5,{opacity:0,y:"10"},"-=0.3")
  .from(mainSub,0.5,{opacity:0,y:"10"},"-=0.3")
  .from(mainBorder,0.5,{opacity:0, rotation:"-10"},"-=0.3")
  .from(mainSugang,0.5,{opacity:0,y:"10"},"-=0.3")
  .from(triangle,0.5,{opacity:0,y:"-10"},"-=0.5")
  .from(meter,0.5,{opacity:0,y:"20"},"-=0.5")
  .from(copyright,0.5,{opacity:0,y:"20"},"-=0.3");

  tlRotating
  .to(triangle,0.5,{css:{scaleX:0},ease: Power1.easeInOut})
  .to(triangle,0.5,{css:{scaleX:1},ease: Power1.easeInOut});

  tlintro
  .to(mainBorder,0.5,{rotation:"45"})
  .to(mainBorder,0.4,{opacity:0})
  .to(triangle,0.4,{opacity:0},"-=0.4")
  .to(mainBG,0.4,{opacity:0},"-=0.4")
  .to(mainLine,0.4,{opacity:0},"-=0.4")
  .to(mainTitle,0.4,{opacity:0},"-=0.4")
  .to(mainSub,0.4,{opacity:0},"-=0.4")
  .to(mainSugang,0.4,{opacity:0,onComplete:changeHello},"-=0.4")
  .from(upperBox,0.8,{opacity:0,x:"0"})
  .from(lowerBox,0.8,{opacity:0,x:"0"},"-=0.8")
  .from(introLine,0.3,{scaleX:0})
  .to(upperBox,0.2,{x:"30",opacity:0})
  .to(lowerBox,0.2,{x:"-30",opacity:0,onComplete:changeMe},"-=0.2")
  .to(upperBox,0,{x:"0",opacity:0},"-=0.2")
  .to(lowerBox,0,{x:"-30",opacity:0})
  .to(upperBox,0.2,{x:"0",opacity:1},"+=0.2")
  .to(lowerBox,0.2,{x:"0",opacity:1},"-=0.2")
  .to(introLine,0.3,{scaleX:0})
  .set(triangle,{scale:0})
  .set(mainBorder,{scale:0})
  .set(mainBG,{scale:0})
  .set(mainLine,{scale:0})
  .set(mainTitle,{scale:0})
  .set(mainSub,{scale:0})
  .set(mainSugang,{scale:0})
  .set(loading,{scale:0})
  .set(loadingCover,{scale:0});


  tlsugang
  .from(wordCloud[0],1,{x:"900",y:"+300",scale:"0.2"})
  .from(wordCloud[1],1,{x:"-700",y:"+300",scale:"0.1"},"-=1")
  .from(wordCloud[2],1,{x:"-600",y:"+300",scale:"0.7"},"-=1")
  .from(wordCloud[3],1,{x:"-500",y:"+300",scale:"0.2"},"-=1")
  .from(wordCloud[4],1,{x:"-400",y:"+300",scale:"0.5"},"-=1")
  .from(wordCloud[5],1,{x:"-300",y:"+300",scale:"0.3"},"-=1")
  .from(wordCloud[6],1,{x:"200",y:"+300",scale:"0.6"},"-=1")
  .from(wordCloud[7],1,{x:"300",y:"+300",scale:"0.4"},"-=1")
  .from(wordCloud[8],1,{x:"400",y:"+300",scale:"0.7"},"-=1")
  .from(wordCloud[9],1,{x:"500",y:"+300",scale:"0.5"},"-=1")
  .from(wordCloud[10],1,{x:"600",y:"+300",scale:"0.8"},"-=1")
  .from(wordCloud[11],1,{x:"700",y:"+300",scale:"0.6"},"-=1")
  .from(wordCloud[12],1,{x:"800",y:"+300",scale:"0.6"},"-=1");
  

  
  /*---------------------scrollmagic-----------------------*/
  var controller = new ScrollMagic.Controller();

  var introScene1 = new ScrollMagic.Scene({   //bgText글자 Berryblue 설정
    triggerElement: '#intro',
    triggerHook:0.2
  })
  .setTween(tlintro)
  .addTo(controller);
  

  var sugangScene1 = new ScrollMagic.Scene({
    triggerElement: '#sugang',
    triggerHook:0.9
  })
  .setTween(tlsugang)
  .addTo(controller);
  
  var workshopScene1 = new ScrollMagic.Scene({ 
    triggerElement: '#workshop',
    triggerHook:0.1
  })
  .setClassToggle('.guitar','blur')
  .addTo(controller);  
  

  /*---------------------기타 function-----------------------*/
  var worknum=2,
  moveValue=0;
  tlworkshop=new TimelineMax(),
  tlworkshopSet= new TimelineMax(),
  workarr=$(".work"),
  workdivarr=$(".perspective"),
  test=$("#test");  

  function rightclickFunc(){
    if(worknum!=4){
      moveValue-=80;
      worknum++;
      tlworkshop
      .to(works,0.3,{x:moveValue})
      .to(workdivarr.eq(worknum),0.3,{y:"-90px"},"-=0.3")
      .to(workdivarr.eq(worknum-1),0.3,{y:"0px"},"-=0.3")     
      .to(workdivarr.eq(worknum),0.3,{x:"105px"},"-=0.3");
      for(var i=0;i<worknum;i++){
        workdivarr.eq(i).zIndex(i+5);
      }
      workdivarr.eq(worknum).zIndex(10);
      for(var i=worknum+1;i<workarr.length;i++){
        workdivarr.eq(i).zIndex(workarr.length+5-i);
      }
      for(var i=worknum-1;i>=0;i--){
        tlworkshop
        .to(workdivarr.eq(i),0.3,{x:"0px"},"-=0.3");
      }
    }

    for(var i = 0 ;i<worknum;i++){  
      workarr.eq(i).removeClass('work-middle');  
      workarr.eq(i).removeClass('work-right');  
      workarr.eq(i).addClass('work-left');  
    }
    workarr.eq(worknum).removeClass('work-left');  
    workarr.eq(worknum).removeClass('work-right');  
    workarr.eq(worknum).addClass('work-middle');  
    for(var i = worknum+1 ;i<workarr.length;i++){

      workarr.eq(i).removeClass('work-left');  
      workarr.eq(i).removeClass('work-middle');  
      workarr.eq(i).addClass('work-right');  
    }
  }
  function leftclickFunc(){
    if(worknum!=0){
      moveValue+=80;
      worknum--;
      tlworkshop
      .to(works,0.3,{x:moveValue})
      .to(workdivarr.eq(worknum),0.3,{y:"-90px"},"-=0.3")
      .to(workdivarr.eq(worknum+1),0.3,{y:"0px"},"-=0.3")
      .to(workdivarr.eq(worknum),0.3,{x:"105px"},"-=0.3");
      for(var i=0;i<worknum;i++){
        workdivarr.eq(i).zIndex(i+5);
      }
      workdivarr.eq(worknum).zIndex(10);
      for(var i=worknum+1;i<workarr.length;i++){
        tlworkshop
        .to(workdivarr.eq(i),0.3,{x:"535px"},"-=0.3");
        workdivarr.eq(i).zIndex(workarr.length+5-i);
      }
    }

    for(var i = 0 ;i<worknum;i++){  
      workarr.eq(i).removeClass('work-middle');  
      workarr.eq(i).removeClass('work-right');  
      workarr.eq(i).addClass('work-left');  
    }
    workarr.eq(worknum).removeClass('work-left');  
    workarr.eq(worknum).removeClass('work-right');  
    workarr.eq(worknum).addClass('work-middle');  
    for(var i = worknum+1 ;i<workarr.length;i++){

      workarr.eq(i).removeClass('work-left');  
      workarr.eq(i).removeClass('work-middle');  
      workarr.eq(i).addClass('work-right');  
    }
  }

  rightclickFunc();
  leftclickFunc();
  $("#right").click(rightclickFunc);
  $("#left").click(leftclickFunc);
}


$(document).ready(main);
