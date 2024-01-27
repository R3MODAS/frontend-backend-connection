## CORS and Proxy
Cross Origin Resource Sharing (CORS)

- CORS means basically not allowing everyone to access the server (Having different Origin) Eg: server running at 3000 port but my frontend running at 5173 port so diff origin

- Solution to CORS is allow the selected origins to access the backend (whitelist ip, domain whitelist, special name)

- On production, PORT may change where it is deployed (vercel,netlify) as they have their own PORT so you cannot directly access your app from localhost:PORT if it is hosted on vercel

- Now on frontend we need to get the data from the backend without using http://localhost:PORT/..... as Domain and PORT may change (where it is served) so that's why we will normally fetch the data without the domain name but just with the routes defined in the backend but that would case another issue

- There doesn't exists any url with "/api/jokes" as specified here so to solve this issue we will use something known as proxy

- Setup the proxy in the vite.config.js file go inside the defineConfig and there type server is an object and inside that proxy object will be defined and we will specify there that whenever is someone trying to access the url that contains "/api" route then automatically the backend server (http://localhost:3000) will be appended and also it will act like the request is coming from (http://localhost:3000) 

- Basically the server will think that the request to access the /api/jokes from frontend to get the data is coming from (http://localhost:3000) or same origin of the backend not from some other origin

- Bad practice is to build a dist folder and put it inside the backend folder then create a middleware to serve the static folder. Eg: app.use(express.static("dist"))