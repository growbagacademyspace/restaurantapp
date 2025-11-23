
const foodData = [
  {
    "id": 1,
    "name": "Pizza",
    "image": "images/pizza.jpg",
    "price": 12.99,
    "rating": 4.5,
    "description": "A classic cheese pizza with a crispy crust and tangy tomato sauce."
  },
  {
    "id": 2,
    "name": "Burger",
    "image": "images/burger.jpg",
    "price": 8.99,
    "rating": 4.2,
    "description": "A juicy beef patty with lettuce, tomato, and a special sauce."
  },
  {
    "id": 3,
    "name": "Pasta",
    "image": "images/pasta.jpg",
    "price": 10.50,
    "rating": 4.8,
    "description": "Spaghetti with a rich and flavorful bolognese sauce."
  },
  {
    "id": 4,
    "name": "Sushi",
    "image": "images/sushi.jpg",
    "price": 15.00,
    "rating": 4.9,
    "description": "A selection of fresh and delicious sushi rolls."
  },
  {
    "id": 5,
    "name": "Tacos",
    "image": "images/tacos.jpg",
    "price": 7.50,
    "rating": 4.4,
    "description": "Crispy tacos with seasoned ground beef, lettuce, and cheese."
  },
  {
    "id": 6,
    "name": "Salad",
    "image": "images/salad.jpg",
    "price": 6.99,
    "rating": 4.1,
    "description": "A fresh and healthy salad with a variety of greens and vegetables."
  },
  {
    "id": 7,
    "name": "Steak",
    "image": "images/steak.jpg",
    "price": 22.99,
    "rating": 4.7,
    "description": "A tender and juicy steak cooked to perfection."
  },
  {
    "id": 8,
    "name": "Ramen",
    "image": "images/ramen.jpg",
    "price": 11.50,
    "rating": 4.6,
    "description": "A warm and comforting bowl of ramen with a flavorful broth."
  },
  {
    "id": 9,
    "name": "Ice Cream",
    "image": "images/ice-cream.jpg",
    "price": 4.99,
    "rating": 4.9,
    "description": "A scoop of creamy and delicious vanilla ice cream."
  },
  {
    "id": 10,
    "name": "Cake",
    "image": "images/cake.jpg",
    "price": 5.50,
    "rating": 4.8,
    "description": "A slice of rich and decadent chocolate cake."
  },
  {
    "id": 11,
    "name": "Pancakes",
    "image": "images/pancakes.jpg",
    "price": 7.99,
    "rating": 4.3,
    "description": "Fluffy pancakes with maple syrup and fresh berries."
  },
  {
    "id": 12,
    "name": "Waffles",
    "image": "images/waffles.jpg",
    "price": 8.50,
    "rating": 4.4,
    "description": "Crispy waffles with whipped cream and chocolate sauce."
  },
  {
    "id": 13,
    "name": "French Toast",
    "image": "images/french-toast.jpg",
    "price": 7.75,
    "rating": 4.2,
    "description": "Thick slices of bread soaked in a cinnamon-vanilla batter and cooked to golden perfection."
  },
  {
    "id": 14,
    "name": "Omelette",
    "image": "images/omelette.jpg",
    "price": 9.25,
    "rating": 4.5,
    "description": "A fluffy omelette with your choice of fillings."
  },
  {
    "id": 15,
    "name": "Bacon and Eggs",
    "image": "images/bacon-and-eggs.jpg",
    "price": 8.99,
    "rating": 4.6,
    "description": "A classic breakfast of crispy bacon and perfectly cooked eggs."
  },
  {
    "id": 16,
    "name": "Sausage and Eggs",
    "image": "images/sausage-and-eggs.jpg",
    "price": 8.99,
    "rating": 4.5,
    "description": "A hearty breakfast of savory sausage and eggs."
  },
  {
    "id": 17,
    "name": "Breakfast Burrito",
    "image": "images/breakfast-burrito.jpg",
    "price": 9.50,
    "rating": 4.7,
    "description": "A warm tortilla filled with scrambled eggs, cheese, and your choice of meat."
  },
  {
    "id": 18,
    "name": "Smoothie",
    "image": "images/smoothie.jpg",
    "price": 6.50,
    "rating": 4.8,
    "description": "A refreshing and healthy smoothie made with fresh fruits and yogurt."
  },
  {
    "id": 19,
    "name": "Coffee",
    "image": "images/coffee.jpg",
    "price": 3.50,
    "rating": 4.9,
    "description": "A hot and fresh cup of coffee to start your day."
  },
  {
    "id": 20,
    "name": "Tea",
    "image": "images/tea.jpg",
    "price": 3.00,
    "rating": 4.7,
    "description": "A warm and comforting cup of tea."
  },
  {
    "id": 21,
    "name": "Orange Juice",
    "image": "images/orange-juice.jpg",
    "price": 4.00,
    "rating": 4.6,
    "description": "A glass of freshly squeezed orange juice."
  },
  {
    "id": 22,
    "name": "Apple Juice",
    "image": "images/apple-juice.jpg",
    "price": 4.00,
    "rating": 4.5,
    "description": "A glass of sweet and refreshing apple juice."
  },
  {
    "id": 23,
    "name": "Milk",
    "image": "images/milk.jpg",
    "price": 2.50,
    "rating": 4.8,
    "description": "A cold and refreshing glass of milk."
  },
  {
    "id": 24,
    "name": "Chocolate Milk",
    "image": "images/chocolate-milk.jpg",
    "price": 3.00,
    "rating": 4.9,
    "description": "A sweet and creamy glass of chocolate milk."
  },
  {
    "id": 25,
    "name": "Hot Chocolate",
    "image": "images/hot-chocolate.jpg",
    "price": 4.50,
    "rating": 4.7,
    "description": "A warm and comforting cup of hot chocolate."
  },
  {
    "id": 26,
    "name": "Chicken Sandwich",
    "image": "images/chicken-sandwich.jpg",
    "price": 9.50,
    "rating": 4.4,
    "description": "A grilled chicken sandwich with lettuce, tomato, and mayo."
  },
  {
    "id": 27,
    "name": "Club Sandwich",
    "image": "images/club-sandwich.jpg",
    "price": 10.50,
    "rating": 4.6,
    "description": "A triple-decker sandwich with turkey, bacon, lettuce, and tomato."
  },
  {
    "id": 28,
    "name": "BLT Sandwich",
    "image": "images/blt-sandwich.jpg",
    "price": 8.99,
    "rating": 4.3,
    "description": "A classic sandwich with crispy bacon, fresh lettuce, and ripe tomato."
  },
  {
    "id": 29,
    "name": "Grilled Cheese Sandwich",
    "image": "images/grilled-cheese-sandwich.jpg",
    "price": 7.50,
    "rating": 4.5,
    "description": "A warm and gooey grilled cheese sandwich."
  },
  {
    "id": 30,
    "name": "Tuna Melt Sandwich",
    "image": "images/tuna-melt-sandwich.jpg",
    "price": 8.75,
    "rating": 4.2,
    "description": "A delicious tuna melt sandwich with melted cheese."
  },
  {
    "id": 31,
    "name": "Philly Cheesesteak Sandwich",
    "image": "images/philly-cheesesteak-sandwich.jpg",
    "price": 11.25,
    "rating": 4.7,
    "description": "A classic Philly cheesesteak with thinly sliced beef and melted cheese."
  },
  {
    "id": 32,
    "name": "French Dip Sandwich",
    "image": "images/french-dip-sandwich.jpg",
    "price": 10.99,
    "rating": 4.6,
    "description": "A savory French dip sandwich with a side of au jus."
  },
  {
    "id": 33,
    "name": "Reuben Sandwich",
    "image": "images/reuben-sandwich.jpg",
    "price": 10.75,
    "rating": 4.5,
    "description": "A classic Reuben sandwich with corned beef, Swiss cheese, and sauerkraut."
  },
  {
    "id": 34,
    "name": "Hot Dog",
    "image": "images/hot-dog.jpg",
    "price": 6.50,
    "rating": 4.1,
    "description": "A classic hot dog with your choice of toppings."
  },
  {
    "id": 35,
    "name": "Chili Dog",
    "image": "images/chili-dog.jpg",
    "price": 7.50,
    "rating": 4.3,
    "description": "A delicious chili dog with a meaty chili sauce and shredded cheese."
  },
  {
    "id": 36,
    "name": "Corn Dog",
    "image": "images/corn-dog.jpg",
    "price": 5.99,
    "rating": 4.2,
    "description": "A crispy and delicious corn dog."
  },
  {
    "id": 37,
    "name": "Onion Rings",
    "image": "images/onion-rings.jpg",
    "price": 4.99,
    "rating": 4.4,
    "description": "A side of crispy and delicious onion rings."
  },
  {
    "id": 38,
    "name": "French Fries",
    "image": "images/french-fries.jpg",
    "price": 3.99,
    "rating": 4.5,
    "description": "A side of classic and crispy french fries."
  },
  {
    "id": 39,
    "name": "Tater Tots",
    "image": "images/tater-tots.jpg",
    "price": 4.50,
    "rating": 4.3,
    "description": "A side of crispy and delicious tater tots."
  },
  {
    "id": 40,
    "name": "Mozzarella Sticks",
    "image": "images/mozzarella-sticks.jpg",
    "price": 6.99,
    "rating": 4.6,
    "description": "A side of gooey and delicious mozzarella sticks."
  },
  {
    "id": 41,
    "name": "Chicken Wings",
    "image": "images/chicken-wings.jpg",
    "price": 10.99,
    "rating": 4.7,
    "description": "A plate of crispy and delicious chicken wings."
  },
  {
    "id": 42,
    "name": "Nachos",
    "image": "images/nachos.jpg",
    "price": 9.99,
    "rating": 4.5,
    "description": "A plate of loaded nachos with cheese, jalapenos, and sour cream."
  },
  {
    "id": 43,
    "name": "Quesadilla",
    "image": "images/quesadilla.jpg",
    "price": 8.50,
    "rating": 4.4,
    "description": "A cheesy and delicious quesadilla."
  },
  {
    "id": 44,
    "name": "Burrito",
    "image": "images/burrito.jpg",
    "price": 10.25,
    "rating": 4.6,
    "description": "A large and filling burrito with your choice of fillings."
  },
  {
    "id": 45,
    "name": "Enchiladas",
    "image": "images/enchiladas.jpg",
    "price": 11.50,
    "rating": 4.7,
    "description": "A plate of cheesy and delicious enchiladas."
  },
  {
    "id": 46,
    "name": "Fajitas",
    "image": "images/fajitas.jpg",
    "price": 12.99,
    "rating": 4.8,
    "description": "A sizzling plate of fajitas with your choice of meat."
  },
  {
    "id": 47,
    "name": "Tamales",
    "image": "images/tamales.jpg",
    "price": 9.75,
    "rating": 4.5,
    "description": "A plate of warm and delicious tamales."
  },
  {
    "id": 48,
    "name": "Pozole",
    "image": "images/pozole.jpg",
    "price": 10.99,
    "rating": 4.6,
    "description": "A warm and comforting bowl of pozole."
  },
  {
    "id": 49,
    "name": "Menudo",
    "image": "images/menudo.jpg",
    "price": 10.99,
    "rating": 4.4,
    "description": "A traditional Mexican soup with a flavorful broth."
  },
  {
    "id": 50,
    "name": "Birria",
    "image": "images/birria.jpg",
    "price": 12.50,
    "rating": 4.8,
    "description": "A plate of tender and juicy birria."
  },
  {
    "id": 51,
    "name": "Ceviche",
    "image": "images/ceviche.jpg",
    "price": 13.99,
    "rating": 4.7,
    "description": "A refreshing and delicious ceviche."
  },
  {
    "id": 52,
    "name": "Aguachile",
    "image": "images/aguachile.jpg",
    "price": 14.50,
    "rating": 4.6,
    "description": "A spicy and flavorful aguachile."
  },
  {
    "id": 53,
    "name": "Coctel de Camaron",
    "image": "images/coctel-de-camaron.jpg",
    "price": 11.99,
    "rating": 4.5,
    "description": "A delicious and refreshing shrimp cocktail."
  },
  {
    "id": 54,
    "name": "Fish Tacos",
    "image": "images/fish-tacos.jpg",
    "price": 9.75,
    "rating": 4.7,
    "description": "A plate of crispy and delicious fish tacos."
  },
  {
    "id": 55,
    "name": "Shrimp Tacos",
    "image": "images/shrimp-tacos.jpg",
    "price": 10.50,
    "rating": 4.8,
    "description": "A plate of delicious and flavorful shrimp tacos."
  },
  {
    "id": 56,
    "name": "Lobster Roll",
    "image": "images/lobster-roll.jpg",
    "price": 18.99,
    "rating": 4.9,
    "description": "A classic lobster roll with a buttery and toasted bun."
  },
  {
    "id": 57,
    "name": "Crab Cakes",
    "image": "images/crab-cakes.jpg",
    "price": 16.50,
    "rating": 4.6,
    "description": "A plate of delicious and flavorful crab cakes."
  },
  {
    "id": 58,
    "name": "Clam Chowder",
    "image": "images/clam-chowder.jpg",
    "price": 8.99,
    "rating": 4.7,
    "description": "A warm and creamy bowl of clam chowder."
  },
  {
    "id": 59,
    "name": "Lobster Bisque",
    "image": "images/lobster-bisque.jpg",
    "price": 9.50,
    "rating": 4.8,
    "description": "A rich and creamy lobster bisque."
  },
  {
    "id": 60,
    "name": "Gumbo",
    "image": "images/gumbo.jpg",
    "price": 11.25,
    "rating": 4.5,
    "description": "A warm and hearty bowl of gumbo."
  },
  {
    "id": 61,
    "name": "Jambalaya",
    "image": "images/jambalaya.jpg",
    "price": 12.75,
    "rating": 4.6,
    "description": "A flavorful and spicy jambalaya."
  },
  {
    "id": 62,
    "name": "Étouffée",
    "image": "images/etouffee.jpg",
    "price": 13.50,
    "rating": 4.7,
    "description": "A rich and flavorful étouffée."
  },
  {
    "id": 63,
    "name": "Red Beans and Rice",
    "image": "images/red-beans-and-rice.jpg",
    "price": 9.99,
    "rating": 4.4,
    "description": "A classic and hearty dish of red beans and rice."
  },
  {
    "id": 64,
    "name": "Muffuletta Sandwich",
    "image": "images/muffuletta-sandwich.jpg",
    "price": 12.99,
    "rating": 4.8,
    "description": "A classic New Orleans sandwich with a variety of meats and cheeses."
  },
  {
    "id": 65,
    "name": "Po' Boy Sandwich",
    "image": "images/po-boy-sandwich.jpg",
    "price": 11.75,
    "rating": 4.7,
    "description": "A classic New Orleans sandwich with your choice of fried seafood."
  },
  {
    "id": 66,
    "name": "Beignets",
    "image": "images/beignets.jpg",
    "price": 6.50,
    "rating": 4.9,
    "description": "A plate of warm and fluffy beignets."
  },
  {
    "id": 67,
    "name": "King Cake",
    "image": "images/king-cake.jpg",
    "price": 7.99,
    "rating": 4.6,
    "description": "A traditional New Orleans cake with a sweet and colorful icing."
  },
  {
    "id": 68,
    "name": "Pralines",
    "image": "images/pralines.jpg",
    "price": 5.50,
    "rating": 4.8,
    "description": "A sweet and nutty praline."
  },
  {
    "id": 69,
    "name": "Fried Chicken",
    "image": "images/fried-chicken.jpg",
    "price": 10.99,
    "rating": 4.5,
    "description": "A plate of crispy and juicy fried chicken."
  },
  {
    "id": 70,
    "name": "Mac and Cheese",
    "image": "images/mac-and-cheese.jpg",
    "price": 8.50,
    "rating": 4.6,
    "description": "A warm and cheesy bowl of mac and cheese."
  },
  {
    "id": 71,
    "name": "Collard Greens",
    "image": "images/collard-greens.jpg",
    "price": 5.99,
    "rating": 4.3,
    "description": "A side of savory and flavorful collard greens."
  },
  {
    "id": 72,
    "name": "Cornbread",
    "image": "images/cornbread.jpg",
    "price": 4.50,
    "rating": 4.7,
    "description": "A warm and delicious piece of cornbread."
  },
  {
    "id": 73,
    "name": "Mashed Potatoes and Gravy",
    "image": "images/mashed-potatoes-and-gravy.jpg",
    "price": 6.99,
    "rating": 4.5,
    "description": "A comforting side of mashed potatoes and gravy."
  },
  {
    "id": 74,
    "name": "Biscuits and Gravy",
    "image": "images/biscuits-and-gravy.jpg",
    "price": 7.50,
    "rating": 4.6,
    "description": "A classic southern breakfast of biscuits and gravy."
  },
  {
    "id": 75,
    "name": "Chicken Fried Steak",
    "image": "images/chicken-fried-steak.jpg",
    "price": 13.25,
    "rating": 4.4,
    "description": "A hearty and delicious chicken fried steak."
  },
  {
    "id": 76,
    "name": "Grits",
    "image": "images/grits.jpg",
    "price": 5.25,
    "rating": 4.2,
    "description": "A warm and creamy bowl of grits."
  },
  {
    "id": 77,
    "name": "Shrimp and Grits",
    "image": "images/shrimp-and-grits.jpg",
    "price": 12.50,
    "rating": 4.7,
    "description": "A classic southern dish of shrimp and grits."
  },
  {
    "id": 78,
    "name": "Fried Green Tomatoes",
    "image": "images/fried-green-tomatoes.jpg",
    "price": 7.75,
    "rating": 4.5,
    "description": "A plate of crispy and delicious fried green tomatoes."
  },
  {
    "id": 79,
    "name": "Hush Puppies",
    "image": "images/hush-puppies.jpg",
    "price": 5.50,
    "rating": 4.3,
    "description": "A side of crispy and delicious hush puppies."
  },
  {
    "id": 80,
    "name": "Okra",
    "image": "images/okra.jpg",
    "price": 6.25,
    "rating": 4.1,
    "description": "A side of savory and flavorful okra."
  },
  {
    "id": 81,
    "name": "Black-Eyed Peas",
    "image": "images/black-eyed-peas.jpg",
    "price": 5.75,
    "rating": 4.2,
    "description": "A side of hearty and delicious black-eyed peas."
  },
  {
    "id": 82,
    "name": "Sweet Potato Pie",
    "image": "images/sweet-potato-pie.jpg",
    "price": 6.99,
    "rating": 4.8,
    "description": "A slice of sweet and delicious sweet potato pie."
  },
  {
    "id": 83,
    "name": "Pecan Pie",
    "image": "images/pecan-pie.jpg",
    "price": 7.50,
    "rating": 4.9,
    "description": "A slice of rich and decadent pecan pie."
  },
  {
    "id": 84,
    "name": "Key Lime Pie",
    "image": "images/key-lime-pie.jpg",
    "price": 6.75,
    "rating": 4.7,
    "description": "A slice of tangy and refreshing key lime pie."
  },
  {
    "id": 85,
    "name": "Banana Pudding",
    "image": "images/banana-pudding.jpg",
    "price": 5.99,
    "rating": 4.6,
    "description": "A creamy and delicious banana pudding."
  },
  {
    "id": 86,
    "name": "Peach Cobbler",
    "image": "images/peach-cobbler.jpg",
    "price": 6.50,
    "rating": 4.8,
    "description": "A warm and delicious peach cobbler."
  },
  {
    "id": 87,
    "name": "Apple Pie",
    "image": "images/apple-pie.jpg",
    "price": 6.25,
    "rating": 4.7,
    "description": "A classic and delicious apple pie."
  },
  {
    "id": 88,
    "name": "Cheesecake",
    "image": "images/cheesecake.jpg",
    "price": 7.25,
    "rating": 4.9,
    "description": "A rich and creamy cheesecake."
  },
  {
    "id": 89,
    "name": "Brownies",
    "image": "images/brownies.jpg",
    "price": 5.75,
    "rating": 4.8,
    "description": "A warm and fudgy brownie."
  },
  {
    "id": 90,
    "name": "Cookies",
    "image": "images/cookies.jpg",
    "price": 4.99,
    "rating": 4.7,
    "description": "A plate of warm and delicious cookies."
  },
  {
    "id": 91,
    "name": "Donuts",
    "image": "images/donuts.jpg",
    "price": 3.50,
    "rating": 4.6,
    "description": "A sweet and delicious donut."
  },
  {
    "id": 92,
    "name": "Muffins",
    "image": "images/muffins.jpg",
    "price": 4.25,
    "rating": 4.5,
    "description": "A warm and delicious muffin."
  },
  {
    "id": 93,
    "name": "Croissants",
    "image": "images/croissants.jpg",
    "price": 4.75,
    "rating": 4.8,
    "description": "A flaky and delicious croissant."
  },
  {
    "id": 94,
    "name": "Bagels",
    "image": "images/bagels.jpg",
    "price": 3.99,
    "rating": 4.4,
    "description": "A warm and chewy bagel."
  },
  {
    "id": 95,
    "name": "Scones",
    "image": "images/scones.jpg",
    "price": 4.50,
    "rating": 4.3,
    "description": "A warm and delicious scone."
  },
  {
    "id": 96,
    "name": "Biscotti",
    "image": "images/biscotti.jpg",
    "price": 3.75,
    "rating": 4.2,
    "description": "A crunchy and delicious biscotti."
  },
  {
    "id": 97,
    "name": "Macarons",
    "image": "images/macarons.jpg",
    "price": 5.25,
    "rating": 4.9,
    "description": "A plate of colorful and delicious macarons."
  },
  {
    "id": 98,
    "name": "Tiramisu",
    "image": "images/tiramisu.jpg",
    "price": 7.99,
    "rating": 4.8,
    "description": "A classic and delicious tiramisu."
  },
  {
    "id": 99,
    "name": "Crème Brûlée",
    "image": "images/creme-brulee.jpg",
    "price": 8.50,
    "rating": 4.9,
    "description": "A rich and creamy crème brûlée."
  },
  {
    "id": 100,
    "name": "Cannoli",
    "image": "images/cannoli.jpg",
    "price": 6.75,
    "rating": 4.7,
    "description": "A crispy and delicious cannoli."
  }
];
