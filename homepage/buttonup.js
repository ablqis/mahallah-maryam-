// Show/hide the scroll button based on the user's scroll position
window.onscroll = function() {
    showScrollButton();
};

function showScrollButton() {
    var scrollButton = document.getElementById("scrollUpBtn"); // Correct ID here
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

// Scroll to the top of the page when the button is clicked
function scrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
