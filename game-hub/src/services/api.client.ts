import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api' ,
    params: {
        key:'622f4861bfee4e46b1701629655c3565'
    }
})