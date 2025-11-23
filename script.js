const foodContainer = document.getElementById('food-container');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

const displayFood = (foodItems) => {
    foodContainer.innerHTML = '';
    foodItems.forEach(food => {
        const foodCard = document.createElement('div');
        foodCard.className = 'col-md-4';
        foodCard.innerHTML = `
            <div class="card food-card" data-id="${food.id}">
                <img src="${food.image}" class="card-img-top" alt="${food.name}">
                <div class="card-body">
                    <h5 class="card-title">${food.name}</h5>
                    <p class="card-text">$${food.price.toFixed(2)}</p>
                    <p class="card-text">Rating: ${food.rating}</p>
                </div>
            </div>
        `;
        foodContainer.appendChild(foodCard);
    });

    document.querySelectorAll('.food-card').forEach(card => {
        card.addEventListener('click', () => {
            const foodId = card.getAttribute('data-id');
            window.location.href = `food-details.html?id=${foodId}`;
        });
    });
};

displayFood(foodData);

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredFood = foodData.filter(food => food.name.toLowerCase().includes(searchTerm));
    displayFood(filteredFood);
});
