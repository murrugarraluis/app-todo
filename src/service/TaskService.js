import HttpService from "./HttpService";

const uri = 'tasks'
const storedJsonString = localStorage.getItem('user');
const user = JSON.parse(storedJsonString);
const userId = user.id;
export default class TaskService {
    async getAll() {
        const customUri = `${uri}/?userId=${userId}`
        return await HttpService.prototype.getAll(customUri)
    }

    async create(payload) {
        const payloadCustom = {...payload,userId:userId}
        return HttpService.prototype.create(uri, payloadCustom)
    }

    async update(id, payload) {
        return HttpService.prototype.update(uri, id, payload)
    }

    // async delete(id) {
    //     return HttpService.prototype.delete(uri, id)
    // }
}