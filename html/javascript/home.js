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

async function myFunction(event) {
    event.preventDefault();
    let name = document.querySelector(".input-name").value;
    let email = document.querySelector(".input-email").value;
    let message = document.querySelector(".input-textarea").value;
    let popup = document.querySelector("#my-popup");
    let form = document.getElementById("myForm");
    const data = { name: name, email: email, message: message};
    console.log(name, email, message.length, data);
     
   
    
    
    // if(message === ""){
    //   console.log("message", message);
    //   document.getElementById('textmessage').innerHTML = " * Message is required";
    //   return false;
    // }


			// if(name === ""){
			// 	document.getElementById('username').innerHTML =" * Please fill the username";
			// 	return false;
			// }

			// if(!isNaN(name)){
			// 	document.getElementById('username').innerHTML =" * Invalid user name";
			// 	return false;
			// }


      // if(email === ""){
			// 	document.getElementById('emailids').innerHTML =" * Email-id is required";
			// 	return false;
			// }

			// if(email.indexOf('@') <= 0 ){
			// 	document.getElementById('emailids').innerHTML =" * Email-id is invalid";
			// 	return false;
			// }


      // if(message === ""){
      //   // console.log("message", message);
      //   document.getElementById('textmessage').innerHTML = " * Message is required";
      //   return false;
      // }

      // if(name!== "" && email !== "" && message !== ""){
      //   form.reset();
      //   return false;
      // }
      


   


  

  await fetch('https://cm-web-mayu-vaib-flqcuu6xbq-uc.a.run.app/v1/ContactUs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      popup.classList.remove('hidden');
      setTimeout(function() {
        $('#my-popup').fadeOut('slow');
    }, 4000); 
    form.reset();
    })
    .catch((error) => {
      // console.error('Error:', error);
    });


    return false;

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