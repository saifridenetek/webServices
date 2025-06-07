import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Application } from 'src/application/application.entity';

@ObjectType()
@Entity()
export class DecisionHistory {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  status: string;

  @Field()
  @Column()
  date: Date;

  @Field()
  @Column()
  comment: string;

  @Field(() => Application)
  @ManyToOne(() => Application, (app) => app.decisionHistory, { onDelete: 'CASCADE' })
  application: Application;
}
