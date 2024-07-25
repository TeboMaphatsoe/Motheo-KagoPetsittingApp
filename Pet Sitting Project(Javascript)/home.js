document.addEventListener('DOMContentLoaded', function() {
    const text = "Loving care when you’re not there.";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            document.querySelector('.typing-text').textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50); // Adjust speed here (in milliseconds)
        }
    }

    typeWriter();
});
 
document.getElementById("petOwner").addEventListener("click",function(){
 window.location.href="loginAndSignUp.html";
});

document.getElementById("petSitter").addEventListener("click",function(){
    window.location.href="loginAndSignUp.html";
   });

   document.getElementById("explore").addEventListener("click",function(){
    window.location.href="Explore.html";
   });
   
   