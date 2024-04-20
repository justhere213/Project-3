function openSettings() {
    document.getElementById("overlay").style.display = "flex";
}
  
function closeSettings() {
    document.getElementById("overlay").style.display = "none";
}

// Pulls theme variable

let themeEnabled = JSON.parse(localStorage.getItem("theme"));
let existingLinkNode = document.querySelector('link[href="css/theme.css"]');

console.log(themeEnabled)

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
            console.log('theme disabled')
        }
        themeEnabled = false;
    } else {
        // Toggle on
        const linkNode = document.createElement('link');
        linkNode.rel = 'stylesheet';
        linkNode.href = 'css/theme.css';
        document.head.appendChild(linkNode);
        existingLinkNode = linkNode;
        console.log('theme enabled')
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



