const products = [
  { id: "p1", name: "Lace Front Wig" },
  { id: "p2", name: "Hair Bundles" },
  { id: "p3", name: "Wig Glue" },
  { id: "p4", name: "Edge Control" }
];

const select = document.getElementById("product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  select.appendChild(option);
});
