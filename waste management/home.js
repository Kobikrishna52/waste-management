function redirectPage(option) {
    const username = getQueryParam('user');
    alert(`Redirecting to ${option.toUpperCase()} page for ${username}`);
    window.location.href = `options.html?user=${username}&option=${option}`;
}

function getQueryParam(key) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
}
