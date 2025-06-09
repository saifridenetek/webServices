import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Application } from 'src/application/application.entity';

@ObjectType()
@Entity()
export class Candidate {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => [Application], { nullable: true })
  @OneToMany(() => Application, app => app.candidate)
  applications: Application[];

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column()
  email: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  cvUrl?: string;
}