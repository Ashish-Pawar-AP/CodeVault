import Module from "../models/Module.models.js";

/* CREATE MODULE */
export const createModule = async (req, res) => {
  const module = await Module.create({
    ...req.body,
    userId: req.user._id,
  });

  res.status(201).json(module);
};

/* GET MODULES */
export const getModules = async (req, res) => {
  const modules = await Module.find({ userId: req.user._id }).populate(
    "snippetIds"
  );

  res.status(200).json(modules);
};

/* UPDATE MODULE */
export const updateModule = async (req, res) => {
  const module = await Module.findOneAndUpdate(
    { _id: req.params.id, userId: req.user._id },
    req.body,
    { new: true }
  );

  if (!module) {
    return res.status(404).json({ message: "Module not found" });
  }

  res.status(200).json(module);
};

/* DELETE MODULE */
export const deleteModule = async (req, res) => {
  const module = await Module.findOneAndDelete({
    _id: req.params.id,
    userId: req.user._id,
  });

  if (!module) {
    return res.status(404).json({ message: "Module not found" });
  }

  res.status(200).json({ message: "Module deleted" });
};
