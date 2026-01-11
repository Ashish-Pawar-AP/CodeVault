import express from 'express'
import cors from 'cors'

import authRoutes from "./routes/auth.routes.js";
import snippetRoutes from "./routes/snippet.routes.js";
import moduleRoutes from "./routes/module.routes.js";
import collectionRoutes from "./routes/collection.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/snippets", snippetRoutes);
app.use("/api/v1/module", moduleRoutes);
app.use("/api/v1/collection", collectionRoutes);

export default app
