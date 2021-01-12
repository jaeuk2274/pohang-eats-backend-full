import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { UsersModule } from 'src/users/users.module';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [UsersModule],
  providers: [
    {
      provide: APP_GUARD, // 전체에 적용
      useClass: AuthGuard, // AuthGuard를 적용
    },
  ],
})
export class AuthModule {}
