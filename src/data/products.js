import black from "../assets/black.JPG";
import brown from "../assets/brown.JPG";
import blue from "../assets/blue.JPG";
import white from "../assets/white.JPG";
import orange from "../assets/orange.JPG";
import red from "../assets/red.JPG";
import yellow from "../assets/yellow.JPG";
import green from "../assets/green.jpg";
import cap from "../assets/cap.jpg";
import image2 from "../assets/image-2.jpg";
import img1 from "../assets/chapo.jpg";
import img2 from "../assets/IMG-20260308-WA0036.jpg";

export const products = [
  // CAPS
  {
    id: 1,
    name: "Classic Snapback - Black",
    category: "caps",
    price: 4500,
    image: black,
    color: "Black",
    style: "snapback",
    description: "Iconic black snapback with embroidered logo",
    sizes: ["One Size"],
  },
  {
    id: 2,
    name: "Classic Snapback - White",
    category: "caps",
    price: 4500,
    image: white,
    color: "White",
    style: "snapback",
    description: "Clean white snapback for urban style",
    sizes: ["One Size"],
  },
  {
    id: 3,
    name: "Dad Hat - Blue",
    category: "caps",
    price: 4200,
    image: blue,
    color: "Blue",
    style: "dad-hat",
    description: "Premium dad hat with curved visor",
    sizes: ["One Size"],
  },
  {
    id: 4,
    name: "Dad Hat - Red",
    category: "caps",
    price: 4200,
    image: red,
    color: "Red",
    style: "dad-hat",
    description: "Bold red dad hat for statement looks",
    sizes: ["One Size"],
  },
  {
    id: 5,
    name: "Mesh Trucker - Black",
    category: "caps",
    price: 6800,
    image: cap,
    color: "Black",
    style: "trucker",
    description: "Breathable mesh trucker with gold accents",
    sizes: ["One Size"],
  },
  {
    id: 6,
    name: "Gold Visor Snapback - Black",
    category: "caps",
    price: 6200,
    image: brown,
    color: "Black",
    style: "snapback",
    description: "Premium black snapback with gold visor detail",
    sizes: ["One Size"],
  },

  // APPAREL
  {
    id: 7,
    name: "Classic Tee - Black",
    category: "apparel",
    price: 6500,
    image: img1,
    color: "Black",
    style: "tee",
    description: "Premium cotton black tee with large front logo",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: 8,
    name: "Classic Tee - White",
    category: "apparel",
    price: 6500,
    image: img2,
    color: "White",
    style: "tee",
    description: "Clean white tee with embroidered logo",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: 9,
    name: "Oversized Hoodie - Black",
    category: "apparel",
    price: 7500,
    image: image2,
    color: "Black",
    style: "hoodie",
    description: "Oversized street-style hoodie with large back graphic",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: 10,
    name: "Street Jacket - Black",
    category: "apparel",
    price: 6500,
    image: orange,
    color: "Black",
    style: "jacket",
    description: "Premium black windbreaker with reflective logo",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: 11,
    name: "Premium Tee - Gold Print",
    category: "apparel",
    price: 4200,
    image: yellow,
    color: "Black",
    style: "tee",
    description: "Black tee with exclusive gold foil print",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: 12,
    name: "Sweatpants - Black",
    category: "apparel",
    price: 6500,
    image: green,
    color: "Black",
    style: "pants",
    description: "Premium joggers with side stripe detail",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
];

export const latestDrops = products.slice(0, 6);

export const colors = ["Black", "White", "Blue", "Red", "Gold"];
export const styles = [
  "snapback",
  "dad-hat",
  "trucker",
  "tee",
  "hoodie",
  "jacket",
];
export const categories = ["caps", "apparel"];
