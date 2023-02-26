import HttpService from "./HttpService";

const uri = 'auth'
export default class AuthService {
    async login(payload) {
        const customUri = `${uri}/login`
        return HttpService.prototype.create(customUri, payload)
    }
    async register(payload) {
        const customUri = `${uri}/register`
        return HttpService.prototype.create(customUri, payload)
    }
}