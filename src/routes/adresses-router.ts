import {Request, Response, Router} from "express";

const adresses = [{id: 1, value: 'Nezalezhnasti 12'}, {id: 2, value: 'Selickaga 11'}]

export const adressesRouter = Router ({})

adressesRouter.get('/', (req: Request, res: Response) => {
    res.send(adresses)
})
adressesRouter.get('/:id', (req: Request, res: Response) => {
    let adress = adresses.find(p => p.id === +req.params.id)
    if (adress) {
        res.send(adress)
    } else {
        res.send(404)
    }
})