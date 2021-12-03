import { ModuleAModule } from './module-a/module-a.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ModuleBModule } from './module-b/module-b.module';
import { DumpResolver } from './dumb.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    ModuleAModule,
    ModuleBModule,
  ],
  controllers: [],
  providers: [DumpResolver],
})
export class AppModule {}
