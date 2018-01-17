var main = function() {

  var MainH= $(".h"),
  MainA= $(".a"),
  MainP= $(".p"),
  MainY= $(".y"),
  MainC= $(".c"),
  MainK= $(".k"),
  MainE= $(".e"),
  MainR= $(".r"),
  MainArr=[MainH,MainA,MainP,MainY,MainC,MainK,MainE,MainR];
  mainHeader=$(".main-header"),
  tlMain= new TimelineMax(),
  i=0;

  TweenMax.from(MainA, 1, {
    onUpdate:onUpdate,
    onComplete:onComplete
  });
  tlMain
  .from(mainHeader,1.4,{x:"90px"});


  function onUpdate(){
    i++;
    if(i>8){
      for(var j=0; j<MainArr.length;j++){
        MainArr[j].text(String.fromCharCode((Math.random() * 25) + 96)); 
      }
      i=0;
    }
  }
  function onComplete(){
   MainH.text('H');
   MainA.text('A');
   MainP.text('P');
   MainY.text('Y');
   MainC.text('C');
   MainK.text('K');
   MainE.text('E');
   MainR.text('R');
 }  

 };


 $(document).ready(main);
