import { defineType, defineField, defineArrayMember } from 'sanity';

export const blogEntry = defineType({
  type: "document",
  name: "blogEntry",
  title: "blog_entry",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "date",
      name: "date",
      title: "Date",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "array",
      name: "content",
      title: "Content",
      validation: (e) => e.required(),
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({ type: "image", name: "img", title: "img" }),
  ],
});



