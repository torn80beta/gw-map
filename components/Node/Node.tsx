"use client";

import { fetchNodeById } from "@/lib/actions/node.actions";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoadSpinner from "../shared/LoadSpinner/LoadSpinner";
import { useToast } from "../ui/use-toast";
import AddNodeForm from "../forms/AddNodeForm/AddNodeForm";
import { formatDateString } from "@/lib/helpers/formatDate";

interface Props {
  userName: string;
}

function Node({ userName }: Props) {
  const router = useRouter();
  const { toast } = useToast();
  const { id } = useParams();

  const [currentNode, setCurrentNode] = useState({
    _id: "",
    street: "",
    building: "",
    entrance: "",
    placement: "",
    description: "",
    tel1: "",
    comment1: "",
    tel2: "",
    comment2: "",
    gw: "",
    fibers: "",
    user: "",
    updatedAt: "",
  });

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
      {currentNode._id && (
        <>
          <p>
            Обновил{" "}
            {`${currentNode.user} ${formatDateString(currentNode.updatedAt)}`}
          </p>
          <AddNodeForm
            userName={userName || "unknown user"}
            node={currentNode}
          />
        </>
      )}
    </section>
  );
}

export default Node;
