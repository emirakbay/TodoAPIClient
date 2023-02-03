import { Department } from "./department"
import { Todo } from "./todo"

export class User {
    username: string
    password: string
    firstname: string
    lastname: string
    email: string
    todos: Todo[]
    department: Department
}
