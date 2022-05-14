import { IArticleRepository } from "@modules/articles/repositories/IArticleRepository";
import { AppError } from "@shared/errors/appError";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteArticleUseCase {
  constructor(
    @inject("ArticlesRepositories")
    private userRepository: IArticleRepository
  ) { }

  public async execute(id: number): Promise<void> {
    const article = await this.userRepository.findById(id);

    if (!article) {
      throw new AppError("Article not found");
    }

    await this.userRepository.delete(id);
  }
}

export { DeleteArticleUseCase };