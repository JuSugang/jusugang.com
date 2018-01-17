<?php
// Start the session
session_start();
?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>주수강</title>
	<!-- 다양한 기기별 뷰포트 설정 -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- 아이콘 설정 -->
	<!-- <link rel="shortcut icon" href="/assets/icons/favicon.ico"> -->
	<!-- 모바일 주소창 색 바꾸기  -->
	<meta name="theme-color" content="#ffffff">
	<!-- 스타일시트 -->

	<!-- JQuery Plugin -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js
	"></script>
	<!-- Turn.js Plugin -->
	<script type="text/javascript" src="extras/jquery.min.1.7.js"></script>
	<script type="text/javascript" src="extras/jquery-ui-1.8.20.custom.min.js"></script>
	<script type="text/javascript" src="extras/jquery.mousewheel.min.js"></script>
	<script type="text/javascript" src="extras/modernizr.2.5.3.min.js"></script>
	<script type="text/javascript" src="lib/hash.js"></script>

	<!-- ScrollMagic GreenSock Plugin -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TweenMax.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js"></script>

	<!-- jQueryFullPage Plugin -->
	<link rel="stylesheet" type="text/css" href="jquery.fullPage.css" />
	<script type="text/javascript" src="jquery.fullPage.js"></script>

	
	<!-- my css and js -->
	<link rel="stylesheet" href="gold.css">
	<script src="gold.js"></script>
</head>
<body>
	<img src="../assets/loading.png" alt="loading" id="loading">
	<div id="loadingCover"></div>
	<!-- 왼쪽 아래 주수강 마크 -->
	<div class="meter">주수강</div>
	<!-- 오른쪽 아래 카피라이트 -->
	<div class="copyright">— &copy; 2017 by JUSUGANG. All rights reserved.<br> 
		<?php
		echo "<div id='loginform'>";
		if(!isset($_SESSION['master'])) {
			echo "<input size='8' type='text' id='myid' class='logininput'>";
			echo "<input size='8' type='password' id='mypw' class='logininput'>";
			echo "<span id='login' class='loginbutton'>로그인</span>";
			echo "<span id='status' style='display:none'>false</span>";
		}else {
			echo "관리자모드&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
			echo "<span id='logout' class='loginbutton'>로그아웃</span>";
			echo "<span id='status' style='display:none'>true</span>";
		}
		echo "</div>";
		?>
	</div>
	<div class="guitar"></div>

	<div class="main">
		<img id="mainBG" class="mainText" src="../assets/mainbg.svg" alt="mainBG">
		<img id="mainLine" class="mainText" src="../assets/mainline.svg" alt="mainLine">
		<img id="mainTitle" class="mainText" src="../assets/maintitle.svg" alt="mainTitle">
		<img id="mainSub" class="mainText" src="../assets/mainsub.svg" alt="mainSub">
		<img id="mainBorder" class="mainText" src="../assets/mainborder.svg" alt="mainBorder">
		<img id="mainSugang" class="mainText" src="../assets/mainsugang.svg" alt="mainSugang">
		<img id="triangle" class="mainText" src="../assets/triangle.svg" alt="triangle">
	</div>
	<div class="content-container" id="fullpage">
		<div class="section" data-anchor="0">
			<div id="main">
				
			</div>
		</div>
		<div class="section" data-anchor="1">
			<div id="intro">
				<div id="upperBox">
					<h1 id="upperTitle">안녕하세요.</h1>	
				</div>
				<div id="lowerBox">
					<h1 id="lowerTitle">안녕하세요.</h1>
				</div>
				<img src="../assets/introLine.svg" alt="introLine" id="introLine">
			</div>
		</div>
		<div class="section" data-anchor="2">
			<div id="sugang">
				<img class="wordCloud" src="../assets/face00.svg" alt="wordCloud">
				<img class="wordCloud" src="../assets/face01.svg" alt="wordCloud">
				<img class="wordCloud" src="../assets/face02.svg" alt="wordCloud">
				<img class="wordCloud" src="../assets/face03.svg" alt="wordCloud">
				<img class="wordCloud" src="../assets/face04.svg" alt="wordCloud">
				<img class="wordCloud" src="../assets/face05.svg" alt="wordCloud">
				<img class="wordCloud" src="../assets/face06.svg" alt="wordCloud">
				<img class="wordCloud" src="../assets/face07.svg" alt="wordCloud">
				<img class="wordCloud" src="../assets/face08.svg" alt="wordCloud">
				<img class="wordCloud" src="../assets/face09.svg" alt="wordCloud">
				<img class="wordCloud" src="../assets/face10.svg" alt="wordCloud">
				<img class="wordCloud" src="../assets/face11.svg" alt="wordCloud">
				<img class="wordCloud" src="../assets/face12.svg" alt="wordCloud">
				<h1 id="sugangHead"><img src="../assets/like.png" alt="like" id="headimg"></h1>
			</div>
		</div>
		<div class="section" data-anchor="3">
			<div id="workshop">
				
				<div id="works">
					<div class="perspective" id="frame0">
						<a href="/school/index.php" target="_blank"><img src="../assets/workshop0.png" alt="work" class="work" id="album0">
						</a>
					</div>
					<div class="perspective" id="frame1">
						<a href="/hacker/index.php" target="_blank"><img src="../assets/workshop1.png" alt="work" class="work" id="album1">
						</a>
					</div>
					<div class="perspective" id="frame2"> 
						<a href="/berryblue/index.php" target="_blank"><img src="../assets/workshop2.png" alt="work" class="work" id="album2"></a>
					</div>
					<div class="perspective" id="frame3">
						<a href="http://www.pupaider.com" target="_blank"><img src="../assets/workshop3.png" alt="work" class="work" id="album3"></a>
					</div>
					<div class="perspective" id="frame4">
						<a href="#" target="_blank"><img src="../assets/workshop4.png" alt="work" class="work" id="album4">
						</a>
					</div>
				</div>
				<div class="workshopHeader">
					<div class="scroll-button" ><img src="../assets/arrow-left.svg" id="left" alt="left"></div>
					<div class="scroll-button" ><img src="../assets/arrow-right.svg" id="right" alt="right"></div>
				</div>
				<div class="workshop-title"><img src="../assets/workshopTitle.png" alt="title"></div>
			</div>
		</div>
		<div class="section" data-anchor="4">
			<div id="canvas">
				<div class="sample-docs">
					<?php
					ini_set('display_errors', "on");

					$host = "localhost";
					$db_name = "gold";
					$username = "root";
					$password = "awefgyuk1";

					try{
						$conn = new PDO("mysql:host=$host; dbname={$db_name}",$username,$password);
					}
					catch(PDOException $exception){
						echo "Connection error: ".$exception->getMessage();
					}

					$query = $conn->prepare("SELECT * from diary");
					$query->execute();
					$result = $query->fetchAll(PDO::FETCH_ASSOC);
					$count=count($result);
					$pageNum=ceil(($count+1)/10);
					$numInPage=10;

					
					$tableRows="";
					$tableRows.='<div class="hard p1"></div>';
					$tableRows.='<div class="hard p2">';

					$tableRows.='</div>';

					$page=3;
					for($j=0; $j<$pageNum ;$j++){
						$page=$j+3;
						$tableRows.="<div class='p".$page."'>";
						$tableRows.="<table>";
						$tableRows.="<tbody>";
						if($count<10){
							$numInPage=$count;
						}
						else{
							$count-=10;
						}
						for($i=0 ; $i < $numInPage ; $i++){
							$tableRows.="<tr>";
							$tableRows.="<td><input size='7' type='text' value='".$result[$i+10*$j]['date']."' id='date".$result[$i+10*$j]['id']."'></td>";
							$tableRows.="<td><input size='40' type='text' value='".$result[$i+10*$j]['content']."' id='content".$result[$i+10*$j]['id']."'></td>";
							$tableRows.="<td style='display:none'>".$result[$i+10*$j]['id']."</td>";
							if(isset($_SESSION['master'])){
								$tableRows.="<td><button class='edit' ></td>";
								$tableRows.="<td><button class='delete' ></td>";
							}
							$tableRows.="</tr>";
						}
						if($numInPage<10 && isset($_SESSION['master'])){
							$tableRows.="<tr>";
							$tableRows.='<td><input type="text" size="7" id="newDate" ></td>';	
							$tableRows.='<td><input type="text" size="40" id="newContent"></td>';
							$tableRows.='<td><button id="create"></button></td>';
							$tableRows.='</tr><tr><td><br></td></tr>';
						}
						$tableRows.="</tbody>";
						$tableRows.="</table>";
						$tableRows.="</div>";
					}
					if($page%2==1){
						$page+=1;
						$tableRows.='<div class="p'.$page.'"></div>';
					}
					$page+=1;
					$tableRows.='<div class="hard p'.$page.' end-1">';
					$tableRows.='</div>';
					$page+=1;
					$tableRows.='<div class="hard p'.$page.' end" ></div>';
					$tableRows.="<div id='innerPageNum' style='display:none'>".$page."</div>";
					echo $tableRows;
					?>
				</div>
			</div>


			<script type="text/javascript">
				function loadApp() {
					var flipbook = $('.sample-docs');



					if (flipbook.width()==0 || flipbook.height()==0) {
						setTimeout(loadApp, 10);
						return;
					}

					Hash.on('^page\/([0-9]*)$', {
						yep: function(path, parts) {
							var page = parts[1];

							if (page!==undefined) {
								if ($('.sample-docs').turn('is'))
									$('.sample-docs').turn('page', page);
							}

						},
						nop: function(path) {

							if ($('.sample-docs').turn('is'))
								$('.sample-docs').turn('page', 1);
						}
					});

					flipbook.turn({
						elevation: 50,
						acceleration: false,
						gradients: true,
						autoCenter: true,
						duration: 1000,
						pages: $('#innerPageNum').html(),
						when: {

							turning: function(e, page, view) {

								var book = $(this),
								currentPage = book.turn('page'),
								pages = book.turn('pages');

								if (currentPage>3 && currentPage<pages-3) {
									if (page==1) {
										book.turn('page', 2).turn('stop').turn('page', page);
										e.preventDefault();
										return;
									} else if (page==pages) {
										book.turn('page', pages-1).turn('stop').turn('page', page);
										e.preventDefault();
										return;
									}
								} else if (page>3 && page<pages-3) {
									if (currentPage==1) {
										book.turn('page', 2).turn('stop').turn('page', page);
										e.preventDefault();
										return;
									} else if (currentPage==pages) {
										book.turn('page', pages-1).turn('stop').turn('page', page);
										e.preventDefault();
										return;
									}
								}

								Hash.go('page/'+page).update();

								if (page==1 || page==pages)
									$('.sample-docs .tabs').hide();
							},
							turned: function(e, page, view) {
								var book = $(this);
								book.turn('center');
							},

						}
					});
					flipbook.addClass('animated');


					$('#canvas').css({visibility: 'visible'});
				}

				$('#canvas').css({visibility: 'hidden'});

				yepnope({
					test: Modernizr.csstransforms,
					yep: ['../../lib/turn.min.js', 'css/jquery.ui.css'],
					nope: ['../../lib/turn.html4.min.js', 'css/jquery.ui.html4.css'],
					both: ['css/docs.css', 'js/docs.js'],
					complete: loadApp
				});
			</script>

		</div>
		<script>
			var a;
			$(document).ready(function(){
				$("#logout").click(function(){
					$.ajax({
						type:"POST",  
						url:"http://jusugang.com/logout.php",            
						success:function(args){ 
							reload(args);
							$.ajax({      
								type:"POST",  
								url:"http://jusugang.com/read.php",            
								success:function(args){ 
									reread(args);
								},   
								error:function(e){  
									alert(e.responseText);  
								}  
							});  
						},   
						error:function(e){  
							alert(e.responseText);  
						}  
					});	
				});
				$("#login").click(function(){
					var myid_val=$('#myid').val();
					var mypw_val=$('#mypw').val();
					$.ajax({
						type:"POST",  
						url:"http://jusugang.com/login.php",      
						data:"myid='"+myid_val+"'& mypw='"+mypw_val+"'",      
						success:function(args){
							reload(args);
							$.ajax({      
								type:"POST",  
								url:"http://jusugang.com/read.php",            
								success:function(args){ 
									reread(args);
								},   
								error:function(e){  
									alert(e.responseText);  
								}  
							}); 
						},
						error:function(e){  
							alert(e.responseText);  
						}  
					});
					
				});
				$("#create").click(function(){
					var date_val = $("#newDate").val();
					var content_val = $("#newContent").val();
					$.ajax({      
						type:"POST",  
						url:"http://jusugang.com/receive.php",      
						data:"date='"+date_val+"'& content='"+content_val+"'",      
						success:function(args){ 
							reread(args);
						},   
						error:function(e){  
							alert(e.responseText);  
						}  
					});  
				});
				$(".edit").click(function(){
					a=$(this).parent().parent();
					var date_val = a.children().eq(0).children().val();
					var content_val = a.children().eq(1).children().val();
					var content_id= $(a.children()[2]).html();
					$.ajax({      
						type:"POST",  
						url:"http://jusugang.com/update.php",      
						data:"date='"+date_val+"' & content='"+content_val+"'& id='"+content_id+"'",
						success:function(args){   
							reread(args);
						},   
						error:function(e){  
							alert(e.responseText);  
						}  
					});  
				});
				$(".delete").click(function(){
					a=$(this).parent().parent();
					var content_id= $(a.children()[2]).html();
					$.ajax({      
						type:"POST",  
						url:"http://jusugang.com/delete.php",      
						data:"id='"+content_id+"'",
						success:function(args){   
							reread(args);
						},   
						error:function(e){  
							alert(e.responseText);  
						}  
					});  
				});
			});
			function reload(args){
				var logincontent="";
				logincontent+= "— &copy; 2017 by JUSUGANG. All rights reserved.<br>";
				logincontent+= "<div id='loginform'>";
				if(args=="true"){
					alert("로그인되었습니다.");

					logincontent+="관리자모드&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
					logincontent+="<span id='logout' class='loginbutton'>로그아웃</span>";
					logincontent+="<span id='status' style='display:none'>true</span>";
				}
				else{
					logincontent+="<input size='8' type='text' id='myid' class='logininput'>";
					logincontent+="<input size='8' type='password' id='mypw' class='logininput'>";
					logincontent+="<span id='login' class='loginbutton'>로그인</span>";
					logincontent+="<span id='status'style='display:none'>false</span>";
				}
				logincontent+= "</div>";
				$('.copyright').html(logincontent);
				$("#logout").click(function(){
					$.ajax({
						type:"POST",  
						url:"http://jusugang.com/logout.php",            
						success:function(args){ 
							reload(args);
							$.ajax({      
								type:"POST",  
								url:"http://jusugang.com/read.php",            
								success:function(args){ 
									reread(args);
								},   
								error:function(e){  
									alert(e.responseText);  
								}  
							}); 
						},   
						error:function(e){  
							alert(e.responseText);  
						}  
					});

				});
				$("#login").click(function(){
					var myid_val=$('#myid').val();
					var mypw_val=$('#mypw').val();
					$.ajax({
						type:"POST",  
						url:"http://jusugang.com/login.php",      
						data:"myid='"+myid_val+"'& mypw='"+mypw_val+"'",      
						success:function(args){
							reload(args);
							$.ajax({      
								type:"POST",  
								url:"http://jusugang.com/read.php",            
								success:function(args){ 
									reread(args);
								},   
								error:function(e){  
									alert(e.responseText);  
								}  
							}); 
						},
						error:function(e){  
							alert(e.responseText);  
						}  
					});

				});
			}

			function reread(args){
				var diary=JSON.parse(args);
				var count=diary.length;
				var pageNum=Math.ceil((count+1)/10);
				var numInPage=10;
				var status = $("#status").html();
				var page=3;
				for(var j=0; j<pageNum ;j++){
					page=j+3;

					var tableRows="";
					tableRows+="<table>";
					tableRows+="<tbody>";
					if(count<10){
						numInPage=count;
					}
					else{
						count-=10;
					}

					for(var i=0 ; i<numInPage ; i++){
						tableRows+="<tr>";
						tableRows+="<td><input size='7' type='text' value='"+diary[i+10*j]['date']+"' id='date"+diary[i+10*j]['id']+"'></td>";
						tableRows+="<td><input size='40' type='text' value='"+diary[i+10*j]['content']+"' id='date"+diary[i+10*j]['id']+"'></td>";
						tableRows+="<td style='display:none'>"+diary[i+10*j]['id']+"</td>";
						if(status=="true"){
							tableRows+="<td><button class='edit' ></td>";
							tableRows+="<td><button class='delete' ></td>";
						}
						tableRows+="</tr>";
					}
					if(numInPage<10&&status=="true"){
						tableRows+="<tr>";
						tableRows+='<td><input type="text" size="7" id="newDate" ></td>';	
						tableRows+='<td><input type="text" size="40" id="newContent"></td>';
						tableRows+='<td><button id="create"></button></td>';
						tableRows+='</tr><tr><td><br></td></tr>';
					}
					tableRows+="</tbody>";
					tableRows+="</table>";
					$(".p"+page).html(tableRows);
				}
				if(page%2==1){
					page+=1;
					$(".p"+page).html('<div class="p'+page+'"></div>');
				}
				page+=1;
				$(".p"+page).html('<div class="hard p'+page+' end-1"></div>');
				page+=1;
				$(".p"+page).html('<div class="hard p'+page+' end"></div>');

				$("#create").click(function(){
					var date_val = $("#newDate").val();
					var content_val = $("#newContent").val();
					$.ajax({      
						type:"POST",  
						url:"http://jusugang.com/receive.php",      
						data:"date='"+date_val+"'& content='"+content_val+"'",      
						success:function(args){   
							reread(args);
						},   
						error:function(e){  
							alert(e.responseText);  
						}  
					});  
				});
				$(".edit").click(function(){
					a=$(this).parent().parent();
					var date_val = a.children().eq(0).children().val();
					var content_val = a.children().eq(1).children().val();
					var content_id= $(a.children()[2]).html();
					$.ajax({      
						type:"POST",  
						url:"http://jusugang.com/update.php",      
						data:"date='"+date_val+"' & content='"+content_val+"'& id='"+content_id+"'",
						success:function(args){   
							reread(args);

						},   
						error:function(e){  
							alert(e.responseText);  
						}  
					});  
				});
				$(".delete").click(function(){
					a=$(this).parent().parent();
					var content_id= $(a.children()[2]).html();
					$.ajax({      
						type:"POST",  
						url:"http://jusugang.com/delete.php",      
						data:"id='"+content_id+"'",
						success:function(args){   
							reread(args);
						},   
						error:function(e){  
							alert(e.responseText);  
						}  
					});  
				});
			}
		</script>
	</body>
	</html>
