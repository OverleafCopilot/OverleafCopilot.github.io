fetch("./featured/indexes.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
                <div class="icon">${item.icon}</div>
                <div class="title">${item.name}</div>
                <div class="description">${item.desc}</div>
                <div class="source">
                  Version: ${item.version}
                  <br>
                  Author: ${item.author}
                  <br>
                  Contact: 
                  <a href="http://wpa.qq.com/msgr?uin=${
                    item.contact.split(": ")[1]
                  }&menu=yes" target="_blank">
                    ${item.contact}
                  </a>
                </div>
              `;
      document.body.appendChild(card);
    });
  });
