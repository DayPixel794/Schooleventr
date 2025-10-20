const b_Main = document.getElementById('Mainb');
const b_AboutUs = document.getElementById('AboutUs');
const b_Updates = document.getElementById('Updates');
const b_MyAssigns = document.getElementById('MyAssigns');
const b_Profile = document.getElementById('Profile');

b_Main.addEventListener("click", function() {Window.location.href = "sch_main-p"})
b_AboutUs.addEventListener("click", function() {Window.location.href = "sch_about-p";})
b_Updates.addEventListener("click", function() {Window.location.href = "sch_updates-p";})
b_MyAssigns.addEventListener("click", function() {Window.location.href = "sch_assigns-p";})
b_Profile.addEventListener("click", function() {Window.location.href = "sch_profile-p";})