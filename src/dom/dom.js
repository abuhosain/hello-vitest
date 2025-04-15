export function renderTitle() {
    const titleContainer = document.getElementById("title") || document.createElement("div");
    const titleElement = document.createElement("p");
    titleElement.textContent = "Testing the dom";
    titleContainer.append(titleElement);
};

renderTitle();