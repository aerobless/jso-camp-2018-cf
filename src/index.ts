import {Request, Response} from 'express';

import {getKickerboxes} from './app/getKickerboxes';

export function get(req: Request, res: Response) {
    try {
        const result = getKickerboxes();
        res.status(200);
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(err);
    }
};
