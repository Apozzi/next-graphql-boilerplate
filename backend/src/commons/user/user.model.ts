import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity("User")
export class User {
  // tslint:disable-next-line:variable-name
  @PrimaryGeneratedColumn()
  public readonly id: number;

  @Column()
  public readonly username: string;

  @Column()
  public readonly password: string;

  @CreateDateColumn({type: 'timestamp'})
  public readonly createdAt: Date;
}
