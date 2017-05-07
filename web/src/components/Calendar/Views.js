import { views } from './utils/constants';
import Monthly from './components/Monthly';
import Daily from './components/Daily';
import Weekly from './components/Weekly';
import Agenda from './components/Agenda';

const VIEWS = {
  [views.MONTHLY]: Monthly,
  [views.WEEKLY]: Weekly,
  [views.DAILY]: Daily,
  [views.AGENDA]: Agenda
};

export default VIEWS;
