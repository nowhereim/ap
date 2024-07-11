import { SeatReservationStatus } from 'src/domain/reservation/seat.reservation';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../base/base-entity';

@Entity()
export class ReservationEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  seatId: number;

  @Column()
  status: SeatReservationStatus;

  @Column()
  price: number;

  @Column()
  concertName: string;

  @Column()
  seatNumber: number;

  @Column()
  openAt: Date;

  @Column()
  closeAt: Date;

  constructor(args: {
    id?: number;
    userId: number;
    seatId: number;
    status: SeatReservationStatus;
    price: number;
    concertName: string;
    seatNumber: number;
    openAt: Date;
    closeAt: Date;
    deletedAt?: Date;
    createdAt?: Date;
  }) {
    super();
    Object.assign(this, args);
  }
}