particlesJS.load('particles-container', 'auth/particles-config.json', function() {
    console.log("✅ Particles.js loaded successfully!");
});



// Toggle Login and Signup Forms
document.getElementById("showSignup").addEventListener("click", function () {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("signupForm").classList.remove("hidden");
});

document.getElementById("showLogin").addEventListener("click", function () {
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
});
