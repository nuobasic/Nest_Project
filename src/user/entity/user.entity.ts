import { IsEnum } from "class-validator";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./user.role";

@Entity('user')
export class UserEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    name: string

    @Column()
    password: string

    @IsEnum(Role)
    @Column({default: Role.USER})
    role: Role

    @CreateDateColumn({ name: 'created_at', select: false })
    createdAt: Date;
  
    @CreateDateColumn({ name: 'updated_at', select: false })
    updatedAt: Date;
}