import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User), // Mock the UserRepository
          useClass: Repository, // Use a mock version of the repository
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should return a user', async () => {
    const user: User = {
      id: 1,
      username: 'John',
      email: 'john@example.com',
      password: 'hashed_password', // Add necessary fields
    };

    jest.spyOn(service, 'findOne').mockResolvedValue(user);
    expect(await service.findOne(1)).toBe(user);
  });
});
