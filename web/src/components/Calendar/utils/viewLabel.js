import { views } from './constants';
import defaultFormats from '../formats';
import localizer from '../localizer';

import VIEWS from '../Views';

const Formats = {
  [views.MONTHLY]: 'monthHeaderFormat',
  [views.WEEKLY]: 'dayRangeHeaderFormat',
  [views.DAILY]: 'dayHeaderFormat',
  [views.AGENDA]: 'agendaHeaderFormat'
}

export default function viewLabel(date, view, formats, culture){
  let View = VIEWS[view];
  let headerSingle = view === views.WEEKLY || view === views.DAILY

  formats = defaultFormats(formats || {})

  let headerFormat = formats[Formats[view]];

  return headerSingle
    ? localizer.format(date, headerFormat, culture)
    : localizer.format(View.range(date, { culture }), headerFormat, culture)
}
