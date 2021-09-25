const chaking = (info) => {
  const namE = info.strMeal;
  const lostor = localStorage.getItem("cart");
  let stor = {};
  if (!lostor) {
    stor[namE] = 1;
  } else {
    stor = JSON.parse(lostor);
    if (stor[namE]) {
      const plus = stor[namE] + 1;
      stor[namE] = plus;
    } else {
      stor[namE] = 1;
    }
  }
  localStorage.setItem("cart", JSON.stringify(stor));
};

export { chaking };
