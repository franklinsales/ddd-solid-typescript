export class TimeSlot {
  constructor(
    public readonly start: Date,
    public readonly end: Date
  ) {
    if (start >= end) {
      throw new Error('Start time must be before end time.');
    }
    if (start.getTime() < Date.now()) {
      throw new Error(
        `Invalid time slot: start time (${start.toISOString()}) is in the past. Current time is (${new Date().toISOString()}).`
      );
    }
  }

  public getDurationInMinutes(): number {
    const durationInMilliseconds = this.end.getTime() - this.start.getTime();
    const MILLISECONDS_IN_A_MINUTE = 60000;
    return Math.floor(durationInMilliseconds / MILLISECONDS_IN_A_MINUTE);
  }

  equals(other: TimeSlot): boolean {
    return this.start.getTime() === other.start.getTime() &&
           this.end.getTime() === other.end.getTime();
  }
}

/*
* Concept Focus:
* What is a Value Object?
* - A Value Object is an object that contains attributes but has no conceptual identity. They are defined only by their attributes.
* - Value Objects are immutable, meaning that once they are created, their state cannot be changed.
* - They are used to describe aspects of the domain model that do not require a unique identity.
* - They can be compared based on their attributes.
* - They are often used to represent simple concepts like dates, money, or measurements.
*/

/*
* Why use a TimeSlot Value Object?
* - Keeps the domain model Entity clean: The TimeSlot class encapsulates the logic related to time slots, allowing the Appointment entity to focus on its own responsibilities.
* - Encapsulation: The TimeSlot class encapsulates the logic related to time slots, such as validation and duration calculation.
* - Makes the code more readable: By using a dedicated class for time slots, the code becomes more self-explanatory and easier to understand.
*/

/*
* DDD:
* - This protects business rules around time (e.g., no backwards slots, no past slots).
* - Used within an entity (Appointment) to encapsulate time-related logic, but reausable across different entities.
*/

/*
* SOLID:
* - Single Responsibility Principle (SRP): The class only represents a time slot and validates its creation.
* - Open/Closed Principle (OCP): The class can be extended with new properties or methods without modifying existing code.
*/