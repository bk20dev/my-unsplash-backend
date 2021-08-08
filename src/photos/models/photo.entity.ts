import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column()
  url: string;

  @Column()
  width: number;

  @Column()
  height: number;

  @Column({ type: 'timestamp' })
  timestamp: Date;
}
