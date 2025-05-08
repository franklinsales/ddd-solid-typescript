import { InMemoryAppointmentRepository } from './modules/appointments/infra/repositories/InMemoryAppointmentRepository';
import { CreateAppointmentUseCase } from './modules/appointments/application/use-cases/CreateAppointmentUseCase';
import { HOUR } from './utils/time';

async function main() {
  const appointmentRepository = new InMemoryAppointmentRepository();
  const createAppointment = new CreateAppointmentUseCase(appointmentRepository);

  const now = new Date();
  const fourHourLater = new Date(now.getTime() + (4*HOUR));

  try {
    await createAppointment.execute({
      clientId: 'client-123',
      providerId: 'provider-456',
      start: now,
      end: fourHourLater
    });

    // Try to create a second appointment in the same slot to test validation
    await createAppointment.execute({
      clientId: 'client-789',
      providerId: 'provider-456',
      start: now,
      end: fourHourLater
    });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error('❌ Error creating appointment:', err.message);
  }
}

main();


/*
* DDD:
* - This is part of the Bootstrap Layer (wiring dependencies, not business logic).
* - Simulates a real application entry point (could be adapted to an HTTP controller, CLI, etc.).
*/

/*
* SOLID:
* Keeps use case logic separated and testable.
* Demonstrates Composition Root — assembling objects by wiring abstractions to concrete implementations.
*/