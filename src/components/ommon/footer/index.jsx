import React from 'react'

const Footer = () => {
  return (
    <footer class="text-gray-400 bg-gray-900 body-fontw-full">
   <div class="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"> 
    <div class="w-30 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
     <a class="flex title-font font-medium items-center md:justify-start justify-center text-white"> 
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg> */}
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEcElEQVR4nO2ZT2zbVBzH3y7AhMSJv4IjZxgqXf+stE1YEntjk+pHxV/BkRMHLnCj0/OSai1tSbtStTTlsHRt06RtsjSx0/GvjGlDsLFqHWItSMsEVYo4bN0kvw320HOJ5aZ28uw6akD9Sh8psp+d38f+2e+lBWAn/9NAjJ6DWOyDWLwiKOiWCkaLEKPeFoyeBZWat0nbA4IihgRF/BtikRhB9wmK+CkdW9ZiWm+1PQ6xGICK+GP+KqqfMfIfWvM/tmk86doNFfGMWeEGIvNlk4BYfE0t2PzL117G6NUNxyhomLV4DUUcdLx4AaPXoYLulf5ydC8vQXu+WNsUa6cWJ58J2jb06looYI22k4DRcctXH/97DoyCjgmoPW+9iKMQo5+M9h1e6iHu4TGVQ8vdZgKLjgkICrpkuQj1ITe+a/SY5mBUxR0aM72LwDmBzYWUKoIes0WBG9stcINOWEbF0TtGj6EcXu4xE7hc1hYqVYSgoIt0hrX7EEOMepwTwMhvowCxFR/dY/c1CrH/GccE1FeihdcoVNDNlrW2R1V5BQ3ZEBgATodOTqwTmYDFVwrWQfMWiv+KI8H7HRfISxS9Ewq6qS9eL0GXBwyLuYGyFa9vJzpJCYp4If+qpJ9pz+fbxix0eUBnWPqGWV8Iqsdehlj82NGeN0rV6uiBqtXw9ef/CJNyoZ5/NcyDYiFk18H2zAd1CxN3q1dGSfXK6Bk2gZx6cmKLHDtVuRNZsxq4E6mHvH1S7ED7HNl77aQGk0D176PENr9ZAxikKZLc4xlJLvv6JEIFapfGNZgE9mZPEttcswYoSKM085ZrMn7b89ksyQvULU5oMAnU/DpGtsQv7MCCN1STPEPc0QTRC9RfnNRgEqi9Ok7MeOS9YVvU/jxuCGQQaDgX1WASqLsyQcywK6BvAz2QQeCF+ZgGm8BChBhRvxCxLVB/KWIIZBBoPD2twSRQf2GSmGFXYN8Pk4ZABoHm1IwGk8C+76LEDNsC56OGQAYB10xCg0mg4WyUGBOzLdDwbcwQyCDgjpzSYBLQPzTWmNrI16WBDAL7w0kNJoHGL6aII3yuZ9oQwDCReUIpDSaBpsw0cQS5NIBhKeEdSGswCeif+i0xWxrAsJjjgrIGm0A8fr05ESd6XHaJFyVbtBBCdvH+0+/zHfJdvjND+A75GyYB91SCd8USWddUgtjBrSdmjCuayL4Yi3NgO2L1hzuotMD/vIBi7Z8YoBLjCSVrPCMpohFKXd0/Mru0cVuyBlRqPEOpUe9QmuTxDKbf8Q6l3i3YFgaVGN9g+glvv4R9n0hEpT+da+2K7PZ0yg/6+tN/6rbfOThw6klQafEF00e4XoloBKUPtX29cifXK5M8vqB8BFRSWtsi9/m65RWuWyYUX5d8+6WPvnw4v58Lpp7iu6Q7fLdM1pFyXDBV3r/AWQnXIb/Jd9BZcR3uWOb4pjHH5ImNY6Q3QKWED2TO0/UJhQ/M/eUNSE8XjuECc9X5Meq49rnvt6fanewElMo/PlVWrrcmgG4AAAAASUVORK5CYII="class="w-34 h-24"></img>
        <span class="ml-3 text-3xl font-black tracking-wide bg-gradient-to-r from-teal-400 to-blue-400 text-transparent bg-clip-text font-sans">THE <br/>MOVIE <br/> DB</span>
      </a>
      <p class="mt-2 text-sm text-gray-500">The best movie suggestions using MongoDB</p>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">THE BASICS</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-400 hover:text-white">About TMDB</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white">Contact Us</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white">Support</a>
          </li>
          {/* <li>
            <a class="text-gray-400 hover:text-white">Fourth Link</a>
          </li> */}
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">GET INVOLVED</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-400 hover:text-white">Contribution</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white">Add New Movie</a>
          </li>
          {/* <li>
            <a class="text-gray-400 hover:text-white">Support For</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white">Fourth Link</a>
          </li> */}
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">COMMUNITY</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-400 hover:text-white">Guidelines</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white">Discussions</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white">Leaderboard</a>
          </li>
          {/* <li>
            <a class="text-gray-400 hover:text-white">Fourth Link</a>
          </li> */}
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">LEGAL</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-400 hover:text-white">Terms of Use</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white">Privacy Policy</a>
          </li>
          {/* <li>
            <a class="text-gray-400 hover:text-white">Third Link</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white">Fourth Link</a>
          </li> */}
        </nav>
      </div>
    </div>
  </div>
  <div class="bg-gray-800 bg-opacity-75">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-gray-400">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-400">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-400">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-400">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
  )
}

export default Footer