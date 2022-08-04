import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserModel {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  username: string;

  @Column()
  sex: Boolean;

  @Column()
  isPublished: boolean;

}