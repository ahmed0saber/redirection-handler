const redirectUrls = {
    'portfolio': 'https://ahmed0saber.pages.dev',
    'intern2grow': 'https://intern2grow.pages.dev',
    'qgame': 'https://qgame.pages.dev',
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectId = urlParams.get('redirect');
    const messageElement = document.getElementById('message');
    const spinnerElement = document.getElementById('spinner');
    const detailsElement = document.getElementById('details');

    if (redirectId && redirectUrls[redirectId]) {
        const targetUrl = redirectUrls[redirectId];
        detailsElement.textContent = `You are being securely redirected to your destination.`;
        setTimeout(() => {
            window.location.replace(targetUrl);
        }, 3000);
    } else {
        messageElement.textContent = 'Redirection Failed';
        spinnerElement.style.display = 'none';
        detailsElement.classList.add('error-message');
        if (!redirectId) {
            detailsElement.textContent = 'No redirect ID provided. Please ensure the URL is correct.';
        } else {
            detailsElement.textContent = `Invalid redirect ID: "${redirectId}". Please check the link.`;
        }
    }
});