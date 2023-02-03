import { User } from "./user"

export class Department {
    department: DEPARTMENT
    users: User[]
}

export enum DEPARTMENT {
    Design = "DESIGN",
    Engineering = "ENGINEERING"
}
