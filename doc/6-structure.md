
## Structure

📦 service-scheduling-system/
├── 📁 src/
│   ├── 📁 modules/
│   │   ├── 📁 appointments/         # Bounded Context: Appointment Management
│   │   │   ├── 📁 domain/           # Core domain: Entities, Value Objects, Aggregates
│   │   │   │   ├── Appointment.ts
│   │   │   │   ├── AppointmentStatus.ts
│   │   │   │   └── exceptions/
│   │   │   ├── 📁 application/      # Use Cases (Application Services)
│   │   │   │   ├── CreateAppointment.ts
│   │   │   │   ├── CancelAppointment.ts
│   │   │   │   └── GetUpcomingAppointments.ts
│   │   │   ├── 📁 infra/            # Infrastructure: DB, frameworks, external tools
│   │   │   │   ├── repositories/
│   │   │   │   │   └── TypeORMAppointmentRepository.ts
│   │   │   │   └── persistence/
│   │   │   │       └── AppointmentSchema.ts
│   │   │   ├── 📁 interfaces/       # Controllers, routes, DTOs
│   │   │   │   ├── http/
│   │   │   │   │   ├── AppointmentController.ts
│   │   │   │   │   └── routes.ts
│   │   │   │   └── dtos/
│   │   │   │       ├── CreateAppointmentDTO.ts
│   │   │   │       └── CancelAppointmentDTO.ts
│   │   │   └── 📁 mappers/          # Maps between domain and persistence or DTO
│   │   │       └── AppointmentMapper.ts
│   │   ├── 📁 availability/         # Bounded Context: Provider Availability
│   │   │   └── ...
│   │   ├── 📁 users/                # Bounded Context: Clients & Providers
│   │   │   └── ...
│   │   └── 📁 services/             # Bounded Context: Service catalog
│   │       └── ...
│   ├── 📁 shared/                   # Shared Kernel: Cross-cutting utilities
│   │   ├── 📁 domain/
│   │   │   ├── BaseEntity.ts
│   │   │   ├── ValueObject.ts
│   │   │   └── Identifier.ts
│   │   ├── 📁 application/
│   │   │   └── BaseUseCase.ts
│   │   ├── 📁 infra/
│   │   │   ├── logger/
│   │   │   ├── http/
│   │   │   └── orm/
│   │   └── 📁 utils/
│   │       └── date/
│   ├── 📁 config/                   # App configuration (env, constants)
│   ├── 📁 main/                     # Entry point, app startup
│   │   ├── server.ts
│   │   └── routes.ts
│   └── 📁 container/                # Dependency Injection config
│       └── index.ts
├── 📁 tests/                        # Unit and integration tests
│   ├── appointments/
│   └── shared/
├── 📁 docs/                         # Documentation (user stories, glossary, diagrams)
│   ├── USER_STORIES_AND_USE_CASES.md
│   └── DOMAIN_GLOSSARY.md
├── .env
├── .eslintrc.js
├── tsconfig.json
├── package.json
└── README.md

## ✅ How This Structure Aligns with DDD and SOLID

| Concept  |  Explanation |
| ------------ | ------------ |
| DDD: Bounded Contexts  | Each folder under `modules/` is a separate domain boundary (appointments, users, availability). |
| DDD: Layers  | Each module has `domain`, `application`, `infra`, `interfaces`, and `mappers` - respecting separation of concerns.  |
| SOLID  | Use cases follow SRP. Interfaces (repositories, controllers) follow ISP, and DIP via dependency injection  |
| Reusability  | `shared/` contains cross-cutting concerns used across modules (e.g., base entities, error types, logging).  |
| Testability  | Business logic is isolated in `application` and `domain` layers, allowing easy unit testing. |
| Scalability  | New modules (like Payments, Notifications) can be added under modules/ without disrupting the rest.  |

### 🔹 src/modules/
What it is: Contains all the core domain modules each one representing a bounded context (e.g., appointments, availability, users).

DDD:
* Each subfolder is a bounded context, clearly separated and encapsulated.
* Avoids the "big ball of mud" anti-pattern.

SOLID:
* Encourages SRP (Single Responsibility Principle) by separating domain concerns.
* Enables OCP (Open/Closed Principle) since each context can evolve independently.

📦 modules/appointments/
├── domain/           # Entities, Value Objects, domain rules, exceptions
├── application/      # Use cases (Application Services)
├── interfaces/       # Input/output: controllers, DTOs
├── infra/            # Framework-specific adapters (DB, external services)
├── mappers/          # Transforms between domain ↔ persistence or DTOs

### 🔹 domain/
Purpose: Core of the business logic.
* Entities: With identify and lifecycle (Appointment, Provider)
* Value Objects: Immutable domain data (TimeRange, Slot)
* Aggregates: Group root entities with business rules
* Domain Exceptions: Business-level validation and errors

DDD:
* Expresses the ubiquitous language.
* Pure, isolated — not dependent on any tech or framework.

SOLID:
* Uses SRP by keeping logic strictly business-focused.
* Encourages DIP: domain does not depend on infrastructure.

### 🔹 application/
Purpose: Contains use cases or application services — orchestrates the interaction between domain and interfaces.
* Examples: CreateAppointment.ts, CancelAppointment.ts
* Calls domain logic, validates application-level concerns

DDD:
* Implements application layer from DDD architecture.
* Coordinates domain logic but contains no business rules itself.

SOLID:
* High-level modules depend on abstractions (interfaces for repositories).
* Facilitates unit testing and maintainability (SRP, DIP).

### 🔹 interfaces/
Purpose: Handles communication with the outside world.
* HTTP Controllers
* DTOs (data transfer objects)
* Input validation

DDD:
* Is part of the interface layer, translating external requests into domain input.
* Bridges between tech and the domain model.

SOLID:
* Uses ISP: DTOs are small, context-specific contracts.
* Follows SRP by keeping concerns like request parsing and formatting out of use cases.

### 🔹 infra/
Purpose: Framework-dependent code like:
* Repositories (e.g., TypeORM, Prisma)
* External APIs (e.g., NotificationService)
* Persistence schemas (e.g., DB schema mappings)

DDD:
* Implements infrastructure layer, fulfilling domain interfaces.

SOLID:
* Inverts dependency flow: the domain defines the interfaces, and infrastructure implements them.
* Complies with DIP and SRP.

### 🔹 mappers/
Purpose: Converts between:
* Domain models ↔ Persistence models (e.g., DB entities)
* Domain models ↔ DTOs

DDD:
* Supports persistence ignorance — domain models don’t know how they’re stored or transported.

SOLID:
* SRP: Mapping responsibility is cleanly isolated.
* Facilitates testable, clean data transformation.

### 🔹 shared/
Purpose: Reusable building blocks across all modules.
* Base entities and value objects
* Common domain errors
* Cross-module utilities (e.g., date utils)
* Logging, middleware, custom errors

DDD:
* Acts as a shared kernel for common concepts used by multiple contexts.

SOLID:
* Encourages DRY and SRP
* Clean separation of cross-cutting concerns

### 🔹 config/
Purpose: Centralized configuration
* Environment variables loader
* App constants
* Feature flags

DDD:
* Not domain-related, but useful for app infrastructure.

SOLID:
* SRP: Centralized responsibility for environment and runtime configs.

### 🔹 container/
Purpose: Dependency Injection container setup.
* Binds interfaces to implementations
* Promotes flexibility and testability

DDD & SOLID:
* Key to DIP — domain and application code depend on interfaces, not implementations.
* You can swap DB adapters, services, etc., without changing domain logic.

### 🔹 main/
Purpose: Application bootstrap logic.
* Starts server
* Loads routes
* Loads container

DDD:
* Implements the composition root.
* Not part of the domain.

SOLID:
* Keeps startup code isolated and separate from logic — follows SRP.

### 🔹 tests/
Purpose: Organize unit, integration, and e2e tests.
* Match modules structure for clarity
* Use test doubles for domain isolation

SOLID:
Highly testable code due to clean architecture and separation of responsibilities.

### 🔹 docs/
Purpose: Documentation to aid development and domain understanding.
* User stories, use cases
* Domain glossary
* Diagrams

DDD:
* Captures and communicates the ubiquitous language.
* Enhances communication with stakeholders and across dev teams.

### ✅ Summary Table

| Folder        | Purpose                         | DDD Layer            | SOLID Principles     |
|---------------|----------------------------------|-----------------------|-----------------------|
| `domain/`     | Core domain logic                | Domain Model          | SRP, DIP              |
| `application/`| Use cases                        | Application Layer     | SRP, DIP              |
| `interfaces/` | Controllers, DTOs                | Interface Layer       | SRP, ISP              |
| `infra/`      | Repositories, DB, APIs           | Infrastructure Layer  | SRP, DIP              |
| `mappers/`    | Translators (DTO ↔ Domain)       | Adapter Layer         | SRP                   |
| `shared/`     | Shared domain building blocks    | Shared Kernel         | SRP, DRY              |
| `container/`  | DI setup                         | Composition Root      | DIP                   |
| `main/`       | App entry point                  | Bootstrap Layer       | SRP                   |
| `tests/`      | Test cases                       | N/A                   | Supports all SOLID    |
| `docs/`       | Domain and dev documentation     | N/A                   | Supports DDD practices|
