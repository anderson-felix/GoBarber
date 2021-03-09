import Router from 'express';
import { parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.get('/', (req, res) => {
  const appointment = appointmentsRepository.all();
  return res.json(appointment);
});

appointmentsRouter.post('/', (req, res) => {
  const { provider, date } = req.body;

  const parsedDate = parseISO(date);

  const createAppointment = new CreateAppointmentService(
    appointmentsRepository,
  );

  const appointment = createAppointment.execute({ date: parsedDate, provider });

  return res.status(200).json(appointment);
});
export default appointmentsRouter;
