import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { compareSync } from 'bcrypt';
import { User } from 'src/users/interface/user.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    async login(user) {
        const payload = { sub: user.id, login: user.login };

        const accessToken = this.jwtService.sign(payload);

        const refreshToken = this.jwtService.sign(payload, {
            expiresIn: '7d',
        });

        return {
            access_token: accessToken,
            refresh_token: refreshToken,
        }
    }

    async refreshToken(refresh_token: string) {
        try {
            const payload = this.jwtService.verify(refresh_token)

            const newAccessToken = this.jwtService.sign({
                login: payload.login,
                sub: payload.id
            });

            return {
                access_token: newAccessToken
            };

        } catch {
            throw new UnauthorizedException('Token de Refresh inválido')
        }
    }


    async validateUser(login: string, password: string) {
        let user:User;

        try{
            user = await this.usersService.findUserByEmail(login)
        } catch {
            return null
        }
        
        const testPassword = compareSync(password, user.password);

        if (!testPassword) return null;

        return user;
    }
}