# 📌 Essential Projects (System Actors & Components)
This list is a clean list of project stakeholders. Here we have only the **essential stakeholders** or **high-level system participants** in the system design and DDD.

For our Service Scheduling System we have:

👤 1. Client App (Client User)
* Description: End user who schedules appointments with service providers.
* Interactions:
	* Views available providers and services.
	* Selects availability and books appointments.
	* Cancels appointments.
* Type: External Actor (User-Facing)

👤 2. Service Provider App (Provider User)
* Description: End user who defines availability and manages appointments.
* Interactions:
	* Creates and updates their availability.
	* Views and manages upcoming bookings.
	* Cancels or rejects appointments.
* Type: External Actor (User-Facing)

⚙️ 3. Scheduling System (Internal Core)
* Description: The actual backend system that handles domain logic, rules, and scheduling workflows.
* Responsibilities:
	* Manage booking conflicts.
	* Enforce business rules (e.g., no double booking, cancellation windows).
	* Store and retrieve appointment data.
* Type: Internal System (Main Domain)

📬 4. Notification System (Optional External Integration)
* Description: Hypothetical external system to send confirmations, reminders, or cancellations (could be via email, SMS, etc.).
* Type: External System
* Note: Out of scope for now, but useful for future integrations.

📒 5. User Management System
* Description: Handles user registration and basic profile management.
* Type: Internal Subsystem (or can be decoupled as external if using OAuth/Auth service)