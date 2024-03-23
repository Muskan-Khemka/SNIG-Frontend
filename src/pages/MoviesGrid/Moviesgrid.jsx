import React from 'react'
import { Link } from 'react-router-dom'


const Moviesgrid = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link to="/moviepage" className="block relative h-48 rounded overflow-hidden">
                <img alt="Lord of the Rings" className="object-cover object-center w-full h-full block" src="https://c8.alamy.com/comp/2KG90H4/the-lord-of-the-rings-poster-2KG90H4.jpg" />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Fiction</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Lord of Rings</h2>
                <p className="mt-1">2003</p>
              </div>
            </div>
            {/* Repeat the same structure for other movie cards */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link to="/moviepage" className="block relative h-48 rounded overflow-hidden">
                <img alt="Dunki" className="object-cover object-center w-full h-full block" src="https://www.hindustantimes.com/ht-img/img/2023/11/04/550x309/dunki_1699090816204_1699090816432.jfif" />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Drama • Comedy</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Dunki</h2>
                <p className="mt-1">2023</p>
              </div>
            </div>
            {/* Repeat the same structure for other movie cards */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link to="/moviepage" className="block relative h-48 rounded overflow-hidden">
                <img alt="Article" className="object-cover object-center w-full h-full block" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202402/article-370-releases-in-theatres-on-february-23-233115195-16x9_0.jpg?VersionId=4tzt_Iu8C78_KIcfJ5bqRqmcVWJKVD.x" />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Action • Drama • Triller</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Article</h2>
                <p className="mt-1">2024</p>
              </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://i.redd.it/7lggpb97wc3c1.jpg"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Adventure • Drama • History</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Shogan</h2>
          <p class="mt-1">2024</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://i.redd.it/7lggpb97wc3c1.jpg"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Adventure • Drama • History</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Shogan</h2>
          <p class="mt-1">2024</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202402/article-370-releases-in-theatres-on-february-23-233115195-16x9_0.jpg?VersionId=4tzt_Iu8C78_KIcfJ5bqRqmcVWJKVD.x"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Action • Drama • Triller</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Article</h2>
          <p class="mt-1">2024</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://c8.alamy.com/comp/2KG90H4/the-lord-of-the-rings-poster-2KG90H4.jpg"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Fiction</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Lord of Rings</h2>
          <p class="mt-1">2003</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://www.hindustantimes.com/ht-img/img/2023/11/04/550x309/dunki_1699090816204_1699090816432.jfif"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Drama • Comedy</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Dunki</h2>
          <p class="mt-1">2023</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Moviesgrid

