import 'dotenv/config'
import server from "./app.js";

const PORT = process.env.ENVIRONMENT === 'development' ? process.env.PORT : 8080

server.listen(PORT, () => {
    console.log('Server running on port ' + PORT)
})