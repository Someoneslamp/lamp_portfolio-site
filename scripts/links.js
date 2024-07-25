// Someoneslamp
// "links.js"
// Redirects users to other webpages when clicking referral link.
// Last Edit: 7/24/2024

// Functions
function Setup() {
    // Get Document Images
    for (let ElementIdx = 0; ElementIdx < document.images.length; ElementIdx++) {
        // Make redirect for users
        let ImageRedirect = document.images[ElementIdx];
        
        if (!(ImageRedirect && ImageRedirect.getAttribute("redirect"))) {
            continue;
        };

        ImageRedirect.setAttribute("style", "cursor: pointer;");

        ImageRedirect.addEventListener("click", () => {
            window.open(ImageRedirect.getAttribute("redirect"));
        })
    };

    return
};

// Listeners
// Wait until content is loaded
window.addEventListener("DOMContentLoaded", Setup);