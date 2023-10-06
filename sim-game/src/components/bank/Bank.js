import React from 'react'


const Bank = () => {
  return (
    <div className=''>
      <body class="bg-bank-background min-h-screen">
  <header class="bg-primary py-4">
    <div class="container mx-auto px-4">
      <h1 class="text-2xl text-white">Welcome to the Bank !!</h1>
      <p className='text-white'></p>
    </div>
  </header>
  
  <main class="container mx-auto px-4 py-8">
    <div class=" bg-secondary bg-opacity-70 text-2xl mb-4 rounded-lg">
        <p className='ml-2'>Hello ! You have come to visit the bank, here you see the M^2 coins earned from all your completed tasks and you have the oppurtunity to invest them. Investing invloves putting your coins away for some time and get more of them back.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <div class="bg-white rounded shadow p-4">
        
        <h3 class="text-lg font-semibold">Current Balance</h3>
        
        <p class="bg-primary text-black px-4 py-2 mt-4 rounded">20,000 M^2 Coins</p>
      </div>

      <div class="bg-white  rounded shadow p-4">
        
        <h3 class="text-lg font-semibold">Put a deposit</h3>
        <input
        placeholder='Enter Amount'
        type="number"
        className="w-64 p-2 border border-gray-300 rounded shadow"
      />
      <input
        placeholder='Enter Time Period'
        type="number"
        className="mt-3 w-64 p-2 border border-gray-300 rounded shadow"
      />
        
        <button class="bg-blue-500 text-white px-4 py-2 mt-4 rounded">Select</button>
      </div>

      

    </div>
    
    

    
  </main>

  {/* <footer class="bg-primary py-4 mt-8 bottom-0">
    <div class="container mx-auto px-4">
      <p class="text-white text-center">© Project M^2. All Rights Reserved.</p>
    </div>
  </footer> */}
</body>
    </div>
  )
}

export default Bank
