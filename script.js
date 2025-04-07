const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");
const tab4 = document.getElementById("tab4");

const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");
const content4 = document.getElementById("content4");

function hideAllContent() {
  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "none";
  content4.style.display = "none";
}

function showContent(content) {
  hideAllContent();
  content.style.display = "flex";
}

showContent(content1);

tab1.addEventListener("click", () => {
  showContent(content1);
});

tab2.addEventListener("click", () => {
  showContent(content2);
});

tab3.addEventListener("click", () => {
  showContent(content3);
});

tab4.addEventListener("click", () => {
  showContent(content4);
});
