const foodDetailsContainer = document.getElementById('food-details-container');

const urlParams = new URLSearchParams(window.location.search);
const foodId = urlParams.get('id');

const food = foodData.find(f => f.id == foodId);

if (food) {
    foodDetailsContainer.innerHTML = `
        <div class="md:flex md:space-x-8">
            <div class="md:w-1/2">
                <img src="${food.image}" alt="${food.name}" class="w-full h-auto rounded-lg shadow-md">
            </div>
            <div class="md:w-1/2 mt-4 md:mt-0">
                <h1 class="text-4xl font-bold mb-4">${food.name}</h1>
                <p class="text-2xl text-yellow-600 font-semibold mb-4">$${food.price.toFixed(2)}</p>
                <p class="text-lg text-gray-600 mb-4">Rating: ${food.rating} / 5</p>
                <p class="text-gray-700 leading-relaxed mb-6">${food.description}</p>
                <button id="order-now-btn" class="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">Order Now</button>
            </div>
        </div>
    `;

    const orderNowBtn = document.getElementById('order-now-btn');
    orderNowBtn.addEventListener('click', () => {
        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        const order = {
            foodName: food.name,
            orderDate: new Date().toLocaleDateString(),
            totalAmount: food.price
        };
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));
        alert('Order placed successfully!');
        window.location.href = 'orders.html';
    });

} else {
    foodDetailsContainer.innerHTML = '<p class="text-center text-red-500">Food item not found.</p>';
}
