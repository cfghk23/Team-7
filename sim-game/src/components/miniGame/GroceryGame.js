import react from 'react'
import './groceryGame.css'

const GroceryGame = () => {
  return (
    <div className='bg-market-background h-4/5'>
      <body class="bg-market-background">
  <header class="bg-primary py-4">
    <div class="container mx-auto px-4">
      <h1 class="text-2xl text-white">Welcome to the Market !!</h1>
      <p className='text-white'></p>
    </div>
  </header>

  <main class="container mx-auto px-4 py-8">
    <div class=" bg-secondary bg-opacity-70 text-2xl mb-4 rounded-lg">
        <p className='ml-2'>Hello ! You have come to the supermarket to buy groceries for your family but keep in mind that the budget for this month is a bit tight so only buy what is required !!! (hint -  stay away from candies ;)</p>
    </div>
    

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div class="bg-white bg-opacity-70 rounded shadow p-4">
        <img src="product1.jpg" alt="Product 1" class="w-full h-40 object-cover mb-4"></img>
        <h3 class="text-lg font-semibold">Product 1</h3>
        <p class="text-gray-600">Description of Product 1</p>
        <button class="bg-blue-500 text-white px-4 py-2 mt-4 rounded">Select</button>
      </div>

      <div class="bg-white bg-opacity-70 rounded shadow p-4">
        <h3 class="text-lg font-semibold">Product 1</h3>
        <p class="text-gray-600">Description of Product 1</p>
        <button class="bg-blue-500 text-white px-4 py-2 mt-4 rounded">Select</button>
      </div>

      <div class="bg-white bg-opacity-70 rounded shadow p-4">
        <h3 class="text-lg font-semibold">Product 1</h3>
        <p class="text-gray-600">Description of Product 1</p>
        <button class="bg-blue-500 text-white px-4 py-2 mt-4 rounded">Select</button>
      </div>

      <div class="bg-white bg-opacity-70 rounded shadow p-4">
        <h3 class="text-lg font-semibold">Product 1</h3>
        <p class="text-gray-600">Description of Product 1</p>
        <button class="bg-blue-500 text-white px-4 py-2 mt-4 rounded">Add to Cart</button>
      </div>

      <div class="bg-white bg-opacity-70 rounded shadow p-4">
        <h3 class="text-lg font-semibold">Product 1</h3>
        <p class="text-gray-600">Description of Product 1</p>
        <button class="bg-blue-500 text-white px-4 py-2 mt-4 rounded">Add to Cart</button>
      </div>

      <div class="bg-white bg-opacity-70 rounded shadow p-4">
        <h3 class="text-lg font-semibold">Product 1</h3>
        <p class="text-gray-600">Description of Product 1</p>
        <button class="bg-blue-500 text-white px-4 py-2 mt-4 rounded">Add to Cart</button>
      </div>

    </div>
  </main>

  <footer class="bg-primary py-4 mt-8">
    <div class="container mx-auto px-4">
      <p class="text-white text-center">© Project M^2. All Rights Reserved.</p>
    </div>
  </footer>
</body>
    </div>
  )
}

export default GroceryGame;