const ordersContainer = document.getElementById('orders-container');

const orders = JSON.parse(localStorage.getItem('orders')) || [];

if (orders.length > 0) {
    orders.forEach(order => {
        const orderCard = document.createElement('div');
        orderCard.className = 'bg-white shadow-lg rounded-lg p-6 mb-6';
        orderCard.innerHTML = `
            <div class="flex justify-between items-center">
                <div>
                    <h2 class="text-2xl font-bold text-gray-800">${order.foodName}</h2>
                    <p class="text-gray-600">Order Date: ${order.orderDate}</p>
                </div>
                <p class="text-2xl font-semibold text-yellow-600">$${order.totalAmount.toFixed(2)}</p>
            </div>
        `;
        ordersContainer.appendChild(orderCard);
    });
} else {
    ordersContainer.innerHTML = '<p class="text-center text-gray-500">You have no orders yet.</p>';
}
