const foodContainer = document.getElementById('food-container');

const displayFood = (foodItems) => {
    foodContainer.innerHTML = '';
    foodItems.forEach(food => {
        const foodCard = document.createElement('div');
        foodCard.className = 'bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300';
        foodCard.setAttribute('data-id', food.id);
        foodCard.innerHTML = `
            <img src="${food.image}" alt="${food.name}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h2 class="text-2xl font-bold mb-2">${food.name}</h2>
                <p class="text-xl text-yellow-600 font-semibold mb-2">$${food.price.toFixed(2)}</p>
                <p class="text-gray-600">Rating: ${food.rating} / 5</p>
            </div>
        `;
        foodContainer.appendChild(foodCard);
    });

    document.querySelectorAll('.bg-white').forEach(card => {
        card.addEventListener('click', () => {
            const foodId = card.getAttribute('data-id');
            window.location.href = `food-details.html?id=${foodId}`;
        });
    });
};

displayFood(foodData);
