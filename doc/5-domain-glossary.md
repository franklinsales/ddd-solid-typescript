# 📚 Domain Glossary – Service Scheduling System

This glossary defines the domain terms used throughout the system. It serves as the **ubiquitous language** shared between developers and domain stakeholders.

---

### 📌 Appointment
- **Definition**: A scheduled meeting between a client and a service provider for a specific service at a defined time.
- **Notes**: It includes date, time, duration, status (scheduled, canceled, completed).

---

### 📌 Availability
- **Definition**: A time range in which a provider is available to accept appointments.
- **Notes**: Providers can define one or more non-overlapping availability slots.

---

### 📌 Client
- **Definition**: A user who can view providers and book services.
- **Notes**: Also referred to as "customer" or "end user" in some contexts.

---

### 📌 Provider (Service Provider)
- **Definition**: A user who offers services and defines availability for appointments.
- **Notes**: Can manage their schedule and view their appointments.

---

### 📌 Service
- **Definition**: A type of work or offering provided by a service provider (e.g., haircut, consultation).
- **Notes**: Each service may have its own duration and description.

---

### 📌 Time Slot
- **Definition**: A specific portion of time that can be booked within a provider's availability.
- **Notes**: Time slots are created dynamically based on defined availability.

---

### 📌 Booking
- **Definition**: The act of a client reserving a time slot with a provider.
- **Notes**: Booking creates an appointment record in the system.

---

### 📌 Cancellation
- **Definition**: The act of voiding a previously scheduled appointment.
- **Notes**: Can be initiated by either the client or provider, depending on rules.

---

### 📌 Schedule
- **Definition**: The provider’s calendar view of upcoming or past appointments.
- **Notes**: Used to manage workload and availability.

---

### 📌 User
- **Definition**: A system participant. Can be either a client or a provider.
- **Notes**: User identity is managed through the authentication system.

---

### 📌 Domain Rule
- **Definition**: A rule or constraint that governs how appointments, availability, or cancellations work.
- **Examples**:
  - Appointments cannot overlap.
  - Cancellations must occur at least 1 hour in advance.

---

### 📌 Ubiquitous Language
- **Definition**: The shared vocabulary between developers and stakeholders.
- **Notes**: All code (classes, methods, use cases) should reflect this language.

---
