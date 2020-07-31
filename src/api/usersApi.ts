import axios from "axios";
import { usersType } from "../Redux/usersPageReducer";


export const instance = axios.create({
    baseURL: 'https://fierce-fortress-84655.herokuapp.com'

});

type usersDataType = {
    users: usersType
    success: boolean
}

type addUserDataType = {
    success: boolean
}

type getUsersDataType = usersDataType & { error: string }

export const usersApi = {
    async getUsers() {
        let response = await instance.get<getUsersDataType>('/users')
        return response
    },

    async setNewUser(firstName: string, lastName: string, email: string) {
        let user = { firstName, lastName, email }
        let response = await instance.post<addUserDataType>('/users', { user: user })
        return response
    }


}