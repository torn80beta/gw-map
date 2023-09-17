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
import { Textarea } from "@/components/ui/textarea";
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
      entrance: "",
      placement: "",
      description: "",
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 flex flex-col justify-center"
      >
        <div className="form-group-wrapper">
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

        <div className="form-group-wrapper">
          <FormField
            control={form.control}
            name="entrance"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Entrance</FormLabel>
                <FormControl>
                  <Input
                    className="form-input"
                    placeholder="1, 2..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="placement"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Placement</FormLabel>
                <FormControl>
                  <Input
                    className="form-input"
                    placeholder="Placement"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  className="form-input"
                  placeholder="Description..."
                  rows={3}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="form-group-wrapper">
          <FormField
            control={form.control}
            name="tel1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone 1</FormLabel>
                <FormControl>
                  <Input className="form-input" placeholder="0..." {...field} />
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
                  <Input className="form-input" placeholder="0..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="comment1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description to phone 1</FormLabel>
              <FormControl>
                <Input
                  className="form-input"
                  placeholder="Comment..."
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
              <FormLabel>Description to phone 2</FormLabel>
              <FormControl>
                <Input
                  className="form-input"
                  placeholder="Comment..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="form-group-wrapper">
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
                <FormLabel>Fiber</FormLabel>
                <FormControl>
                  <Input
                    className="form-input"
                    placeholder="Fiber"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default AddNodeForm;
