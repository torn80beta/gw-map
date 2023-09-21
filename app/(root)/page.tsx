"use client";

import "./page.scss";
import SearchForm from "@/components/forms/SearchForm/SearchForm";
import { useState } from "react";
import { SearchFormValidation } from "@/lib/validations/search";
import { useToast } from "@/components/ui/use-toast";
import * as z from "zod";
import { searchNode } from "@/lib/actions/node.actions";

interface INodes {
  _id: string;
  street: string;
  building: string;
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [nodes, setNodes] = useState<INodes[] | null>(null);
  const { toast } = useToast();

  const onSearch = async (values: z.infer<typeof SearchFormValidation>) => {
    setIsLoading(true);

    try {
      const result = await searchNode(values);
      if (!result) {
        setIsLoading(false);
        return null;
      }
      const nodes = JSON.parse(result);
      setIsLoading(false);
      if (nodes.length === 0) {
        toast({
          variant: "destructive",
          description: "Адрес не найден.",
          duration: 1200,
        });
        return;
      } else {
        setNodes(nodes);
        // console.log(nodes);
        const message =
          nodes.length > 1
            ? `Найдено ${nodes.length} адреса.`
            : `Найден ${nodes.length} адрес.`;
        toast({
          description: `${message}`,
          duration: 1200,
        });
      }
    } catch (error: any) {
      setIsLoading(false);
      toast({
        variant: "destructive",
        description: "Ooops, semething went wrong ¯_(ツ)_/¯",
        duration: 2000,
      });
      // console.log(error);
    }
  };

  return (
    <main className="page-container min-w-fit ">
      <ul className="w-full">
        {nodes?.map((node) => (
          <li key={node._id} className="border-b-2 hover:bg-green-200">
            <a
              href={`node/${node._id}`}
              className="flex row justify-between p-2"
            >
              <div className="">{node.street}</div>
              <div className="">{node.building}</div>
            </a>
          </li>
        ))}
      </ul>

      <SearchForm onSubmit={onSearch} loading={isLoading} />
    </main>
  );
}
