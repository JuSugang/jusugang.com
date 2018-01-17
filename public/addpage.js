
var main= function(contents,count){
  // $('#inner').html('');
  var curUser=$('#userInfo').text();
  var page=3;
  var i;
  var nullcnt=0;
  $('#inner').append('<div class="hard p1"></div>');
  $('#inner').append('<div class="hard p2"></div>');
  for(i=0;i<count;i++){
    if(contents[i]==undefined){
      nullcnt+=1;
      continue;
    }
    
    var string='';
    string+='<div class="softpage p'+(3+i-nullcnt)+'">';
      string+='<p id="pageHeader">"'+contents[i]['title'];
      string+='"</p>';
      if(contents[i]['email']==curUser){
        string+='<p id="pageEdit">수정</p>';
        string+='<p id="pageRemove">삭제</p>';
      }
      string+='<div id="pageLine"/>';
      string+='<p id="pageName">글쓴이: '+contents[i]['email'];
      string+='</p>';
      string+='<p id="pageBody">'+contents[i]['content'];
      string+='</p>';
    string+='<div>';
    $('#inner').append(string);
  }
  if((count-nullcnt)%2==1){
    $('#inner').append('<div class="softpage p'+(i+3-nullcnt)+'"></div>');
    i+=1;
  }
  $('#inner').append('<div class="hard p'+(i+3-nullcnt)+' p29"></div>');
  $('#inner').append('<div class="hard p'+(i+4-nullcnt)+' p30"></div>');


  yepnope({
    test: Modernizr.csstransforms,
    yep: ['../../lib/turn.min.js', 'css/jquery.ui.css'],
    nope: ['../../lib/turn.html4.min.js', 'css/jquery.ui.html4.css'],
    both: ['css/docs.css', 'js/docs.js'],
    complete: loadApp
  });
}
// $(document).ready(main);