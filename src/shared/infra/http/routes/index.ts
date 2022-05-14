import { Router } from "express";
import { articlesRoutes } from "./article.routes";

const router = Router()

router.get('/', (req, res) => res.status(200).json({ message: 'Back-end Challenge 2021 🏅 - Space Flight News' }))
router.use(articlesRoutes)

export { router }