# 🧾 User Stories & Use Cases – Service Scheduling System

This document captures the main **user stories** and **use cases** for the Service Scheduling System, which simulates a scheduling platform for clients and service providers. It is designed to guide the implementation using **DDD** and **SOLID** principles.

---

## 👥 User Stories

### 📌 As a **Client**:
- I want to view a list of available service providers, so I can choose one to book an appointment with.
- I want to see the services offered by a provider, so I know what kind of help I can get.
- I want to view the availability of a selected provider, so I can book an appointment at a convenient time.
- I want to book an appointment with a provider, so I can receive the service I need.
- I want to cancel a scheduled appointment, in case I can't make it.
- I want to view a list of my upcoming appointments, so I can stay organized.
- *(Optional)* I want to reschedule my appointment, in case I need to change the time.

---

### 📌 As a **Service Provider**:
- I want to register myself as a provider, so I can be found by clients.
- I want to define my availability, so clients can schedule time with me.
- I want to manage my availability, to reflect schedule changes.
- I want to view a list of my upcoming appointments, so I can prepare ahead of time.
- I want to cancel appointments if necessary, for emergencies or conflicts.

---

## 📘 Use Cases

### ✅ Use Case: Register as Provider
- **Actor**: Service Provider  
- **Preconditions**: None  
- **Steps**:
  1. Provider submits registration form with name, email, and role.
  2. System creates a provider profile.
- **Postconditions**: Provider profile is saved and can be updated later.

---

### ✅ Use Case: Define Availability
- **Actor**: Provider  
- **Preconditions**: Provider must be registered.  
- **Steps**:
  1. Provider selects days of the week and time ranges.
  2. System saves availability without overlaps.
- **Postconditions**: Availability is stored and visible to clients.

---

### ✅ Use Case: View Providers
- **Actor**: Client  
- **Preconditions**: Providers exist in the system.  
- **Steps**:
  1. Client opens provider list.
  2. System displays list of providers and their services.
- **Postconditions**: None.

---

### ✅ Use Case: Book Appointment
- **Actor**: Client  
- **Preconditions**: Provider must have availability.  
- **Steps**:
  1. Client selects provider, service, and available time slot.
  2. System checks for conflicts.
  3. Appointment is created and time slot is marked as unavailable.
- **Postconditions**: Appointment is saved and visible to both parties.

---

### ✅ Use Case: Cancel Appointment
- **Actor**: Client or Provider  
- **Preconditions**: Appointment must exist and belong to actor.  
- **Steps**:
  1. Actor selects appointment to cancel.
  2. Optionally provides a reason.
  3. System updates appointment status to cancelled.
- **Postconditions**: Time slot becomes available again (if rule allows).

---

### ✅ Use Case: List Upcoming Appointments
- **Actor**: Client or Provider  
- **Preconditions**: User is authenticated.  
- **Steps**:
  1. User accesses dashboard or schedule page.
  2. System retrieves upcoming appointments.
- **Postconditions**: Appointments are displayed in chronological order.

---

### ✅ Use Case: Reschedule Appointment *(Optional)*
- **Actor**: Client  
- **Preconditions**: Appointment must exist and not be in the past.  
- **Steps**:
  1. Client selects a new available time slot.
  2. System validates new slot and updates appointment.
- **Postconditions**: Appointment time is updated.

---
