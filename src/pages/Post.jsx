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
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="py-6 sm:py-8">
      <Container>
        
        {/* Image Section */}
        <div className="w-full flex justify-center mb-4 sm:mb-6 relative border rounded-xl p-2">
          {post.featuredImage && (
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-xl w-full max-h-[300px] sm:max-h-[400px] object-cover"
            />
          )}

          {/* Buttons */}
          {isAuthor && (
            <div className="absolute right-2 top-2 sm:right-6 sm:top-6 flex gap-2">
              <Link to={`/edit-post/${post.$id}`}>
                <Button className="bg-green-500 text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-2">
                  Edit
                </Button>
              </Link>
              <Button
                className="bg-red-500 text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-2"
                onClick={deletePost}
              >
                Delete
              </Button>
            </div>
          )}
        </div>

        {/* Title */}
        <div className="w-full mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold break-words">
            {post.title}
          </h1>
        </div>

        {/* Content */}
        <div className="prose max-w-none text-sm sm:text-base leading-relaxed">
          {parse(post.content)}
        </div>
      </Container>
    </div>
  );
}