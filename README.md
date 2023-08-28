Geogo movies offers an immersive movie experience, allowing users to explore detailed movie information, curate personal wishlists, and seamlessly manage their movie preferences. To begin, users can effortlessly create an account on GeoGo Movies, providing them with access to a wide array of features. Once registered, users can delve into comprehensive movie details, make selections to their wishlist, and easily perform actions such as adding, removing, and editing movies from their account. This personalized approach empowers users to tailor their movie choices according to their preferences, enhancing their overall enjoyment on our website.

#API of geogo movies--

Movie CRUD opertions endpoints

1. Get all movies: api/movie
2. Get all searched movie : api/movie/?search=query(it should be title and genre)
3. Sort movies by rating and year : I am doing this part using frontend 
4. Filter movies by genre, title and Year : 
5. Pagination and limit : api/?page=pageNumber&limit=limit
6. Get a single movie data : api/movie/:id
7. Add a movie to database : api/movie/add
8. Edit movie in database : api/movie/update
9. Delete movie from database : api/movie/edit


Wishlist movie endpoints

1. Get wishlist movies : api/wishlist
2. Add movies to wishlist : api/wishlist/add
3. Delete movies from wishlist : api/wishlist/delete/:id

User login and register

1. User login : api/user/login
1. User registration : api/user/register


#Frontend NPM packages--

1. Tailwind CSS : For styling the UI
2. axios : API intergeation connect frontend and backend 
3. redux : For centralise the data
4. react-toastify : For showing toast
5. redux-thunk : It's a middleware who allows us to write action creators that return a function instead of an action.