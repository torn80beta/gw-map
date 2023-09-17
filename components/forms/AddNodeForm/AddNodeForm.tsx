"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NodeValidation } from "@/lib/validations/node";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import "./AddNodeForm.scss";

interface Props {
  userName: string;
}

function AddNodeForm({ userName }: Props) {
  const form = useForm({
    resolver: zodResolver(NodeValidation),
    defaultValues: {
      street: "",
      building: "",
      tel1: "",
      comment1: "",
      tel2: "",
      comment2: "",
      gw: 0,
      fibers: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof NodeValidation>) => {
    console.log("UserName: " + userName);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex row gap-4">
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Street</FormLabel>
                <FormControl>
                  <Input
                    className="form-input"
                    placeholder="Street"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="building"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Building</FormLabel>
                <FormControl>
                  <Input className="form-input" placeholder="№" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="tel1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone 1</FormLabel>
              <FormControl>
                <Input
                  className="form-input"
                  placeholder="Phone..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="comment1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comment</FormLabel>
              <FormControl>
                <Input
                  className="form-input"
                  placeholder="Comment"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tel2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone 2</FormLabel>
              <FormControl>
                <Input
                  className="form-input"
                  placeholder="Phone..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="comment2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comment</FormLabel>
              <FormControl>
                <Input
                  className="form-input"
                  placeholder="Comment"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="gw"
          render={({ field }) => (
            <FormItem>
              <FormLabel>GW</FormLabel>
              <FormControl>
                <Input className="form-input" placeholder="gw" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="fibers"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fibers</FormLabel>
              <FormControl>
                <Input className="form-input" placeholder="Fibers" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default AddNodeForm;
