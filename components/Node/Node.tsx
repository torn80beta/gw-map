"use client";

import { fetchNodeById } from "@/lib/actions/node.actions";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import LoadSpinner from "../shared/LoadSpinner/LoadSpinner";

function Node() {
  const { id } = useParams();
  const [currentNode, setCurrentNode] = useState({
    _id: null,
    street: null,
    building: null,
    entrance: null,
    placement: null,
    description: null,
    tel1: null,
    comment1: null,
    tel2: null,
    comment2: null,
    gw: null,
    fibers: null,
    user: null,
    updatedAt: null,
  });

  // console.log(id);

  useEffect(() => {
    try {
      const getNode = async () => {
        const result = await fetchNodeById(id);
        setCurrentNode(JSON.parse(result));
      };
      getNode();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    // console.log(currentNode),
    <div>
      {!currentNode._id && <LoadSpinner />}
      {currentNode && currentNode?.street}
    </div>
  );
}

export default Node;
