import * as z from "zod";

export const NodeValidation = z.object({
  street: z.string().max(30, { message: "30 characters max." }).nonempty(),
  building: z.string().max(10, { message: "10 characters max." }).nonempty(),
  entrance: z.string().max(15, { message: "10 characters max." }).nonempty(),
  placement: z.string().nonempty(),
  description: z.string().max(200, { message: "200 characters max." }),
  tel1: z.string().max(10, { message: "10 characters max." }),
  tel2: z.string().max(10, { message: "10 characters max." }),
  comment1: z.string().max(200, { message: "200 characters max." }),
  comment2: z.string().max(200, { message: "200 characters max." }),
  gw: z.number({
    required_error: "Required field",
    invalid_type_error: "Must be a number",
  }),
  fibers: z.string(),
});
