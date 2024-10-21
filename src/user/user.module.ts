import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Register the User entity with TypeOrmModule
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService], // Export if needed by other modules like AuthModule
})
export class UserModule {}
