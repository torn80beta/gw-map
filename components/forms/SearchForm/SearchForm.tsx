"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { SearchFormValidation } from "@/lib/validations/search";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import "./SearchForm.scss";
import { searchNode } from "@/lib/actions/node.actions";
import { error } from "console";

function SearchForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [nodes, setNodes] = useState([]);

  const form = useForm({
    resolver: zodResolver(SearchFormValidation),
    defaultValues: {
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
    },
  });

  const onSubmit = async (values: z.infer<typeof SearchFormValidation>) => {
    setIsLoading(true);
    const result = await searchNode(values)
      .then((res) => {
        if (!res) {
          setIsLoading(false);
          return null;
        }
        const nodes = JSON.parse(res);
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
          console.log(nodes);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 flex flex-col justify-center"
      >
        <div className="flex wrap items-end justify-between gap-3">
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="form-input"
                    placeholder="Street"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="building"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="form-input w-24"
                    placeholder="№"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" disabled={isLoading}>
          {(isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />) ||
            "Search"}
        </Button>
      </form>
    </Form>
  );
}

export default SearchForm;
