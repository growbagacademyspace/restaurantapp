const ordersContainer = document.getElementById('orders-container');

const orders = JSON.parse(localStorage.getItem('orders')) || [];

if (orders.length > 0) {
    orders.forEach(order => {
        const orderCard = document.createElement('div');
        orderCard.className = 'col-md-12';
        orderCard.innerHTML = `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${order.foodName}</h5>
                    <p class="card-text">Order Date: ${order.orderDate}</p>
                    <p class="card-text">Total Amount: $${order.totalAmount.toFixed(2)}</p>
                </div>
            </div>
        `;
        ordersContainer.appendChild(orderCard);
    });
} else {
    ordersContainer.innerHTML = '<p>You have no orders yet.</p>';
}
