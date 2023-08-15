# 🤖 MeowFood Backend

Welcome to MeowFood backend repository! This is backend for [MeowFood](https://github.com/ElenaKhlebnikova/meow-food-frontend)

Meal data is taken from https://www.themealdb.com/ and used in my own DB with prices added. 




## 🏗️ Tech Stack

MeowFood backend is built with the following tech stack:

| Technology                                                          | Usage                                                                                                          
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Node.js                                     | JS runtime to build a server      |
| Express                                    | Node.js framework for building APIs |
| MongoDB                           | A document database to store list of meals and comments                              |

                                                              

## 👀 Project Overview

Click  [here](https://meow-food-api.onrender.com/) to view the project.


### Routes
GET "/:id" returns one meal with a list of ingredients and categories
[view](https://meow-food-api.onrender.com/52955)


GET "/?strCategory=CATEGORY" returns list of meals filtered by their category (possible categories: Vegan, Vegetarian, Breakfast, All
[view](https://meow-food-api.onrender.com/?strCategory=Vegan)


GET "/?strCategory=All&sort=price,SORT_ORDER" returns a list of meals which is sorted based on their price (possible sort order: 1, -1)
[view](https://meow-food-api.onrender.com/?strCategory=All&sort=price,1)

GET "/?strCategory=All&page=PAGE&limit=6" returns a paginated list of meals with the limit set to 6
[view](https://meow-food-api.onrender.com/?strCategory=All&page=3&limit=6)


## 🐈 Features 

1. Pagination.
2. Filtering and sorting of meals.



## 📖What I have learnt
1. Using Node.js and Express to create a server.
2. How to build simple API to use in applications.
3. How to send date to the fronend based on request (filtering, sorting, pagination).
4. How to use MongoDB to read and write documents. 

