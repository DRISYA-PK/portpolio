/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Designer","Developer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)


const form = document.getElementById('formid');
const username = document.getElementById('name');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber');
const place = document.getElementById('place');
const msg = document.getElementById('msg');




username.addEventListener('focusout', e => {
  e.preventDefault();
 
 validateInputs('usernamefield');

});
email.addEventListener('focusout', e => {
  e.preventDefault();
 
 validateInputs('emailfield');

});
phonenumber.addEventListener('focusout', e => {
  e.preventDefault();
 
 validateInputs('phfield');

});
msg.addEventListener('focusout', e => {
  e.preventDefault();
 
 validateInputs('msgfield');

});


form.addEventListener('submit', e => {
   e.preventDefault();
  
 let n= validateInputs('all');
 
 
});

const setError = (element, message) => {
  
 element.value='';
element.placeholder=message;

element.style.border="solid 1px red";

  /*inputControl.classList.add('error');
  inputControl.classList.remove('success')*/
}

const setSuccess = element => {
 
  element.style.border="solid 1px green";
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = (fieldleave) => {
 

  let returnvalue=true;
 
 
  const place1 = place.value.trim();

  if(fieldleave==='usernamefield'||fieldleave==='all'){
  const usernameValue = username.value.trim();

  if(usernameValue === '') {
 
      setError(username, 'Username is required');
      returnvalue=false;
  } else {
      setSuccess(username);
  }
}
if(fieldleave==='msgfield'||fieldleave==='all'){
  const messagevalue=msg.value.trim();
  if(messagevalue === '') {
    
    setError(msg, 'Any Message please');
    returnvalue=false;
} else {
    setSuccess(msg);
}
  
}
if(fieldleave==='emailfield'||fieldleave==='all'){
 
  const emailValue = email.value.trim();
  if(emailValue === '') {

      setError(email, 'Email is required');
      returnvalue=false;
  } else if (!isValidEmail(emailValue)) {
      setError(email, 'Provide a valid email Id ');
      returnvalue=false;
  } else {
      setSuccess(email);
  }
}
if(fieldleave==='phfield'||fieldleave==='all'){
const ph = phonenumber.value.trim();
   if(ph!='')
   {

  var regex=/^[0-9]+$/;
  if (!ph.match(regex)||ph.length!=10)
  {
    setError(phonenumber, 'Provide a valid Ph No ');
    returnvalue=false;
  }
 
  else
  {
    setSuccess(phonenumber);
  }
 }
 return returnvalue;
 }





};





function sendandcheckMail()
{
  let n= validateInputs('all');
  if(n==true)
  {
    sendMail();
  }
}



//  mail 

function sendMail() {

  var params = {
    name: username,
    email: document.getElementById("email").value,
    message: document.getElementById("msg").value,
  };   

  const serviceID = "service_mfgxbxq";
  const templateID = "template_4kyjkyo";
 
    emailjs.send(serviceID, templateID, params)
    .then(res=>{
   
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("msg").value = "";
        console.log(res);
        alert("Your message sent successfully!!");
        

    })
    .catch(err=>console.log(err));

}



function downloadUrl(url){
  
  window.open(url, '_self');
}


/**download cv */
