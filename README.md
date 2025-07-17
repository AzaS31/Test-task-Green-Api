# Green-API WhatsApp Web Client

A simple web page for interacting with [Green-API](https://green-api.com), built using pure JavaScript (Vanilla JS).

## 📌 Features

- Get instance settings (`getSettings`)
- Get instance state (`getStateInstance`)
- Send a text message via WhatsApp (`sendMessage`)
- Send a file by URL via WhatsApp (`sendFileByUrl`)

## 🚀 How to Use

1. Get your `idInstance` and `apiTokenInstance` from your [Green-API console](https://console.green-api.com).
2. Enter them in the corresponding input fields.
3. Choose the desired action:
   - `getSettings`
   - `getStateInstance`
   - `sendMessage`
   - `sendFileByUrl`

> For `chatId`, you only need to enter the phone number (e.g., `77001234567`). Then select the suffix (`@c.us` or `@g.us`) from the dropdown menu.

## 🛠️ Tech Stack

- HTML
- CSS
- JavaScript (Vanilla JS)
- Fetch API

## 🖼️ Interface

The interface is divided into two parts:
- Left: form inputs and action buttons
- Right: a large `textarea` displaying the API response

## 📦 Deployment

Live demo available at:  
👉 https://test-task-green-api.vercel.app/

## 📄 License

This project was created as part of a test assignment and is intended for demonstration purposes only.
