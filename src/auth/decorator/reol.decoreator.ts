import { SetMetadata } from "@nestjs/common";
import { Role } from "../../user/entity/user.role";

export const Roles = (role: Role) => SetMetadata('roles', role)