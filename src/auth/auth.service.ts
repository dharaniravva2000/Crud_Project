import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'; // Import JwtService
import { UserService } from '../user/user.service'; // Import UserService for user-related logic

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService, // Inject JwtService here
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    // Logic for validating user credentials
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload), // Use JwtService to sign the token
    };
  }
}
