import { Module } from '@nestjs/common';
import { TwitterService } from './twitter.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from './tweet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tweet])],
  providers: [TwitterService],
  exports: [TwitterService],
})
export class TwitterModule {}
