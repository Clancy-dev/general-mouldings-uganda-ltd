import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// This would typically come from an API or CMS
const featuredProducts = [
  { id: 1, name: '20 litre Jerricans', image: '/yellow1.png?height=800&width=600' },
  { id: 2, name: 'Plastic Water Bottles', image: '/plastic.png?height=800&width=600' },
  { id: 3, name: 'Plastic Water Bottles', image: '/plastic2.png?height=800&width=600' },
  { id: 4, name: ' 5 litre Can', image: '/can.png?height=800&width=600' },
  { id: 5, name: '10 litre Jerrican', image: '/10 litre jerrican.png?height=800&width=600' },
  { id: 6, name: '10 litre Jerrican', image: '/small jerrican.png?height=800&width=600' },
]

export default function FeaturedProductsSection() {
  return (
    <section className="relative py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12  text-green-800 new-font">Explore Our Product Range</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Link 
        href="/products" 
        className="absolute bottom-8 left-8 inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
      >
        View All Products
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </section>
  )
}

function ProductCard({ product }: { product: { id: number; name: string; image: string } }) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <Image
        src={product.image}
        alt={product.name}
        width={600}
        height={800}
        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {product.name}
      </h3>
    </div>
  )
}

