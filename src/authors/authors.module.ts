import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Author, authorSchema } from './models/author.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Author.name, schema: authorSchema }]),
  ],
  providers: [AuthorsResolver, AuthorsService],
})
export class AuthorsModule {}
