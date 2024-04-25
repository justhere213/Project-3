/*Project:  Project 5
Name: Kirby Balding
Submitted: 4/25/24
 
I declare that the following source code was written by me, or provided
by the instructor for this project. I understand that copying source
code from any other source, providing source code to another student, 
or leaving my code on a public web site constitutes cheating.
I acknowledge that  If I am found in violation of this policy this may result
in a zero grade, a permanent record on file and possibly immediate failure of the class.
 
Reflection (1-2 paragraphs):  
 
*/

// Open/close settings tab

function openSettings() {
    document.getElementById("overlay").style.display = "flex";
}
  
function closeSettings() {
    document.getElementById("overlay").style.display = "none";
}

// Pulls theme variable

if (themeEnabled === null && JSON.parse(localStorage.getItem("theme")) === null) {
    var themeEnabled = false;
} else {
    themeEnabled = JSON.parse(localStorage.getItem("theme"));
}

if (existingLinkNode === null) {
    var existingLinkNode = document.querySelector('link[href="css/theme.css"]');
}

function toggleTheme() {
    if (!existingLinkNode) {
        existingLinkNode = document.querySelector('link[href="css/theme.css"]');
    }

    if (themeEnabled === undefined) {
        themeEnabled = false;
    }
    
    if (themeEnabled) {
        // Toggle off
        if (existingLinkNode) {
            existingLinkNode.remove();
        }
        themeEnabled = false;
    } else {
        // Toggle on
        const linkNode = document.createElement('link');
        linkNode.rel = 'stylesheet';
        linkNode.href = 'css/theme.css';
        document.head.appendChild(linkNode);
        existingLinkNode = linkNode;
        themeEnabled = true;
    }

    // Update storage
    localStorage.setItem("theme", themeEnabled);
}

document.addEventListener("DOMContentLoaded", function() {
    let themeButton = document.querySelector('#toggle-theme')
    themeButton.addEventListener('click', toggleTheme)
});

// Activates theme if enabled

if (themeEnabled) {
    if (!existingLinkNode) {
        const linkNode = document.createElement('link');
        linkNode.rel = 'stylesheet';
        linkNode.href = 'css/theme.css';
        document.head.appendChild(linkNode);
        existingLinkNode = linkNode;
    }
}



