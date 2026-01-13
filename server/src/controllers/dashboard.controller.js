import Snippet from "../models/Snippets.models.js";
import Collection from "../models/Collection.models.js";
import Module from "../models/Module.models.js";

export const getDashboardData = async (req, res) => {
  try {
    const userId = req.user._id;

    const [
      snippetsCount,
      collectionsCount,
      modulesCount,
      recentSnippets,
      topSnippets,
      categoryStats,
    ] = await Promise.all([
      Snippet.countDocuments({ userId }),
      Collection.countDocuments({ userId }),
      Module.countDocuments({ userId }),

      Snippet.find({ userId })
        .sort({ updatedAt: -1 })
        .limit(5)
        .select("title language updatedAt"),

      Snippet.find({ userId })
        .sort({ copyCount: -1 })
        .limit(5)
        .select("title copyCount"),

      Snippet.aggregate([
        { $match: { userId } },
        { $group: { _id: "$category", count: { $sum: 1 } } },
      ]),
    ]);

    res.json({
      stats: {
        snippets: snippetsCount,
        collections: collectionsCount,
        modules: modulesCount,
      },
      recentSnippets,
      topSnippets,
      categoryStats,
    });
  } catch (err) {
    res.status(500).json({ message: "Dashboard data error" });
  }
};
