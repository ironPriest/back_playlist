import {Request, Response, Router} from "express";
import {productsRepository} from "../rerepositories/products-repository";
import {body, validationResult} from "express-validator";
import {inputValidationMiddleware} from "../middlewares/input-validation-middleware";

export const productsRouter = Router ({})

const titleValidation = body('title').trim().isLength({min: 3, max: 10}).withMessage('length')

productsRouter.get('/', (req: Request, res: Response) => {
    const foundProducts = productsRepository.findProducts(req.query.title?.toString());
    res.send(foundProducts)
})
productsRouter.get('/:id', (req: Request, res: Response) => {
    let product = productsRepository.findProductById(+req.params.id)
    if (product) {
        res.send(product)
    } else {
        res.send(404)
    }
})
productsRouter.put('/:id',
    titleValidation,
    inputValidationMiddleware,
    (req: Request, res: Response) => {
    const isUpdated = productsRepository.updateProduct(+req.params.id, req.body.title)
    if (isUpdated) {
        const product = productsRepository.findProductById(+req.params.id)
        res.send(product)
    } else {
        res.send(404)
    }
})
productsRouter.delete('/:id', (req: Request, res: Response) => {
    const isDeleted = productsRepository.deleteProduct(+req.params.id)
    if (isDeleted) {
        res.send(204)
    } else {
        res.send(404)
    }
})
productsRouter.post('/',
    titleValidation,
    inputValidationMiddleware,
    (req: Request, res: Response) => {
    const errors = validationResult(req);
    const newProduct = productsRepository.createProduct(req.body.title)
    res.status(201).send(newProduct)
})