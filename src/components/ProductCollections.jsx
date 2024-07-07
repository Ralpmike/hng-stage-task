import { productsCollections } from "../products";

export default function ProductCollections() {
  return (
    <div className="px-5">
      <div>
        <h2 className="sub-h2-style text-center">
          Browse Through Our Collections
        </h2>
        <p className="p-caption-style text-center mt-3 max-w-[500px] mx-auto md:mx-0 md:max-w-full">
          We have different categories of Eco-friendly products to cater and
          suit every of your needs and wants.
        </p>
      </div>

      <div>
        <div className="grid grid-rows-subgrid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center py-12 gap-y-12">
          {productsCollections.map((product) => (
            <ProductCollectionCard
              key={product.id}
              text={product.text}
              product={product.product}
              image={product?.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductCollectionCard({ product, text, image }) {
  return (
    <div className="relative cursor-pointer transition-all ease-in group group-hover:rounded-lg max-w-[326px] max-h-[243px] hover:rounded-lg   ">
      <div className="grid relative mb-3 rounded-[12px] hover:rounded-[12px] border-[1px] p-3 border-[rgba(0,0,0,12%)]">
        <img
          src={image}
          alt={product}
          className="w-full max-w-[302px] max-h-[184px] object-cover"
        />
        <div className="absolute max-w-[302px] max-h-[184px] group-hover:rounded-lg inset-[11.5px] hover:rounded-sm bg-[#00000099] opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
      </div>
      <p className="font-krub-font leading-5 text-[#F9F2E1] font-medium text-[1rem] max-w-[278px] absolute left-6 top-7  opacity-0 group-hover:opacity-100  transition-opacity duration-30">
        {text}
      </p>
      <h3 className="text-[1.25rem] font-krub-font  max-w-[318px] leading-5 ">
        {product}
      </h3>
    </div>
  );
}
