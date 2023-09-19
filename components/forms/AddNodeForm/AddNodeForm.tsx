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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { gwList } from "@/constants";
import { addNode } from "@/lib/actions/node.actions";
import { usePathname, useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

interface Props {
  userName: string;
}

function AddNodeForm({ userName }: Props) {
  const pathName = usePathname();
  const router = useRouter();
  const { toast } = useToast();

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
      gw: "",
      fibers: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof NodeValidation>) => {
    // console.log(values);
    await addNode({
      street: values.street,
      building: values.building,
      entrance: values.entrance,
      placement: values.placement,
      description: values.description,
      tel1: values.tel1,
      comment1: values.comment1,
      tel2: values.tel2,
      comment2: values.comment2,
      gw: values.gw,
      fibers: values.fibers,
      user: userName,
      path: pathName,
    }).then((res) => {
      if (!res) {
        return null;
      }
      if (JSON.parse(res).status === 201) {
        toast({
          description: "Адрес добавлен.",
          duration: 800,
        });
        // console.log(JSON.parse(res));
        form.reset();
      } else if (JSON.parse(res).status === 409) {
        toast({
          variant: "destructive",
          description: "Такой адрес уже существует.",
          duration: 2000,
        });
      }
    });

    // router.push("/");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 flex flex-col justify-center"
      >
        <div className="form-group-wrapper">
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Street *</FormLabel>
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
                <FormLabel>Building *</FormLabel>
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
                <FormLabel>Entrance *</FormLabel>
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
              <FormItem className="grow">
                <FormLabel>Placement *</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="md:w-[225px] form-input">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Крыша">Крыша</SelectItem>
                    <SelectItem value="Подъезд">Подъезд</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="form-group-wrapper">
          <FormField
            control={form.control}
            name="gw"
            render={({ field }) => (
              <FormItem className="grow">
                <FormLabel>GW *</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="md:w-[225px] form-input">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {gwList.map((i) => (
                      <SelectItem
                        key={i.gw}
                        value={`${i.gw}`}
                      >{`${i.gw}`}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default AddNodeForm;
