import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity("Person")
export class Person {
  // tslint:disable-next-line:variable-name
  @PrimaryGeneratedColumn() 
  public readonly id: number;

  @Column() 
  public readonly name: string;

  @Column({nullable: true})
  public readonly address: string;

  @Column({nullable: true})
  public readonly email: string;

  @Column()
  public readonly birthDate: Date;

  @Column({nullable: true})
  public readonly phoneNumber: string;

  @CreateDateColumn({type: 'timestamp'})
  public readonly createdAt: Date;

  @UpdateDateColumn({type: 'timestamp', nullable: true})
  public readonly updatedAt: Date;
}
