**The project serves as a study case** for applying Domain-Driven Design (DDD) and SOLID principles using TypeScript.

## ✅ In-Scope
The follwing feature will be designed and implemented:

#### 🎭 User Roles
* **Client:** Books and manages their appointments.
* **Provider:** Manages availability and handles appointments.

#### 📦 Core Functionalities
* **User Registration (minimal logic):** Only email, name, and role (Client or Provider).
* **Define Availability:** Providers set time ranges for available slots.
* **View Providers:** Clients can see all available providers.
* **Book Appointment:** Clients can select a service and time slot.
* **Cancel Appointment:** Either party can cancel with a reason.
* **Prevent Double Booking:** Only one booking per time slot.
* **List Appointments:** Users can view upcoming appointments.

#### 🧠 Domain Model
* Design using entities, value, objects, aggregates, and repositories.
* Keep domain logic framework-agnostic and testable.

#### 🔗 Architecture
* Layered with **Domain, Application, Infrastructure, and Interface** layers.
* Use **interfaces, dependency inversion, and sepration concerns**.
* Persistence layer can be mocked or in-memory for simplicity.

## ❌ Out of Scope
The following are explicitly excluded from this project (but could be added later):
* Authentication and Login
* Payment Processing
* Notification or reminders
* UI/frontend (except  CLI or minimal API for testing)
* Admin or reporting features.
* Multi-language or timezone support.

## 🛠️ Constraints
* Must be implemented in TypeScript
* Should follow **DDD (Domain-Driven Design)** tactical patterns and **SOLID desing**
* Focus is on backend architecture, not presentation layer.

## Expected Deliverables
* Fully structured TypeScript project with clear separation of DDD layers.
* Example use cases implemented (e.g., create provider, book appointment)
* Unit tests for domain entities and use cases.
* Markdown documentation for:
  * Domain Gloassary
  * Use case definitions
  * Architecture overview