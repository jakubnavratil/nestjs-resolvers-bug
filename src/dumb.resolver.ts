import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class DumpResolver {
  @Query(() => Boolean, { name: 'test' })
  test() {
    return true;
  }
}
