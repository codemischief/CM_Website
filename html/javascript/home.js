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
    var name = document.querySelector(".input-name").value;
    var email = document.querySelector(".input-email").value;
    var message = document.querySelector(".input-textarea").value;
    // console.log(name, email, message);

    var form = document.getElementById("myForm");
    form.reset();


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