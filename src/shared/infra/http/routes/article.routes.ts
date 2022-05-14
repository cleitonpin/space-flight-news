

import { CreateArticleController } from '../../../../controllers/article-controller';
import { Router } from 'express';

const articlesRoutes = Router();

const articleController = new CreateArticleController();

articlesRoutes.post('/article', articleController.create)
articlesRoutes.get('/article', articleController.listAll)
articlesRoutes.get('/article/:id', articleController.listOne)
articlesRoutes.put('/article/:id', articleController.update)
articlesRoutes.delete('/article/:id', articleController.delete)

export { articlesRoutes };