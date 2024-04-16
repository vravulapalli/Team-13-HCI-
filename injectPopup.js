function injectPopup() {
    const existingPopup = document.getElementById('chrome-ext-popup');
    if (existingPopup) {
        existingPopup.style.display = 'block';
    } else {
        const popup = document.createElement('div');
        popup.id = 'chrome-ext-popup';
        popup.style.position = 'fixed';
        popup.style.bottom = '20px';
        popup.style.right = '20px';
        popup.style.width = '300px';
        popup.style.height = '100px';
        popup.style.backgroundColor = 'white';
        popup.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        popup.style.padding = '10px';
        popup.style.zIndex = '1000';
        popup.innerText = 'Dark Pattern Detected! Be cautious, the website might be trying to manipulate your shopping experience.';
        
        const closeBtn = document.createElement('button');
        closeBtn.innerText = 'Close';
        closeBtn.onclick = function() {
            popup.style.display = 'none';
        };
        
        popup.appendChild(closeBtn);
        document.body.appendChild(popup);
    }
}

injectPopup();
