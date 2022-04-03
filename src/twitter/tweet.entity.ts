import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Tweet {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'varchar', length: 320 })
  text: string;

  @Column({ name: 'like_count', type: 'int' })
  likeCount: number;

  @Column({ name: 'retweet_count', type: 'int' })
  retweetCount: number;

  @Column({ name: 'reply_count', type: 'int' })
  replyCount: number;

  @Column({ name: 'view_count', type: 'int', nullable: true })
  viewCount?: number;
}
