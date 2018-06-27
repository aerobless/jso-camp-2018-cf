import {Request, Response} from 'express';

import {KickerboxManager} from './app/kickerboxManager';
import {ApiError} from "./app/apiError";

export function get(req: Request, res: Response) {

    let kickerboxManager: KickerboxManager = new KickerboxManager();

    try {
        if (req.path) {
            const kickerboxId = req.path.substring(1);
            const result = kickerboxManager.getKickerBox(Number(kickerboxId));
            if (result) {
                res.status(200);
                res.send(result);
            }
            res.status(404);
            res.send(new ApiError(404, "NotFound", "Entry " + kickerboxId + " not found."));
        } else {
            const result = kickerboxManager.getKickerBoxes();
            res.status(200);
            res.send(result);
        }
    } catch (err) {
        res.status(500);
        res.send(new ApiError(500, "InternalError", err));
    }
}
