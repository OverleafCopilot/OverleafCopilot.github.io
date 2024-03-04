const indexes = new Map();

fetch("./featured/indexes.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector(".container");
    data.forEach((item) => {
      const card = document.createElement("div");
      const id = item.name.replace(/ /g, "-").toLowerCase();
      indexes.set(id, item);
      card.className = "card";
      card.innerHTML = `
                <div class="index">
                    <div class="title">${item.name}</div>
                    <div class="description">${item.desc}</div>
                    <div class="source">
                        Version: ${item.version}
                        <br>
                        Author: ${item.author}
                        <br>
                    </div>
                    <div class="button-container">
                        <button class="outlined-button" onclick="copyTemp('${id}')">Copy Template</button>
                        <button class="tonal-button" onclick="copyIndex('${id}')">Copy Index</button>
                    </div>
                </div>
                <div class="preview">
                    <img src="./featured/${id}.gif" alt="${item.name}.gif" />
                </div>
              `;
      container.appendChild(card);
    });
  });

async function copyTemp(id) {
  const data = await (await fetch(`./featured/${id}.xml`)).text();
  console.log(data);
  navigator.clipboard.writeText(data);
  alert("Template copied to clipboard!");
}

function copyIndex(id) {
  const data = indexes.get(id);
  console.log(data);
  navigator.clipboard.writeText(JSON.stringify(data, null, 2));
  alert("Index copied to clipboard!");
}
