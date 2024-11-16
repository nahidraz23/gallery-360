import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: 'https://www.freetestapi.com/api/v1/products'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;