import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/entity/user.entity';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { Jwtstrategy } from './strategy/jwt.strategy';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(),
            TypeOrmModule.forFeature([UserEntity]),
            PassportModule,
            JwtModule.register({
              secret: process.env.JWT_SECRET_KEY,
              signOptions:{expiresIn: parseInt(process.env.JWT_EXPIRESIN)}
            })],
  providers: [AuthService, UserService, Jwtstrategy],
  exports: [AuthService]
})
export class AuthModule {}
