import './groceryGame.css'

const GameInstruction = (props) => {
    return (
        <div className="popup">
        
      {/* <div className="popup-content"> */}
      <div class="relative w-full max-w-2xl max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Instructions
                </h3>
                <button onClick={() => props.setPopUp(false)} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <div class="p-6 space-y-6">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Hello ! You have come to the supermarket to buy groceries for your family but keep in mind that the budget for this month is a bit tight so only buy what is required !!! (hint -  stay away from candies ;))
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    What to Buy? <br/> Since you are on a limited budget, only buy the things that are needed, things that you cannot live without.
                </p>
            </div>

            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => props.setPopUp(false)}>Done</button>
            </div>
        </div>
    </div>
      </div>
    // </div>
        
    );
}

export default GameInstruction;