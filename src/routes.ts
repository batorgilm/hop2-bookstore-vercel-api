import { Response, Request, Express } from "express";

const routes = (app: Express) => {
  app.get("/api", (req: Request, res: Response) => {
    res.send({
      status: 200,
      data: {
        msg: "success",
      },
    });
  });
};
export default routes;
