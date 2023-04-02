import axios from 'axios';

const fetchData = async (url: string) => {
    const apiData = await axios.get(url);
    return apiData.data;
}

export default fetchData

