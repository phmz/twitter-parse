import { Module } from '@nestjs/common';
import { TwitterModule } from './twitter/twitter.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TwitterModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
