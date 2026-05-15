import { createClient } from "@supabase/supabase-js";

const bucket = "decora-bucket";

const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string,
);

export const uploadImage = async (image: File) => {
  console.log("triggered");
  const timeStamp = Date.now();
  const newName = `${timeStamp}-${image.name}`;
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(newName, image, { cacheControl: "3600" });
  console.log(data);
  console.log("error", error);
  console.log("error", error?.message);
  if (!data) throw new Error("Image upload failed");
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};
