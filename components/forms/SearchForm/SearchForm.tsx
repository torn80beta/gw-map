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
import { SearchFormValidation } from "@/lib/validations/search";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./SearchForm.scss";

interface Props {
  onSubmit: SubmitHandler<{ street: string; building: string }>;
  loading: boolean;
}

function SearchForm({ onSubmit, loading }: Props) {
  const form = useForm({
    resolver: zodResolver(SearchFormValidation),
    defaultValues: {
      street: "",
      building: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col justify-center"
      >
        <div className="flex wrap items-end justify-between gap-3">
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem>
                <FormMessage />
                <FormControl>
                  <Input
                    className="form-input"
                    placeholder="Street"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="building"
            render={({ field }) => (
              <FormItem>
                <FormMessage />
                <FormControl>
                  <Input
                    className="form-input w-24"
                    placeholder="№"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" disabled={loading}>
          {(loading && <Loader className="mr-2 h-4 w-4 animate-spin" />) ||
            "Search"}
        </Button>
      </form>
    </Form>
  );
}

export default SearchForm;
