import { Request, Response } from 'express';
import { CreateAppointmentUseCase } from '../../../application/use-cases/CreateAppointmentUseCase';

export class CreateAppointmentController {
  constructor(private readonly createAppointmentUseCase: CreateAppointmentUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { clientId, providerId, start, end } = req.body;

    try {
      await this.createAppointmentUseCase.execute({
        clientId,
        providerId,
        start: new Date(start),
        end: new Date(end)
      });

      return res.status(201).json({ message: 'Appointment created successfully' });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }
}

/*
* Concept Breakdown
* Controller Role
* - Translates HTTP requests -> DTOs.
* - Delegates logic to Application Layer (use case).
* - Translates results -> HTTP responses.
*/

/*
* DDD:
* - This lives in the Interface Layer, closest to the user.
* - No business logic is allowed here - just data transformation and delegation.
*/

/*
* SRP: Handles HTTP concerns only.
* ISP: Keeps controllers lean and focused.
*/


/* Summary:
* You now have a full request flow: HTTP → controller → use case → domain → repository.
*/