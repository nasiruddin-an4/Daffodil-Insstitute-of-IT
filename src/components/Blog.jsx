import { Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with React',
      excerpt: 'Learn the basics of React and start building modern web applications.',
      date: '2024-02-20',
      image: 'https://picsum.photos/400/250?random=10',
      category: 'Development'
    },
    {
      id: 2,
      title: 'Mastering Tailwind CSS',
      excerpt: 'Discover advanced techniques for building beautiful interfaces with Tailwind CSS.',
      date: '2024-02-19',
      image: 'https://picsum.photos/400/250?random=11',
      category: 'Design'
    },
    {
      id: 3,
      title: 'Web Performance Tips',
      excerpt: 'Essential tips for optimizing your web application performance.',
      date: '2024-02-18',
      image: 'https://picsum.photos/400/250?random=12',
      category: 'Performance'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Latest Blog Posts</h2>
          <a href="/blog" className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
            View all posts <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                <h3 className="mt-2 text-xl font-semibold">
                  <a href={`/blog/${post.id}`} className="hover:text-blue-600">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-2 text-gray-600">{post.excerpt}</p>
                <div className="mt-4 flex items-center text-gray-500 text-sm">
                  <Clock className="h-4 w-4 mr-2" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;