// Here's the core function of our hello world example. There is no use of any
// cloud function API here.

import * as moment from 'moment';

export function helloFn() {
    const now = moment();
    const later = moment().add(6, 'w');
    const n = later.diff(now, 'd');
    return 'Hoi du! Ich bin en REST Endpoint ^__^ ... oder au nöd' + n;
}
