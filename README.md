# Zarco QR Code Generator

![QR Code Generator Screenshot](images/bg.jpg) 

## Overview

The Zarco QR Code Generator is a sleek, modern web application designed to instantly create custom QR codes from any URL or text input. Built with a focus on user experience, it features a clean interface, real-time QR code generation, and the ability to download generated QR codes as PNG images.

## Features

*   **Instant Generation**: Quickly convert text or URLs into scannable QR codes.
*   **Download Functionality**: Save your generated QR codes as PNG files.
*   **Responsive Design**: Optimized for use across various devices and screen sizes.
*   **Modern UI**: A visually appealing interface with a dark theme and frosted glass effects.

## Technologies Used

*   **HTML5**: For structuring the web content.
*   **CSS3**: Custom styling with a focus on modern aesthetics, including Google Fonts (`Poppins`) and `backdrop-filter` effects.
*   **JavaScript**: For interactive elements and core application logic.
*   **`ajax_qrcode.js`**: A dedicated JavaScript library for robust QR code generation.

## How to Use

1.  **Enter Text or URL**: Type or paste your desired text or URL into the input field.
2.  **Generate QR Code**: Click the "Generate" button to instantly display your QR code.
3.  **Download QR Code**: Click the "Download" button to save the generated QR code as a `qrcode.png` file to your device.

## Setup

To run this project locally:

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd qrcode
    ```
3.  Open `index.html` in your web browser.

## Project Structure

```
.
├── index.html
├── css/
│   └── main.css
├── images/
│   ├── bg.jpg
│   └── favicon.png
├── js/
│   └── script.js
└── library/
    └── ajax_qrcode.js
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Copyright

© 2025 ZarCodeX • All Rights Reserved
