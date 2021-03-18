const initialState = {
  products: [],
  categories: [],
  cart: [
    {
      id: 1,
      categoryId: 1,
      title:
        "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
      subTitle: "Accounting",
      descriptions:
        "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
      specifications: [
        ["id", "91504421-EA"],
        ["Item Number", "100558134"],
      ],
      price: 100,
      totalPrice: 100,
      quantity: 1,
      image:
        "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      create: "8/23/2020",
    },
  ],
};

export default initialState;
