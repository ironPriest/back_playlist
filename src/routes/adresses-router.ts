import {Request, Response, Router} from "express";
import {adressesRepository} from "../rerepositories/adresses-repository";

export const adressesRouter = Router ({})

adressesRouter.get('/', (req: Request, res: Response) => {
    const adresses = adressesRepository.getAdresses()
    res.send(adresses)
})
adressesRouter.get('/:id', (req: Request, res: Response) => {
    let adress = adressesRepository.findAdressById(+req.params.id)
    if (adress) {
        res.send(adress)
    } else {
        res.send(404)
    }
})