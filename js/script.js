// Create a new QRCode instance and show it inside the "qrcode" div
let qrcode = new QRCode(document.getElementById("qrcode"));

// Make a QR code when the page first loads with this default text
qrcode.makeCode("Created By ZarCodeX");

// This function runs when the "Generate" button is clicked
function generateQr() {
    const inputField = document.getElementById("inputField"); // Get the input box

    // If the input is empty, show an alert and stop
    if (!inputField.value.trim()) {
        alert("Input field cannot be empty!");
        return;
    }

    // Make a new QR code with the text the user entered
    qrcode.makeCode(inputField.value);
}

// This function runs when the "Download" button is clicked
function downloadQr() {
    const qrCodeImage = document.querySelector("#qrcode img"); // Get the QR code image

    // If there's no QR code image, show an alert and stop
    if (!qrCodeImage) {
        alert("No QR code to download!");
        return;
    }

    // Create a temporary link element to download the image
    const link = document.createElement("a");
    link.href = qrCodeImage.src; // Set the image source as the link
    link.download = "qrcode.png"; // Set the download filename
    document.body.appendChild(link); // Add the link to the page
    link.click(); // Simulate a click to start download
    document.body.removeChild(link); // Remove the link after clicking
}
