const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const itemTitle = item.querySelector("h2").textContent;
  console.log(`Category: ${itemTitle}`);
  const itemEl = item.querySelectorAll("li").length;
  console.log(`Elements: ${itemEl}`);
});
