import * as z from "zod";

export const NodeValidation = z.object({
  street: z.string().max(30, { message: "30 characters max." }).nonempty(),
  building: z.string().max(10, { message: "10 characters max." }).nonempty(),
  tel1: z.string().max(13, { message: "13 characters max." }),
  comment1: z.string().max(200, { message: "200 characters max." }).nonempty(),
  tel2: z.string().max(13, { message: "13 characters max." }),
  comment2: z.string().max(200, { message: "200 characters max." }),
  gw: z.number({
    required_error: "Required field",
    invalid_type_error: "Must be a number",
  }),
  fibers: z.string(),
  // user: z.string().nonempty(),
});
