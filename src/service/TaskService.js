import HttpService from "./HttpService";

const uri = 'tasks'
const userId = 1;
export default class TaskService {
    async getAll() {
        const customUri = `${uri}/?userId=${userId}`
        return await HttpService.prototype.getAll(customUri)
    }

    async create(payload) {
        return HttpService.prototype.create(uri, payload)
    }

    async update(id, payload) {
        return HttpService.prototype.update(uri, id, payload)
    }

    // async delete(id) {
    //     return HttpService.prototype.delete(uri, id)
    // }
}