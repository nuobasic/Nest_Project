import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRequest } from './dto/user.request.dto';
import { UserEntity } from './entity/user.entity';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ){}

    async signup(userRequest: UserRequest) {
        const {email, name, password, role} = userRequest

        const findUser =  await this.userRepository.findOne({where: {email}})
        
        if (findUser) {
            throw new UnauthorizedException('이미 존재하는 유저 입니다.');

          }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await this.userRepository.create({
            email,
            name,
            password: hashedPassword,
            role
        })

        const  result = await this.userRepository.save(user)

        return result;


    }
}
