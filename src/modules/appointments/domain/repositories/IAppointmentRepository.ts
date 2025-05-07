import { Appointment } from '../entities/Appointment';
import { TimeSlot } from '../value-objects/TimeSlot';

export interface IAppointmentRepository {
  save(appointment: Appointment): Promise<void>;

  findById(id: string): Promise<Appointment | null>;

  findByProviderAndTimeSlot(
    providerId: string,
    timeSlot: TimeSlot
  ): Promise<Appointment | null>;

  findAllByClientId(clientId: string): Promise<Appointment[]>;
}

/**
 * Concept Focus:
 * Why use a repository?
 * - Repositories are a design pattern that provides an abstraction layer between the domain model and the data access layer.
 * - They encapsulate the logic required to access data sources, allowing the domain model to remain clean and focused on business logic.
 * - Repositories provide a way to manage the lifecycle of domain entities, including creation, retrieval, and deletion.
 * - In DDD, aggregates/entities shouldn't talk to the database directly. Instead, they should use repositories to interact with the data source.
 * - Repositories help to keep the domain model pure and free from infrastructure concerns.
 * - They allow for easier testing and mocking of data access logic, as the domain model can be tested independently of the data source.
 * 
 * Why define interfaces here (in domain/)?
 * The domains depends only on abstractions (DIP - Dependency Inversion Principle). This means that the domain layer should not depend on concrete implementations of repositories, but rather on interfaces that define the contract for the repository.
 * In the infra/ layer, there is the implementation of the repository that interacts with the database (e.g., Prisma, TypeORM, PostgreSQL, MongoDB, etc.).
 */