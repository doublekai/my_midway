import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserModel {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  username: string;

  @Column({ default: 1 })
  sex: number;

  @Column({ default: false })
  isPublished: boolean;

}