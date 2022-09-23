import {
    createParamDecorator,
    ExecutionContext,
    UnauthorizedException,
  } from '@nestjs/common';


export const User =createParamDecorator(
    (data: unknown, ctx: ExecutionContext) =>{
        const request = ctx.switchToHttp().getRequest()

        if(request.user === undefined)
        throw new UnauthorizedException('로그인 이후 이용')

        return request.user
    }
)