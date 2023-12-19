const btn = document.querySelector('.colorBtn');
const colorValueSpan = document.querySelector('.color-value');
const colorGridSpan = document.querySelector('.color-grid');
const messageElement = document.querySelector('.message');

btn.addEventListener('click', () => {
    const eyeDropper = new EyeDropper();

    eyeDropper.open().then((result) => {
        const pickedColor = result.sRGBHex;

        // Set the button's background color
        // btn.style.backgroundColor = pickedColor;

        colorGridSpan.style.backgroundColor = pickedColor;  // Set the color grid background color

        colorValueSpan.textContent = pickedColor;  // Display the color value in the span

        copyToClipboard(pickedColor);  // Copy the color value to the clipboard

        showMessage('Color copied to clipboard!');    // Display a confirmation message
    });
});

function copyToClipboard(value) {
    const tempInput = document.createElement('input');
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}

function showMessage(message) {
    messageElement.textContent = message;

    setTimeout(() => {
        messageElement.textContent = '';
    }, 3000);
}
