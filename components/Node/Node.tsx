"use client";

import { fetchNodeById } from "@/lib/actions/node.actions";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoadSpinner from "../shared/LoadSpinner/LoadSpinner";
import { useToast } from "../ui/use-toast";

function Node() {
  const router = useRouter();
  const { toast } = useToast();
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
        const parsedResult = JSON.parse(result);

        if (parsedResult.status === 400) {
          toast({
            variant: "destructive",
            description: "Узел не найден",
            duration: 2000,
          });
          router.push("/");
          return;
        }
        setCurrentNode(parsedResult);
      };
      getNode();
    } catch (error: any) {
      console.log(error);
    }
  }, [id]);

  return (
    // console.log(currentNode),
    <section>
      {!currentNode._id && <LoadSpinner />}
      {currentNode && (
        <div>
          {currentNode?.street} {currentNode?.building}
        </div>
      )}
    </section>
  );
}

export default Node;
