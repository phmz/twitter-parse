import { Injectable } from '@nestjs/common';
import { TwitterApi } from 'twitter-api-v2';
import { ConfigService } from '@nestjs/config';
import { Tweet } from './tweet.entity';

@Injectable()
export class TwitterService {
  private twitterClient: TwitterApi;
  constructor(private configService: ConfigService) {
    this.twitterClient = new TwitterApi(
      configService.get('TWITTER_BEARER_TOKEN'),
    );
  }

  async getRecentTweets({ keyword }): Promise<Tweet[]> {
    const tweets = await this.twitterClient.v2.search(keyword, {
      'tweet.fields': 'created_at,text,public_metrics',
      expansions: 'attachments.media_keys',
      'media.fields': 'public_metrics',
      max_results: this.configService.get('TWITTER_MAX_RESULTS'),
    });
    return tweets.tweets.map((tweet) => {
      const { text, id, public_metrics: publicMetrics } = tweet;
      const {
        retweet_count: retweetCount,
        reply_count: replyCount,
        like_count: likeCount,
      } = publicMetrics;
      const parsedTweet: Tweet = {
        text,
        id,
        retweetCount,
        replyCount,
        likeCount,
      };

      if (
        tweet.attachments?.media_keys.length === 1 && // only one video per tweet
        tweet.attachments?.media_keys[0].startsWith('7_') // media is a video
      ) {
        const video = tweets.includes.media.find(
          (media) => media.media_key === tweet.attachments.media_keys[0],
        );
        parsedTweet.viewCount = video.public_metrics.view_count;
      }

      return parsedTweet;
    });
  }
}
