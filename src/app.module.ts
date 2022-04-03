import { Module } from '@nestjs/common';
import { TwitterModule } from './twitter/twitter.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), TwitterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
