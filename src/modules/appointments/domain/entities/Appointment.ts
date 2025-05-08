import { TimeSlot } from "../value-objects/TimeSlot";

// pure domain entity
export class Appointment {

  constructor(
    public readonly id: string,
    public readonly clientId: string,
    public readonly providerId: string,
    public readonly timeSlot: TimeSlot,
  ) {}
}

/*
* Concept Focus:
* DDD:
* - This entity reflects business rules: it must have client, provider, and a valid date.
* - Kept pure: it doesn't know about databases, HTTP, or frameworks.
*
* SOLID:
* - Single Responsibility: The class only represents an appointment and validates its creation.
* - Open/Closed: The class can be extended with new properties or methods without modifying existing code.
* - Liskov Substitution: The class can be replaced with subclasses without altering the correctness of the program.
* - Interface Segregation: The class doesn't implement any interfaces, but if it did, it would only implement what is necessary.
* - Dependency Inversion: The class doesn't depend on any low-level modules or frameworks.
*/

/*
* Why use a TimeSlot Value Object?
* - Keeps the domain model Entity clean: The TimeSlot class encapsulates the logic related to time slots, allowing the Appointment entity to focus on its own responsibilities.
* - The TimeSlot is a first-class domain citizen, encapsulating time business rules.
* - The domain becomes more expressive and easier to understand.
* - DDD:
*  - The domain becomes more ubiquitous — using real-world terminology (timeSlot) rather than primitives (Date).
*  - Clear separation between entities (Appointment) and value objects (TimeSlot).
* - SOLID:
*  - SRP: Appointment only models an appointment.
*  - DIP: If services depend on this entity, they depend on an abstraction of business logic, not infrastructure or database details.
*/

