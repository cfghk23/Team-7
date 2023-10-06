import react from 'react'
import './groceryGame.css'
import cake from '../../assets/cake.png'
import candies from '../../assets/candies.png'
import chocolate from '../../assets/chocolate.png'
import milk from '../../assets/milk.png'
import rice from '../../assets/rice.png'
import vegatables from '../../assets/vegetables.png'
import {useState} from 'react'
import GameInstruction from './GameInstruction'
import questionMark from '../../assets/questionMark_icon.png'

const GroceryGame = () => {
  const [popUp, setPopUp] = useState(true);

  return (
    <>
    <div className='bg-market-background h-4/5'>
      <body class="bg-market-background">


      {popUp && <GameInstruction setPopUp={setPopUp}/>}
  <header class="bg-primary py-4">
    <div class="container mx-auto px-4">
      <h1 class="text-2xl text-white">Welcome to the Market !!</h1>
      <button data-modal-toggle="defaultModal" onClick={() => setPopUp(true)}class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" id='toggleBtn' type="button">
  ?
</button>

      {/* <button><img src={questionMark} alt="questionMark"></img></button> */}
      <p className='text-white'></p>
    </div>
  </header>

  <main class="container mx-auto px-4 py-8">
    <div class=" bg-secondary bg-opacity-70 text-2xl mb-4 rounded-lg">
        <p className='ml-2'>Hello ! You have come to the supermarket to buy groceries for your family but keep in mind that the budget for this month is a bit tight so only buy what is required !!! (hint -  stay away from candies ;))</p>
    </div>
    

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div class="bg-white bg-opacity-70 rounded shadow p-4">
        <img src={cake} alt="Product 1" class="w-full h-40 object-cover mb-4"></img>
        <h3 class="text-lg font-semibold">Cake</h3>
        
        <button class="bg-blue-500 text-white px-4 py-2 mt-4 rounded">Select</button>
      </div>

      <div class="bg-white bg-opacity-70 rounded shadow p-4">
        <img src={candies} alt="Product 1" class="w-full h-40 object-cover mb-4"></img>
        <h3 class="text-lg font-semibold">Candies</h3>
        
        <button class="bg-blue-500 text-white px-4 py-2 mt-4 rounded">Select</button>
      </div>

      <div class="bg-white bg-opacity-70 rounded shadow p-4">
        <img src={chocolate} alt="Product 1" class="w-full h-40 object-cover mb-4"></img>
        <h3 class="text-lg font-semibold">Chocolate</h3>
        
        <button class="bg-blue-500 text-white px-4 py-2 mt-4 rounded">Select</button>
      </div>

      <div class="bg-white bg-opacity-70 rounded shadow p-4">
        <img src={milk} alt="Product 1" class="w-full h-40 object-cover mb-4"></img>
        <h3 class="text-lg font-semibold">Milk</h3>
        
        <button class="bg-blue-500 text-white px-4 py-2 mt-4 rounded">Select</button>
      </div>

      <div class="bg-white bg-opacity-70 rounded shadow p-4">
        <img src={rice} alt="Product 1" class="w-full h-40 object-cover mb-4"></img>
        <h3 class="text-lg font-semibold">Rice</h3>
        
        <button class="bg-blue-500 text-white px-4 py-2 mt-4 rounded">Select</button>
      </div>

      <div class="bg-white bg-opacity-70 rounded shadow p-4">
        <img src={vegatables} alt="Product 1" class="w-full h-40 object-cover mb-4"></img>
        <h3 class="text-lg font-semibold">Vegetables</h3>
        
        <button class="bg-blue-500 text-white px-4 py-2 mt-4 rounded">Select</button>
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
    </>
  )
}

export default GroceryGame;