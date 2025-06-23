import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>

      <div className="mt-10 prompt_layout">
          {data.map((posts)=>(
            <PromptCard 
            key={posts._id}
            post={posts}
            handelEdit={() => handleEdit && handleEdit(posts)}
            handelDelete={() => handleDelete && handleDelete(posts)}
            />
          ))}
          </div>
    </section>
  );
};

export default Profile;
