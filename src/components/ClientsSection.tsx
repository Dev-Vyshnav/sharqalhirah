// src/app/components/ClientsSection.tsx
import Image from "next/image";
import client1 from "../../public/logo_1/logo_1/logo_1_4x.webp";
import client2 from "../../public/logo_1_1/logo_1_1/logo_1_1_4x.webp";
import client3 from "../../public/cropped_iffco_logo_new_1/cropped_iffco_logo_new_1/cropped_iffco_logo_new_1_4x.webp";
import client4 from "../../public/general.jpg";
import client5 from "../../public/carrier.jpg";
import client6 from "../../public/food.jpg";
export default function ClientsSection() {
  return (
    <section className="bg-white py-16 px-4 text-center" id="clients">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
        Trusted by
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-12">
        <Image
          src={client1}
          alt="Client 1"
          width={180}
          height={60}
          className="object-contain transition"
        />
        <Image
          src={client2}
          alt="Client 2"
          width={120}
          height={60}
          className="object-contain transition"
        />
        <Image
          src={client3}
          alt="Client 3"
          width={180}
          height={120}
          className="object-contain transition"
        />
        <Image
          src={client4}
          alt="Client 3"
          width={180}
          height={120}
          className="object-contain transition"
        />
        <Image
          src={client5}
          alt="Client 3"
          width={180}
          height={120}
          className="object-contain transition"
        />
        <Image
          src={client6}
          alt="Client 3"
          width={180}
          height={120}
          className="object-contain transition"
        />
      </div>
    </section>
  );
}
