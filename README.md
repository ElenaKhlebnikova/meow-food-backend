# 🤖 MeowFood Backend

Welcome to MeowFood backend repository! This is backend for [MeowFood](https://github.com/ElenaKhlebnikova/meow-food-frontend)

Meal data is taken from https://www.themealdb.com/ and used in my own DB with prices added. 




## 🏗️ Tech Stack

MeowFood backend is built with the following tech stack:

| Technology                                                          | Usage                                                                                                          
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Node.js                                     | JS runtime to build backend APIs      |
| Express                                    | Node.js framework for building APIs |
| MongoDB                           | Database used to store list of meals and comments                              |

                                                              

## 👀 Project Overview

Click  [here](https://meow-food-api.onrender.com/) to view the API.


### Routes
GET "/:id" returns one meal with a list of ingredients and categories
[view Example](https://meow-food-api.onrender.com/52955)


GET "/?strCategory=CATEGORY" returns list of meals filtered by their category (possible categories: Vegan, Vegetarian, Breakfast, All
[view Example](https://meow-food-api.onrender.com/?strCategory=Vegan)


GET "/?strCategory=All&sort=price,SORT_ORDER" returns a list of meals which is sorted based on their price (possible sort order: 1, -1)
[view Example](https://meow-food-api.onrender.com/?strCategory=All&sort=price,1)

GET "/?strCategory=All&page=PAGE&limit=6" returns a paginated list of meals with the limit set to 6
[view Example](https://meow-food-api.onrender.com/?strCategory=All&page=3&limit=6)


## 🐈 Features 

1. Paginated list of meals fetched from an API with added pricing.
2. Filtering and sorting of meals.



## 📖What I have learnt
1. Using Node.js and Express to create a backend API
2. How to send customized data to the frontend based on query params (pagination, filtering, sorting).
4. How to integrate MongoDB with an Express API using Mongoose ORM. 

