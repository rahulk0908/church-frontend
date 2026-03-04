import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fetchPosts } from "@/sanity/sanityApi";
type Post = {
  tag: string;
  headline: string;
  description: string;
  date: string;
};

const PostsSection = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  return (
    <section className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-body text-sm tracking-[0.2em] uppercase">
            Latest News
          </span>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            Church Posts
          </h2>

          <div className="w-16 h-1 bg-gradient-gold mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {posts.map((post, index) => (
            <motion.article
              key={post.headline}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border overflow-hidden group hover:shadow-elegant hover:border-secondary/30 transition-all cursor-pointer"
            >
              <div className="p-6">
                <span className="inline-block text-xs font-body font-semibold tracking-wider uppercase bg-secondary/10 text-secondary px-3 py-1 rounded-full mb-3">
                  {post.tag}
                </span>

                <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {post.headline}
                </h3>

                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                  {post.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground font-body text-xs">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostsSection;
