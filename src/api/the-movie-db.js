import axios from 'axios';
api_key="78da18deb28f6efe0113be955d928e99"
export default axios.create({
    baseURL:'https://api.themoviedb.org/3/movie/76341?api_key='+api_key,
    headers:{
        Authorization: 'Client-ID _2UdfCsCmwvF2iQpPiZjOZFbCS6Z7R4lSPOR-KaWugA'
    }

});