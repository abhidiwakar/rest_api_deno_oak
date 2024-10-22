import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { noRouteFound } from "./middlewares/notFound.ts";
import { authorRouter } from "./modules/author/routes.ts";
import { postRouter } from "./modules/post/routes.ts";
import { errorHandler } from "./middlewares/errorHandler.ts";

const app = new Application();
const router = new Router();

router.use("/author", authorRouter.routes());
router.use("/post", postRouter.routes());

app.use(noRouteFound);
app.use(errorHandler);
app.use(router.routes());

await app.listen({ port: 8000 });
