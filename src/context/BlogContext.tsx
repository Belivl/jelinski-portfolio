import { createContext, useContext, type ReactNode } from "react";

interface BlogContextType {
  postId: string;
}

const BlogContext = createContext<BlogContextType | null>(null);

export function BlogProvider({
  postId,
  children,
}: {
  postId: string;
  children: ReactNode;
}) {
  return (
    <BlogContext.Provider value={{ postId }}>{children}</BlogContext.Provider>
  );
}

export function useBlogContext() {
  const context = useContext(BlogContext);
  return context;
}
