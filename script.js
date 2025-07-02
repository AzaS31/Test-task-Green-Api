const getValue = (id) => document.getElementById(id).value.trim();

const showResponse = (data) => {
    document.getElementById("response").value = JSON.stringify(data, null, 2);
};

async function getSettings() {
    const id = getValue('idInstance');
    const token = getValue('apiToken');

    if (!id) {
        alert("Введите idInstance!");
        return;
    }

    if (!token) {
        alert("Введите apiTokenInstance!");
        return;
    }

    try {
        const res = await fetch(`https://api.green-api.com/waInstance${id}/getSettings/${token}`);
        const data = await res.json();
        showResponse(data);
    } catch (error) {
        alert("Ошибка при выполнении getSettings");
        console.error(error);
    }
}

async function getStateInstance() {
    const id = getValue('idInstance');
    const token = getValue('apiToken');

    if (!id) {
        alert("Введите idInstance!");
        return;
    }

    if (!token) {
        alert("Введите apiTokenInstance!");
        return;
    }

    try {
        const res = await fetch(`https://api.green-api.com/waInstance${id}/getStateInstance/${token}`);
        const data = await res.json();
        showResponse(data);
    } catch (error) {
        alert("Ошибка при выполнении getStateInstance");
        console.error(error);
    }
}

async function sendMessage() {
    const id = getValue('idInstance');
    const token = getValue('apiToken');
    const rawChatId = getValue('chatIdMessage');
    const suffix = document.getElementById("suffixMessage").value;
    const message = getValue('message');

    if (!rawChatId) {
        alert("Введите номер телефона!");
        return;
    }
    const chatId = rawChatId.includes("@") ? rawChatId : rawChatId + suffix;

    if (!id) {
        alert("Введите idInstance!");
        return;
    }

    if (!token) {
        alert("Введите apiTokenInstance!");
        return;
    }

    if (!message) {
        alert("Введите Message!");
        return;
    }

    try {
        const res = await fetch(`https://api.green-api.com/waInstance${id}/sendMessage/${token}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chatId, message }),
        });
        const data = await res.json();
        showResponse(data);
    } catch (error) {
        alert("Ошибка при отправке сообщения");
        console.error(error);
    }
}

async function sendFileByUrl() {
    const id = getValue("idInstance");
    const token = getValue("apiToken");
    const rawChatId = getValue("chatIdFile");
    const suffix = document.getElementById("suffixFile").value;
    const urlFile = getValue("fileUrl");
    const fileName = getValue("fileName");

    if (!rawChatId) {
        alert("Введите номер телефона!");
        return;
    }
    const chatId = rawChatId.includes("@") ? rawChatId : rawChatId + suffix;

    if (!id) {
        alert("Введите idInstance!");
        return;
    }

    if (!token) {
        alert("Введите apiTokenInstance!");
        return;
    }

    if (!urlFile) {
        alert("Введите url!");
        return;
    }

    try {
        const res = await fetch(`https://api.green-api.com/waInstance${id}/sendFileByUrl/${token}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chatId, fileName, urlFile }),
        });
        const data = await res.json();
        showResponse(data);
    } catch (error) {
        alert("Ошибка при отправке файла");
        console.error(error);
    }
}

document.querySelector(".settings-btn").addEventListener("click", getSettings);
document.querySelector(".state-btn").addEventListener("click", getStateInstance);
document.querySelector(".sendMessage-btn").addEventListener("click", sendMessage);
document.querySelector(".sendFile-btn").addEventListener("click", sendFileByUrl);
