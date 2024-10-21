import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user/user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../user/user.entity';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: {}, // Mock repository here
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Add more unit tests for CRUD operations here
});
