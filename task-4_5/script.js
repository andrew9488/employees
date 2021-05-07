const iframe = document.getElementById("iframe");

const keyInput = document.getElementById("key");
const valueInput = document.getElementById("value");

const setBtn = document.getElementById("set");
const getBtn = document.getElementById("get");
const deleteBtn = document.getElementById("delete");

iframe.onload = () => {
    console.log("iframe was loaded");
};
iframe.onerror = () => {
    console.log("Something went wrong!");
};
window.onmessage = ({data}) => {
    if (data === "reply") {
        console.log("fire callback!");
    }
};

const postMessageHandler = (method, key = keyInput.value, value = valueInput.value) => {
    if (method === "set" && (!key || !value)) {
        console.log("Key or Value is empty");
    } else if ((method === "get" || method === "delete") && !key) {
        console.log("Key is empty");
    } else {
        const messageData = JSON.stringify({method, key, value});

        iframe.contentWindow.postMessage(messageData, '*');
    }
};

setBtn.addEventListener("click", () => {
    postMessageHandler("set");
});

getBtn.addEventListener("click", () => {
    postMessageHandler("get");
});

deleteBtn.addEventListener("click", () => {
    postMessageHandler("delete");
});