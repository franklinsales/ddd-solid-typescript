import { IAppointmentRepository } from '../../domain/repositories/IAppointmentRepository';
import { Appointment } from '../../domain/entities/Appointment';
import { TimeSlot } from '../../domain/value-objects/TimeSlot';
import { v4 as uuidv4 } from 'uuid';

interface CreateAppointmentDTO {
  clientId: string;
  providerId: string;
  start: Date;
  end: Date;
}

export class CreateAppointmentUseCase {
  constructor(private readonly appointmentRepository: IAppointmentRepository) {}

  async execute(data: CreateAppointmentDTO): Promise<void> {
    const timeSlot = new TimeSlot(data.start, data.end);

    const existing = await this.appointmentRepository.findByProviderAndTimeSlot(
      data.providerId,
      timeSlot
    );

    if (existing) {
      throw new Error('Provider already has an appointment at this time.');
    }

    const appointment = new Appointment(
      uuidv4(),
      data.clientId,
      data.providerId,
      timeSlot
    );

    await this.appointmentRepository.save(appointment);
  }
}

/* Concept Breakdown
* What does this use case do?
* - Validates input using the Value Object.
* - Delegates domain rule (no overlapping) to the repository (can be extracted later to a Domain Service if logic becomes complex).
* - Creates a domain entity (Appointment).
* - Saves it via the repository interface.
*/

/* DDD:
* - This sits in the Application Layer: its use domain objects and coordinates actions.
* - Domain logic stays inside TimeSlot, Appointment, and repository rules.
* - Keeps the application free from infrastructure concerns.
*/

/* SOLID:
* SRP: The class only handles the coordination of the create appointment use case.
* DIP: Depends on the IAppointmentRepository abstraction, not implementation.
*/