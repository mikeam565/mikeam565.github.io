const SCALE = 1.2;
let followerTargetX = 0.5;
let followerTargetY = 0.5;
let followerX = 0;
let followerY = 0;

let isMobileDevice = false;
if (window.innerWidth <= 767) {
    isMobileDevice = true;
}

document.addEventListener("DOMContentLoaded", (ev) => {
    const background = document.getElementById('background');
    const customCursor = document.getElementById("custom-cursor");
    const follower = document.getElementById("follower");
    const nav1 = document.getElementById("nav-bio");
    const nav2 = document.getElementById("nav-resume");
    const nav3 = document.getElementById("nav-links");
    const bio = document.getElementById("bio");
    const resume = document.getElementById("resume");
    const links = document.getElementById("links");
    const a_links = document.getElementsByTagName("a");

    // DESKTOP SPECIFIC SCRIPTING
    if (!isMobileDevice) {
        document.addEventListener('mousemove', (e) => {
            customCursor.style.left = `${e.clientX}px`;
            customCursor.style.top = `${e.clientY}px`;
            followerTargetX = e.clientX;
            followerTargetY = e.clientY;

            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            moveX = (mouseX - 0.5) * 30; // Adjust the sensitivity and range of movement as needed
            moveY = (mouseY - 0.5) * 30; // Adjust the sensitivity and range of movement as needed

            background.style.transform = `scale(${SCALE}) translate(${moveX}px, ${moveY}px)`;

            followerX = followerTargetX;
            followerY = followerTargetY;
            follower.style.transition = "0.1s";
            follower.style.top = `${followerY}px`;
            follower.style.left = `${followerX}px`;
        });
    }

    // PLATFORM AGNOSTIC FUNCTIONALITY
    navFunctionality(nav1, bio, resume, links);
    navFunctionality(nav2, resume, bio, links);
    navFunctionality(nav3, links, bio, resume);

    function navFunctionality(item, toShow, toHide1, toHide2) {
        item.addEventListener("mouseenter", (ev) => {
            follower.style.backgroundImage = 'url(\'static/circle_cursor_green.png\')';
        });
        item.addEventListener("mouseleave", (ev) => {
            follower.style.backgroundImage = 'url(\'static/circle_cursor.png\')';
        })
        item.addEventListener("click", (ev) => {
            toShow.classList.remove("hidden");
            toShow.classList.add("visible");
            toHide1.classList.remove("visible");
            toHide1.classList.add("hidden");
            toHide2.classList.remove("visible");
            toHide2.classList.add("hidden");
        });
    }

    for (lnk in a_links) {
        lnk.addEventListener("mouseenter", (ev) => {
            follower.style.backgroundImage = 'url(\'static/circle_cursor_green.png\')';
        });
        lnk.addEventListener("mouseleave", (ev) => {
            follower.style.backgroundImage = 'url(\'static/circle_cursor.png\')';
        })
    }
});
