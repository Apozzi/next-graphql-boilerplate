import { Args, Query, Resolver } from '@nestjs/graphql';
import { sign } from 'jsonwebtoken';
import { UserService } from 'src/commons/user/user.service';


@Resolver('Auth')
export class AuthResolver {
  private readonly SECRET_TOKEN = "84c59318-feff-453d-b3e3-812cb5fb88cf ";

  constructor(
    private readonly userService: UserService
  ) {}

  @Query('login')
  async login(@Args('username') username: String, @Args('password') password: String): Promise<String> {
    const userExist = this.userService.findByUsernameAndPassword(username, password);
    if (userExist) {
      return await new Promise((resolve) => { 
        sign({auth: true, username}, this.SECRET_TOKEN, (err, token) => {
          resolve(token)
        });
      });
    }
    return null;
  }

}
