import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor =
    post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        if (post.featuredImage) {
          appwriteService.deleteFile(post.featuredImage);
        }
        navigate("/");
      }
    });
  };

  if (!post) {
    return (
      <div className="text-center py-10 text-sm sm:text-base">
        Loading...
      </div>
    );
  }

  return (
    <div className="py-4 sm:py-6 md:py-10">
      <Container>

        {/* IMAGE SECTION */}
        <div className="w-full flex justify-center mb-4 sm:mb-6 relative border rounded-xl p-2">
          {post.featuredImage && (
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="
                rounded-xl 
                w-full 
                max-h-[200px] sm:max-h-[300px] md:max-h-[450px]
                object-cover
              "
            />
          )}

          {/* BUTTONS */}
          {isAuthor && (
            <div className="absolute right-2 top-2 sm:right-4 sm:top-4 flex flex-col sm:flex-row gap-2">
              <Link to={`/edit-post/${post.$id}`}>
                <Button className="bg-green-500 text-xs sm:text-sm md:text-base px-2 sm:px-4 py-1 sm:py-2">
                  Edit
                </Button>
              </Link>

              <Button
                className="bg-red-500 text-xs sm:text-sm md:text-base px-2 sm:px-4 py-1 sm:py-2"
                onClick={deletePost}
              >
                Delete
              </Button>
            </div>
          )}
        </div>

        {/* TITLE */}
        <div className="w-full mb-3 sm:mb-5 md:mb-6">
          <h1 className="text-lg sm:text-xl md:text-3xl font-bold break-words leading-snug">
            {post.title}
          </h1>
        </div>

        {/* CONTENT */}
        <div className="prose max-w-none text-xs sm:text-sm md:text-base leading-relaxed overflow-x-auto">
          {parse(post.content)}
        </div>

      </Container>
    </div>
  );
}