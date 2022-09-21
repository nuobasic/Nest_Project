import { Role } from "../entity/user.role"

export class UserRequest {
    email:string
    name:string
    password:string
    role: Role
}