import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { Author } from '../models/author.schema';

@Resolver(() => Author)
export class AuthorsResolver {
  @Query(() => Author)
  async author(@Args('id', { type: () => Int }) id: number) {
    return { id, firstName: 'John' };
  }
}
