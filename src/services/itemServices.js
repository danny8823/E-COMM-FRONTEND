import axios from 'axios'
import { BASE_URL } from '../utils/url'
export const listItemsApi = async(category)=> {
    const response = await axios.get(`${BASE_URL}/items/list`,{
        params: {
            category,
        }
    })
    return response.data
}


export const listSingleItemApi = async(id) => {
    const response = await axios.get(`${BASE_URL}/list/${id}`)
    return response.data
}