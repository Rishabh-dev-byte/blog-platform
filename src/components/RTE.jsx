import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({
  name = "content",
  control,
  label,
  defaultValue = "",
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-2 font-medium">{label}</label>
      )}

      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <Editor
            apiKey="ec62h8u63ckg7hloa1b5m6siihulaqnoq21x8htxwv4l591l" 
            value={value}
            init={{
              height: 400,
              menubar: true,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | bold italic underline forecolor | alignleft aligncenter alignright alignjustify | bullist numlist | link image | removeformat | code fullscreen | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={(content) => onChange(content)}
          />
        )}
      />
    </div>
  );
}