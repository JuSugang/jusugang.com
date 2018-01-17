function toggleSignIn() {
	if (firebase.auth().currentUser) {
	    firebase.auth().signOut();
	} else {
		var email = document.getElementById('email').value;
		var password = document.getElementById('password').value;
		if (email.length < 4) {
			alert('이메일 주소를 입력해주세요.');
			return;
		}
		if (password.length < 4) {
			alert('비밀번호를 입력해주세요.');
			return;
		}
	    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
	      	var errorCode = error.code;
	      	var errorMessage = error.message;
	      	if (errorCode === 'auth/wrong-password') {
	      		alert('잘못된 비밀번호입니다.');
	      	} else {
	      		alert(errorMessage);
	      	}
	      	console.log(error);
	      	document.getElementById('sign-in').disabled = false;
		});
	}
	document.getElementById('sign-in').disabled = true;
}
function handleSignUp() {
 	var email = document.getElementById('email').value;
 	var password = document.getElementById('password').value;
 	if (email.length < 4) {
 		alert('이메일 주소를 입력해주세요.');
 		return;
 	}
 	if (password.length < 4) {
 		alert('비밀번호를 입력해주세요.');
 		return;
 	}
  	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
    	alert('비밀번호 보안이 취약합니다. 다른 비밀번호로 지정해주세요.');
    } else {
    	alert(errorMessage);
    }
    console.log(error);
	});
}
/**
 * Sends an email verification to the user.
 */
// function sendEmailVerification() {
//   	// [START sendemailverification]
//   	firebase.auth().currentUser.sendEmailVerification().then(function() {
//     // Email Verification sent!
//     // [START_EXCLUDE]
//     alert('Email Verification Sent!');
//     // [END_EXCLUDE]
// 	});
//   	// [END sendemailverification]
// }
// function sendPasswordReset() {
// 	var email = document.getElementById('email').value;
//   	// [START sendpasswordemail]
//   	firebase.auth().sendPasswordResetEmail(email).then(function() {
//     // Password Reset Email Sent!
//     // [START_EXCLUDE]
//     alert('Password Reset Email Sent!');
//     // [END_EXCLUDE]
// 	}).catch(function(error) {
//     // Handle Errors here.
//     	var errorCode = error.code;
//     	var errorMessage = error.message;
//     	// [START_EXCLUDE]
//     	if (errorCode == 'auth/invalid-email') {
//     		alert(errorMessage);
//     	} else if (errorCode == 'auth/user-not-found') {
//     		alert(errorMessage);
//     	}
//     	console.log(error);
//     	// [END_EXCLUDE]
// 	});
//   	// [END sendpasswordemail];
// }
 function initApp() {
  	firebase.auth().onAuthStateChanged(function(user) {
	    // document.getElementById('verify-email').disabled = true;
	    if (user) {
	     	var displayName = user.displayName;
	      	var email = user.email;
	      	var emailVerified = user.emailVerified;
	      	var photoURL = user.photoURL;
	      	var isAnonymous = user.isAnonymous;
	      	var uid = user.uid;
	      	var providerData = user.providerData;
	      	document.getElementById('sign-in-status').textContent = '방명록쓰기';
	      	document.getElementById('sign-in-status').style.cursor = "pointer";
	      	document.getElementById('sign-in').textContent = '로그아웃';
	      	document.getElementById('userInfo').textContent = user.email;
	      	$('#sign-up').hide();
	      	$('.logininput').hide();
	      	// main(contents,count);
	      	// document.getElementById('account-details').textContent = JSON.stringify(user, null, '  ');
	      	// if (!emailVerified) {
	      		// document.getElementById('verify-email').disabled = false;
	      	// }
	      	// console.log(JSON.stringify(user, null, '  '));
	  	} else {
	  		document.getElementById('sign-in-status').textContent = '방명록을 적으시려면 로그인해주세요.';
	      	document.getElementById('sign-in-status').style.cursor = "default";
	  		document.getElementById('sign-in').textContent = '로그인';
			document.getElementById('userInfo').textContent = 'logout';
	  		$('#sign-up').show();
	  		$('.logininput').show();
	  		// main(contents,count);
	  		// document.getElementById('account-details').textContent = 'null';
		}
	    document.getElementById('sign-in').disabled = false;
	});
  	document.getElementById('sign-in').addEventListener('click', toggleSignIn, false);
  	document.getElementById('sign-up').addEventListener('click', handleSignUp, false);
  	// document.getElementById('verify-email').addEventListener('click', sendEmailVerification, false);
  	// document.getElementById('password-reset').addEventListener('click', sendPasswordReset, false);
}	

$(document).ready(initApp);