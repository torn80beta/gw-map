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
import { addNode, updateNode } from "@/lib/actions/node.actions";
import { usePathname, useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Loader } from "lucide-react";
import { useState } from "react";

interface Props {
  userName: string;
  node: {
    _id: string;
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
    updatedAt: string;
  } | null;
  setIsEdit: any;
  isEdit: boolean;
}

function AddNodeForm({ userName, node, setIsEdit, isEdit }: Props) {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const pathName = usePathname();

  const form = useForm({
    resolver: zodResolver(NodeValidation),
    defaultValues: {
      street: node?.street || "",
      building: node?.building || "",
      entrance: node?.entrance || "",
      placement: node?.placement || "",
      description: node?.description || "",
      tel1: node?.tel1 || "",
      comment1: node?.comment1 || "",
      tel2: node?.tel2 || "",
      comment2: node?.comment2 || "",
      gw: node?.gw || "",
      fibers: node?.fibers || "",
    },
  });

  const onSubmit = async (values: z.infer<typeof NodeValidation>) => {
    setIsLoading(true);
    console.log("Adding new node");

    setTimeout(
      async () =>
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
            setIsLoading(false);
            return null;
          }
          const result = JSON.parse(res);
          if (result.status === 201) {
            toast({
              description: "Адрес добавлен.",
              duration: 800,
            });
            form.reset();
            setIsLoading(false);
            // console.log(result);
            router.push(`/node/${result._id}`);
          } else if (result.status === 409) {
            toast({
              variant: "destructive",
              description: "Такой адрес уже существует.",
              duration: 2000,
            });
            setIsLoading(false);
          }
        }),
      500
    );
  };

  const onEdit = async (values: z.infer<typeof NodeValidation>) => {
    setIsLoading(true);

    try {
      const response = await updateNode({
        id: node?._id,
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
      });

      const result = JSON.parse(response);
      if (result.status === 204) {
        toast({
          description: "Адрес обновлен.",
          duration: 800,
        });

        setIsEdit(false);
        setIsLoading(false);
        router.push(`/node/${result._id}`);
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: "Ooops, semething went wrong ¯_(ツ)_/¯",
        duration: 2000,
      });
      console.log(error.message);
      throw error;
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(
          pathName.includes("add") ? onSubmit : onEdit
        )}
        className="space-y-3 sm:p-6 sm:rounded-md flex flex-col justify-center sm:shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
      >
        <div className="form-group-wrapper">
          <div className="w-full">
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem>
                  {isEdit && <FormLabel>Street *</FormLabel>}
                  <FormControl>
                    <Input
                      className="form-input w-full"
                      placeholder="Street"
                      {...field}
                      disabled={!isEdit}
                    />
                  </FormControl>
                  {/* <FormDescription>
              </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="building"
            render={({ field }) => (
              <FormItem>
                {isEdit && <FormLabel>Building *</FormLabel>}
                <FormControl>
                  <Input
                    className="form-input w-24 sm:w-[180px] md:w-[225px]"
                    placeholder="№"
                    {...field}
                    disabled={!isEdit}
                  />
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
                {isEdit && <FormLabel>Entrance *</FormLabel>}
                <FormControl>
                  <Input
                    className="form-input"
                    placeholder="1, 2..."
                    {...field}
                    disabled={!isEdit}
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
                {isEdit && <FormLabel>Placement *</FormLabel>}
                <Select
                  onValueChange={field.onChange}
                  defaultValue={
                    node?.placement === "" ? field.value : node?.placement
                  }
                  disabled={!isEdit}
                >
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
                {isEdit && <FormLabel>GW *</FormLabel>}
                <Select
                  onValueChange={field.onChange}
                  defaultValue={node?.gw === "" ? field.value : node?.gw}
                  disabled={!isEdit}
                >
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
                {isEdit && <FormLabel>Fiber</FormLabel>}
                <FormControl>
                  <Input
                    className="form-input"
                    placeholder="Fiber"
                    {...field}
                    disabled={!isEdit}
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
              {isEdit && <FormLabel>Description</FormLabel>}
              <FormControl>
                <Textarea
                  className="form-input"
                  placeholder="Description..."
                  rows={3}
                  {...field}
                  disabled={!isEdit}
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
                  <Input
                    className="form-input"
                    placeholder="0..."
                    {...field}
                    disabled={!isEdit}
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
                    placeholder="0..."
                    {...field}
                    disabled={!isEdit}
                  />
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
                  placeholder="Description..."
                  {...field}
                  disabled={!isEdit}
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
                  placeholder="Description..."
                  {...field}
                  disabled={!isEdit}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading}>
          {(isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />) ||
            "Submit"}
        </Button>
      </form>
    </Form>
  );
}

export default AddNodeForm;
