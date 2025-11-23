const foodDetailsContainer = document.getElementById('food-details-container');

const urlParams = new URLSearchParams(window.location.search);
const foodId = urlParams.get('id');

const food = foodData.find(f => f.id == foodId);

if (food) {
    foodDetailsContainer.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <img src="${food.image}" class="img-fluid" alt="${food.name}">
            </div>
            <div class="col-md-6">
                <h2>${food.name}</h2>
                <p><strong>Price:</strong> $${food.price.toFixed(2)}</p>
                <p><strong>Rating:</strong> ${food.rating}</p>
                <p>${food.description}</p>
                <button class="btn btn-primary" id="order-now-btn">Order Now</button>
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
    foodDetailsContainer.innerHTML = '<p>Food item not found.</p>';
}
