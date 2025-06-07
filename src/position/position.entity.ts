import { Field, ObjectType } from '@nestjs/graphql';
import { Application } from 'src/application/application.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Position {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  type: string; // "stage" or "emploi"

  @Field()
  @Column()
  description: string;

  @Field(() => [Application], { nullable: true })
  @OneToMany(() => Application, (app) => app.position)
  applications: Application[];
}
