

const StudentNavBar = () => {

    return (
<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a class="flex items-center">
      <img src="https://projectm2.net/pluginfile.php/1/theme_adaptable/logo/1689936774/Project%20M2.png" class="h-8 mr-3" alt="Flowbite Logo" />
      <ul class="py-2" aria-labelledby="user-menu-button">
        <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Home</a>
        </li>
        <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Discussion Forum</a>
        </li>
        <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Leaderboard</a>
        </li>
        </ul>
  </a>
  <div class="flex items-center md:order-2">
      <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <img class="w-8 h-8 rounded-full" src="https://static.wixstatic.com/media/8592a2_1d7b80e336954d56b7947c6f18642da3~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8592a2_1d7b80e336954d56b7947c6f18642da3~mv2.jpg" alt="user photo" />
      </button>
      <span> Student A </span>
  </div>
    </div>
</nav>
    );
}

export default StudentNavBar;