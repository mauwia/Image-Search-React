import axios from 'axios'
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID 4a884d6b1516afaeb7f23473728bbb26197604b2503363b4b97ce145a3681873'
    }
})