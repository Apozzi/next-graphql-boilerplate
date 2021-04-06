import { Module } from '@nestjs/common';
import { UserModule } from '../../commons/user/user.module';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [UserModule],
  providers: [AuthResolver],
  
})
export class AuthModule {}
