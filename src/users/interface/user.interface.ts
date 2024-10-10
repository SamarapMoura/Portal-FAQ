import { Role } from "@prisma/client";

export interface User{
    username: string;
    login: string;
    password?: string;
    role?: Role;
}