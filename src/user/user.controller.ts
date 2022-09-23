import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { UserRequest } from './dto/user.request.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private  userService: UserService,
        private authService: AuthService
    ){}


    @Post('/signup')
    async signup(@Body() userRequest: UserRequest) {
        return await this.userService.signup(userRequest)
    }
}

