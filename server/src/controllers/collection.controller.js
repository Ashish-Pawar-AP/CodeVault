import Collection from "../models/collection.model.js";

/* CREATE */
export const createCollection = async (req, res) => {
  try {
    const collection = await Collection.create({
      ...req.body,
      userId: req.user._id,
    });

    res.status(201).json(collection);
  } catch {
    res.status(500).json({ message: "Failed to create collection" });
  }
};

/* GET ALL */
export const getCollections = async (req, res) => {
  const collections = await Collection.find({ userId: req.user._id });
  res.status(200).json(collections);
};

/* UPDATE */
export const updateCollection = async (req, res) => {
  const collection = await Collection.findOneAndUpdate(
    { _id: req.params.id, userId: req.user._id },
    req.body,
    { new: true }
  );

  if (!collection) {
    return res.status(404).json({ message: "Collection not found" });
  }

  res.status(200).json(collection);
};

/* DELETE */
export const deleteCollection = async (req, res) => {
  const collection = await Collection.findOneAndDelete({
    _id: req.params.id,
    userId: req.user._id,
  });

  if (!collection) {
    return res.status(404).json({ message: "Collection not found" });
  }

  res.status(200).json({ message: "Collection deleted" });
};
