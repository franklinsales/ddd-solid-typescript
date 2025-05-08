import express from 'express';
import { json } from 'body-parser';

import { InMemoryAppointmentRepository } from '../modules/appointments/infra/repositories/InMemoryAppointmentRepository';
import { CreateAppointmentUseCase } from '../modules/appointments/application/use-cases/CreateAppointmentUseCase';
import { CreateAppointmentController } from '../modules/appointments/interfaces/http/controllers/CreateAppointmentController';

const app = express();
app.use(json());

// Composition Root
const appointmentRepository = new InMemoryAppointmentRepository();
const createAppointmentUseCase = new CreateAppointmentUseCase(appointmentRepository);
const createAppointmentController = new CreateAppointmentController(createAppointmentUseCase);

// Routes
app.post('/appointments', async (req, res) => {
  await createAppointmentController.handle(req, res);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
