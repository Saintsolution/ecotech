interface ProductCardProps {
  name: string;
  image: string;
  specs: string[];
  price: string;
  category: "ar" | "diesel";
}

const ProductCard = ({ name, image, specs, price }: ProductCardProps) => (
  <div className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
    <div className="flex items-center justify-center bg-muted p-8">
      <img src={image} alt={name} className="h-48 w-auto object-contain transition-transform group-hover:scale-105" />
    </div>
    <div className="p-6">
      <h3 className="mb-3 font-heading text-xl font-bold text-foreground">{name}</h3>
      <ul className="mb-4 space-y-1">
        {specs.map((s, i) => (
          <li key={i} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {s}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <span className="font-heading text-2xl font-bold text-primary">{price}</span>
        <button className="rounded-full bg-primary px-5 py-2 font-heading text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent">
          Comprar Agora
        </button>
      </div>
    </div>
  </div>
);

export default ProductCard;
