import { IArticleCreateDTO } from "@modules/articles/dtos/ICreateArticleDTO";
import { Article } from "@modules/articles/infra/entities/Article";
import { IArticleRepository } from "@modules/articles/repositories/IArticleRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateArticleUseCase {
  constructor(
    @inject("ArticlesRepositories")
    private userRepository: IArticleRepository
  ) { }

  public async execute({
    featured,
    title,
    url,
    imageUrl,
    newsSite,
    summary,
    publishedAt,
    launches,
    events,
  }: IArticleCreateDTO): Promise<Article> {
    return await this.userRepository.create({
      featured,
      title,
      url,
      imageUrl,
      newsSite,
      summary,
      publishedAt,
      launches,
      events,
    });
  }
}

export { CreateArticleUseCase }