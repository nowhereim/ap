// events/note-created.event.ts
import { IEvent } from '@nestjs/cqrs';
import { SeatReservation } from 'src/domain/reservation/seat.reservation';

export class RegisterReservationEvent implements IEvent {
  constructor(
    public tranjactionId: string,
    public seatReservation: SeatReservation,
  ) {}
}