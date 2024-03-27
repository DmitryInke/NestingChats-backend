import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import { AbstractEntity } from '../../../common/database/abstract.entity';

@Schema()
@ObjectType()
export class Message extends AbstractEntity {
  @Prop()
  @Field()
  content: string;

  @Prop()
  @Field()
  createdAt: Date;

  @Prop()
  @Field()
  userId: string;
}
