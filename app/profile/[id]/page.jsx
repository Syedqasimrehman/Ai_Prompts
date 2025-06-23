import { Suspense } from "react";
import UserProfile from "@components/UserProfile";
import Loading from "../loading";
const UserProfilePage = ({ params }) => {
  return (
    <Suspense fallback={<Loading />}>
      <UserProfile params={params} />
    </Suspense>
  );
};
export default UserProfilePage;
// "use client";

// import { useEffect, useState, Suspense } from "react";
// import { useSearchParams } from "next/navigation";

// import Profile from "@components/Profile";

// const UserProfile = ({ params }) => {
//   const searchParams = useSearchParams();
//   const userName = searchParams.get("name");

//   const [userPosts, setUserPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const response = await fetch(`/api/users/${params?.id}/posts`);
//       const data = await response.json();

//       setUserPosts(data);
//     };

//     if (params?.id) fetchPosts();
//   }, [params.id]);

//   return (
//     <Suspense>
//       <Profile
//         name={userName}
//         desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
//         data={userPosts}
//       />
//     </Suspense>
//   );
// };

// export default UserProfile;
