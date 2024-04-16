// contentScript.js


// contentScript.js

function checkForDarkPattern() {
    const isGoogleHomepage = window.location.hostname === 'www.google.com' && window.location.pathname === '/';
    
    if (isGoogleHomepage) {
      reportDarkPattern('Google Homepage', 'This is a test popup for the Google homepage.');
    }
  }
  
  // Simulated function to report the detection of a dark pattern
  function reportDarkPattern(patternType, message) {
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.left = '50%';
    popup.style.top = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.padding = '20px';
    popup.style.backgroundColor = 'white';
    popup.style.border = '1px solid black';
    popup.style.zIndex = '10000';
    popup.textContent = `Dark Pattern Detected: ${patternType} - ${message}`;
    document.body.appendChild(popup);
  }
  
  // Run the dark pattern check on page load
  window.addEventListener('DOMContentLoaded', checkForDarkPattern);

  
  
// Function to detect Trick Questions
function detectTrickQuestions() {
    const questions = document.querySelectorAll('label, .question');
    questions.forEach(question => {
        if (question.textContent.includes("Wouldn't you prefer to")) {
            reportDarkPattern('Trick Questions', question.textContent);
        }
    });
}

// Function to detect Sneak into Basket
function detectSneakIntoBasket() {
    const cartItems = new Set();
    setInterval(() => {
        document.querySelectorAll('.cart-item').forEach(item => {
            if (!cartItems.has(item) && item.style.display !== 'none') {
                cartItems.add(item);
                reportDarkPattern('Sneak into Basket', 'New item added to your cart unexpectedly.');
            }
        });
    }, 1000); // Check every second
}

// Function to detect Hidden Costs
function detectHiddenCosts() {
    const priceElements = document.querySelectorAll('price, .cost, .total');
    priceElements.forEach(el => {
        if (el.textContent.includes("price") || el.textContent.includes("not included")) {
            reportDarkPattern('Hidden Costs', el.textContent);
        }
    });
}



function detectFreeTrials() {
    const creditCardForms = document.querySelectorAll('input[type="text"][name*="credit"], input[type="text"][name*="card"]');
    creditCardForms.forEach(input => {
        const form = input.closest('form');
        if (form && /free trial/i.test(form.textContent) && /automatically renew/i.test(form.textContent)) {
            reportDarkPattern('Free Trial with Auto-Renewal', 'This site may automatically charge you after a free trial.');
        }
    });
}

function detectCancellationIssues() {
    const signUpButtons = document.querySelectorAll('button, input[type="submit"]');
    signUpButtons.forEach(button => {
        if (/sign up/i.test(button.textContent) || /register/i.test(button.textContent)) {
            // Simulate a click and observe changes, or check linked pages for cancellation terms
            // Here, we just log for demonstration.
            console.log('Signup found. Check for cancellation terms manually.');
        }
    });
}

function detectMisleadingDownloads() {
    const downloadButtons = document.querySelectorAll('.download-button, .download-link');
    downloadButtons.forEach(button => {
        if (button.textContent.includes('Download Now') && button.closest('.ad, .sponsored')) {
            reportDarkPattern('Misleading Download Button', 'This download button may lead to unwanted software.');
        }
    });
}

function detectDisguisedAds() {
    const articles = document.querySelectorAll('article, .news-item');
    articles.forEach(article => {
        if (article.querySelector('.sponsored, .ad-label')) {
            reportDarkPattern('Disguised Ads', 'This ad is styled like a news article.');
        }
    });
}

function detectConfirmshaming() {
    const popups = document.querySelectorAll('.popup, .modal, .overlay');
    popups.forEach(popup => {
        if (/don't miss out/i.test(popup.textContent) || /you'll regret/i.test(popup.textContent)) {
            reportDarkPattern('Confirmshaming', 'This site uses emotional manipulation to encourage subscriptions.');
        }
    });
}

// Helper function to send messages to the background script
function reportDarkPattern(type, message) {
    chrome.runtime.sendMessage({ darkPatternDetected: true, patternType: type, detail: message });
}

// Initiate detection functions
function detectDarkPatterns() {
    detectTrickQuestions();
    detectSneakIntoBasket();
    detectHiddenCosts();
    detectConfirmshaming();
    detectDisguisedAds();
    detectMisleadingDownloads();
    detectCancellationIssues();
    detectFreeTrials();
}

window.onload = detectDarkPatterns;
