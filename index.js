const inputEl = document.getElementById("input-el");

const chatList = [];
const answers = ["gau", "gru", "gau"];

const showText = function (el, message, index, interval) {
  if (index < message.length) {
    el.append(message[index++]);
    setTimeout(function () {
      showText(el, message, index, interval);
    }, interval);
  }
};

inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const chatMessage = inputEl.value || "";
    const chatData = {
      name: user,
      message: chatMessage,
      time: new Date().toLocaleTimeString(),
    };
    chatList.push(chatData);
    renderChat(chatData);
    inputEl.value = "";

    const randomKey = Math.floor(Math.random() * answers.length);
    const randomLength = Math.floor(Math.random() * 10) + 6;
    const chatAnswer = {
      name: logo,
      message: Array.from(
        { length: randomLength },
        () => answers[randomKey]
      ).join(" "),
      time: new Date().toLocaleTimeString(),
    };
    setTimeout(() => {
      renderChat(chatAnswer, true);
    });
  }
});

const renderChat = (chat, isSlow = false) => {
  const liEl = document.createElement("div");
  liEl.setAttribute("class", "chat-message");

  if (isSlow) {
    const messEl = document.createElement("div");
    messEl.setAttribute("class", "name-container");
    messEl.innerHTML = `<span class="logo">${chat.name} </span>`;

    const timeEl = document.createElement("div");
    timeEl.setAttribute("class", "time");
    timeEl.innerText = chat.time;
    liEl.appendChild(messEl);
    liEl.appendChild(timeEl);
    showText(messEl, chat.message, 0, 100);
    document.getElementById("chat-list").appendChild(liEl);
  } else {
    liEl.innerHTML = `
    <div class="name-container">
    <p><span class="logo">${chat.name}</span> </p> <p>${chat.message}</p>
    </div>
        <p class="time">${chat.time}</p>
      `;
    document.getElementById("chat-list").appendChild(liEl);
  }

  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
};

const logo = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 418 354" fill="none" display="inherit" class="mdl-js">
<path fill-rule="evenodd" clip-rule="evenodd" d="M318.2 168.6C347.7 182.3 378 193.9 409.2 203.4C411.9 204.3 414.5 205.4 417.1 206.5L417.1 206.5C417.043 206.726 416.987 206.857 416.948 206.945C416.919 207.013 416.9 207.057 416.9 207.1C416.867 207.067 416.833 207.022 416.8 206.978C416.733 206.889 416.667 206.8 416.6 206.8C366.4 204 318.4 191.6 272.2 172.2C243.2 160 215.6 145.1 189.5 127.6C188.814 127.164 188.206 126.61 187.603 126.062C187.239 125.731 186.876 125.401 186.5 125.1H186.4C185.572 124.745 185.198 124.425 184.721 124.016C184.392 123.733 184.013 123.408 183.4 123C169.3 113.8 156.2 103.2 143.2 92.6C136.055 86.7477 129.28 80.4787 122.498 74.2026C119.313 71.2558 116.127 68.3075 112.9 65.4C118 83.3 125.1 100.3 135.6 115.8C136.8 117.5 137.9 119.4 138.9 121.3C139.036 121.571 139.245 121.828 139.452 122.081C140.008 122.763 140.548 123.425 139.6 124.3C138.562 125.165 137.599 124.384 136.841 123.77C136.722 123.673 136.608 123.581 136.5 123.5C132.434 120.564 128.337 117.679 124.242 114.796C115.648 108.746 107.063 102.702 98.8 96.2C68.8 72.8 41.7 46.3 15.6 18.8C12.1516 15.16 8.86636 11.3978 5.58798 7.64333C3.73256 5.5185 1.87934 3.39619 0 1.3C0.782645 -0.0304961 1.87156 0.109087 2.83528 0.232622C3.10292 0.26693 3.36091 0.3 3.6 0.3C21.85 0.25 40.1 0.25 58.35 0.25C76.6 0.25 94.85 0.25 113.1 0.2C116.7 0.2 118.7 1.3 120.6 4.4C124.299 10.457 128.098 16.4644 131.894 22.4693C137.438 31.2362 142.977 39.9977 148.2 48.9C151.949 55.2352 155.922 61.4403 159.893 67.6435C165.136 75.8342 170.377 84.0214 175.1 92.5C177.303 96.5003 179.842 100.332 182.386 104.172C184.23 106.955 186.077 109.742 187.8 112.6C190.2 115.1 191.8 118 193.1 121.1L193.2 121.3C194.642 123.319 196.176 125.337 197.98 127.711L198.2 128C198.944 126.606 199.668 125.259 200.376 123.943C201.954 121.012 203.451 118.23 204.9 115.4C224 78.5 243 41.7 261.9 4.8C263.8 1.1 266 0 270 0C309 0.3 348 0.4 387 0.5C392.7 0.5 392.7 0.6 390 5.5C388.062 9.04606 386.125 12.5931 384.186 16.1407C366.121 49.2096 348.023 82.3364 329.6 115.3C328.383 117.5 327.147 119.687 325.911 121.873C322.372 128.131 318.839 134.378 315.8 140.9C314.6 143.6 312.8 144.7 309.6 144.2C288.7 141.1 268.9 135.1 250.7 124.4C249.5 123.7 248.4 123.1 247.2 122.6C246.867 122.467 246.533 122.511 246.2 122.556C246.033 122.578 245.867 122.6 245.7 122.6C247.394 126.286 248.79 127.292 257.304 133.431L257.4 133.5C276.5 147.3 296.9 158.7 318.2 168.6ZM192.091 344.023C191.794 343.444 191.499 342.869 191.2 342.3L111.6 199.5C122.7 204.7 133.6 209.3 144.6 213.7C146.6 214.6 162 219.1 167.6 219.9C168.116 219.957 168.623 220.064 169.141 220.173C170.431 220.443 171.788 220.728 173.5 220.3C168.4 215.9 149.7 207.7 149.7 207.7C133.5 199.9 118.8 189.5 104.6 178.6C70.8 152.7 41.2 122.5 11.6 92.2C11.3387 91.9387 11.2054 91.592 11.0607 91.2157C10.984 91.016 10.904 90.808 10.8 90.6C12.2581 90.6 13.1862 91.4246 14.1266 92.2601C14.4116 92.5133 14.6977 92.7674 15 93C47.3 117.4 81.9 138.1 117.7 156.9C127.558 162.208 137.655 167.04 147.751 171.872C154.963 175.324 162.175 178.775 169.3 182.4L169.8 182.5C169.856 182.5 170.791 182.914 172.367 183.611C179.274 186.668 198.482 195.169 209.8 198.1C207.748 195.514 205.679 192.943 203.609 190.371C193.673 178.026 183.728 165.669 175.7 151.6C177.407 151.367 178.572 152.158 179.662 152.897C179.977 153.111 180.286 153.321 180.6 153.5C195.6 162 210.9 169.6 226.3 177.2C243.2 185.6 260.9 191.9 278.7 197.9C282.1 199 283.3 200 281.2 203.7C258.823 244.094 236.581 284.556 214.363 324.975C209.575 333.685 204.787 342.394 200 351.1C199.637 351.735 199.193 352.369 198.591 353.227C198.529 353.316 198.465 353.406 198.4 353.5C195.509 350.694 193.775 347.309 192.091 344.023Z" fill="url(#paint0_linear_7_248)"/>
<defs>
  <linearGradient id="paint0_linear_7_248" x1="-7.5" y1="-2.29038e-06" x2="445" y2="232" gradientUnits="userSpaceOnUse">
    <stop stop-color="#fe803b"/>
    <stop offset="1" stop-color="#faae13"/>
  </linearGradient>
</defs>
</svg>`;

const user = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="30" height="30" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><linearGradient id="a" x1="256" x2="256" y1="512" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5558ff"></stop><stop offset="1" stop-color="#00c0ff"></stop></linearGradient><linearGradient id="b" x1="256" x2="256" y1="452" y2="91" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#addcff"></stop><stop offset=".503" stop-color="#eaf6ff"></stop><stop offset="1" stop-color="#eaf6ff"></stop></linearGradient><circle cx="256" cy="256" r="256" fill="url(#a)" data-original="url(#a)" class=""></circle><path fill="url(#b)" d="M331 166c0-41.355-33.645-75-75-75s-75 33.645-75 75 33.645 75 75 75 75-33.645 75-75zm-75 75c-74.439 0-135 60.561-135 135v14.058c0 4.264 1.814 8.326 4.99 11.171C162.528 433.969 208.7 452 256 452c47.301 0 93.473-18.031 130.01-50.771a14.998 14.998 0 0 0 4.99-11.171V376c0-74.439-60.561-135-135-135z" data-original="url(#b)"></path></g></svg>`;
