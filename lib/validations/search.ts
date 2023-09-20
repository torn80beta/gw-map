import * as z from "zod";

export const SearchFormValidation = z.object({
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
});
