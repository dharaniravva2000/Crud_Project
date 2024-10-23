import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../src/user/user.controller'; // Adjust the import path accordingly
import { UserService } from '../src/user/user.service'; // Adjust the import path accordingly
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../src/user/user.entity';
 // Adjust the import path accordingly
import { Repository } from 'typeorm';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;
  let mockUserRepository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User), // Provide the User repository token
          useClass: Repository, // Use the actual TypeORM Repository or a mocked version
        },
      ],
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
    mockUserRepository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear any mocked calls to ensure test isolation
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  // Add more tests for your controller methods
});
