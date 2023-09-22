"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "../mongoose";
import Node from "../models/node.model";

export async function fetchNodes(pageNumber = 1, pageSize = 20) {
  connectToDB();

  // Calculate the number of nodes to skip based on the page number and page size.
  const skipAmount = (pageNumber - 1) * pageSize;

  const nodesQuery = Node.find({})
    .sort({ createdAt: "desc" })
    .skip(skipAmount)
    .limit(pageSize);

  const totalNodesCount = await Node.countDocuments({});

  const nodes = await nodesQuery.exec();

  const isNext = totalNodesCount > skipAmount + nodes.length;

  return { nodes, isNext };
}

interface Params {
  street: string;
  building: string;
  entrance: string;
  placement: string;
  description: string;
  tel1: string;
  comment1: string;
  tel2: string;
  comment2: string;
  gw: string;
  fibers: string;
  user: string;
  path: string;
}

export async function addNode({
  street,
  building,
  entrance,
  placement,
  description,
  tel1,
  comment1,
  tel2,
  comment2,
  gw,
  fibers,
  user,
  path,
}: Params) {
  try {
    connectToDB();

    const isUnique = await Node.find({ street: street, building: building });
    if (isUnique.length > 0) {
      // console.log(isUnique);
      return JSON.stringify({ status: 409, message: "Адрес уже существует" });
    }

    const createdNode = await Node.create({
      street,
      building,
      entrance,
      placement,
      description,
      tel1,
      comment1,
      tel2,
      comment2,
      gw,
      fibers,
      user,
    });

    revalidatePath(path);

    return JSON.stringify({ ...createdNode._doc, status: 201 });
  } catch (error: any) {
    throw new Error(`Failed to create node: ${error.message}`);
  }
}

export async function fetchNodeById(threadId: string | string[]) {
  connectToDB();

  try {
    const thread = await Node.findById(threadId);
    return JSON.stringify({ ...thread._doc, status: 200 });
  } catch (error: any) {
    return JSON.stringify({ message: "Unable to fetch node", status: 400 });
    // throw new Error("Unable to fetch node");
  }
}

export async function searchNode({
  street,
  building,
}: {
  street: string;
  building: string;
}) {
  connectToDB();

  const regexStreet = new RegExp(street, "i");
  const regexBuilding = new RegExp(building, "i");

  try {
    const results = await Node.find(
      {
        $and: [
          { street: { $regex: regexStreet } },
          { building: { $regex: regexBuilding } },
        ],
      },
      "_id street building"
    );
    // throw new Error("Oops");
    return JSON.stringify(results);
  } catch (error: any) {
    throw error;
  }
}

interface UpdateParams {
  id: string | undefined;
  street: string;
  building: string;
  entrance: string;
  placement: string;
  description: string;
  tel1: string;
  comment1: string;
  tel2: string;
  comment2: string;
  gw: string;
  fibers: string;
  user: string;
  path: string;
}
export async function updateNode({
  id,
  street,
  building,
  entrance,
  placement,
  description,
  tel1,
  comment1,
  tel2,
  comment2,
  gw,
  fibers,
  user,
  path,
}: UpdateParams) {
  if (id === undefined) {
    throw new Error("Node undefined");
  }

  try {
    connectToDB();

    const updatedNode = await Node.findOneAndUpdate(
      { _id: id },
      {
        street,
        building,
        entrance,
        placement,
        description,
        tel1,
        comment1,
        tel2,
        comment2,
        gw,
        fibers,
        user,
      }
    );

    if (!updatedNode) {
      throw new Error("Node not found");
    }

    const node = await Node.findById(id, "_id");
    return JSON.stringify({ ...node._doc, status: 204 });
  } catch (error) {
    console.error("Error updating node:", error);
    throw error;
  }
}

// export async function deleteThread(id: string, path: string): Promise<void> {
//   try {
//     connectToDB();

//     // Find the thread to be deleted (the main thread)
//     const mainThread = await Thread.findById(id).populate("author community");

//     if (!mainThread) {
//       throw new Error("Thread not found");
//     }

//     // Fetch all child threads and their descendants recursively
//     const descendantThreads = await fetchAllChildThreads(id);

//     // Get all descendant thread IDs including the main thread ID and child thread IDs
//     const descendantThreadIds = [
//       id,
//       ...descendantThreads.map((thread) => thread._id),
//     ];

//     // Extract the authorIds and communityIds to update User and Community models respectively
//     const uniqueAuthorIds = new Set(
//       [
//         ...descendantThreads.map((thread) => thread.author?._id?.toString()), // Use optional chaining to handle possible undefined values
//         mainThread.author?._id?.toString(),
//       ].filter((id) => id !== undefined)
//     );

//     const uniqueCommunityIds = new Set(
//       [
//         ...descendantThreads.map((thread) => thread.community?._id?.toString()), // Use optional chaining to handle possible undefined values
//         mainThread.community?._id?.toString(),
//       ].filter((id) => id !== undefined)
//     );

//     // Recursively delete child threads and their descendants
//     await Thread.deleteMany({ _id: { $in: descendantThreadIds } });

//     // Update User model
//     await User.updateMany(
//       { _id: { $in: Array.from(uniqueAuthorIds) } },
//       { $pull: { threads: { $in: descendantThreadIds } } }
//     );

//     // Update Community model
//     await Community.updateMany(
//       { _id: { $in: Array.from(uniqueCommunityIds) } },
//       { $pull: { threads: { $in: descendantThreadIds } } }
//     );

//     revalidatePath(path);
//   } catch (error: any) {
//     throw new Error(`Failed to delete thread: ${error.message}`);
//   }
// }
