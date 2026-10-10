import React from 'react';
import { Package } from 'lucide-react';

const Products = () => {
  // Add products here as { name, description, features: [...], link? }
  const products = [];

  return (
    <section className="w-full bg-white py-16 lg:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
            Products
          </h2>
        </div>

        {products.length === 0 ? (
          <div className="text-center">
            <div className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto">
              <Package className="h-10 w-10 text-primary mx-auto mb-4" />
              <p className="text-secondary">
                Products developed at SPrInG Labs will be listed here soon.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
              >
                <div className="text-primary mb-4">
                  <Package className="h-8 w-8" />
                </div>

                <h3 className="text-xl font-semibold text-dark mb-3">
                  {product.name}
                </h3>

                <p className="text-secondary leading-relaxed mb-4">
                  {product.description}
                </p>

                {product.features && (
                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-secondary">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                )}

                {product.link && (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Learn more ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
