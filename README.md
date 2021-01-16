# BelvinsStore
Belvins Stores is an eCommerce web app, specially built to help user(customer) find and order available trendy wears to stand out in outings. There is also an admin interface for a superuser to set up the fashion designs forpotential clients and recieve orders

## Getting Started

# SETUP
Fork the repo. 
Clone the repo.
-------------
`git clone https://github.com/jobafash/BelvinsStore.git`
`cd BelvinsStore
## Prerequisites
The following tools will be needed to run this application successfully:
* Node v12 or above
* Npm v6.4 or above
## Endpoints
- GET **/api/products** Users can get all the products(with pagination) in the database
- POST **/api/products** Admin can create products.
- POST **/api/products/:id/reviews** Users can create a product review.
- GET **/api/products/top** Users can get the top products(with pagination) in the database
- GET **/api/products/:id** Users can get a product by the ID in the database
- PUT **/api/products/:id** Admin can update a product by the ID in the database
- DELETE **/api/products/:id** Admin can delete a product by the ID in the database
- POST **/api/users** User can create an account
- GET **/api/users** Admin can get all the user accounts in the database
- POST **/api/users/login** User can login to their account
- GET **/api/users/profile** User can view their profile
- PUT **/api/users/profile** User can update their profile
- GET **/api/users/:id** Admin can get a user by ID
- PUT **/api/users/:id** Admin can update a user by ID
- DELETE **/api/users/:id** Admin can delete a user by ID
- GET **/api/orders** Admin can get all the orders made.
- POST **/api/orders** Users can create an order after making selections.
- GET **/api/orders/myorders** User can get all their orders
- GET **/api/orders/:id** User can get an order by the ID.
- PUT **/api/orders/:id/pay** Update an order to paid using the ID.
- PUT **/api/orders/:id/deliver** Admin can update an order to delivered using the ID.
- POST **/api/upload** Upload a single image

## INSTALLATION INSTRUCTION
**On your Local Machine**
- Run `npm install` to install all dependencies
- Copy env.example to .env
- Use `npm run dev` to start the client(npm run client) and server(npm run server) concurrently
- `npm run data:import` to seed the database
- `npm run data:destroy` to destroy seeded data
- Access endpoints on **localhost:3000** for client and **localhost:5000** for server

## Built With
* [Node.js](http://www.nodejs.org/) - Runtime-Enviroment

## Authors
* **Oluwajoba Fashogbon**
