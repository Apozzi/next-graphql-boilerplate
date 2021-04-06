import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity("Event")
export class Event {
  // tslint:disable-next-line:variable-name
  @PrimaryGeneratedColumn()
  public readonly id: number;

  @Column()
  public readonly name: string;

  @Column({nullable: true})
  public readonly description: string;

  @Column()
  public readonly maxNumberOfGuests: number;

  @Column()
  public readonly date: Date;

  @CreateDateColumn({type: 'timestamp'})
  public readonly createdAt: Date;

  @UpdateDateColumn({type: 'timestamp', nullable: true})
  public readonly updatedAt: Date;
}
