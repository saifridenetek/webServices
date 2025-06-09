import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { CandidateModule } from './candidate/candidate.module';
import { ApplicationModule } from './application/application.module';
import { PositionModule } from './position/position.module';
import { DecisionHistoryModule } from './decision-history/decision-history.module'; // 👈 Ajoute cette ligne

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'testdb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
    CandidateModule,
    ApplicationModule,
    PositionModule,
    DecisionHistoryModule, // 👈 Ajoute ce module ici
  ],
})
export class AppModule {}