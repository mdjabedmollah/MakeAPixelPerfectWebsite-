PORT=8080
DB_URL=your_mongodb_connection_string
## frontend
VITE_API_URL=http://localhost:8080/api/v1
cd backend
npm install
cd frontend
npm install

## use cosr 
app.use(cors({ origin: "http://localhost:5173" }));




