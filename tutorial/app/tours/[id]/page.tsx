import nightCity from "@/images/nightCity.jpg";
import Image from "next/image";

const url = "https://www.course-api.com/images/tours/tour-1.jpeg";

function page({ params }: { params: { id: "string" } }) {
  return (
    <div>
      <h1 className="text-4xl">ID : {params.id}</h1>
      <section className="flex gap--4 mt-4">
        {/* local image */}
        <div>
          <Image
            src={nightCity}
            alt="night"
            width={384}
            height={288}
            priority
            className="w-96 h-72 object-cover rounded"
          />
          <h2>local image</h2>
        </div>
        {/* remote image */}
        <div>
          <Image
            src={url}
            alt="tour"
            width={384}
            height={288}
            priority
            className="w-96 h-72 object-cover rounded"
          />
          <h2>remote image</h2>
        </div>
      </section>
    </div>
  );
}

export default page;
