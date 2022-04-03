import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TwitterService } from './twitter/twitter.service';
import { Tweet } from './twitter/tweet.entity';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const logger: Logger = new Logger('bootstrap');

  const configService: ConfigService = app.get(ConfigService);

  const twitterMaxResults: number = configService.get<number>(
    'TWITTER_MAX_RESULTS',
  );

  if (!twitterMaxResults || twitterMaxResults < 10 || twitterMaxResults > 100) {
    logger.error(
      `TWITTER_MAX_RESULTS must be between 10 and 100. You have set it to ${twitterMaxResults}`,
    );
    await app.close();
    return;
  }

  const keyword: string = process.argv[2] ?? '#arcane';

  const twitterService: TwitterService = app.get(TwitterService);

  let recentTweets: Tweet[] = [];

  try {
    recentTweets = await twitterService.getRecentTweets({ keyword });
    logger.log(`Found ${recentTweets.length} tweets for keyword ${keyword}`);
  } catch (error) {
    logger.error(error);
    await app.close();
    return;
  }
}
bootstrap();
