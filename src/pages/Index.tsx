import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { farmCategories, farmItems } from "@/data/farmData";
import heroImage from "@/assets/hero-farm.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">

        <img
          src={heroImage}
          alt="Farm"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-4 max-w-3xl"
        >

          {/* Only text (logo removed) */}
          <h1 className="font-display text-5xl md:text-6xl font-bold text-background mb-6">
            FarmLearn
          </h1>

          <p className="text-lg md:text-xl text-background/90 mb-8 font-body">
            Your complete guide to farming — from scratch to harvest.
            Learn to grow vegetables, fruits, flowers, trees & raise animals.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">

            <Link
              to="/login"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors text-sm"
            >
              Get Started Free
            </Link>

            <Link
              to="/about"
              className="px-8 py-3 bg-background/20 backdrop-blur text-background border border-background/30 rounded-xl font-semibold hover:bg-background/30 transition-colors text-sm"
            >
              Learn More
            </Link>

          </div>

        </motion.div>

      </div>



      {/* Categories Section */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >

          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Everything You Need to Farm
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore all farming categories
          </p>

        </motion.div>



        {/* CATEGORY CARDS */}

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">

          {farmCategories.map((cat, i) => {

            const count = farmItems.filter(
              (item) => item.category === cat.id
            ).length;

            return (

              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >

                <Link
                  to="/login"
                  className="farm-card text-center block"
                >

                  {/* IMAGE FROM ASSETS */}
                  <div className="mb-3">

                    <img
                      src={cat.image}
                      alt={cat.label}
                      className="w-16 h-16 mx-auto object-contain"
                    />

                  </div>


                  <h3 className="font-display text-lg font-bold text-foreground">

                    {cat.label}

                  </h3>


                  <p className="text-xs text-muted-foreground mt-1">

                    {count} items

                  </p>


                </Link>

              </motion.div>

            );

          })}

        </div>



        {/* FARM ITEMS PREVIEW */}


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">

          {farmItems.slice(0, 8).map((item, i) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >

              <Link
                to="/login"
                className="farm-card block overflow-hidden group"
              >

                <div className="relative h-36 -mx-6 -mt-6 mb-3 overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                </div>


                <h4 className="font-display font-bold text-foreground">

                  {item.name}

                </h4>


                <p className="text-xs text-muted-foreground">

                  {item.season} · {item.duration}

                </p>


              </Link>

            </motion.div>

          ))}

        </div>



        {/* BUTTON */}


        <div className="text-center mt-10">

          <Link
            to="/login"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors text-sm"
          >

            Sign Up to Explore All

            <ArrowRight className="h-4 w-4" />

          </Link>

        </div>



      </section>


    </div>
  );

};

export default Index;