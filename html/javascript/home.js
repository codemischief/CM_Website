// $(document).ready(function(){
//     $(".dropdown").hover(function(){
//         var dropdownMenu = $(this).children(".dropdown-menu");
//         if(dropdownMenu.is(":visible")){
//             dropdownMenu.parent().toggleClass("open");
//         }
//     });
// });    

// window.onload = function() {
//     document.getElementById("my_audio").play();
// }

function myFunction() {
    let name = document.querySelector(".input-name").value;
    let email = document.querySelector(".input-email").value;
    let message = document.querySelector(".input-textarea").value;
    let popup = document.querySelector("#my-popup");

  //  console.log(message);
    

    
			if(name === ""){
				document.getElementById('username').innerHTML =" * Please fill the username";
				return false;
			}

			if(!isNaN(name)){
				document.getElementById('username').innerHTML =" * Invalid user name";
				return false;
			}


      if(email === ""){
				document.getElementById('emailids').innerHTML =" * Email-id is required";
				return false;
			}
			if(email.indexOf('@') <= 0 ){
				document.getElementById('emailids').innerHTML =" * Email-id is invalid";
				return false;
			}

			if((email.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
				document.getElementById('emailids').innerHTML = " * Email-id is invalid";
				return false;
			}

      if(message === ""){
				document.getElementById('textarea').innerHTML = " * Message is required";
				return false;
			}

    // let form = document.getElementById("myForm");
    // form.reset();

   


    const data = { name: name, email: email, message: message};

    fetch('https://cm-web-mayu-vaib-flqcuu6xbq-uc.a.run.app/v1/ContactUs', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      // console.log('Success:', data);
      popup.classList.remove('hidden');
      setTimeout(function() {
        $('#my-popup').fadeOut('slow');
    }, 4000); 
    })
    .catch((error) => {
      // console.error('Error:', error);
    });

  }


 



// const url = 'https://randomuser.me/api';


// var request = new Request(url, {
//     method: 'POST',
//     body: { name: name,
//          email : email,
//          message : message,
//         },
//      headers: new Headers()
//  });

//  fetch(request)
//  .then(function() {
//     // Handle response we get from the API
//  })