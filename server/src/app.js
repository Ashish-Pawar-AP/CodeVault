import express from 'express'
import cors from 'cors'

import authRoutes from "./routes/auth.routes.js";
import snippetRoutes from "./routes/snippet.routes.js";
import moduleRoutes from "./routes/module.routes.js";
import collectionRoutes from "./routes/collection.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/snippets", snippetRoutes);
app.use("/api/modules", moduleRoutes);
app.use("/api/collection", collectionRoutes);

export default app
