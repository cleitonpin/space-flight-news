import { ArticleRepository } from "@modules/articles/infra/repositories/ArticleRepository";
import { IArticleRepository } from "@modules/articles/repositories/IArticleRepository";
import { container } from "tsyringe";

container.registerSingleton<IArticleRepository>("ArticlesRepositories", ArticleRepository);