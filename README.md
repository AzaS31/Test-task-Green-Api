# Green-API WhatsApp Web Client

Простая веб-страница для взаимодействия с [Green-API](https://green-api.com), реализованная на чистом JavaScript (Vanilla JS).

## 📌 Функциональность

- Получение настроек (`getSettings`)
- Получение состояния инстанса (`getStateInstance`)
- Отправка текстового сообщения в WhatsApp (`sendMessage`)
- Отправка файла по URL в WhatsApp (`sendFileByUrl`)

## 🚀 Как использовать

1. Получите `idInstance` и `apiTokenInstance` в личном кабинете [Green-API](https://console.green-api.com).
2. Введите их в соответствующие поля.
3. Выберите нужное действие:
   - `getSettings`
   - `getStateInstance`
   - `sendMessage`
   - `sendFileByUrl`

> Для `chatId` можно указать только номер телефона (например, `77001234567`), а суффикс (`@c.us` или `@g.us`) выбрать из выпадающего списка.

## 🛠️ Стек технологий

- HTML
- CSS
- JavaScript (Vanilla JS)
- Fetch API

## 🖼️ Интерфейс

Интерфейс разделён на 2 части:
- Слева — форма ввода и кнопки действий
- Справа — большое `textarea` для отображения ответа API

## 📦 Размещение

Готовый проект размещён по адресу:  
👉 https://test-task-green-api.vercel.app/

## 📄 Лицензия

Проект создан в рамках тестового задания и предназначен для демонстрации навыков.
