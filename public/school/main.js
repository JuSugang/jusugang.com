var array=[];
function checkRelation(a){
	if(array.indexOf(a)!=-1){	//이미 array에 들어가있으면,
		array.splice(array.indexOf(a),1); 
	}
	else
		array.push(a);

	console.log(array.length);
	if(array.length==3){
		document.getElementById(array.shift()).checked=false;	
	}
	console.log(array);
}