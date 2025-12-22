import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthorDocument = HydratedDocument<Author>;
@ObjectType()
@Schema()
export class Author {
  @Field(() => String)
  _id: string;

  @Prop({ required: true })
  @Field(() => String)
  name: string;

  @Prop({ required: true })
  @Field()
  email: string;

  @Prop()
  @Field({ nullable: true })
  description: string;
}

export const authorSchema = SchemaFactory.createForClass(Author);
