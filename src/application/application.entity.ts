import { Field, ObjectType } from '@nestjs/graphql';
import { Candidate } from 'src/candidate/candidate.entity';
import { DecisionHistory } from 'src/decision-history/decision-history.entity';
import { Position } from 'src/position/position.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Application {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  status: string; // e.g., "submitted", "under_review", "accepted", "rejected"

  @Field()
  @Column()
  createdAt: Date;

  @Field(() => Candidate)
  @ManyToOne(() => Candidate, (candidate) => candidate.applications, { eager: true })
  candidate: Candidate;

  @Field(() => Position)
  @ManyToOne(() => Position, (position) => position.applications, { eager: true })
  position: Position;

  @Field(() => [DecisionHistory], { nullable: true })
  @OneToMany(() => DecisionHistory, (history) => history.application, { cascade: true })
  decisionHistory: DecisionHistory[];
}
