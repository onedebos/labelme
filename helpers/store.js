import { create } from "zustand";

export const useStore = create((set) => ({
  cart: [],
  cartItem: [],
  // packagingTitle: "packaging 1 liner",
  // packagingDescription: "this is packaging 1",
  // productType: "eyeliner",
  // totalSteps: 3,
  // packagingImgUrl:
  //   "https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/340183815_604954314599021_7729151997089184802_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=105&_nc_ohc=-OZHzwJWti8AX_n89FI&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA3NTk3MDM0Njc5OTY1ODMwOQ%3D%3D.2-ccb7-5&oh=00_AfBfHWZrcOUSwPlSd4xdUlvynEBcWHQD7sWTc4T4wLvhMQ&oe=643BB975&_nc_sid=6136e7",
  // shadeTitle: "shade 2 liner",
  // shadeDescription: "this is shade 2",
  // shadeImgUrl:
  //   "https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/339329215_743713277480581_60823715177679472_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=101&_nc_ohc=0rAPEXX_UcAAX84_ofb&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA3MzY3OTAxODI3MTIwNDYzMw%3D%3D.2-ccb7-5&oh=00_AfDmlTZvKeQaQLf8iZs9dpUg0R4MjS2j2Vy65W1FaIpo8g&oe=643C6C46&_nc_sid=6136e7",
  // flavorTitle: "flavor 1 liner",
  // flavorDescription: "this is flavor 1",
  // flavorImgUrl:
  //   "https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/340183815_604954314599021_7729151997089184802_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=105&_nc_ohc=-OZHzwJWti8AX_n89FI&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA3NTk3MDM0Njc5OTY1ODMwOQ%3D%3D.2-ccb7-5&oh=00_AfBfHWZrcOUSwPlSd4xdUlvynEBcWHQD7sWTc4T4wLvhMQ&oe=643BB975&_nc_sid=6136e7",
  // addCartItem: async (cartItem) => {
  //   set((state) => ({ cartItem }));
  // },
  addCartItem: async (cartItem) => {
    set((state) => ({ cartItem: [...state.cartItem, cartItem] }));
  },

  addToCart: async (cart) => {
    set((state) => ({ cart: [...state.cart, cart] }));
  },
}));
