import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'usersDB' })
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;
  @Column()
  name: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column()
  age: number;
  @Column({ default: 'home' })
  address: string;
}
