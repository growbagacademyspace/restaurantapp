
const foodData = [
  {
    "id": 1,
    "name": "Pizza",
    "image": "images/pizza.jpg",
    "price": 12.99,
    "rating": 4.5,
    "category": "Italian",
    "description": "A classic cheese pizza with a crispy crust and tangy tomato sauce. Made with fresh, hand-tossed dough, our pizza is generously topped with a blend of mozzarella and provolone cheeses. The rich, savory tomato sauce is seasoned with a secret blend of herbs and spices, creating a truly authentic Italian flavor. Perfect for sharing with family and friends, or enjoying all to yourself."
  },
  {
    "id": 2,
    "name": "Burger",
    "image": "images/burger.jpg",
    "price": 8.99,
    "rating": 4.2,
    "category": "American",
    "description": "A juicy beef patty with lettuce, tomato, and a special sauce. Our burgers are made from 100% all-beef patties, grilled to perfection to lock in the flavor. Served on a toasted brioche bun with crisp lettuce, ripe tomatoes, and our signature house sauce, this burger is a true American classic. It's a satisfying meal that will leave you wanting more."
  },
  {
    "id": 3,
    "name": "Pasta",
    "image": "images/pasta.jpg",
    "price": 10.50,
    "rating": 4.8,
    "category": "Italian",
    "description": "Spaghetti with a rich and flavorful bolognese sauce. Our bolognese sauce is slow-cooked for hours to develop a deep, complex flavor. Made with a combination of ground beef and pork, tomatoes, and a secret blend of herbs and spices, this sauce is the perfect complement to our perfectly cooked spaghetti. A timeless Italian dish that is sure to please."
  },
  {
    "id": 4,
    "name": "Sushi",
    "image": "images/sushi.jpg",
    "price": 15.00,
    "rating": 4.9,
    "category": "Japanese",
    "description": "A selection of fresh and delicious sushi rolls. Our sushi is made with the freshest, highest-quality ingredients, including premium sushi rice and a variety of seafood. From classic California rolls to more adventurous options, there's something for everyone to enjoy. Each roll is a work of art, as beautiful as it is delicious."
  },
  {
    "id": 5,
    "name": "Tacos",
    "image": "images/tacos.jpg",
    "price": 7.50,
    "rating": 4.4,
    "category": "Mexican",
    "description": "Crispy tacos with seasoned ground beef, lettuce, and cheese. Our tacos feature a crispy corn tortilla shell filled with seasoned ground beef, crisp shredded lettuce, and a generous topping of shredded cheddar cheese. A fun and flavorful meal that's perfect for a quick and easy dinner. A true taste of Mexico."
  },
  {
    "id": 6,
    "name": "Salad",
    "image": "images/salad.jpg",
    "price": 6.99,
    "rating": 4.1,
    "category": "Healthy",
    "description": "A fresh and healthy salad with a variety of greens and vegetables. Our salad is a vibrant mix of crisp lettuce, juicy tomatoes, crunchy cucumbers, and other fresh vegetables. Tossed in a light and refreshing vinaigrette, it's the perfect way to start your meal or enjoy as a light and healthy main course. A healthy and delicious option."
  },
  {
    "id": 7,
    "name": "Steak",
    "image": "images/steak.jpg",
    "price": 22.99,
    "rating": 4.7,
    "category": "American",
    "description": "A tender and juicy steak cooked to perfection. Our steaks are hand-cut from the finest quality beef and grilled to your liking. Seasoned with a simple yet flavorful blend of salt and pepper, the natural flavor of the beef shines through. Served with your choice of sides, it's a meal that's sure to impress."
  },
  {
    "id": 8,
    "name": "Ramen",
    "image": "images/ramen.jpg",
    "price": 11.50,
    "rating": 4.6,
    "category": "Japanese",
    "description": "A warm and comforting bowl of ramen with a flavorful broth. Our ramen features a rich and savory broth, tender noodles, and a variety of toppings, including sliced pork, a soft-boiled egg, and fresh green onions. It's the perfect meal for a cold day, a true taste of Japan. A symphony of flavors in every spoonful."
  },
  {
    "id": 9,
    "name": "Ice Cream",
    "image": "images/ice-cream.jpg",
    "price": 4.99,
    "rating": 4.9,
    "category": "Dessert",
    "description": "A scoop of creamy and delicious vanilla ice cream. Made with real cream and vanilla beans, our ice cream is the perfect way to end your meal. Its rich and creamy texture and classic vanilla flavor are sure to satisfy your sweet tooth. A simple yet elegant dessert."
  },
  {
    "id": 10,
    "name": "Cake",
    "image": "images/cake.jpg",
    "price": 5.50,
    "rating": 4.8,
    "category": "Dessert",
    "description": "A slice of rich and decadent chocolate cake. Our chocolate cake is a chocoholic's dream come true. With layers of moist chocolate cake and rich chocolate frosting, it's a truly indulgent dessert. Perfect for a special occasion or just because. A little slice of heaven."
  },
  {
    "id": 11,
    "name": "Pancakes",
    "image": "images/pancakes.jpg",
    "price": 7.99,
    "rating": 4.3,
    "category": "Breakfast",
    "description": "Fluffy pancakes with maple syrup and fresh berries. Our pancakes are light, fluffy, and made from scratch. Served with a generous drizzle of maple syrup and a medley of fresh berries, they're the perfect way to start your day. A breakfast classic that never gets old. A delightful morning treat."
  },
  {
    "id": 12,
    "name": "Waffles",
    "image": "images/waffles.jpg",
    "price": 8.50,
    "rating": 4.4,
    "category": "Breakfast",
    "description": "Crispy waffles with whipped cream and chocolate sauce. Our waffles are crispy on the outside and fluffy on the inside. Topped with a dollop of whipped cream and a drizzle of rich chocolate sauce, they're a decadent and delicious treat. Perfect for a special breakfast or a sweet snack. An irresistible indulgence."
  },
  {
    "id": 13,
    "name": "French Toast",
    "image": "images/french-toast.jpg",
    "price": 7.75,
    "rating": 4.2,
    "category": "Breakfast",
    "description": "Thick slices of bread soaked in a cinnamon-vanilla batter and cooked to golden perfection. Our French toast is a breakfast favorite for a reason. We use thick slices of brioche bread, soaked in a rich and flavorful batter, and then griddled to a golden brown. Served with a dusting of powdered sugar and a side of maple syrup. A breakfast that feels like a dessert."
  },
  {
    "id": 14,
    "name": "Omelette",
    "image": "images/omelette.jpg",
    "price": 9.25,
    "rating": 4.5,
    "category": "Breakfast",
    "description": "A fluffy omelette with your choice of fillings. Our omelettes are made with three farm-fresh eggs and your choice of delicious fillings, including cheese, ham, bacon, and a variety of fresh vegetables. Cooked to a fluffy perfection, it's a healthy and satisfying way to start your day. A customizable breakfast classic."
  },
  {
    "id": 15,
    "name": "Bacon and Eggs",
    "image": "images/bacon-and-eggs.jpg",
    "price": 8.99,
    "rating": 4.6,
    "category": "Breakfast",
    "description": "A classic breakfast of crispy bacon and perfectly cooked eggs. Our bacon is thick-cut and cooked to a perfect crispness, and our eggs are cooked just the way you like them. It's a simple yet satisfying breakfast that's sure to get your day started on the right foot. The quintessential American breakfast."
  },
  {
    "id": 16,
    "name": "Sausage and Eggs",
    "image": "images/sausage-and-eggs.jpg",
    "price": 8.99,
    "rating": 4.5,
    "category": "Breakfast",
    "description": "A hearty breakfast of savory sausage and eggs. Our sausage patties are seasoned with a blend of herbs and spices, and our eggs are cooked to your liking. It's a hearty and flavorful breakfast that will keep you going all morning long. A classic breakfast combination."
  },
  {
    "id": 17,
    "name": "Breakfast Burrito",
    "image": "images/breakfast-burrito.jpg",
    "price": 9.50,
    "rating": 4.7,
    "category": "Breakfast",
    "description": "A warm tortilla filled with scrambled eggs, cheese, and your choice of meat. Our breakfast burritos are a delicious and convenient way to start your day. A warm flour tortilla is filled with fluffy scrambled eggs, melted cheese, and your choice of bacon, sausage, or ham. It's a complete breakfast all wrapped up in one. A perfect on-the-go meal."
  },
  {
    "id": 18,
    "name": "Smoothie",
    "image": "images/smoothie.jpg",
    "price": 6.50,
    "rating": 4.8,
    "category": "Beverage",
    "description": "A refreshing and healthy smoothie made with fresh fruits and yogurt. Our smoothies are a delicious and nutritious way to get your daily dose of fruits. We use a blend of fresh, seasonal fruits and creamy yogurt to create a smoothie that's both healthy and delicious. A great way to start your day or refuel after a workout."
  },
  {
    "id": 19,
    "name": "Coffee",
    "image": "images/coffee.jpg",
    "price": 3.50,
    "rating": 4.9,
    "category": "Beverage",
    "description": "A hot and fresh cup of coffee to start your day. Our coffee is brewed from high-quality beans, roasted to perfection to bring out the rich and complex flavors. Whether you prefer a bold and robust dark roast or a smooth and mellow medium roast, we have a coffee that's sure to please. The perfect way to kickstart your morning."
  },
  {
    "id": 20,
    "name": "Tea",
    "image": "images/tea.jpg",
    "price": 3.00,
    "rating": 4.7,
    "category": "Beverage",
    "description": "A warm and comforting cup of tea. We offer a wide selection of teas, from classic black teas to herbal and green teas. Whether you're looking for a pick-me-up in the morning or a relaxing cup before bed, we have a tea for every occasion. A soothing and aromatic beverage."
  }
];
