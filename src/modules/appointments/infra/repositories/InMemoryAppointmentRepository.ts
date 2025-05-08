import { IAppointmentRepository } from '../../domain/repositories/IAppointmentRepository';
import { Appointment } from '../../domain/entities/Appointment';
import { TimeSlot } from '../../domain/value-objects/TimeSlot';

export class InMemoryAppointmentRepository implements IAppointmentRepository {
  private appointments: Appointment[] = [];

  async save(appointment: Appointment): Promise<void> {
    this.appointments.push(appointment);
  }

  async findById(id: string): Promise<Appointment | null> {
    return this.appointments.find((appointment) => appointment.id === id) || null;
  }

  async findByProviderAndTimeSlot(
    providerId: string,
    timeSlot: TimeSlot
  ): Promise<Appointment | null> {
    return (
      this.appointments.find(
        (appointment) =>
          appointment.providerId === providerId &&
          appointment.timeSlot.equals(timeSlot)
      ) || null
    );
  }

  async findAllByClientId(clientId: string): Promise<Appointment[]> {
    return this.appointments.filter((a) => a.clientId === clientId);
  }
}

/* Concept Focus
* Purpose:
*  - Implements the domain repository interface, IAppointmentRepository.
*  - Stores everything in memory (array) for fast prototyping and testing. (This is not a real application)
*/

/* DDD:
* - This class belongs in the infrastructure Layer.
* - Implements the repository defined by the domain, but never lives inside the domain itsel.
* - Easy to swap with a real DB adapter or between DBs (PostgreSQL, MongoDB, Prisma, etc.) later — without changing domain logic.
*/

/* SOLID:
* - SRP: Only stores and retrieves Appointment entities.
* - DIP: Fulfills an interface defined in the domain, not the other way around.
*/