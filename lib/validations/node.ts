import * as z from "zod";

export const NodeValidation = z.object({
  street: z
    .string()
    .trim()
    .toLowerCase()
    .max(30, { message: "30 characters max." })
    .nonempty({ message: "Required" }),
  building: z
    .string()
    .trim()
    .toLowerCase()
    .max(10, { message: "10 characters max." })
    .nonempty({ message: "Required" }),
  entrance: z
    .string()
    .trim()
    .max(15, { message: "10 characters max." })
    .nonempty({ message: "Required" }),
  placement: z.string().nonempty({ message: "Choose placement" }),
  description: z.string().trim().max(200, { message: "200 characters max." }),
  tel1: z.string().trim().max(10, { message: "10 characters max." }),
  tel2: z.string().trim().max(10, { message: "10 characters max." }),
  comment1: z.string().trim().max(200, { message: "200 characters max." }),
  comment2: z.string().trim().max(200, { message: "200 characters max." }),
  gw: z.string().nonempty({ message: "Choose GW" }),
  fibers: z.string().trim(),
});
