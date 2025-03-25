import img from './assets/burger.jpg'


export const FETCH_MENU_URL =  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=" 

export const product = [

  { id: 1, name: "Burger", price: 100, quantity: 10, image: img, category: "Fast Food" },
  { id: 2, name: "Cheeseburger", price: 160, quantity: 19, image: img, category: "Fast Food" },
  { id: 3, name: "Pizza", price: 200, quantity: 20, image: img, category: "Fast Food" },
  { id: 4, name: "Hot Dog", price: 140, quantity: 17, image:img, category: "Fast Food" },
  { id: 5, name: "Fries", price: 80, quantity: 25, image: img,category: "Fast Food" },
  { id: 6, name: "Chicken Wings", price: 170, quantity: 20, image: img, category: "Fast Food" },
  { id: 7, name: "Burrito", price: 190, quantity: 16, image: img, category: "Fast Food" },

  // 🥗 Healthy & Salads
  { id: 8, name: "Salad", price: 120, quantity: 15, image: img, category: "Healthy" },
  { id: 9, name: "Grilled Chicken", price: 250, quantity: 12, image: img, category: "Healthy" },
  { id: 10, name: "Falafel", price: 160, quantity: 23, image: img, category: "Healthy" },

  // 🍝 Italian
  { id: 11, name: "Pasta", price: 150, quantity: 15, image: img, category: "Italian" },
  { id: 12, name: "Lasagna", price: 280, quantity: 14, image: img, category: "Italian" },
  { id: 13, name: "Mac & Cheese", price: 200, quantity: 12, image: img, category: "Italian" },

  // 🍣 Asian
  { id: 14, name: "Sushi", price: 250, quantity: 10, image: img, category: "Asian" },
  { id: 15, name: "Noodles", price: 130, quantity: 22, image: img, category: "Asian" },
  { id: 16, name: "Fried Rice", price: 180, quantity: 21, image: img, category: "Asian" },
  { id: 17, name: "Gyoza", price: 180, quantity: 18, image: img, category: "Asian" },

  // 🍩 Desserts
  { id: 18, name: "Doughnut", price: 90, quantity: 30, image:img, category: "Dessert" },
  { id: 19, name: "Ice Cream", price: 110, quantity: 28, image: img, category: "Dessert" },
  { id: 20, name: "Chocolate Cake", price: 220, quantity: 11, image: img, category: "Dessert" },
  { id: 21, name: "Cookies", price: 60, quantity: 26, image:img, category: "Dessert" },
  { id: 22, name: "Cupcake", price: 95, quantity: 27, image: img, category: "Dessert" },
  { id: 23, name: "Pancakes", price: 130, quantity: 14, image: img, category: "Dessert" },
  { id: 24, name: "Waffles", price: 140, quantity: 13, image:img, category: "Dessert" },
  { id: 25, name: "Muffins", price: 85, quantity: 29, image: img, category: "Dessert" },

  // 🥤 Drinks
  { id: 26, name: "Smoothie", price: 100, quantity: 24, image: img, category: "Drinks" },
  { id: 27, name: "Milkshake", price: 120, quantity: 20, image:img, category: "Drinks" },
  { id: 28, name: "Lemonade", price: 90, quantity: 25, image: img, category: "Drinks" },
  { id: 29, name: "Cold Coffee", price: 130, quantity: 18, image: img, category: "Drinks" },
  { id: 30, name: "Iced Tea", price: 95, quantity: 22, image: img, category: "Drinks" },
];

