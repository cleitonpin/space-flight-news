import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreateArticleUseCase } from "../modules/articles/use-cases/article/create-article-use-case";
import { DeleteArticleUseCase } from "../modules/articles/use-cases/article/delete-article-use-case";
import { ListAllArticleUseCase } from "../modules/articles/use-cases/article/list-all-article-use-case";
import { ListOneArticleUseCase } from "../modules/articles/use-cases/article/list-one-article-use-case";
import { UpdateArticleUseCase } from "../modules/articles/use-cases/article/update-article-use-case";

class CreateArticleController {
  async create(req: Request, res: Response): Promise<Response> {
    const {
      featured,
      title,
      url,
      imageUrl,
      newsSite,
      summary,
      publishedAt,
      launches,
      events
    } = req.body;

    const createArticleUseCase = container.resolve(CreateArticleUseCase)
    const article = await createArticleUseCase.execute({
      featured,
      title,
      url,
      imageUrl,
      newsSite,
      summary,
      publishedAt: new Date(),
      launches,
      events
    })

    return res.status(201).json(article)
  }

  async listAll(req: Request, res: Response): Promise<Response> {
    const { skip = 10, take = 1000 } = req.query

    const listAllArticleUseCase = container.resolve(ListAllArticleUseCase)
    const articles = await listAllArticleUseCase.execute(Number(skip), Number(take))

    return res.json(articles)
  }

  async listOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const listOneArticleUseCase = container.resolve(ListOneArticleUseCase)
    const article = await listOneArticleUseCase.execute(Number(id))

    return res.json(article)
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const updateArticleUseCase = container.resolve(UpdateArticleUseCase)

    const articleUpdated = await updateArticleUseCase.execute(Number(id), req.body)

    return res.status(200).json(articleUpdated)
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const deleteArticleUseCase = container.resolve(DeleteArticleUseCase)
    await deleteArticleUseCase.execute(Number(id))

    return res.sendStatus(204)
  }
}

export { CreateArticleController }