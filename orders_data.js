
const ordersData = [
  {
    "orderId": 1,
    "user_id": 3,
    "orderDate": "2024-07-27",
    "totalPrice": 30.97,
    "items": [
      { "foodId": 1, "quantity": 1 },
      { "foodId": 2, "quantity": 2 }
    ]
  },
  {
    "orderId": 2,
    "user_id": 8,
    "orderDate": "2024-07-27",
    "totalPrice": 55.50,
    "items": [
      { "foodId": 3, "quantity": 1 },
      { "foodId": 4, "quantity": 3 }
    ]
  },
  {
    "orderId": 3,
    "user_id": 1,
    "orderDate": "2024-07-26",
    "totalPrice": 15.00,
    "items": [
      { "foodId": 5, "quantity": 2 }
    ]
  },
  {
    "orderId": 4,
    "user_id": 5,
    "orderDate": "2024-07-26",
    "totalPrice": 36.97,
    "items": [
      { "foodId": 1, "quantity": 1 },
      { "foodId": 7, "quantity": 1 }
    ]
  },
  {
    "orderId": 5,
    "user_id": 9,
    "orderDate": "2024-07-25",
    "totalPrice": 23.00,
    "items": [
      { "foodId": 8, "quantity": 2 }
    ]
  },
  {
    "orderId": 6,
    "user_id": 2,
    "orderDate": "2024-07-25",
    "totalPrice": 15.98,
    "items": [
      { "foodId": 11, "quantity": 2 }
    ]
  },
  {
    "orderId": 7,
    "user_id": 7,
    "orderDate": "2024-07-24",
    "totalPrice": 26.49,
    "items": [
      { "foodId": 1, "quantity": 1 },
      { "foodId": 9, "quantity": 1 },
      { "foodId": 19, "quantity": 2 }
    ]
  },
  {
    "orderId": 8,
    "user_id": 4,
    "orderDate": "2024-07-24",
    "totalPrice": 17.98,
    "items": [
      { "foodId": 2, "quantity": 2 }
    ]
  },
  {
    "orderId": 9,
    "user_id": 10,
    "orderDate": "2024-07-23",
    "totalPrice": 22.50,
    "items": [
      { "foodId": 5, "quantity": 3 }
    ]
  },
  {
    "orderId": 10,
    "user_id": 6,
    "orderDate": "2024-07-23",
    "totalPrice": 13.98,
    "items": [
      { "foodId": 6, "quantity": 2 }
    ]
  },
  {
    "orderId": 11,
    "user_id": 1,
    "orderDate": "2024-07-22",
    "totalPrice": 45.98,
    "items": [
      { "foodId": 7, "quantity": 2 }
    ]
  },
  {
    "orderId": 12,
    "user_id": 5,
    "orderDate": "2024-07-22",
    "totalPrice": 14.97,
    "items": [
      { "foodId": 9, "quantity": 3 }
    ]
  },
  {
    "orderId": 13,
    "user_id": 9,
    "orderDate": "2024-07-21",
    "totalPrice": 16.50,
    "items": [
      { "foodId": 10, "quantity": 3 }
    ]
  },
  {
    "orderId": 14,
    "user_id": 3,
    "orderDate": "2024-07-21",
    "totalPrice": 17.00,
    "items": [
      { "foodId": 12, "quantity": 2 }
    ]
  },
  {
    "orderId": 15,
    "user_id": 8,
    "orderDate": "2024-07-20",
    "totalPrice": 23.25,
    "items": [
      { "foodId": 13, "quantity": 3 }
    ]
  },
  {
    "orderId": 16,
    "user_id": 2,
    "orderDate": "2024-07-20",
    "totalPrice": 27.75,
    "items": [
      { "foodId": 14, "quantity": 3 }
    ]
  },
  {
    "orderId": 17,
    "user_id": 7,
    "orderDate": "2024-07-19",
    "totalPrice": 17.98,
    "items": [
      { "foodId": 15, "quantity": 2 }
    ]
  },
  {
    "orderId": 18,
    "user_id": 4,
    "orderDate": "2024-07-19",
    "totalPrice": 17.98,
    "items": [
      { "foodId": 16, "quantity": 2 }
    ]
  },
  {
    "orderId": 19,
    "user_id": 10,
    "orderDate": "2024-07-18",
    "totalPrice": 28.50,
    "items": [
      { "foodId": 17, "quantity": 3 }
    ]
  },
  {
    "orderId": 20,
    "user_id": 6,
    "orderDate": "2024-07-18",
    "totalPrice": 13.00,
    "items": [
      { "foodId": 18, "quantity": 2 }
    ]
  },
  {
    "orderId": 21,
    "user_id": 1,
    "orderDate": "2024-07-17",
    "totalPrice": 7.00,
    "items": [
      { "foodId": 19, "quantity": 2 }
    ]
  },
  {
    "orderId": 22,
    "user_id": 5,
    "orderDate": "2024-07-17",
    "totalPrice": 6.00,
    "items": [
      { "foodId": 20, "quantity": 2 }
    ]
  },
  {
    "orderId": 23,
    "user_id": 9,
    "orderDate": "2024-07-16",
    "totalPrice": 21.98,
    "items": [
      { "foodId": 1, "quantity": 1 },
      { "foodId": 2, "quantity": 1 }
    ]
  },
  {
    "orderId": 24,
    "user_id": 3,
    "orderDate": "2024-07-16",
    "totalPrice": 25.50,
    "items": [
      { "foodId": 3, "quantity": 1 },
      { "foodId": 4, "quantity": 1 }
    ]
  },
  {
    "orderId": 25,
    "user_id": 8,
    "orderDate": "2024-07-15",
    "totalPrice": 14.49,
    "items": [
      { "foodId": 5, "quantity": 1 },
      { "foodId": 6, "quantity": 1 }
    ]
  },
  {
    "orderId": 26,
    "user_id": 2,
    "orderDate": "2024-07-15",
    "totalPrice": 34.49,
    "items": [
      { "foodId": 7, "quantity": 1 },
      { "foodId": 8, "quantity": 1 }
    ]
  },
  {
    "orderId": 27,
    "user_id": 7,
    "orderDate": "2024-07-14",
    "totalPrice": 10.49,
    "items": [
      { "foodId": 9, "quantity": 1 },
      { "foodId": 10, "quantity": 1 }
    ]
  },
  {
    "orderId": 28,
    "user_id": 4,
    "orderDate": "2024-07-14",
    "totalPrice": 16.49,
    "items": [
      { "foodId": 11, "quantity": 1 },
      { "foodId": 12, "quantity": 1 }
    ]
  },
  {
    "orderId": 29,
    "user_id": 10,
    "orderDate": "2024-07-13",
    "totalPrice": 17.00,
    "items": [
      { "foodId": 13, "quantity": 1 },
      { "foodId": 14, "quantity": 1 }
    ]
  },
  {
    "orderId": 30,
    "user_id": 6,
    "orderDate": "2024-07-13",
    "totalPrice": 17.98,
    "items": [
      { "foodId": 15, "quantity": 1 },
      { "foodId": 16, "quantity": 1 }
    ]
  },
  {
    "orderId": 31,
    "user_id": 1,
    "orderDate": "2024-07-12",
    "totalPrice": 16.00,
    "items": [
      { "foodId": 17, "quantity": 1 },
      { "foodId": 18, "quantity": 1 }
    ]
  },
  {
    "orderId": 32,
    "user_id": 5,
    "orderDate": "2024-07-12",
    "totalPrice": 6.50,
    "items": [
      { "foodId": 19, "quantity": 1 },
      { "foodId": 20, "quantity": 1 }
    ]
  },
  {
    "orderId": 33,
    "user_id": 9,
    "orderDate": "2024-07-11",
    "totalPrice": 48.95,
    "items": [
      { "foodId": 1, "quantity": 3 },
      { "foodId": 19, "quantity": 2 },
      { "foodId": 20, "quantity": 1 }
    ]
  },
  {
    "orderId": 34,
    "user_id": 3,
    "orderDate": "2024-07-11",
    "totalPrice": 45.45,
    "items": [
      { "foodId": 2, "quantity": 5 },
      { "foodId": 9, "quantity": 1 }
    ]
  },
  {
    "orderId": 35,
    "user_id": 8,
    "orderDate": "2024-07-10",
    "totalPrice": 32.00,
    "items": [
      { "foodId": 4, "quantity": 2 },
      { "foodId": 20, "quantity": 1 }
    ]
  },
  {
    "orderId": 36,
    "user_id": 2,
    "orderDate": "2024-07-10",
    "totalPrice": 22.50,
    "items": [
      { "foodId": 5, "quantity": 3 }
    ]
  },
  {
    "orderId": 37,
    "user_id": 7,
    "orderDate": "2024-07-09",
    "totalPrice": 36.97,
    "items": [
      { "foodId": 1, "quantity": 1 },
      { "foodId": 7, "quantity": 1 }
    ]
  },
  {
    "orderId": 38,
    "user_id": 4,
    "orderDate": "2024-07-09",
    "totalPrice": 34.50,
    "items": [
      { "foodId": 8, "quantity": 3 }
    ]
  },
  {
    "orderId": 39,
    "user_id": 10,
    "orderDate": "2024-07-08",
    "totalPrice": 15.98,
    "items": [
      { "foodId": 11, "quantity": 2 }
    ]
  },
  {
    "orderId": 40,
    "user_id": 6,
    "orderDate": "2024-07-08",
    "totalPrice": 25.50,
    "items": [
      { "foodId": 12, "quantity": 3 }
    ]
  },
  {
    "orderId": 41,
    "user_id": 1,
    "orderDate": "2024-07-07",
    "totalPrice": 18.50,
    "items": [
      { "foodId": 14, "quantity": 2 }
    ]
  },
  {
    "orderId": 42,
    "user_id": 5,
    "orderDate": "2024-07-07",
    "totalPrice": 19.00,
    "items": [
      { "foodId": 17, "quantity": 2 }
    ]
  },
  {
    "orderId": 43,
    "user_id": 9,
    "orderDate": "2024-07-06",
    "totalPrice": 26.00,
    "items": [
      { "foodId": 18, "quantity": 4 }
    ]
  },
  {
    "orderId": 44,
    "user_id": 3,
    "orderDate": "2024-07-06",
    "totalPrice": 14.00,
    "items": [
      { "foodId": 19, "quantity": 4 }
    ]
  },
  {
    "orderId": 45,
    "user_id": 8,
    "orderDate": "2024-07-05",
    "totalPrice": 21.98,
    "items": [
      { "foodId": 1, "quantity": 1 },
      { "foodId": 2, "quantity": 1 }
    ]
  },
  {
    "orderId": 46,
    "user_id": 2,
    "orderDate": "2024-07-05",
    "totalPrice": 25.50,
    "items": [
      { "foodId": 3, "quantity": 1 },
      { "foodId": 4, "quantity": 1 }
    ]
  },
  {
    "orderId": 47,
    "user_id": 7,
    "orderDate": "2024-07-04",
    "totalPrice": 28.97,
    "items": [
      { "foodId": 5, "quantity": 3 },
      { "foodId": 6, "quantity": 1 }
    ]
  },
  {
    "orderId": 48,
    "user_id": 4,
    "orderDate": "2024-07-04",
    "totalPrice": 45.98,
    "items": [
      { "foodId": 7, "quantity": 2 }
    ]
  },
  {
    "orderId": 49,
    "user_id": 10,
    "orderDate": "2024-07-03",
    "totalPrice": 15.49,
    "items": [
      { "foodId": 9, "quantity": 1 },
      { "foodId": 10, "quantity": 1 },
      { "foodId": 19, "quantity": 1 }
    ]
  },
  {
    "orderId": 50,
    "user_id": 6,
    "orderDate": "2024-07-03",
    "totalPrice": 24.48,
    "items": [
      { "foodId": 11, "quantity": 1 },
      { "foodId": 12, "quantity": 1 },
      { "foodId": 18, "quantity": 1 }
    ]
  }
]
